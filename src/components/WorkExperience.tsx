import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceEntry {
  role: string;
  company: string;
  logoUrl: string;
  duration: string;
  bullets: string[];
  technologies: string[];
}

const experiences: ExperienceEntry[] = [
  {
    role: "DevOps Intern",
    company: "Teknoloje Solutions",
    logoUrl: "/lovable-uploads/teknoloje-logo.png",
    duration: "February 2026 — Present",
    bullets: [
      "Architected and deployed a centralized version control system using Gitea on a Windows Server environment for 15+ developers, implementing Role-Based Access Control (RBAC) and multi-tenancy.",
      "Executed a seamless database migration from SQLite to MS SQL Server, optimizing enterprise scalability and system performance.",
      "Automated critical system backups and routine maintenance using shell scripting and Windows Task Scheduler, reducing manual administrative overhead by over 5 hours per week.",
      "Configured and secured Windows Server infrastructure, managing IIS hosting, SSL certificates, DNS routing, port forwarding, and strict firewall policies to ensure high availability.",
      "Integrated AWS, Docker, and GitHub Actions to streamline operational workflows and support continuous integration pipelines, accelerating deployment cycles by 40%.",
    ],
    technologies: ["AWS", "Docker", "Linux", "Windows Server", "IIS", "GitHub Actions", "Shell Scripting", "MS SQL Server"],
  },
];

export function WorkExperience() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-12 h-0.5 bg-gradient-hero" />
          <Briefcase className="h-6 w-6 text-primary animate-pulse" />
          <div className="w-12 h-0.5 bg-gradient-hero" />
        </div>
        <h2 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
          Work Experience
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Professional experience in DevOps & cloud infrastructure
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex gap-6">
              {/* Timeline dot */}
              <div className="hidden sm:flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-primary shadow-glow z-10 mt-8 ring-4 ring-background" />
              </div>

              <Card className="flex-1 bg-gradient-card border-border/50 hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 group overflow-hidden relative">
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg" />

                <CardContent className="p-6 sm:p-8 relative">
                  {/* Header: logo + role + company + duration */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 rounded-xl border border-border/50 bg-background p-1.5 flex-shrink-0 group-hover:shadow-medium transition-shadow duration-300 overflow-hidden">
                      <img
                        src={exp.logoUrl}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-primary/80 font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mt-1">{exp.duration}</p>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-3 mb-6">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs hover:bg-primary/10 hover:scale-105 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
