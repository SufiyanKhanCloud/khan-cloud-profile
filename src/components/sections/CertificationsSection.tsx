import { useState } from "react";
import { Award, ExternalLink, ChevronDown, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/SpotlightCard";
import { TiltCard } from "@/components/TiltCard";
import { AnimatedSection } from "@/components/AnimatedSection";

type FeaturedCert = {
  name: string;
  issuer: string;
  description?: string;
  url: string;
};

const featuredCertifications: FeaturedCert[] = [
  {
    name: "IBM Applied DevOps Engineering Specialization",
    issuer: "IBM (via Coursera)",
    description:
      "9-course professional specialization covering CI/CD (GitHub Actions/Tekton), Docker, Kubernetes, OpenShift, Microservices, TDD, Monitoring and Observability.",
    url: "https://coursera.org/verify/professional-cert/Z4GUYD9ZU520",
  },
  {
    name: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    url: "https://www.credly.com/earner/earned/badge/07248dce-5f4e-4c79-93a8-ff51e8f17486",
  },
  {
    name: "Google Prompting Essentials Specialization",
    issuer: "Google (via Coursera)",
    url: "https://coursera.org/share/08a0bed6aea58b7d0c4f231c591be479",
  },
];

const foundationalCourses: FeaturedCert[] = [
  { name: "Introduction to DevOps", issuer: "Coursera", url: "https://www.coursera.org/account/accomplishments/verify/OIGBYO6L8GZJ" },
  { name: "Introduction to Cloud Computing", issuer: "Coursera", url: "https://www.coursera.org/account/accomplishments/verify/O4EN4P7ZI6XV" },
  { name: "Introduction to Agile Development and Scrum", issuer: "Coursera", url: "https://www.coursera.org/account/accomplishments/verify/PV26WR8KH5MX" },
  { name: "Introduction to Linux and Shell Scripting", issuer: "Coursera", url: "https://www.coursera.org/account/accomplishments/verify/07JX8O7ZPDCY" },
  { name: "Getting Started with Git and GitHub", issuer: "Coursera", url: "https://www.coursera.org/account/accomplishments/verify/6JZJJTDRFPBT" },
];

export function CertificationsSection() {
  const [showFoundational, setShowFoundational] = useState(false);

  return (
    <AnimatedSection id="certifications" animation="slide-up" delay={500}>
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
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
              Validated expertise through industry credentials, ordered by impact
            </p>
          </div>

          {/* Featured credentials */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredCertifications.map((cert, index) => (
              <div key={index} className="group" style={{ animationDelay: `${index * 100}ms` }}>
                <TiltCard className="rounded-xl relative h-full" maxTilt={6}>
                  <SpotlightCard className="rounded-xl h-full">
                    <Card className="hover:shadow-elevated transition-all duration-500 bg-gradient-card border-border/50 group h-full flex flex-col">
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-3">
                          <BadgeCheck className="h-5 w-5 text-primary mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                          <div className="min-w-0">
                            <CardTitle className="text-sm leading-snug">{cert.name}</CardTitle>
                            <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0 flex flex-col gap-3 flex-1">
                        {cert.description && (
                          <p className="text-xs text-muted-foreground/90 leading-relaxed">
                            {cert.description}
                          </p>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full hover:bg-primary/10 transition-all duration-300 mt-auto"
                          asChild
                        >
                          <a href={cert.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            Verify Certificate
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </SpotlightCard>
                </TiltCard>
              </div>
            ))}
          </div>

          {/* Foundational courses (collapsible) */}
          <div className="mt-8">
            <Button
              variant="ghost"
              size="sm"
              className="mx-auto flex items-center gap-2 text-muted-foreground hover:text-foreground"
              onClick={() => setShowFoundational((v) => !v)}
              aria-expanded={showFoundational}
            >
              <Award className="h-4 w-4" />
              {showFoundational ? "Hide" : "View"} Foundational Courses
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${showFoundational ? "rotate-180" : ""}`}
              />
            </Button>

            {showFoundational && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {foundationalCourses.map((cert, index) => (
                  <div key={index} className="group" style={{ animationDelay: `${index * 60}ms` }}>
                    <TiltCard className="rounded-xl relative h-full" maxTilt={4}>
                      <SpotlightCard className="rounded-xl h-full">
                        <Card className="hover:shadow-elevated transition-all duration-500 bg-gradient-card border-border/50 group h-full flex flex-col opacity-90">
                          <CardHeader className="pb-4">
                            <div className="flex items-start gap-3">
                              <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <div className="min-w-0">
                                <CardTitle className="text-xs leading-snug">{cert.name}</CardTitle>
                                <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-0 mt-auto">
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full hover:bg-primary/10 transition-all duration-300"
                              asChild
                            >
                              <a href={cert.url} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                                Verify
                              </a>
                            </Button>
                          </CardContent>
                        </Card>
                      </SpotlightCard>
                    </TiltCard>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
