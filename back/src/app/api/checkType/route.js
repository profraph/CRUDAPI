import { createClient } from "@supabase/supabase-js";

export async function POST(req) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const body = await req.json();
    const userId = body.id;

    const { data, error } = await supabase
      .from("Users")
      .select('type')
      .eq('id', userId)
      .single();

    if (error) {
      throw error;
    }

    console.log("🔍 Checked type for user: ", userId);
    return Response.json({ message: "success", type: data.type });
  } catch (error) {
    console.error(error);
    return Response.json(error);
  }
} 