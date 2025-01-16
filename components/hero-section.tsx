"use client";

import Image from "next/image";
import { Terminal, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section className="pt-24 pb-12">
      <Container>
        <div className="flex flex-col items-center text-center">
          <div className="relative w-64 h-64 mb-8 rounded-xl overflow-hidden ring-4 ring-primary/10">
            <Image
              src="IMG_6996.jpg"
              alt="Professional Profile Photo"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Desarrollador backend Python
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
            Soy un desarrollador backend y especialista en seguridad informatica cuento con más de 3 años de experiencia en Python y php. 
            Me especializo en crear APIs RESTful, microservicios y aplicaciones web escalables. Mi enfoque se centra en escribir código limpio, 
            seguro, mantenible y bien documentado.
          </p>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
            
            Disfruto resolviendo problemas complejos y aprendiendo nuevas tecnologías. 
            Actualmente, me encuentro profundizando en arquitecturas cloud-native y DevOps.
          </p>
          <div className="mt-12 flex gap-6">
            <Button size="lg" asChild>
              <a href="#projects">Ver Proyectos</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/blog">Leer Blog</a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}