
import React from 'react';
import { SITE_INFO } from '../constants';

export const Hero: React.FC = () => {
  // 직거래 하면 에어비앤비보다 저렴하다는 confirm 창
  const handleDirectTradeClick = () => {
    if (confirm("직거래 하면 에어비앤비보다 최소 10% 저렴합니다. 그래도 에어비앤비로 예약 진행하시겠습니까?")) {
      // 새 창으로 에어비앤비 페이지 열기
      window.open(SITE_INFO.airbnbUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: `url('https://picsum.photos/seed/main-hero/1920/1080')` }}
      />
      <div className="absolute inset-0 z-10 bg-black/40" />
      
      <div className="relative z-20 text-center text-white px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          {SITE_INFO.name}
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
          {SITE_INFO.catchphrase} <br className="hidden md:block" />
          <span className="font-medium text-emerald-300">#{SITE_INFO.unit} #워케이션 #군자 #성수</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <a 
            href="#inquiry"
            className="px-8 py-4 bg-gradient-to-br from-emerald-500 to-teal-700 hover:to-teal-800 backdrop-blur-md text-white  rounded-full font-bold text-lg transition-all"
          >
            장기 숙박 직거래 문의
          </a>
          <a 
            onClick={handleDirectTradeClick}
            // href={SITE_INFO.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-rose-500/30"
          >
            에어비엔비 예약하기
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-1 h-12 rounded-full bg-white/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};
