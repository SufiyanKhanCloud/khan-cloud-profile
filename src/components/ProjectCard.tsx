import { Github, ExternalLink, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl?: string;
  imageUrl?: string;
  technologies: string[];
  liveUrl?: string;
  hideImage?: boolean;
}

export function ProjectCard({ title, description, githubUrl, imageUrl, technologies, liveUrl, hideImage }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden border-border/50 bg-gradient-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-3 relative h-full">
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg" />
      
      {imageUrl ? (
        <div className="aspect-video overflow-hidden relative">
          <img 
            src={imageUrl} 
            alt={`${title} screenshot`} 
            className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <div className="flex gap-2">
              {githubUrl && (
                <Button size="sm" variant="secondary" asChild className="shadow-medium backdrop-blur-sm bg-background/80">
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} source code`}>
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {liveUrl && (
                <Button size="sm" variant="secondary" asChild className="shadow-medium backdrop-blur-sm bg-background/80">
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} live demo`}>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="aspect-video overflow-hidden relative bg-gradient-to-br from-primary/10 via-muted/50 to-primary/5 flex items-center justify-center">
          <div className="text-center">
            <Shield className="h-10 w-10 text-primary/40 mx-auto mb-2 group-hover:scale-110 transition-transform duration-500" />
            <span className="text-xs text-muted-foreground font-medium">Production System</span>
          </div>
        </div>
      )}
      
      <CardHeader className="pb-3 relative">
        <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
          {title}
          <span className="w-0 group-hover:w-4 h-0.5 bg-primary transition-all duration-300" />
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0 relative">
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs hover:bg-primary/10 hover:scale-105 transition-all duration-300"
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2">
          {githubUrl ? (
            <Button variant="outline" size="sm" asChild className="flex-1 hover:bg-primary/10 group/btn">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                Code
              </a>
            </Button>
          ) : (
            <Button variant="outline" size="sm" className="flex-1 opacity-60 cursor-default" disabled>
              <Shield className="h-4 w-4 mr-2" />
              NDA Protected
            </Button>
          )}
          {liveUrl && (
            <Button variant="default" size="sm" asChild className="flex-1 group/btn">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
