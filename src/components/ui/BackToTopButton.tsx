"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let frame = 0;

    const toggle = () => {
      frame = 0;
      setVisible((current) => {
        const next = window.scrollY > 520;
        return current === next ? current : next;
      });
    };

    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(toggle);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          transition={{ duration: 0.2 }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: reduceMotion ? "auto" : "smooth",
            })
          }
          className="fixed bottom-5 right-5 z-40 hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/75 text-white shadow-lg shadow-black/20 backdrop-blur-md transition-colors hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-white/35 md:flex"
          aria-label="Volver al inicio"
        >
          <ArrowUp size={18} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
