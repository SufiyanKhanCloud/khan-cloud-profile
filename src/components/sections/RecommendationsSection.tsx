import { Users, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";

interface Recommendation {
  quote: string;
  name: string;
  title: string;
  company: string;
  relation: string;
  linkedinUrl: string;
}

const recommendations: Recommendation[] = [
  {
    quote:
      "Sufiyan is quick to learn and always eager to explore new ideas and technologies. One of his standout qualities is his habit of documenting and noting down everything important, which helps him retain knowledge, improve continuously, and stay highly organized. He is proactive, explores solutions independently, and often researches related domains to better understand the bigger picture. Sufiyan consistently demonstrates professionalism through his reliability, punctuality, and structured way of working. His documentation is detailed yet easy to follow, making collaboration smoother for everyone around him.",
    name: "Shahnoor Khan",
    title: "Software Architect",
    company: "Teknoloje Solutions",
    relation: "Managed Sufiyan directly",
    linkedinUrl:
      "https://linkedin.com/in/sufiyan-khan-cloud/details/recommendations/",
  },
  {
    quote:
      "I've worked with Sufiyan at Teknoloje Solutions, where he has shown strong expertise in infrastructure and cloud systems. He is reliable, technically sound, and always ready to solve complex issues efficiently. A great team player with a proactive mindset.",
    name: "Syed Kumail Raza",
    title: "Senior Software Engineer",
    company: "Teknoloje Solutions",
    relation: "Managed Sufiyan directly",
    linkedinUrl:
      "https://linkedin.com/in/sufiyan-khan-cloud/details/recommendations/",
  },
];

export function RecommendationsSection() {
  return (
    <AnimatedSection id="recommendations" animation="slide-up" delay={200}>
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 relative"
        aria-label="Recommendations"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-gradient-hero" />
              <Users className="h-6 w-6 text-primary animate-pulse" />
              <div className="w-12 h-0.5 bg-gradient-hero" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
              Recommendations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From people who managed me directly at Teknoloje Solutions
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendations.map((rec) => (
              <Card
                key={rec.name}
                className="bg-gradient-card border-border/50 hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 group overflow-hidden relative flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

                <CardContent className="p-6 sm:p-8 relative flex flex-col flex-1">
                  {/* Decorative opening quote mark */}
                  <span
                    className="block text-5xl leading-none text-primary/20 font-serif mb-3 select-none"
                    aria-hidden="true"
                  >
                    &#8220;
                  </span>

                  {/* Quote */}
                  <blockquote className="flex-1">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {rec.quote}
                    </p>
                  </blockquote>

                  {/* Divider */}
                  <div className="my-5 h-px bg-border/60" />

                  {/* Attribution */}
                  <cite className="not-italic">
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {rec.name}
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {rec.title} · {rec.company}
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">
                      {rec.relation}
                    </p>
                  </cite>

                  {/* LinkedIn link */}
                  <a
                    href={rec.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-primary/70 hover:text-primary transition-colors duration-200"
                  >
                    View on LinkedIn
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
