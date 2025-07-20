import { useState } from "react";
import { Download, Github, Linkedin, Mail, ExternalLink, Award, Lightbulb, Code, Cloud, Terminal, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TypewriterEffect } from "@/components/TypewriterEffect";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillCard } from "@/components/SkillCard";
import { ContactForm } from "@/components/ContactForm";
import { FloatingNav } from "@/components/FloatingNav";
import { AnimatedSection } from "@/components/AnimatedSection";
export default function Portfolio() {
  const typewriterTexts = ["Aspiring DevOps Engineer", "Cloud & Infrastructure Automation Enthusiast"];
  const projects = [{
    title: "Dockerized Expense Tracker",
    description: "Java Spring Boot + MySQL app with Docker Compose. Deployed to AWS EC2 with persistent volumes.",
    githubUrl: "https://github.com/SufiyanKhanCloud/docker-practice/tree/main/Expenses-Tracker-WebApp",
    imageUrl: "/lovable-uploads/4be806dc-05ac-4208-961f-fd08d6b0f9a7.png",
    technologies: ["Spring Boot", "MySQL", "Docker", "AWS EC2"]
  }, {
    title: "Flask + MySQL Microservice",
    description: "Two-tier microservices app with Flask and MySQL containers, deployed to EC2 under 10 mins.",
    githubUrl: "https://github.com/SufiyanKhanCloud/docker-practice/tree/main/two-tier-flask-app",
    imageUrl: "/lovable-uploads/f6a1f223-b480-4572-9191-d2ce90198d22.png",
    technologies: ["Flask", "MySQL", "Docker", "Microservices"]
  }, {
    title: "CI/CD Pipeline for Django Notes App",
    description: "Jenkins-based CI/CD pipeline with 4 Groovy scripts. Automates build, test, deploy on AWS.",
    githubUrl: "https://github.com/SufiyanKhanCloud/Django-Notes-App",
    imageUrl: "/lovable-uploads/0f16ee99-0083-4dc5-b8ec-8bc0e93053fd.png",
    technologies: ["Django", "Jenkins", "CI/CD", "Groovy", "AWS"]
  }];
  const certifications = ["Introduction to DevOps", "Introduction to Cloud Computing", "Introduction to Agile Development and Scrum", "Introduction to Linux and Shell Scripting", "Getting Started with Git and GitHub"];
  const skillCategories = [{
    icon: Terminal,
    title: "DevOps Tools",
    skills: ["Docker", "Git", "GitHub", "GitLab", "Jenkins", "CI/CD", "Shell Scripting"]
  }, {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    skills: ["AWS EC2", "VirtualBox", "VMware", "Infrastructure as Code"]
  }, {
    icon: Server,
    title: "Operating Systems",
    skills: ["Linux (Ubuntu)", "Windows", "System Administration"]
  }, {
    icon: Code,
    title: "Programming",
    skills: ["Bash", "Python (basic)", "Groovy Scripts", "YAML"]
  }];
  return <div className="min-h-screen bg-background font-inter relative">
      {/* Background Mesh Gradient */}
      <div className="fixed inset-0 bg-gradient-mesh pointer-events-none" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-primary">
              Sufiyan Khan
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Floating Navigation */}
      <FloatingNav />

      {/* Hero Section */}
      <AnimatedSection id="hero">
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-hero p-1 animate-glow-pulse shadow-elevated">
                <img src="/lovable-uploads/bc5783a9-f1d1-4fc6-bcca-9afee68408a8.png" alt="Sufiyan Khan" className="w-full h-full rounded-full object-cover" />
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-bold mb-4 animate-fade-in">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Sufiyan Khan
                </span>
              </h1>
              
              <div className="text-xl sm:text-2xl text-muted-foreground mb-8 h-16 flex items-center justify-center">
                <TypewriterEffect texts={typewriterTexts} className="font-medium" />
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                Computer Science undergraduate from the University of Karachi, passionate about 
                building scalable cloud systems and automating infrastructure.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" className="animate-scale-in" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="h-5 w-5" />
                    Download CV
                  </a>
                </Button>
                
                <Button variant="glass" size="xl" asChild className="animate-scale-in">
                  <a href="https://github.com/SufiyanKhanCloud" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    View GitHub
                  </a>
                </Button>
                
                <Button variant="glass" size="xl" asChild className="animate-scale-in">
                  <a href="https://linkedin.com/in/sufiyan-khan" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection id="about" animation="slide-in-left" delay={200}>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <Card className="bg-gradient-card border-border/50 shadow-medium hover:shadow-elevated transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm a CS student with a strong interest in scalable cloud systems, CI/CD automation, 
                  and DevOps workflows. I work mostly in Linux environments and enjoy containerizing 
                  and deploying projects on cloud platforms like AWS. Through hands-on projects and 
                  IBM certifications, I've developed expertise in Docker, Jenkins, and infrastructure 
                  automation while building a foundation for modern DevOps practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection id="projects" animation="zoom-in" delay={300}>
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection animation="slide-in-right" delay={400}>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <SkillCard {...category} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Certifications Section */}
      <AnimatedSection id="certifications" animation="slide-up" delay={500}>
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">IBM Certifications</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 bg-gradient-card border-border/50 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      <CardTitle className="text-sm">{cert}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button variant="outline" size="sm" className="w-full hover:bg-primary/10 transition-all duration-300">
                      <ExternalLink className="h-4 w-4" />
                      Verify Certificate
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Extra-Curricular Section */}
      <AnimatedSection animation="slide-in-left" delay={600}>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Community Impact</h2>
            <Card className="bg-gradient-accent text-accent-foreground shadow-elevated hover:shadow-strong transition-all duration-500 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="h-6 w-6 animate-bounce-soft" />
                  <CardTitle className="text-xl">Viral LinkedIn Post Achievement</CardTitle>
                </div>
                <CardDescription className="text-accent-foreground/80">
                  "Linux and Networking for DevOps" - Educational Content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="group hover:scale-105 transition-transform">
                    <div className="text-2xl font-bold group-hover:text-primary transition-colors">26,000+</div>
                    <div className="text-sm text-accent-foreground/80">Impressions</div>
                  </div>
                  <div className="group hover:scale-105 transition-transform">
                    <div className="text-2xl font-bold group-hover:text-primary transition-colors">14,094</div>
                    <div className="text-sm text-accent-foreground/80">Members Engaged</div>
                  </div>
                  <div className="group hover:scale-105 transition-transform">
                    <div className="text-2xl font-bold group-hover:text-primary transition-colors">135+</div>
                    <div className="text-sm text-accent-foreground/80">New Followers</div>
                  </div>
                  <div className="group hover:scale-105 transition-transform">
                    <div className="text-2xl font-bold group-hover:text-primary transition-colors">159</div>
                    <div className="text-sm text-accent-foreground/80">Reactions</div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-accent-foreground/10 rounded-lg hover:bg-accent-foreground/15 transition-colors">
                  <p className="text-sm text-accent-foreground/90">
                    Actively participating in DevOps communities and sharing my learning journey 
                    to help fellow developers understand Linux fundamentals and networking concepts 
                    essential for DevOps roles.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" animation="zoom-in" delay={700}>
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              I'm always interested in discussing DevOps, cloud technologies, and 
              opportunities to collaborate on exciting projects.
            </p>
            
            <ContactForm />
            
            <div className="mt-8">
              <Button variant="cta" size="xl" asChild className="animate-glow-pulse">
                <a href="mailto:sufiyan@example.com">
                  <Mail className="h-5 w-5" />
                  Or Send Direct Email
                </a>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30 relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground hover:text-foreground transition-colors">
            © 2025 Sufiyan Khan. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>;
}