import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, ExternalLink, Award, Lightbulb, Code, Cloud, Terminal, Server, Menu, X, Box, GitMerge, Activity } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";
import { TiltCard } from "@/components/TiltCard";
import { CursorGlow } from "@/components/CursorGlow";
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
import { ScrollProgress } from "@/components/ScrollProgress";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { FloatingShapes } from "@/components/FloatingShapes";
import { MagneticButton } from "@/components/MagneticButton";
import { FloatingTechLogos } from "@/components/FloatingTechLogos";
import { WorkExperience } from "@/components/WorkExperience";
import { StatsCounter } from "@/components/StatsCounter";
import { Briefcase } from "lucide-react";
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const typewriterTexts = ["DevOps Engineer", "Cloud & Infrastructure Automation Enthusiast"];
  const projects = [{
    title: "CI/CD Pipeline for Django Notes App",
    description: "Jenkins-based CI/CD pipeline with 4 Groovy scripts. Automates build, test, deploy on AWS.",
    githubUrl: "https://github.com/SufiyanKhanCloud/Django-Notes-App",
    imageUrl: "/lovable-uploads/0f16ee99-0083-4dc5-b8ec-8bc0e93053fd.png",
    technologies: ["Django", "Jenkins", "CI/CD", "Groovy", "AWS"]
  }, {
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
    title: "Smart Parking System (IoT-Based)",
    description: "IoT-based parking system using ESP32 and sensors to monitor real-time slot availability and automate gate control with mobile dashboard.",
    githubUrl: "https://github.com/SufiyanKhanCloud/Smart-Parking-System",
    imageUrl: "/lovable-uploads/smart-parking-system.jpeg",
    technologies: ["ESP32", "IoT", "IR Sensors", "Blynk", "Automation"]
  }, {
    title: "MAS-Simulator (Queueing Theory Engine)",
    description: "A high-performance simulation platform for analyzing M/M/1, M/M/S, and M/G/1 queueing models. Features optimized multi-stage Docker builds, non-root container security, real-time statistical engine, and priority scheduling analysis.",
    githubUrl: "https://github.com/SufiyanKhanCloud/MAS-SimulatorV2",
    liveUrl: "https://mas-simulator-calculator.vercel.app/",
    imageUrl: "/lovable-uploads/mas-simulator.png",
    technologies: ["Next.js", "TypeScript", "Docker", "Tailwind CSS"]
  }];
  const certifications = [
    { name: "Introduction to DevOps", url: "https://www.coursera.org/account/accomplishments/verify/OIGBYO6L8GZJ" },
    { name: "Introduction to Cloud Computing", url: "https://www.coursera.org/account/accomplishments/verify/O4EN4P7ZI6XV" },
    { name: "Introduction to Agile Development and Scrum", url: "https://www.coursera.org/account/accomplishments/verify/PV26WR8KH5MX" },
    { name: "Introduction to Linux and Shell Scripting", url: "https://www.coursera.org/account/accomplishments/verify/07JX8O7ZPDCY" },
    { name: "Getting Started with Git and GitHub", url: "https://www.coursera.org/account/accomplishments/verify/6JZJJTDRFPBT" },
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
    { name: "Experience", href: "#experience" },
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
      <CursorGlow />
      <PageLoader />
      <ScrollProgress />
      <FloatingTechLogos />
      <div className="min-h-screen bg-background font-body relative grain-overlay">
        {/* Enhanced Parallax Background */}
        <ParallaxBackground />
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
      <main>
      {/* Hero Section */}
      <AnimatedSection id="hero">
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative min-h-[85vh] flex items-center" role="banner">
          <FloatingShapes />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Left side - Text content */}
              <motion.div 
                className="flex-1 text-center lg:text-left"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
                >
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Available for opportunities
                </motion.div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-display leading-tight">
                  <span className="text-foreground">Hi, I'm </span>
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    Sufiyan Khan
                  </span>
                </h1>
                
                <div className="text-xl sm:text-2xl text-muted-foreground mb-6 h-12 flex items-center justify-center lg:justify-start">
                  <TypewriterEffect texts={typewriterTexts} className="font-medium" />
                </div>
                
                <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
                  Final-year CS student at UBIT building and fixing production infrastructure at Teknoloje Solutions. I deploy real systems, solve real problems, and document everything.
                </p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <MagneticButton strength={0.2}>
                    <Button variant="hero" size="xl" className="group shadow-strong hover:shadow-glow transition-shadow duration-300" asChild>
                      <a href="/resume.pdf" download>
                        <Download className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        Download CV
                      </a>
                    </Button>
                  </MagneticButton>
                  
                  <MagneticButton strength={0.2}>
                    <Button variant="glass" size="xl" asChild className="group">
                      <a href="https://github.com/SufiyanKhanCloud" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                        View GitHub
                      </a>
                    </Button>
                  </MagneticButton>
                  
                  <MagneticButton strength={0.2}>
                    <Button variant="glass" size="xl" asChild className="group">
                      <a href="https://www.linkedin.com/in/sufiyan-khan-cloud" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        LinkedIn
                      </a>
                    </Button>
                  </MagneticButton>
                </motion.div>
              </motion.div>

              {/* Right side - Profile image */}
              <motion.div
                className="flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-hero p-1 animate-glow-pulse shadow-elevated relative group">
                  <div className="absolute inset-0 rounded-full bg-gradient-hero opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500" />
                  <LazyImage 
                    src="/lovable-uploads/bc5783a9-f1d1-4fc6-bcca-9afee68408a8.png" 
                    alt="Sufiyan Khan - DevOps Engineer" 
                    className="w-full h-full rounded-full object-cover relative z-10" 
                  />
                </div>
              </motion.div>
            </div>
              
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft opacity-50">
              <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
                <div className="w-1 h-2 bg-muted-foreground/50 rounded-full mt-2 animate-pulse-subtle" />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Stats Counter */}
      <StatsCounter />

      {/* About Section */}
      <AnimatedSection id="about" animation="slide-in-left" delay={200}>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 relative" aria-label="About Sufiyan Khan">
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

      {/* Core Engineering Focus Section */}
      <AnimatedSection id="engineering-focus" animation="fade-in" delay={200}>
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative" aria-label="Core Engineering Focus">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-gradient-hero"></div>
                <Terminal className="h-6 w-6 text-primary animate-pulse" />
                <div className="w-12 h-0.5 bg-gradient-hero"></div>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
                Core Engineering Focus
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The pillars that drive my technical craft
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Box,
                  title: "Containerization & Infrastructure",
                  description: "Building reproducible, secure environments. Hands-on experience containerizing multi-tier applications with optimized multi-stage Docker builds and deploying across AWS.",
                },
                {
                  icon: GitMerge,
                  title: "CI/CD & Automation",
                  description: "Eliminating manual toil through deployment pipelines. Leveraging GitHub Actions and shell scripting to accelerate development cycles and ensure reliable delivery.",
                },
                {
                  icon: Activity,
                  title: "Hybrid SysAdmin & Observability",
                  description: "Bridging Linux and Windows Server environments. Configuring IIS, strict network security, and full-stack monitoring using Prometheus, Grafana, and the ELK stack.",
                },
              ].map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <TiltCard className="h-full relative rounded-xl">
                    <SpotlightCard className="h-full rounded-xl">
                      <Card className="bg-gradient-card border-border/50 hover:shadow-elevated transition-all duration-500 group h-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                        <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
                        <CardHeader className="pb-3 relative">
                          <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 w-fit mb-3">
                            <pillar.icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                            {pillar.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 relative">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {pillar.description}
                          </p>
                        </CardContent>
                      </Card>
                    </SpotlightCard>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>


      <AnimatedSection id="experience" animation="slide-in-left" delay={200}>
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <WorkExperience />
        </section>
      </AnimatedSection>

      {/* Projects Section */}
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
              {projects.map((project, index) => (
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
                            <Button variant="outline" size="sm" className="w-full hover:bg-primary/10 transition-all duration-300">
                              <ExternalLink className="h-4 w-4" />
                              Verify Certificate
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-gradient-hero animate-pulse-subtle"></div>
                <Mail className="h-6 w-6 text-primary animate-float-gentle" />
                <div className="w-12 h-0.5 bg-gradient-hero animate-pulse-subtle"></div>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
                Let's Connect
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm always interested in discussing DevOps, cloud technologies, and 
              opportunities to collaborate on exciting projects.
            </p>
            
            <div className="max-w-xl mx-auto">
              <ContactForm />
            </div>
            
            <div className="flex items-center justify-center gap-4 my-10">
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-24"></div>
              <span className="text-muted-foreground text-sm font-medium px-4">OR</span>
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-24"></div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <MagneticButton strength={0.15}>
                <Button variant="cta" size="xl" asChild className="shadow-strong hover:shadow-glow transition-shadow duration-300">
                  <a href="mailto:sufiikhan980@gmail.com">
                    <Mail className="h-5 w-5" />
                    Send Direct Email
                  </a>
                </Button>
              </MagneticButton>
              
              <div className="flex gap-3">
                <MagneticButton strength={0.3}>
                  <Button variant="ghost" size="icon" asChild className="hover:scale-110 hover:bg-primary/10 transition-all duration-300">
                    <a href="https://www.linkedin.com/in/sufiyan-khan-cloud" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </MagneticButton>
                <MagneticButton strength={0.3}>
                  <Button variant="ghost" size="icon" asChild className="hover:scale-110 hover:bg-primary/10 transition-all duration-300">
                    <a href="https://github.com/SufiyanKhanCloud" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
      </main>

        {/* Enhanced Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-gradient-to-br from-background via-muted/50 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex flex-col items-center space-y-6">
              {/* Social Links */}
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" asChild className="hover:scale-110 hover:bg-primary/10 transition-all duration-300">
                  <a href="https://github.com/SufiyanKhanCloud" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover:scale-110 hover:bg-primary/10 transition-all duration-300">
                  <a href="https://www.linkedin.com/in/sufiyan-khan-cloud" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover:scale-110 hover:bg-primary/10 transition-all duration-300">
                  <a href="mailto:sufiikhan980@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
              
              {/* Divider */}
              <div className="w-24 h-px bg-gradient-hero"></div>
              
              {/* Copyright */}
              <p className="text-muted-foreground hover:text-foreground transition-colors text-center">
                © 2026 Sufiyan Khan. Built with React, TypeScript, and Tailwind CSS.
              </p>
              
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium hover:bg-primary/20 transition-colors">React</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary-foreground rounded-full text-xs font-medium hover:bg-secondary/20 transition-colors">TypeScript</span>
                <span className="px-3 py-1 bg-accent/10 text-accent-foreground rounded-full text-xs font-medium hover:bg-accent/20 transition-colors">Tailwind CSS</span>
                <span className="px-3 py-1 bg-muted/20 text-muted-foreground rounded-full text-xs font-medium hover:bg-muted/30 transition-colors">Lovable</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}