import React, { useState } from 'react';
import { Download, FileArchive, Database, Server, ArrowLeft, Loader2, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const API = process.env.REACT_APP_BACKEND_URL || '';

const DownloadsPage = () => {
  const [downloading, setDownloading] = useState(null);
  const [downloaded, setDownloaded] = useState([]);

  const files = [
    {
      id: 'frontend',
      name: 'Frontend (Netlify)',
      filename: 'frontend-netlify-delices.zip',
      description: 'Code source React complet avec configuration Netlify, guide de déploiement et fichier .env.example',
      size: '~407 Ko',
      icon: FileArchive,
      color: 'bg-blue-500'
    },
    {
      id: 'backend',
      name: 'Backend (FastAPI)',
      filename: 'backend-delices.zip',
      description: 'API Python FastAPI avec guide de déploiement pour Heroku, Railway ou Render. Inclut les images uploadées.',
      size: '~1.6 Mo',
      icon: Server,
      color: 'bg-green-500'
    },
    {
      id: 'database',
      name: 'Base de données',
      filename: 'database-export-fresh.zip',
      description: 'Export MongoDB complet (produits, catégories, utilisateurs, commandes, paramètres...)',
      size: '~35 Ko',
      icon: Database,
      color: 'bg-purple-500'
    }
  ];

  const handleDownload = async (file) => {
    setDownloading(file.id);
    
    try {
      const response = await fetch(`${API}/api/download/${file.filename}`);
      
      if (!response.ok) {
        throw new Error('Download failed');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      setDownloaded(prev => [...prev, file.id]);
    } catch (error) {
      console.error('Download error:', error);
      alert('Erreur lors du téléchargement. Veuillez réessayer.');
    } finally {
      setDownloading(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Retour au site
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-2">
            <Download className="text-amber-600" size={32} />
            <h1 className="text-3xl font-bold text-gray-800">Téléchargements</h1>
          </div>
          <p className="text-gray-500 mb-8">
            Archives du projet Délices et Trésors d'Algérie
          </p>

          <div className="space-y-4">
            {files.map((file) => {
              const Icon = file.icon;
              const isDownloading = downloading === file.id;
              const isDownloaded = downloaded.includes(file.id);
              
              return (
                <div 
                  key={file.id}
                  className="border-2 border-gray-100 rounded-xl p-6 hover:border-amber-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${file.color} p-3 rounded-lg text-white`}>
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-800">{file.name}</h3>
                      <p className="text-gray-500 text-sm mt-1">{file.description}</p>
                      <p className="text-gray-400 text-xs mt-2">Taille: {file.size}</p>
                    </div>
                    <button
                      onClick={() => handleDownload(file)}
                      disabled={isDownloading}
                      className={`
                        flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all
                        ${isDownloaded 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-amber-600 text-white hover:bg-amber-700'}
                        ${isDownloading ? 'opacity-75 cursor-wait' : ''}
                      `}
                    >
                      {isDownloading ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Téléchargement...
                        </>
                      ) : isDownloaded ? (
                        <>
                          <CheckCircle size={18} />
                          Téléchargé
                        </>
                      ) : (
                        <>
                          <Download size={18} />
                          Télécharger
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-amber-800 text-sm">
              <strong>💡 Conseil :</strong> Pour déployer sur Netlify, téléchargez le Frontend, 
              modifiez le fichier <code className="bg-amber-100 px-1 rounded">netlify.toml</code> avec 
              l'URL de votre backend, puis glissez-déposez le dossier sur Netlify.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadsPage;
