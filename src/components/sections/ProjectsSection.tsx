import { useState } from "react";
import masArchitecture from "@/assets/mas-architecture.png";
import { Code, FolderArchive } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { SpotlightCard } from "@/components/SpotlightCard";
import { TiltCard } from "@/components/TiltCard";
import { AnimatedSection } from "@/components/AnimatedSection";

const featuredProjects = [
  {
    title: "Zero-Trust WireGuard VPN Infrastructure",
    description: "Production Windows Server was exposed via NAT port-forwarding. After detecting a live brute-force attack from an external IP, I replaced the entire setup with a Zero-Trust WireGuard VPN. Implemented asymmetric key pairs for every developer, strict firewall rules dropping all public traffic, and a secure onboarding process. Zero unauthorized access attempts have succeeded since deployment.",
    technologies: ["WireGuard", "Windows Server", "Zero-Trust", "Firewall", "PowerShell", "Networking"],
    hideImage: true,
  },
  {
    title: "Enterprise Gitea Version Control Platform",
    description: "The company had no proper version control system. I deployed a self-hosted Gitea instance on Windows Server for 15+ developers, migrated the database from SQLite to MS SQL Server, implemented Role-Based Access Control and multi-tenancy, and configured custom repository limits benchmarked against GitHub and GitLab standards.",
    technologies: ["Gitea", "Windows Server", "MS SQL Server", "RBAC", "Git", "DevOps"],
    hideImage: true,
  },
  {
    title: "Ransomware-Resistant Automated Backup System",
    description: "Production backups were stored on SMB mapped drives, meaning ransomware could encrypt both the server and backups simultaneously. I replaced this with a PowerShell vaulting engine that opens a temporary encrypted FTP connection, transmits compressed archives, then severs the connection immediately. The production server now has zero persistent network access to backup storage.",
    technologies: ["PowerShell", "Windows Server", "FTP", "Cybersecurity", "Disaster Recovery", "Automation"],
    hideImage: true,
  },
  {
    title: "Production APM Pipeline with Prometheus and Grafana",
    description: "Built a complete Application Performance Monitoring pipeline for a Next.js application. Created a custom prom-client exporter exposing live metrics, configured Docker host networking with host.docker.internal routing, wrote custom PromQL queries visualizing both server RAM and business logic metrics in a single Grafana dashboard. Exported dashboard as JSON for GitOps version control.",
    githubUrl: "https://github.com/SufiyanKhanCloud/Docker-360/tree/main/elk-docker",
    technologies: ["Prometheus", "Grafana", "Docker", "Next.js", "Observability", "PromQL"],
    hideImage: true,
  },
  {
    title: "MAS-Simulator (Queueing Theory Engine)",
    description: "Team-built Next.js queueing theory application. I independently owned the entire DevOps lifecycle: multi-stage Docker builds, zero-touch GitHub Actions CI/CD pipeline, AWS EC2 provisioning via Terraform, Ansible server configuration, and a full Prometheus and Grafana APM stack with custom PromQL queries.",
    githubUrl: "https://github.com/SufiyanKhanCloud/MAS-SimulatorV2",
    liveUrl: "https://mas-simulator-calculator.vercel.app/",
    imageUrl: "/lovable-uploads/mas-simulator.png",
    technologies: ["Next.js", "TypeScript", "Docker", "GitHub Actions", "Terraform", "Ansible", "AWS EC2", "Prometheus", "Grafana", "PromQL"],
    topBadge: "DevOps Architecture — Solo",
  },
];

