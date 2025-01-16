"use client";

import { EducationCard } from "@/components/education/education-card";
import { Container } from "@/components/ui/container";

const education = [
  {
    id: 1,
    period: "2022 - 2023",
    institution: "Universidad Pontificia Bolivariana",
    degree: "Especializacion ",
    field: "seguridad informatica",
    achievements: [
      "Seguridad informática",
      "Criptografía",
      "Seguridad en redes",
      "Seguridad en aplicaciones",
    ],
    courses: [
    ]
  },
  {
    id: 1,
    period: "2013 - 2017",
    institution: "Universidad de Cordoba",
    degree: "Ingeniería ",
    field: "Sistemas",
    achievements: [
      "python",
      "Desarrollo de software",
      "Desarrollo web",
      "Desarrollo móvil",
      
    ],
    courses: [
    ]
  },
  {
    id: 1,
    period: "2021 - 2022",
    institution: "Universidad de Cordoba",
    degree: "Diplomado",
    field: "analisis de datos",
    achievements: [
      "python",
      "Analisís de datos",
      "científico de datos",
      "machine learning",
    ],
    courses: [
    ]
  },
  {
    id: 1,
    period: "2013 - 2017",
    institution: "Platzi",
    degree: "Python para Ciencia de Datos",
    field: "Computer Science",
    achievements: [
      "python",
      "Analisís de datos",
      "científico de datos",
    ],
    courses: [
    ]
  },
  {
    id: 2,
    period: "2022",
    institution: "Udemy",
    degree: "Modulo para el manejo de datos con python ",
    field: "data science",
    achievements: [
      "python",
      "Analisís de datos",
      "científico de datos",
    ],
    courses: [
    ]
  },
  {
    id: 4,
    period: "2022",
    institution: "Udemy",
    degree: "Software ",
    field: "Testing desde cero",
    achievements: [
      "testing de software",
      "pruebas unitarias",
      "pruebas de integración",
      "pruebas de sistema",
    ],
    courses: [
     
    ]
  },
  {
    id: 3,
    period: "2024",
    institution: "Código Facilito",
    degree: "Curso Profesional de deploy en servidores",
    field: "Cloud Architecture",
    achievements: [
      "Linux",
      "Administración de servidores",
     
    ],
    courses: [
      
    ]
  },
];

export function EducationSection() {
  return (
    <section className="py-12">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight mb-8">Education & Certifications</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu) => (
            <EducationCard key={edu.id} {...edu} />
          ))}
        </div>
      </Container>
    </section>
  );
}