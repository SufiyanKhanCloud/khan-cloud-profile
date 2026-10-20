import { useState } from "react";
import masArchitecture from "@/assets/mas-architecture.png";
import { Code, FolderArchive } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { SpotlightCard } from "@/components/SpotlightCard";
import { TiltCard } from "@/components/TiltCard";
import { AnimatedSection } from "@/components/AnimatedSection";

const featuredProjects = [
  {
    title: "CI/CD Infrastructure & Gitea Platform",
    description:
      "During my five-month DevOps internship, I deployed and administered a self-hosted Gitea platform for 15+ developers, migrated its database from SQLite to SQL Server, configured role-based access control, and built a GitHub-to-Gitea synchronization bridge supporting 16 CI/CD pipelines for Angular and ASP.NET Core applications deployed on IIS.",
    technologies: [
      "Gitea",
      "GitHub Actions",
      "CI/CD",
      "Windows Server",
      "SQL Server",
      "IIS",
      "RBAC",
      "PowerShell",
    ],
    hideImage: true,
    topBadge: "Internship Experience",
  },
  {
    title: "Zero-Trust Remote Access with WireGuard",
    description:
      "Investigated more than 2,600 failed SMB/RDP login attempts originating from 20 IP addresses using Windows Event Viewer. Strengthened firewall restrictions and moved developer remote administration behind a WireGuard VPN, using per-user key pairs and a repeatable access-provisioning workflow.",
    technologies: [
      "WireGuard",
      "Windows Server",
      "PowerShell",
      "Networking",
      "Firewall Rules",
      "Incident Response",
      "Access Control",
    ],
    hideImage: true,
    topBadge: "Internship Experience",
  },
  {
    title: "MAS-Simulator: AWS & DevOps Infrastructure",
    description:
      "A team-built Next.js queueing-theory application for which I implemented the DevOps infrastructure. My work included Docker image builds, GitHub Actions automation, AWS EC2 provisioning with Terraform, server configuration with Ansible, and Prometheus/Grafana monitoring.",
    githubUrl: "https://github.com/SufiyanKhanCloud/MAS-SimulatorV2",
    liveUrl: "https://mas-simulator-calculator.vercel.app/",
    imageUrl: "/lovable-uploads/mas-simulator.webp",
    technologies: [
      "AWS EC2",
      "Terraform",
      "Ansible",
      "Docker",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "PromQL",
    ],
    topBadge: "DevOps Implementation",
  },
  {
    title: "Linux Homelab: Server Administration",
    description:
      "Repurposed an older laptop as an Ubuntu Server 24.04 homelab to practice Linux administration and remote server management. Configured key-based SSH authentication, enabled UFW with default-deny incoming rules and explicit SSH access, and disabled lid-close suspension to keep the server reachable during remote sessions. Building toward containerized services, monitoring, and operational troubleshooting.",
    githubUrl:
      "https://github.com/SufiyanKhanCloud/homelab-devops-labs",
    technologies: [
      "Ubuntu Server",
      "Linux",
      "SSH",
      "UFW",
      "Docker Compose",
      "PostgreSQL",
      "Prometheus",
      "Grafana",
    ],
    hideImage: true,
    topBadge: "Hands-on Homelab",
  },
  {
    title: "AWS for DevOps: Hands-on Labs",
    description:
      "Built a GitHub-triggered AWS CodePipeline/CodeBuild workflow for a Flask application. The CI process runs pytest, builds a non-root Docker image, tags the image with the commit SHA, and publishes it to Docker Hub. Configured credential storage through AWS Systems Manager Parameter Store and applied least-privilege IAM permissions. This project focuses on continuous integration and image publishing.",
    githubUrl: "https://github.com/SufiyanKhanCloud/aws-for-devops",
    technologies: [
      "AWS CodePipeline",
      "AWS CodeBuild",
      "IAM",
      "SSM Parameter Store",
      "GitHub",
      "pytest",
      "Docker",
      "Docker Hub",
    ],
    hideImage: true,
    topBadge: "AWS CI",
  },
];

