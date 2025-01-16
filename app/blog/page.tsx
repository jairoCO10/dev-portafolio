import { LatestPosts } from '@/components/latest-posts';
import { Container } from '@/components/ui/container';

export const metadata = {
  title: 'Blog | Jairo Cogollo - Python Backend Developer',
  description: 'Technical articles about Python backend development, distributed systems, and software architecture.',
};

export default function BlogPage() {
  return (
    <Container className="py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Blog</h1>
      <LatestPosts />
    </Container>
  );
}