import { Code2, Database, Server, Github, Link as LucideLink } from "lucide-react";
import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/ui/container";

export function FeaturedProjects() {
  return (
    <section className="py-12">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            icons={[
              <div className="flex justify-between items-center w-full">
                <Server className="mr-2 h-8 w-8" />
                <a  className="ml-auto h-8 w-8" href="https://github.com/jairoCO10/SQL-Diagram-Editor-Canvas" target="_blank" rel="noopener noreferrer">
                  <Github/>
                </a>
                <a  className="h-8 w-8" href="https://sql-diagram-editor-canvas.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <LucideLink />
                </a>
              </div>,
            ]}
            title="SQL Diagram Editor Canvas"
            description="Es una herramienta interactiva diseñada para crear y visualizar diagramas entidad-relación de bases de datos en un entorno gráfico e intuitivo"
            tech={["React"]}
          />
          {/* <ProjectCard
            icons={[
              <div className="flex justify-between items-center w-full">
                <Database className="mr-2 h-8 w-8" />
                <a href="https://github.com/jairoCO10/Data-Pipeline-Framework" target="_blank" rel="noopener noreferrer">
                  <Github className="h-8 w-8" />
                </a>
                <a href="https://data-pipeline-framework.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <LucideLink className="h-8 w-8 ml-2" />
                </a>
              </div>,
            ]}
            title="Data Pipeline Framework"
            description="Scalable ETL framework processing 500GB+ daily with Apache Airflow"
            tech={["Python", "Airflow", "AWS", "Spark"]}
          />
          <ProjectCard
            icons={[
              <div className="flex justify-between items-center w-full">
                <Code2 className="mr-2 h-8 w-8" />
                <a href="https://github.com/jairoCO10/API-Gateway-Service" target="_blank" rel="noopener noreferrer">
                  <Github className="ml-auto h-8 w-8" />
                </a>
                <a href="https://api-gateway-service.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <LucideLink className="h-8 w-8 ml-2" />
                </a>
              </div>,
            ]}
            title="API Gateway Service"
            description="Microservices gateway handling 10K+ requests/second with FastAPI"
            tech={["Python", "FastAPI", "Redis", "Docker"]}
          /> */}
        </div>
      </Container>
    </section>
  );
}