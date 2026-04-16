import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";

export function AboutSection() {
  return (
    <AnimatedSection id="about" animation="slide-in-left" delay={200}>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 relative" aria-label="About Sufiyan Khan">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-gradient-hero"></div>
              <Award className="h-6 w-6 text-primary animate-pulse" />
              <div className="w-12 h-0.5 bg-gradient-hero"></div>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Production infrastructure over tutorials.
            </p>
          </div>
          <Card className="bg-gradient-card border-border/50 shadow-medium hover:shadow-elevated transition-all duration-500 hover:-translate-y-2">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                While most CS students are doing tutorials, I've been architecting production infrastructure. At Teknoloje Solutions I deployed a Zero-Trust WireGuard VPN on Windows Server, set up an enterprise Git platform for 15+ developers, built ransomware-resistant automated backup systems, and reduced manual administrative overhead by 5+ hours per week. I work across Linux, Windows Server, Docker, Terraform, GitHub Actions, and AWS. I don't just learn tools. I use them on systems that cannot go down.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </AnimatedSection>
  );
}
