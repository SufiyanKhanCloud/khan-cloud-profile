import { Terminal, Code, Cloud, Server, Activity } from "lucide-react";
import { SkillCard } from "@/components/SkillCard";
import { SpotlightCard } from "@/components/SpotlightCard";
import { TiltCard } from "@/components/TiltCard";
import { AnimatedSection } from "@/components/AnimatedSection";

const skillCategories = [
  {
    icon: Cloud,
    title: "Cloud & Systems",
    skills: [
      "AWS EC2",
      "AWS S3",
      "AWS VPC",
      "AWS IAM",
      "Linux (Ubuntu)",
      "Windows Server",
    ],
  },
  {
    icon: Terminal,
    title: "CI/CD & Automation",
    skills: [
      "GitHub Actions",
      "Gitea Actions",
      "Jenkins",
      "Git",
      "PowerShell",
      "Bash",
    ],
  },
  {
    icon: Server,
    title: "Containers & IaC",
    skills: [
      "Docker",
      "Docker Compose",
      "Terraform",
      "Ansible",
      "YAML",
    ],
  },
  {
    icon: Code,
    title: "Networking & Security",
    skills: [
      "WireGuard",
      "SSH Hardening",
      "Firewall Rules",
      "IIS",
      "DNS",
      "SSL/TLS",
    ],
  },
  {
    icon: Activity,
    title: "Monitoring & Observability",
    skills: [
      "Prometheus",
      "Grafana",
      "PromQL",
      "Node Exporter",
    ],
  },
];

export function SkillsSection() {
  return (
    <AnimatedSection animation="slide-in-right" delay={400}>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-gradient-hero"></div>
              <Terminal className="h-6 w-6 text-primary animate-pulse" />
              <div className="w-12 h-0.5 bg-gradient-hero"></div>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
              Technical Skills
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I've worked with across internships and hands-on projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="animate-slide-up group" style={{ animationDelay: `${index * 100}ms` }}>
                <TiltCard className="rounded-xl relative" maxTilt={6}>
                  <SpotlightCard className="rounded-xl">
                    <SkillCard {...category} />
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
