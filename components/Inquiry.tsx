
import React, { useState, useEffect } from 'react';
import { SITE_INFO } from '../constants';

export const Inquiry: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [paymentTab, setPaymentTab] = useState<'korean' | 'international'>('korean');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    checkMobile();
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(price);
  };

  const phone = SITE_INFO.contact.phone;
  const message = encodeURIComponent("안녕하세요! 장기 숙박 문의드립니다.");

  const smsLink = /iPhone|iPad|iPod/i.test(navigator.userAgent)
    ? `sms:${phone}&body=${message}`
    : `sms:${phone}?body=${message}`;

  return (
    <section id="inquiry" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">장기 숙박 가격 비교</h2>
          <p className="text-gray-600">에어비엔비 수수료를 덜어내고 합리적인 가격으로 모십니다.</p>
        </div>

        {/* Price Table */}
        <div className="overflow-x-auto mb-16 shadow-xl rounded-2xl border border-gray-100">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="p-6 font-bold text-gray-700">숙박 기간</th>
                <th className="p-6 font-bold text-gray-500">에어비엔비 예상가</th>
                <th className="p-6 font-bold text-emerald-600">직거래 할인 특가</th>
                <th className="p-6 font-bold text-rose-500 text-center">할인율</th>
              </tr>
            </thead>
            <tbody>
              {SITE_INFO.pricing.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="p-6 font-medium text-gray-800">{item.period}</td>
                  <td className="p-6 text-gray-400 line-through">{formatPrice(item.airbnb)}</td>
                  <td className="p-6 text-xl font-bold text-emerald-700">{formatPrice(item.direct)}</td>
                  <td className="p-6 text-center">
                    <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm font-bold">
                      {item.discount}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 bg-emerald-50 text-emerald-700 text-sm text-center font-medium">
            * 에어비엔비 서비스 수수료(약 14~16%)가 전혀 부과되지 않습니다.
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">결제 방법 / Payment</h3>

          {/* Tab Buttons */}
          <div className="flex justify-center gap-2 mb-6">
            <button
              onClick={() => setPaymentTab('korean')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                paymentTab === 'korean'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              🇰🇷 한국 계좌이체
            </button>
            <button
              onClick={() => setPaymentTab('international')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                paymentTab === 'international'
                  ? 'bg-[#9fe870] text-[#163300]'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              🌍 International (Wise)
            </button>
          </div>

          {/* Payment Content */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-xl mx-auto">
            {paymentTab === 'korean' ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-4">계좌이체 정보</h4>
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <p className="text-gray-600 mb-1">{SITE_INFO.payment.bankAccount.bank}</p>
                  <p className="text-2xl font-bold text-gray-800 tracking-wide">{SITE_INFO.payment.bankAccount.number}</p>
                  <p className="text-gray-500 text-sm mt-1">예금주: {SITE_INFO.payment.bankAccount.holder}</p>
                </div>
                <p className="text-sm text-gray-500">
                  * 입금 후 문자 또는 카카오톡으로 알려주시면 확인 후 예약이 확정됩니다.
                </p>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 bg-[#9fe870]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#163300]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">International Transfer via Wise</h4>
                <p className="text-gray-600 mb-2">
                  Low fees & fast transfer for international guests.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">USD</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">EUR</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">JPY</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">CNY</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">GBP</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">+40 more</span>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 mb-4 text-left">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Recipient Email:</span>
                      <span className="font-medium text-gray-800">{SITE_INFO.payment.wise.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Account Holder:</span>
                      <span className="font-medium text-gray-800">{SITE_INFO.payment.wise.accountHolder}</span>
                    </div>
                  </div>
                </div>
                <a
                  href="https://wise.com/pay/me/yongkyul11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#9fe870] text-[#163300] rounded-xl font-bold hover:bg-[#8fd860] transition-all"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                  Send via Wise
                </a>
                <p className="text-sm text-gray-500 mt-4">
                  * Please message us with your booking dates before payment.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-teal-700 rounded-3xl p-8 md:p-16 text-white text-center shadow-2xl relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <span className="inline-block bg-white text-emerald-700 px-4 py-1 rounded-full font-bold text-sm mb-6 uppercase tracking-wider">
              Easy Inquiry
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              지금 바로 문의하세요
            </h2>
            <p className="text-xl opacity-90 mb-10 leading-relaxed max-w-2xl mx-auto">
              <b>문자</b>나 <b>카카오 채널</b>로 편하게 물어보세요.<br />
              원하시는 일정을 남겨주시면 빠르게 답변 드립니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
              {isMobile ? (
                <a
                  href={smsLink}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-emerald-700 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg group"
                >
                  <svg className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  문자 문의하기
                </a>
              ) : (
                <div
                  href={`tel:${phone}`}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-emerald-700 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg group"
                >
                  <svg className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  {phone}
                </div>
              )}
              <a 
                href={SITE_INFO.contact.kakaoChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-[#FEE500] text-[#3c1e1e] rounded-xl font-bold text-lg hover:bg-[#e6cf00] transition-all shadow-lg group"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.558 1.707 4.8 4.27 6.054l-.779 2.855c-.046.17.054.348.223.398a.333.333 0 0 0 .101.015c.13 0 .252-.07.303-.188l3.22-2.146c.54.077 1.09.117 1.662.117 4.97 0 9-3.185 9-7.115S16.97 3 12 3z"></path>
                </svg>
                카카오 채널 문의
              </a>
            </div>
            
            <p className="mt-8 text-sm opacity-70">
              * "랜딩 페이지 보고 연락드렸습니다"라고 적어주시면 빠른 할인이 적용됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
