
import React, { useEffect, useRef } from 'react';
import { SITE_INFO } from '../constants';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

export const Location: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // 실제 주소(서울특별시 광진구 천호대로 102길 8)에서 약간 빗겨난 좌표
    // 실제 좌표: 약 37.5567, 127.0743
    // 프라이버시를 위해 약 30~50m 정도 이동
    const circleCenter = { lat: 37.5563, lng: 127.0738 };

    const initMap = () => {
      if (!mapRef.current || !window.google) return;

      const map = new window.google.maps.Map(mapRef.current, {
        center: circleCenter,
        zoom: 16,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          }
        ],
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      });

      mapInstanceRef.current = map;

      // 100m 반경 원 그리기
      new window.google.maps.Circle({
        strokeColor: '#10b981',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#10b981',
        fillOpacity: 0.2,
        map: map,
        center: circleCenter,
        radius: 100, // 100m
      });
    };

    // Google Maps 스크립트가 이미 로드되어 있는지 확인
    if (window.google && window.google.maps) {
      initMap();
    } else {
      // 스크립트 로드
      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&callback=initMap`;
        script.async = true;
        script.defer = true;
        window.initMap = initMap;
        document.head.appendChild(script);
      } else {
        window.initMap = initMap;
      }
    }

    return () => {
      // Cleanup
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">위치 안내</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-emerald-600 mb-2">주소</h3>
                <p className="text-gray-600">{SITE_INFO.location}</p>
                <p className="text-sm text-gray-400 mt-1">(정확한 상세 주소는 예약 확정 시 안내드립니다)</p>
              </div>
              <div>
                <h3 className="font-bold text-emerald-600 mb-2">교통 및 주변시설</h3>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  <li><b>군자역(5/7호선)</b> 도보 7분</li>
                  <li>성수동 카페거리 대중교통 15분</li>
                  <li>건국대학교 및 상권 대중교통 10분</li>
                  <li>어린이대공원 도보 10분</li>
                  <li>건물 내 1층 편의점 및 카페 위치</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 h-[450px] rounded-3xl overflow-hidden shadow-xl border border-white">
            <div ref={mapRef} className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
