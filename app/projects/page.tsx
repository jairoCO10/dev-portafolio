import { FeaturedProjects } from '@/components/featured-projects';
import { Container } from '@/components/ui/container';

export const metadata = {
  title: 'Projects | Jairo Cogollo - Python Backend Developer',
  description: 'Explore my backend development projects focusing on distributed systems and high-performance APIs.',
};

export default function ProjectsPage() {
  return (
    <Container className="py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Projects</h1>
      <FeaturedProjects />
    </Container>
  );
}