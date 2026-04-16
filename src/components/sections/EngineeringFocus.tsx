import { motion } from "framer-motion";
import { Terminal, Box, GitMerge, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/SpotlightCard";
import { TiltCard } from "@/components/TiltCard";
import { AnimatedSection } from "@/components/AnimatedSection";

const pillars = [
  {
    icon: Box,
    title: "Containerization & Infrastructure",
    description: "Multi-stage Docker builds for .NET applications and microservices on IIS.",
  },
  {
    icon: GitMerge,
    title: "CI/CD & Automation",
    description: "Zero-touch deployment pipelines and automated testing using GitHub Actions and Jenkins.",
  },
  {
    icon: Activity,
    title: "Hybrid SysAdmin & Observability",
    description: "Bridging legacy Windows Server environments with modern Linux infrastructure.",
  },
];

export function EngineeringFocus() {
  return (
    <AnimatedSection id="engineering-focus" animation="fade-in" delay={200}>
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative" aria-label="Core Engineering Focus">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-gradient-hero"></div>
              <Terminal className="h-6 w-6 text-primary animate-pulse" />
              <div className="w-12 h-0.5 bg-gradient-hero"></div>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
              Core Engineering Focus
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The pillars that drive my technical craft
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <TiltCard className="h-full relative rounded-xl">
                  <SpotlightCard className="h-full rounded-xl">
                    <Card className="bg-gradient-card border-border/50 hover:shadow-elevated transition-all duration-500 group h-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
                      <CardHeader className="pb-3 relative">
                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 w-fit mb-3">
                          <pillar.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                          {pillar.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 relative">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {pillar.description}
                        </p>
                      </CardContent>
                    </Card>
                  </SpotlightCard>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
