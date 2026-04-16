import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedSection } from "@/components/AnimatedSection";
import { MagneticButton } from "@/components/MagneticButton";

export function ContactSection() {
  return (
    <AnimatedSection id="contact" animation="zoom-in" delay={700}>
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            Looking to set up CI/CD, secure your infrastructure, or automate your deployment pipeline? Let's talk.
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
  );
}
