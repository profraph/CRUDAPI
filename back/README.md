# Documentation API

Ceci est une API permettant de gérer les utilisateurs de mon application. Voici les différents Endpoints :

## 1. Création d&apos;utilisateur

**Endpoint** : `/api/create`  
**Méthode** : POST  
**Corps de la requête** :
```json
{
  "id": "string",
  "mdp": "string",
  "type": "string"
}
```

**Réponse** :
- Succès : `Response.json({ message: "success" })`
- Erreur : `Response.json(error)`

## 2. Suppression d&apos;utilisateur

**Endpoint** : `/api/delete`  
**Méthode** : DELETE  
**Corps de la requête** :
```json
{
  "id": "string"
}
```

**Réponse** :
- Succès : `Response.json({ message: "success" })`
- Erreur : `Response.json(error)`

## 3. Modification d&apos;utilisateur

**Endpoint** : `/api/edit`  
**Méthode** : PUT  
**Corps de la requête** :
```json
{
  "id": "string",
  "mdp": "string",
  "type": "string"
}
```

**Réponse** :
- Succès : `Response.json({ message: "success", data: updatedUser })`
- Erreur : `Response.json(error)`

## 4. Vérification du type d&apos;utilisateur

**Endpoint** : `/api/checkType`  
**Méthode** : POST  
**Corps de la requête** :
```json
{
  "id": "string"
}
```

**Réponse** :
- Succès : `Response.json({ message: "success", type: userType })`
- Erreur : `Response.json(error)`

## Configuration

L&apos;API utilise Supabase comme base de données. Les variables d&apos;environnement suivantes sont requises :

```env
NEXT_PUBLIC_SUPABASE_URL=votre_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_clé_anonyme_supabase
```
