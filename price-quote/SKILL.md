---
name: price-quote
description: Turns a travel agent's raw booking details (pasted text, a supplier PDF, WhatsApp notes, an old quote) into a beautiful branded price quote PDF (הצעת מחיר) for their client, with a cover photo of the destination, a photo for every hotel, a route map, boarding-pass style flight cards, a transfers timeline, the price and payment terms. Use whenever the agent asks for a quote, a price offer or a proposal for a client: "תכין הצעת מחיר", "הצעת מחיר לרונית", "תעשה מזה הצעה יפה", "תסדר את ההצעה הזו", "сделай הצעת מחיר".
---

# Price quote (הצעת מחיר)

You are helping a travel agent send a client a price quote. The agent already has the details (flights, hotels, transfers, price) from suppliers, usually as messy text, a PDF or WhatsApp messages. Your job: **organize them faithfully** and produce a PDF that looks premium and is easy to read.

**The golden rule: copy, never invent.** Every flight time, date, hotel name, room type, board basis, cancellation date and price comes from what the agent gave you. If something is missing or unclear, ask, or leave it out and list it in the checklist. Never fill a gap with a guess. A wrong time or price in a quote costs the agent money.

**Language.** Talk to the agent in their language. The PDF is in Hebrew. Hotel names, room types from the supplier, and airline names stay in English, exactly as given.

Paths are relative to this skill's folder (`assets/template.html`) or the agent's working folder (`agency.json`, `quotes/`).

---

## Step 0: Agency details

Use `agency.json` in the working folder, the same file the tour-planner skill uses. If it doesn't exist, interview the agent once, one question at a time: agency name and a short tagline, phone, WhatsApp (international format), email, then:
- **Logo:** "יש לכם לוגו? אם כן, תשמרו את הקובץ בתיקייה ותגידו לי את השם שלו." If they have none, leave `logo` out: the PDF shows the agency name instead. Never draw or generate a logo.
- **Colours:** "יש לכם צבעים של המותג?" If yes, use them (a hex code, a colour name, or the main colour of their logo). If not, suggest 3 calm options in words (e.g. "טורקיז ים", "ירוק זית", "כחול לילה") and let them pick.

Save:
```json
{ "name": "…", "tagline": "…", "phone": "…", "whatsapp": "9725…", "email": "…", "logo": "logo.png",
  "color": "#0F766E", "colorDark": "#0B3B37", "colorSoft": "#E6F2F1" }
```
(`colorDark` is a much darker shade of the colour, and `colorSoft` a very light tint.)

## Step 1: Read what the agent gave you

