import React from 'react';
import { TERMS } from '../terms';

interface TermsModalProps {
  type: 'terms' | 'refund' | 'privacy';
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ type, isOpen, onClose }) => {
  if (!isOpen) return null;

  const getContent = () => {
    switch (type) {
      case 'terms':
        return TERMS.termsOfService;
      case 'refund':
        return TERMS.refundPolicy;
      case 'privacy':
        return TERMS.privacyPolicy;
      default:
        return null;
    }
  };

  const content = getContent();
  if (!content) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">{content.title}</h2>
            <p className="text-emerald-50 text-sm mt-1">{content.titleEn}</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
            aria-label="닫기"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6">
          <div className="text-sm text-gray-500 border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50">
            최종 업데이트: {content.lastUpdated}
          </div>

          {content.intro && (
            <p className="text-gray-700 leading-relaxed">{content.intro}</p>
          )}

          {content.sections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 border-b-2 border-emerald-500 pb-2">
                {section.title}
              </h3>

              {section.content && (
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              )}

              {/* 환불 정책 테이블 */}
              {type === 'refund' && section.table && (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-emerald-50">
                        <th className="border border-gray-200 p-3 text-left font-bold text-gray-700">취소 시점</th>
                        <th className="border border-gray-200 p-3 text-left font-bold text-gray-700">환불 금액</th>
                        <th className="border border-gray-200 p-3 text-left font-bold text-gray-700">비고</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.map((row, rowIdx) => (
                        <tr key={rowIdx} className="hover:bg-gray-50 transition-colors">
                          <td className="border border-gray-200 p-3 text-gray-800">{row.condition}</td>
                          <td className="border border-gray-200 p-3 font-bold text-emerald-700">{row.refund}</td>
                          <td className="border border-gray-200 p-3 text-gray-600 text-sm">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}

          {type === 'refund' && TERMS.refundPolicy.notice && (
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
              <p className="text-sm text-amber-800 whitespace-pre-line">{TERMS.refundPolicy.notice}</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6 bg-gray-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};
