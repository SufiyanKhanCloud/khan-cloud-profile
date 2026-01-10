import { useEffect, useState } from "react";
import { 
  Container, 
  GitBranch, 
  Github, 
  Terminal, 
  Cloud, 
  Server, 
  Database,
  Cpu,
  Settings,
  Workflow
} from "lucide-react";

interface FloatingLogo {
  id: number;
  Icon: React.ElementType;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  direction: 'up' | 'down';
}

export function FloatingTechLogos() {
  const [logos, setLogos] = useState<FloatingLogo[]>([]);

  useEffect(() => {
    const techIcons = [
      Container, // Docker
      GitBranch, // Git
      Github,
      Terminal, // Linux/Bash
      Cloud, // AWS/Cloud
      Server,
      Database, // MySQL
      Cpu, // Hardware/IoT
      Settings, // DevOps
      Workflow // CI/CD
    ];

    const generatedLogos: FloatingLogo[] = techIcons.map((Icon, index) => ({
      id: index,
      Icon,
      x: Math.random() * 90 + 5, // 5-95% to avoid edges
      y: Math.random() * 80 + 10, // 10-90%
      size: Math.random() * 16 + 20, // 20-36px
      duration: Math.random() * 15 + 20, // 20-35s
      delay: Math.random() * -20, // Stagger start
      direction: Math.random() > 0.5 ? 'up' : 'down'
    }));

    setLogos(generatedLogos);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {logos.map((logo) => {
        const IconComponent = logo.Icon;
        return (
          <div
            key={logo.id}
            className="absolute text-primary/15 dark:text-primary/20"
            style={{
              left: `${logo.x}%`,
              top: `${logo.y}%`,
              animation: `float-${logo.direction} ${logo.duration}s ease-in-out infinite`,
              animationDelay: `${logo.delay}s`,
            }}
          >
            <IconComponent 
              size={logo.size} 
              strokeWidth={1.5}
              className="drop-shadow-sm"
            />
          </div>
        );
      })}
      
      <style>{`
        @keyframes float-up {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.15;
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-10px) rotate(-3deg);
            opacity: 0.18;
          }
          75% {
            transform: translateY(-25px) rotate(2deg);
            opacity: 0.15;
          }
        }
        
        @keyframes float-down {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.15;
          }
          25% {
            transform: translateY(15px) rotate(-4deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(8px) rotate(3deg);
            opacity: 0.18;
          }
          75% {
            transform: translateY(20px) rotate(-2deg);
            opacity: 0.15;
          }
        }
      `}</style>
    </div>
  );
}
