import { createClient } from "@supabase/supabase-js";

export async function POST(req) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const body = await req.json();
    const newUser = {
      id: body.id,
      mdp: body.mdp,
      type: body.type,
    };

    const { data, error } = await supabase
      .from("Users")
      .insert([{ id: newUser.id, mdp: newUser.mdp, type: newUser.type }])
      .select();

    if (data) {
      console.log(data);
    }
    if (error) {
      throw error;
    }

    console.log("❇️ Added new user : ", newUser);
  } catch (error) {
    console.error(error);
    return Response.json(error);
  }

  return Response.json({ message: "success" });
}
