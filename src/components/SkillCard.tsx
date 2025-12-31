import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

export function SkillCard({ icon: Icon, title, skills }: SkillCardProps) {
  return (
    <Card className="bg-gradient-card border-border/50 hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 group h-full relative overflow-hidden">
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
      
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
      
      <CardHeader className="pb-4 relative">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
            <Icon className="h-5 w-5 text-primary transition-transform duration-300" />
          </div>
          <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 relative">
        <div className="grid grid-cols-2 gap-2">
          {skills.map((skill, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-xs hover:bg-primary/10 hover:border-primary/30 hover:scale-105 transition-all duration-300 cursor-default justify-center py-1.5"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
