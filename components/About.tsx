
import React from 'react';
import { SITE_INFO } from '../constants';

export const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              군자역 중심가에서 누리는<br />쾌적한 어반 라이프
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                <b>군자역 도보 7분 거리</b>에 위치한 {SITE_INFO.unit}은 여행자와 디지털 노마드를 위해 세심하게 준비된 공간입니다.
              </p>
              <p>
                침실 2개와 넉넉한 수납 공간, 그리고 집중하기 좋은 작업 환경을 갖추고 있어 <b>워케이션(Workation)</b>이나 <b>한 달 살기</b>에 최적화되어 있습니다.
              </p>
              <p>
                어린이대공원, 서울숲, 성수동, 건대 상권이 모두 인접하여 서울의 핫플레이스를 편리하게 즐기면서도 조용한 주거 환경에서 온전한 휴식을 취할 수 있습니다.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-2xl font-bold text-emerald-600">{SITE_INFO.stats.maxGuests}명</p>
                <p className="text-sm text-gray-500">최대 인원</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-2xl font-bold text-emerald-600">{SITE_INFO.stats.bedrooms}개</p>
                <p className="text-sm text-gray-500">침실</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-2xl font-bold text-emerald-600">{SITE_INFO.stats.beds}개</p>
                <p className="text-sm text-gray-500">침대</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-2xl font-bold text-emerald-600">{SITE_INFO.stats.baths}개</p>
                <p className="text-sm text-gray-500">욕실</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
