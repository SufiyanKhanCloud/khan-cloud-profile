import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  /** Honeypot: must be empty. Bots fill hidden fields. */
  company?: string;
}

function json(body: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  let payload: ContactPayload;
  try {
    payload = await req.json();
  } catch {
    return json({ error: "Invalid request body." }, 400);
  }

  // Honeypot: silently succeed for bots but do not store.
  if (payload.company && payload.company.trim() !== "") {
    return json({ ok: true }, 200);
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const subject = (payload.subject ?? "").trim();
  const message = (payload.message ?? "").trim();

  const errors: string[] = [];
  if (!name) errors.push("Name is required.");
  else if (name.length > 100) errors.push("Name must be 100 characters or fewer.");
  if (!email) errors.push("Email is required.");
  else if (!EMAIL_RE.test(email)) errors.push("Please enter a valid email address.");
  else if (email.length > 255) errors.push("Email must be 255 characters or fewer.");
  if (!subject) errors.push("Subject is required.");
  else if (subject.length > 200) errors.push("Subject must be 200 characters or fewer.");
  if (!message) errors.push("Message is required.");
  else if (message.length > 5000) errors.push("Message must be 5000 characters or fewer.");

  if (errors.length) {
    return json({ error: "Validation failed", details: errors }, 400);
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !serviceRoleKey) {
    console.error("Missing server configuration: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
    return json({ error: "Server is not configured to receive messages." }, 500);
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  // Best-effort IP capture for spam reference.
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    null;

  const { error } = await supabase.from("contact_messages").insert({
    name,
    email,
    subject,
    message,
    ip,
  });

  if (error) {
    console.error("Insert failed:", error.message);
    return json({ error: "Could not save your message. Please try again." }, 500);
  }

  return json({ ok: true }, 200);
});
