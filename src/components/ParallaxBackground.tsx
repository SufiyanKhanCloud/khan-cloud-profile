import { useEffect, useState } from "react";

export function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Subtle floating orbs that move with parallax */}
      <div
        className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        style={{
          top: "10%",
          left: "5%",
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full bg-secondary/5 blur-3xl"
        style={{
          top: "30%",
          right: "10%",
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      />
      <div
        className="absolute w-64 h-64 rounded-full bg-accent/5 blur-3xl"
        style={{
          bottom: "20%",
          left: "15%",
          transform: `translateY(${scrollY * -0.08}px)`,
        }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: `translateY(${scrollY * 0.02}px)`,
        }}
      />
    </div>
  );
}
