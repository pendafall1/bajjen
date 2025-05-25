// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Environnement');
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-gray-800">
              <span className="text-blue-600">Bàjjen</span> Tech
            </a>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Accueil</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Produits</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Partenaires</a>
            <a href="#blog" className="text-gray-700 hover:text-blue-600 font-medium">Blog</a>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer">
              Nous Contacter
            </button>
          </nav>
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Accueil</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Produits</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Partenaires</a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 font-medium">Blog</a>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                Nous Contacter
              </button>
            </div>
          </div>
        )}
      </header>
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=Modern%20African%20tech%20innovation%20hub%20with%20diverse%20team%20working%2C%20futuristic%20displays%20showing%20environmental%20data%2C%20warm%20lighting%2C%20contemporary%20architecture%20with%20African%20design%20elements%2C%20collaborative%20workspace%20with%20cutting-edge%20technology&width=1440&height=800&seq=hero1&orientation=landscape"
            alt="Bàjjen Tech Innovation Hub"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Innover pour un avenir durable en Afrique
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Bàjjen Tech est une startup africaine qui développe des solutions technologiques innovantes pour répondre aux défis environnementaux et sanitaires de notre continent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium !rounded-button whitespace-nowrap cursor-pointer">
                Découvrir nos produits
              </button>
            </div>
            <div className="mt-12 flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <i className="fas fa-globe-africa text-yellow-400"></i>
                <span className="text-sm">100% Africain</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-lightbulb text-green-400"></i>
                <span className="text-sm">Innovation Responsable</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-handshake text-blue-400"></i>
                <span className="text-sm">Impact Social</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Nos Produits Innovants</h2>
            <p className="text-lg text-gray-600">
              Découvrez notre gamme de solutions intelligentes conçues pour améliorer la qualité de l'air intérieur et votre bien-être quotidien.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Purificateur d'Air Intelligent BàjjenAir Pro</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Notre purificateur d'air de pointe combine une technologie avancée de filtration à trois niveaux et un design inspiré des traditions africaines. Contrôlable à distance via notre application mobile, il assure un air pur dans tous vos espaces de vie.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
                <h4 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                  <i className="fas fa-layer-group text-blue-600"></i>
                  Système de Filtration à 3 Niveaux
                </h4>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-bold">1</span>
                      </div>
                      <h5 className="font-bold text-gray-800">Pré-filtre</h5>
                    </div>
                    <p className="text-gray-600">Enlève efficacement la poussière, les PM2.5 et les micro-organismes en suspension</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center">
                        <span className="text-blue-700 font-bold">2</span>
                      </div>
                      <h5 className="font-bold text-gray-800">Filtre HEPA H13</h5>
                    </div>
                    <p className="text-gray-600">Élimine efficacement les poussières et les micro-organismes en suspension avec une efficacité de 99,97%</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-blue-300 flex items-center justify-center">
                        <span className="text-blue-800 font-bold">3</span>
                      </div>
                      <h5 className="font-bold text-gray-800">Filtre à Charbon Actif</h5>
                    </div>
                    <p className="text-gray-600">Élimine efficacement les odeurs, les composés organiques volatils et les polluants gazeux</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-wifi text-blue-600 text-xl"></i>
                  </div>
                  <h4 className="font-medium text-gray-800">Connectivité WiFi</h4>
                  <p className="text-sm text-gray-600 mt-2">Contrôle à distance</p>
                </div>
                <div className="bg-white p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-tachometer-alt text-blue-600 text-xl"></i>
                  </div>
                  <h4 className="font-medium text-gray-800">Capteurs intégrés</h4>
                  <p className="text-sm text-gray-600 mt-2">Mesure en temps réel</p>
                </div>
                <div className="bg-white p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-moon text-blue-600 text-xl"></i>
                  </div>
                  <h4 className="font-medium text-gray-800">Mode nuit</h4>
                  <p className="text-sm text-gray-600 mt-2">Silencieux et économe</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium flex items-center justify-center gap-2 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-shopping-cart"></i>
                  Commander maintenant
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-medium flex items-center justify-center gap-2 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-file-alt"></i>
                  Fiche technique
                </button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 relative h-[600px] overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20sleek%20air%20purifier%20with%20African%20design%20elements%2C%20minimalist%20blue%20and%20white%20color%20scheme%2C%20digital%20display%20showing%20air%20quality%2C%20placed%20in%20contemporary%20living%20room%2C%20professional%20product%20photography%20on%20neutral%20background&width=600&height=600&seq=product1&orientation=squarish"
                  alt="Purificateur d'air BàjjenAir Pro"
                  className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full font-medium flex items-center gap-2">
                  <i className="fas fa-star-of-life text-yellow-300"></i>
                  Nouveau
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-4 text-gray-800">Application Mobile BàjjenAir</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Pilotez votre purificateur, suivez la qualité de l'air en temps réel et recevez des conseils personnalisés pour un environnement plus sain.
              </p>
            </div>
            <div className="relative mb-24">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl transform -skew-y-2"></div>
              <div className="relative grid md:grid-cols-3 gap-8 p-8">
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 transform -rotate-6">
                    <i className="fas fa-mobile-alt text-white text-2xl"></i>
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Contrôle à distance</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Ajustez les paramètres de votre purificateur depuis n'importe où et à tout moment. Interface intuitive pour une expérience utilisateur optimale.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 transform -rotate-6">
                    <i className="fas fa-chart-line text-white text-2xl"></i>
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Suivi en temps réel</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Visualisez la qualité de l'air intérieur avec des données précises et actualisées. Tableaux de bord personnalisables selon vos besoins.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mb-6 transform -rotate-6">
                    <i className="fas fa-bell text-white text-2xl"></i>
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Alertes intelligentes</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Recevez des notifications personnalisées en cas de détérioration de la qualité de l'air. Restez informé pour agir rapidement.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-16 mb-16">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl transform rotate-1"></div>
                <div className="relative p-8">
                  <h3 className="text-2xl font-bold mb-8 text-gray-800">Personnalisation selon vos besoins</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Notre application s'adapte à votre profil et à vos besoins spécifiques pour offrir une expérience sur mesure et maximiser les bénéfices de votre purificateur d'air.
                  </p>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center transform -rotate-6">
                          <i className="fas fa-lungs text-white text-xl"></i>
                        </div>
                        <h4 className="font-bold text-gray-800">Profil Asthmatique</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Paramètres optimisés pour les personnes souffrant d'asthme ou d'allergies respiratoires, avec alertes préventives et filtration renforcée des allergènes.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center transform -rotate-6">
                          <i className="fas fa-flask text-white text-xl"></i>
                        </div>
                        <h4 className="font-bold text-gray-800">Mode Laboratoire</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Environnement ultra-pur pour les espaces nécessitant une qualité d'air exceptionnelle, avec données détaillées et contrôle précis des particules.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center transform -rotate-6">
                          <i className="fas fa-spa text-white text-xl"></i>
                        </div>
                        <h4 className="font-bold text-gray-800">Bien-être</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Équilibre parfait entre qualité d'air et confort, avec modes automatiques intelligents et suggestions pour améliorer votre environnement quotidien.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img
                    src="https://static.readdy.ai/image/8ea2a1c745b3004374e48943575f0ebb/084761b67a004df1b867cb0f2ba46e9c.png"
                    alt="Ajout de produit BàjjenAir"
                    className="w-full h-auto"
                  />
                  <div className="p-3">
                    <h5 className="text-sm font-medium text-gray-800">Ajout de produit</h5>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img
                    src="https://static.readdy.ai/image/8ea2a1c745b3004374e48943575f0ebb/1f57edc34df26cf17e3ee19f8bdbcde2.png"
                    alt="Smart Weather Interface"
                    className="w-full h-auto"
                  />
                  <div className="p-3">
                    <h5 className="text-sm font-medium text-gray-800">Interface Smart Weather</h5>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img
                    src="https://static.readdy.ai/image/8ea2a1c745b3004374e48943575f0ebb/f932f0bdffbe8d2a965c100e999a7453.png"
                    alt="Métriques de l'appareil"
                    className="w-full h-auto"
                  />
                  <div className="p-3">
                    <h5 className="text-sm font-medium text-gray-800">Métriques en temps réel</h5>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img
                    src="https://static.readdy.ai/image/8ea2a1c745b3004374e48943575f0ebb/760de910e8aec7843b6983c5fed831b6.png"
                    alt="Gestion multiple"
                    className="w-full h-auto"
                  />
                  <div className="p-3">
                    <h5 className="text-sm font-medium text-gray-800">Gestion multiple</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Mobile%20app%20interface%20showing%20historical%20air%20quality%20data%20with%20graphs%20and%20charts%2C%20timeline%20view%2C%20data%20analytics%2C%20modern%20UI%20design%2C%20blue%20color%20scheme%2C%20African%20design%20elements%2C%20clean%20layout%20on%20smartphone%20screen&width=600&height=400&seq=app5&orientation=landscape"
                  alt="Historique environnement"
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-gray-800">Historique de l'environnement</h4>
                  <p className="text-gray-600">
                    Suivez l'évolution de la qualité de l'air dans le temps avec des graphiques détaillés et des analyses de tendances pour mieux comprendre votre environnement.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-300 font-medium inline-flex items-center gap-2 !rounded-button whitespace-nowrap cursor-pointer">
                <i className="fab fa-google-play"></i>
                Google Play
              </button>
              <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-300 font-medium inline-flex items-center gap-2 ml-4 !rounded-button whitespace-nowrap cursor-pointer">
                <i className="fab fa-apple"></i>
                App Store
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Notre Équipe</h2>
            <p className="text-lg text-gray-600">
              Une équipe passionnée et expérimentée, dédiée à l'innovation et à l'amélioration de la qualité de l'air en Afrique.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Full Stack Developer */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://static.readdy.ai/image/8ea2a1c745b3004374e48943575f0ebb/9bd06358f181e5def6cf2d64259c2aeb.jpeg"
                  alt="Développeur Full Stack"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Abdalah Lodiane</h3>
                <p className="text-blue-600 font-medium mb-3">Développeur Full Stack</p>
                <p className="text-gray-600 mb-4">
                  Conçoit l'architecture web de notre solution. Met à profit son expérience sur des projets institutionnels et plateformes à fort trafic pour garantir un environnement stable, sécurisé et évolutif.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* CEO */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://static.readdy.ai/image/8ea2a1c745b3004374e48943575f0ebb/5e0a70234054e1e1ebba11197bde75b2.jpeg"
                  alt="CEO Bàjjen Tech"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Penda FALL</h3>
                <p className="text-blue-600 font-medium mb-3">CEO & Fondatrice</p>
                <p className="text-gray-600 mb-4">
                  Ingénieur en Sécurité de l'Information, passionnée de l'innovation durable en Afrique. Engagée pour l’inclusion des femmes dans la tech (Women in Tech)
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Financial Engineer */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://static.readdy.ai/image/8ea2a1c745b3004374e48943575f0ebb/70a149e1fc7bca1f4ad3347abf60a7c1.jpeg"
                  alt="Ingénieur Financière"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Fatou Bintou Rassoul</h3>
                <p className="text-blue-600 font-medium mb-3">Ingénieur Financière</p>
                <p className="text-gray-600 mb-4">
                  Experte en gestion financière et modélisation. Responsable de la stratégie financière et de l'analyse des investissements.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <i className="fas fa-chart-line"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Mobile Developer */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://static.readdy.ai/image/8ea2a1c745b3004374e48943575f0ebb/6913bb92d651f77029ac484a2284b6cc.jpeg"
                  alt="Développeur Mobile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Saliou Seck</h3>
                <p className="text-blue-600 font-medium mb-3">Développeur Mobile Senior</p>
                <p className="text-gray-600 mb-4">
                  Ingénieur en Logicielle et Sécurité de l'Information, spécialisé en Flutter et Android natif. Expert en développement d'applications mobiles sécurisées.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* IoT & Electronics Specialist */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://static.readdy.ai/image/8ea2a1c745b3004374e48943575f0ebb/c92bbfc6fd9bc86cf8f7315f4e9939ce.jpeg"
                  alt="Spécialiste IoT & Électronique"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Richter Leudjeu Tchouatcheu</h3>
                <p className="text-blue-600 font-medium mb-3">Électronique & IoT</p>
                <p className="text-gray-600 mb-4">
                  Étudiant en master cybersécurité embarquée, spécialisé dans le développement de capteurs et la calibration des données environnementales.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <i className="fas fa-microchip"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Customer Success Manager */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://static.readdy.ai/image/8ea2a1c745b3004374e48943575f0ebb/ffef3731978efed3c9f747e3fc31c3bf.jpeg"
                  alt="Communications Manager"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Birima Gueye</h3>
                <p className="text-blue-600 font-medium mb-3">Communications & Community Manager</p>
                <p className="text-gray-600 mb-4">
                  Diplômé en informatique de gestion, infographie et marketing digital. Expert en communication et mobilisation communautaire.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Electronics & IoT Specialist - Assane */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://static.readdy.ai/image/8ea2a1c745b3004374e48943575f0ebb/c8c9535b3c735d370bc6d14835e823da.jpeg"
                  alt="Électronique & IoT"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Assane Aly Boye</h3>
                <p className="text-blue-600 font-medium mb-3">Électronique & IoT</p>
                <p className="text-gray-600 mb-4">
                  Ingénieur en sécurité informatique, spécialisé dans les systèmes embarqués et la sécurité IoT.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <i className="fas fa-microchip"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Notre Engagement Section */}
          <div className="py-16 md:py-24 bg-white rounded-xl shadow-lg">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Notre Engagement</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Chez Bàjjen Tech, notre engagement va au-delà de la simple création de produits. Nous nous efforçons d'avoir un impact positif sur l'environnement, la société et la santé publique.
                </p>
              </div>
              <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row mb-8">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <div className="flex justify-center md:justify-start">
                      <div className="flex space-x-4">
                        <button
                          onClick={() => setActiveTab('Environnement')}
                          className={`px-4 py-2 font-medium rounded-lg transition-colors duration-300 cursor-pointer ${activeTab === 'Environnement' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                        >
                          Environnement
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <div className="flex justify-center">
                      <div className="flex space-x-4">
                        <button
                          onClick={() => setActiveTab('Social')}
                          className={`px-4 py-2 font-medium rounded-lg transition-colors duration-300 cursor-pointer ${activeTab === 'Social' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                        >
                          Social
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3">
                    <div className="flex justify-center md:justify-end">
                      <div className="flex space-x-4">
                        <button
                          onClick={() => setActiveTab('Santé')}
                          className={`px-4 py-2 font-medium rounded-lg transition-colors duration-300 cursor-pointer ${activeTab === 'Santé' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                        >
                          Santé
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  {activeTab === 'Environnement' && (
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Notre engagement environnemental</h3>
                        <p className="text-gray-600 mb-6">
                          Nous nous engageons à minimiser notre impact environnemental à chaque étape du cycle de vie de nos produits, de la conception à la fin de vie.
                        </p>
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <div className="mt-1 mr-3 text-green-600">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                              <p className="text-gray-600">Utilisation de matériaux recyclables et durables dans nos produits</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="mt-1 mr-3 text-green-600">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                              <p className="text-gray-600">Conception à faible consommation d'énergie pour réduire l'empreinte carbone</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="mt-1 mr-3 text-green-600">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                              <p className="text-gray-600">Programme de reprise et de recyclage des produits en fin de vie</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="mt-1 mr-3 text-green-600">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                              <p className="text-gray-600">Emballages éco-conçus et minimisation des déchets</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="mt-1 mr-3 text-green-600">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                              <p className="text-gray-600">Objectif de neutralité carbone pour nos opérations d'ici 2027</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <img
                          src="https://readdy.ai/api/search-image?query=Sustainable%20manufacturing%20facility%20in%20Africa%20with%20green%20plants%20inside%2C%20workers%20in%20eco-friendly%20production%20line%2C%20air%20purifiers%20being%20assembled%20with%20recycled%20materials%2C%20bright%20modern%20industrial%20space&width=600&height=400&seq=env1&orientation=landscape"
                          alt="Engagement environnemental Bàjjen Tech"
                          className="w-full h-auto rounded-xl"
                        />
                      </div>
                    </div>
                  )}
                  {activeTab === 'Social' && (
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Notre engagement social</h3>
                        <p className="text-gray-600 mb-6">
                          Nous croyons fermement que notre succès doit bénéficier aux communautés locales et contribuer au développement économique de l'Afrique.
                        </p>
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <div className="mt-1 mr-3 text-blue-600">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                              <p className="text-gray-600">Création d'emplois locaux qualifiés dans nos sites de production</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="mt-1 mr-3 text-blue-600">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                              <p className="text-gray-600">Programme de formation et de développement professionnel pour nos employés</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="mt-1 mr-3 text-blue-600">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                              <p className="text-gray-600">Partenariats avec des écoles et universités locales pour la recherche</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="mt-1 mr-3 text-blue-600">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                              <p className="text-gray-600">Soutien aux initiatives communautaires locales</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="mt-1 mr-3 text-blue-600">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                              <p className="text-gray-600">Programme de bourses pour les étudiants en sciences et technologies</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <img
                          src="https://readdy.ai/api/search-image?query=African%20tech%20company%20training%20session%20with%20diverse%20employees%20learning%20about%20air%20purifier%20technology%2C%20collaborative%20workspace%2C%20knowledge%20sharing%2C%20professional%20development%20in%20modern%20office%20environment&width=600&height=400&seq=social1&orientation=landscape"
                          alt="Engagement social Bàjjen Tech"
                          className="w-full h-auto rounded-xl"
                        />
                      </div>
                    </div>
                  )}
                  {activeTab === 'Santé' && (
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Notre engagement pour la santé</h3>
                        <p className="text-gray-600 mb-6">
                          Améliorer la santé respiratoire et le bien-être des populations africaines est au cœur de notre mission et guide le développement de nos produits.
                        </p>
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <div className="mt-1 mr-3 text-purple-600">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                              <p className="text-gray-600">Recherche continue sur la qualité de l'air et son impact sur la santé</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="mt-1 mr-3 text-purple-600">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                              <p className="text-gray-600">Partenariats avec des hôpitaux et cliniques pour des études cliniques</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="mt-1 mr-3 text-purple-600">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                              <p className="text-gray-600">Programmes de sensibilisation sur la santé respiratoire dans les écoles</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="mt-1 mr-3 text-purple-600">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                              <p className="text-gray-600">Dons de purificateurs d'air aux établissements de santé dans les zones polluées</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="mt-1 mr-3 text-purple-600">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <div>
                              <p className="text-gray-600">Développement de solutions spécifiques pour les personnes souffrant d'asthme et d'allergies</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <img
                          src="https://readdy.ai/api/search-image?query=African%20healthcare%20professionals%20discussing%20air%20quality%20data%20in%20hospital%20setting%2C%20medical%20staff%20analyzing%20respiratory%20health%20metrics%2C%20air%20purifiers%20in%20medical%20facility%2C%20professional%20healthcare%20environment&width=600&height=400&seq=health1&orientation=landscape"
                          alt="Engagement santé Bàjjen Tech"
                          className="w-full h-auto rounded-xl"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section */}
      <section id="blog" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Notre Blog</h2>
            <p className="text-lg text-gray-600">
              Découvrez nos dernières actualités, récompenses et activités dans le domaine de la qualité de l'air et de l'innovation technologique en Afrique.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Awards Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=African%20tech%20awards%20ceremony%2C%20modern%20conference%20hall%2C%20professional%20event%20with%20tech%20industry%20leaders%2C%20award%20trophies%20display%2C%20elegant%20atmosphere&width=400&height=300&seq=award1&orientation=landscape"
                  alt="Prix et Récompenses"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-award text-yellow-500 mr-2"></i>
                  <h3 className="text-xl font-bold text-gray-800">Prix et Récompenses</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-trophy text-yellow-500 mt-1 mr-2"></i>
                    <div>
                      <p className="font-medium text-gray-800">Gagnant de WAZIHUB competition innovation 2021</p>
                      <p className="text-sm text-gray-600">Pour notre solution innovante en qualité de l'air</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-medal text-yellow-500 mt-1 mr-2"></i>
                    <div>
                      <p className="font-medium text-gray-800">Finaliste Concours Entrepreneuriat responsable OFE 2022</p>
                      <p className="text-sm text-gray-600">Reconnaissance de notre impact social et environnemental</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-award text-yellow-500 mt-1 mr-2"></i>
                    <div>
                      <p className="font-medium text-gray-800">Demi-Finaliste Grand Prix Innovation Numérique 2023</p>
                      <p className="text-sm text-gray-600">Prix du Président de la République</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Recent Activities Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=African%20tech%20media%20coverage%20setup%20with%20cameras%20and%20recording%20equipment%2C%20professional%20interview%20environment%2C%20tech%20product%20showcase%2C%20modern%20studio%20setting&width=400&height=300&seq=activity1&orientation=landscape"
                  alt="Activités Récentes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-calendar-alt text-blue-500 mr-2"></i>
                  <h3 className="text-xl font-bold text-gray-800">Activités Récentes</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-chalkboard-teacher text-blue-500 mt-1 mr-2"></i>
                    <div>
                      <a href="https://datafest.africa/speakers/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        <p className="font-medium text-gray-800">Panelist au DataFest Africa</p>
                        <p className="text-sm text-gray-600">Tech Garden: Innovator Speaker</p>
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-lightbulb text-blue-500 mt-1 mr-2"></i>
                    <div>
                      <a href="https://www.linkedin.com/posts/penda-fall-18aab01a6_lafiyainnovators-health-impacthub-activity-7009258756576272385-Jilw" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        <p className="font-medium text-gray-800">Programme Lafiya Innovator 2023</p>
                        <p className="text-sm text-gray-600">Incubation à Impact Hub</p>
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-globe-africa text-blue-500 mt-1 mr-2"></i>
                    <div>
                      <a href="https://www.linkedin.com/posts/penda-fall-18aab01a6_pacao-tech-gitexafrica2024-activity-7202612915625943040-Kl0B" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        <p className="font-medium text-gray-800">GITEX AFRICA 2024</p>
                        <p className="text-sm text-gray-600">Participation à l'événement tech majeur</p>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Latest News Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20African%20tech%20office%20meeting%20room%2C%20team%20discussing%20air%20quality%20data%20on%20large%20screens%2C%20professional%20business%20environment%2C%20collaborative%20workspace&width=400&height=300&seq=news1&orientation=landscape"
                  alt="Dernières Actualités"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-newspaper text-green-500 mr-2"></i>
                  <h3 className="text-xl font-bold text-gray-800">Dernières Actualités</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-handshake text-green-500 mt-1 mr-2"></i>
                    <div>
                      <p className="font-medium text-gray-800">Partenariat Stratégique</p>
                      <p className="text-sm text-gray-600">Collaboration avec Africtiviste</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium inline-flex items-center gap-2 !rounded-button whitespace-nowrap cursor-pointer">
              <i className="fas fa-plus-circle"></i>
              Voir plus d'actualités
            </button>
          </div>
        </div>
      </section>
      {/* Partners Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Nos Partenaires</h2>
            <p className="text-lg text-gray-600">
              Nous collaborons avec des organisations partageant notre vision d'un avenir plus sain et durable pour l'Afrique.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 mb-16">
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg h-24">
              <div className="text-center">
                <i className="fas fa-graduation-cap text-4xl text-gray-400 mb-2"></i>
                <div className="text-sm font-medium text-gray-600">Université de Dakar</div>
              </div>
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg h-24">
              <img
                src="https://static.readdy.ai/image/8ea2a1c745b3004374e48943575f0ebb/ddb778985290030fa7a12783a849e894.png"
                alt="Africtivistes"
                className="h-16 object-contain"
              />
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Devenez partenaire</h3>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Vous souhaitez collaborer avec Bàjjen Tech ? Que vous soyez une entreprise, une ONG ou un investisseur, nous sommes ouverts aux partenariats stratégiques qui contribuent à notre mission.
            </p>
            <form className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organisation</label>
                <input
                  type="text"
                  id="organization"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Nom de votre organisation"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Décrivez votre proposition de partenariat"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium !rounded-button whitespace-nowrap cursor-pointer">
                  Envoyer ma demande
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Bàjjen Tech</h3>
              <p className="text-gray-400 mb-4">
                Technologies innovantes pour un air plus sain et un avenir durable en Afrique.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Produits</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">BàjjenAir Pro</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Application mobile</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Filtres de rechange</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Accessoires</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Entreprise</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">À propos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Carrières</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Centre d'aide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Garantie</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Expédition</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Bàjjen Tech. Tous droits réservés.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Mentions légales</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Politique de confidentialité</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Conditions d'utilisation</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
  );
}

export default App;
