"use client";

import { ExperienceCard } from "@/components/experience/experience-card";
import { Container } from "@/components/ui/container";

const experiences = [
  {
    id: 1,
    period: "2022 - Presente",
    company: "SipremCol",
    role: "Desarrollador Backend Python",
    description: "En Sipremcol, he liderado proyectos en los que desarrollo backend y seguridad informática convergen para ofrecer soluciones tecnológicas eficientes y seguras, optimizando procesos críticos en diversos sectores.",
    achievements: [
      "Diseño e implementación de API para gestión de talento humano: Desarrollé una API robusta que optimiza procesos operativos y garantiza el cumplimiento de estándares de seguridad, protegiendo información sensible.",
      "Plataforma para censos de alumbrado público: Implementé controles de acceso y encriptación de datos, fortaleciendo la seguridad en la gestión de infraestructura urbana y garantizando la integridad de la información.",
      "Migración de procesos de PHP a Python: Logré una reducción significativa en los tiempos de respuesta, mejorando el rendimiento de las aplicaciones y reforzando la protección de datos con prácticas avanzadas de seguridad."
    ],
    technologies: [
      "Python",
      "PHP",
      "FastAPI",
      "MySQL",
      "Docker",
    ]
  },
  {
    id: 3,
    period: "2021 - 2022",
    company: "Geomastic",
    role: "Ingeniero de software",
    description: "Lideré el desarrollo de una API innovadora basada en Django para la gestión de estudios de suelos en Colombia, optimizando el flujo de trabajo en proyectos de ingeniería civil y garantizando la integridad y seguridad de los datos geotécnicos.",
    achievements: [
      "Desarrollo de una API segura y eficiente: Implementé una API con Django y PostgreSQL, optimizada para manejar grandes volúmenes de datos geotécnicos con altos estándares de seguridad y rendimiento.",
      "Estrategias de respaldo y recuperación de datos: Diseñé e implementé soluciones para fortalecer la resiliencia del sistema, asegurando la protección y disponibilidad de la información crítica.",
      "Colaboración con equipos multidisciplinarios: Trabajé de manera estrecha con diferentes áreas para alinear las soluciones tecnológicas con los objetivos del negocio, garantizando una integración efectiva en los procesos operativos.",
    ],
    technologies: [
      "Python",
      "Django",
      "PostgreSQL",
      "Pandas",
      "Docker",
      "Git",
      "Servidores Linux"
    ]
  },
  {
    id: 2,
    period: "2022 - 2022",
    company: "Corporación Sociedad Prosperar",
    role: "Desarrollador web",
    description: "Desarrolle una web para la Corporación Sociedad Prosperar, una organización sin ánimo de lucro que busca mejorar la calidad de vida de las personas en situación de vulnerabilidad.",
    achievements: [
    ],
    technologies: [
      "react",
      "vite",
      "typescript",
      "tailwindcss",
    ]
  },
  
];

export function ExperienceTimeline() {
  return (
    <section className="py-12">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight mb-8">Experiencia profesional</h2>
        <div className="relative space-y-8">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              <div className="absolute left-8 top-8 w-3 h-3 rounded-full border-2 border-primary bg-background hidden md:block 
                            group-hover:scale-125 group-hover:bg-primary transition-all duration-300" />
              <div className="md:ml-24 space-y-3 relative">
                <ExperienceCard {...exp} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}