const earlierProjects = [
  {
    title: "CI/CD Pipeline for Django Notes App",
    description: "Jenkins-based CI/CD pipeline with 4 Groovy scripts. Automates build, test, deploy on AWS.",
    githubUrl: "https://github.com/SufiyanKhanCloud/Django-Notes-App",
    imageUrl: "/lovable-uploads/0f16ee99-0083-4dc5-b8ec-8bc0e93053fd.png",
    technologies: ["Django", "Jenkins", "CI/CD", "Groovy", "AWS"],
  },
  {
    title: "Dockerized Expense Tracker",
    description: "Java Spring Boot + MySQL app with Docker Compose. Deployed to AWS EC2 with persistent volumes.",
    githubUrl: "https://github.com/SufiyanKhanCloud/docker-practice/tree/main/Expenses-Tracker-WebApp",
    imageUrl: "/lovable-uploads/4be806dc-05ac-4208-961f-fd08d6b0f9a7.png",
    technologies: ["Spring Boot", "MySQL", "Docker", "AWS EC2"],
  },
  {
    title: "Flask + MySQL Microservice",
    description: "Two-tier microservices app with Flask and MySQL containers, deployed to EC2 under 10 mins.",
    githubUrl: "https://github.com/SufiyanKhanCloud/docker-practice/tree/main/two-tier-flask-app",
    imageUrl: "/lovable-uploads/f6a1f223-b480-4572-9191-d2ce90198d22.png",
    technologies: ["Flask", "MySQL", "Docker", "Microservices"],
  },
  {
    title: "Smart Parking System (IoT-Based)",
    description: "IoT-based parking system using ESP32 and sensors to monitor real-time slot availability and automate gate control with mobile dashboard.",
    githubUrl: "https://github.com/SufiyanKhanCloud/Smart-Parking-System",
    imageUrl: "/lovable-uploads/smart-parking-system.jpeg",
    technologies: ["ESP32", "IoT", "IR Sensors", "Blynk", "Automation"],
  },
];

export function ProjectsSection() {
  const [archLightbox, setArchLightbox] = useState(false);

  return (
    <>
      {/* Featured Projects */}
      <AnimatedSection id="projects" animation="zoom-in" delay={300}>
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative" aria-label="Featured projects">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-gradient-hero"></div>
                <Code className="h-6 w-6 text-primary animate-bounce-soft" />
                <div className="w-12 h-0.5 bg-gradient-hero"></div>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
                Featured Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real-world applications showcasing DevOps expertise
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <div key={index} className="animate-slide-up group" style={{ animationDelay: `${index * 150}ms` }}>
                  <TiltCard className="rounded-xl relative">
                    <SpotlightCard className="rounded-xl">
                      <ProjectCard {...project} />
                    </SpotlightCard>
                  </TiltCard>
                </div>
              ))}
            </div>

            {/* MAS-Simulator System Architecture */}
            <div className="mt-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">System Architecture</h3>
                <p className="text-muted-foreground text-sm">MAS-Simulator — End-to-end DevOps pipeline and cloud infrastructure</p>
              </div>
              <div 
                className="relative rounded-xl overflow-hidden border border-border/50 shadow-elevated cursor-pointer group"
                onClick={() => setArchLightbox(true)}
              >
                <img 
                  src={masArchitecture} 
                  alt="MAS-Simulator system architecture diagram showing CI/CD pipeline, AWS EC2, Docker containers, Prometheus, Grafana, Terraform, and Ansible" 
                  className="w-full h-auto object-contain bg-black/90 transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 backdrop-blur-sm text-foreground text-sm font-medium px-4 py-2 rounded-full shadow-medium">
                    Click to expand
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Earlier Projects */}
      <AnimatedSection animation="slide-up" delay={350}>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 relative" aria-label="Earlier projects">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-gradient-hero"></div>
                <FolderArchive className="h-6 w-6 text-primary animate-bounce-soft" />
                <div className="w-12 h-0.5 bg-gradient-hero"></div>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
                Earlier Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Foundation projects that built my engineering fundamentals
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {earlierProjects.map((project, index) => (
                <div key={index} className="animate-slide-up group" style={{ animationDelay: `${index * 150}ms` }}>
                  <TiltCard className="rounded-xl relative">
                    <SpotlightCard className="rounded-xl">
                      <ProjectCard {...project} />
                    </SpotlightCard>
                  </TiltCard>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Architecture Lightbox */}
      {archLightbox && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setArchLightbox(false)}
        >
          <div className="relative max-w-[95vw] max-h-[95vh]">
            <img 
              src={masArchitecture} 
              alt="MAS-Simulator system architecture diagram" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <button 
              onClick={() => setArchLightbox(false)}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-background/90 text-foreground flex items-center justify-center text-lg font-bold hover:bg-primary hover:text-primary-foreground transition-colors shadow-medium"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
