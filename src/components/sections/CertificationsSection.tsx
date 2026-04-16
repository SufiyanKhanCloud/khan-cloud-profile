import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/SpotlightCard";
import { TiltCard } from "@/components/TiltCard";
import { AnimatedSection } from "@/components/AnimatedSection";

const certifications = [
  { name: "AWS Cloud Practitioner", url: "" },
  { name: "Introduction to DevOps", url: "https://www.coursera.org/account/accomplishments/verify/OIGBYO6L8GZJ" },
  { name: "Introduction to Cloud Computing", url: "https://www.coursera.org/account/accomplishments/verify/O4EN4P7ZI6XV" },
  { name: "Introduction to Agile Development and Scrum", url: "https://www.coursera.org/account/accomplishments/verify/PV26WR8KH5MX" },
  { name: "Introduction to Linux and Shell Scripting", url: "https://www.coursera.org/account/accomplishments/verify/07JX8O7ZPDCY" },
  { name: "Getting Started with Git and GitHub", url: "https://www.coursera.org/account/accomplishments/verify/6JZJJTDRFPBT" },
  { name: "Google Prompting Essentials Specialization", url: "https://coursera.org/share/08a0bed6aea58b7d0c4f231c591be479" },
];

export function CertificationsSection() {
  return (
    <AnimatedSection id="certifications" animation="slide-up" delay={500}>
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-gradient-hero"></div>
              <Award className="h-6 w-6 text-primary animate-bounce-soft" />
              <div className="w-12 h-0.5 bg-gradient-hero"></div>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
              Professional Certifications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Validated expertise through industry certifications
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="group" style={{ animationDelay: `${index * 100}ms` }}>
                <TiltCard className="rounded-xl relative h-full" maxTilt={6}>
                  <SpotlightCard className="rounded-xl h-full">
                    <Card className="hover:shadow-elevated transition-all duration-500 bg-gradient-card border-border/50 group cursor-pointer h-full">
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-3">
                          <Award className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                          <CardTitle className="text-sm">{cert.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        {cert.url ? (
                          <Button variant="outline" size="sm" className="w-full hover:bg-primary/10 transition-all duration-300" asChild>
                            <a href={cert.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                              Verify Certificate
                            </a>
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm" className="w-full opacity-70 cursor-default" disabled>
                            <Award className="h-4 w-4" />
                            Completed
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </SpotlightCard>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
