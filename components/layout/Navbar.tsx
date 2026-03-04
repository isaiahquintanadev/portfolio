import ThemeToggle from "@/components/theme-toggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <span className="font-semibold tracking-tight">Isaiah</span>

        <div className="flex gap-8 text-sm text-foreground/70">
          <a href="#about" className="hover:text-foreground transition">
            Sobre mí
          </a>

          <a href="#experience" className="hover:text-foreground transition">
            Experiencia
          </a>

          <a href="#tech" className="hover:text-foreground transition">
            Tecnologías
          </a>

          <a href="#projects" className="hover:text-foreground transition">
            Proyectos
          </a>

          <a href="#contact" className="hover:text-foreground transition">
            Contacto
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
