# Documentation API

Ceci est une API permettant de gérer les utilisateurs de mon application. Voici les différents Endpoints :

### /api/create

**Requête** POST
**req.body** : `{ id, mdp, type }`

**Return** :
`Response.json(error)`
OU
`Response.json({ message: "success" })`

**Action sur localStorage** : Ajoute un compte


### /api/delete

**Requête** POST
**req.body** : `{ id }`

**Return** :
`Response.json(error)`
OU
`Response.json({ message: "success" })`

**Action sur localStorage** : Supprime un compte
