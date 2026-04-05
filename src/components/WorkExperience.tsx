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
      "Eliminated an active attack surface by replacing an insecure NAT port-forwarding setup with a Zero-Trust WireGuard VPN on production Windows Server after detecting a live brute-force attack, securing all remote developer access with asymmetric key pairs and strict firewall rules dropping all public traffic.",
      "Reduced version control chaos for 15+ developers by deploying a self-hosted Gitea enterprise platform on Windows Server with Role-Based Access Control, multi-tenancy, and a full database migration from SQLite to MS SQL Server, replacing a system that had no proper access control.",
      "Made production backups ransomware-proof by replacing SMB mapped drives with an isolated PowerShell vaulting engine using temporary encrypted FTP pipelines, ensuring the production server has zero persistent network access to backup storage.",
      "Prevented developer friction and server storage bloat by configuring enterprise Gitea repository limits at 500MB, 5x the GitHub/GitLab standard, after benchmarking against industry thresholds to find the right balance for an internal engineering team.",
      "Resolved a broken production deployment by diagnosing and fixing mixed content and CORS failures across a decoupled React and .NET application on IIS, binding SSL certificates to both services and updating environment routing to enforce end-to-end HTTPS.",
      "Saved 5+ hours of manual work per week by automating critical system backups and routine maintenance using PowerShell scripts and Windows Task Scheduler.",
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
