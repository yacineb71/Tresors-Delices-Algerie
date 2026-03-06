import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Gift, Package, Star, Check, Sparkles } from 'lucide-react';

const IMAGES = {
  giftBoxes: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/7jni3wy2_Screenshot_20260306_035835_Gallery.jpg',
  dahbiaBox: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/51aw7jb7_Screenshot_20260306_035422_Gallery.jpg',
  dattesPremium: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/zwcgr8re_Screenshot_20260306_035654_Gallery.jpg',
  spices: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/95tbcynj_Screenshot_20260306_035406_Gallery.jpg',
  aswelBottle: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/3n6s1vs9_Screenshot_20260306_035821_Gallery.jpg',
};

const CoffretsPage = () => {
  const coffrets = [
    {
      id: 'decouverte',
      name: 'Coffret Découverte',
      subtitle: 'Initiation au terroir algérien',
      price: 59,
      originalPrice: 72,
      contents: [
        'Huile d\'olive extra vierge 250ml (Kabylie)',
        'Dattes Deglet Nour 500g (Tolga)',
        '1 épice premium au choix'
      ],
      image: IMAGES.giftBoxes,
      badge: 'IDÉAL POUR DÉCOUVRIR',
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 'heritage',
      name: 'Coffret Héritage',
      subtitle: 'L\'excellence du terroir',
      price: 79,
      originalPrice: 99,
      contents: [
        'Huile d\'olive extra vierge 500ml (Kabylie)',
        'Dattes Deglet Nour 1kg (Tolga)',
        '2 épices premium au choix',
        'Livret de recettes exclusif'
      ],
      image: IMAGES.dahbiaBox,
      badge: 'BEST-SELLER',
      featured: true,
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 'prestige',
      name: 'Coffret Prestige',
      subtitle: 'Le summum du raffinement',
      price: 129,
      originalPrice: 159,
      contents: [
        'Huile d\'olive Dahbia Premium 500ml',
        'Dattes Deglet Nour Branchées 1kg',
        'Assortiment 4 épices premium',
        'Miel de jujubier 250g',
        'Écrin luxueux personnalisable'
      ],
      image: IMAGES.dahbiaBox,
      badge: 'ÉDITION LIMITÉE',
      color: 'from-amber-600 to-yellow-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-stone-900 to-stone-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={IMAGES.giftBoxes} 
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/80 to-transparent" />
        
        <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-white/70 hover:text-white transition-colors z-20">
          <ArrowLeft size={20} />
          Retour
        </Link>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/40 rounded-full mb-6">
            <Gift className="text-amber-400" size={20} />
            <span className="text-amber-400 font-medium">Offrez l'Excellence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nos Coffrets Cadeaux
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Des compositions soigneusement sélectionnées pour faire découvrir 
            les trésors gastronomiques d'Algérie.
          </p>
        </div>
      </section>

      {/* Coffrets Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {coffrets.map((coffret) => (
              <div 
                key={coffret.id}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  coffret.featured ? 'ring-2 ring-green-500 scale-105 lg:scale-110' : ''
                }`}
              >
                {/* Badge */}
                <div className={`absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r ${coffret.color} text-white text-xs font-bold rounded-full`}>
                  {coffret.badge}
                </div>

                {/* Image */}
                <div className="relative h-64 bg-gradient-to-br from-stone-100 to-stone-200 overflow-hidden">
                  <img 
                    src={coffret.image} 
                    alt={coffret.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{coffret.name}</h3>
                  <p className="text-gray-500 mb-4">{coffret.subtitle}</p>

                  {/* Contents List */}
                  <ul className="space-y-2 mb-6">
                    {coffret.contents.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="flex items-end gap-3 mb-6">
                    <span className="text-4xl font-bold text-gray-900">{coffret.price} CHF</span>
                    <span className="text-lg text-gray-400 line-through mb-1">{coffret.originalPrice} CHF</span>
                  </div>

                  {/* CTA */}
                  <button className={`w-full py-4 bg-gradient-to-r ${coffret.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}>
                    <Package size={20} />
                    Commander ce coffret
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Coffret Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Sparkles className="text-amber-500 mx-auto mb-6" size={48} />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Coffret Sur Mesure
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Vous souhaitez créer un coffret personnalisé pour un événement spécial, 
            un cadeau d'entreprise ou une occasion unique ? Contactez-nous !
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-colors"
            >
              Demander un devis
            </Link>
            <a 
              href="mailto:contact@delices-algerie.ch"
              className="px-8 py-4 border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white font-semibold rounded-full transition-colors"
            >
              contact@delices-algerie.ch
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Our Coffrets */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Pourquoi choisir nos coffrets ?
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: '🌿', title: 'Produits Naturels', desc: '100% naturels, sans additifs ni conservateurs' },
              { icon: '📍', title: 'Origine Garantie', desc: 'Kabylie pour les huiles, Tolga pour les dattes' },
              { icon: '🎁', title: 'Emballage Premium', desc: 'Écrin élégant, parfait pour offrir' },
              { icon: '🚚', title: 'Livraison Soignée', desc: 'Emballage protecteur, livraison rapide' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à offrir l'excellence ?
          </h2>
          <p className="text-gray-400 mb-8">
            Livraison gratuite en Suisse dès 100 CHF d'achat
          </p>
          <Link 
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-full transition-colors"
          >
            Voir tous nos produits
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CoffretsPage;
