"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const toggle = () => {
      frame = 0;
      setVisible(window.scrollY > 520);
    };

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(toggle);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
      }}
      className="fixed bottom-5 right-5 z-40 hidden h-11 w-11 items-center justify-center rounded-[10px] border border-white/20 bg-[#151e32] text-[#f5f5fa] shadow-lg transition-colors hover:border-[#c4b5fd] hover:text-[#c4b5fd] md:flex"
      aria-label="Volver al inicio"
    >
      <ArrowUp size={18} aria-hidden="true" />
    </button>
  );
}
