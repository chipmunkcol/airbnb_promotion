
import React, {useState} from 'react';
import { IMAGES } from '../constants';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Gallery: React.FC = () => {
  const [open, setOpen] = useState(false);
const [current, setCurrent] = useState(0);
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">숙소 갤러리</h2>
          <p className="text-gray-500">STAY CALM in SEOUL 301호의 내부 공간을 확인해 보세요.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {IMAGES.slice(0,9).map((img, idx) => (
    <div 
      key={idx}
      onClick={() => {
        setCurrent(idx);
        setOpen(true);
      }}
      className={`group relative overflow-hidden rounded-2xl shadow-md cursor-pointer ${
        idx === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
      }`}
    >
      <img 
        src={img.url} 
        alt={img.alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 min-h-[250px]"
      />
    </div>
  ))}
</div>

{open && (
  <div
    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
    onClick={() => setOpen(false)}
  >
    <div
      className="relative w-full max-w-6xl px-4"
      onClick={(e) => e.stopPropagation()}
    >
      <Swiper
        modules={[Navigation, Pagination, Keyboard]}
        initialSlide={current}
          navigation={{
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  }}
  pagination={{ clickable: true }}
  keyboard={{ enabled: true }}
  spaceBetween={30}
        className="rounded-xl"
      >
        {IMAGES.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img.url}
              alt={img.alt}
              className="w-full max-h-[80vh] object-contain mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="swiper-prev absolute left-4 top-1/2 -translate-y-1/2 z-50">
  <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-lg hover:scale-110 transition">
    <ChevronLeft className="w-6 h-6 text-gray-800" />
  </div>
</button>

<button className="swiper-next absolute right-4 top-1/2 -translate-y-1/2 z-50">
  <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-lg hover:scale-110 transition">
    <ChevronRight className="w-6 h-6 text-gray-800" />
  </div>
</button>

      <button
        onClick={() => setOpen(false)}
        className="absolute top-4 right-4 text-white text-3xl z-50"
      >
        ✕
      </button>
    </div>
  </div>
)}
      </div>
    </section>
  );
};
