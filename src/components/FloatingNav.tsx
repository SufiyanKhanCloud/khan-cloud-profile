import { useState, useEffect } from "react";
import { Home, User, Code, Award, Mail } from "lucide-react";

const navItems = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "projects", icon: Code, label: "Projects" },
  { id: "certifications", icon: Award, label: "Certifications" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-100px 0px -100px 0px" }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-background/80 backdrop-blur-md border border-border rounded-full shadow-strong px-4 py-2">
        <div className="flex items-center gap-2">
          {navItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`p-3 rounded-full transition-all duration-300 group relative ${
                activeSection === id
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}