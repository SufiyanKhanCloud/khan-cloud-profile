import { useEffect } from "react";

interface AnalyticsEvent {
  type: string;
  page?: string;
  section?: string;
  timestamp: number;
}

function getSessionId(): string {
  let id = sessionStorage.getItem("portfolio_session_id");
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem("portfolio_session_id", id);
  }
  return id;
}

function trackEvent(event: AnalyticsEvent) {
  const events: AnalyticsEvent[] = JSON.parse(localStorage.getItem("portfolio_analytics") || "[]");
  events.push(event);
  // Keep last 500 events
  if (events.length > 500) events.splice(0, events.length - 500);
  localStorage.setItem("portfolio_analytics", JSON.stringify(events));
}

export function useAnalytics() {
  useEffect(() => {
    const sessionId = getSessionId();
    
    // Track page view
    trackEvent({
      type: "page_view",
      page: window.location.pathname,
      timestamp: Date.now(),
    });

    // Track time on page
    const startTime = Date.now();

    // Track section visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackEvent({
              type: "section_view",
              section: entry.target.id,
              timestamp: Date.now(),
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe all sections
    const sections = document.querySelectorAll("section[id], [id='hero'], [id='about'], [id='experience'], [id='projects'], [id='certifications'], [id='contact']");
    sections.forEach((section) => observer.observe(section));

    // Track outbound link clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor?.href && anchor.target === "_blank") {
        trackEvent({
          type: "outbound_click",
          page: anchor.href,
          timestamp: Date.now(),
        });
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleClick);
      
      // Track session duration on unmount
      trackEvent({
        type: "session_duration",
        page: `${Math.round((Date.now() - startTime) / 1000)}s`,
        timestamp: Date.now(),
      });
    };
  }, []);
}

export function getAnalyticsSummary() {
  const events: AnalyticsEvent[] = JSON.parse(localStorage.getItem("portfolio_analytics") || "[]");
  const pageViews = events.filter((e) => e.type === "page_view").length;
  const sectionViews = events.filter((e) => e.type === "section_view");
  const outboundClicks = events.filter((e) => e.type === "outbound_click");
  
  const sectionCounts: Record<string, number> = {};
  sectionViews.forEach((e) => {
    if (e.section) sectionCounts[e.section] = (sectionCounts[e.section] || 0) + 1;
  });

  return { pageViews, sectionCounts, outboundClicks: outboundClicks.length, totalEvents: events.length };
}
