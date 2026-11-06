"use client";

import { useEffect, useRef, useState } from "react";
import { scenes } from "@/config/scenes";
import "@photo-sphere-viewer/core/index.css";
import "@photo-sphere-viewer/markers-plugin/index.css";
import "@photo-sphere-viewer/virtual-tour-plugin/index.css";

type ViewerInstance = import("@photo-sphere-viewer/core").Viewer;
type AutorotatePluginInstance = import("@photo-sphere-viewer/autorotate-plugin").AutorotatePlugin;

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export default function PanoramaViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<ViewerInstance | null>(null);
  const autorotateRef = useRef<AutorotatePluginInstance | null>(null);
  // Lazy initializer: safe because this component only ever mounts client-side (ssr: false).
  const [status, setStatus] = useState<"loading" | "ready" | "unsupported" | "error">(() =>
    hasWebGL() ? "loading" : "unsupported"
  );

  useEffect(() => {
    if (!containerRef.current || !hasWebGL()) return;

    let disposed = false;

    async function init() {
      const [{ Viewer }, { MarkersPlugin }, { VirtualTourPlugin }, { AutorotatePlugin }] = await Promise.all([
        import("@photo-sphere-viewer/core"),
        import("@photo-sphere-viewer/markers-plugin"),
        import("@photo-sphere-viewer/virtual-tour-plugin"),
        import("@photo-sphere-viewer/autorotate-plugin"),
      ]);

      if (disposed || !containerRef.current) return;

      const nodes = scenes.map((scene) => ({
        id: scene.id,
        panorama: scene.panoramaSrc,
        thumbnail: scene.previewSrc,
        name: scene.name,
        links: scene.links.map((link) => ({
          nodeId: link.toSceneId,
          position: { yaw: link.yaw, pitch: link.pitch },
          caption: link.label,
        })),
      }));

      const viewer = new Viewer({
        container: containerRef.current,
        defaultZoomLvl: 0,
        mousewheel: false,
        navbar: false,
        plugins: [
          MarkersPlugin,
          [
            AutorotatePlugin,
            {
              autostartDelay: 1200,
              autostartOnIdle: false,
              autorotateSpeed: "0.6rpm",
            },
          ],
          [
            VirtualTourPlugin,
            {
              positionMode: "manual",
              renderMode: "3d",
              nodes,
              startNodeId: scenes[0].id,
              transitionOptions: { showLoader: true, speed: "20rpm", effect: "fade", rotation: true },
              // Our links all sit at pitch: 0 (straight ahead, eye level), but the default
              // minPitch (0.3 rad, ~17°) clamps arrows upward away from that, so they render
              // off from where you'd naturally look — only clickable by chance. Widen the
              // range to include pitch 0.
              arrowsPosition: { minPitch: -0.4, maxPitch: Math.PI / 2 },
              arrowStyle: { size: { width: 96, height: 96 } },
            },
          ],
        ],
      });

      viewerRef.current = viewer;
      autorotateRef.current = viewer.getPlugin(AutorotatePlugin) as InstanceType<typeof AutorotatePlugin>;

      viewer.addEventListener(
        "ready",
        () => {
          if (!disposed) setStatus("ready");
        },
        { once: true }
      );

      viewer.addEventListener("click", () => {
        autorotateRef.current?.stop();
      });
    }

    init().catch((err) => {
      console.error("Failed to initialize panorama viewer", err);
      if (!disposed) setStatus("error");
    });

    return () => {
      disposed = true;
      viewerRef.current?.destroy();
      viewerRef.current = null;
      autorotateRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    // Auto-rotate keeps the WebGL scene rendering every frame, which is the main source
    // of scroll jank around this section: the active render competes with the browser's
    // scroll compositor for the same frame budget. Stop it the instant scrolling starts
    // (not just once fully offscreen) so the render loop is idle for the whole transition.
    const stopOnScroll = () => autorotateRef.current?.stop();
    window.addEventListener("scroll", stopOnScroll, { passive: true, once: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          autorotateRef.current?.stop();
        }
      },
      { threshold: 0 }
    );

    observer.observe(containerRef.current);
    return () => {
      window.removeEventListener("scroll", stopOnScroll);
      observer.disconnect();
    };
  }, []);

  if (status === "unsupported" || status === "error") {
    const fallbackScene = scenes[0];
    return (
      <div className="relative h-full w-full overflow-hidden bg-charcoal">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={fallbackScene.panoramaSrc}
          alt="Panoramic interior view of J&K Salon reception area"
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-charcoal">
      {status === "loading" && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center"
          style={{
            backgroundImage: `url(${scenes[0].previewSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-live="polite"
        >
          <div className="rounded-full bg-black/40 px-4 py-2 text-sm text-white backdrop-blur">
            Loading 360° view…
          </div>
        </div>
      )}

      <div ref={containerRef} className="h-full w-full" />
    </div>
  );
}
