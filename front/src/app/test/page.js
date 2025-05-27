'use client';

import { useState } from 'react';
import { api } from '@/services/api';

export default function TestPage() {
  const [formData, setFormData] = useState({
    id: '',
    mdp: '',
    type: 'user'
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (action) => {
    setError(null);
    setResponse(null);
    setIsLoading(true);
    
    try {
      let result;
      switch (action) {
        case 'create':
          result = await api.createUser(formData);
          break;
        case 'edit':
          result = await api.updateUser(formData);
          break;
        case 'delete':
          result = await api.deleteUser(formData.id);
          break;
        case 'checkType':
          result = await api.login(formData.id, formData.mdp);
          break;
        default:
          throw new Error('Action non reconnue');
      }
      setResponse(result);
    } catch (err) {
      try {
        // Essayer de parser l'erreur comme JSON
        const errorDetails = JSON.parse(err.message);
        setError(errorDetails);
      } catch {
        // Si ce n'est pas du JSON, afficher le message d'erreur brut
        setError({
          message: err.message,
          type: 'unknown_error'
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const renderError = (error) => {
    if (error.type === 'network_error') {
      return (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          <h3 className="font-bold mb-2">Erreur de connexion</h3>
          <p>{error.message}</p>
          <div className="mt-2 text-sm">
            <p>Vérifiez que :</p>
            <ul className="list-disc list-inside mt-1">
              <li>Le serveur backend est en cours d&apos;exécution</li>
              <li>L&apos;URL du backend est correcte dans le fichier .env</li>
              <li>Il n&apos;y a pas de problème de CORS</li>
            </ul>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
        <h3 className="font-bold mb-2">Détails de l&apos;erreur</h3>
        <pre className="whitespace-pre-wrap">
          {JSON.stringify(error, null, 2)}
        </pre>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Test des Endpoints API</h1>
        
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Formulaire de test</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">ID</label>
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
              <input
                type="password"
                name="mdp"
                value={formData.mdp}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="user">Utilisateur</option>
                <option value="admin">Administrateur</option>
              </select>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button
              onClick={() => handleSubmit('create')}
              disabled={isLoading}
              className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 disabled:opacity-50"
            >
              {isLoading ? 'Chargement...' : 'Créer Utilisateur'}
            </button>
            <button
              onClick={() => handleSubmit('edit')}
              disabled={isLoading}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 disabled:opacity-50"
            >
              {isLoading ? 'Chargement...' : 'Modifier Utilisateur'}
            </button>
            <button
              onClick={() => handleSubmit('delete')}
              disabled={isLoading}
              className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 disabled:opacity-50"
            >
              {isLoading ? 'Chargement...' : 'Supprimer Utilisateur'}
            </button>
            <button
              onClick={() => handleSubmit('checkType')}
              disabled={isLoading}
              className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700 disabled:opacity-50"
            >
              {isLoading ? 'Chargement...' : 'Vérifier Type'}
            </button>
          </div>
        </div>

        {(response || error) && (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Résultat</h2>
            {error ? (
              renderError(error)
            ) : (
              <pre className="bg-gray-50 p-4 rounded overflow-auto">
                {JSON.stringify(response, null, 2)}
              </pre>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 