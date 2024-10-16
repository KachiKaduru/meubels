import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ltaicxyqvbocveazkrsf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0YWljeHlxdmJvY3ZlYXprcnNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg5OTY0NzEsImV4cCI6MjA0NDU3MjQ3MX0.qHlMvZViteiaj6aeEbs1sbeP1Sx7QI_gjqA6Q0kvBfM";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
