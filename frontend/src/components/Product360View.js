import React, { useState, useRef, useEffect } from 'react';
import { RotateCw, ZoomIn, X } from 'lucide-react';
import { useLuxuryMode } from '../contexts/LuxuryModeContext';

const Product360View = ({ images, productName, isOpen, onClose }) => {
  const { isLuxuryMode } = useLuxuryMode();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const containerRef = useRef(null);

  // Generate 360 frames from available images (simulate rotation)
  const frames = images && images.length > 0 ? images : [
    'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800'
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const diff = e.clientX - startX;
    const newRotation = rotation + diff * 0.5;
    setRotation(newRotation);
    setStartX(e.clientX);
    
    // Calculate which frame to show based on rotation
    const frameIndex = Math.abs(Math.floor(newRotation / 30)) % frames.length;
    setCurrentIndex(frameIndex);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const diff = e.touches[0].clientX - startX;
    const newRotation = rotation + diff * 0.5;
    setRotation(newRotation);
    setStartX(e.touches[0].clientX);
    
    const frameIndex = Math.abs(Math.floor(newRotation / 30)) % frames.length;
    setCurrentIndex(frameIndex);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 ${isLuxuryMode ? 'bg-black/95' : 'bg-black/90'}`}
        onClick={onClose}
      />
      
      {/* Content */}
      <div className={`relative w-full max-w-4xl mx-4 ${isLuxuryMode ? 'luxury-360' : ''}`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute -top-12 right-0 p-2 rounded-full transition-colors ${
            isLuxuryMode 
              ? 'text-yellow-400 hover:bg-yellow-500/20' 
              : 'text-white hover:bg-white/20'
          }`}
        >
          <X size={28} />
        </button>

        {/* Product Name */}
        <h3 className={`text-center text-xl font-semibold mb-4 ${
          isLuxuryMode ? 'text-yellow-400' : 'text-white'
        }`}>
          {productName}
        </h3>

        {/* 360 View Container */}
        <div
          ref={containerRef}
          className={`relative aspect-square rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing select-none ${
            isLuxuryMode 
              ? 'border-2 border-yellow-500/30 shadow-[0_0_50px_rgba(234,179,8,0.2)]' 
              : 'border border-white/20'
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          {/* Product Image */}
          <img
            src={frames[currentIndex]}
            alt={`${productName} - Vue ${currentIndex + 1}`}
            className={`w-full h-full object-contain transition-transform duration-100 ${
              isZoomed ? 'scale-150' : 'scale-100'
            }`}
            style={{
              transform: `rotateY(${rotation}deg) ${isZoomed ? 'scale(1.5)' : 'scale(1)'}`
            }}
            draggable={false}
          />

          {/* 360 Badge */}
          <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full flex items-center gap-2 ${
            isLuxuryMode 
              ? 'bg-black/70 text-yellow-400 border border-yellow-500/30' 
              : 'bg-black/50 text-white'
          }`}>
            <RotateCw size={16} className="animate-spin-slow" />
            <span className="text-sm font-medium">360°</span>
          </div>

          {/* Zoom Button */}
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
              isLuxuryMode 
                ? 'bg-black/70 text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/20' 
                : 'bg-black/50 text-white hover:bg-black/70'
            }`}
          >
            <ZoomIn size={20} />
          </button>

          {/* Rotation Indicator */}
          <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm ${
            isLuxuryMode 
              ? 'bg-black/70 text-yellow-400/80 border border-yellow-500/20' 
              : 'bg-black/50 text-white/80'
          }`}>
            {isDragging ? '↔ Glissez pour tourner' : '↔ Cliquez et glissez'}
          </div>
        </div>

        {/* Thumbnail Strip */}
        {frames.length > 1 && (
          <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2">
            {frames.map((frame, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setRotation(index * 30);
                }}
                className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                  currentIndex === index 
                    ? isLuxuryMode 
                      ? 'ring-2 ring-yellow-400 scale-110' 
                      : 'ring-2 ring-white scale-110'
                    : 'opacity-50 hover:opacity-80'
                }`}
              >
                <img
                  src={frame}
                  alt={`Vue ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <style jsx="true">{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Product360View;
