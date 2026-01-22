
import React from 'react';
import { SITE_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">{SITE_INFO.name}</h3>
            <p className="text-gray-400 leading-relaxed">
              도심 속에서의 차분한 머무름을 지향합니다. <br />
              {SITE_INFO.unit}에서 소중한 시간을 만들어보세요.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold">빠른 메뉴</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">홈</a></li>
              <li><a href="#gallery" className="hover:text-emerald-400 transition-colors">갤러리</a></li>
              <li><a href="#location" className="hover:text-emerald-400 transition-colors">위치안내</a></li>
              <li><a href="#inquiry" className="hover:text-emerald-400 transition-colors">가격 비교 & 문의</a></li>
              <li><a href={SITE_INFO.airbnbUrl} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">에어비엔비 리스팅</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold">호스트 정보</h4>
            <div className="text-gray-400 space-y-1">
              <p><b>카카오:</b> <a href={SITE_INFO.contact.kakaoChannelUrl} className="hover:text-emerald-400 underline decoration-gray-700">공식 채널 바로가기</a></p>
              <p><b>연락처:</b> {SITE_INFO.contact.phone}</p>
              <p><b>이메일:</b> {SITE_INFO.contact.email}</p>
            </div>
            <div className="flex gap-4 mt-6">
              <a href={SITE_INFO.contact.kakaoChannelUrl} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FEE500] hover:text-[#3c1e1e] transition-all cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.558 1.707 4.8 4.27 6.054l-.779 2.855c-.046.17.054.348.223.398a.333.333 0 0 0 .101.015c.13 0 .252-.07.303-.188l3.22-2.146c.54.077 1.09.117 1.662.117 4.97 0 9-3.185 9-7.115S16.97 3 12 3z"></path></svg>
              </a>
              <a href={`sms:${SITE_INFO.contact.phone}`} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-all cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2024 {SITE_INFO.name}. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">이용약관</a>
            <a href="#" className="hover:text-white">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
