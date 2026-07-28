-- Allow anonymous visitors (no auth) to submit contact messages
GRANT INSERT ON public.contact_messages TO anon;
-- Service role can read/manage all messages (for viewing in the backend)
GRANT ALL ON public.contact_messages TO service_role;

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Anon can INSERT new messages (public contact form, no auth)
DROP POLICY IF EXISTS "Anyone can submit a contact message" ON public.contact_messages;
CREATE POLICY "Anyone can submit a contact message"
  ON public.contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only service role can read messages (Sufiyan views them in the backend)
DROP POLICY IF EXISTS "Only service role can read contact messages" ON public.contact_messages;
CREATE POLICY "Only service role can read contact messages"
  ON public.contact_messages
  FOR SELECT
  TO service_role
  USING (true);