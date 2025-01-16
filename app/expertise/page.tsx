import { TechStack } from '@/components/tech-stack';
import { Container } from '@/components/ui/container';

export const metadata = {
  title: 'Expertise | Jairo Cogollo - Python Backend Developer',
  description: 'Technical expertise in Python, distributed systems, and backend development.',
};

export default function ExpertisePage() {
  return (
    <Container className="py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Technical Expertise</h1>
      <TechStack />
    </Container>
  );
}