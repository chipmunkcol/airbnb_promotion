export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  resource?: {
    isBooked: boolean;
  };
}

export interface ICalFetchState {
  events: CalendarEvent[];
  loading: boolean;
  error: string | null;
  lastFetched: Date | null;
}
