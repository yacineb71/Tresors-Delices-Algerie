import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Award, Shield, Gem, Star } from 'lucide-react';

const IMAGES = {
  kiared: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/by4z234d_Screenshot_20260306_035711_Gallery.jpg',
  medal: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/r4xn9kiq_Screenshot_20260306_035733_Gallery.jpg',
  closeup: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/3tasu4d8_Screenshot_20260306_035726_Gallery.jpg',
  traditional: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/io0zt8k2_Screenshot_20260306_035458_Gallery.jpg',
};

const BrandBaghliaPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gold gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(212,175,55,0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(212,175,55,0.1)_0%,_transparent_50%)]" />
        
        <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-white/60 hover:text-white transition-colors z-20">
          <ArrowLeft size={20} />
          Retour
        </Link>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full mb-8">
              <Award className="text-amber-400" size={20} />
              <span className="text-amber-400 font-semibold text-sm">MÉDAILLE D'OR - DUBAI 2024</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Baghlia</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">KIARED</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-xl">
              L'huile d'olive premium médaillée d'or au prestigieux concours 
              international de Dubai. L'excellence algérienne reconnue mondialement.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link 
                to="/shop?brand=baghlia"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold rounded-full hover:shadow-lg hover:shadow-amber-500/30 transition-all hover:scale-105"
              >
                Commander maintenant
              </Link>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 blur-3xl rounded-full" />
            <img 
              src={IMAGES.medal} 
              alt="Baghlia KIARED - Médaille d'Or"
              className="relative w-full max-w-lg rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-500/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-amber-500 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Award Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Award className="text-amber-400 mx-auto mb-4" size={64} />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Dubai Olive Oil Competition
              <span className="block text-amber-400">2024</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Notre huile a été sélectionnée parmi des centaines de candidats du monde entier 
              et a remporté la médaille d'or, récompensant son goût exceptionnel et sa qualité irréprochable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: '100%', desc: 'Extra Vierge', color: 'text-amber-400' },
              { icon: Gem, title: '0.3%', desc: 'Acidité maximum', color: 'text-amber-400' },
              { icon: Star, title: '1ère', desc: 'Pression à froid', color: 'text-amber-400' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-white/5 backdrop-blur rounded-2xl border border-amber-500/20">
                <stat.icon className={`${stat.color} mx-auto mb-4`} size={40} />
                <div className="text-4xl font-bold text-white mb-2">{stat.title}</div>
                <div className="text-gray-400">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">La Gamme Baghlia</h2>
            <p className="text-gray-400">Excellence et tradition</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* KIARED Premium */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-amber-500/30 hover:border-amber-500/60 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-amber-500 text-black text-xs font-bold rounded-full">PREMIUM</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full">🏆 MÉDAILLÉ</span>
              </div>
              <img 
                src={IMAGES.closeup} 
                alt="Baghlia KIARED"
                className="w-full h-64 object-contain mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-2">KIARED Premium</h3>
              <p className="text-gray-400 mb-6">Fruité intense, notes d'artichaut et d'amande verte</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-amber-400">49.90€</span>
                <Link 
                  to="/shop?brand=baghlia"
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-full transition-colors"
                >
                  Commander
                </Link>
              </div>
            </div>

            {/* Traditionnelle */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-green-500/30 hover:border-green-500/60 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full">TRADITION</span>
              </div>
              <img 
                src={IMAGES.traditional} 
                alt="Baghlia Traditionnelle"
                className="w-full h-64 object-contain mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-2">Baghlia Traditionnelle</h3>
              <p className="text-gray-400 mb-6">Fruité moyen, équilibré, idéal pour tous les plats</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-green-400">29.90€</span>
                <Link 
                  to="/shop?brand=baghlia"
                  className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-full transition-colors"
                >
                  Commander
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-amber-600 to-yellow-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Goûtez à l'excellence
          </h2>
          <p className="text-black/70 text-lg mb-10">
            Rejoignez les connaisseurs qui ont choisi Baghlia KIARED.
          </p>
          <Link 
            to="/shop?brand=baghlia"
            className="inline-flex items-center gap-2 px-10 py-5 bg-black text-white font-bold text-lg rounded-full hover:bg-gray-900 transition-colors"
          >
            Découvrir tous les produits
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BrandBaghliaPage;
