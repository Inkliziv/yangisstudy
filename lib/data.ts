import { Course, Lesson, Question } from '@/types'

export const COURSE_DATA: Course = {
  id: 'raqamli-texnologiyalar',
  title: 'Raqamli Texnologiyalar va Innovatsiyalar',
  slug: 'raqamli-texnologiyalar',
  description:
    'TATU talabalari uchun mo\'ljallangan ushbu kurs raqamli texnologiyalar, sun\'iy intellekt, blokcheyn, bulut hisoblash va boshqa zamonaviy innovatsiyalar haqida chuqur bilim beradi.',
  shortDesc: '15 ta mavzu bo\'yicha video darslar, ma\'ruza matnlari va testlar',
  thumbnail: '/images/course-thumb.jpg',
  totalLessons: 15,
  totalDuration: '22 soat 30 daqiqa',
  lessons: [],
}

export const LESSONS: Lesson[] = [
  {
    id: 'lesson-1',
    topicNumber: 1,
    title: 'Raqamli Iqtisodiyot Asoslari',
    slug: 'raqamli-iqtisodiyot-asoslari',
    description: 'Raqamli iqtisodiyotning mohiyati, rivojlanish tarixi va zamonaviy hayotdagi o\'rni',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoDuration: '1:45:00',
    order: 1,
    lectureText: `# Raqamli Iqtisodiyot Asoslari

## Kirish

Raqamli iqtisodiyot — bu axborot-kommunikatsiya texnologiyalari (AKT) asosida faoliyat yurituvchi iqtisodiy tizimdir. U an'anaviy iqtisodiyotdan farqli ravishda, asosan raqamli ma'lumotlar va internet texnologiyalariga tayanadi.

## Raqamli Iqtisodiyotning Asosiy Xususiyatlari

### 1. Ma'lumotlar — yangi "neft"
Zamonaviy iqtisodiyotda ma'lumotlar eng qimmatli resurs hisoblanadi. Har kuni 2.5 kvintillion bayt yangi ma'lumot ishlab chiqarilmoqda.

### 2. Platformalar iqtisodiyoti
- **Amazon** — savdo platformasi
- **Uber** — transport platformasi
- **Airbnb** — turar-joy platformasi
- **Alibaba** — B2B va B2C savdo platformasi

### 3. Iqtisodiy ko'rsatkichlar

| Ko'rsatkich | 2020 | 2025 (prognoz) |
|-------------|------|-----------------|
| Hajm (trln $) | 11.5 | 23.3 |
| Ulushi (%) | 15.5 | 24.3 |

## Raqamli Iqtisodiyotning Rivojlanish Bosqichlari

**1-bosqich (1990-2000):** Internet va elektron tijoratning paydo bo'lishi. Amazon, eBay, Yahoo kabi kompaniyalar vujudga keldi.

**2-bosqich (2000-2010):** Mobil internet, ijtimoiy tarmoqlar. Facebook, Twitter, YouTube platformalari rivojlandi.

**3-bosqich (2010-hozir):** Sun'iy intellekt, Big Data, IoT texnologiyalari. Bulut hisoblash keng qo'llanila boshladi.

## O'zbekistonda Raqamli Iqtisodiyot

O'zbekiston 2030 yilga qadar raqamli iqtisodiyotni rivojlantirish bo'yicha strategik rejani amalga oshirmoqda:

- **E-hukumat** tizimini kengaytirish
- **IT-parklar** va texnoparklar barpo etish
- **IT-ta'lim**ni rivojlantirish
- **Raqamli to'lovlar**ni kengaytirish

## Asosiy Tushunchalar

> **Raqamli transformatsiya** — bu kompaniya yoki tashkilotning an'anaviy biznes modelidan raqamli texnologiyalarga asoslangan modelga o'tish jarayoni.

**Omillar:**
1. Texnologik tezlanish
2. Iste'molchilar xulqining o'zgarishi
3. Raqobat bosimi
4. COVID-19 pandemiyasining ta'siri

## Xulosa

Raqamli iqtisodiyot bugungi kunda barcha sohalarga kirib bormoqda: sog'liqni saqlash, ta'lim, moliya, sanoat va boshqa ko'plab sohalar. Ushbu jarayonni tushunish va unga moslashish zamonaviy mutaxassis uchun muhim ko'nikma hisoblanadi.`,
  },
  {
    id: 'lesson-2',
    topicNumber: 2,
    title: 'Sun\'iy Intellekt va Machine Learning',
    slug: 'suniy-intellekt-machine-learning',
    description: 'AI va ML texnologiyalarining asoslari, turlari va amaliy qo\'llanilishi',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoDuration: '2:00:00',
    order: 2,
    lectureText: `# Sun'iy Intellekt va Machine Learning

## Sun'iy Intellekt Nima?

Sun'iy intellekt (AI — Artificial Intelligence) — bu kompyuter tizimlarining odamga xos bo'lgan intellektual vazifalarni bajarish qobiliyatidir.

## AI Turlari

### Toraytirilgan AI (Narrow AI)
Faqat bitta vazifani bajaradi:
- Yuz tanish tizimi
- Spam filtri
- Tarjima dasturlari (Google Translate)

### Umumiy AI (General AI)
Inson kabi turli vazifalarni bajaroladi. Hozircha nazariy konsept.

### Super AI
Insonda ustun keluvchi AI. Kelgusidagi perspektiva.

## Machine Learning

Machine Learning (ML) — bu kompyuterlarga aniq dasturlash orqali emas, balki ma'lumotlardan o'rganish qobiliyatini berish texnologiyasidir.

### ML Turlari

**1. Nazoratli o'rganish (Supervised Learning)**
\`\`\`
Input: Belgilangan ma'lumotlar (labeled data)
Algoritm: Linear Regression, Decision Trees, SVM
Output: Prognoz (prediction)
\`\`\`

**2. Nazorat qilinmagan o'rganish (Unsupervised Learning)**
\`\`\`
Input: Belgilanmagan ma'lumotlar
Algoritm: K-Means, PCA, Autoencoders
Output: Klasterlar, yashirin naqshlar
\`\`\`

**3. Mustahkamlash orqali o'rganish (Reinforcement Learning)**
\`\`\`
Agent → Muhit → Mukofot/Jazo → O'rganish
Misol: AlphaGo, OpenAI Five
\`\`\`

## Deep Learning

Deep Learning — bu ko'p qatlamli neyron tarmoqlarga asoslangan ML usuli.

**Qo'llanilishi:**
- Rasm tanish (Computer Vision)
- Nutqni qayta ishlash (NLP)
- Avtonom harakatlanuvchi mashinalar
- Tibbiy diagnostika

## ChatGPT va LLM

Large Language Models (LLM) — katta til modellari:
- **GPT-4** (OpenAI)
- **Gemini** (Google)
- **Claude** (Anthropic)
- **LLaMA** (Meta)

## Amaliy Misollar

> O'zbekistondagi AI qo'llanilishi: MyGov platformasi, Smart City loyihasi, Oson tibbiy diagnostika tizimi.

## Xulosa

AI va ML texnologiyalari tez sur'atlar bilan rivojlanmoqda. 2030 yilga qadar global AI bozori 1.8 trln dollarga yetishi kutilmoqda.`,
  },
  {
    id: 'lesson-3',
    topicNumber: 3,
    title: 'Blokcheyn Texnologiyasi va Kriptovalyutalar',
    slug: 'blokcheyn-texnologiyasi',
    description: 'Raqamli pullar evolyutsiyasi, blokcheyn DLT, PoW va PoS, CBDC va global tartibga solish',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoDuration: '1:50:00',
    order: 3,
    lectureText: `# Blokcheyn Texnologiyasi va Kriptovalyutalar

## 3.1.1. Raqamli Pullarning Evolyutsiyasi: David Chaumdan Satoshi Nakamotogacha

Raqamli pullarning evolyutsiyasi o'n yilliklar davomida kriptograflar, matematiklar va iqtisodchilarning birgalikdagi intilishlari mahsuli bo'lib, bu jarayon 1980-yillarning boshlarida "sayferpanklar" harakatining paydo bo'lishi bilan bevosita bog'liqdir.

**David Chaum (1983)** — "Blind Signatures for Untraceable Payments" ilmiy ishi bilan raqamli pullarning tamal toshini qo'ydi. U anonimlik va xavfsizlikni ta'minlovchi **DigiCash** tizimini yaratdi — markazlashgan bank tizimidan mustaqil bo'lgan birinchi elektron pul prototipi. Biroq tizim markazlashtirilgan bo'lgani uchun 1990-yillar oxiriga kelib tijoriy muvaffaqiyatsizlikka uchradi.

**Adam Back (1997)** — **Hashcash** tizimini taklif qildi. Elektron pochtadagi spamga qarshi kurashish vositasi sifatida yaratilgan bu tizim zamonaviy kriptovalyutalarning o'zagi bo'lgan **Proof of Work (PoW)** algoritmining ilk ko'rinishini taqdim etdi.

**Wei Dai (1998)** — **"b-money"** loyihasida birinchi marta markazsizlashtirilgan, har bir ishtirokchi o'z reyestriga ega bo'lgan pul tizimini tasvirlab berdi.

**Nick Szabo** — **"Bit Gold"** kontsepsiyasini ishlab chiqdi — raqamli tanqislik (scarcity) va matematik murakkablikka asoslangan, bitkoinga eng yaqin tizim.

**Satoshi Nakamoto (2008-yil 31-oktabr)** — global moliyaviy inqiroz pallasida "Bitcoin: A Peer-to-Peer Electronic Cash System" oq qog'ozini e'lon qildi. U oldingi barcha g'oyalarni — Chaumning anonimligini, Backning PoW algoritmini, Szaboning raqamli tanqisligini — yagona tizimga birlashtirdi.

**2009-yil 3-yanvar** — bitkoinning birinchi **"Genesis Block"** i yaratildi, yangi raqamli moliya erasi boshlandi.

---

## 3.1.2. Blokcheyn — Kriptovalyutalarning "Umurtqa Pog'onasi": Taqsimlangan Reyestr Texnologiyasi (DLT)

Blokcheyn — bu ma'lumotlarni **taqsimlangan reyestr texnologiyasi (Distributed Ledger Technology — DLT)** asosida saqlash usuli. Barcha tranzaksiyalar xronologik tartibda zanjirsimon bog'langan bloklar ko'rinishida saqlanadi va tarmoqning har bir ishtirokchisi ma'lumotlar bazasining nusxasiga ega.

**Har bir blok quyidagilarni saqlaydi:**
1. **Ma'lumotlar** — tranzaksiyalar ro'yxati
2. **Xesh (Hash)** — blokning noyob identifikatori
3. **Oldingi blokning xeshi** — zanjirning uzviyligi

**Xesh funksiyasi** — har qanday hajmdagi ma'lumotni qat'iy belgilangan uzunlikdagi noyob belgilar qatoriga aylantiruvchi matematik algoritm. Blok ichidagi hatto birgina belgining o'zgarishi butun zanjirning buzilishiga olib keladi.

### Blokcheynning asosiy xususiyatlari:
- **Markazsizlashuv** — yagona nazorat markazi yo'q
- **Shaffoflik** — har bir ishtirokchi zanjirni boshidan oxirigacha kuzatishi mumkin
- **O'zgartirib bo'lmaslik** — ma'lumotlarni soxtalashtirish uchun butun zanjirni qayta hisoblash kerak
- **Ishonchsiz muhitda ishonch** (Trustless Environment) — vositachilarsiz ishlash

### Tarmoq arxitekturasi:

**A — Markazlashgan tarmoq (Centralized):** Barcha ma'lumotlar bitta markaziy tugun orqali o'tadi. Zaif nuqta — agar markaz ishdan chiqsa, butun tizim to'xtaydi.

**B — Markazsizlashgan tarmoq (Decentralized):** Bir nechta mahalliy hublar mavjud. Markazlashgan modelga qaraganda chidamliroq.

**C — Taqsimlangan tarmoq (Distributed):** Blokcheyn texnologiyasining asosi. Hech qanday markaziy boshqaruv organi yo'q, ma'lumotlar barcha ishtirokchilarda bir xil nusxada saqlanadi.

---

## 3.1.3. Konsensus Mexanizmlari: PoW va PoS

### Ish Isboti (Proof of Work — PoW)

Birinchi konsensus algoritmi, bitkoinning asosi. Maynerlar yangi blokni zanjirga qo'shish uchun murakkab matematik masalani yechishi kerak.

**Afzalliklari:**
- O'ta yuqori xavfsizlik
- 51% hujumdan himoya (ulkan resurs talab qiladi)

**Kamchiliklari:**
- Ulkan energiya iste'moli
- Past tranzaksiya tezligi (skalabillik)

### Ulush Isboti (Proof of Stake — PoS)

PoW ga muqobil. Validatorlar o'z kripto-aktivlarini "steyking" qilib, blok tasdiqlash huquqiga ega bo'ladilar.

**Afzalliklari:**
- 99%+ energiya samaradorligi
- Tezroq va arzonroq tranzaksiyalar

**Kamchiliklari:**
- "Boylar yanada boyiydi" — markazlashuv xavfi

**Taqqoslash jadvali:**

| Xususiyat | PoW | PoS |
|-----------|-----|-----|
| Resurs | Hisoblash quvvati (ASIC) | Steyking (tangalar) |
| Energiya | Juda ko'p | Minimal |
| Xavfsizlik | 51% hisoblash quvvati kerak | 51% tangalar kerak |
| Misol | Bitcoin | Ethereum 2.0 |

**Ethereum "The Merge" (2022-yil 15-sentabr)** — Ethereum PoW dan PoS ga o'tdi. Natija: energiya iste'moli **99.95%** ga kamaydi.

---

## 3.2.1. "Raqamli Oltin" Diskursi

Bitkoin "raqamli oltin" sifatida talqin qilinadi — uzoq muddatli boylikni saqlash va inflyatsiyadan himoyalanish aktivi.

**O'xshash xususiyatlar:**

| Xususiyat | Oltin | Bitkoin |
|-----------|-------|---------|
| Cheklangan miqdor | Geologik cheklov | 21 mln dona |
| Chidamlilik | Kimyoviy barqarorlik | Raqamli doimiylik |
| Bo'linuvchanlik | Cheklangan | 1 BTC = 100 mln Satoshi |
| Portativlik | Og'ir | Seed-fraza bilan osongina |

**Xalving (Halving)** — har 210 000 blokdan keyin yangi tangalar ishlab chiqarish ikki barobar kamayadi. Bu raqamli tanqislikni ta'minlaydi va deflyatsion tabiati bilan investorlar ishonchini oshiradi.

---

## 3.2.2. Texno-libertarianizm va Kiber-Anarxizm

Kriptovalyutalar chuqur ijtimoiy-siyosiy falsafaga tayangan. **Texno-libertarianizm** shaxsiy erkinlikni oliy qadriyat deb biladi; **kiber-anarxizm** kriptografiyani ozodlik vositasi sifatida ko'radi.

> **Timoti Mey (1988):** "Kripto-Anarxist Manifest" — kriptografiya hukumatlarning nazorat qilish qobiliyatini yo'qqa chiqaradi.

**Markazsizlashtirish** = nafaqat texnik yechim, balki pul emissiyasi monopoliyasini sindirish vositasi. Satoshi Nakamotoning maqsadi ham aynan shu edi.

---

## 3.2.3. Moliyaviy Inklyuzivlik: Unbanked Aholi uchun Imkoniyatlar

Dunyo miqyosida milliardlab insonlar rasmiy bank hisobiga ega emas. Sabablari:
- Shaxsni tasdiqlovchi hujjatlar yo'qligi
- Bank infratuzilmasining uzoqligi
- Yuqori xizmat haqlari

Kriptovalyutalar bu to'siqlarni bartaraf etadi: **internetga ulangan har qanday smartfon egasi** hech qanday vositachisiz global moliya tizimiga ulanishi mumkin.

**Stabilkoinlar** — milliy valyutalari yuqori inflyatsiyaga uchrayotgan rivojlanayotgan mamlakatlarda jamg'armalarni himoya qilishning raqamli vositasi.

---

## 3.2.4. Spekulyativ Aktiv va "Ko'pik" Diskursi

Tanqidchilar nuqtai nazaridan kriptovalyutalar:
- Real iqtisodiy qiymatga ega bo'lmagan spekulyativ aktivlar
- Tarixiy "lolalar isitmasi" (Tulip Mania) ga o'xshash
- **"Katta ahmoq nazariyasi"** (Greater Fool Theory) ga asoslangan

**Asosiy xavflar:**
- O'ta yuqori volatillik (narxlar keskin o'zgarishi)
- FOMO psixologiyasi
- Noqonuniy operatsiyalar uchun ishlatilish xavfi
- Ekologik zarar (PoW)

---

## 3.3.1. Mayning Jarayonining Energiya Sig'imi

Bitkoin mayningi **SHA-256 xesh-funksiyasi** yechimini topish uchun soniyada trillionlab matematik amallarni bajarishni talab qiladi. **"Murakkablikni moslashtirish"** (Difficulty Adjustment) mexanizmi tarmoq quvvati ortgani sayin masalani qiyinlashtiradi.

Natija: global miqyosda Bitkoin iste'mol qiladigan elektr energiyasi ko'plab rivojlangan davlatlarning yillik iste'moli bilan tenglashadi.

---

## 3.3.2. "Uglerod Izi" va Iqlim O'zgarishi

**Uglerod izi (Carbon Footprint)** — mayning jarayonida sarflanadigan elektr energiyasi ishlab chiqarish natijasida atmosferaga chiqariladigan CO₂ miqdori.

**Qo'shimcha muammo — Elektron chiqindilar (e-waste):**
- ASIC qurilmalar tezda eskiradi
- Boshqa maqsadlarda ishlatish imkoni yo'q
- Har yili minglab tonna toksik chiqindi

---

## 3.3.3. Yashil Mayning (Green Mining)

Qayta tiklanuvchi energiya manbalariga o'tish:
- ☀️ Quyosh energiyasi
- 💨 Shamol energiyasi
- 💧 Gidroenergetika
- 🌋 Geotermal energiya

**Afzalligi:** Ortiqcha yoki to'lib-toshgan energiya ("stranded energy") dan samarali foydalanish. Masalan, uzoq hududlardagi GES da hosil bo'lgan va umumiy tarmoqqa yetib bormaydigan energiyani mayningga yo'naltirish.

> Bugungi kunda global bitkoin mayning tarmog'ining **50%+ i** barqaror energiya manbalariga tayangan.

O'zbekiston: Quyosh energetikasi imkoniyatlari yuqori — yashil mayning uchun katta istiqbol.

---

## 3.3.4. Ethereum 2.0 (PoS) ga O'tish: "The Merge"

**2022-yil 15-sentabr** — "The Merge":
- PoW → PoS ga to'liq o'tish
- Energiya iste'moli: **99.95%** ga kamaydi
- Ulkan mayning fermalariga bo'lgan ehtiyoj yo'qoldi

Bu raqamli innovatsiyalarning ekologik mas'uliyat bilan integratsiyasining eng yirik laboratoriya tajribasi hisoblanadi.

---

## 3.4.1. Milliy Suverenitet va Kriptovalyutalar

Markaziy banklar tarixan pul emissiyasi va pul-kredit siyosatida mutloq monopoliyaga ega. Kriptovalyutalar bu leverlarni chetlab o'tadi:

**Asosiy xavotirlar:**
- Soliq yig'ishning qiyinlashishi
- Iqtisodiy rag'batlantirishning samarasizligi
- Moliyaviy barqarorlik nazoratining zaiflashishi

**Javob: CBDC (Markaziy bank raqamli valyutalari)** — markazsizlashgan tizimlar qulayliklarini saqlab, pul ustidan davlat nazoratini qayta tiklash.

---

## 3.4.2. Sanksiyalarni Aylanib O'tish: Kripto "Iqtisodiy Qurol" Sifatida

Kriptovalyutalar zamonaviy sanksiyalar mexanizmlarini murakkablashtiradi:
- SWIFT kabi markazlashgan tizimlardan foydalanmaslik imkoni
- Transchegaraviy P2P o'tkazmalar
- Blokirovka qilish uchun markaziy organ yo'q

**Javob:** FATF standartlari, "on-chain" tahliliy vositalar, kiber-iqtisodiy razvedka.

---

## 3.4.3. El Salvador Tajribasi: Bitcoin Davlat Valyutasi Sifatida

**2021-yil 7-sentabr** — El Salvador Bitkoinni rasmiy to'lov vositasi sifatida tan olgan dunyodagi birinchi davlat.

**Maqsadlar:**
- Unbanked aholini moliya tizimiga integratsiya (70%+)
- Remittances komissiyalarini kamaytirish (YIM ning 20-25%)
- Xorijiy investitsiyalarni jalb qilish

**Natijalar:**
- ✅ Turizm ~30% o'sdi
- ✅ "Bitcoin Beach" texnologik klasterlar
- ❌ Aholining past raqamli savodxonligi skeptitsizmni oshirdi
- ❌ IMF va Jahon banki moliyaviy xavflar haqida ogohlantirdi

**Xulosa:** Texnologiya yetarli emas — raqamli ta'lim, huquqiy infratuzilma va makroiqtisodiy xavf boshqaruvi zarur.

---

## 3.4.4. Markaziy Bank Raqamli Valyutalari (CBDC)

**CBDC** — an'anaviy naqd pullarning raqamli ekvivalenti, davlat tomonidan kafolatlangan.

### CBDC va Kriptovalyutalarning Qiyosiy Tahlili

| Xususiyat | Kriptovalyutalar | CBDC |
|-----------|-----------------|------|
| Boshqaruv | Markazsizlashgan | Markazlashgan (MB) |
| Kafolat | Hech kimniki emas | Davlat majburiyati |
| Qiymat | Volatil (bozor) | Barqaror (milliy valyuta) |
| Anonimlik | Psevdonim | Cheklangan (davlat nazorati) |
| Texnologiya | Ochiq blokcheyn | Yopiq/Gibrid DLT |
| Maqsad | Muqobil moliya | To'lov modernizatsiyasi |

**Misollar:**
- 🇨🇳 **Xitoy Raqamli Yuani (e-CNY)** — 100 mln+ foydalanuvchi (2026)
- 🇺🇿 **O'zbekiston "Raqamli So'm"** — moliya shaffofligini oshirish, yashirin iqtisodiyotni kamaytirish

---

## 3.5.1. Global Tartibga Solish Trendlari

### AQSh (SEC)
- Kripto-aktivlarni "qimmatli qog'oz" deb hisoblaydi
- **"Xoui testi"** (Howey Test) mezonlarini qo'llaydi
- 2024-2025: yangi yo'riqnomalar bilan shaffoflik oshdi

### Yevropa Ittifoqi (MiCA)
**Markets in Crypto-Assets** — dunyo uchun "oltin standart":
- Kripto-aktivlarni aniq klassifikatsiyalash
- CASP (xizmat ko'rsatuvchi provayderlar) litsenziyalash
- Iste'molchilar xavfsizligi
- Yagona huquqiy makon

### Xitoy
- 2021: barcha kripto-tranzaksiyalar noqonuniy, mayning taqiqlangan
- Lekin: blokcheyn texnologiyasi (kriptovalyutasiz) qo'llaniladi
- Davlat nazoratidagi e-CNY va BSN rivojlantirilmoqda

---

## 3.5.2. O'zbekistonda Kripto-Aktivlar: NAPP Roli

**Istiqbolli Loyihalar Agentligi (NAPP)** — O'zbekistonda kripto-aktivlar sohasida yagona vakolatli organ.

**Huquqiy asos:** Prezident Farmoni PF-121 (2022-yil 27-aprel).

**Tartibga solish modeli:** "Regulatory Sandbox" — innovatsion loyihalarni maxsus huquqiy rejim ostida sinovdan o'tkazish.

**Litsenziyalanadigan faoliyat turlari:**
- Kripto-birjalar
- Kripto-do'konlar
- Kripto-depozitariylar
- Mayning-pullar

**Mayning:** Faqat yuridik shaxslar, yashil energiya orqali. Jismoniy shaxslarga taqiqlangan.

**Soliq imtiyozi:** Kripto-aktivlar aylanmasidan olingan daromadlar soliqqa tortilmaydi — xalqaro investorlar uchun jozibador.

---

## 3.5.3. O'zbekistonda Kripto-Aktivlarni Sotib Olish: Amaliy Ko'rsatmalar

**Asosiy qoida:** Barcha operatsiyalar faqat NAPP litsenziyasiga ega milliy provayderlar orqali.

**Provayderlar turlari:**
- **Kripto-birjalar** — kotirovka, savdo, ayirboshlash
- **Kripto-do'konlar** — milliy/chet el valyutasida soddalashtirilgan xarid/sotuv

**Xalqaro integratsiya:**
- O'zbekiston rezidentlariga litsenziyasiz xorijiy birjalarda (Bybit va h.k.) operatsiyalar qonunan **taqiqlangan**
- **Binance** 2025-yil yanvarda O'zbekiston bilan kelishuvga erishdi — milliy qonunchilik talablariga muvofiq ishlash huquqini oldi (CE #0004 litsenziyali mahalliy hamkor orqali)

**AML/CFT:** Barcha operatsiyalar FATF standartlariga muvofiq kuzatiladi.

---

## Xulosa

Blokcheyn texnologiyasi va kriptovalyutalar raqamli iqtisodiyotning fundamental ustuniga aylandi. David Chaumning 1983-yildagi g'oyasidan boshlab, bugungi CBDC, DeFi va global tartibga solish tizimlarigacha bo'lgan yo'l texnologik innovatsiya va ijtimoiy-siyosiy o'zgarishlarning ajralmas birligi ekanligini ko'rsatadi.

**Asosiy xulosalar:**
1. Blokcheyn = ishonchsiz muhitda ishonch (Trustless Trust)
2. PoW → PoS evolyutsiyasi ekologik mas'uliyatni anglatadi
3. CBDC = davlatning raqamli mustaqilligini saqlash vositasi
4. O'zbekiston = mintaqada tartibga solishda peshqadam davlat
5. Moliyaviy inklyuzivlik = kriptovalyutaning ijtimoiy missiyasi`,

### Blok Tuzilishi
Har bir blok quyidagilarni o'z ichiga oladi:
1. **Timestamp** — vaqt belgisi
2. **Data** — tranzaksiya ma'lumotlari
3. **Previous Hash** — oldingi blok heshi
4. **Nonce** — son (mining uchun)
5. **Hash** — joriy blok heshi

### Konsensus Mexanizmlari
- **Proof of Work (PoW)** — Bitcoin ishlatadi
- **Proof of Stake (PoS)** — Ethereum 2.0 ishlatadi
- **Delegated PoS** — EOS, TRON
- **Proof of Authority** — xususiy blockchainlar

## Bitcoin va Kriptovalyutalar

**Satoshi Nakamoto** 2008 yilda Bitcoin whitepaper'ini e'lon qildi.

| Kriptovalyuta | Bosh qisqa | Bozor kapitalizatsiyasi |
|---------------|------------|------------------------|
| Bitcoin | BTC | $1+ trillion |
| Ethereum | ETH | $400+ billion |
| BNB | BNB | $90+ billion |
| Solana | SOL | $70+ billion |

## Smart Kontraktlar

Smart kontrakt — bu blokcheynda saqlanadigan va avtomatik bajariladigan kod.

\`\`\`solidity
// Solidity misoli
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private data;

    function set(uint256 _data) public {
        data = _data;
    }

    function get() public view returns (uint256) {
        return data;
    }
}
\`\`\`

## DeFi va NFT

**DeFi (Decentralized Finance):**
- Markazlashmagan birjalar (DEX)
- Lending protokollari
- Yield farming
- Likvidlik havuzlari

**NFT (Non-Fungible Token):**
- Raqamli san'at
- O'yin ichidagi aktivlar
- Metaverse mulki
- Hujjatlarni tasdiqlash

## O'zbekistonda Blokcheyn

O'zbekiston hukumati blokcheyn texnologiyasini quyidagi sohalarda qo'llashni rejalashtirmoqda:
- Yer kadastri
- Ta'lim diplomlari
- Sud hujjatlari
- Qimmatbaho qog'ozlar bozori

## Xulosa

Blokcheyn texnologiyasi moliyaviy xizmatlar, ta'minot zanjiri, sog'liqni saqlash va boshqa sohalarda inqilob qilmoqda.`,
  },
  {
    id: 'lesson-4',
    topicNumber: 4,
    title: 'Bulut Hisoblash (Cloud Computing)',
    slug: 'bulut-hisoblash',
    description: 'Cloud computing asoslari, xizmat modellari va yetakchi provayderlar',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoDuration: '1:55:00',
    order: 4,
    lectureText: `# Bulut Hisoblash (Cloud Computing)

## Bulut Hisoblash Nima?

Bulut hisoblash — internet orqali hisoblash resurslari (serverlar, saqlash, ma'lumotlar bazalari, tarmoq, dasturiy ta'minot) ni talab bo'yicha taqdim etish texnologiyasidir.

## Xizmat Modellari

### IaaS (Infrastructure as a Service)
Infratuzilma xizmati sifatida.
- **Misol:** AWS EC2, Google Compute Engine, Azure VMs
- **Kim uchun:** IT mutaxassislari, DevOps

### PaaS (Platform as a Service)
Platforma xizmati sifatida.
- **Misol:** Heroku, AWS Elastic Beanstalk, Google App Engine
- **Kim uchun:** Dasturchilar

### SaaS (Software as a Service)
Dasturiy ta'minot xizmati sifatida.
- **Misol:** Gmail, Salesforce, Microsoft 365, Zoom
- **Kim uchun:** Barcha foydalanuvchilar

## Joylashuv Modellari

| Model | Tavsif | Misol |
|-------|---------|-------|
| Public Cloud | Umumiy foydalanish | AWS, Azure, GCP |
| Private Cloud | Tashkilot ichki | VMware, OpenStack |
| Hybrid Cloud | Aralash | AWS Outposts |
| Multi-Cloud | Bir nechta provayder | Ko'pgina katta kompaniyalar |

## Yetakchi Provayderlar

### Amazon Web Services (AWS)
- Bozor ulushi: ~32%
- 200+ xizmat
- 99 ta mavjudlik zonasi

### Microsoft Azure
- Bozor ulushi: ~23%
- Microsoft mahsulotlari integratsiyasi
- Hybrid cloud yechimlar

### Google Cloud Platform (GCP)
- Bozor ulushi: ~12%
- AI/ML xizmatlari ustunligi
- BigQuery, Kubernetes

## Docker va Kubernetes

**Docker** — konteynerizatsiya platformasi:
\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
\`\`\`

**Kubernetes (K8s)** — konteyner orkestratsiyasi:
- Avtomatik masshtablash
- O'z-o'zini tiklash
- Load balancing

## Afzalliklari

1. **Moslashuvchanlik** — resurlarni kerakicha oshirish/kamaytirish
2. **Xarajat tejash** — kapital xarajatlar o'rniga operatsion
3. **Ishonchlillik** — yuqori mavjudlik (99.99% SLA)
4. **Xavfsizlik** — professional himoya

## O'zbekistonda Bulut Hisoblash

**UzCloud** — milliy bulut platforma
- Davlat idoralari uchun
- Ma'lumotlar mahalliy serverda
- O'zbek tilidagi qo'llab-quvvatlash

## Xulosa

Bulut hisoblash zamonaviy IT infratuzilmasining asosiga aylandi. 2026 yilga qadar global bozor $947 milliardga yetishi kutilmoqda.`,
  },
  {
    id: 'lesson-5',
    topicNumber: 5,
    title: 'Kiberxavfsizlik Asoslari',
    slug: 'kiberxavfsizlik-asoslari',
    description: 'Kiberxavfsizlik tahdidlari, himoya usullari va xavfsiz dasturlash',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoDuration: '2:10:00',
    order: 5,
    lectureText: `# Kiberxavfsizlik Asoslari

## Kiberxavfsizlik Nima?

Kiberxavfsizlik — kompyuter tizimlari, tarmoqlar va ma'lumotlarni ruxsatsiz kirish, o'g'irlash yoki buzish kabi kiber tahdidlardan himoya qilish amaliyotidir.

## Asosiy Tahdid Turlari

### Zararli Dasturlar (Malware)
- **Virus** — o'z-o'zini ko'paytiruvchi kod
- **Worm** — tarmoq orqali tarqaluvchi
- **Trojan** — foydali dastur sifatida yashiringan
- **Ransomware** — ma'lumotlarni shifrlab pul talab qiluvchi
- **Spyware** — josuslik dasturi

### Fishing (Phishing)
Aldamchi email, SMS yoki saytlar orqali maxfiy ma'lumot o'g'irlash.

\`\`\`
Fishing emaili misoli:
Mavzu: "Hisobingiz bloklanmoqda!"
"Quyidagi havolaga kiring va ma'lumotlaringizni tasdiqlang..."
⚠️ Bu fishing! Hech qachon bunday xabarlarga ishonmang!
\`\`\`

### SQL Injection
\`\`\`sql
-- Zaiflik misoli
SELECT * FROM users WHERE username = '$input';

-- Hujum: input = "admin' OR '1'='1"
SELECT * FROM users WHERE username = 'admin' OR '1'='1';
-- Barcha foydalanuvchilarni qaytaradi!

-- Himoya: Prepared Statements
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
$stmt->execute([$input]);
\`\`\`

## CIA Triadi

**Maxfiylik (Confidentiality):**
- Ma'lumotlarga faqat vakolatli shaxslar kirishi

**Yaxlitlik (Integrity):**
- Ma'lumotlar o'zgartirilmasligi

**Mavjudlik (Availability):**
- Tizimlar doimo ishlashi

## Kriptografiya

### Simmetrik Shifrlash
\`\`\`
AES-256: Bir kalit (shifrlash va deshifrlash uchun)
Tez, lekin kalit almashish muammosi
\`\`\`

### Asimmetrik Shifrlash
\`\`\`
RSA, ECC: Ochiq va maxfiy kalit juftligi
HTTPS, raqamli imzolar uchun
\`\`\`

### Hashing
\`\`\`
SHA-256: "password" → "5e884898da..."
Bir tomonlama, parollarni saqlash uchun
\`\`\`

## OWASP Top 10

1. Injection
2. Broken Authentication
3. Sensitive Data Exposure
4. XML External Entities
5. Broken Access Control
6. Security Misconfiguration
7. XSS (Cross-Site Scripting)
8. Insecure Deserialization
9. Known Vulnerabilities
10. Insufficient Logging

## Xavfsizlik Amaliyotlari

**Kuchli parol:**
- Kamida 12 belgi
- Katta/kichik harflar, raqamlar, belgilar
- Har bir sayt uchun alohida
- Password manager ishlatish

**Ikki faktorli autentifikatsiya (2FA):**
- SMS kodi
- Authenticator ilovasi (Google Authenticator)
- Apparat kaliti (YubiKey)

## Penetration Testing

**Ethical Hacking** — ruxsat asosida tizimni tekshirish:
1. Reconnaissance (Razvedka)
2. Scanning (Skanerlash)
3. Exploitation (Ekspluatatsiya)
4. Post-Exploitation
5. Reporting (Hisobot)

## Xulosa

Kiberxavfsizlik har bir tashkilot va shaxs uchun muhim masala. 2025 yilda global kiberxavfsizlik bozori $212 milliardga yetdi.`,
  },
  {
    id: 'lesson-6',
    topicNumber: 6,
    title: 'Big Data va Ma\'lumotlar Tahlili',
    slug: 'big-data-malumotlar-tahlili',
    description: 'Big Data texnologiyalari, Hadoop, Spark va ma\'lumotlar tahlili usullari',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoDuration: '1:40:00',
    order: 6,
    lectureText: `# Big Data va Ma'lumotlar Tahlili

## Big Data Nima?

Big Data — an'anaviy ma'lumotlar bazasi vositalari bilan qayta ishlash qiyin bo'lgan katta hajmdagi ma'lumotlar to'plamidir.

## 5V Modeli

| V | Ta'rif | Misol |
|---|---------|-------|
| **Volume** | Hajm | Petabaytlar |
| **Velocity** | Tezlik | Real-time oqimlar |
| **Variety** | Xilma-xillik | Tuzilgan/tuzilmagan |
| **Veracity** | Ishonchlilik | Ma'lumotlar sifati |
| **Value** | Qiymat | Biznes foydasi |

## Hadoop Ekotizimi

**HDFS (Hadoop Distributed File System):**
- Katta fayllarni bloklarga bo'lib saqlash
- Replikatsiya (odatda 3x)
- Yuqori mavjudlik

**MapReduce:**
\`\`\`python
# So'z soni misoli
def map(document):
    for word in document.split():
        emit(word, 1)

def reduce(word, counts):
    emit(word, sum(counts))
\`\`\`

## Apache Spark

Spark — tezkor katta ma'lumotlar qayta ishlash tizimi.

\`\`\`python
from pyspark.sql import SparkSession

spark = SparkSession.builder.appName("Analysis").getOrCreate()

# CSV o'qish
df = spark.read.csv("data.csv", header=True)

# Tahlil
df.groupBy("category").agg({"sales": "sum"}).show()
\`\`\`

**Spark vs Hadoop MapReduce:**
- Spark 100x tezroq (in-memory)
- Real-time va batch qayta ishlash
- ML va graph analytics

## Ma'lumotlar Tahlili Jarayoni

1. **Ma'lumot yig'ish** — API, sensorlar, loglar
2. **Tozalash** — Null qiymatlar, duplikatlar
3. **Transformatsiya** — Normalizatsiya, agregatsiya
4. **Tahlil** — Statistika, ML modellari
5. **Vizualizatsiya** — Grafiklar, dashboard

## Python bilan Tahlil

\`\`\`python
import pandas as pd
import matplotlib.pyplot as plt

# Ma'lumot yuklash
df = pd.read_csv('students.csv')

# Asosiy statistika
print(df.describe())

# Korrelyatsiya
corr = df[['score', 'attendance']].corr()
print(corr)

# Vizualizatsiya
df['score'].hist(bins=20)
plt.title("Ball taqsimoti")
plt.show()
\`\`\`

## Business Intelligence (BI)

**BI vositalari:**
- **Tableau** — interaktiv vizualizatsiya
- **Power BI** — Microsoft ekotizimi
- **Apache Superset** — ochiq kodli
- **Metabase** — oddiy va bepul

## Data Warehouse

**OLTP vs OLAP:**
| | OLTP | OLAP |
|-|------|------|
| Maqsad | Tranzaksiyalar | Tahlil |
| So'rovlar | Oddiy, tez | Murakkab, sekin |
| Ma'lumot | Joriy | Tarixiy |
| Misol | MySQL | Snowflake |

## Xulosa

Big Data va ma'lumotlar tahlili zamonaviy biznesning asosiga aylandi. Data Science mutaxassislari eng talab qilinadigan kasblar ro'yxatida.`,
  },
  {
    id: 'lesson-7',
    topicNumber: 7,
    title: 'Internet of Things (IoT)',
    slug: 'internet-of-things-iot',
    description: 'IoT qurilmalari, protokollari va smart home/city loyihalari',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoDuration: '1:35:00',
    order: 7,
    lectureText: `# Internet of Things (IoT)

## IoT Nima?

Internet of Things (IoT) — internetga ulangan "aqlli" qurilmalar tarmog'i bo'lib, ular bir-biri bilan va bulut bilan ma'lumot almashadi.

## IoT Arxitekturasi

\`\`\`
[Qurilmalar/Sensorlar]
        ↓
[Gateway/Protokollar]
        ↓
[Bulut platformasi]
        ↓
[Ilovalar/Tahlil]
\`\`\`

## Asosiy Protokollar

| Protokol | Qo'llanish | Xususiyat |
|----------|-----------|-----------|
| MQTT | Sensorlar | Yengil, kam kanal |
| CoAP | Constrained devices | REST-ga o'xshash |
| HTTP/REST | Web integratsiya | Keng tarqalgan |
| Zigbee | Smart home | Mesh tarmoq |
| Z-Wave | Home automation | Ishonchli |
| BLE | Yaqin masofa | Mobil qurilmalar |

## Arduino va Raspberry Pi

**Arduino (mikrokontroller):**
\`\`\`cpp
// Harorat o'lchash
#include <DHT.h>
DHT dht(2, DHT22);

void setup() {
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  float temp = dht.readTemperature();
  float hum = dht.readHumidity();
  Serial.print("Harorat: ");
  Serial.print(temp);
  Serial.println("°C");
  delay(2000);
}
\`\`\`

**Raspberry Pi (mini kompyuter):**
- Linux OS
- Python dasturlash
- Wi-Fi, Bluetooth
- Camera moduli

## Smart Home

**Aqlli uy tizimi komponentlari:**
- Aqlli chiroqlar (Philips Hue)
- Termostat (Nest, Ecobee)
- Qulf (August Smart Lock)
- Kamera (Ring, Arlo)
- Ovozli yordamchi (Alexa, Google Home)

## Industrial IoT (IIoT)

**Zavod avtomatizatsiyasi:**
- Predictive Maintenance (oldini oluvchi texnik xizmat)
- Quality Control (sifat nazorati)
- Energy Management (energiya boshqaruvi)
- Supply Chain (ta'minot zanjiri)

## Smart City

**Aqlli shahar komponentlari:**
- Aqlli svetoforlar
- Yashil energiya boshqaruvi
- Chiqindi boshqaruvi
- Suv tizimi monitoring
- Jamoat transporti

**Toshkent Smart City loyihasi:**
- Video kuzatuv tizimi
- Aqlli svetoforlar
- Elektron to'lov tizimlari

## IoT Xavfsizligi

**Asosiy muammolar:**
- Zaif parollar
- Yangilanmagan firmware
- Shifrlanmagan ma'lumotlar
- DDoS hujumlar (Mirai botnet)

**Himoya choralari:**
- Kuchli autentifikatsiya
- Ma'lumotlarni shifrlash (TLS)
- Muntazam yangilashlar
- Tarmoq segmentatsiyasi

## Xulosa

2030 yilga qadar 30 milliarddan ortiq IoT qurilmalar ishlaydi deb kutilmoqda. IoT sog'liqni saqlash, qishloq xo'jaligi, sanoat va transport sohalarini o'zgartirmoqda.`,
  },
  {
    id: 'lesson-8',
    topicNumber: 8,
    title: 'Mobil Dasturlash',
    slug: 'mobil-dasturlash',
    description: 'iOS va Android dasturlash, React Native va Flutter texnologiyalari',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoDuration: '2:05:00',
    order: 8,
    lectureText: `# Mobil Dasturlash

## Mobil Ekotizim

**Bozor ulushi (2024):**
- Android: ~72%
- iOS: ~27%
- Boshqa: ~1%

## Native Dasturlash

### Android (Kotlin/Java)
\`\`\`kotlin
// Kotlin - MainActivity
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val button: Button = findViewById(R.id.btnHello)
        button.setOnClickListener {
            Toast.makeText(this, "Salom Dunyo!", Toast.LENGTH_SHORT).show()
        }
    }
}
\`\`\`

### iOS (Swift)
\`\`\`swift
// Swift - ViewController
import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var label: UILabel!

    override func viewDidLoad() {
        super.viewDidLoad()
        label.text = "Salom iOS!"
    }

    @IBAction func buttonTapped(_ sender: Any) {
        label.text = "Bosildi!"
    }
}
\`\`\`

## Cross-Platform Yechimlar

### React Native
Facebook tomonidan ishlab chiqilgan, JavaScript asosida:

\`\`\`jsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hisoblagich: {count}</Text>
      <Button title="+" onPress={() => setCount(count + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});
\`\`\`

### Flutter
Google tomonidan ishlab chiqilgan, Dart tili:

\`\`\`dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Flutter App')),
        body: Center(
          child: Text(
            'Salom Flutter!',
            style: TextStyle(fontSize: 24),
          ),
        ),
      ),
    );
  }
}
\`\`\`

## Taqqoslash

| Xususiyat | Native | React Native | Flutter |
|-----------|--------|-------------|---------|
| Tezlik | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| UI | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| Rivojlanish | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Xarajat | ⭐ | ⭐⭐⭐ | ⭐⭐⭐ |

## App Store va Google Play

**Nashr qilish jarayoni:**
1. Dasturni sertifikat bilan imzolash
2. Screenshot va tavsif tayyorlash
3. App Store / Play Store'ga yuklash
4. Ko'rib chiqish (review) — 1-3 kun
5. Nashr etish

**Monetizatsiya:**
- Bepul + reklama (AdMob)
- Premium (bir martalik to'lov)
- Obuna (subscription)
- In-app purchases

## Mobil UI/UX Prinsiplari

1. **Barmoq qulay** (44pt minimal touch target)
2. **Bir qo'l bilan ishlash** (thumb zone)
3. **Tez yuklash** (< 3 sekund)
4. **Oflayn ishlash** (offline-first)
5. **Push bildirishnomalar** (o'rinli ishlatish)

## Xulosa

Mobil ilovalar bozori yiliga $500 milliarddan ortiq daromad keltiradi. Flutter va React Native kross-platforma rivojlanishni soddalashtirdi.`,
  },
  {
    id: 'lesson-9',
    topicNumber: 9,
    title: 'Web Dasturlash Texnologiyalari',
    slug: 'web-dasturlash-texnologiyalari',
    description: 'Zamonaviy web texnologiyalar: React, Next.js, Node.js va REST API',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoDuration: '2:15:00',
    order: 9,
    lectureText: `# Web Dasturlash Texnologiyalari

## Web Rivojlanish Tarixi

- **1991** — Tim Berners-Lee HTTP va HTML yaratdi
- **1995** — JavaScript, CSS paydo bo'ldi
- **2004** — AJAX, Web 2.0 davri
- **2010** — Node.js, HTML5
- **2013** — React (Facebook)
- **2016** — Next.js, Vue.js
- **2022** — React Server Components, Edge Computing

## Frontend Texnologiyalar

### HTML5
\`\`\`html
<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>S-Study</title>
</head>
<body>
    <header>
        <nav>Navigatsiya</nav>
    </header>
    <main>
        <article>Kontent</article>
    </main>
    <footer>Footer</footer>
</body>
</html>
\`\`\`

### CSS3 / Tailwind CSS
\`\`\`css
/* CSS o'zgaruvchilar */
:root {
    --primary: #3b82f6;
    --bg: #0a0e1a;
}

/* Flexbox */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

/* Grid */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}
\`\`\`

### React
\`\`\`jsx
import { useState, useEffect } from 'react';

function CourseCard({ title, students, rating }) {
    const [isEnrolled, setIsEnrolled] = useState(false);

    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{students} talaba</p>
            <p>Reyting: {rating}/5</p>
            <button onClick={() => setIsEnrolled(!isEnrolled)}>
                {isEnrolled ? 'Bekor qilish' : "Ro'yxatdan o'tish"}
            </button>
        </div>
    );
}
\`\`\`

## Next.js 14

**App Router:**
\`\`\`tsx
// app/courses/[id]/page.tsx
interface Props {
    params: { id: string }
}

export default async function CoursePage({ params }: Props) {
    const course = await getCourse(params.id);

    return (
        <main>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
        </main>
    );
}
\`\`\`

**Server Actions:**
\`\`\`tsx
async function submitTest(formData: FormData) {
    'use server'
    const answers = formData.getAll('answer');
    const result = await gradeTest(answers);
    redirect(\`/results/\${result.id}\`);
}
\`\`\`

## Backend: Node.js va Express

\`\`\`javascript
const express = require('express');
const app = express();

app.use(express.json());

// REST API
app.get('/api/courses', async (req, res) => {
    const courses = await db.find('courses');
    res.json({ success: true, data: courses });
});

app.post('/api/tests/submit', async (req, res) => {
    const { userId, answers } = req.body;
    const result = await gradeTest(userId, answers);
    res.json({ success: true, result });
});

app.listen(3000, () => console.log('Server ishlamoqda'));
\`\`\`

## Ma'lumotlar Bazalari

**SQL (PostgreSQL, MySQL):**
\`\`\`sql
CREATE TABLE students (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    student_id VARCHAR(20),
    created_at TIMESTAMP DEFAULT NOW()
);

SELECT s.name, AVG(t.percentage) as avg_score
FROM students s
JOIN test_results t ON s.id = t.student_id
GROUP BY s.name
ORDER BY avg_score DESC;
\`\`\`

**NoSQL (MongoDB):**
\`\`\`javascript
// Document misoli
{
  "_id": "ObjectId(...)",
  "studentId": "U12345",
  "name": "Ali Valiyev",
  "progress": {
    "lesson1": { "watched": true, "score": 85 },
    "lesson2": { "watched": false, "score": null }
  }
}
\`\`\`

## REST API Dizayn

**HTTP metodlari:**
- GET /api/courses — barcha kurslar
- GET /api/courses/:id — bitta kurs
- POST /api/courses — yangi kurs
- PUT /api/courses/:id — yangilash
- DELETE /api/courses/:id — o'chirish

**Status kodlar:**
- 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Server Error

## Xulosa

Web dasturlash tezkor rivojlanmoqda. Next.js, TypeScript, Tailwind CSS zamonaviy web ilovalar uchun standartga aylandi.`,
  },
  {
    id: 'lesson-10',
    topicNumber: 10,
    title: 'Agile va DevOps Metodologiyalari',
    slug: 'agile-devops-metodologiyalari',
    description: 'Agile, Scrum, DevOps va CI/CD jarayonlari',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoDuration: '1:45:00',
    order: 10,
    lectureText: `# Agile va DevOps Metodologiyalari

## Waterfall vs Agile

**Waterfall (an'anaviy):**
\`\`\`
Tahlil → Dizayn → Ishlab chiqish → Test → Deploy
(6-12 oy)
\`\`\`

**Agile (zamonaviy):**
\`\`\`
Sprint 1 (2 hafta): Plan → Dev → Test → Deploy
Sprint 2 (2 hafta): Plan → Dev → Test → Deploy
...
(Iterativ, moslashuvchan)
\`\`\`

## Agile Manifesti (2001)

**Qadriyatlar:**
1. Jarayonlar va vositalar ustida **shaxslar va o'zaro munosabatlar**
2. Hujjatlar ustida **ishlaydigan dasturiy ta'minot**
3. Shartnoma muzokaralari ustida **mijoz hamkorligi**
4. Rejaga amal qilish ustida **o'zgarishlarga javob berish**

## Scrum Framework

**Rollar:**
- **Product Owner** — mahsulot egasi
- **Scrum Master** — jarayon boshqaruvchisi
- **Development Team** — ishlab chiquvchilar (3-9 kishi)

**Hodisalar:**
1. **Sprint Planning** — sprint rejalashtirish (4 soat)
2. **Daily Standup** — kunlik uchrashuv (15 daqiqa)
3. **Sprint Review** — natijalarni ko'rsatish
4. **Sprint Retrospective** — jarayonni takomillashtirish

**Artefaktlar:**
- **Product Backlog** — barcha vazifalar ro'yxati
- **Sprint Backlog** — joriy sprint vazifalari
- **Increment** — ishlaydigan mahsulot versiyasi

## Kanban

Vizual ish boshqarish tizimi:

\`\`\`
| To Do | In Progress | Review | Done |
|-------|-------------|--------|------|
| Task1 | Task3       | Task5  | Task6|
| Task2 | Task4       |        | Task7|
\`\`\`

**WIP limiti:** In Progress ustunda maksimal 3 ta vazifa.

## DevOps

DevOps — Development va Operations jamoalarini birlashtiruvchi madaniyat va amaliyotlar to'plami.

### DevOps Siklasi

\`\`\`
Plan → Code → Build → Test → Release → Deploy → Operate → Monitor
                ←————————————————————————————————————————————————
\`\`\`

## CI/CD Pipeline

**GitHub Actions misoli:**
\`\`\`yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to Vercel
        run: vercel --prod
\`\`\`

## Vositalar

| Kategoriya | Vositalar |
|-----------|---------|
| Version Control | Git, GitHub, GitLab |
| CI/CD | Jenkins, GitHub Actions, CircleCI |
| Konteyner | Docker, Kubernetes |
| Monitoring | Grafana, Prometheus, DataDog |
| IaC | Terraform, Ansible |

## Git Workflow

\`\`\`bash
# Feature branch yaratish
git checkout -b feature/login-page

# O'zgarishlarni saqlash
git add .
git commit -m "feat: add login page"

# Pull Request
git push origin feature/login-page
# GitHub'da PR ochish → Review → Merge
\`\`\`

## Xulosa

Agile va DevOps amaliyotlari dasturiy ta'minot sifatini oshiradi va bozorga chiqish vaqtini qisqartiradi. Zamonaviy IT kompaniyalarining 90%+ Agile metodologiyasidan foydalanadi.`,
  },
  {
    id: 'lesson-11',
    topicNumber: 11,
    title: 'Metaverse va Virtual Reallik',
    slug: 'metaverse-virtual-reallik',
    description: 'VR, AR, MR texnologiyalari va Metaverse konsepsiyasi',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoDuration: '1:30:00',
    order: 11,
    lectureText: `# Metaverse va Virtual Reallik

## Virtual Reallik (VR) Nima?

Virtual Reallik — foydalanuvchini to'liq sun'iy muhitga g'arq qiladigan texnologiya. VR shlemi (headset) yordamida 360° muhitni his qilish mumkin.

## XR Spektri

\`\`\`
Haqiqiy dunyo ←————————————→ Virtual dunyo
    AR          MR          VR
(Augmented) (Mixed)    (Virtual)
\`\`\`

**AR (Augmented Reality) — Kengaytirilgan reallik:**
- Haqiqiy dunyoga raqamli elementlar qo'shish
- Misol: Pokemon GO, IKEA Place, Snapchat filtrlari

**MR (Mixed Reality) — Aralash reallik:**
- Raqamli va haqiqiy ob'ektlar bir-biri bilan ta'sirlanadi
- Misol: Microsoft HoloLens

**VR (Virtual Reality) — Virtual reallik:**
- To'liq virtual muhit
- Misol: Meta Quest, PlayStation VR, Valve Index

## Qurilmalar

| Qurilma | Turi | Narx |
|---------|------|------|
| Meta Quest 3 | Standalone VR | $499 |
| Apple Vision Pro | Spatial Computing | $3,499 |
| PlayStation VR2 | Console VR | $549 |
| HTC Vive Pro 2 | PC VR | $799 |
| Microsoft HoloLens 2 | Enterprise MR | $3,500 |

## Metaverse

Mark Zuckerberg 2021 yilda "Metaverse" kontsepsiyasini e'lon qildi.

**Metaverse xususiyatlari:**
- Doimiy virtual dunyo (24/7 ishlaydi)
- Avatar orqali mavjudlik
- Raqamli iqtisodiyot (NFT, kriptovalyuta)
- Ijtimoiy o'zaro ta'sir
- Cross-platform

**Platformalar:**
- Meta Horizon Worlds
- Roblox
- Fortnite (Epic Games)
- Decentraland
- The Sandbox

## Ta'limdagi VR

**VR ta'limning afzalliklari:**
- Xavfli muhitni simulyatsiya qilish (jarrohlik, uchish)
- Interaktiv o'rganish
- Geografiya o'rgatish (virtual sayohat)
- Tarix (virtual muzey)

**Misol — Stanford VR laboratoriyasi:**
- Virtual anatomiya darslari
- Kimyo laboratoriyasi
- Fizika tajribalari

## VR Dasturlash

**Unity bilan VR:**
\`\`\`csharp
using UnityEngine;
using UnityEngine.XR;

public class VRController : MonoBehaviour
{
    void Update()
    {
        // O'ng qo'l controller
        InputDevice rightHand = InputDevices.GetDeviceAtXRNode(
            XRNode.RightHand
        );

        bool triggerPressed;
        rightHand.TryGetFeatureValue(
            CommonUsages.triggerButton,
            out triggerPressed
        );

        if (triggerPressed)
        {
            GrabObject();
        }
    }
}
\`\`\`

## O'zbekistonda XR

**Qo'llanilishi:**
- Ta'lim: Virtual laboratoriyalar (bir necha universitetda)
- Arxitektura: Virtual bino loyihalashtirish
- Turizm: Virtual Samarqand, Buxoro
- Tibbiyot: Jarrohlik simulyatori

## Kelajak

2030 yilga qadar:
- VR/AR bozori $250 milliard
- Global Metaverse bozori $800 milliard
- 5G va edge computing VR sifatini oshiradi

## Xulosa

VR/AR/MR texnologiyalari ta'lim, tibbiyot, arxitektura, o'yin va biznes sohalarini o'zgartirmoqda. Metaverse internet evolyutsiyasining keyingi bosqichi sifatida ko'rilmoqda.`,
  },
  {
    id: 'lesson-12',
    topicNumber: 12,
    title: 'Raqamli Marketing va E-Commerce',
    slug: 'raqamli-marketing-ecommerce',
    description: 'SEO, SMM, content marketing va elektron tijorat strategiyalari',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoDuration: '1:50:00',
    order: 12,
    lectureText: `# Raqamli Marketing va E-Commerce

## Raqamli Marketing Nima?

Raqamli marketing — internet va raqamli texnologiyalar orqali mahsulot va xizmatlarni targ'ib qilish.

## Asosiy Kanallar

### SEO (Search Engine Optimization)
Qidiruv tizimlarida yuqori o'rin egallash.

**On-page SEO:**
\`\`\`html
<title>Toshkent IT kurslari | Best Coding Bootcamp</title>
<meta name="description" content="TATU talabalariga...">
<h1>Raqamli Texnologiyalar Kursi</h1>

<!-- Tuzilgan ma'lumot -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Raqamli Texnologiyalar",
  "provider": "TATU"
}
</script>
\`\`\`

**Off-page SEO:**
- Backlink qurilishi
- Ijtimoiy signallar
- Domain Authority

### SMM (Social Media Marketing)

**Platformalar va auditoriya:**
| Platform | Auditoriya | Kontent turi |
|----------|-----------|-------------|
| Instagram | 18-35 yosh | Rasm, Stories, Reels |
| Telegram | Barcha | Matn, kanal, guruh |
| YouTube | Barcha | Video |
| LinkedIn | Professionalslar | Kasbiy kontent |
| TikTok | 16-24 yosh | Qisqa video |

### Email Marketing

\`\`\`html
<!-- Email shablon -->
<table width="600" cellpadding="0">
  <tr>
    <td bgcolor="#0a0e1a" style="padding: 40px; text-align: center;">
      <h1 style="color: #3b82f6;">S-Study</h1>
      <h2 style="color: #ffffff;">Yangi kurs boshlandi!</h2>
      <p style="color: #94a3b8;">Raqamli Texnologiyalar kursiga...</p>
      <a href="..." style="background: #3b82f6; padding: 12px 24px; color: white; border-radius: 8px;">
        Boshlash
      </a>
    </td>
  </tr>
</table>
\`\`\`

### Content Marketing

**Kontent turlari:**
- Blog maqolalari
- Infografiklar
- Podkastlar
- Webinarlar
- Case studylar

## E-Commerce

**O'zbekistondagi e-commerce platformalar:**
- **Uzum** — yetakchi marketplace
- **Olcha** — mahalliy platforma
- **Sello** — B2B platforma

**Xalqaro platformalar:**
- Amazon
- AliExpress / Alibaba
- eBay

## Funnel (Voronka) Marketing

\`\`\`
Xabardorlik (Awareness)
        ↓
Qiziqish (Interest)
        ↓
Istak (Desire)
        ↓
Harakat (Action)
        ↓
Sodiqlik (Loyalty)
\`\`\`

## Tahlil va Metrikalar

**Google Analytics 4:**
- Foydalanuvchilar soni
- Seanslar
- Bounce rate
- Konversiya
- LTV (Lifetime Value)

**A/B Testing:**
\`\`\`
Variant A: "Bepul ro'yxatdan o'ting"
Variant B: "30 kun bepul sinab ko'ring"

Natija: B variant 23% ko'proq konversiya
\`\`\`

## Reklama Tizimlari

**Google Ads:**
- Search (Qidiruv reklamasi)
- Display (Banner reklamasi)
- YouTube reklamasi
- Shopping (Tovar reklamasi)

**Meta Ads (Facebook/Instagram):**
- Auditoriya targetingi
- Retargeting (qayta nishon)
- Lookalike (o'xshash auditoriya)

## Xulosa

Raqamli marketing an'anaviy marketingga nisbatan 60% arzonroq va o'lchovli natijalar beradi. O'zbekistonda raqamli reklama bozori yiliga 40% o'sib bormoqda.`,
  },
  {
    id: 'lesson-13',
    topicNumber: 13,
    title: '5G va Kelajak Aloqa Texnologiyalari',
    slug: '5g-kelajak-aloqa-texnologiyalari',
    description: '5G texnologiyasi, imkoniyatlari va 6G kelajagi',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoDuration: '1:25:00',
    order: 13,
    lectureText: `# 5G va Kelajak Aloqa Texnologiyalari

## Uyali Aloqa Evolyutsiyasi

\`\`\`
1G (1980s) → 2G (1990s) → 3G (2000s) → 4G/LTE (2010s) → 5G (2019+) → 6G (2030s)
Ovoz      SMS/GPRS    Internet   Mobil video   Ultra-tez    AI-integratsiya
\`\`\`

## 5G Xususiyatlari

| Ko'rsatkich | 4G LTE | 5G |
|-------------|--------|-----|
| Maksimal tezlik | 100 Mbps | 20 Gbps |
| Kechikish | 50ms | 1ms |
| Zichlik | 4,000/km² | 1,000,000/km² |
| Energiya | - | 90% kam |

## 5G Arxitekturasi

**Millimeter Wave (mmWave):**
- Yuqori chastota (24-100 GHz)
- Juda tez, lekin qisqa masofa
- Shahar markazlari, stadionlar

**Sub-6 GHz:**
- O'rta chastota
- Muvozanat tezlik/qamrov
- Ko'pgina 5G tarmoqlari

**Low Band (<1 GHz):**
- Keng qamrov
- Sekinroq, lekin uzoq masofa
- Qishloq joylari

## 5G Slicing (Tarmoq bo'limlash)

\`\`\`
Bitta fizik tarmoq → Ko'p virtual tarmoq:

┌─────────────────────────────┐
│     Fizik 5G Tarmoq         │
├─────────┬──────────┬────────┤
│ Tibbiyot│ Avtomobil│  IoT   │
│ (1ms)   │ (2ms)   │(10ms)  │
└─────────┴──────────┴────────┘
\`\`\`

## 5G Qo'llanilishi

**Autonomous Vehicles (Avtonom avtomobillar):**
- Real-time harita ma'lumotlari
- V2V (vehicle-to-vehicle) aloqa
- 1ms kechikish — hayot xavfsizligi

**Remote Surgery (Masofaviy jarrohlik):**
- Robotik qo'llar masofadan boshqaruv
- Ultra-past kechikish zarur
- COVID davrida Xitoyda qo'llanildi

**Smart Manufacturing:**
- Real-time monitoring
- Predictive maintenance
- Autonomous robots
- Digital twins

**AR/VR:**
- Cloud rendering
- 8K 360° video streaming
- Real-time collaboration

## O'zbekistonda 5G

**Joriy holat:**
- 4G qamrovi: ~75% aholi
- 5G: pilot loyihalar (Toshkent)
- 2025-2026: tijorat 5G tarmoqlari

**Operatorlar:**
- Ucell
- Beeline Uzbekistan
- UzMobile
- Perfectum Mobile

## 6G — Kelajak

**Kutilayotgan xususiyatlar (2030+):**
- Tezlik: 1 Tbps (1000 Gbps)
- Kechikish: 0.1ms
- Terahertz chastotalari
- AI-integratsiyalangan tarmoq
- Yer-sun'iy yo'ldosh entegratsiyasi

## Starlink va Sayyoraviy Internet

Elon Mask'ning SpaceX kompaniyasi:
- 6,000+ sun'iy yo'ldosh
- Global internet qamrovi
- O'zbekistonda 2023 yildan mavjud
- Narx: ~$120/oy

## Xulosa

5G inqilob faqat tezroq telefon emas — u sanoat, tibbiyot, transport va shaharlarda fundamental o'zgarishlar keltirib chiqaradi. 2027 yilga qadar 1.7 milliard 5G foydalanuvchi kutilmoqda.`,
  },
  {
    id: 'lesson-14',
    topicNumber: 14,
    title: 'Quantum Computing (Kvant Hisoblash)',
    slug: 'quantum-computing-kvant-hisoblash',
    description: 'Kvant hisoblash asoslari, qubits va amaliy qo\'llanilishi',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoDuration: '1:55:00',
    order: 14,
    lectureText: `# Quantum Computing (Kvant Hisoblash)

## Klassik vs Kvant Kompyuter

**Klassik kompyuter:**
- Bit: 0 yoki 1
- Tranzistorlar
- Deterministic

**Kvant kompyuter:**
- Qubit: 0, 1, yoki superpozitsiya
- Kvant hodisalari
- Probabilistic

## Kvant Mexanikasi Asoslari

### Superpozitsiya
\`\`\`
Klassik bit:  0 YOKI 1
Kvant qubit:  0 VA 1 (bir vaqtda!)

Katning ölü/tirik misoli:
Qubit → kuzatilgunga qadar 0 ham, 1 ham
\`\`\`

### Entanglement (Chirmashish)
Ikki qubit bir-biri bilan bog'lanadi. Birini o'lchash ikkinchisini darhol belgilaydi — masofadan qat'i nazar.

### Interference (Interferensiya)
To'g'ri javoblar ehtimolini oshirish, noto'g'rilarini kamaytirish.

## Kvant Qoqalovchanligi (Decoherence)

**Muammo:** Qubitlar atrof-muhit ta'sirida tez buziladi.

**Yechim:**
- Ultra-past harorat (-273°C)
- Elektromagnit ekranlash
- Xato tuzatish kodlari

## Kvant Algoritmlari

### Shor Algoritmi
- Katta sonlarni asosiy ko'paytuvchilarga ajratadi
- RSA shifrlashni buzishi mumkin!
- Klassik: eksponensial vaqt
- Kvant: polinomial vaqt

### Grover Algoritmi
- Tartibsiz ma'lumotlar bazasida qidirish
- Klassik: O(N)
- Kvant: O(√N)

### Quantum Machine Learning
\`\`\`
Klassik ML: Haftalar
Quantum ML: Soatlar
\`\`\`

## Kvant Dasturlash

**Qiskit (IBM):**
\`\`\`python
from qiskit import QuantumCircuit, transpile
from qiskit_aer import Aer

# 2 qubitli sxema
qc = QuantumCircuit(2, 2)

# Hadamard qopqog'i - superpozitsiya
qc.h(0)

# CNOT qopqog'i - entanglement
qc.cx(0, 1)

# O'lchash
qc.measure([0, 1], [0, 1])

# Simulyator
simulator = Aer.get_backend('qasm_simulator')
job = transpile(qc, simulator)
result = simulator.run(job).result()

counts = result.get_counts(qc)
print(counts)  # {'00': 512, '11': 512}
\`\`\`

## Yetakchi Kompaniyalar

| Kompaniya | Qubitlar (2024) | Texnologiya |
|-----------|-----------------|-------------|
| IBM | 1,000+ | Superconducting |
| Google | 1,000+ | Superconducting |
| IonQ | 35 (high quality) | Ion Trap |
| Microsoft | 8 (topological) | Topological |
| D-Wave | 5,000+ | Quantum Annealing |

## Qo'llanilishi

**Dori-darmon kashfiyoti:**
- Molekular simulyatsiya
- Yangi materiallar
- COVID vaksina (potensial)

**Moliyaviy optimizatsiya:**
- Portfolio optimizatsiyasi
- Risk tahlili
- Fraud aniqlash

**Logistika:**
- Marshrut optimizatsiyasi
- Ta'minot zanjiri
- Traffic management

**Kriptografiya:**
- Post-quantum kriptografiya
- NIST standartlari: CRYSTALS-Kyber, CRYSTALS-Dilithium

## Quantum Supremacy

2019: Google Sycamore processorni e'lon qildi:
- 200 sekund da vazifa bajardi
- Klassik superkompyuter: 10,000 yil!

## Xulosa

Kvant hisoblash klassik kompyuterlar hal qila olmagan muammolarni yecholadi. 2030-2040 yillarda amaliy kvant kompyuterlar tibbiyot, logistika va moliyani o'zgartiradi.`,
  },
  {
    id: 'lesson-15',
    topicNumber: 15,
    title: 'Raqamli Transformatsiya Strategiyasi',
    slug: 'raqamli-transformatsiya-strategiyasi',
    description: 'Tashkilotlarda raqamli transformatsiya jarayoni, yetakchilik va kelajak',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoDuration: '1:40:00',
    order: 15,
    lectureText: `# Raqamli Transformatsiya Strategiyasi

## Raqamli Transformatsiya Nima?

Raqamli transformatsiya — tashkilotning barcha sohalari va faoliyatida raqamli texnologiyalarni fundamental tarzda qo'llash jarayoni.

> "Raqamli transformatsiya — bu faqat texnologiya haqida emas. Bu madaniyat, jarayonlar va odamlar haqida." — Satya Nadella, Microsoft CEO

## Transformatsiya Bosqichlari

### 1-bosqich: Raqamlashtirish (Digitization)
Analog → Raqamli
- Qog'oz hujjatlar → PDF
- Analog telefon → VoIP
- An'anaviy kassalar → POS terminal

### 2-bosqich: Raqamli jarayonlar (Digitalization)
Mavjud jarayonlarni raqamlashtirish
- ERP tizimlari joriy etish
- Onlayn xizmatlar
- CRM tizimi

### 3-bosqich: Raqamli transformatsiya
Biznes modelini o'zgartirish
- Platform iqtisodiyoti
- Data-driven qarorlar
- Ekotizim yaratish

## Transformatsiya Modeli (McKinsey)

\`\`\`
Strategiya
    ↓
Tashkilot va Madaniyat
    ↓
Texnologiya va Ma'lumotlar
    ↓
O'lchov va Boshqaruv
\`\`\`

## Asosiy Muvaffaqiyat Omillari

### 1. Yetakchilik
- CEO ishtiroki
- C-suite ittifoqi
- Chief Digital Officer (CDO)

### 2. Madaniyat
- Eksperimentga tayyor
- Muvaffaqiyatsizlikdan o'rganish
- Agile fikrlash

### 3. Iste'dod
- Raqamli ko'nikmalar
- Qayta o'qitish (reskilling)
- Tashqi ekspertlar

### 4. Texnologiya
- Bulut infratuzilmasi
- API strategiyasi
- Ma'lumotlar boshqaruvi

### 5. Mijoz yo'nalishi
- Customer journey mapping
- Personalizatsiya
- Omnichannel tajriba

## Muvaffaqiyatli Misollar

### Netflix
- DVD ijara → Streaming
- Kontentni raqamlashtirish
- AI-asosida tavsiyalar
- **Natija:** Blockbuster bankrot, Netflix $150 milliard

### Amazon
- Kitob do'koni → Koinot do'koni → AWS
- Prime ekotizimi
- **Natija:** Eng qimmatli kompaniyalardan biri

### HSBC Bank
- Digital first strategiyasi
- Mobile banking
- AI-asosida fraud aniqlash
- **Natija:** 40% xarajat tejash

## O'zbekiston Raqamli Transformatsiyasi

**"Raqamli O'zbekiston 2030" strategiyasi:**

1. **E-hukumat** — davlat xizmatlarini onlaynlashtirish (my.gov.uz)
2. **IT ta'lim** — 1 million dasturchi tayyorlash
3. **IT eksport** — $5 milliard yillik eksport
4. **Smart shaharlar** — Toshkent, Samarqand
5. **Raqamli infratuzilma** — fiber optik, 5G

**Muvaffaqiyatlar:**
- 500+ davlat xizmati onlayn
- IT parklar: 4 ta (Toshkent, Nukus, Urganch, Namangan)
- IT eksport 2023: $600 million

## Xavflar va To'siqlar

**Texnik qarzdorlik:**
- Eski tizimlar
- Legacy kod
- Integratsiya muammolari

**Insoniy to'siqlar:**
- O'zgarishga qarshilik
- Ko'nikmalar yetishmovchiligi
- Madaniyat o'zgarishi

**Ma'lumotlar:**
- Sifatsiz ma'lumotlar
- Silos (izolyatsiya)
- Maxfiylik muammolari

## Kelajak: Texnologiya Trendlari 2025-2030

| Texnologiya | Bozor | Qo'llanish |
|-------------|-------|-----------|
| Generative AI | $1.3 trillion | Kontent, kod, dizayn |
| Quantum Computing | $450 billion | Ilmiy tadqiqot, moliya |
| Spatial Computing | $1.7 trillion | AR/VR, metaverse |
| Autonomous Systems | $2 trillion | Transport, sanoat |
| Biotechnology | $3.5 trillion | Tibbiyot, qishloq xo'jaligi |

## Xulosa: Raqamli Lider Sifatlari

1. **Texnologik savodxonlik** — asosiy texnologiyalarni tushunish
2. **Agile fikrlash** — tez moslashish
3. **Ma'lumotlarga asoslangan qarorlar**
4. **Innovatsiya madaniyati** yaratish
5. **Global perspektiva** — dunyo trendlarini kuzatish

> "Kelajak raqamli bo'ladi yoki bo'lmaydi" — Satya Nadella

S-STUDY platformasini muvaffaqiyatli tugatganingiz bilan tabriklaymiz! Bu kurs sizga raqamli texnologiyalar sohasida kuchli poydevor yaratdi.`,
  },
]

export const QUESTIONS: Question[] = [
  // Mavzu 1: Raqamli Iqtisodiyot Asoslari
  {
    id: 'q1-1',
    lessonId: 'lesson-1',
    topicNumber: 1,
    text: 'Raqamli iqtisodiyotda qaysi resurs "yangi neft" deb ataladi?',
    options: ['Neft va gaz', "Ma'lumotlar (Data)", 'Oltin', 'Elektr energiyasi'],
    correctIndex: 1,
    explanation: "Zamonaviy iqtisodiyotda ma'lumotlar eng qimmatli resurs hisoblanadi va \"yangi neft\" deb ataladi.",
  },
  {
    id: 'q1-2',
    lessonId: 'lesson-1',
    topicNumber: 1,
    text: 'Quyidagi qaysi kompaniya platforma iqtisodiyotining namunasidir?',
    options: ['General Motors', 'ExxonMobil', 'Uber', 'Nestle'],
    correctIndex: 2,
    explanation: 'Uber transport platformasi sifatida platforma iqtisodiyotining klassik namunasidir.',
  },
  {
    id: 'q1-3',
    lessonId: 'lesson-1',
    topicNumber: 1,
    text: 'Raqamli iqtisodiyotning uchinchi bosqichi (2010-hozir) qaysi texnologiyalar bilan bog\'liq?',
    options: ['Internet va elektron tijorat', 'Mobil internet va ijtimoiy tarmoqlar', "Sun'iy intellekt, Big Data, IoT", 'Telegraph va telefon'],
    correctIndex: 2,
    explanation: "2010 yildan boshlab sun'iy intellekt, Big Data va IoT texnologiyalari raqamli iqtisodiyotning asosiga aylandi.",
  },
  {
    id: 'q1-4',
    lessonId: 'lesson-1',
    topicNumber: 1,
    text: "O'zbekistonda raqamli iqtisodiyotni rivojlantirishning qaysi yo'nalishi to'g'ri ko'rsatilgan?",
    options: ['Faqat neft eksportini ko\'paytirish', 'E-hukumat tizimini kengaytirish va IT-ta\'limni rivojlantirish', 'Raqamli texnologiyalardan voz kechish', 'Faqat an\'anaviy savdoni rivojlantirish'],
    correctIndex: 1,
    explanation: "O'zbekiston E-hukumat, IT-parklar, IT-ta'lim va raqamli to'lovlarni kengaytirish bo'yicha strategiyani amalga oshirmoqda.",
  },
  {
    id: 'q1-5',
    lessonId: 'lesson-1',
    topicNumber: 1,
    text: 'Raqamli transformatsiya deganda nima tushuniladi?',
    options: ["Kompyuter sotib olish", "Tashkilotning an'anaviy modeldan raqamli texnologiyalarga asoslangan modelga o'tishi", 'Internet ulanish tezligini oshirish', 'Ijtimoiy tarmoqlarda sahifa ochish'],
    correctIndex: 1,
    explanation: "Raqamli transformatsiya — kompaniya yoki tashkilotning an'anaviy biznes modelidan raqamli texnologiyalarga asoslangan modelga o'tish jarayoni.",
  },

  // Mavzu 2: Sun'iy Intellekt va Machine Learning
  {
    id: 'q2-1',
    lessonId: 'lesson-2',
    topicNumber: 2,
    text: "Nazoratli o'rganish (Supervised Learning) qanday ma'lumotlardan foydalanadi?",
    options: ['Belgilanmagan ma\'lumotlar', 'Belgilangan ma\'lumotlar (labeled data)', 'Tasodifiy ma\'lumotlar', 'Hech qanday ma\'lumot kerak emas'],
    correctIndex: 1,
    explanation: "Nazoratli o'rganish belgilangan (labeled) ma'lumotlardan foydalanib, prognoz qilishni o'rganadi.",
  },
  {
    id: 'q2-2',
    lessonId: 'lesson-2',
    topicNumber: 2,
    text: 'AlphaGo va OpenAI Five qaysi ML turiga misol bo\'ladi?',
    options: ['Nazoratli o\'rganish', 'Nazorat qilinmagan o\'rganish', 'Mustahkamlash orqali o\'rganish', 'Transfer learning'],
    correctIndex: 2,
    explanation: 'AlphaGo va OpenAI Five mustahkamlash orqali o\'rganish (Reinforcement Learning) texnologiyasidan foydalanadi.',
  },
  {
    id: 'q2-3',
    lessonId: 'lesson-2',
    topicNumber: 2,
    text: 'LLM nima degan qisqartma?',
    options: ['Linux Language Model', 'Large Language Model', 'Local Learning Machine', 'Linear Logical Method'],
    correctIndex: 1,
    explanation: 'LLM — Large Language Model (Katta til modeli), GPT-4, Gemini, Claude kabi modellar bunga misol.',
  },
  {
    id: 'q2-4',
    lessonId: 'lesson-2',
    topicNumber: 2,
    text: 'Qaysi AI turi faqat bitta vazifani bajaradi?',
    options: ['Umumiy AI (General AI)', 'Super AI', 'Toraytirilgan AI (Narrow AI)', 'Kvant AI'],
    correctIndex: 2,
    explanation: 'Toraytirilgan AI (Narrow AI) faqat bitta vazifani bajaradi, masalan yuz tanish yoki spam filtri.',
  },
  {
    id: 'q2-5',
    lessonId: 'lesson-2',
    topicNumber: 2,
    text: 'Deep Learning nima asosida ishlaydi?',
    options: ['Oddiy if-else qoidalar', 'Ko\'p qatlamli neyron tarmoqlar', 'SQL so\'rovlar', 'XML fayllar'],
    correctIndex: 1,
    explanation: 'Deep Learning ko\'p qatlamli neyron tarmoqlarga asoslangan machine learning usuli hisoblanadi.',
  },

  // Mavzu 3: Blokcheyn
  {
    id: 'q3-1',
    lessonId: 'lesson-3',
    topicNumber: 3,
    text: 'Blokcheyn texnologiyasining asosiy xususiyati nima?',
    options: ['Markazlashgan boshqaruv', "Markazlashmagan va o'zgartirib bo'lmaydigan daftar", 'Tezkor ma\'lumot o\'chirish', 'Bitta server tomonidan boshqarish'],
    correctIndex: 1,
    explanation: "Blokcheyn markazlashmagan, o'zgartirib bo'lmaydigan raqamli daftar (ledger) hisoblanadi.",
  },
  {
    id: 'q3-2',
    lessonId: 'lesson-3',
    topicNumber: 3,
    text: 'Bitcoin whitepaper kim tomonidan qachon e\'lon qilindi?',
    options: ['Vitalik Buterin, 2015', 'Satoshi Nakamoto, 2008', 'Elon Musk, 2010', 'Mark Zuckerberg, 2012'],
    correctIndex: 1,
    explanation: 'Bitcoin whitepaper\'i Satoshi Nakamoto tomonidan 2008 yilda e\'lon qilindi.',
  },
  {
    id: 'q3-3',
    lessonId: 'lesson-3',
    topicNumber: 3,
    text: 'Smart kontrakt nima?',
    options: ['Yuridik shartnoma', 'Blokcheynda saqlanadigan va avtomatik bajariladigan kod', 'Bank kartasi', 'Raqamli imzo'],
    correctIndex: 1,
    explanation: 'Smart kontrakt — blokcheynda saqlanadigan va shartlar bajarilganda avtomatik ishga tushadigan kod.',
  },
  {
    id: 'q3-4',
    lessonId: 'lesson-3',
    topicNumber: 3,
    text: 'NFT nima degan qisqartma?',
    options: ['New Financial Technology', 'Non-Fungible Token', 'Network File Transfer', 'National Fund Transfer'],
    correctIndex: 1,
    explanation: 'NFT — Non-Fungible Token, almashtirish mumkin bo\'lmagan raqamli token.',
  },
  {
    id: 'q3-5',
    lessonId: 'lesson-3',
    topicNumber: 3,
    text: 'Ethereum 2.0 qaysi konsensus mexanizmidan foydalanadi?',
    options: ['Proof of Work', 'Proof of Stake', 'Proof of Authority', 'Proof of History'],
    correctIndex: 1,
    explanation: 'Ethereum 2.0 energiya tejamkor Proof of Stake mexanizmiga o\'tdi.',
  },

  // Mavzu 4: Bulut Hisoblash
  {
    id: 'q4-1',
    lessonId: 'lesson-4',
    topicNumber: 4,
    text: 'IaaS nima degan qisqartma?',
    options: ['Internet and Application Service', 'Infrastructure as a Service', 'Integrated Access System', 'Internal Application Software'],
    correctIndex: 1,
    explanation: 'IaaS — Infrastructure as a Service (Infratuzilma xizmati sifatida).',
  },
  {
    id: 'q4-2',
    lessonId: 'lesson-4',
    topicNumber: 4,
    text: 'Gmail qaysi cloud xizmat modeliga misol bo\'ladi?',
    options: ['IaaS', 'PaaS', 'SaaS', 'DaaS'],
    correctIndex: 2,
    explanation: 'Gmail — Software as a Service (SaaS), to\'g\'ridan-to\'g\'ri foydalanuvchiga dasturiy xizmat ko\'rsatadi.',
  },
  {
    id: 'q4-3',
    lessonId: 'lesson-4',
    topicNumber: 4,
    text: 'AWS (Amazon Web Services) global cloud bozorida qancha ulushga ega?',
    options: ['~12%', '~23%', '~32%', '~50%'],
    correctIndex: 2,
    explanation: '2024 yil holatiga ko\'ra AWS global cloud bozorining taxminan 32% ulushiga ega.',
  },
  {
    id: 'q4-4',
    lessonId: 'lesson-4',
    topicNumber: 4,
    text: 'Docker qanday texnologiya?',
    options: ['Dasturlash tili', 'Konteynerizatsiya platformasi', 'Ma\'lumotlar bazasi', 'Brauzer'],
    correctIndex: 1,
    explanation: 'Docker — ilovalarni konteynerga o\'rab, istalgan muhitda ishga tushirish imkonini beruvchi platforma.',
  },
  {
    id: 'q4-5',
    lessonId: 'lesson-4',
    topicNumber: 4,
    text: 'Hybrid Cloud modeli nimani anglatadi?',
    options: ['Faqat public cloud', 'Faqat private cloud', 'Public va private cloud birgalikda', 'Hech qanday cloud yo\'q'],
    correctIndex: 2,
    explanation: 'Hybrid Cloud — public va private cloud infratuzilmalarini birgalikda ishlatish modeli.',
  },

  // Mavzu 5: Kiberxavfsizlik
  {
    id: 'q5-1',
    lessonId: 'lesson-5',
    topicNumber: 5,
    text: 'CIA Triadaning "C" harfi nimani anglatadi?',
    options: ['Complexity (Murakkablik)', 'Confidentiality (Maxfiylik)', 'Connectivity (Ulanish)', 'Compliance (Muvofiqlik)'],
    correctIndex: 1,
    explanation: 'CIA Triadada C — Confidentiality (Maxfiylik), I — Integrity (Yaxlitlik), A — Availability (Mavjudlik).',
  },
  {
    id: 'q5-2',
    lessonId: 'lesson-5',
    topicNumber: 5,
    text: 'Ransomware nima?',
    options: ["Tezkor internet ta'minlovchi dastur", "Ma'lumotlarni shifrlab pul talab qiluvchi zararli dastur", 'Antivirus dastur', 'Tarmoq monitoring vositasi'],
    correctIndex: 1,
    explanation: "Ransomware — qurbonning ma'lumotlarini shifirlab, ularni qaytarish uchun to'lov talab qiluvchi zararli dastur.",
  },
  {
    id: 'q5-3',
    lessonId: 'lesson-5',
    topicNumber: 5,
    text: 'SQL Injection hujumidan himoyalanish uchun qaysi usul tavsiya etiladi?',
    options: ['Kuchli parol ishlatish', 'Prepared Statements (tayyorlangan so\'rovlar) ishlatish', 'Antivirusni yangilash', 'Firewall o\'rnatish'],
    correctIndex: 1,
    explanation: 'SQL Injection hujumidan himoyalanishning eng samarali usuli — Prepared Statements yoki parameterized queries ishlatish.',
  },
  {
    id: 'q5-4',
    lessonId: 'lesson-5',
    topicNumber: 5,
    text: '2FA (ikki faktorli autentifikatsiya) nimani anglatadi?',
    options: ['Ikkita parol kiriting', 'Parol + qo\'shimcha tasdiqlash (SMS, app)', 'Ikkita foydalanuvchi nomi', 'Biometrik va parol'],
    correctIndex: 1,
    explanation: '2FA — parol (birinchi faktor) + qo\'shimcha tasdiqlash (SMS, authenticator app va hokazo - ikkinchi faktor).',
  },
  {
    id: 'q5-5',
    lessonId: 'lesson-5',
    topicNumber: 5,
    text: 'OWASP Top 10 roʻyxatining birinchi oʻrnida qaysi zaiflik turiladi?',
    options: ['XSS', 'SQL Injection', 'Injection', 'Broken Authentication'],
    correctIndex: 2,
    explanation: 'OWASP Top 10 ro\'yxatida birinchi o\'rinda Injection (SQL, NoSQL, Command injection va boshqalar) turiladi.',
  },

  // Mavzu 6: Big Data
  {
    id: 'q6-1',
    lessonId: 'lesson-6',
    topicNumber: 6,
    text: 'Big Data\'ning "5V" modelida "Velocity" nimani anglatadi?',
    options: ['Hajm', 'Tezlik', 'Xilma-xillik', 'Qiymat'],
    correctIndex: 1,
    explanation: 'Velocity — ma\'lumotlar oqimining tezligini bildiradi (real-time ma\'lumotlar).',
  },
  {
    id: 'q6-2',
    lessonId: 'lesson-6',
    topicNumber: 6,
    text: 'Apache Spark Hadoop MapReduce ga nisbatan qanchalik tezroq?',
    options: ['2x', '10x', '100x', '1000x'],
    correctIndex: 2,
    explanation: 'Apache Spark in-memory hisoblash tufayli Hadoop MapReduce ga nisbatan 100x tezroq ishlaydi.',
  },
  {
    id: 'q6-3',
    lessonId: 'lesson-6',
    topicNumber: 6,
    text: 'OLAP tizimi asosan nima uchun ishlatiladi?',
    options: ['Tranzaksiyalarni qayta ishlash', 'Tahlil va hisobotlar', 'Fayllarni saqlash', 'Tarmoqni boshqarish'],
    correctIndex: 1,
    explanation: 'OLAP (Online Analytical Processing) — katta ma\'lumotlarni murakkab so\'rovlar orqali tahlil qilish uchun.',
  },
  {
    id: 'q6-4',
    lessonId: 'lesson-6',
    topicNumber: 6,
    text: 'HDFS (Hadoop Distributed File System) ma\'lumotlarni qanday saqlaydi?',
    options: ['Bitta katta server', 'Bloklarga bo\'lib, replikatsiya bilan tarqatib', 'Bulut serverida', 'Mahalliy diskda'],
    correctIndex: 1,
    explanation: 'HDFS ma\'lumotlarni bloklarga bo\'lib, odatda 3 marta replikatsiya qilgan holda tarqatib saqlaydi.',
  },
  {
    id: 'q6-5',
    lessonId: 'lesson-6',
    topicNumber: 6,
    text: 'Power BI va Tableau qaysi kategoriyaga kiradi?',
    options: ['Dasturlash tillari', 'Business Intelligence (BI) vositalari', 'Ma\'lumotlar bazalari', 'Operatsion tizimlar'],
    correctIndex: 1,
    explanation: 'Power BI va Tableau — Business Intelligence vositalari bo\'lib, ma\'lumotlarni vizualizatsiya qilish uchun ishlatiladi.',
  },

  // Mavzu 7: IoT
  {
    id: 'q7-1',
    lessonId: 'lesson-7',
    topicNumber: 7,
    text: 'MQTT protokoli asosan nima uchun ishlatiladi?',
    options: ['Veb-saytlar uchun', 'IoT sensorlari uchun yengil protokol', 'Video streaming uchun', 'Email yuborish uchun'],
    correctIndex: 1,
    explanation: 'MQTT — IoT sensorlari va qurilmalari uchun mo\'ljallangan yengil, kam kanal talab qiluvchi protokol.',
  },
  {
    id: 'q7-2',
    lessonId: 'lesson-7',
    topicNumber: 7,
    text: 'Arduino va Raspberry Pi o\'rtasidagi asosiy farq nima?',
    options: ['Ikkalasi bir xil', 'Arduino mikrokontroller, Raspberry Pi mini kompyuter', 'Arduino qimmatroq', 'Raspberry Pi faqat sensorlar uchun'],
    correctIndex: 1,
    explanation: 'Arduino — mikrokontroller (oddiy dasturlar uchun), Raspberry Pi — to\'liq operatsion tizimli mini kompyuter.',
  },
  {
    id: 'q7-3',
    lessonId: 'lesson-7',
    topicNumber: 7,
    text: '2030 yilga qadar qancha IoT qurilma ishlaydi deb kutilmoqda?',
    options: ['5 million', '1 milliard', '30 milliard+', '100 milliard'],
    correctIndex: 2,
    explanation: '2030 yilga qadar 30 milliarddan ortiq IoT qurilmalar dunyo bo\'ylab ishlaydi deb kutilmoqda.',
  },
  {
    id: 'q7-4',
    lessonId: 'lesson-7',
    topicNumber: 7,
    text: 'Mirai botnet qanday qurilmalardan tashkil topgan edi?',
    options: ['Kompyuterlar va laptoplar', 'Himoyasiz IoT qurilmalar (kameralar, routerlar)', 'Smartfonlar', 'Serverlar'],
    correctIndex: 1,
    explanation: 'Mirai botnet — zaif parolga ega IoT qurilmalar (IP kameralar, routerlar) ni infektsiya qilgan DDoS hujum tarmog\'i.',
  },
  {
    id: 'q7-5',
    lessonId: 'lesson-7',
    topicNumber: 7,
    text: 'IIoT nima degan qisqartma?',
    options: ['International Internet of Things', 'Industrial Internet of Things', 'Intelligent IoT', 'Integrated IoT'],
    correctIndex: 1,
    explanation: 'IIoT — Industrial Internet of Things (Sanoat Internet of Things), zavod va ishlab chiqarishda qo\'llaniladi.',
  },

  // Mavzu 8: Mobil Dasturlash
  {
    id: 'q8-1',
    lessonId: 'lesson-8',
    topicNumber: 8,
    text: 'Flutter qaysi dasturlash tilida yozilgan?',
    options: ['JavaScript', 'Swift', 'Dart', 'Kotlin'],
    correctIndex: 2,
    explanation: 'Flutter Google tomonidan ishlab chiqilgan bo\'lib, Dart dasturlash tilidan foydalanadi.',
  },
  {
    id: 'q8-2',
    lessonId: 'lesson-8',
    topicNumber: 8,
    text: '2024 yilda Android bozor ulushi taxminan qanchani tashkil etadi?',
    options: ['~27%', '~50%', '~72%', '~90%'],
    correctIndex: 2,
    explanation: '2024 yil holatiga ko\'ra Android global smartfon bozorining taxminan 72% ulushini egallaydi.',
  },
  {
    id: 'q8-3',
    lessonId: 'lesson-8',
    topicNumber: 8,
    text: 'React Native kim tomonidan yaratilgan?',
    options: ['Google', 'Microsoft', 'Facebook (Meta)', 'Apple'],
    correctIndex: 2,
    explanation: 'React Native Facebook (hozir Meta) tomonidan 2015 yilda yaratilgan cross-platform mobil framework.',
  },
  {
    id: 'q8-4',
    lessonId: 'lesson-8',
    topicNumber: 8,
    text: 'Mobil UI dizaynda minimal touch target o\'lchami qancha?',
    options: ['20pt', '30pt', '44pt', '60pt'],
    correctIndex: 2,
    explanation: "Barmoq bilan qulay bosish uchun minimal touch target o'lchami 44pt (Apple HIG) bo'lishi tavsiya etiladi.",
  },
  {
    id: 'q8-5',
    lessonId: 'lesson-8',
    topicNumber: 8,
    text: 'iOS uchun native dasturlash qaysi tilda amalga oshiriladi?',
    options: ['Java', 'Kotlin', 'Swift', 'Go'],
    correctIndex: 2,
    explanation: 'iOS uchun native dasturlash Swift (yoki Objective-C) tilida amalga oshiriladi.',
  },

  // Mavzu 9: Web Dasturlash
  {
    id: 'q9-1',
    lessonId: 'lesson-9',
    topicNumber: 9,
    text: 'HTTP va HTML kim tomonidan yaratilgan?',
    options: ['Bill Gates', 'Tim Berners-Lee', 'Linus Torvalds', 'Dennis Ritchie'],
    correctIndex: 1,
    explanation: 'Tim Berners-Lee 1991 yilda HTTP protokoli va HTML tilini yaratdi va World Wide Web asosini qo\'ydi.',
  },
  {
    id: 'q9-2',
    lessonId: 'lesson-9',
    topicNumber: 9,
    text: 'Next.js 14\'da Server Actions qanday belgilanadi?',
    options: ['"use client"', '"use server"', '"server action"', '"async function"'],
    correctIndex: 1,
    explanation: 'Next.js 14\'da Server Actions funksiya boshida "use server" direktivi bilan belgilanadi.',
  },
  {
    id: 'q9-3',
    lessonId: 'lesson-9',
    topicNumber: 9,
    text: 'REST API\'da yangi resurs yaratish uchun qaysi HTTP metod ishlatiladi?',
    options: ['GET', 'PUT', 'POST', 'DELETE'],
    correctIndex: 2,
    explanation: 'REST API\'da yangi resurs yaratish uchun POST metodi ishlatiladi.',
  },
  {
    id: 'q9-4',
    lessonId: 'lesson-9',
    topicNumber: 9,
    text: 'MongoDB qaysi ma\'lumotlar bazasi turiga kiradi?',
    options: ['Relational (SQL)', 'NoSQL', 'Graph DB', 'Time-series DB'],
    correctIndex: 1,
    explanation: 'MongoDB document-oriented NoSQL ma\'lumotlar bazasi hisoblanadi.',
  },
  {
    id: 'q9-5',
    lessonId: 'lesson-9',
    topicNumber: 9,
    text: 'React kim tomonidan yaratilgan?',
    options: ['Google', 'Microsoft', 'Facebook (Meta)', 'Amazon'],
    correctIndex: 2,
    explanation: 'React JavaScript kutubxonasi Facebook (Meta) tomonidan 2013 yilda yaratilgan.',
  },

  // Mavzu 10: Agile va DevOps
  {
    id: 'q10-1',
    lessonId: 'lesson-10',
    topicNumber: 10,
    text: 'Scrum\'da Sprint qancha davom etadi?',
    options: ['1 kun', '1-4 hafta', '3-6 oy', '1 yil'],
    correctIndex: 1,
    explanation: "Scrum'da Sprint odatda 1-4 hafta davom etadi, eng ko'p 2 haftalik sprintlar qo'llaniladi.",
  },
  {
    id: 'q10-2',
    lessonId: 'lesson-10',
    topicNumber: 10,
    text: 'Daily Standup uchrashuvi qancha vaqt davom etishi kerak?',
    options: ['5 daqiqa', '15 daqiqa', '1 soat', '4 soat'],
    correctIndex: 1,
    explanation: "Daily Standup (kunlik to'siq yo'qotish uchrashuvi) maksimal 15 daqiqa davom etishi kerak.",
  },
  {
    id: 'q10-3',
    lessonId: 'lesson-10',
    topicNumber: 10,
    text: 'CI/CD nima degan qisqartma?',
    options: ['Code Integration / Code Deployment', 'Continuous Integration / Continuous Delivery', 'Cloud Infrastructure / Cloud Development', 'Customer Interface / Customer Delivery'],
    correctIndex: 1,
    explanation: 'CI/CD — Continuous Integration (Uzluksiz integratsiya) va Continuous Delivery/Deployment (Uzluksiz yetkazib berish).',
  },
  {
    id: 'q10-4',
    lessonId: 'lesson-10',
    topicNumber: 10,
    text: 'Agile Manifesti qachon e\'lon qilindi?',
    options: ['1991', '1995', '2001', '2010'],
    correctIndex: 2,
    explanation: 'Agile Manifesti 2001 yilda 17 dasturchi tomonidan imzolandi.',
  },
  {
    id: 'q10-5',
    lessonId: 'lesson-10',
    topicNumber: 10,
    text: 'Scrum\'da Product Owner vazifasi nima?',
    options: ['Kod yozish', 'Jamoa ruhiyatini oshirish', 'Mahsulot talablari va backlogni boshqarish', 'Serverlarni sozlash'],
    correctIndex: 2,
    explanation: "Product Owner mahsulot egasi sifatida Product Backlog'ni boshqaradi va biznes qiymatini maksimallashtirishga javobgar.",
  },

  // Mavzu 11: Metaverse va VR
  {
    id: 'q11-1',
    lessonId: 'lesson-11',
    topicNumber: 11,
    text: 'AR (Augmented Reality) nima?',
    options: ['To\'liq virtual dunyo', 'Haqiqiy dunyoga raqamli elementlar qo\'shadigan texnologiya', 'Aralash reallik', 'Sun\'iy intellekt'],
    correctIndex: 1,
    explanation: 'AR (Augmented Reality) — haqiqiy dunyo ko\'rinishiga raqamli elementlar qo\'shadigan texnologiya. Misol: Pokemon GO.',
  },
  {
    id: 'q11-2',
    lessonId: 'lesson-11',
    topicNumber: 11,
    text: 'Apple Vision Pro qaysi kategoriyaga kiradi?',
    options: ['Standalone VR', 'Spatial Computing', 'Console VR', 'Mobile AR'],
    correctIndex: 1,
    explanation: "Apple Vision Pro — Spatial Computing (Fazoviy hisoblash) qurilmasi bo'lib, AR va VR imkoniyatlarini birlashtiradi.",
  },
  {
    id: 'q11-3',
    lessonId: 'lesson-11',
    topicNumber: 11,
    text: '"Metaverse" kontsepsiyasini kim e\'lon qildi?',
    options: ['Elon Musk', 'Jeff Bezos', 'Mark Zuckerberg', 'Tim Cook'],
    correctIndex: 2,
    explanation: 'Mark Zuckerberg 2021 yilda Facebook\'ni Meta deb qayta nomlash va Metaverse kontsepsiyasini e\'lon qildi.',
  },
  {
    id: 'q11-4',
    lessonId: 'lesson-11',
    topicNumber: 11,
    text: 'VR (Virtual Reality) texnologiyasida qanday qurilma ishlatiladi?',
    options: ['Aqlli telefon', 'VR shlemi (headset)', 'Smart soat', 'AR ko\'zoynak'],
    correctIndex: 1,
    explanation: "VR tajribasini his qilish uchun VR shlemi (headset) kerak bo'ladi, bu foydalanuvchini to'liq virtual muhitga g'arq qiladi.",
  },
  {
    id: 'q11-5',
    lessonId: 'lesson-11',
    topicNumber: 11,
    text: 'Unity qaysi soha uchun ishlatiladi?',
    options: ['Faqat 2D o\'yinlar', 'Faqat mobil ilovalar', 'O\'yinlar, VR/AR, 3D simulyatsiyalar', 'Faqat veb-saytlar'],
    correctIndex: 2,
    explanation: "Unity — o'yinlar, VR/AR tajribalari, 3D simulyatsiyalar va vizualizatsiyalar uchun keng qo'llaniladigan platforma.",
  },

  // Mavzu 12: Raqamli Marketing
  {
    id: 'q12-1',
    lessonId: 'lesson-12',
    topicNumber: 12,
    text: 'SEO nima?',
    options: ['Ijtimoiy media marketing', 'Qidiruv tizimlarida yuqori o\'rin egallash optimizatsiyasi', 'Email marketing', 'Pullik reklama'],
    correctIndex: 1,
    explanation: "SEO (Search Engine Optimization) — qidiruv tizimlarida (Google, Yandex) saytni organik ravishda yuqori o'ringa olib chiqish.",
  },
  {
    id: 'q12-2',
    lessonId: 'lesson-12',
    topicNumber: 12,
    text: 'O\'zbekistondagi yetakchi e-commerce marketplace qaysi?',
    options: ['Olcha', 'Uzum', 'Sello', 'OLX'],
    correctIndex: 1,
    explanation: "Uzum O'zbekistondagi yetakchi e-commerce marketplace hisoblanadi.",
  },
  {
    id: 'q12-3',
    lessonId: 'lesson-12',
    topicNumber: 12,
    text: 'Marketing voronkasining to\'g\'ri tartibi qaysi?',
    options: ['Harakat → Qiziqish → Xabardorlik → Istak', 'Xabardorlik → Qiziqish → Istak → Harakat', 'Istak → Xabardorlik → Harakat → Qiziqish', 'Qiziqish → Harakat → Xabardorlik → Istak'],
    correctIndex: 1,
    explanation: 'Marketing voronkasi (AIDA): Xabardorlik (Awareness) → Qiziqish (Interest) → Istak (Desire) → Harakat (Action).',
  },
  {
    id: 'q12-4',
    lessonId: 'lesson-12',
    topicNumber: 12,
    text: 'A/B testing nima?',
    options: ['Ikki dasturni solishtirish', 'Ikkita variant sinab ko\'rish va yaxshisini tanlash', 'Ikkita server o\'rtasida yukni taqsimlash', 'Ikki tilda kontent yozish'],
    correctIndex: 1,
    explanation: "A/B testing — ikkita turli variantni (A va B) auditoriyaga ko'rsatib, qaysi biri yaxshi ishlashini aniqlash usuli.",
  },
  {
    id: 'q12-5',
    lessonId: 'lesson-12',
    topicNumber: 12,
    text: 'SMM nima degan qisqartma?',
    options: ['Search Marketing Manager', 'Social Media Marketing', 'Software Management Model', 'Sales Marketing Method'],
    correctIndex: 1,
    explanation: 'SMM — Social Media Marketing (Ijtimoiy media marketing).',
  },

  // Mavzu 13: 5G
  {
    id: 'q13-1',
    lessonId: 'lesson-13',
    topicNumber: 13,
    text: '5G texnologiyasining maksimal kechikishi (latency) qancha?',
    options: ['50ms', '10ms', '1ms', '0.1ms'],
    correctIndex: 2,
    explanation: '5G texnologiyasining kechikishi 1ms gacha kamayadi, bu 4G LTE\'ning 50ms ga nisbatan 50 marta yaxshi.',
  },
  {
    id: 'q13-2',
    lessonId: 'lesson-13',
    topicNumber: 13,
    text: 'Starlink loyihasi kim tomonidan yaratilgan?',
    options: ['Jeff Bezos (Blue Origin)', 'Elon Musk (SpaceX)', 'Richard Branson (Virgin)', 'Bill Gates (Microsoft)'],
    correctIndex: 1,
    explanation: "Starlink — Elon Musk'ning SpaceX kompaniyasi tomonidan yaratilgan global sun'iy yo'ldosh internet tizimi.",
  },
  {
    id: 'q13-3',
    lessonId: 'lesson-13',
    topicNumber: 13,
    text: '5G Network Slicing nima?',
    options: ['Tarmoqni fizik bo\'laklarga ajratish', 'Bitta fizik tarmoqdan bir nechta virtual tarmoq yaratish', 'Tarmoq tezligini kamaytirish', 'Foydalanuvchilarni cheklash'],
    correctIndex: 1,
    explanation: '5G Network Slicing — bitta fizik 5G infratuzilmasida turli xizmatlar uchun alohida virtual tarmoq segmentlari yaratish imkonini beradi.',
  },
  {
    id: 'q13-4',
    lessonId: 'lesson-13',
    topicNumber: 13,
    text: '5G texnologiyasining maksimal yuklab olish tezligi qancha?',
    options: ['100 Mbps', '1 Gbps', '20 Gbps', '100 Gbps'],
    correctIndex: 2,
    explanation: '5G texnologiyasi nazariy maksimal yuklab olish tezligi 20 Gbps gacha yetishi mumkin.',
  },
  {
    id: 'q13-5',
    lessonId: 'lesson-13',
    topicNumber: 13,
    text: '6G texnologiyasi qachon joriy qilinishi kutilmoqda?',
    options: ['2025', '2027', '2030s', '2040s'],
    correctIndex: 2,
    explanation: '6G texnologiyasi 2030-yillar boshida tijorat miqyosida joriy qilinishi kutilmoqda.',
  },

  // Mavzu 14: Quantum Computing
  {
    id: 'q14-1',
    lessonId: 'lesson-14',
    topicNumber: 14,
    text: 'Kvant kompyuterlarda ma\'lumot birligi nima deyiladi?',
    options: ['Bit', 'Byte', 'Qubit', 'Qbyte'],
    correctIndex: 2,
    explanation: "Kvant kompyuterlarda ma'lumot birligi Qubit (quantum bit) deyiladi, u 0, 1 yoki ikkalasini bir vaqtda ifodalay oladi.",
  },
  {
    id: 'q14-2',
    lessonId: 'lesson-14',
    topicNumber: 14,
    text: 'Kvant superpozitsiyasi nima?',
    options: ['Qubitning faqat 0 holati', 'Qubitning faqat 1 holati', 'Qubit bir vaqtda 0 ham 1 ham bo\'lishi', 'Ikki qubitning birlashishi'],
    correctIndex: 2,
    explanation: "Superpozitsiya — kvant mexanikasining asosi, qubit o'lchanmaguncha bir vaqtda 0 ham, 1 ham bo'lishi mumkin.",
  },
  {
    id: 'q14-3',
    lessonId: 'lesson-14',
    topicNumber: 14,
    text: 'Shor algoritmi asosan nima uchun muhim?',
    options: ['Rasmlarni tanish', 'Katta sonlarni asosiy ko\'paytuvchilarga ajratish (RSA\'ni buzish)', 'Ma\'lumotlar bazasida qidirish', 'Tillarni tarjima qilish'],
    correctIndex: 1,
    explanation: "Shor algoritmi katta sonlarni asosiy ko'paytuvchilarga tezda ajrata oladi, bu RSA shifrlashni xavf ostiga qo'yadi.",
  },
  {
    id: 'q14-4',
    lessonId: 'lesson-14',
    topicNumber: 14,
    text: '2019 yilda Google Sycamore processor qanday natija ko\'rsatdi?',
    options: ['Klassikdan 10x tez', '200 soniyada, klassikka 10,000 yil kerak bo\'ladigan vazifani bajardi', 'Barcha testlardan o\'tmadi', 'Faqat 2 qubitli hisob qila oldi'],
    correctIndex: 1,
    explanation: "Google Sycamore 200 soniyada bajardi — bu vazifani eng tezkor klassik superkompyuter 10,000 yil bajara olmaydi deb hisoblangan.",
  },
  {
    id: 'q14-5',
    lessonId: 'lesson-14',
    topicNumber: 14,
    text: 'Kvant kompyuterlari uchun nima muhim muammo hisoblanadi?',
    options: ['Qubitlar juda arzon', 'Kvant dekoherensiya — qubitlar tez buziladi', 'Kvant kompyuterlari juda tez ishlaydi', 'Kvant algoritmlari yo\'q'],
    correctIndex: 1,
    explanation: "Kvant dekoherensiya — qubitlarning atrof-muhit ta'siridan tez buzilishi kvant hisoblashning asosiy muammosi.",
  },

  // Mavzu 15: Raqamli Transformatsiya
  {
    id: 'q15-1',
    lessonId: 'lesson-15',
    topicNumber: 15,
    text: 'Raqamli transformatsiyaning birinchi bosqichi nima?',
    options: ['Raqamli transformatsiya (Biznes modeli o\'zgarishi)', 'Raqamlashtirish (Analog → Raqamli)', 'Raqamli jarayonlar', 'AI joriy etish'],
    correctIndex: 1,
    explanation: "1-bosqich — Raqamlashtirish (Digitization): analog ma'lumotlarni (qog'oz hujjatlar) raqamli formatga o'tkazish.",
  },
  {
    id: 'q15-2',
    lessonId: 'lesson-15',
    topicNumber: 15,
    text: 'Netflix qanday raqamli transformatsiya amalga oshirdi?',
    options: ['DVD ijara biznesini davom ettirdi', 'DVD ijaradan streaming platformasiga o\'tdi', 'Kino kinoteatrlariga sarmoya kiritti', 'Faqat reklama biznesiga kirdi'],
    correctIndex: 1,
    explanation: "Netflix DVD ijaradan streaming platformasiga o'tib, Blockbuster kabi raqobatchilarni ortda qoldirdi va $150 milliardlik kompaniyaga aylandi.",
  },
  {
    id: 'q15-3',
    lessonId: 'lesson-15',
    topicNumber: 15,
    text: '"Raqamli O\'zbekiston 2030" strategiyasida necha nafar dasturchi tayyorlash maqsad qilingan?',
    options: ['100 ming', '500 ming', '1 million', '5 million'],
    correctIndex: 2,
    explanation: '"Raqamli O\'zbekiston 2030" strategiyasida 1 million dasturchi tayyorlash maqsad qilingan.',
  },
  {
    id: 'q15-4',
    lessonId: 'lesson-15',
    topicNumber: 15,
    text: 'Raqamli transformatsiya jarayonidagi eng katta to\'siq nima?',
    options: ['Internet yo\'qligi', 'Insoniy to\'siqlar (o\'zgarishga qarshilik, ko\'nikmalar yetishmovchiligi)', 'Elektr energiyasi muammolari', 'Davlat taqiqlari'],
    correctIndex: 1,
    explanation: "Raqamli transformatsiyada eng katta to'siq texnik emas, balki insoniy omillar: o'zgarishga qarshilik va ko'nikmalar yetishmovchiligi.",
  },
  {
    id: 'q15-5',
    lessonId: 'lesson-15',
    topicNumber: 15,
    text: 'CDO lavozimi nimani anglatadi?',
    options: ['Chief Development Officer', 'Chief Digital Officer', 'Chief Data Officer', 'Chief Design Officer'],
    correctIndex: 1,
    explanation: 'CDO — Chief Digital Officer, tashkilotda raqamli transformatsiyani boshqaruvchi yuqori darajali rahbar.',
  },
]

// ── Static data access (safe for both server and client) ──────────────────
// Server-side pages should import from lib/store directly.
// These functions use the seed arrays as fallback and are client-safe.

export function getCourse(): Course {
  return {
    ...COURSE_DATA,
    lessons: LESSONS,
  }
}

export function getLessons(): Lesson[] {
  return LESSONS
}

export function getLessonBySlug(slug: string): Lesson | undefined {
  return LESSONS.find((l) => l.slug === slug)
}

export function getLessonById(id: string): Lesson | undefined {
  return LESSONS.find((l) => l.id === id)
}

export function getQuestionsByLessonId(lessonId: string): Question[] {
  return QUESTIONS.filter((q) => q.lessonId === lessonId)
}

export function getQuestionsByTopicNumber(topicNumber: number): Question[] {
  return QUESTIONS.filter((q) => q.topicNumber === topicNumber)
}
