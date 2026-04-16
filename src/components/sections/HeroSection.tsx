import { motion } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/TypewriterEffect";
import { AnimatedSection } from "@/components/AnimatedSection";
import { LazyImage } from "@/components/LazyImage";
import { FloatingShapes } from "@/components/FloatingShapes";
import { MagneticButton } from "@/components/MagneticButton";
import { LiveTerminal } from "@/components/LiveTerminal";

const typewriterTexts = ["DevOps Engineer", "Cloud & Infrastructure Automation Enthusiast"];

export function HeroSection() {
  return (
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

              {/* Live Terminal */}
              <motion.div
                className="w-full max-w-xl mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <LiveTerminal />
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
  );
}
