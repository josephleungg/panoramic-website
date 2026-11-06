"use client";

import { useRef, type ElementType, type Ref } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

export function RevealText({
  children,
  as: Tag = "span",
  className,
}: {
  children: string;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const split = SplitText.create(ref.current, { type: "words", aria: "auto" });

      gsap.from(split.words, {
        autoAlpha: 0,
        y: "0.6em",
        stagger: 0.045,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 88%",
          once: true,
        },
      });

      return () => split.revert();
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref as Ref<HTMLElement>} className={className}>
      {children}
    </Tag>
  );
}
