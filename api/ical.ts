import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // 환경 변수에서 iCal URL 가져오기
  const icalUrl = process.env.VITE_AIRBNB_ICAL_URL || process.env.AIRBNB_ICAL_URL;

  if (!icalUrl) {
    console.error('iCal URL is not configured in environment variables.', icalUrl);
    return res.status(500).json({ error: 'iCal URL not configured' });
  }

  // OPTIONS 요청 처리 (CORS preflight)
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  try {
    // 에어비앤비에서 iCal 데이터 fetch
    const response = await fetch(icalUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch iCal: ${response.statusText}`);
    }

    const data = await response.text();

    // CORS 헤더 추가
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate'); // 1시간 캐싱

    return res.status(200).send(data);
  } catch (error) {
    console.error('Failed to fetch iCal:', error);
    return res.status(500).json({
      error: 'Failed to fetch iCal data',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
