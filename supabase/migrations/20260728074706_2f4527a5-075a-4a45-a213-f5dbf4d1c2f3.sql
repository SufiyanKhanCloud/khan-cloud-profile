DROP POLICY IF EXISTS "Anyone can submit a contact message" ON public.contact_messages;
CREATE POLICY "Anyone can submit a contact message"
  ON public.contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (
    length(name) > 0 AND length(name) <= 100
    AND length(email) > 3 AND length(email) <= 255
    AND length(subject) > 0 AND length(subject) <= 200
    AND length(message) > 0 AND length(message) <= 5000
  );