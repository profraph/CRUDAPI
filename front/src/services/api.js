const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL;

const handleResponse = async (response) => {
  console.log('Réponse du serveur:', {
    status: response.status,
    statusText: response.statusText,
    headers: Object.fromEntries(response.headers.entries())
  });

  const data = await response.json();
  console.log('Données reçues:', data);

  if (!response.ok) {
    console.error('Erreur serveur:', {
      status: response.status,
      statusText: response.statusText,
      data: data
    });
    throw new Error(JSON.stringify({
      status: response.status,
      statusText: response.statusText,
      data: data
    }));
  }
  return data;
};

export const api = {
  // Authentication
  login: async (id, mdp) => {
    console.log('Tentative de connexion à:', `${API_BASE_URL}/api/checkType`);
    try {
      const response = await fetch(`${API_BASE_URL}/api/checkType`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, mdp }),
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Erreur de connexion:', error);
      if (error.message === 'Failed to fetch') {
        throw new Error(JSON.stringify({
          type: 'network_error',
          message: `Impossible de se connecter à ${API_BASE_URL}. Vérifiez que le serveur est en cours d'exécution.`
        }));
      }
      throw error;
    }
  },

  // User Management
  createUser: async (userData) => {
    console.log('Tentative de création d\'utilisateur à:', `${API_BASE_URL}/api/create`);
    try {
      const response = await fetch(`${API_BASE_URL}/api/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Erreur de création:', error);
      if (error.message === 'Failed to fetch') {
        throw new Error(JSON.stringify({
          type: 'network_error',
          message: `Impossible de se connecter à ${API_BASE_URL}. Vérifiez que le serveur est en cours d'exécution.`
        }));
      }
      throw error;
    }
  },

  updateUser: async (userData) => {
    console.log('Tentative de mise à jour d\'utilisateur à:', `${API_BASE_URL}/api/edit`);
    try {
      const response = await fetch(`${API_BASE_URL}/api/edit`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Erreur de mise à jour:', error);
      if (error.message === 'Failed to fetch') {
        throw new Error(JSON.stringify({
          type: 'network_error',
          message: `Impossible de se connecter à ${API_BASE_URL}. Vérifiez que le serveur est en cours d'exécution.`
        }));
      }
      throw error;
    }
  },

  deleteUser: async (id) => {
    console.log('Tentative de suppression d\'utilisateur à:', `${API_BASE_URL}/api/delete`);
    try {
      const response = await fetch(`${API_BASE_URL}/api/delete`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Erreur de suppression:', error);
      if (error.message === 'Failed to fetch') {
        throw new Error(JSON.stringify({
          type: 'network_error',
          message: `Impossible de se connecter à ${API_BASE_URL}. Vérifiez que le serveur est en cours d'exécution.`
        }));
      }
      throw error;
    }
  },
}; 