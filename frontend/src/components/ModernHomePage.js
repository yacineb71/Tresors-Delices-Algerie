import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Award, Leaf, Star, ArrowRight, Play, ChevronDown } from 'lucide-react';
import { useLanguage } from '../App';

// Image URLs from user uploads
const IMAGES = {
  // Main banner
  heroBanner: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/jn14igyi_Screenshot_20260306_035233_Gallery.jpg',
  
  // Lifestyle/Ambiance
  goldenOilBowl: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/zi7oby7s_Screenshot_20260306_035312_Gallery.jpg',
  oilPouring: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/htvnjrmr_Screenshot_20260306_035319_Gallery.jpg',
  oliveHarvest: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/2djevc57_Screenshot_20260306_035328_Gallery.jpg',
  rusticStyle: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/yon4s67q_Screenshot_20260306_035802_Gallery.jpg',
  natureSlogan: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/rlqjceom_Screenshot_20260306_035856_Gallery.jpg',
  
  // Aswel
  aswelLogo: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/nzvxu6g7_Screenshot_20260306_035846_Gallery.jpg',
  aswelOlives: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/awqdgvyx_Screenshot_20260306_035910_Gallery.jpg',
  aswelBottle: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/3n6s1vs9_Screenshot_20260306_035821_Gallery.jpg',
  aswelDetailed: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/tqg10e2u_Screenshot_20260306_035753_Gallery.jpg',
  aswelBanner: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/2jogirih_Screenshot_20260306_035810_Gallery.jpg',
  
  // Baghlia KIARED (Premium)
  baghliaKiared: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/by4z234d_Screenshot_20260306_035711_Gallery.jpg',
  baghliaMedal: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/r4xn9kiq_Screenshot_20260306_035733_Gallery.jpg',
  baghliaCloseup: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/3tasu4d8_Screenshot_20260306_035726_Gallery.jpg',
  baghliaTraditional: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/io0zt8k2_Screenshot_20260306_035458_Gallery.jpg',
  
  // Dahbia
  dahbiaBox: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/51aw7jb7_Screenshot_20260306_035422_Gallery.jpg',
  dahbiaBottle: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/nqxl2xok_Screenshot_20260306_035437_Gallery.jpg',
  
  // Dates
  dattesBox: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/07nhwa6t_Screenshot_20260306_035635_Gallery.jpg',
  dattesDesert: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/gym20cdi_Screenshot_20260306_035627_Gallery.jpg',
  dattesPackaging: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/l6vc9bb5_Screenshot_20260306_035619_Gallery.jpg',
  dattesPremium: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/zwcgr8re_Screenshot_20260306_035654_Gallery.jpg',
  
  // Spices & Souk
  spices: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/95tbcynj_Screenshot_20260306_035406_Gallery.jpg',
  soukLegumes: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/a4vo2dp9_Screenshot_20260306_035356_Gallery.jpg',
  
  // Gift boxes
  giftBoxes: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/7jni3wy2_Screenshot_20260306_035835_Gallery.jpg',
};

