import { useState, useEffect } from 'react';
import ICAL from 'ical.js';
import type { CalendarEvent, ICalFetchState } from '../types/calendar';
import { SITE_INFO } from '../constants';

const CACHE_KEY = 'airbnb-ical-cache';

interface CachedData {
  events: CalendarEvent[];
  timestamp: number;
}

export function useICalData() {
  const [state, setState] = useState<ICalFetchState>({
    events: [],
    loading: true,
    error: null,
    lastFetched: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchAndParseICal = async () => {
      try {
        // 1. 캐시 확인
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const cachedData: CachedData = JSON.parse(cached);
          const now = Date.now();
          const cacheAge = now - cachedData.timestamp;

          // 캐시가 유효하면 사용
          if (cacheAge < SITE_INFO.calendar.cacheDuration) {
            // 날짜 문자열을 Date 객체로 변환
            const eventsWithDates = cachedData.events.map(event => ({
              ...event,
              start: new Date(event.start),
              end: new Date(event.end),
            }));

            if (isMounted) {
              setState({
                events: eventsWithDates,
                loading: false,
                error: null,
                lastFetched: new Date(cachedData.timestamp),
              });
            }
            return;
          }
        }

        // 2. iCal 데이터 fetch
        const response = await fetch(SITE_INFO.calendar.icalUrl);

        if (!response.ok) {
          throw new Error(`Failed to fetch iCal: ${response.statusText}`);
        }

        const icalData = await response.text();

        // 3. ical.js로 파싱
        const jcalData = ICAL.parse(icalData);
        const comp = new ICAL.Component(jcalData);
        const vevents = comp.getAllSubcomponents('vevent');

        // 4. CalendarEvent 형식으로 변환
        const events: CalendarEvent[] = vevents.map((vevent) => {
          const event = new ICAL.Event(vevent);
          return {
            id: event.uid,
            title: event.summary || '예약됨',
            start: event.startDate.toJSDate(),
            end: event.endDate.toJSDate(),
            resource: {
              isBooked: true,
            },
          };
        });

        // 5. localStorage에 캐시 저장
        const cacheData: CachedData = {
          events,
          timestamp: Date.now(),
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));

        // 6. 상태 업데이트
        if (isMounted) {
          setState({
            events,
            loading: false,
            error: null,
            lastFetched: new Date(),
          });
        }
      } catch (error) {
        console.error('Failed to fetch or parse iCal:', error);
        if (isMounted) {
          setState({
            events: [],
            loading: false,
            error: error instanceof Error ? error.message : 'Unknown error',
            lastFetched: null,
          });
        }
      }
    };

    fetchAndParseICal();

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
}
