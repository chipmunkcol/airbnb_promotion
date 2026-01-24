import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { ko } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useICalData } from '../../hooks/useICalData';
import type { CalendarEvent } from '../../types/calendar';

// date-fns localizer 설정
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }), // 일요일 시작
  getDay,
  locales: { ko },
});

export const AvailabilityCalendar: React.FC = () => {
  const { events, loading, error } = useICalData();

  // 예약된 날짜 스타일
  const eventStyleGetter = (event: CalendarEvent) => {
    return {
      style: {
        backgroundColor: event.resource?.isBooked ? '#9CA3AF' : '#10B981',
        borderRadius: '4px',
        opacity: 0.8,
        color: 'white',
        border: '0px',
        display: 'block',
      },
    };
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      {loading && (
        <div className="flex items-center justify-center h-[400px] md:h-[600px]">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-600 font-medium">예약 정보를 불러오는 중...</p>
          </div>
        </div>
      )}

      {error && !loading && (
        <div className="flex items-center justify-center h-[400px] md:h-[600px]">
          <div className="text-center">
            <svg
              className="w-16 h-16 mx-auto mb-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-red-500 font-medium mb-2">예약 정보를 불러올 수 없습니다</p>
            <p className="text-gray-500 text-sm">{error}</p>
          </div>
        </div>
      )}

      {!loading && !error && (
        <div className="h-[400px] md:h-[600px]">
          {/* 26년도 7월 22일 이후부터는 disabled */}
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            min={new Date(2026, 6, 22)}
            style={{ height: '100%' }}
            eventPropGetter={eventStyleGetter}
            views={['month']}
            defaultView="month"
            culture="ko"
            messages={{
              next: "다음",
              previous: "이전",
              today: "오늘",
              month: "월",
              week: "주",
              day: "일",
              agenda: "일정",
              date: "날짜",
              time: "시간",
              event: "이벤트",
              noEventsInRange: "이 기간에는 예약이 없습니다",
              showMore: (total) => `+${total} 더보기`,
            }}
            formats={{
              monthHeaderFormat: (date) => format(date, 'yyyy년 M월', { locale: ko }),
              dayHeaderFormat: (date) => format(date, 'M월 d일 (E)', { locale: ko }),
              dayRangeHeaderFormat: ({ start, end }) =>
                `${format(start, 'M월 d일', { locale: ko })} - ${format(end, 'M월 d일', { locale: ko })}`,
            }}
          />
        </div>
      )}
    </div>
  );
};
