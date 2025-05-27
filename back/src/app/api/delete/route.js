import { createClient } from "@supabase/supabase-js";

export async function DELETE(req) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const body = await req.json();
    const userId = body.id;

    const { error } = await supabase
      .from("Users")
      .delete()
      .eq('id', userId);

    if (error) {
      throw error;
    }

    console.log("❌ Deleted user with ID: ", userId);
    return Response.json({ message: "success" });
  } catch (error) {
    console.error(error);
    return Response.json(error);
  }
}
