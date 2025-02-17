import { Code2, Database, Server, Github, Link as LucideLink, PanelsTopLeft } from "lucide-react";
import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/ui/container";

export function FeaturedProjects() {
  return (
    <section className="py-12">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight mb-8">Proyectos destacados</h2>
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
          <ProjectCard
            icons={[
              <div className="flex justify-between items-center w-full">
          <PanelsTopLeft className="mr-2 h-8 w-8" />
          <a href="https://www.corporacionsociedadprosperar.com/" target="_blank" rel="noopener noreferrer">
            <LucideLink className="h-8 w-8 ml-2" />
          </a>
              </div>,
            ]}
            title="Corporación Sociedad Prosperar"
            description="Una web diseñada para mostrar quiénes son y a qué se dedican"
            tech={["React", "Vite", "Typescript", "TailwindCSS",]}
          />
          
        </div>
      </Container>
    </section>
  );
}