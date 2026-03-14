import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bphvteqgrqtvtxgzrqnh.supabase.co";
const supabaseAnonKey = "sb_publishable_JLQuF2SZ3sVxnYSEZnQnGg_eZVthgMA";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);