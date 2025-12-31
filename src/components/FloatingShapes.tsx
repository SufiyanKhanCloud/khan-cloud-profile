import { useEffect, useState } from "react";

export function FloatingShapes() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div
        className="absolute w-4 h-4 border border-primary/20 rotate-45"
        style={{
          top: "15%",
          left: "10%",
          transform: `translateY(${scrollY * 0.2}px) rotate(${45 + scrollY * 0.05}deg)`,
          transition: "transform 0.1s ease-out",
        }}
      />
      <div
        className="absolute w-6 h-6 border border-secondary/20 rounded-full"
        style={{
          top: "25%",
          right: "15%",
          transform: `translateY(${scrollY * 0.15}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />
      <div
        className="absolute w-3 h-3 bg-primary/10 rounded-full"
        style={{
          top: "40%",
          left: "20%",
          transform: `translateY(${scrollY * 0.25}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />
      <div
        className="absolute w-5 h-5 border border-accent/20 rotate-12"
        style={{
          top: "60%",
          right: "20%",
          transform: `translateY(${scrollY * -0.1}px) rotate(${12 + scrollY * 0.03}deg)`,
          transition: "transform 0.1s ease-out",
        }}
      />
      <div
        className="absolute w-2 h-2 bg-secondary/10 rounded-full"
        style={{
          top: "70%",
          left: "25%",
          transform: `translateY(${scrollY * 0.18}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />
      
      {/* Subtle lines */}
      <div
        className="absolute w-px h-32 bg-gradient-to-b from-transparent via-primary/10 to-transparent"
        style={{
          top: "20%",
          left: "5%",
          transform: `translateY(${scrollY * 0.12}px)`,
        }}
      />
      <div
        className="absolute w-px h-24 bg-gradient-to-b from-transparent via-secondary/10 to-transparent"
        style={{
          top: "50%",
          right: "8%",
          transform: `translateY(${scrollY * -0.08}px)`,
        }}
      />
    </div>
  );
}
