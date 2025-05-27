"use client"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <input type="text" id="id" placeholder="id"></input>
        <input type="text" id="mdp" placeholder="MDP"></input>
        <select name="type" id="type">
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button onClick={(e)=>{addUser(e)}}>Ajouter Utilisateur</button>
        <button onClick={(e)=>{delUser(e)}}>Supprimer Utilisateur</button>
      </form>
    </div>
  );

  async function addUser(event) {
    event.preventDefault();
    const newUser = {
      id: document.getElementById("id").value,
      mdp: document.getElementById("mdp").value,
      type: document.getElementById("type").value,
    };
    console.log("Trying to add new user : ", newUser);
    
    const response = await fetch("http://localhost:3000/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    
    const result = await response.json();
    console.log("Result of call to 'create' endpoint : ", result);
  }

  async function delUser(event) {
    event.preventDefault();
    const delUser = {
      id: document.getElementById("id").value
    };
    console.log("Trying to delete user : ", delUser);

    const response = await fetch("http://localhost:3000/api/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(delUser),
    });

    const result = await response.json();
    console.log("Result of call to 'delete' endpoint : ", result);
  }
}
