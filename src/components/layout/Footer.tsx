export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-foreground/50">
        © {new Date().getFullYear()} Isaiah — Todos los derechos reservados
      </div>
    </footer>
  );
}
