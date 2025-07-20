import { useState } from "react";
import { Download, Github, Linkedin, Mail, ExternalLink, Award, Lightbulb, Code, Cloud, Terminal, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TypewriterEffect } from "@/components/TypewriterEffect";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillCard } from "@/components/SkillCard";

export default function Portfolio() {
  const typewriterTexts = [
    "Aspiring DevOps Engineer",
    "Cloud & Infrastructure Automation Enthusiast"
  ];

  const projects = [
    {
      title: "Dockerized Expense Tracker",
      description: "Java Spring Boot + MySQL app with Docker Compose. Deployed to AWS EC2 with persistent volumes.",
      githubUrl: "https://github.com/SufiyanKhanCloud/docker-practice/tree/main/Expenses-Tracker-WebApp",
      technologies: ["Spring Boot", "MySQL", "Docker", "AWS EC2"]
    },
    {
      title: "Flask + MySQL Microservice", 
      description: "Two-tier microservices app with Flask and MySQL containers, deployed to EC2 under 10 mins.",
      githubUrl: "https://github.com/SufiyanKhanCloud/docker-practice/tree/main/two-tier-flask-app",
      technologies: ["Flask", "MySQL", "Docker", "Microservices"]
    },
    {
      title: "CI/CD Pipeline for Django Notes App",
      description: "Jenkins-based CI/CD pipeline with 4 Groovy scripts. Automates build, test, deploy on AWS.",
      githubUrl: "https://github.com/SufiyanKhanCloud/Django-Notes-App",
      technologies: ["Django", "Jenkins", "CI/CD", "Groovy", "AWS"]
    }
  ];

  const certifications = [
    "Introduction to DevOps",
    "Introduction to Cloud Computing", 
    "Introduction to Agile Development and Scrum",
    "Introduction to Linux and Shell Scripting",
    "Getting Started with Git and GitHub"
  ];

  const skillCategories = [
    {
      icon: Terminal,
      title: "DevOps Tools",
      skills: ["Docker", "Git", "GitHub", "GitLab", "Jenkins", "CI/CD", "Shell Scripting"]
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure", 
      skills: ["AWS EC2", "VirtualBox", "VMware", "Infrastructure as Code"]
    },
    {
      icon: Server,
      title: "Operating Systems",
      skills: ["Linux (Ubuntu)", "Windows", "System Administration"]
    },
    {
      icon: Code,
      title: "Programming",
      skills: ["Bash", "Python (basic)", "Groovy Scripts", "YAML"]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
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

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-hero p-1 animate-glow-pulse">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-6xl font-bold text-primary">
                SK
              </div>
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
              <Button variant="hero" size="xl" className="animate-scale-in">
                <Download className="h-5 w-5" />
                Download CV
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

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <Card className="bg-gradient-card border-border/50 shadow-medium">
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

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">IBM Certifications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-primary" />
                    <CardTitle className="text-sm">{cert}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="outline" size="sm" className="w-full hover:bg-primary/10">
                    <ExternalLink className="h-4 w-4" />
                    Verify Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extra-Curricular Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Community Impact</h2>
          <Card className="bg-gradient-accent text-accent-foreground shadow-strong">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="h-6 w-6" />
                <CardTitle className="text-xl">Viral LinkedIn Post Achievement</CardTitle>
              </div>
              <CardDescription className="text-accent-foreground/80">
                "Linux and Networking for DevOps" - Educational Content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">26,000+</div>
                  <div className="text-sm text-accent-foreground/80">Impressions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">14,094</div>
                  <div className="text-sm text-accent-foreground/80">Members Engaged</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">135+</div>
                  <div className="text-sm text-accent-foreground/80">New Followers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">159</div>
                  <div className="text-sm text-accent-foreground/80">Reactions</div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-accent-foreground/10 rounded-lg">
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

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in discussing DevOps, cloud technologies, and 
            opportunities to collaborate on exciting projects.
          </p>
          
          <Button variant="cta" size="xl" asChild className="animate-glow-pulse">
            <a href="mailto:sufiyan@example.com">
              <Mail className="h-5 w-5" />
              Get In Touch
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Sufiyan Khan. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}