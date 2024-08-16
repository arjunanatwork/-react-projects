import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aocwaplzigmlinmdejeh.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvY3dhcGx6aWdtbGlubWRlamVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4MTkwNzksImV4cCI6MjAzOTM5NTA3OX0.Uy0aYXpLR4JoWKtnTstXivc05M5y5z_FVVmPks5ZfRE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
