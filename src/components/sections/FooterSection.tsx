import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FooterSection() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-gradient-to-br from-background via-muted/50 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col items-center space-y-6">
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
          
          <div className="w-24 h-px bg-gradient-hero"></div>
          
          <p className="text-muted-foreground hover:text-foreground transition-colors text-center">
            © 2026 Sufiyan Khan. Built with React, TypeScript, and Tailwind CSS.
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium hover:bg-primary/20 transition-colors">React</span>
            <span className="px-3 py-1 bg-secondary/10 text-secondary-foreground rounded-full text-xs font-medium hover:bg-secondary/20 transition-colors">TypeScript</span>
            <span className="px-3 py-1 bg-accent/10 text-accent-foreground rounded-full text-xs font-medium hover:bg-accent/20 transition-colors">Tailwind CSS</span>
            <span className="px-3 py-1 bg-muted/20 text-muted-foreground rounded-full text-xs font-medium hover:bg-muted/30 transition-colors">Lovable</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
