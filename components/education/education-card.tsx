"use client";

import { useState } from "react";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EducationModal } from "@/components/education/education-modal";

interface EducationCardProps {
  period: string;
  institution: string;
  degree: string;
  field: string;
  achievements: string[];
  courses: string[];
}

export function EducationCard(props: EducationCardProps) {
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
          <CardTitle className="space-y-2">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              <span>{props.institution}</span>
            </div>
            <div className="flex items-center gap-2 text-lg text-muted-foreground">
              <BookOpen className="h-4 w-4" />
              <span>{props.degree} in {props.field}</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {props.achievements.slice(0, 2).map((achievement, index) => (
              <div key={index} className="flex items-center gap-2">
                <Award className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground line-clamp-1">{achievement}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <EducationModal
        education={props}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}