The agent pastes text, attaches a PDF, or points to a file. Read all of it. Then extract:
- **Client:** names (for the title), number of travellers, destination country, travel dates, the quote date and how long it is valid.
- **What's included** (flights, hotels, domestic flights, transfers, tours, insurance…).
- **International and domestic flights:** date, from and to (city and IATA code), stopover, airline, flight number if given, departure and arrival time (and the arrival date if it's the next day), baggage.
- **Stays:** for each one: city, hotel (or cruise) name, dates and weekdays, number of nights, guests, board basis, room type, cancellation policy, anything special.
- **Transfers:** each one by date, with what kind of vehicle.
- **Price:** line items, total, per person or for everyone, currency. Payment terms (deposit, balance, who gets paid and how).
- **Terms and notes.**

### Before you build: ask what is missing, in one message

Check these every time. Ask **only the ones the agent hasn't answered**, together in **one short numbered message**, and wait for the answers before you build:

1. **A celebration.** Is the trip for something special: a birthday (whose?), an anniversary, a honeymoon, release from the army (שחרור), retirement, a first holiday as parents, or anything else? If the agent already said so, don't ask: it goes straight into the cover title (Step 5). If they didn't mention one, ask: "חוגגים משהו בחופשה הזו? (יום הולדת, יום נישואין, ירח דבש, שחרור, פנסיה, חופשה ראשונה כהורים…)".
2. **Room type** for every hotel where it's missing ("איזה סוג חדר ב-<hotel>?"). Never guess it.
3. **Flights:** baggage (checked bag and trolley, kg) and seat selection (הושבה), if not given.
4. **Extra services:** "יש שירות נוסף שנכנס להצעה? העברות, אטרקציות, חיבור לספקים מסוימים?"

Also ask when something essential is contradictory (for example, two different arrival times, or a weekday that doesn't match the date). Anything smaller goes on the checklist.

Don't put names of the agent's suppliers or private contacts (like "Lucy, my agent in Hanoi") into the client's PDF unless the agent asks. Write "the local supplier" (הספק המקומי) instead.

## Step 2: Prepare the folder

In ONE Bash call, from the working folder:
```bash
mkdir -p quotes/<YYYY-MM>-<client>-<destination>
cp "<skill folder>/assets/template.html" quotes/<…>/index.html
cp logo.* quotes/<…>/
```
Use ASCII letters only in the folder name (e.g. `quotes/2026-12-levi-vietnam/`). Copy the template with `cp`; never read, retype or edit it.

## Step 3: Photos

**Where photos may come from, in this order:**
1. **Photos the agent put in the folder.** If the agent saved hotel photos (from Booking, Google, the supplier…) into the quote folder or told you which file belongs to which hotel, use them. The agent is responsible for those images.
2. **The hotel's own official website.** Find the official site with a web search (the hotel's own domain, not Booking, Expedia, Agoda, Trip.com, Hotels.com or TripAdvisor). Download its page and look for the `og:image` meta tag or a large hero image in the HTML:
   ```bash
   curl -sL -m 25 -A "Mozilla/5.0 (Macintosh)" "<official site>" | tr '\n' ' ' | grep -o -i -E '<meta[^>]+og:image[^>]*>|https?://[^"'"'"' )]+\.(jpe?g|webp)' | head -20
   ```
   Skip logos and icons. Check every file with `file` (it must be a JPEG/PNG/WebP, not an HTML error page) and look at it before using it. Credit line: `"צילום: אתר המלון"`.
   **Every hotel needs at least 8 big photos** that really show it: 1 for the hotel card (`photo`, the strongest one: the building, the lobby or the pool) plus **at least 7 for its gallery** (`gallery`), mixing the room, the lobby, the restaurant or breakfast, the pool or spa, and the view. If a room type is given, prefer photos of that room type. Download them large (about 1600 px wide) as `stay-1.jpg`, `stay-2.jpg`, …
   Big chain sites (Hilton, Marriott, Accor, IHG…) often block `curl` or build the gallery with JavaScript, so the command above returns nothing. Then open the hotel's page in the browser tool and list the image URLs with a short script (`[...document.querySelectorAll('img,source')].map(e => e.currentSrc || e.src || e.srcset)`). Keep only photos on the hotel's own image server (e.g. `hilton.com/im/en/<HOTELCODE>/…`), ask for a large size (most image servers take width/height parameters in the URL), and download them with `curl`.
   If you can't find 8 photos you are sure about, use the ones you have and say how many are missing on the checklist. Never pad the gallery with city photos or photos you aren't sure about.
   **Make sure it is really THIS hotel.** Before using a photo from a website, all of these must be true: the site's name and address match the hotel in the quote (same name AND same city; chains and look-alike names are a trap: "Rex Hotel Saigon" is not "Rex Hanoi Hotel"); the image file is on the hotel's own domain or its own image server; and when you look at it, it shows a hotel (building, pool, room, lobby or view), not a stock photo of a beach, a person, a logo or a generic city skyline. If any one of these is doubtful, **don't use it**: go to option 3.
3. **No official site, or no photo you are sure about:** use a photo of the **city or area** from Wikipedia (see the cover photo below) and mark the stay with `photoIsCity: true`, so the card says "תמונת היעד" (photo of the destination) and nobody thinks it's the hotel. Put that hotel on the hand-off checklist ("אין תמונה של המלון, שמתי תמונה של העיר").

**Never make up a hotel photo:** no AI-generated images, no photo of a different hotel, no "a nice hotel that looks similar", no random room photo. A city photo with an honest label is always better than a hotel photo you are not sure about.

**Never** download photos from booking sites (Booking.com, Expedia, Agoda, Hotels.com, Trip.com, TripAdvisor) or from Google Images yourself. Their terms forbid it, the photos belong to others, and those sites block automated access. If the agent asks for a Booking photo, tell them to save it into the quote folder themselves and you'll use it.

**Cover photo:** the destination's most iconic view (Vietnam → Ha Long Bay, Italy → the Colosseum or the Amalfi coast). Get it from the English Wikipedia API:
```bash
curl -s -A "tour-planner-skill/1.0" "https://en.wikipedia.org/w/api.php?action=query&format=json&redirects=1&prop=pageimages&piprop=thumbnail|name&pithumbsize=1600&titles=<Page_Title>"
```
Download **exactly** the `thumbnail.source` URL as `cover.jpg`, and get the author and licence for the credit line from Commons:
```bash
curl -s -A "tour-planner-skill/1.0" "https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=extmetadata&titles=File:<pageimage name>"
```
Credit: `"צילום: <Artist, HTML stripped> · <LicenseShortName> · Wikimedia Commons"`. The licence requires it, so never leave it out. Use the same method for city photos (`city-<name>.jpg`), with the credit in that stay's `photoNote`. Prefer landscape photos.

Do the downloads in as few Bash calls as possible. Wikimedia answers `429 Too Many Requests` if you ask too fast: wait 10–20 seconds and retry, with a `sleep 3` between requests.

Children's ages: write them in words, `"2 מבוגרים ו-2 ילדים, בני 8 ו-12"`, never `(8, 12)`: numbers in brackets inside Hebrew text get scrambled.

## Step 4: Route map coordinates

One point per stop, in order (the same city may appear twice, e.g. Hanoi at the start and the end). Look each city up with Nominatim in one Bash command, `sleep 1` between requests:
```bash
curl -s -A "tour-planner-skill/1.0" "https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=<URL-encoded city, region, country>"
```
**Check every result's `display_name`:** the same name exists in many places (searching "Tuan Chau, Ha Long" once returned a village near Hanoi, 150 km away). If it looks wrong, search again with the region and country, e.g. "Tuan Chau Island, Quang Ninh, Vietnam". Round coordinates to 4 decimals.

## Step 5: Write `quote.js`

Write `quote.js` in the quote folder, as `window.QUOTE = { … };`. Leave out any field you don't have; the template hides empty parts. See `assets/example-quote.js` for a full example.

```js
window.QUOTE = {
  agency: { /* copied from agency.json */ },
  client: { title: "חופשת יום הולדת מושלמת", destination: "וייטנאם", destinationLatin: "Vietnam",
            subtitle: "רונה ומיכל לוי · וייטנאם · דצמבר 2026",       // the client's names go here when the title is a celebration
            dates: "9–23.12.2026", nights: "14 לילות", travelers: "2 מבוגרות", countryCode: "vn",
            photo: "cover.jpg", photoCredit: "צילום: … · CC BY-SA 4.0 · Wikimedia Commons" },
  issued: "04.11.2026", validUntil: "",               // either or both
  includes: [ { icon: "🎂", text: "חופשה לכבוד יום ההולדת של רונה" }, { icon: "✈️", text: "טיסות בינלאומיות" }, { icon: "🏨", text: "6 מלונות" },
              { icon: "🤝", text: "המלצות וליווי אישי שלי לאורך כל החופשה" } ],   // ALWAYS include this one
  introTitle: "רונה ומיכל, אני כל כך מתרגשת בשבילכן! 🥳🎉",   // big, bold, black, under the cover photo
  intro: [ "רונה, יום ההולדת שלך בווייטנאם, ואני ממש שמחה לקחת בו חלק! 🎂🥂",
           "שבועיים מהצפון ועד מרכז הארץ 🇻🇳",
           "לילה על ספינה במפרץ האלונג 🛳️",
           "ואני לצידכן לאורך כל החופשה 💙" ],                       // one short line each, emoji only at the END of a line
  flightsNote: [ "✨ טיסת החזרה בלילה, כך שגם היום האחרון הוא יום מלא" ],   // optional, see "Flight hours" below
  route: [ { name: "האנוי", local: "Hanoi", nights: 2, lat: 21.0283, lng: 105.854 } ],
  flights: [ { kind: "intl" | "domestic", date: "רביעי 09.12.26", from: "TLV", fromName: "תל אביב", fromLocal: "Tel Aviv",
               to: "HAN", toName: "האנוי", toLocal: "Hanoi", toCountry: "Vietnam",
               photo: "fly-han.jpg", photoCredit: "Author · CC BY-SA 2.0",   // photo of the DESTINATION city, from Wikimedia
               via: "עצירת ביניים באבו דאבי", airline: "Etihad Airways",
               flightNo: "", dep: "14:00", arr: "06:10", arrNote: "+1 · 10.12", baggage: "מזוודה 25 ק״ג + תיק יד 7 ק״ג" } ],
  stays: [ { city: "האנוי", cityLocal: "Hanoi", name: "Rex Hanoi Hotel", kind: "hotel" | "cruise",
             dates: "10–12.12", days: "חמישי עד שבת", nights: 2, guests: "2 מבוגרות",
             board: "לינה וארוחת בוקר", room: "Deluxe room, 2 twin beds", cancel: "ביטול חינם עד 03.12",
             extra: "", photo: "stay-1.jpg", photoIsCity: false, photoNote: "צילום: אתר המלון", url: "https://…",
             gallery: [ "stay-2.jpg", "stay-3.jpg", "stay-4.jpg", "stay-5.jpg", "stay-6.jpg", "stay-7.jpg", "stay-8.jpg" ],  // at least 7
             galleryNote: "צילום: אתר המלון" } ],
  transfersIntro: "", transfers: [ { date: "10.12", title: "נחיתה בהאנוי", desc: "הסעה פרטית משדה התעופה למלון." } ],
  price: { rows: [ { label: "טיסות", amount: "$2,400", alt: "₪8,880" } ], total: "$7,950", totalAlt: "₪29,415", totalLabel: "סה״כ לחבילה",
           perPerson: "$3,975 לאדם", perPersonAlt: "₪14,708 לאדם", note: "ההמרה לשקלים לפי שער של 3.70 ₪ לדולר. השער הסופי נקבע ביום התשלום." },
  payment: [ "…" ],
  terms: [ "…" ],
  contactTitle: ""                                      // optional, no emoji
};
```

**Boarding passes.** Every flight is drawn as an illustrated boarding pass: the destination city's photo fades into the paper, with a postal stamp of `toLocal` and `toCountry` and a stub with a barcode. So for every flight, download a landscape Wikimedia photo of the **destination** city (a landmark: Hanoi → Hoan Kiem Lake, Da Nang → Dragon Bridge, Tel Aviv → the skyline) as `fly-<code>.jpg`, the same way as the cover, and put the short credit (`"Author · Licence"`) in `photoCredit`. Two flights to the same city may share a photo, but a different landmark looks better.

Writing rules:
- `nights` in a stay is a **number**; the template writes "לילה" / "לילות".
- IATA codes in `from`/`to` (TLV, HAN, DAD…). The city name in Hebrew goes in `fromName`/`toName`.
- Dates are short: `10–12.12`, `09.12.26`. Weekdays in Hebrew in `days` or in a flight's `date`.
- Prices exactly as the agent gave them, with the currency symbol. If the agent gave no price, set `price: null`: the section disappears.
- **Shekels.** Israeli clients often want the price in ₪ too. If the agent asks for it (or the quote is in $ or €), show the shekel amount under each line (`alt`), under the total (`totalAlt`) and per person (`perPersonAlt`), and say the rate in `note`. **Use the exchange rate the agent gives you. Never invent a rate:** if they gave none, ask once ("באיזה שער להמיר?"). Round each shekel amount to a whole shekel, and make sure the lines add up to the total.
- The client's title, the intro and the flight-hours note are the only text you write yourself. Keep them warm and factual.

**The cover title.** If they celebrate something, the celebration **is** the title, big: "חופשת יום הולדת מושלמת", "ירח הדבש של דנה ואבי", "חופשת יום נישואין 10 בפריז", "חופשת שחרור בתאילנד", "חופשה ראשונה כהורים", "חופשת פנסיה ברומא". Then the names go in `subtitle` ("ליה ומייקל קינן · פריז · דצמבר 2026"). Add a matching item at the top of `includes` (e.g. `🎂 חופשה לכבוד יום ההולדת של מייקל`). With no celebration, the title is personal with the travellers' names: "החופשה של ליה ומייקל".

**The excited text under the cover photo.** The agent wants the client to feel how excited and close she is:
- `introTitle`: a short greeting with the names and the excitement, e.g. "ליה ומייקל, אני כל כך מתרגשת בשבילכם! 🥳🎉". It prints big, bold and black.
- `intro`: an **array of short lines**, 4–7 of them, one idea per line: the celebration ("מייקל, יום ההולדת שלך בפריז, ואני ממש שמחה לקחת בו חלק! 🎂🥂"), the highlights of the package, and "ואני לצידכם לאורך כל החופשה 💙". It prints bold.
- Each line ends with 1–2 emoji **relevant** to it (🎂🥂 birthday, 💍 anniversary, 🌴 beach, ✈️ flight, 🚗 driver, 🥐 breakfast, 🗼 Paris…). **Never put an emoji in the middle of a line**: break the line instead. Only facts from the quote.
- Use the agent's voice and gender ("מתרגשת" for a woman) and address the travellers correctly (לכם / לכן / לך).

**Personal service.** Always add `{ icon: "🤝", text: "המלצות וליווי אישי שלי לאורך כל החופשה" }` to `includes`, and mention it in the intro.

**Flight hours.** When the hours are good for the client, say so in `flightsNote`, one short bold line each, worked out only from the times you were given: an early outbound flight ("✨ טסים בבוקר ונוחתים בזמן לנצל את יום ההגעה במלואו"), a late return ("✨ טיסת החזרה בלילה, כך שגם היום האחרון הוא יום מלא"), or hours that fit check-in and check-out (only if the hotel's check-in/out times were given). If the hours aren't convenient, leave `flightsNote` out and mention it on the agent's checklist instead.

## Step 6: Make the PDF and check it

**Mac:**
```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --window-size=1400,1800 --no-pdf-header-footer --run-all-compositor-stages-before-draw --virtual-time-budget=30000 --print-to-pdf="<folder>/quote.pdf" "file://<absolute path>/index.html"
```
**Windows (Edge):**
```bash
"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless=new --disable-gpu --window-size=1400,1800 --no-pdf-header-footer --run-all-compositor-stages-before-draw --virtual-time-budget=30000 --print-to-pdf="<folder>\quote.pdf" "file:///<absolute path with forward slashes>/index.html"
```
Then rename `quote.pdf` to the Hebrew title, e.g. `הצעת מחיר - רונה ומיכל לוי - וייטנאם.pdf`. If Chrome prints nothing, the cause is almost always in the page (a missing file, an emoji in `contactTitle`), not the browser.

Check it once, without installing anything: take a screenshot with the same browser (`--screenshot="<folder>/check.png" --window-size=1400,2600`), Read it, and look at the cover, the first stays page and the hotel gallery. Fix only real problems: grey maps, missing photos, cut-off text, an emoji in the middle of an intro line, or a cover that spills onto a second page (then shorten the intro lines). Then delete `check.png`.

## Step 7: Hand-off to the agent

A short message in their language:
1. **Where the PDF is.**
2. **A ready WhatsApp message** to the client, short and warm, in the agency's voice.
3. **"מה לבדוק לפני ששולחים"**: everything you weren't sure about, everything you left out, **which stays show a city photo instead of the hotel**, and any hotel with fewer than 8 photos (so the agent can drop in photos and ask you to rebuild).
4. **"הערות חשובות להדגיש ללקוח"**: anything the client must know, for example a flight on Shabbat or a holiday, a very early or late flight, a long stopover, a visa or passport validity rule, a non-refundable room, or a price that depends on availability. Write these to the agent; she decides what to tell the client.
5. One line: to change anything, just say it in plain words ("תוסיף את המחיר", "תחליף את התמונה של המלון בסאפה בקובץ הזה").

## Rules

- **Never invent** a time, date, price, room type, board basis or cancellation term.
- Hotel photos only from the agent or the hotel's official site, and only when you are sure it is that exact hotel; otherwise a labelled city photo from Wikimedia, with credit. Never an AI-generated or look-alike photo. Aim for at least 8 per hotel.
- A celebration always goes in the cover title. If the agent didn't mention one, ask before you build.
- Always include "המלצות וליווי אישי שלי לאורך כל החופשה".
- Never ask for or store passport numbers, ID numbers or card details.
- Keep `assets/template.html` unchanged; all content goes in `quote.js`.
