import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold mb-4">Documentation API</h1>
        <p className="text-lg mb-4">Base URL: <code className="bg-black/[.05] dark:bg-white/[.06] px-2 py-1 rounded">https://crudapi-red.vercel.app</code></p>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Création d&apos;utilisateur</h2>
            <p className="mb-2">Endpoint: <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded">POST /api/create</code></p>
            <p>Permet de créer un nouvel utilisateur dans la base de données.</p>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Requête :</h3>
                <pre className="bg-black/[.05] dark:bg-white/[.06] p-4 rounded">
{`fetch('https://crudapi-red.vercel.app/api/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "id": "user123",
    "mdp": "password123",
    "type": "admin"
  })
})`}
                </pre>
              </div>
              <div>
                <h3 className="font-medium mb-1">Réponse :</h3>
                <pre className="bg-black/[.05] dark:bg-white/[.06] p-4 rounded">
{`{
  "success": true,
  "message": "Utilisateur créé avec succès"
}`}
                </pre>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Suppression d&apos;utilisateur</h2>
            <p className="mb-2">Endpoint: <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded">DELETE /api/delete</code></p>
            <p>Permet de supprimer un utilisateur existant.</p>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Requête :</h3>
                <pre className="bg-black/[.05] dark:bg-white/[.06] p-4 rounded">
{`fetch('https://crudapi-red.vercel.app/api/delete', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "id": "user123"
  })
})`}
                </pre>
              </div>
              <div>
                <h3 className="font-medium mb-1">Réponse :</h3>
                <pre className="bg-black/[.05] dark:bg-white/[.06] p-4 rounded">
{`{
  "success": true,
  "message": "Utilisateur supprimé avec succès"
}`}
                </pre>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Modification d&apos;utilisateur</h2>
            <p className="mb-2">Endpoint: <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded">PUT /api/edit</code></p>
            <p>Permet de modifier les informations d&apos;un utilisateur existant.</p>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Requête :</h3>
                <pre className="bg-black/[.05] dark:bg-white/[.06] p-4 rounded">
{`fetch('https://crudapi-red.vercel.app/api/edit', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "id": "user123",
    "mdp": "newpassword456",
    "type": "user"
  })
})`}
                </pre>
              </div>
              <div>
                <h3 className="font-medium mb-1">Réponse :</h3>
                <pre className="bg-black/[.05] dark:bg-white/[.06] p-4 rounded">
{`{
  "success": true,
  "message": "Utilisateur modifié avec succès"
}`}
                </pre>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Vérification du type d&apos;utilisateur</h2>
            <p className="mb-2">Endpoint: <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded">POST /api/checkType</code></p>
            <p>Permet de vérifier le type d&apos;un utilisateur existant.</p>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Requête :</h3>
                <pre className="bg-black/[.05] dark:bg-white/[.06] p-4 rounded">
{`fetch('https://crudapi-red.vercel.app/api/checkType', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "id": "user123"
  })
})`}
                </pre>
              </div>
              <div>
                <h3 className="font-medium mb-1">Réponse :</h3>
                <pre className="bg-black/[.05] dark:bg-white/[.06] p-4 rounded">
{`{
  "success": true,
  "type": "admin"
}`}
                </pre>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
