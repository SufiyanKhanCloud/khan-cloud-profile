import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "slide-up" | "slide-in-left" | "slide-in-right" | "zoom-in" | "fade-in";
  delay?: number;
  id?: string;
}

export function AnimatedSection({ 
  children, 
  className = "", 
  animation = "slide-up",
  delay = 0,
  id
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      id={id}
      className={`transition-all duration-700 ${
        isVisible 
          ? `animate-${animation} opacity-100` 
          : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}