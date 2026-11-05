"use client";

import dynamic from "next/dynamic";

const PanoramaViewer = dynamic(() => import("./PanoramaViewer"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-charcoal" />,
});

export default function PanoramaViewerClient() {
  return <PanoramaViewer />;
}
