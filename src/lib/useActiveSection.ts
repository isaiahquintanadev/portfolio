"use client";

import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;

      if (window.scrollY < 80) {
        setActive((current) => (current === null ? current : null));
        return;
      }

      const scrollBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;

      if (scrollBottom) {
        const last = ids[ids.length - 1];
        setActive((current) => (current === last ? current : last));
        return;
      }

      let currentSection = ids[0];

      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (rect.top <= 128) {
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
  }, [ids]);

  return active;
}
