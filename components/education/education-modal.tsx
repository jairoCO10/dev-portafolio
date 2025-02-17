"use client";

import { Calendar, GraduationCap, Award, BookOpen } from "lucide-react";
import { Modal } from "@/components/ui/modal";

interface EducationModalProps {
  education: {
    period: string;
    institution: string;
    degree: string;
    field: string;
    achievements: string[];
    courses: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

export function EducationModal({ education, isOpen, onClose }: EducationModalProps) {
  const { achievements = [], courses = [] } = education;

  return (
    <Modal title={education.institution} isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span className="text-muted-foreground">{education.period}</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            <span className="font-medium">{education.degree} in {education.field}</span>
          </div>
        </div>

        {achievements.length > 0 && (
          <div>
            <h3 className="font-medium mb-2">Logros</h3>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Award className="h-4 w-4 mt-1 text-primary" />
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {courses.length > 0 && (
          <div>
            <h3 className="font-medium mb-2">Key Courses</h3>
            <div className="flex flex-wrap gap-2">
              {courses.map((course) => (
                <span
                  key={course}
                  className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}