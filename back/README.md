# Documentation API

Ceci est une API permettant de gérer les utilisateurs de mon application. L'API est hébergée sur Vercel.

## URL de base

```
https://crudapi-red.vercel.app
```

## Endpoints

### 1. Création d&apos;utilisateur

**Endpoint** : `/api/create`  
**Méthode** : POST  
**URL complète** : `https://crudapi-red.vercel.app/api/create`

**Corps de la requête** :
```json
{
  "id": "string",
  "mdp": "string",
  "type": "string"
}
```

**Exemple de requête** :
```javascript
fetch('https://crudapi-red.vercel.app/api/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "id": "user123",
    "mdp": "password123",
    "type": "admin"
  })
})
```

**Réponse** :
```json
{
  "success": true,
  "message": "Utilisateur créé avec succès"
}
```

### 2. Suppression d&apos;utilisateur

**Endpoint** : `/api/delete`  
**Méthode** : DELETE  
**URL complète** : `https://crudapi-red.vercel.app/api/delete`

**Corps de la requête** :
```json
{
  "id": "string"
}
```

**Exemple de requête** :
```javascript
fetch('https://crudapi-red.vercel.app/api/delete', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "id": "user123"
  })
})
```

**Réponse** :
```json
{
  "success": true,
  "message": "Utilisateur supprimé avec succès"
}
```

### 3. Modification d&apos;utilisateur

**Endpoint** : `/api/edit`  
**Méthode** : PUT  
**URL complète** : `https://crudapi-red.vercel.app/api/edit`

**Corps de la requête** :
```json
{
  "id": "string",
  "mdp": "string",
  "type": "string"
}
```

**Exemple de requête** :
```javascript
fetch('https://crudapi-red.vercel.app/api/edit', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "id": "user123",
    "mdp": "newpassword456",
    "type": "user"
  })
})
```

**Réponse** :
```json
{
  "success": true,
  "message": "Utilisateur modifié avec succès"
}
```

### 4. Vérification du type d&apos;utilisateur

**Endpoint** : `/api/checkType`  
**Méthode** : POST  
**URL complète** : `https://crudapi-red.vercel.app/api/checkType`

**Corps de la requête** :
```json
{
  "id": "string"
}
```

**Exemple de requête** :
```javascript
fetch('https://crudapi-red.vercel.app/api/checkType', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "id": "user123"
  })
})
```

**Réponse** :
```json
{
  "success": true,
  "type": "admin"
}
```

## Configuration

L&apos;API utilise Supabase comme base de données. Les variables d&apos;environnement suivantes sont requises :

```env
NEXT_PUBLIC_SUPABASE_URL=votre_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_clé_anonyme_supabase
```

## Interface de documentation

Une interface de documentation interactive est disponible à l&apos;URL de base de l&apos;API. Elle permet de visualiser et tester les différents endpoints de manière conviviale.
