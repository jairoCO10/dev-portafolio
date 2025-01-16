import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactCTA() {
  return (
    <section className="py-12">
      <Container>
        <Card className="bg-muted">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Let's Build Something Together</CardTitle>
            <CardDescription>
              Looking for a backend expert to help scale your systems? Send me a message!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action="mailto:your-email@example.com" method="post" encType="text/plain" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <Input id="name" type="text" placeholder="Your name" required className="w-full" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="Your email" required className="w-full" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Your message" required className="w-full" />
              </div>
              <div className="flex justify-center">
                <Button type="submit" size="lg">
                  Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}