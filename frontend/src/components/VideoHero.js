import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, Volume2, VolumeX, ChevronDown } from 'lucide-react';
import { useLanguage } from '../App';
import { useLuxuryMode } from '../contexts/LuxuryModeContext';

const VideoHero = () => {
  const { language } = useLanguage();
  const { isLuxuryMode } = useLuxuryMode();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked, that's okay
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const texts = {
    fr: {
      title: "Délices et Trésors d'Algérie",
      subtitle: "L'authenticité de la Kabylie dans chaque goutte",
      cta: "Découvrir nos produits",
      tagline: "Huile d'olive artisanale • Dattes Deglet Nour"
    },
    ar: {
      title: "كنوز ولذائذ الجزائر",
      subtitle: "أصالة القبائل في كل قطرة",
      cta: "اكتشف منتجاتنا",
      tagline: "زيت زيتون تقليدي • تمور دقلة نور"
    },
    en: {
      title: "Algerian Delights & Treasures",
      subtitle: "The authenticity of Kabylia in every drop",
      cta: "Discover our products",
      tagline: "Artisanal Olive Oil • Deglet Nour Dates"
    }
  };

  const t = texts[language] || texts.fr;

  return (
    <div className={`relative h-screen w-full overflow-hidden ${isLuxuryMode ? 'luxury-hero' : ''}`}>
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1920"
      >
        <source src="/videos/hero-olive-kabylie.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className={`absolute inset-0 ${
        isLuxuryMode 
          ? 'bg-gradient-to-b from-black/80 via-black/60 to-black/90' 
          : 'bg-gradient-to-b from-black/50 via-black/30 to-black/70'
      }`} />

      {/* Luxury Gold Border Effect */}
      {isLuxuryMode && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        {/* Luxury Badge */}
        {isLuxuryMode && (
          <div className="mb-6 px-4 py-2 border border-yellow-500/50 rounded-full">
            <span className="text-yellow-400 text-sm tracking-[0.3em] uppercase font-light">
              Collection Premium
            </span>
          </div>
        )}

        {/* Main Title */}
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-5xl leading-tight ${
          isLuxuryMode 
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 animate-shimmer'
            : 'text-white'
        }`}
        style={isLuxuryMode ? {
          backgroundSize: '200% auto',
          animation: 'shimmer 3s linear infinite'
        } : {}}>
          {t.title}
        </h1>

        {/* Subtitle */}
        <p className={`text-xl md:text-2xl mb-4 max-w-2xl ${
          isLuxuryMode ? 'text-yellow-100/90' : 'text-white/90'
        }`}>
          {t.subtitle}
        </p>

        {/* Tagline */}
        <p className={`text-sm md:text-base mb-10 tracking-widest uppercase ${
          isLuxuryMode ? 'text-yellow-500/80' : 'text-white/70'
        }`}>
          {t.tagline}
        </p>

        {/* CTA Button */}
        <Link
          to="/shop"
          className={`group relative px-10 py-4 text-lg font-semibold rounded-full transition-all duration-500 transform hover:scale-105 ${
            isLuxuryMode
              ? 'bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-black hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.3)]'
              : 'bg-white text-gray-900 hover:bg-amber-50'
          }`}
        >
          <span className="relative z-10">{t.cta}</span>
          {isLuxuryMode && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
          )}
        </Link>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-24 left-4 z-20 flex gap-2">
        <button
          onClick={togglePlay}
          className={`p-3 rounded-full backdrop-blur-md transition-all ${
            isLuxuryMode 
              ? 'bg-black/50 text-yellow-400 hover:bg-yellow-500/20 border border-yellow-500/30' 
              : 'bg-white/20 text-white hover:bg-white/30'
          }`}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button
          onClick={toggleMute}
          className={`p-3 rounded-full backdrop-blur-md transition-all ${
            isLuxuryMode 
              ? 'bg-black/50 text-yellow-400 hover:bg-yellow-500/20 border border-yellow-500/30' 
              : 'bg-white/20 text-white hover:bg-white/30'
          }`}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce ${
          isLuxuryMode ? 'text-yellow-400' : 'text-white'
        }`}
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>

      {/* Luxury shimmer animation */}
      <style jsx="true">{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
};

export default VideoHero;
