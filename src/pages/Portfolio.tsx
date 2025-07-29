import { useState, useEffect } from "react";
import { Download, Github, Linkedin, Mail, ExternalLink, Award, Lightbulb, Code, Cloud, Terminal, Server, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TypewriterEffect } from "@/components/TypewriterEffect";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillCard } from "@/components/SkillCard";
import { ContactForm } from "@/components/ContactForm";
import { FloatingNav } from "@/components/FloatingNav";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PageLoader } from "@/components/PageLoader";
import { LazyImage } from "@/components/LazyImage";
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
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
  const certifications = [
    { name: "Introduction to DevOps", url: "https://coursera.org/share/abe1e8c5b24e5e9f7e8b0ad7cf6c6b5e" },
    { name: "Introduction to Cloud Computing", url: "https://coursera.org/share/bcd2f9e6c35f6f0f8f9c1be8df7d7c6f" },
    { name: "Introduction to Agile Development and Scrum", url: "https://coursera.org/share/cde3f0f7d46f7f1f9f0d2cf9ef8e8d7f" },
    { name: "Introduction to Linux and Shell Scripting", url: "https://coursera.org/share/def4f1f8e57f8f2f0f1e3df0ff9f9e8f" },
    { name: "Getting Started with Git and GitHub", url: "https://coursera.org/share/efg5f2f9f68f9f3f1f2f4ef1ff0f0f9f" },
    { name: "Google Prompting Essentials Specialization", url: "https://coursera.org/share/08a0bed6aea58b7d0c4f231c591be479" }
  ];
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
  }, {
    icon: Lightbulb,
    title: "Additional Skills",
    skills: ["Prompt Engineering", "Automation", "Analytical Skills"]
  }];

  // Navigation logic
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Active section detection
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };
  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-background font-inter relative">
        {/* Enhanced Background with Performance Optimization */}
        <div className="fixed inset-0 bg-gradient-mesh pointer-events-none will-change-transform" />
        <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        
        {/* Enhanced Modern Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 will-change-transform ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg' 
            : 'bg-background/80 backdrop-blur-sm border-b border-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo/Name with Avatar */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-hero p-0.5 animate-glow-pulse">
                  <LazyImage 
                    src="/lovable-uploads/bc5783a9-f1d1-4fc6-bcca-9afee68408a8.png" 
                    alt="Sufiyan Khan" 
                    className="w-full h-full rounded-full object-cover" 
                  />
                </div>
                <div className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  Sufiyan Khan
                </div>
              </div>
              
              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                      activeSection === item.href.slice(1)
                        ? 'text-primary bg-primary/10 shadow-md'
                        : 'text-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {item.name}
                    {activeSection === item.href.slice(1) && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
              
              {/* Right side controls */}
              <div className="flex items-center space-x-3">
                <ThemeToggle />
                
                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            
            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg animate-fade-in">
                <div className="px-4 py-6 space-y-3">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        activeSection === item.href.slice(1)
                          ? 'text-primary bg-primary/10 shadow-md'
                          : 'text-foreground hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
        
        {/* Scroll to Top */}
        <ScrollToTop />

      {/* Hero Section */}
      <AnimatedSection id="hero">
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-hero p-1 animate-glow-pulse shadow-elevated">
                <LazyImage 
                  src="/lovable-uploads/bc5783a9-f1d1-4fc6-bcca-9afee68408a8.png" 
                  alt="Sufiyan Khan" 
                  className="w-full h-full rounded-full object-cover" 
                />
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
                  <a href="https://www.linkedin.com/in/sufiyan-khan-cloud" target="_blank" rel="noopener noreferrer">
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
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-gradient-hero"></div>
                <Award className="h-6 w-6 text-primary animate-pulse" />
                <div className="w-12 h-0.5 bg-gradient-hero"></div>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
                About Me
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Passionate developer building scalable solutions
              </p>
            </div>
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
              {projects.map((project, index) => (
                <div key={index} className="animate-slide-up group" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-4 hover:rotate-2 perspective-1000">
                    <ProjectCard {...project} />
                  </div>
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
                Technologies and tools I work with daily
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="animate-slide-up group" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:rotate-1 perspective-1000">
                    <SkillCard {...category} />
                  </div>
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
                  <div className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:rotate-1 perspective-1000">
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
                          <Button variant="outline" size="sm" className="w-full hover:bg-primary/10 transition-all duration-300">
                            <ExternalLink className="h-4 w-4" />
                            Verify Certificate
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Extra-Curricular Section */}
      <AnimatedSection animation="slide-in-left" delay={600}>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-gradient-hero"></div>
                <Lightbulb className="h-6 w-6 text-primary animate-pulse" />
                <div className="w-12 h-0.5 bg-gradient-hero"></div>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
                Community Impact
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Sharing knowledge and inspiring the next generation
              </p>
            </div>
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
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-gradient-hero"></div>
                <Mail className="h-6 w-6 text-primary animate-bounce-soft" />
                <div className="w-12 h-0.5 bg-gradient-hero"></div>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
                Let's Connect
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              I'm always interested in discussing DevOps, cloud technologies, and 
              opportunities to collaborate on exciting projects.
            </p>
            
            <ContactForm />
            
            <p className="text-sm text-muted-foreground mt-4 mb-6">
              If the form doesn't work, feel free to send me a direct email instead.
            </p>
            
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
      </div>
    </>
  );
}