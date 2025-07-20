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
    <Card className="bg-gradient-card border-border/50 hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 group h-full">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
            <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
          </div>
          <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="grid grid-cols-2 gap-2">
          {skills.map((skill, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-xs hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 cursor-default justify-center"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}