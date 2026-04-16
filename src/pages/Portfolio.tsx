import { CursorGlow } from "@/components/CursorGlow";
import { PageLoader } from "@/components/PageLoader";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingTechLogos } from "@/components/FloatingTechLogos";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { ScrollToTop } from "@/components/ScrollToTop";
import { StatsCounter } from "@/components/StatsCounter";
import { WorkExperience } from "@/components/WorkExperience";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useAnalytics } from "@/hooks/useAnalytics";

import { Navigation } from "@/components/sections/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { LinkedInAchievement } from "@/components/sections/LinkedInAchievement";
import { AboutSection } from "@/components/sections/AboutSection";
import { EngineeringFocus } from "@/components/sections/EngineeringFocus";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Portfolio() {
  useAnalytics();

  return (
    <>
      <CursorGlow />
      <PageLoader />
      <ScrollProgress />
      <FloatingTechLogos />
      <div className="min-h-screen bg-background font-body relative grain-overlay">
        <ParallaxBackground />
        <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        
        <Navigation />
        <ScrollToTop />

        <main>
          <HeroSection />
          <StatsCounter />
          <LinkedInAchievement />
          <AboutSection />
          <EngineeringFocus />

          <AnimatedSection id="experience" animation="slide-in-left" delay={200}>
            <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
              <WorkExperience />
            </section>
          </AnimatedSection>

          <ProjectsSection />
          <SkillsSection />
          <CertificationsSection />
          <ContactSection />
        </main>

        <FooterSection />
      </div>
    </>
  );
}
