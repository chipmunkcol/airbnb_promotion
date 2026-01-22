
export const SITE_INFO = {
  name: "STAY CALM in SEOUL",
  unit: "STAY CALM in SEOUL ",
  location: "서울 광진구 군자역 인근",
  catchphrase: "복잡한 도시 속, 나만의 차분한 휴식처",
  airbnbUrl: "https://airbnb.com/h/2chai",
  contact: {
    kakaoChannelUrl: "https://pf.kakao.com/_HlNAX/friend", // 카카오 채널 URL
    phone: "010-2168-9411",
    email: "jack95711@gmail.com"
  },
  payment: {
    bankAccount: {
      bank: "카카오뱅크",
      number: "3333-05-4685065",
      holder: "이용규"
    },
    wise: {
      email: "jack95711@gmail.com", // Wise 계정 이메일 (이메일로 모든 통화 수취 가능)
      accountHolder: "Yongkyu Lee" // 영문 이름
    }
  },
  stats: {
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    baths: 1
  },
  // 예시 가격 데이터 (실제 가격에 맞춰 수정 가능)
  pricing: [
    { period: "6박7일 (1주)", airbnb: 680000, direct: 600000, discount: "약 10%" },
    { period: "13박14일 (2주)", airbnb: 1250000, direct: 1050000, discount: "약 16%" },
    { period: "27박28일 (한달)", airbnb: 2400000, direct: 1680000, discount: "30% 할인" }
  ]
};

// public/assets 폴더 내 이미지 경로
export const IMAGES = [
  { url: "/assets/에어비앤비8.avif", alt: "현대적인 인테리어 디자인" },
  { url: "/assets/에어비앤비19.avif", alt: "밝고 환한 실내 분위기" },
  { url: "/assets/에어비앤비13.avif", alt: "편안한 거실 공간" },
  { url: "/assets/에어비앤비4.avif", alt: "청결한 욕실 시설" },
  { url: "/assets/에어비앤비18.avif", alt: "편리한 세탁 공간" },
  { url: "/assets/에어비앤비2.avif", alt: "모던한 주방과 다이닝 공간" },
  { url: "/assets/에어비앤비3.avif", alt: "아늑한 두 번째 침실" },
  { url: "/assets/에어비앤비5.avif", alt: "넓은 첫 번째 침실" },
  { url: "/assets/에어비앤비6.avif", alt: "편리한 세탁 공간" },
  { url: "/assets/에어비앤비7.avif", alt: "밝고 환한 실내 분위기" },
  { url: "/assets/에어비앤비9.avif", alt: "편안한 휴식 공간" },
  { url: "/assets/에어비앤비10.avif", alt: "완비된 주방 시설" },
  { url: "/assets/에어비앤비11.avif", alt: "깔끔한 욕실" },
  { url: "/assets/에어비앤비12.avif", alt: "아늑한 침실" },
  { url: "/assets/에어비앤비14.avif", alt: "모던한 주방과 다이닝 공간" },
  { url: "/assets/에어비앤비1.jpeg", alt: "편안한 거실 공간" },
  { url: "/assets/에어비앤비15.avif", alt: "아늑한 두 번째 침실" },
  { url: "/assets/에어비앤비16.avif", alt: "청결한 욕실 시설" },
  { url: "/assets/에어비앤비17.avif", alt: "넓은 첫 번째 침실" },
  { url: "/assets/에어비앤비20.avif", alt: "현대적인 인테리어 디자인" },
  { url: "/assets/에어비앤비21.avif", alt: "편안한 휴식 공간" },
  { url: "/assets/에어비앤비22.avif", alt: "완비된 주방 시설" },
  { url: "/assets/에어비앤비23.avif", alt: "깔끔한 욕실" },
  { url: "/assets/에어비앤비24.avif", alt: "아늑한 침실" },
  // 35번까지 모두 추가
  { url: "/assets/에어비앤비25.avif", alt: "모던한 주방과 다이닝 공간" },
  { url: "/assets/에어비앤비26.avif", alt: "편안한 거실 공간" },
  { url: "/assets/에어비앤비27.avif", alt: "아늑한 두 번째 침실" },
  { url: "/assets/에어비앤비28.avif", alt: "청결한 욕실 시설" },
  { url: "/assets/에어비앤비29.avif", alt: "넓은 첫 번째 침실" },
  { url: "/assets/에어비앤비30.avif", alt: "현대적인 인테리어 디자인" },
  { url: "/assets/에어비앤비31.avif", alt: "편안한 휴식 공간" },
  { url: "/assets/에어비앤비32.avif", alt: "완비된 주방 시설" },
  { url: "/assets/에어비앤비33.avif", alt: "깔끔한 욕실" },
  { url: "/assets/에어비앤비34.avif", alt: "아늑한 침실" },
  { url: "/assets/에어비앤비35.avif", alt: "편리한 세탁 공간" }
  

];

export const AMENITIES_LIST = [
  { name: "고속 Wi-Fi", description: "워케이션을 위한 끊김 없는 인터넷" },
  { name: "퀸 사이즈 침대", description: "최고급 매트리스와 호텔식 침구" },
  { name: "풀 옵션 주방", description: "인덕션, 전자레인지, 기본 조리도구" },
  { name: "세탁기 & 건조기", description: "장기 숙박에 필수적인 세탁 시설" },
  { name: "스마트 TV", description: "넷플릭스, 유튜브 시청 가능" },
  { name: "에어컨 & 바닥 난방", description: "계절 상관 없이 쾌적한 온도 유지" }
];
