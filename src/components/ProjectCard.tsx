import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  imageUrl?: string;
  technologies?: string[];
}
export function ProjectCard({
  title,
  description,
  githubUrl,
  imageUrl,
  technologies
}: ProjectCardProps) {
  return <Card className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
      {imageUrl && <div className="relative overflow-hidden rounded-t-lg">
          <img src={imageUrl} alt={title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
          
        </div>}
      
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {technologies && technologies.length > 0 && <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => <span key={index} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                {tech}
              </span>)}
          </div>}
        
        <div className="flex gap-3">
          <Button variant="outline" size="sm" asChild className="hover:bg-primary/10 hover:border-primary/50">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              View Code
            </a>
          </Button>
          
          <Button variant="ghost" size="sm" asChild className="hover:bg-accent/10 hover:text-accent">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>;
}