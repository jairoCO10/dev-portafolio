"use client";

import { Building2, Calendar, Briefcase, CheckCircle2 } from "lucide-react";
import { Modal } from "@/components/ui/modal";

interface ExperienceModalProps {
  experience: {
    period: string;
    company: string;
    role: string;
    description: string;
    achievements: string[];
    technologies: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

export function ExperienceModal({ experience, isOpen, onClose }: ExperienceModalProps) {
  const { achievements = [], technologies = [] } = experience;

  return (
    <Modal title={experience.role} isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span className="text-muted-foreground">{experience.period}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            <span className="font-medium">{experience.company}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            <span>{experience.role}</span>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Description</h3>
          <p className="text-muted-foreground">{experience.description}</p>
        </div>

        {achievements.length > 0 && (
          <div>
            <h3 className="font-medium mb-2">Key Achievements</h3>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-1 text-primary" />
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {technologies.length > 0 && (
          <div>
            <h3 className="font-medium mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}