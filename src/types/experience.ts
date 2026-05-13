export type Experience = {
  company: string; // Ejemplo: "Empresa X"
  role: string; // Ejemplo: "Desarrollador Fullstack"
  start: Date; // Ejemplo: "2024"
  end?: Date; // Ejemplo: "Actualidad"
  description: string; // Ejemplo: "Desarrollo de aplicaciones web escalables."
  context?: string;
  responsibilities?: string[];
  technologies?: string[];
  impact?: string[];
  featured?: boolean;
};
