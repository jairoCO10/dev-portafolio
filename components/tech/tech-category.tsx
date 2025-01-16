import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TechCategoryProps {
  title: string;
  description: string;
  items: string[];
}

export function TechCategory({ title, description, items }: TechCategoryProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}