const earlierProjects = [
  {
    title: "Automated Backup Workflow",
    description:
      "Automated server backup handling with PowerShell by preparing compressed archives, establishing a temporary FTP transfer connection, and closing the connection after transfer. Focused on reducing persistent connectivity between the production server and backup storage.",
    technologies: [
      "PowerShell",
      "Windows Server",
      "FTP",
      "Automation",
      "Backup Operations",
    ],
    hideImage: true,
    topBadge: "Internship Experience",
  },
  {
    title: "Prometheus & Grafana Application Monitoring",
    description:
      "Configured application and host monitoring using Prometheus and Grafana. Implemented a custom prom-client metrics exporter, created PromQL queries for server and application metrics, and exported the dashboard configuration for version control.",
    githubUrl:
      "https://github.com/SufiyanKhanCloud/Docker-360/tree/main/elk-docker",
    technologies: [
      "Prometheus",
      "Grafana",
      "Docker",
      "PromQL",
      "Observability",
    ],
    hideImage: true,
  },
  {
    title: "SmartHireAI: Final-Year Project",
    description:
      "Contributed the DevOps and quality-engineering work for an AI-assisted CV and hiring platform. Implemented GitHub Actions automation, a development-to-main pull-request workflow, Playwright end-to-end tests, and ESLint configuration. Also contributed to a QA audit covering security and reliability findings.",
    githubUrl: "https://github.com/UBIT-AI-CV-Platform/SmartHireAI",
    liveUrl: "https://smart-hire-ai-beta.vercel.app/",
    technologies: [
      "GitHub Actions",
      "Next.js",
      "TypeScript",
      "Playwright",
      "ESLint",
      "CI/CD",
    ],
    hideImage: true,
    topBadge: "Final-Year Project",
  },
  {
    title: "Jenkins CI/CD Pipeline",
    description:
      "Explored Jenkins pipeline automation using Groovy, Shared Libraries, role-based access control, Docker, and AWS EC2. Focused on reusable pipeline structure and deployment automation.",
    githubUrl:
      "https://github.com/SufiyanKhanCloud/Django-Notes-App",
    imageUrl: "/lovable-uploads/0f16ee99-0083-4dc5-b8ec-8bc0e93053fd.png",
    technologies: [
      "Jenkins",
      "Groovy",
      "Shared Libraries",
      "RBAC",
      "Docker",
      "AWS EC2",
    ],
  },
  {
    title: "Dockerized Expense Tracker",
    description:
      "Containerized a Java Spring Boot expense-tracking application with MySQL using Docker Compose, including persistent storage, and practiced deploying the application to AWS EC2.",
    githubUrl:
      "https://github.com/SufiyanKhanCloud/docker-practice/tree/main/Expenses-Tracker-WebApp",
    imageUrl: "/lovable-uploads/4be806dc-05ac-4208-961f-fd08d6b0f9a7.png",
    technologies: [
      "Spring Boot",
      "MySQL",
      "Docker",
      "Docker Compose",
      "AWS EC2",
    ],
  },
  {
    title: "Flask + MySQL Application",
    description:
      "Built a two-tier application using Flask and MySQL containers to practice container networking, service configuration, and deployment workflows.",
    githubUrl:
      "https://github.com/SufiyanKhanCloud/docker-practice/tree/main/two-tier-flask-app",
    imageUrl: "/lovable-uploads/f6a1f223-b480-4572-9191-d2ce90198d22.png",
    technologies: ["Flask", "MySQL", "Docker", "Networking"],
  },
  {
    title: "Smart Parking System",
    description:
      "Developed an IoT-based parking system using ESP32 and sensors to monitor parking-slot availability and support gate control through a mobile dashboard.",
    githubUrl:
      "https://github.com/SufiyanKhanCloud/Smart-Parking-System",
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
                <p className="text-muted-foreground text-sm">MAS-Simulator: end-to-end DevOps pipeline and cloud infrastructure</p>
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
