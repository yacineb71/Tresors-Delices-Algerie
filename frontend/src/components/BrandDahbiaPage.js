import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sparkles, Sun, Droplets, Heart } from 'lucide-react';

const IMAGES = {
  box: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/51aw7jb7_Screenshot_20260306_035422_Gallery.jpg',
  bottle: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/nqxl2xok_Screenshot_20260306_035437_Gallery.jpg',
};

const BrandDahbiaPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200/50 rounded-full blur-3xl" />
        
        <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors z-20">
          <ArrowLeft size={20} />
          Retour
        </Link>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-white rounded-full mb-8 shadow-lg">
              <Sparkles size={18} />
              <span className="font-semibold text-sm">ULTRA PREMIUM</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Dahbia
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">
                L'Or Liquide
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-xl">
              Notre huile d'olive la plus précieuse. Récoltée à la main, pressée dans 
              les heures qui suivent, Dahbia est le summum du raffinement.
            </p>

            <Link 
              to="/shop?brand=dahbia"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-500 text-white font-bold rounded-full hover:shadow-xl transition-all hover:scale-105"
            >
              Découvrir Dahbia
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Product Image */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-300/30 to-yellow-200/30 blur-2xl rounded-full" />
            <img 
              src={IMAGES.bottle} 
              alt="Dahbia Premium"
              className="relative w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              L'Excellence à l'État Pur
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Dahbia représente le meilleur de ce que l'Algérie peut offrir en matière d'huile d'olive.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Sun, title: 'Récolte', desc: 'Olives mûries au soleil méditerranéen', color: 'bg-amber-100 text-amber-600' },
              { icon: Droplets, title: 'Extraction', desc: 'Pressée à froid sous 6 heures', color: 'bg-green-100 text-green-600' },
              { icon: Sparkles, title: 'Pureté', desc: 'Acidité inférieure à 0.2%', color: 'bg-yellow-100 text-yellow-600' },
              { icon: Heart, title: 'Bienfaits', desc: 'Riche en antioxydants naturels', color: 'bg-red-100 text-red-600' },
            ].map((feature, i) => (
              <div key={i} className="text-center p-6">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon size={32} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Box Section */}
      <section className="py-24 bg-gradient-to-br from-stone-100 to-amber-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={IMAGES.box} 
                alt="Dahbia Coffret"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">
                Coffret Prestige
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6">
                Le Cadeau Parfait
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Offrez l'excellence avec notre coffret Dahbia. Présenté dans un 
                écrin élégant, c'est le cadeau idéal pour les amateurs de gastronomie.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Bouteille 500ml Dahbia Premium',
                  'Écrin cadeau luxueux',
                  'Livret de dégustation',
                  'Certificat d\'authenticité'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm">✓</div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-6">
                <div>
                  <span className="text-4xl font-bold text-amber-600">59.90€</span>
                  <span className="text-gray-500 ml-2 line-through">74.90€</span>
                </div>
                <Link 
                  to="/shop?brand=dahbia"
                  className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-colors"
                >
                  Commander le coffret
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-amber-500 to-yellow-400">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Sparkles className="text-white/80 mx-auto mb-6" size={48} />
          <h2 className="text-4xl font-bold text-white mb-6">
            Goûtez au luxe algérien
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Dahbia - Pour les moments d'exception.
          </p>
          <Link 
            to="/shop?brand=dahbia"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-amber-600 font-bold text-lg rounded-full hover:bg-amber-50 transition-colors shadow-xl"
          >
            Voir tous les produits Dahbia
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BrandDahbiaPage;
