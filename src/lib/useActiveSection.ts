"use client";

import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // ARRIBA DEL TODO
      if (window.scrollY < 80) {
        setActive(null);
        return;
      }

      // FINAL DE PÁGINA
      const scrollBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;

      if (scrollBottom) {
        setActive(ids[ids.length - 1]);
        return;
      }

      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 120) {
          current = id;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids]);

  return active;
}
