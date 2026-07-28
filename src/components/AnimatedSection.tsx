import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "slide-up" | "slide-in-left" | "slide-in-right" | "zoom-in" | "fade-in";
  delay?: number;
  id?: string;
  parallax?: boolean;
  parallaxSpeed?: number;
}

export function AnimatedSection({ 
  children, 
  className = "", 
  animation = "slide-up",
  delay = 0,
  id,
  parallax = false,
  parallaxSpeed = 0.05
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!parallax) return;
    
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        setScrollOffset(scrollProgress * 100 * parallaxSpeed);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [parallax, parallaxSpeed]);

  const getAnimationClass = () => {
    switch (animation) {
      case "slide-up":
        return isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0";
      case "slide-in-left":
        return isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0";
      case "slide-in-right":
        return isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0";
      case "zoom-in":
        return isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0";
      case "fade-in":
        return isVisible ? "opacity-100" : "opacity-0";
      default:
        return isVisible ? "opacity-100" : "opacity-0";
    }
  };

  return (
    <div
      ref={ref}
      id={id}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        getAnimationClass(),
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        ...(parallax && isVisible ? { transform: `translateY(${scrollOffset}px)` } : {}),
      }}
    >
      {children}
    </div>
  );
}
