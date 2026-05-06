import { ShieldAlert, AlertTriangle, Database, Network } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/AnimatedSection";

interface Incident {
  icon: React.ElementType;
  severity: string;
  title: string;
  detection: string;
  response: string;
  outcome: string;
  tags: string[];
}

const incidents: Incident[] = [
  {
    icon: ShieldAlert,
    severity: "Critical",
    title: "Live Brute-Force Attack on Production Windows Server",
    detection: "Detected 2,659+ failed RDP login attempts from 5 attacker IPs against a NAT port-forwarded production server.",
    response: "Blocked attacker IPs in real-time, hardened account lockout policies, and re-architected remote access by deploying a Zero-Trust WireGuard VPN with asymmetric key pairs and firewall rules dropping all public traffic.",
    outcome: "Public attack surface eliminated. Zero unauthorized access attempts have succeeded since cutover.",
    tags: ["Incident Response", "WireGuard", "Zero-Trust", "Windows Server"],
  },
  {
    icon: Network,
    severity: "High",
    title: "Production Outage: CORS & Mixed-Content on Decoupled Stack",
    detection: "React frontend + .NET backend on IIS went down after an HTTPS rollout. Browser console flooded with mixed-content and CORS preflight failures.",
    response: "Diagnosed the breakage across both services in a single working session. Bound SSL certificates to React and .NET on IIS, corrected CORS allow-origin rules, and updated environment routing to enforce end-to-end HTTPS.",
    outcome: "Full HTTPS functionality restored within hours. No further mixed-content regressions reported.",
    tags: ["IIS", "CORS", "SSL/TLS", "Production Debugging"],
  },
  {
    icon: Database,
    severity: "High",
    title: "Ransomware Exposure via SMB-Mapped Backup Drives",
    detection: "Backup strategy used persistent SMB shares, meaning ransomware on the production server could encrypt both live data and backups in one sweep.",
    response: "Replaced SMB with an isolated PowerShell vaulting engine. Each run opens a temporary encrypted FTP pipeline, transmits compressed archives, and severs the connection — leaving zero persistent network access to backup storage.",
    outcome: "Backups are now ransomware-resistant and 5+ hours of weekly manual work eliminated.",
    tags: ["PowerShell", "Backup & Recovery", "Cybersecurity", "Automation"],
  },
];

const severityColor: Record<string, string> = {
  Critical: "bg-destructive/15 text-destructive border-destructive/30",
  High: "bg-primary/15 text-primary border-primary/30",
};

export function IncidentResponse() {
  return (
    <AnimatedSection id="incidents" animation="slide-up" delay={250}>
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative" aria-label="Production incidents handled">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-gradient-hero" />
              <AlertTriangle className="h-6 w-6 text-primary animate-pulse" />
              <div className="w-12 h-0.5 bg-gradient-hero" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
              Production Incidents Handled
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real outages and live attacks I've responded to — detection, response, and outcome.
            </p>
          </div>

          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border/50 hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <CardContent className="p-6 sm:p-8 relative">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <incident.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span
                          className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${severityColor[incident.severity]}`}
                        >
                          {incident.severity}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {incident.title}
                      </h3>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 mb-5">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-primary/80 font-semibold mb-1">Detection</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{incident.detection}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-primary/80 font-semibold mb-1">Response</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{incident.response}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-primary/80 font-semibold mb-1">Outcome</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{incident.outcome}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {incident.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs hover:bg-primary/10 transition-all">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
