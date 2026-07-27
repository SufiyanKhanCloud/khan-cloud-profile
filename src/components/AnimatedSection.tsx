import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "slide-up" | "slide-in-left" | "slide-in-right" | "zoom-in" | "fade-in";
  delay?: number;
  id?: string;
  parallax?: boolean;
  parallaxSpeed?: number;
}

// Custom easing — a refined "expo-out" curve shared across all entrances.
const EASE = [0.16, 1, 0.3, 1] as const;

const variantMap: Record<NonNullable<AnimatedSectionProps["animation"]>, Variants> = {
  "slide-up": {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0 },
  },
  "slide-in-left": {
    hidden: { opacity: 0, x: -48 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-in-right": {
    hidden: { opacity: 0, x: 48 },
    visible: { opacity: 1, x: 0 },
  },
  "zoom-in": {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export function AnimatedSection({
  children,
  className = "",
  animation = "slide-up",
  delay = 0,
  id,
  parallax = false,
  parallaxSpeed = 0.05,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  // Scroll-linked parallax: translate Y across the element's viewport pass.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(
    scrollYProgress,
    (v) => (v - 0.5) * 240 * parallaxSpeed
  );

  // Respect users who prefer reduced motion: render a plain, static container.
  if (prefersReduced) {
    return (
      <div ref={ref} id={id} className={className}>
        {children}
      </div>
    );
  }

  const variants = variantMap[animation];
  const transition = { duration: 0.7, ease: EASE, delay };

  const reveal = (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={transition}
      className={cn(parallax ? "" : className)}
    >
      {children}
    </motion.div>
  );

  if (!parallax) {
    return <div ref={ref} id={id}>{reveal}</div>;
  }

  return (
    <div ref={ref} id={id} className={className}>
      <motion.div style={{ y: parallaxY }}>{reveal}</motion.div>
    </div>
  );
}
