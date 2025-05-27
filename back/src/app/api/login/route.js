import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function POST(request) {
  try {
    const { id, mdp } = await request.json();

    if (!id || !mdp) {
      return Response.json(
        { error: 'Identifiant et mot de passe requis' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('users')
      .select('id, type')
      .eq('id', id)
      .eq('mdp', mdp)
      .single();

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    if (!data) {
      return Response.json(
        { error: 'Identifiants invalides' },
        { status: 401 }
      );
    }

    return Response.json({
      success: true,
      data: {
        id: data.id,
        type: data.type
      }
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
} 