const steps = [
  { title: "Entender tu proyecto", description: "Hablamos de tu negocio, tus usuarios y lo que necesitas resolver. A partir de ahí, concretamos alcance y prioridades." },
  { title: "Dar forma a la solución", description: "Organizo el contenido y los recorridos de uso. El diseño y las decisiones técnicas parten de tus objetivos." },
  { title: "Desarrollar y revisar", description: "Construyo la web o aplicación y revisamos su funcionamiento, con atención a móvil, accesibilidad y rendimiento." },
  { title: "Preparar la entrega", description: "Comprobamos los detalles de publicación y cómo utilizar la solución. Acordamos los siguientes pasos para su evolución." },
];

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="section-shell">
      <div className="site-container">
        <div className="max-w-2xl">
          <h2 id="process-title" className="section-title">Un proceso claro, de la idea a la entrega.</h2>
          <p className="mt-5 leading-8 text-muted">No necesitas tenerlo todo resuelto para empezar. Mi trabajo también consiste en ayudarte a concretarlo.</p>
        </div>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t border-white/20 pt-5">
              <span aria-hidden="true" className="text-sm text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-xl font-medium tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
