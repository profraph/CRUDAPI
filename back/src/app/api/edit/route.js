import { createClient } from "@supabase/supabase-js";

export async function PUT(req) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const body = await req.json();
    const updatedUser = {
      id: body.id,
      mdp: body.mdp,
      type: body.type,
    };

    const { data, error } = await supabase
      .from("Users")
      .update({ mdp: updatedUser.mdp, type: updatedUser.type })
      .eq('id', updatedUser.id)
      .select();

    if (error) {
      throw error;
    }

    console.log("✏️ Updated user: ", updatedUser);
    return Response.json({ message: "success", data });
  } catch (error) {
    console.error(error);
    return Response.json(error);
  }
} 