import { ContactCTA } from '@/components/contact-cta';
import { Container } from '@/components/ui/container';

export const metadata = {
  title: 'Contact | Jairo Cogollo - Python Backend Developer',
  description: 'Get in touch for collaboration opportunities or technical consulting.',
};

export default function ContactPage() {
  return (
    <Container className="py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Contact</h1>
      <ContactCTA />
    </Container>
  );
}