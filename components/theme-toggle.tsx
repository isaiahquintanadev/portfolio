"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeToggle() {
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Icono principal */}
      <button
        onClick={() => setOpen(!open)}
        className="p-1  border-white/10 hover:bg-white/10 transition"
      >
        <Monitor size={18} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-xl border border-white/10 bg-black/80 backdrop-blur-md p-2 shadow-lg">
          <button
            onClick={() => {
              setTheme("light");
              setOpen(false);
            }}
            className="flex items-center gap-2 w-full px-3 py-2 rounded-md hover:bg-white/10 transition"
          >
            <Sun size={16} />
            Claro
          </button>

          <button
            onClick={() => {
              setTheme("dark");
              setOpen(false);
            }}
            className="flex items-center gap-2 w-full px-3 py-2 rounded-md hover:bg-white/10 transition"
          >
            <Moon size={16} />
            Oscuro
          </button>

          <button
            onClick={() => {
              setTheme("system");
              setOpen(false);
            }}
            className="flex items-center gap-2 w-full px-3 py-2 rounded-md hover:bg-white/10 transition"
          >
            <Monitor size={16} />
            Sistema
          </button>
        </div>
      )}
    </div>
  );
}
