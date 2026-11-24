// DEMO quote: the client, the agency and the prices are invented for illustration.
window.QUOTE = {
  agency: { name: "טיולי אופק", tagline: "חופשות בהתאמה אישית", phone: "050-000-0000", whatsapp: "972500000000",
    email: "hello@example.com", logo: "logo.svg",
    // a light palette built from the agency's teal
    color: "#CDEBE6", colorDark: "#0B3B37", colorSoft: "#EAF5F3", accent: "#F4B740",
    onBrand: "#0B3B37", accentText: "#0F766E", label: "#0F766E",
    paper: "#F7FAF9", paperLine: "#D5E3E0", perf: "#CDEBE6", page: "#FFFFFF", cream: "#F7FAF9", line: "#E2ECEA",
    contactBg: "#EAF5F3", contactFg: "#0B3B37" },

  client: {
    title: "החופשה של רונה ומיכל לוי",
    destination: "וייטנאם", destinationLatin: "Vietnam",
    subtitle: "וייטנאם · דצמבר 2026",
    dates: "9–23.12.2026",
    nights: "13 לילות",
    travelers: "2 מבוגרות",
    countryCode: "vn",
    photo: "cover.jpg",
    photoCredit: "צילום: Taewangkorea · CC BY-SA 4.0 · Wikimedia Commons"
  },
  issued: "04.11.2026",
  validUntil: "18.11.2026",

  includes: [
    { icon: "✈️", text: "טיסות בינלאומיות" },
    { icon: "🏨", text: "6 מלונות" },
    { icon: "🛫", text: "טיסות פנים" },
    { icon: "🚐", text: "כל ההעברות" },
    { icon: "🛳️", text: "שייט במפרץ האלונג" }
  ],
  intro: "שבועיים בווייטנאם מהצפון ועד מרכז הארץ: הרחובות של האנוי, טרסות האורז של סאפה, הנהרות של נין בין, לילה על ספינה במפרץ האלונג וארבעה לילות רגועים בהוי אן.",

  route: [
    { name: "האנוי", local: "Hanoi", nights: 2, lat: 21.0283, lng: 105.8540 },
    { name: "סאפה", local: "Sa Pa", nights: 3, lat: 22.3354, lng: 103.8438 },
    { name: "נין בין", local: "Tam Coc", nights: 2, lat: 20.2177, lng: 105.9295 },
    { name: "מפרץ האלונג", local: "Ha Long Bay", nights: 1, lat: 20.9285, lng: 106.9702 },
    { name: "הוי אן", local: "Hoi An", nights: 4, lat: 15.8800, lng: 108.3380 },
    { name: "האנוי", local: "Hanoi", nights: 1, lat: 21.0283, lng: 105.8540 }
  ],

  flights: [
    { kind: "intl", date: "רביעי 09.12.26", from: "TLV", fromName: "תל אביב", fromLocal: "Tel Aviv", to: "HAN", toName: "האנוי", toLocal: "Hanoi", toCountry: "Vietnam",
      photo: "city-hanoi.jpg", photoCredit: "Cyril Doussin · CC BY-SA 2.0", via: "עצירת ביניים באבו דאבי",
      airline: "Etihad Airways", dep: "14:00", arr: "06:10", arrNote: "+1 · 10.12", baggage: "מזוודה 25 ק״ג + תיק יד 7 ק״ג" },
    { kind: "intl", date: "רביעי 23.12.26", from: "HAN", fromName: "האנוי", fromLocal: "Hanoi", to: "TLV", toName: "תל אביב", toLocal: "Tel Aviv", toCountry: "Israel",
      photo: "fly-tlv.jpg", photoCredit: "Ynhockey · CC BY-SA 4.0", via: "עצירת ביניים באבו דאבי",
      airline: "Etihad Airways", dep: "08:15", arr: "16:05", baggage: "מזוודה 25 ק״ג + תיק יד 7 ק״ג" },
    { kind: "domestic", date: "שישי 18.12.26", from: "HAN", fromName: "האנוי", fromLocal: "Hanoi", to: "DAD", toName: "דאנאנג", toLocal: "Da Nang", toCountry: "Vietnam",
      photo: "fly-dad.jpg", photoCredit: "Bùi Thụy Đào Nguyên · CC BY-SA 3.0",
      airline: "Vietnam Airlines", dep: "17:05", arr: "18:30", baggage: "כולל מזוודה, תיק יד וארוחה" },
    { kind: "domestic", date: "שלישי 22.12.26", from: "DAD", fromName: "דאנאנג", fromLocal: "Da Nang", to: "HAN", toName: "האנוי", toLocal: "Hanoi", toCountry: "Vietnam",
      photo: "fly-han.jpg", photoCredit: "Chuoibk · CC BY-SA 3.0",
      airline: "Vietnam Airlines", dep: "10:05", arr: "11:30", baggage: "כולל מזוודה, תיק יד וארוחה" }
  ],

  stays: [
    { city: "האנוי", cityLocal: "Hanoi", name: "Rex Hanoi Hotel", kind: "hotel",
      dates: "10–12.12", days: "חמישי עד שבת", nights: 2, guests: "2 מבוגרות",
      board: "לינה וארוחת בוקר", room: "Deluxe room, 2 twin beds", cancel: "ביטול חינם עד 03.12",
      photo: "stay-1.jpg", photoNote: "צילום: אתר המלון", url: "https://www.rexhanoihotel.com/" },
    { city: "סאפה", cityLocal: "Sa Pa", name: "Sapa Charm Hotel", kind: "hotel",
      dates: "12–15.12", days: "שבת עד שלישי", nights: 3,
      board: "לינה וארוחת בוקר", room: "Panorama room, 2 twin beds, valley view", cancel: "ביטול עד 01.12",
      photo: "city-sapa.jpg", photoIsCity: true, photoNote: "סאפה · Bùi Thụy Đào Nguyên · נחלת הכלל · Wikimedia Commons" },
    { city: "נין בין · טאם קוק", cityLocal: "Ninh Binh · Tam Coc", name: "Ninh Binh Hidden Charm Hotel & Resort", kind: "hotel",
      dates: "15–17.12", days: "שלישי עד חמישי", nights: 2,
      board: "לינה וארוחת בוקר", room: "Superior room, 2 twin beds", cancel: "ביטול עד 04.12",
      photo: "stay-3.jpg", photoNote: "צילום: אתר המלון", url: "https://hiddencharmresort.com/en" },
    { city: "מפרץ האלונג", cityLocal: "Ha Long Bay", name: "Diana Cruise", kind: "cruise",
      dates: "17–18.12", days: "חמישי עד שישי", nights: 1,
      board: "פנסיון מלא", room: "סוויטת ג׳וניור", extra: "שייט של יומיים ולילה אחד · ספינה בדירוג 6 כוכבים",
      photo: "stay-4.jpg", photoNote: "צילום: אתר הספינה", url: "https://dianacruise.com/" },
    { city: "הוי אן", cityLocal: "Hoi An", name: "Hadana Boutique Resort Hoi An", kind: "hotel",
      dates: "18–22.12", days: "שישי עד שלישי", nights: 4,
      board: "לינה וארוחת בוקר", room: "Deluxe twin room with balcony, city view", cancel: "ביטול עד 06.12",
      photo: "city-hoian.jpg", photoIsCity: true, photoNote: "הוי אן · xiquinhosilva · CC BY 2.0 · Wikimedia Commons" },
    { city: "האנוי", cityLocal: "Hanoi", name: "Hanoi Splendid Premium Hotel", kind: "hotel",
      dates: "22–23.12", days: "שלישי עד רביעי", nights: 1, guests: "2 מבוגרות",
      board: "לינה וארוחת בוקר", room: "Deluxe double or twin with window", cancel: "ביטול עד 04.12",
      photo: "city-hanoi.jpg", photoIsCity: true, photoNote: "אגם הואן קיאם · Cyril Doussin · CC BY-SA 2.0 · Wikimedia Commons" }
  ],

  transfersIntro: "ההעברות מהאנוי לסאפה ומסאפה לנין בין ברכבי ואן לימוזין חדשים ובטיחותיים. כל שאר ההעברות ברכב פרטי.",
  transfers: [
    { date: "10.12", title: "נחיתה בהאנוי", desc: "הסעה פרטית משדה התעופה למלון." },
    { date: "12.12", title: "נסיעה לסאפה", desc: "ואן לימוזין פרטי מהאנוי לסאפה." },
    { date: "15.12", title: "מסאפה לנין בין", desc: "ואן לימוזין פרטי, יציאה ב-08:00." },
    { date: "17.12", title: "למפרץ האלונג", desc: "הסעה פרטית מנין בין לנמל השייט." },
    { date: "18.12", title: "מהספינה לטיסה", desc: "הסעה פרטית מהנמל לשדה התעופה בהאנוי, ומשדה התעופה בדאנאנג למלון בהוי אן." },
    { date: "22.12", title: "חזרה להאנוי", desc: "הסעה פרטית מהמלון לשדה התעופה בדאנאנג, ומשדה התעופה בהאנוי למלון." },
    { date: "23.12", title: "טיסה הביתה", desc: "הסעה פרטית מהמלון לשדה התעופה בהאנוי." }
  ],

  price: {
    rows: [
      { label: "טיסות בינלאומיות ופנים, 2 נוסעות", amount: "$2,960" },
      { label: "6 מלונות ושייט, 13 לילות", amount: "$3,180" },
      { label: "כל ההעברות", amount: "$640" }
    ],
    total: "$6,780", totalLabel: "סה״כ לחבילה", perPerson: "$3,390 לאדם"
  },
  payment: [
    "מקדמה של 20% לאישור ההזמנה, והיתרה עד 30 יום לפני הטיסה.",
    "תשלום בכרטיס אשראי או בהעברה בנקאית."
  ],
  terms: [
    "זוהי הצעה לדוגמה: השמות, המחירים והתאריכים להמחשה בלבד.",
    "תנאי הביטול הם של כל מלון בנפרד, כמפורט ליד כל מלון."
  ]
};
