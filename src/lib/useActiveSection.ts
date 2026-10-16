"use client";

import { useEffect, useState } from "react";

export function useActiveSection(ids: string[], enabled = true) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;

      // El mismo margen que utiliza el navegador al navegar a un ancla.
      // Un píxel de tolerancia evita diferencias por redondeo del scroll.
      const activationTop =
        (Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0) + 1;

      const scrollBottom =
        window.scrollY > 0 &&
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1;

      if (scrollBottom) {
        const last = ids[ids.length - 1];
        setActive((current) => (current === last ? current : last));
        return;
      }

      let currentSection: string | null = null;

      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (rect.top <= activationTop) {
          currentSection = id;
        }
      }

      setActive((current) =>
        current === currentSection ? current : currentSection,
      );
    };

    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [ids, enabled]);

  return active;
}
