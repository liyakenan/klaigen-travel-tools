window.TRIP = {
  agency: { name: "טיולי אופק", tagline: "חופשות משפחתיות בהתאמה אישית", phone: "050-000-0000", whatsapp: "972500000000",
    email: "hello@example.com", logo: "logo.svg", color: "#0F766E", colorDark: "#0B3B37", colorSoft: "#E6F2F1" },

  client: {
    title: "החופשה של משפחת כהן",
    subtitle: "בודפשט · 14–17 בינואר 2027",
    photo: "cover.jpg", photoCredit: "צילום: Kilyann Le Hen · CC BY 4.0 · Wikimedia Commons", countryCode: "hu", sticker: "בודפשט מחכה לכם! 🎉",
    destination: "בודפשט, הונגריה", dates: "14–17 בינואר 2027", travelers: "2 מבוגרים ו-2 ילדים", extras: "אוכל כשר",
    chips: ["2 מבוגרים ו-2 ילדים, בני 7 ו-11", "4 ימים", "אוכל כשר", "ברגל ובתחבורה ציבורית"]
  },
  intro: "בודפשט בחורף היא עיר של אורות על הדנובה, ארמונות על הגבעה וגן חיות עם בית טרופי מקורה. בנינו לכם תכנון רגוע, יום אחד בכל אזור, עם הרבה זמן לנשום, ארוחות כשרות לאורך כל הדרך וסידור מיוחד לשבת. המלון שלכם ממוקם מצוין: את רוב המקומות אפשר לעשות ברגל.",

  hotel: { name: "Hotel Moments Budapest", address: "Andrássy út 8, 1061 Budapest", q: "Hotel Moments Budapest, Andrássy út 8, Budapest", lat: 47.5010706, lng: 19.0564474 },
  mode: "walking",
  myMapsUrl: "",

  days: [
    { date: "חמישי 14.1", title: "פשט והדנובה", emoji: "🌉", vibe: "יום נחיתה קליל: נוף מהכיפה, טיילת לאורך הנהר ושייט ערב בין הגשרים המוארים.",
      stops: [
        { time: "14:30", name: "בזיליקת סנט סטפן", emoji: "⛪", local: "Szent István-bazilika", q: "St. Stephen's Basilica, Budapest", lat: 47.5007913, lng: 19.0540265,
          desc: "הכנסייה הגדולה בעיר, ממש מעבר לפינה מהמלון. החלק הכי שווה לילדים: מרפסת התצפית בכיפה, עם נוף 360° על כל בודפשט.",
          tip: "לכיפה יש מעלית קטנה וגם מדרגות. כרטיס מרפסת + אוצר: 5,000 פורינט למבוגר, 4,000 לילד.",
          rating: 4.5, ratingSrc: "TripAdvisor", duration: "1–1.5 ש׳", price: "מרפסת: מבוגר 5,000 · ילד 4,000 פורינט", hours: "מרפסת: כל יום 09:00–19:00",
          fromHotel: { walk: "5 דק׳" }, next: "🚶 15 דק׳ הליכה לטיילת הדנובה", url: "https://bazilikabudapest.hu/en/" },
        { time: "16:00", name: "הנעליים על גדת הדנובה", emoji: "🕯️", local: "Cipők a Duna-parton", q: "Shoes on the Danube Bank, Budapest", lat: 47.5039715, lng: 19.0447906,
          desc: "אנדרטה שקטה ומרגשת לזכר יהודי בודפשט שנרצחו על גדת הנהר ב-1944–45. 60 זוגות נעליים מברזל על שפת המים.",
          tip: "כדאי להכין את הילדים מראש בכמה מילים פשוטות. האנדרטה צמודה לכביש ולמים, אז מחזיקים יד.",
          rating: 4.6, ratingSrc: "TripAdvisor", duration: "15–20 דק׳", price: "חינם",
          fromHotel: { walk: "20 דק׳", car: "≈ 5 דק׳" }, next: "🚶 5 דק׳ לבניין הפרלמנט" },
        { time: "16:20", name: "הפרלמנט ההונגרי, מבחוץ בשקיעה", emoji: "🏛️", local: "Országház", q: "Hungarian Parliament Building, Budapest", lat: 47.5070496, lng: 19.0459186,
          desc: "אחד הבניינים היפים באירופה. בשעת השקיעה הוא נדלק באור זהוב, ומהכיכר שמולו יוצאות התמונות הכי יפות של הטיול.",
          tip: "רוצים להיכנס? סיור מודרך של 45 דק׳ נמכר שבועות מראש. הפרטים ב\"עוד מקומות\".",
          rating: 4.6, ratingSrc: "TripAdvisor", duration: "20–30 דק׳", price: "חינם (מבחוץ)",
          fromHotel: { walk: "20 דק׳", car: "≈ 5 דק׳" }, next: "🚶 20 דק׳ לאורך הטיילת לרציף 7" },
        { time: "17:20", name: "שייט ערב על הדנובה", emoji: "🛳️", local: "Legenda · Danube Legend", q: "Legenda City Cruises, Vigadó tér, Budapest", lat: 47.4958194, lng: 19.0491946,
          desc: "שעה על הנהר בין הארמון, הפרלמנט והגשרים המוארים, עם הדרכה קולית בעברית ומשקה על הסירה. ילדים עד גיל 9 משייטים בחינם.",
          tip: "הסירה יוצאת מרציף 7 בכיכר ויגאדו. המשקה על הסירה לא בהשגחה, אז עדיף לבחור מים או שתייה קלה סגורה.",
          rating: 4.5, ratingSrc: "TripAdvisor", duration: "כשעה", price: "מבוגר €25 · ילד 10–14 €17.5 · עד גיל 9 חינם",
          fromHotel: { walk: "15 דק׳", car: "≈ 5 דק׳" }, next: "🚶 20 דק׳ או 🚕 ≈ 5 דק׳ לרובע היהודי",
          book: true, url: "https://legenda.hu/en/node/11" },
        { time: "19:00", name: "ארוחת ערב במסעדת כרמל", emoji: "🍽️", local: "Carmel Étterem", q: "Carmel Restaurant, Kazinczy utca 31, Budapest", lat: 47.4986041, lng: 19.0628337,
          desc: "מסעדה כשרה למהדרין (בשרית) ותיקה ברובע היהודי: גולאש, שניצל, כרוב ממולא ומרק קניידלך. אוכל ביתי שילדים אוהבים.",
          tip: "מתמלאת בערבים, אז כדאי להזמין שולחן.",
          duration: "1–1.5 ש׳", hours: "א׳–ה׳ 12:00–22:00",
          fromHotel: { walk: "10 דק׳", car: "≈ 5 דק׳" }, book: true, url: "https://carmel.hu/" }
      ] },

    { date: "שישי 15.1", title: "גבעת המצודה בבודה", emoji: "🏰", vibe: "בוקר של ארמונות ומגדלי אגדה, צהריים כשרים ואחר צהריים חופשי לקראת שבת.",
      stops: [
        { time: "09:30", name: "הרכבל לגבעת המצודה", emoji: "🚡", local: "Budavári Sikló", q: "Budavári Sikló, Clark Ádám tér, Budapest", lat: 47.4977596, lng: 19.0391711,
          desc: "רכבל היסטורי משנת 1870 שמטפס במעלה הגבעה. הדרך לשם עוברת על גשר השלשלאות המפורסם, וזה כבר חצי מהכיף.",
          tip: "כרטוס התחבורה הציבורית לא תקף ברכבל. חלופה זולה: אוטובוס 16 או 16A מגיע לאותו מקום.",
          rating: 3.5, ratingSrc: "TripAdvisor", duration: "כמה דקות + תור", price: "הלוך-חזור: מבוגר 5,500 · ילד 3,000 פורינט", hours: "כל יום 08:00–22:00",
          fromHotel: { walk: "20 דק׳", car: "≈ 5 דק׳" }, next: "⬆️ עולים ברכבל, ואז 🚶 5 דק׳", url: "https://bkv.hu/en/content/buda_castle_funicular" },
        { time: "10:00", name: "ארמון המלוכה של בודה", emoji: "🏰", local: "Budavári Palota", q: "Buda Castle, Budapest", lat: 47.4959913, lng: 19.0398008,
          desc: "החצרות, המדרגות והתצפיות מעל הדנובה פתוחות בחינם. בתוך הארמון נמצאת הגלריה הלאומית, עם מרפסת כיפה שאפשר לעלות אליה.",
          tip: "באזור יש עבודות שיפוץ. הגלריה סגורה בימי שני.",
          rating: 4.4, ratingSrc: "TripAdvisor", duration: "1–2 ש׳", price: "החצרות חינם · גלריה ≈ 5,800 פורינט",
          fromHotel: { walk: "25 דק׳", car: "≈ 10 דק׳" }, next: "🚶 10 דק׳ במדרחוב של הגבעה", url: "https://en.mng.hu/" },
        { time: "11:00", name: "מבצר הדייגים", emoji: "🏯", local: "Halászbástya", q: "Fisherman's Bastion, Budapest", lat: 47.5023053, lng: 19.0346998,
          desc: "מגדלים לבנים שנראים כמו מתוך סרט של דיסני, עם הנוף הכי מפורסם של בודפשט: הפרלמנט מעבר לנהר.",
          tip: "המרפסות התחתונות תמיד בחינם. במגדלים העליונים ילדים 6–14 משלמים חצי מחיר. בבוקר פחות צפוף.",
          rating: 4.6, ratingSrc: "TripAdvisor", duration: "30–45 דק׳", price: "מגדלים: מבוגר 1,700 · ילד 850 פורינט",
          fromHotel: { walk: "30 דק׳", car: "≈ 10 דק׳" }, next: "🚶 דקה אחת, הכנסייה ממש צמודה", url: "https://www.fishermansbastion.com/" },
        { time: "11:45", name: "כנסיית מתיאש", emoji: "⛪", local: "Mátyás-templom", q: "Matthias Church, Budapest", lat: 47.5020118, lng: 19.0342109,
          desc: "כנסייה עם גג אריחים צבעוני מרהיב. גם בלי להיכנס, הגג לבדו שווה עצירה.",
          rating: 4.6, ratingSrc: "TripAdvisor", duration: "30–45 דק׳", price: "מבוגר 3,400 · משפחתי 9,500 פורינט",
          fromHotel: { walk: "30 דק׳", car: "≈ 10 דק׳" }, next: "🚕 ≈ 10 דק׳ במונית חזרה לפשט", url: "https://matyas-templom.hu/" },
        { time: "13:00", name: "צהריים בקפה תל אביב", emoji: "🥙", local: "Café Tel Aviv", q: "Café Tel Aviv, Kazinczy utca 28, Budapest", lat: 47.4981037, lng: 19.0626017,
          desc: "בית קפה כשר-חלבי עם שף ישראלי: שקשוקה, ארוחות בוקר ישראליות כל היום. טעם של בית באמצע הטיול.",
          tip: "ביום שישי נסגר מוקדם (בין 15:00 ל-16:00, תלוי במקור), אז לא מאחרים.",
          rating: 3.4, ratingSrc: "TripAdvisor", duration: "45 דק׳–שעה",
          fromHotel: { walk: "10 דק׳", car: "≈ 5 דק׳" }, next: "🛏️ מנוחה במלון, ובערב ארוחת שבת ברחוב הזה" },
        { time: "ערב", name: "ארוחת ערב שבת במסעדת חנה", emoji: "🕯️", local: "Hanna Glatt Kosher", q: "Hanna Kosher Restaurant, Kazinczy utca 29, Budapest", lat: 47.4986041, lng: 19.0628337,
          desc: "ארוחת שבת מסורתית בחצר בית הכנסת האורתודוקסי ברחוב קזינצי: חלה, קידוש וארוחה חמה. כשר למהדרין, בשרי.",
          tip: "ארוחות השבת רק בהזמנה ובתשלום מראש, כ-€50 לאדם.",
          rating: 3.6, ratingSrc: "TripAdvisor", duration: "1.5–2 ש׳", price: "≈ €50 לאדם (שבת)",
          fromHotel: { walk: "10 דק׳" }, book: true, url: "https://reservours.com/hanna/tablereservation/en" }
      ] },

    { date: "שבת 16.1", title: "סיטי פארק: גן חיות וטירה", emoji: "🦁", vibe: "יום של בעלי חיים, פארק ואגם. הכול ברגל מהמלון, בלי נסיעות.",
      stops: [
        { time: "09:30", name: "כיכר הגיבורים", emoji: "🗿", local: "Hősök tere", q: "Heroes' Square, Budapest", lat: 47.5144562, lng: 19.0782954,
          desc: "כיכר ענקית עם פסלי מלכי הונגריה, בסוף שדרת אנדראשי. ההליכה לשם היא פשוט ישר בשדרה של המלון.",
          rating: 4.3, ratingSrc: "TripAdvisor", duration: "15–30 דק׳", price: "חינם",
          fromHotel: { walk: "30 דק׳", car: "≈ 5 דק׳" }, next: "🚶 10 דק׳ לשער גן החיות" },
        { time: "10:00", name: "גן החיות של בודפשט", emoji: "🦁", local: "Fővárosi Állat- és Növénykert", q: "Budapest Zoo & Botanical Garden", lat: 47.5189085, lng: 19.0780587,
          desc: "אחד מגני החיות הוותיקים בעולם, עם הביודום: בית טרופי ענק ומקורה, מושלם ליום חורף. ילדים יכולים לבלות כאן חצי יום.",
          tip: "כרטיס משפחתי (2+2): 17,500 פורינט. בחורף הבתים נסגרים ב-15:30, אז באים מוקדם. בשבת המסעדות הכשרות סגורות, אז מכינים פיקניק מיום שישי.",
          rating: 4.1, ratingSrc: "TripAdvisor", duration: "3–4 ש׳", price: "כרטיס משפחתי: 17,500 פורינט", hours: "בחורף 09:00–16:00",
          fromHotel: { car: "≈ 10 דק׳" }, next: "🚶 15 דק׳ דרך הפארק לטירה", url: "https://zoobudapest.com/en" },
        { time: "14:30", name: "טירת ויידהוניאד והאגם", emoji: "🏰", local: "Vajdahunyad vára", q: "Vajdahunyad Castle, Budapest", lat: 47.5153549, lng: 19.0818753,
          desc: "טירה מהאגדות על אי קטן באגם של הפארק. מטיילים בחצרות ובגשרים בחינם, וזה סוף מושלם ליום.",
          rating: 4.4, ratingSrc: "TripAdvisor", duration: "30 דק׳–שעה", price: "החצרות חינם",
          fromHotel: { car: "≈ 5 דק׳" } }
      ] },

    { date: "ראשון 17.1", title: "הרובע היהודי ויום טיסה", emoji: "✈️", vibe: "בוקר אחד משמעותי לפני הטיסה, קרוב למלון.",
      stops: [
        { time: "10:00", name: "בית הכנסת הגדול ברחוב דוהאני", emoji: "🕍", local: "Dohány utcai zsinagóga", q: "Dohány Street Synagogue, Budapest", lat: 47.4961024, lng: 19.0608682,
          desc: "בית הכנסת הגדול באירופה. הכרטיס כולל סיור מודרך בעברית, את המוזיאון היהודי ואת \"עץ החיים\" בגן הזיכרון.",
          tip: "סגור בשבתות ובחגים, לכן הוא ביום ראשון. כתפיים וברכיים מכוסות, כיפה מקבלים במקום. כרטיס משפחתי (2 מבוגרים + 2 ילדים בגילאי 6–12).",
          duration: "1.5–2 ש׳", price: "משפחתי ≈ 33,000 פורינט", hours: "א׳–ה׳ 10:00–16:00",
          fromHotel: { walk: "15 דק׳", car: "≈ 5 דק׳" }, book: true }
      ] }
  ],

  catalog: [
    { group: "לילדים", emoji: "🧸", items: [
      { name: "רכבת הילדים", emoji: "🚂", local: "Gyermekvasút", q: "Gyermekvasút Széchenyihegy, Budapest", lat: 47.4951901, lng: 18.9795058,
        desc: "רכבת אמיתית ביער של גבעות בודה, שילדים בגילאי 10–14 מפעילים בה את התחנות (הנהג מבוגר). חוויה שאין בשום מקום אחר.",
        tip: "מגיעים בחשמלית 60 מוורושמיור. כרטיס יומי משפחתי: 5,000 פורינט, מזומן ברכבת.",
        duration: "חצי יום", price: "משפחתי 5,000 פורינט", fromHotel: { car: "≈ 15 דק׳" }, url: "https://gyermekvasut.hu/en/home/" },
      { name: "ארמון הפלאות", emoji: "🔬", local: "Csodák Palotája", q: "Csodák Palotája, Mátyás király út 24, Budapest", lat: 47.5857799, lng: 19.0489509,
        desc: "מרכז מדע אינטראקטיבי: ניסויים, אשליות ומופעי מדע. מתאים במיוחד לגילאי 6–12, ומעולה ליום גשום.",
        tip: "עבר לכתובת חדשה בצ'ילגהג'. לפעמים מופיעה ברשת עדיין הכתובת הישנה.",
        rating: 4.2, ratingSrc: "TripAdvisor", duration: "2–3 ש׳", price: "מבוגר 5,990 · ילד 4,990 פורינט", fromHotel: { car: "≈ 20 דק׳" }, url: "https://www.csopa.hu/" },
      { name: "טרופיקריום", emoji: "🦈", local: "Tropicarium-Oceanárium", q: "Tropicarium, Nagytétényi út 37, Budapest", lat: 47.407993, lng: 19.018166,
        desc: "אקווריום עם מנהרת כרישים ובריכת מגע עם טריגונים, בתוך קניון קמפונה בדרום העיר.",
        rating: 4.2, ratingSrc: "TripAdvisor", duration: "1–2 ש׳", price: "משפחתי בסופ״ש: 17,800 פורינט", hours: "כל יום 10:00–20:00",
        fromHotel: { car: "≈ 20 דק׳" }, url: "https://www.tropicarium.hu/" }
    ] },
    { group: "היסטוריה ותרבות", emoji: "🏛️", items: [
      { name: "סיור מודרך בפרלמנט", emoji: "🏛️", local: "Országház", q: "Hungarian Parliament Building, Budapest", lat: 47.5070496, lng: 19.0459186,
        desc: "45 דקות בתוך אולמות זהב, עם כתר המלוכה ההונגרי. מרשים גם לילדים.",
        tip: "נמכר 1–3 שבועות מראש. קונים רק באתר הרשמי jegymester. בכניסה יש בדיקה ביטחונית.",
        rating: 4.6, ratingSrc: "TripAdvisor", duration: "כ-1.5 ש׳ כולל כניסה", price: "מבוגר 14,000 · ילד 5,600 פורינט",
        fromHotel: { walk: "20 דק׳", car: "≈ 5 דק׳" }, book: true, url: "https://www.parlament.hu/web/visitors" },
      { name: "בית החולים בסלע", emoji: "🪖", local: "Sziklakórház", q: "Hospital in the Rock, Lovas út 4, Budapest", lat: 47.5007866, lng: 19.0314184,
        desc: "בית חולים ומקלט אטומי סודי בתוך מערות גבעת המצודה. סיור מודרך מרתק, לילדים גדולים.",
        tip: "לא מתחת לגיל 6, ויש בו בובות שעווה שעלולות להפחיד ילד בן 7. בפנים 15–18 מעלות.",
        rating: 4.5, ratingSrc: "TripAdvisor", duration: "כשעה", price: "מבוגר ≈ €30 · ילד ≈ €15", fromHotel: { walk: "30 דק׳", car: "≈ 10 דק׳" }, book: true, url: "https://sziklakorhaz.eu/en" },
      { name: "השוק הגדול", emoji: "🛍️", local: "Nagy Vásárcsarnok", q: "Great Market Hall, Vámház körút 1-3, Budapest", lat: 47.4865753, lng: 19.0589936,
        desc: "שוק מקורה ענק ויפהפה: פפריקה, ממתקים ומזכרות. בבוקר של יום חול הכי נעים.",
        tip: "אין דוכנים כשרים, האוכל המוכן לא כשר. בראשון רוב הדוכנים סגורים.",
        rating: 3.9, ratingSrc: "TripAdvisor", duration: "45 דק׳–1.5 ש׳", price: "חינם", hours: "ב׳–ו׳ 06:00–18:00, ש׳ עד 16:00",
        fromHotel: { walk: "25 דק׳", car: "≈ 5 דק׳" } }
    ] },
    { group: "טבע ופארקים", emoji: "🌳", items: [
      { name: "אי מרגרט", emoji: "🌳", local: "Margitsziget", q: "Margaret Island, Budapest", lat: 47.5187875, lng: 19.0448154,
        desc: "אי ירוק באמצע הדנובה, בלי מכוניות. מושלם לטיול רגלי עם הילדים.",
        tip: "בחורף שקט. המזרקה המוזיקלית פועלת רק מאי עד אוקטובר.",
        duration: "1.5–3 ש׳", price: "חינם", fromHotel: { walk: "35 דק׳", car: "≈ 5 דק׳" } }
    ] }
  ],

  bookAhead: [
    { what: "שייט ערב על הדנובה (Legenda)", why: "שעות יציאה קבועות. כדאי לסגור כמה ימים לפני. ילדים עד 9 בחינם.", url: "https://legenda.hu/en/node/11" },
    { what: "ארוחת ערב שבת במסעדת חנה", why: "רק בהזמנה ותשלום מראש, עד יום חמישי לכל המאוחר.", url: "https://reservours.com/hanna/tablereservation/en" },
    { what: "שולחן במסעדת כרמל (חמישי בערב)", why: "מתמלאת בערבים.", url: "https://carmel.hu/" },
    { what: "בית הכנסת ברחוב דוהאני", why: "כרטיס אונליין חוסך את התור בכניסה. הכרטיס לא ניתן להחזרה." },
    { what: "סיור בפרלמנט (אם רוצים)", why: "נגמר 1–3 שבועות מראש. רק באתר jegymester.", url: "https://www.parlament.hu/web/visitors" }
  ],

  goodToKnow: [
    "מרחצאות סצ'ני: לפי חוק חדש, מאז אוגוסט 2025 ילדים מתחת לגיל 14 לא נכנסים לשום בריכה שם. לכן הם לא בתכנון.",
    "שבת: המסעדות הכשרות פתוחות ביום שישי עד הצהריים בלבד, ובשבת רק לארוחות שהוזמנו מראש. לצהרי שבת מכינים פיקניק מיום שישי.",
    "בית הכנסת ברחוב דוהאני סגור בכל שבת ובחגים. ביום שישי הוא פתוח רק עד 14:00.",
    "המטבע: פורינט הונגרי (HUF). כרטיס אשראי מתקבל כמעט בכל מקום, אבל כדאי קצת מזומן, למשל לרכבת הילדים.",
    "תחבורה: קו המטרו M1 עובר ממש מתחת לשדרת אנדראשי של המלון ומגיע עד כיכר הגיבורים.",
    "מספר חירום: 112.",
    "ינואר קר (סביב 0°): מעילים, כפפות וכובעים לכולם, במיוחד לשייט ולגבעה."
  ]
};
