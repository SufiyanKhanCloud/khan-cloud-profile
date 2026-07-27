import { useEffect, useRef, useState, useId } from "react";
import { cn } from "@/lib/utils";

interface MermaidDiagramProps {
  chart: string;
  className?: string;
  title?: string;
  caption?: string;
}

/**
 * Renders a Mermaid diagram. Mermaid is heavy (~200kb), so it is imported
 * dynamically only when the diagram scrolls into view, keeping it out of the
 * initial bundle and off the critical rendering path.
 *
 * Theme-aware: re-renders when the app toggles between light and dark mode.
 */
export function MermaidDiagram({ chart, className, title, caption }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const reactId = useId().replace(/[:]/g, "");
  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    let cancelled = false;
    let observer: IntersectionObserver | null = null;

    const renderChart = async () => {
      if (cancelled) return;
      try {
        const mermaid = (await import("mermaid")).default;
        const id = `mmd-${reactId}`;
        mermaid.initialize({
          startOnLoad: false,
          theme: isDark ? "dark" : "default",
          securityLevel: "loose",
          fontFamily: "'DM Sans', sans-serif",
          flowchart: { useMaxWidth: true, htmlLabels: true, curve: "basis" },
        });
        const { svg: out } = await mermaid.render(id, chart);
        if (!cancelled) {
          setSvg(out);
          setError(false);
        }
      } catch {
        if (!cancelled) setError(true);
      }
    };

    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !loaded) {
          setLoaded(true);
          renderChart();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(node);

    return () => {
      cancelled = true;
      observer?.disconnect();
    };
    // Re-render if the theme changes or the chart changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chart, isDark]);

  return (
    <figure
      ref={containerRef}
      className={cn(
        "rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm p-4 sm:p-6 shadow-medium",
        className
      )}
    >
      {title && (
        <figcaption className="text-sm font-semibold text-foreground mb-3 font-display">
          {title}
        </figcaption>
      )}
      {error ? (
        <div className="text-sm text-muted-foreground py-8 text-center">
          Diagram could not be rendered. Please refresh the page.
        </div>
      ) : svg ? (
        <div
          className="w-full overflow-x-auto [&_svg]:w-full [&_svg]:h-auto"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      ) : (
        <div className="flex items-center justify-center py-12 text-sm text-muted-foreground">
          <div className="animate-pulse-subtle">Rendering diagram...</div>
        </div>
      )}
      {caption && (
        <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{caption}</p>
      )}
    </figure>
  );
}
