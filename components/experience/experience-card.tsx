"use client";

import { useState } from "react";
import { Calendar, Building2, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExperienceModal } from "@/components/experience/experience-modal";

interface ExperienceCardProps {
  period: string;
  company: string;
  role: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export function ExperienceCard(props: ExperienceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card 
        className="transition-all duration-300 hover:shadow-lg cursor-pointer" 
        onClick={() => setIsModalOpen(true)}
      >
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <Calendar className="h-4 w-4" />
            <span>{props.period}</span>
          </div>
          <CardTitle className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              <span>{props.company}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Briefcase className="h-4 w-4" />
              <span>{props.role}</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{props.description}</p>
        </CardContent>
      </Card>

      <ExperienceModal
        experience={props}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}