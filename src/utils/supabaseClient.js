import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://uxcypucipnyqbfjwpurq.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4Y3lwdWNpcG55cWJmandwdXJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE0OTAxMTMsImV4cCI6MTk5NzA2NjExM30.1vFc6iuALZNZGRpra7sNeU5S-r5diMUJdIcQeLwpFgc"

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey)