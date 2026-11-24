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

Only ask when something essential is missing or contradictory (for example, two different arrival times). Ask one short question at a time. Otherwise go ahead, and put the smaller doubts on the checklist.

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
   Skip logos and icons. Download the best photo (the building, the pool, a room or the view) as `stay-N.jpg`, check it with `file` (it must be a JPEG/PNG/WebP, not an HTML error page) and look at it before using it. Credit line: `"צילום: אתר המלון"`.
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
  client: { title: "החופשה של רונה ומיכל לוי", destination: "וייטנאם", destinationLatin: "Vietnam", subtitle: "וייטנאם · דצמבר 2026",
            dates: "9–23.12.2026", nights: "14 לילות", travelers: "2 מבוגרות", countryCode: "vn",
            photo: "cover.jpg", photoCredit: "צילום: … · CC BY-SA 4.0 · Wikimedia Commons" },
  issued: "04.11.2026", validUntil: "",               // either or both
  includes: [ { icon: "✈️", text: "טיסות בינלאומיות" }, { icon: "🏨", text: "6 מלונות" } ],
  intro: "2 warm sentences about the trip, written for the client. Only facts from the quote.",
  route: [ { name: "האנוי", local: "Hanoi", nights: 2, lat: 21.0283, lng: 105.854 } ],
  flights: [ { kind: "intl" | "domestic", date: "רביעי 09.12.26", from: "TLV", fromName: "תל אביב", fromLocal: "Tel Aviv",
               to: "HAN", toName: "האנוי", toLocal: "Hanoi", toCountry: "Vietnam",
               photo: "fly-han.jpg", photoCredit: "Author · CC BY-SA 2.0",   // photo of the DESTINATION city, from Wikimedia
               via: "עצירת ביניים באבו דאבי", airline: "Etihad Airways",
               flightNo: "", dep: "14:00", arr: "06:10", arrNote: "+1 · 10.12", baggage: "מזוודה 25 ק״ג + תיק יד 7 ק״ג" } ],
  stays: [ { city: "האנוי", cityLocal: "Hanoi", name: "Rex Hanoi Hotel", kind: "hotel" | "cruise",
             dates: "10–12.12", days: "חמישי עד שבת", nights: 2, guests: "2 מבוגרות",
             board: "לינה וארוחת בוקר", room: "Deluxe room, 2 twin beds", cancel: "ביטול חינם עד 03.12",
             extra: "", photo: "stay-1.jpg", photoIsCity: false, photoNote: "צילום: אתר המלון", url: "https://…" } ],
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
- The client's title and the intro are the only text you write yourself. Keep them warm and factual.

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

Check it once, without installing anything: take a screenshot with the same browser (`--screenshot="<folder>/check.png" --window-size=1400,2600`), Read it, and look at the cover and the first stays page. Fix only real problems: grey maps, missing photos, cut-off text. Then delete `check.png`.

## Step 7: Hand-off to the agent

A short message in their language:
1. **Where the PDF is.**
2. **A ready WhatsApp message** to the client, short and warm, in the agency's voice.
3. **"מה לבדוק לפני ששולחים"**: everything you weren't sure about, everything you left out, and **which stays show a city photo instead of the hotel** (so the agent can drop in a hotel photo and ask you to rebuild).
4. One line: to change anything, just say it in plain words ("תוסיף את המחיר", "תחליף את התמונה של המלון בסאפה בקובץ הזה").

## Rules

- **Never invent** a time, date, price, room type, board basis or cancellation term.
- Hotel photos only from the agent or the hotel's official site, and only when you are sure it is that exact hotel; otherwise a labelled city photo from Wikimedia, with credit. Never an AI-generated or look-alike photo.
- Never ask for or store passport numbers, ID numbers or card details.
- Keep `assets/template.html` unchanged; all content goes in `quote.js`.
