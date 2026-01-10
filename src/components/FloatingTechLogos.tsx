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
  Workflow,
  Box,
  FileCode,
  Layers,
  Monitor
} from "lucide-react";

interface FloatingLogo {
  id: number;
  Icon: React.ElementType;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  direction: 'up' | 'down' | 'left' | 'right';
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
      Workflow, // CI/CD
      Box, // Container
      FileCode, // Code
      Layers, // Infrastructure
      Monitor, // Monitoring
      Container, // Duplicate for more coverage
      Github,
      Terminal,
      Cloud,
    ];

    const generatedLogos: FloatingLogo[] = techIcons.map((Icon, index) => ({
      id: index,
      Icon,
      x: (index * 17 + Math.random() * 15) % 90 + 5, // Better distribution
      y: (index * 23 + Math.random() * 20) % 85 + 5,
      size: Math.random() * 20 + 24, // 24-44px (bigger)
      duration: Math.random() * 10 + 15, // 15-25s
      delay: Math.random() * -15,
      direction: ['up', 'down', 'left', 'right'][index % 4] as 'up' | 'down' | 'left' | 'right'
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
            className="absolute text-primary/25 dark:text-primary/30"
            style={{
              left: `${logo.x}%`,
              top: `${logo.y}%`,
              animation: `float-tech-${logo.direction} ${logo.duration}s ease-in-out infinite`,
              animationDelay: `${logo.delay}s`,
            }}
          >
            <IconComponent 
              size={logo.size} 
              strokeWidth={1.5}
              className="drop-shadow-md"
            />
          </div>
        );
      })}
      
      <style>{`
        @keyframes float-tech-up {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-30px) rotate(8deg);
          }
          50% {
            transform: translateY(-15px) rotate(-5deg);
          }
          75% {
            transform: translateY(-35px) rotate(3deg);
          }
        }
        
        @keyframes float-tech-down {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(25px) rotate(-6deg);
          }
          50% {
            transform: translateY(12px) rotate(4deg);
          }
          75% {
            transform: translateY(30px) rotate(-3deg);
          }
        }
        
        @keyframes float-tech-left {
          0%, 100% {
            transform: translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateX(-20px) rotate(-5deg);
          }
          50% {
            transform: translateX(-10px) rotate(3deg);
          }
          75% {
            transform: translateX(-25px) rotate(-2deg);
          }
        }
        
        @keyframes float-tech-right {
          0%, 100% {
            transform: translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateX(20px) rotate(5deg);
          }
          50% {
            transform: translateX(10px) rotate(-3deg);
          }
          75% {
            transform: translateX(25px) rotate(2deg);
          }
        }
      `}</style>
    </div>
  );
}
