import { Lightbulb, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";

export function LinkedInAchievement() {
  return (
    <AnimatedSection animation="slide-up" delay={200}>
      <section className="pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-accent text-accent-foreground shadow-elevated hover:shadow-strong transition-all duration-500 hover:-translate-y-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="h-6 w-6 animate-bounce-soft" />
                <CardTitle className="text-xl">Viral LinkedIn Post Achievement</CardTitle>
              </div>
              <CardDescription className="text-accent-foreground/80">
                298-Page "Master AWS DevOps Cheat Sheet" — Linux, Shell Scripting, CI/CD & IaC
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="group hover:scale-105 transition-transform">
                  <div className="text-2xl font-bold group-hover:text-primary transition-colors">51,000+</div>
                  <div className="text-sm text-accent-foreground/80">Impressions</div>
                </div>
                <div className="group hover:scale-105 transition-transform">
                  <div className="text-2xl font-bold group-hover:text-primary transition-colors">26,900+</div>
                  <div className="text-sm text-accent-foreground/80">Members Reached</div>
                </div>
                <div className="group hover:scale-105 transition-transform">
                  <div className="text-2xl font-bold group-hover:text-primary transition-colors">450+</div>
                  <div className="text-sm text-accent-foreground/80">Resource Saves</div>
                </div>
                <div className="group hover:scale-105 transition-transform">
                  <div className="text-2xl font-bold group-hover:text-primary transition-colors">270</div>
                  <div className="text-sm text-accent-foreground/80">Reactions</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-accent-foreground/10 rounded-lg hover:bg-accent-foreground/15 transition-colors">
                <p className="text-sm text-accent-foreground/90">
                  Published a 298-page "Master AWS DevOps Cheat Sheet" covering Linux, Shell scripting, 
                  CI/CD pipelines, and Infrastructure as Code — sparking massive community engagement 
                  and helping thousands of engineers accelerate their DevOps journey.
                </p>
              </div>
              <div className="mt-4 flex justify-center">
                <Button variant="hero" size="lg" asChild className="group font-semibold">
                  <a href="https://www.linkedin.com/posts/sufiyan-khan-cloud_aws-devops-cheat-sheet-activity-7360925592155746304-T2jJ" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    View Guide & Community Discussion
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </AnimatedSection>
  );
}
