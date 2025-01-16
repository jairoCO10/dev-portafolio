import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  icons: React.ReactNode[];
  title: string;
  description: string;
  tech: string[];
}

export function ProjectCard({ icons, title, description, tech }: ProjectCardProps) {
  return (
    <Card className="flex flex-col transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="mb-4">{icons}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}