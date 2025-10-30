-- Create waitlist table
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add email constraint
ALTER TABLE public.waitlist
ADD CONSTRAINT waitlist_email_valid CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

-- Add unique constraint on email to prevent duplicates
ALTER TABLE public.waitlist
ADD CONSTRAINT waitlist_email_unique UNIQUE (email);

-- Create index on email for faster lookups
CREATE INDEX idx_waitlist_email ON public.waitlist(email);

-- Create index on created_at for sorting
CREATE INDEX idx_waitlist_created_at ON public.waitlist(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert into waitlist (public signup)
CREATE POLICY "Anyone can join waitlist"
ON public.waitlist
FOR INSERT
TO anon
WITH CHECK (true);

-- Policy: No public reads (data is private, only accessible via backend/admin)
-- This prevents any unauthorized access to the waitlist data