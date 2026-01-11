import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../App';
import { 
  Save, 
  X, 
  Plus, 
  Minus, 
  Upload,
  Image as ImageIcon,
  MapPin,
  BookOpen,
  Globe
} from 'lucide-react';
import axios from 'axios';
import ImageUpload from './ImageUpload';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || '';
const API = `${BACKEND_URL}/api`;

const AdminHistoryForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isEdit = !!id;

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [content, setContent] = useState({
    title: { fr: '', ar: '', en: '' },
    content: { fr: '', ar: '', en: '' },
    region: 'algerie',
    image_urls: ['']
  });

  const regions = [
    { 
      value: 'algerie', 
      labelFr: 'Algérie', 
      labelAr: 'الجزائر', 
      labelEn: 'Algeria',
      icon: '🇩🇿',
      description: {
        fr: 'Histoire générale de l\'Algérie',
        ar: 'التاريخ العام للجزائر',
        en: 'General history of Algeria'
      }
    },
    { 
      value: 'kabylie', 
      labelFr: 'Kabylie', 
      labelAr: 'القبائل', 
      labelEn: 'Kabylie',
      icon: '🏔️',
      description: {
        fr: 'Culture et histoire berbère de Kabylie',
        ar: 'ثقافة وتاريخ البربر في القبائل',
        en: 'Berber culture and history of Kabylie'
      }
    },
    { 
      value: 'vallee-soumam', 
      labelFr: 'Vallée de Soumam', 
      labelAr: 'وادي الصومام', 
      labelEn: 'Soumam Valley',
      icon: '🌄',
      description: {
        fr: 'Région d\'Ath M\'lickech et Tazmalt',
        ar: 'منطقة آث مليكش وتازمالت',
        en: 'Region of Ath M\'lickech and Tazmalt'
      }
    }
  ];

  useEffect(() => {
    if (isEdit) {
      fetchContent();
    }
  }, [id, isEdit]);

  const fetchContent = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}/historical-content/${id}`);
      setContent(response.data);
    } catch (error) {
      console.error('Error fetching historical content:', error);
      alert('Erreur lors du chargement du contenu');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, lang, value) => {
    if (lang) {
      setContent(prev => ({
        ...prev,
        [field]: {
          ...prev[field],
          [lang]: value
        }
      }));
    } else {
      setContent(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleImageChange = (index, value) => {
    const newImages = [...content.image_urls];
    newImages[index] = value;
    setContent(prev => ({ ...prev, image_urls: newImages }));
  };

  const addImage = () => {
    setContent(prev => ({
      ...prev,
      image_urls: [...prev.image_urls, '']
    }));
  };

  const removeImage = (index) => {
    if (content.image_urls.length > 1) {
      setContent(prev => ({
        ...prev,
        image_urls: prev.image_urls.filter((_, i) => i !== index)
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const contentData = {
        title: content.title,
        content: content.content,
        region: content.region,
        image_urls: content.image_urls.filter(url => url.trim() !== '')
      };

      if (isEdit) {
        await axios.put(`${API}/historical-content/${id}`, contentData);
      } else {
        await axios.post(`${API}/historical-content`, contentData);
      }

      alert(isEdit ? 'Contenu mis à jour avec succès!' : 'Contenu créé avec succès!');
      navigate('/admin/history');
    } catch (error) {
      console.error('Error saving historical content:', error);
      alert('Erreur lors de la sauvegarde du contenu');
    } finally {
      setSaving(false);
    }
  };

  const getLocalizedLabel = (item) => {
    return item[`label${language.charAt(0).toUpperCase() + language.slice(1)}`] || item.labelFr;
  };

  const getLocalizedDescription = (item) => {
    return item.description[language] || item.description.fr;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {isEdit ? 
              (language === 'ar' ? 'تحرير المحتوى التاريخي' : language === 'en' ? 'Edit Historical Content' : 'Modifier le Contenu Historique') :
              (language === 'ar' ? 'إضافة محتوى تاريخي جديد' : language === 'en' ? 'Add New Historical Content' : 'Ajouter un Nouveau Contenu Historique')
            }
          </h1>
          <p className="text-gray-600 mt-1">
            {language === 'ar' ? 'املأ النموذج لإنشاء أو تحديث محتوى تاريخي' :
             language === 'en' ? 'Fill out the form to create or update historical content' :
             'Remplissez le formulaire pour créer ou mettre à jour le contenu historique'}
          </p>
        </div>
        <button
          onClick={() => navigate('/admin/history')}
          className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <X size={20} className="mr-2" />
          {language === 'ar' ? 'إلغاء' : language === 'en' ? 'Cancel' : 'Annuler'}
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <BookOpen className="mr-2" size={24} />
            {language === 'ar' ? 'معلومات أساسية' : language === 'en' ? 'Basic Information' : 'Informations de Base'}
          </h2>

          <div className="mb-6">
            <label className="form-label flex items-center">
              <MapPin size={16} className="mr-1" />
              {language === 'ar' ? 'المنطقة' : language === 'en' ? 'Region' : 'Région'}
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              {regions.map(region => (
                <label
                  key={region.value}
                  className={`relative flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                    content.region === region.value
                      ? 'border-amber-500 bg-amber-50'
                      : 'border-gray-200 hover:border-amber-300 hover:bg-amber-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="region"
                    value={region.value}
                    checked={content.region === region.value}
                    onChange={(e) => handleInputChange('region', null, e.target.value)}
                    className="sr-only"
                  />
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{region.icon}</span>
                    {content.region === region.value && (
                      <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900">{getLocalizedLabel(region)}</h3>
                  <p className="text-sm text-gray-600 mt-1">{getLocalizedDescription(region)}</p>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Titles */}
            {['fr', 'ar', 'en'].map(lang => (
              <div key={lang} className="space-y-2">
                <label className="form-label flex items-center">
                  <Globe size={16} className="mr-1" />
                  {language === 'ar' ? 'العنوان' : language === 'en' ? 'Title' : 'Titre'} ({lang.toUpperCase()})
                </label>
                <input
                  type="text"
                  value={content.title[lang]}
                  onChange={(e) => handleInputChange('title', lang, e.target.value)}
                  className="form-input"
                  required
                  dir={lang === 'ar' ? 'rtl' : 'ltr'}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {language === 'ar' ? 'المحتوى' : language === 'en' ? 'Content' : 'Contenu'}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {['fr', 'ar', 'en'].map(lang => (
              <div key={lang} className="space-y-2">
                <label className="form-label flex items-center">
                  <Globe size={16} className="mr-1" />
                  {language === 'ar' ? 'المحتوى' : language === 'en' ? 'Content' : 'Contenu'} ({lang.toUpperCase()})
                </label>
                <textarea
                  value={content.content[lang]}
                  onChange={(e) => handleInputChange('content', lang, e.target.value)}
                  className="form-input min-h-48"
                  required
                  dir={lang === 'ar' ? 'rtl' : 'ltr'}
                  placeholder={
                    lang === 'ar' ? 'اكتب المحتوى التاريخي هنا...' :
                    lang === 'en' ? 'Write the historical content here...' :
                    'Rédigez le contenu historique ici...'
                  }
                />
                <div className="text-sm text-gray-500">
                  {content.content[lang].length} {language === 'ar' ? 'حرف' : language === 'en' ? 'characters' : 'caractères'}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-900 mb-2">
              {language === 'ar' ? 'نصائح للكتابة' : language === 'en' ? 'Writing Tips' : 'Conseils de Rédaction'}
            </h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• {language === 'ar' ? 'استخدم فقرات قصيرة للسهولة في القراءة' : language === 'en' ? 'Use short paragraphs for easy reading' : 'Utilisez des paragraphes courts pour faciliter la lecture'}</li>
              <li>• {language === 'ar' ? 'أضف معلومات تاريخية مثيرة للاهتمام' : language === 'en' ? 'Add interesting historical information' : 'Ajoutez des informations historiques intéressantes'}</li>
              <li>• {language === 'ar' ? 'اذكر التواريخ والأحداث المهمة' : language === 'en' ? 'Mention important dates and events' : 'Mentionnez les dates et événements importants'}</li>
              <li>• {language === 'ar' ? 'اربط المحتوى بالثقافة المحلية' : language === 'en' ? 'Connect content to local culture' : 'Reliez le contenu à la culture locale'}</li>
            </ul>
          </div>
        </div>

        {/* Images */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <ImageIcon className="mr-2" size={24} />
            {language === 'ar' ? 'الصور' : language === 'en' ? 'Images' : 'Images'}
          </h2>

          <ImageUpload
            label={language === 'ar' ? 'الصور' : language === 'en' ? 'Images' : 'Images'}
            maxImages={5}
            existingImages={content.image_urls.filter(url => url.trim() !== '')}
            onUploadComplete={(images) => {
              setContent(prev => ({ ...prev, image_urls: images.length > 0 ? images : [''] }));
            }}
          />

          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <h3 className="font-medium text-green-900 mb-2">
              {language === 'ar' ? 'نصائح للصور' : language === 'en' ? 'Image Tips' : 'Conseils pour les Images'}
            </h3>
            <ul className="text-sm text-green-800 space-y-1">
              <li>• {language === 'ar' ? 'استخدم صور عالية الجودة (1200x800 بكسل على الأقل)' : language === 'en' ? 'Use high-quality images (at least 1200x800 pixels)' : 'Utilisez des images de haute qualité (au moins 1200x800 pixels)'}</li>
              <li>• {language === 'ar' ? 'اختر صور تتعلق بالمحتوى التاريخي' : language === 'en' ? 'Choose images related to historical content' : 'Choisissez des images liées au contenu historique'}</li>
              <li>• {language === 'ar' ? 'تأكد من أن الصور مناسبة ثقافياً' : language === 'en' ? 'Ensure images are culturally appropriate' : 'Assurez-vous que les images sont culturellement appropriées'}</li>
            </ul>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-end space-x-4 bg-white rounded-xl shadow-lg p-6">
          <button
            type="button"
            onClick={() => navigate('/admin/history')}
            className="px-6 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            {language === 'ar' ? 'إلغاء' : language === 'en' ? 'Cancel' : 'Annuler'}
          </button>
          <button
            type="submit"
            disabled={saving}
            className="btn-primary flex items-center px-6 py-3 disabled:opacity-50"
          >
            {saving ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            ) : (
              <Save size={20} className="mr-2" />
            )}
            {saving ? 
              (language === 'ar' ? 'جاري الحفظ...' : language === 'en' ? 'Saving...' : 'Sauvegarde...') :
              (isEdit ? 
                (language === 'ar' ? 'تحديث المحتوى' : language === 'en' ? 'Update Content' : 'Mettre à jour') :
                (language === 'ar' ? 'إنشاء المحتوى' : language === 'en' ? 'Create Content' : 'Créer le contenu')
              )
            }
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminHistoryForm;