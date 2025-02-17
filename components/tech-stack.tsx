import { TechCategory } from "@/components/tech/tech-category";
import { Container } from "@/components/ui/container";

export function TechStack() {
  return (
    <section className="py-12">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight mb-8">Experiencia técnica</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <TechCategory
            title="Languages & Frameworks"
            description="Tecnologías básicas con las que trabajo a diario"
            items={[
              "Python", "Django", "FastAPI", "Flask",
              "SQL", "PHP", "Laravel", "JavaScript"
            ]}
          />
          <TechCategory
            title="Databases"
            description="Almacenamiento y optimización de datos"
            items={[
              "PostgreSQL", "MongoDB", "MYSQL", "SQLite"
            ]}
          />
          <TechCategory
            title="Infrastructure & DevOps"
            description="Deployment and scaling solutions"
            items={[
              "Docker",
              "CI/CD", "Prometheus", "Grafana"
            ]}
          />
          <TechCategory
            title="Architecture Patterns"
            description="Enfoques de diseño que implemento"
            items={[
              "Microservices", "RESTful APIs", "MONOLITH",
             
            ]}
          />
          <TechCategory
            title="Security & Performance"
            description="Mejores prácticas para aplicaciones seguras y rápidas"
            items={[
              "wazuh", "Nginx", "SSL", "JWT", "CORS", "CSRF",
            ]}
          />
        </div>
      </Container>
    </section>
  );
}