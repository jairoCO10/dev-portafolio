"use client";

import { ExperienceCard } from "@/components/experience/experience-card";
import { Container } from "@/components/ui/container";

const experiences = [
  {
    id: 1,
    period: "2022 - Present",
    company: "SipremCol",
    role: "Desarrollador Backend Python",
    description: "En Sipremcol, he liderado proyectos que combinan desarrollo backend y seguridad informática, implementando soluciones tecnológicas que optimizan procesos críticos en diversos sectores.",
    achievements: [
      "Diseñé e implementé una API de gestión de talento humano, garantizando no solo eficiencia operativa, sino también el cumplimiento de estándares de seguridad para proteger la información sensible",
      "Desarrollé una plataforma para censos de alumbrado público, implementando controles de acceso y encriptación de datos para mejorar la seguridad en la gestión de infraestructura urbana.",
      "Migré procesos de PHP a Python, reduciendo los tiempos de respuesta y mejorando la protección de datos en las aplicaciones."
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
    description: "Lideré el desarrollo de una API innovadora desarrollada bajo el framework Django para estudios de suelos en Colombia, asegurando la integridad de los datos y optimizando el flujo de trabajo en proyectos de ingeniería civil.",
    achievements: [
      "Implementé una API con enfoque en seguridad y eficiencia, utilizando Django y PostgreSQL para garantizar el manejo seguro de grandes volúmenes de datos geotécnicos.",
      "Diseñé estrategias de respaldo y recuperación de datos, fortaleciendo la resiliencia del sistema.",
      "Colaboré estrechamente con equipos para alinear los desarrollos tecnológicos con las necesidades del negocio.",
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