const ModernHomePage = () => {
  const { language } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      
      {/* ============================================ */}
      {/* HERO SECTION - Full Screen with Banner */}
      {/* ============================================ */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={IMAGES.heroBanner} 
            alt="Délices et Trésors d'Algérie"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-amber-500/90 text-white text-sm font-medium rounded-full mb-6 animate-fade-in">
              🌿 Produits 100% Naturels d'Algérie
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
              L'excellence du
              <span className="block text-amber-400">terroir algérien</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl animate-slide-up-delay">
              Huiles d'olive premium, dattes Deglet Nour et épices authentiques, 
              directement des producteurs algériens à votre table.
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-up-delay-2">
              <Link 
                to="/shop" 
                className="group px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Découvrir nos produits
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link 
                to="/histoire" 
                className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 border border-white/30"
              >
                Notre histoire
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer z-20"
        >
          <ChevronDown size={36} />
        </button>

        {/* Floating Badges */}
        <div className="absolute bottom-8 right-8 hidden lg:flex flex-col gap-3 z-20">
          <div className="px-4 py-2 bg-white/95 backdrop-blur rounded-full shadow-lg flex items-center gap-2">
            <Award className="text-amber-500" size={20} />
            <span className="text-sm font-medium text-gray-800">Médaille d'Or Dubai 2024</span>
          </div>
          <div className="px-4 py-2 bg-white/95 backdrop-blur rounded-full shadow-lg flex items-center gap-2">
            <Leaf className="text-green-600" size={20} />
            <span className="text-sm font-medium text-gray-800">100% Bio & Naturel</span>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BRANDS SECTION - Nos Marques */}
      {/* ============================================ */}
      <section id="brands" data-animate className="py-24 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">
              Collection Exclusive
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Nos Marques Premium
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Découvrez notre sélection d'huiles d'olive d'exception, 
              issues des meilleures oliveraies d'Algérie.
            </p>
          </div>

          {/* Brand Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Aswel Card */}
            <Link 
              to="/marques/aswel"
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={IMAGES.aswelOlives} 
                  alt="Aswel"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <img src={IMAGES.aswelLogo} alt="Aswel Logo" className="h-12 mb-3 brightness-200" />
                <p className="text-white/80 text-sm mb-3">Kabylie • Tradition ancestrale</p>
                <div className="flex items-center text-amber-400 font-medium group-hover:gap-3 gap-1 transition-all">
                  Découvrir <ChevronRight size={18} />
                </div>
              </div>
            </Link>

            {/* Baghlia KIARED Card */}
            <Link 
              to="/marques/baghlia"
              className="group relative overflow-hidden rounded-3xl bg-black shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/5] overflow-hidden bg-gradient-to-b from-gray-900 to-black flex items-center justify-center p-8">
                <img 
                  src={IMAGES.baghliaKiared} 
                  alt="Baghlia KIARED"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-amber-500 text-black text-xs font-bold rounded-full flex items-center gap-1">
                <Award size={14} /> MÉDAILLE D'OR
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-1">Baghlia KIARED</h3>
                <p className="text-white/70 text-sm mb-3">Premium • Dubai Gold Award 2024</p>
                <div className="flex items-center text-amber-400 font-medium group-hover:gap-3 gap-1 transition-all">
                  Découvrir <ChevronRight size={18} />
                </div>
              </div>
            </Link>

            {/* Dahbia Card */}
            <Link 
              to="/marques/dahbia"
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/5] overflow-hidden bg-gradient-to-b from-stone-100 to-stone-200">
                <img 
                  src={IMAGES.dahbiaBottle} 
                  alt="Dahbia"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-amber-600 to-yellow-500 text-white text-xs font-bold rounded-full">
                ULTRA PREMIUM
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-1">Dahbia</h3>
                <p className="text-white/70 text-sm mb-3">Ultra Premium • Fruité Vert</p>
                <div className="flex items-center text-amber-400 font-medium group-hover:gap-3 gap-1 transition-all">
                  Découvrir <ChevronRight size={18} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* AWARD SECTION - Dubai Gold Medal */}
      {/* ============================================ */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_#d4af37_0%,_transparent_50%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-3xl blur-2xl" />
              <img 
                src={IMAGES.baghliaMedal} 
                alt="Baghlia - Médaille d'Or Dubai"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>

            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full mb-6">
                <Award className="text-amber-400" size={24} />
                <span className="text-amber-400 font-semibold">Dubai Olive Oil Competition 2024</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Médaille d'Or
                <span className="block text-amber-400">Internationale</span>
              </h2>
              
              <p className="text-gray-300 text-lg mb-8 max-w-xl">
                Notre huile d'olive Baghlia KIARED a été récompensée par la prestigieuse 
                médaille d'or au concours international de Dubai, reconnaissant 
                l'excellence et la pureté de notre production.
              </p>

              <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">100%</div>
                  <div className="text-gray-400 text-sm">Extra Vierge</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">0.3%</div>
                  <div className="text-gray-400 text-sm">Acidité max</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">1ère</div>
                  <div className="text-gray-400 text-sm">Pression à froid</div>
                </div>
              </div>

              <Link 
                to="/shop?brand=baghlia"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold rounded-full hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105"
              >
                Commander maintenant
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* LIFESTYLE GALLERY - Masonry Grid */}
      {/* ============================================ */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">
              Authenticité & Tradition
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Le Goût de la Nature
            </h2>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Large Image */}
            <div className="col-span-2 row-span-2 group relative overflow-hidden rounded-2xl">
              <img 
                src={IMAGES.goldenOilBowl} 
                alt="Huile d'olive dorée"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-square">
              <img 
                src={IMAGES.oilPouring} 
                alt="Huile versée"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-square">
              <img 
                src={IMAGES.oliveHarvest} 
                alt="Récolte des olives"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-square">
              <img 
                src={IMAGES.rusticStyle} 
                alt="Style rustique"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-square">
              <img 
                src={IMAGES.spices} 
                alt="Épices"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Wide Image */}
            <div className="col-span-2 group relative overflow-hidden rounded-2xl aspect-video">
              <img 
                src={IMAGES.natureSlogan} 
                alt="Le goût de la nature"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PRODUCTS PREVIEW - Dattes & More */}
      {/* ============================================ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">
                Fruits du Désert
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                Dattes Deglet Nour
                <span className="block text-amber-600">Premium</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Les meilleures dattes du Sahara algérien, récoltées à la main dans les 
                palmeraies de Biskra. Un goût incomparable, une texture fondante, 
                un trésor de la nature.
              </p>

              <ul className="space-y-4 mb-8">
                {['Récoltées à la main', 'Sans conservateurs', 'Qualité Export', 'Conditionnement premium'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                      <Star className="text-amber-600" size={14} />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/shop?category=dattes"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Voir les dattes
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src={IMAGES.dattesPremium} 
                  alt="Dattes Premium"
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                />
                <img 
                  src={IMAGES.dattesBox} 
                  alt="Coffret Dattes"
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src={IMAGES.dattesDesert} 
                  alt="Fruits du Désert"
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                />
                <img 
                  src={IMAGES.dattesPackaging} 
                  alt="Packaging Dattes"
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* GIFT BOXES SECTION */}
      {/* ============================================ */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img 
                src={IMAGES.giftBoxes} 
                alt="Coffrets Cadeaux"
                className="rounded-3xl shadow-2xl"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">
                Idée Cadeau
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                Coffrets Cadeaux
                <span className="block text-amber-600">Premium</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Offrez l'excellence algérienne avec nos coffrets soigneusement composés. 
                Parfaits pour les fêtes, anniversaires ou simplement pour faire plaisir.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/coffrets"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
                >
                  Voir les coffrets
                  <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white font-semibold rounded-full transition-all duration-300"
                >
                  Coffret personnalisé
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA SECTION */}
      {/* ============================================ */}
      <section className="py-24 bg-gradient-to-r from-stone-900 to-stone-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.soukLegumes} 
            alt="Souk"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à découvrir les
            <span className="text-amber-400"> trésors d'Algérie</span> ?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Commandez aujourd'hui et recevez vos produits directement chez vous. 
            Livraison rapide sur toute la France et l'Europe.
          </p>
          <Link 
            to="/shop"
            className="inline-flex items-center gap-3 px-10 py-5 bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explorer la boutique
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>

      {/* Custom Animations CSS */}
      <style jsx="true">{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        .animate-slide-up-delay-2 {
          animation: slide-up 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default ModernHomePage;
