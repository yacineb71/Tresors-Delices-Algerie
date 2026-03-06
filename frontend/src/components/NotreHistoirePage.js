import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Heart, Award, Users, Leaf, Globe } from 'lucide-react';

const IMAGES = {
  oliveHarvest: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/2djevc57_Screenshot_20260306_035328_Gallery.jpg',
  goldenOil: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/zi7oby7s_Screenshot_20260306_035312_Gallery.jpg',
  rustic: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/yon4s67q_Screenshot_20260306_035802_Gallery.jpg',
  dattesPremium: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/zwcgr8re_Screenshot_20260306_035654_Gallery.jpg',
  natureSlogan: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/rlqjceom_Screenshot_20260306_035856_Gallery.jpg',
  souk: 'https://customer-assets.emergentagent.com/job_mazigho-shop/artifacts/a4vo2dp9_Screenshot_20260306_035356_Gallery.jpg',
};

const NotreHistoirePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.oliveHarvest} 
            alt="Récolte des olives en Kabylie"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        
        <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-white/70 hover:text-white transition-colors z-20">
          <ArrowLeft size={20} />
          Retour
        </Link>

        <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-amber-500/90 text-white text-sm font-medium rounded-full mb-6">
              Notre Histoire
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              L'excellence du terroir algérien
            </h1>
            <p className="text-xl text-white/90">
              Une maison suisse valorisant les trésors gastronomiques d'Algérie
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">
                Le Fondateur
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6">
                Une passion née en Kabylie
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Je m'appelle <strong>Yacine Bahloul</strong>. Mes racines plongent dans les 
                montagnes de Kabylie, où ma famille cultive des oliviers depuis des générations. 
                Enfant, je passais mes étés à regarder mon grand-père presser les olives, 
                fasciné par cette huile dorée au parfum envoûtant.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Après avoir construit ma vie en Suisse, j'ai voulu créer un pont entre 
                ces deux mondes : la rigueur suisse et la richesse du terroir algérien. 
                <strong> Délices & Trésors d'Algérie</strong> est né de cette volonté de 
                partager l'excellence de ma terre natale.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Chaque produit que nous sélectionnons raconte une histoire, celle de 
                producteurs passionnés qui perpétuent des savoir-faire ancestraux.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                  <Heart className="text-amber-600" size={28} />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Yacine Bahloul</div>
                  <div className="text-gray-500">Fondateur</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={IMAGES.goldenOil} 
                alt="Huile d'olive dorée"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Des principes qui guident chacune de nos décisions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                icon: Leaf, 
                title: 'Authenticité', 
                desc: 'Des produits 100% naturels, fidèles à leur origine',
                color: 'bg-green-100 text-green-600'
              },
              { 
                icon: Award, 
                title: 'Excellence', 
                desc: 'Une sélection rigoureuse des meilleurs produits',
                color: 'bg-amber-100 text-amber-600'
              },
              { 
                icon: Users, 
                title: 'Équité', 
                desc: 'Des partenariats justes avec nos producteurs',
                color: 'bg-blue-100 text-blue-600'
              },
              { 
                icon: Globe, 
                title: 'Partage', 
                desc: 'Faire découvrir les trésors de l\'Algérie',
                color: 'bg-purple-100 text-purple-600'
              },
            ].map((value, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm">
                <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <value.icon size={32} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origins Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Terroirs</h2>
            <p className="text-gray-600 text-lg">
              Des régions d'exception pour des produits d'exception
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Kabylie */}
            <div className="relative overflow-hidden rounded-3xl group">
              <img 
                src={IMAGES.rustic} 
                alt="Kabylie"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 text-amber-400 mb-2">
                  <MapPin size={18} />
                  <span className="text-sm font-medium">Algérie</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Kabylie</h3>
                <p className="text-white/80">
                  Berceau de nos huiles d'olive. Ses montagnes et son climat méditerranéen 
                  donnent des olives d'une qualité exceptionnelle.
                </p>
              </div>
            </div>

            {/* Tolga */}
            <div className="relative overflow-hidden rounded-3xl group">
              <img 
                src={IMAGES.dattesPremium} 
                alt="Tolga"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 text-amber-400 mb-2">
                  <MapPin size={18} />
                  <span className="text-sm font-medium">Algérie</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Tolga (Biskra)</h3>
                <p className="text-white/80">
                  L'oasis des dattes Deglet Nour, les "doigts de lumière". 
                  Un climat désertique idéal pour les meilleures dattes du monde.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-stone-900 to-stone-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Notre Parcours</h2>
          </div>

          <div className="space-y-8">
            {[
              { year: '2020', event: 'L\'idée germe : partager les trésors de l\'Algérie' },
              { year: '2022', event: 'Premiers partenariats avec des producteurs en Kabylie' },
              { year: '2023', event: 'Lancement officiel de Délices & Trésors d\'Algérie' },
              { year: '2024', event: 'Médaille d\'Or pour Baghlia KIARED à Dubai' },
              { year: '2025', event: 'Expansion sur la Riviera et au-delà...' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold">{item.year}</span>
                </div>
                <div className="flex-1 p-4 bg-white/10 rounded-xl">
                  <p className="text-white">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Prêt à découvrir nos trésors ?
          </h2>
          <p className="text-black/70 text-lg mb-10">
            Explorez notre sélection de produits d'exception
          </p>
          <Link 
            to="/shop"
            className="inline-flex items-center gap-2 px-10 py-5 bg-black text-white font-bold text-lg rounded-full hover:bg-gray-900 transition-colors"
          >
            Découvrir la boutique
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotreHistoirePage;
