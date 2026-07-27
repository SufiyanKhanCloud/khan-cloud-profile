import { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle, User, AtSign, MessageSquare, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FieldErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState("");

  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { toast } = useToast();

  function validate(): boolean {
    const next: FieldErrors = {};
    if (!name.trim()) next.name = "Name is required.";
    if (!email.trim()) {
      next.email = "Email is required.";
    } else if (!EMAIL_RE.test(email)) {
      next.email = "Enter a valid email address.";
    }
    if (!subject.trim()) next.subject = "Subject is required.";
    if (!message.trim()) next.message = "Message is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function clearFieldError(field: keyof FieldErrors) {
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Honeypot — silently drop if a bot filled the hidden field
    if (honey) return;

    if (!validate()) return;

    setIsLoading(true);

    try {
      const data = new FormData();
      data.append("name", name.trim());
      data.append("email", email.trim());
      data.append("subject", subject.trim());
      data.append("message", message.trim());
      // FormSubmit control fields
      data.append("_subject", "New message from portfolio contact form");
      data.append("_template", "table");
      data.append("_captcha", "false");
      data.append("_honey", honey);

      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (!res.ok) throw new Error(`Request failed (${res.status})`);

      // Reset fields only on confirmed success
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setErrors({});
      setIsSubmitted(true);

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    } catch {
      setSubmitError(
        "Something went wrong and your message wasn't sent. Please email me directly at sufiikhan980@gmail.com."
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto bg-gradient-card border-border/50 shadow-medium">
        <CardContent className="pt-6 text-center">
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Message Sent!</h3>
          <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="mt-4"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto bg-gradient-card border-border/50 shadow-medium">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Get In Touch
        </CardTitle>
        <CardDescription>
          Let's discuss DevOps, cloud technologies, or potential collaborations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>

          {/* Honeypot — visually hidden, only bots fill this */}
          <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}>
            <label htmlFor="_honey">Do not fill this field</label>
            <input
              id="_honey"
              name="_honey"
              type="text"
              value={honey}
              onChange={(e) => setHoney(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Name
              </Label>
              <Input
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => { setName(e.target.value); clearFieldError("name"); }}
                className={`transition-all duration-300 focus:shadow-medium${errors.name ? " border-destructive focus-visible:ring-destructive" : ""}`}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-xs text-destructive">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <AtSign className="h-4 w-4" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); clearFieldError("email"); }}
                className={`transition-all duration-300 focus:shadow-medium${errors.email ? " border-destructive focus-visible:ring-destructive" : ""}`}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-xs text-destructive">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Subject
            </Label>
            <Input
              id="subject"
              placeholder="What's this about?"
              value={subject}
              onChange={(e) => { setSubject(e.target.value); clearFieldError("subject"); }}
              className={`transition-all duration-300 focus:shadow-medium${errors.subject ? " border-destructive focus-visible:ring-destructive" : ""}`}
              aria-describedby={errors.subject ? "subject-error" : undefined}
            />
            {errors.subject && (
              <p id="subject-error" className="text-xs text-destructive">{errors.subject}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Tell me about your project or just say hi!"
              rows={4}
              value={message}
              onChange={(e) => { setMessage(e.target.value); clearFieldError("message"); }}
              className={`transition-all duration-300 focus:shadow-medium resize-none${errors.message ? " border-destructive focus-visible:ring-destructive" : ""}`}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-xs text-destructive">{errors.message}</p>
            )}
          </div>

          {submitError && (
            <div
              role="alert"
              className="flex items-start gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-sm text-destructive"
            >
              <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p>{submitError}</p>
            </div>
          )}

          <Button
            type="submit"
            className="w-full transition-all duration-300 hover:shadow-glow"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" aria-hidden="true" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" aria-hidden="true" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
