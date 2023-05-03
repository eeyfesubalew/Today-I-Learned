import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zswhkcmkkfdzxsgecmkx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpzd2hrY21ra2ZkenhzZ2VjbWt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI5NDcyODMsImV4cCI6MTk5ODUyMzI4M30.39opXWD6cEAwGTPMNDTMq-5A3ZjQAfmgCTs_DUNpEzU";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
