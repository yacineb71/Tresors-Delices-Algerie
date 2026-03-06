import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Leaf, Award, MapPin, Droplet } from 'lucide-react';

const IMAGES = {
  logo: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/nzvxu6g7_Screenshot_20260306_035846_Gallery.jpg',
  olives: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/awqdgvyx_Screenshot_20260306_035910_Gallery.jpg',
  bottle: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/3n6s1vs9_Screenshot_20260306_035821_Gallery.jpg',
  detailed: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/tqg10e2u_Screenshot_20260306_035753_Gallery.jpg',
  banner: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/2jogirih_Screenshot_20260306_035810_Gallery.jpg',
  rustic: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/yon4s67q_Screenshot_20260306_035802_Gallery.jpg',
};

const BrandAswelPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden bg-gradient-to-br from-stone-800 to-stone-900">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.banner} 
            alt="Aswel Banner"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            Retour
          </Link>
          
          <img src={IMAGES.logo} alt="Aswel Logo" className="h-24 md:h-32 mb-8 brightness-200" />
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Huile d'Olive de Kabylie
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            La tradition ancestrale des montagnes kabyles, dans chaque goutte.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-green-600 font-medium tracking-wider uppercase text-sm">
              Notre Histoire
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6">
              Le goût authentique de la Kabylie
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Depuis des générations, les oliviers des montagnes de Kabylie produisent 
              une huile d'olive d'exception. Aswel perpétue cette tradition en sélectionnant 
              les meilleures olives, récoltées à la main au moment optimal de maturité.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Notre huile est extraite à froid dans les 24 heures suivant la récolte, 
              préservant ainsi tous ses arômes et bienfaits nutritionnels.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Origine</h4>
                  <p className="text-gray-600 text-sm">Kabylie, Algérie</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Droplet className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Acidité</h4>
                  <p className="text-gray-600 text-sm">≤ 0.5%</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Leaf className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Extraction</h4>
                  <p className="text-gray-600 text-sm">1ère pression à froid</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Award className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Qualité</h4>
                  <p className="text-gray-600 text-sm">Extra Vierge</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={IMAGES.olives} 
              alt="Aswel avec olives"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-green-600 rounded-2xl -z-10" />
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Gamme</h2>
            <p className="text-gray-600 text-lg">Disponible en plusieurs formats</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { size: '250ml', price: '12.90€', desc: 'Format découverte' },
              { size: '500ml', price: '22.90€', desc: 'Format familial' },
              { size: '750ml', price: '29.90€', desc: 'Grand format', featured: true },
            ].map((product, i) => (
              <div 
                key={i}
                className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow ${
                  product.featured ? 'ring-2 ring-green-500' : ''
                }`}
              >
                {product.featured && (
                  <div className="text-center mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                      Meilleur rapport
                    </span>
                  </div>
                )}
                <img 
                  src={IMAGES.bottle} 
                  alt={`Aswel ${product.size}`}
                  className="w-full h-64 object-contain mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">{product.size}</h3>
                <p className="text-gray-500 text-center mb-4">{product.desc}</p>
                <p className="text-3xl font-bold text-green-600 text-center mb-6">{product.price}</p>
                <Link 
                  to="/shop?brand=aswel"
                  className="block w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full text-center transition-colors"
                >
                  Ajouter au panier
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Découvrez le goût de la Kabylie
          </h2>
          <p className="text-green-100 text-lg mb-10">
            Commandez maintenant et recevez votre huile d'olive Aswel chez vous.
          </p>
          <Link 
            to="/shop?brand=aswel"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-green-700 font-bold text-lg rounded-full hover:bg-green-50 transition-colors"
          >
            Voir tous les produits Aswel
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BrandAswelPage;
