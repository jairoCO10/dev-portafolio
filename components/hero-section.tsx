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
          Desarrollador Backend Python Php | Especialista en Seguridad Informática
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
          Soy un desarrollador backend con más de 3 años de experiencia en Python y PHP, especializado en la creación de APIs RESTful, 
          microservicios y aplicaciones web escalables. Mi enfoque se centra en escribir código limpio, seguro y eficiente, 
          garantizando soluciones mantenibles y bien documentadas.
          </p>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
            
          Tengo un fuerte interés en la seguridad informática, aplicando buenas prácticas de desarrollo seguro para proteger las aplicaciones 
          y los datos. Disfruto resolviendo problemas complejos, optimizando el rendimiento y explorando nuevas tecnologías para mejorar la 
          arquitectura y la escalabilidad de los sistemas.
          </p>
         
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
            
          Actualmente, me encuentro profundizando en arquitecturas cloud-native y DevOps, fortaleciendo mis habilidades en contenedores (Docker, Kubernetes), 
          automatización e infraestructura en la nube (AWS, Azure, GCP).
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