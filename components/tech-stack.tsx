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
            description="Core technologies I work with daily"
            items={[
              "Python", "Django", "FastAPI", "Flask",
              "SQL", "PHP", "Laravel", "JavaScript"
            ]}
          />
          <TechCategory
            title="Databases & Caching"
            description="Data storage and optimization"
            items={[
              "PostgreSQL", "MongoDB", "Redis",
              "Elasticsearch", "MYSQL", "SQLite"
            ]}
          />
          <TechCategory
            title="Infrastructure & DevOps"
            description="Deployment and scaling solutions"
            items={[
              "Docker", "Kubernetes", "AWS",
              "CI/CD", "Prometheus", "Grafana"
            ]}
          />
          <TechCategory
            title="Architecture Patterns"
            description="Design approaches I implement"
            items={[
              "Microservices", "RESTful APIs", "MONOLITH",
              "CQRS", "Domain-Driven Design"
            ]}
          />
          <TechCategory
            title="Security & Performance"
            description="Best practices for secure and fast applications"
            items={[
              "wazuh", "Nginx", "SSL", "JWT", "CORS", "CSRF", "Rate Limiting",  "Load Balancing"
            ]}
          />
        </div>
      </Container>
    </section>
  );
}