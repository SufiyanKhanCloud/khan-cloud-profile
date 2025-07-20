import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

export function SkillCard({ icon: Icon, title, skills }: SkillCardProps) {
  return (
    <div className="group p-6 rounded-lg bg-gradient-card border border-border/50 hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
      </div>
      
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            • {skill}
          </div>
        ))}
      </div>
    </div>
  );
}