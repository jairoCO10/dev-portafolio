import { HeroSection } from '@/components/hero-section';
import { FeaturedProjects } from '@/components/featured-projects';
import { TechStack } from '@/components/tech-stack';
import { ExperienceTimeline } from '@/components/experience-timeline';
import { EducationSection } from '@/components/education-section';
import { LatestPosts } from '@/components/latest-posts';
import { ContactCTA } from '@/components/contact-cta';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20 px-5 md:px-0">
      <HeroSection />
      <FeaturedProjects />
      <TechStack />
      <ExperienceTimeline />
      <EducationSection />
      <LatestPosts />
      <ContactCTA />
    </div>
  );
}