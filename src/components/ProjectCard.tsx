import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
}

export function ProjectCard({ title, description, githubUrl, imageUrl, technologies, liveUrl }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden border-border/50 bg-gradient-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 relative">
      <div className="aspect-video overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={`${title} screenshot`} 
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <Button size="sm" variant="secondary" asChild className="shadow-medium">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} source code`}>
                <Github className="h-4 w-4" />
              </a>
            </Button>
            {liveUrl && (
              <Button size="sm" variant="secondary" asChild className="shadow-medium">
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} live demo`}>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs hover:bg-primary/10 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild className="flex-1 hover:bg-primary/10">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          </Button>
          {liveUrl && (
            <Button variant="default" size="sm" asChild className="flex-1">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}