// Cedars Tech approved business knowledge + deterministic intent registry.
export const BUSINESS = {
  name: "Cedars Tech",
  instagram: "@cedars.tech",
  instagramUrl: "https://instagram.com/cedars.tech",
  whatsappDisplay: "+961 81 090 757",
  whatsappUrl: "https://wa.me/96181090757",
  email: "adamabdallah.dev@gmail.com",
};

const wa = { label: "WhatsApp", url: BUSINESS.whatsappUrl };
const ig = { label: "Instagram", url: BUSINESS.instagramUrl };
const mail = { label: "Email", url: `mailto:${BUSINESS.email}` };

export const INTENTS = [
  {
    id: "restaurant", priority: 3, match: { keywords: ["restaurant", "restaurants", "eatery"], phrases: ["for restaurant", "restaurant website"], synonyms: ["restaurants", "eatery"], arabicTerms: ["مطعم"], arabiziTerms: ["mat3am", "matam"], entities: ["restaurant"] },
    entityType: "business",
    response: "Yes — we build websites for restaurants. A restaurant site can include your menu, a clear location, Google Maps, and a WhatsApp ordering or booking flow, starting from $249. Final pricing depends on the scope.",
    cta: wa,
  },
  {
    id: "cafe", priority: 3, match: { keywords: ["cafe", "café", "coffee", "coffeeshop"], phrases: ["for cafe", "coffee shop", "coffee shop website"], synonyms: ["cafes", "cafés", "coffee shops"], arabicTerms: ["كافيه", "مقهى"], arabiziTerms: ["cafeh", "qahwe"], entities: ["cafe"] },
    entityType: "business",
    response: "Yes — we build websites for cafés and coffee shops, focused on the menu, location, opening hours and making it easy for customers to reach you. Starting from $249, depending on scope.",
    cta: wa,
  },
  {
    id: "barber", priority: 3, match: { keywords: ["barber", "barbershop", "salon"], phrases: ["for barber", "barber website", "barbershop"], synonyms: ["barbers", "haircut"], arabicTerms: ["حلاق"], arabiziTerms: ["hallak"], entities: ["barber"] },
    entityType: "business",
    response: "Yes — we build websites for barbers and similar service businesses, including services, gallery, location and WhatsApp booking. Starting from $249, depending on scope.",
    cta: wa,
  },
  {
    id: "clinic", priority: 3, match: { keywords: ["clinic", "dental", "doctor", "dentist"], phrases: ["for clinic", "dental clinic", "dental website"], synonyms: ["clinics", "healthcare"], arabicTerms: ["عيادة", "اسنان"], arabiziTerms: ["3iyade", "snan"], entities: ["clinic"] },
    entityType: "business",
    response: "Yes — we build websites for clinics, including services, location and a booking or inquiry flow. Starting from $249, depending on scope.",
    cta: wa,
  },
  {
    id: "local_business", priority: 2, match: { keywords: ["local", "nearby", "shop", "store"], phrases: ["local business", "local business website"], synonyms: [], arabicTerms: ["محلي", "محل"], arabiziTerms: ["mahali"], entities: ["local"] },
    entityType: "business",
    response: "Yes — we specialize in mobile-first websites for local businesses, built around your services, location, bookings and WhatsApp contact.",
    cta: wa,
  },
  {
    id: "business_website", priority: 2, match: { keywords: ["website", "site", "web", "online"], phrases: ["business website", "build a website", "need a website", "make a website", "i need a site", "i need a web page", "online presence", "something for my company", "website for my business"], synonyms: ["web site", "web-site", "my site", "web page", "online presence"], arabicTerms: ["موقع", "موقع الكتروني", "ويبسايت"], arabiziTerms: ["maw2e3", "webayt"], entities: ["website"] },
    entityType: "topic",
    response: "We design and build professional websites tailored to your business. Tell us which business you are in, and we can point you to the right starting point.",
    cta: wa,
  },
  {
    id: "landing_page", priority: 2, match: { keywords: ["landing", "campaign", "funnel"], phrases: ["landing page", "one page site", "landing pages"], synonyms: [], arabicTerms: ["صفحة", "صفحات"], arabiziTerms: ["safha"], entities: ["landing"] },
    entityType: "service",
    response: "Yes — we build focused landing pages for a product, service, campaign or new business, designed around one clear goal and a strong call to action.",
    cta: wa,
  },
  {
    id: "custom_website", priority: 2, match: { keywords: ["custom", "advanced", "platform"], phrases: ["custom website", "custom web app", "custom functionality"], synonyms: [], arabicTerms: ["مخصص"], arabiziTerms: ["mkhasas"], entities: ["custom"] },
    entityType: "service",
    response: "Yes — our Custom package covers advanced custom websites or platforms with workflows, booking, ordering, integrations and Arabic RTL where required. Pricing starts at $899.",
    cta: wa,
  },
  {
    id: "services", priority: 1, match: { keywords: ["services", "offer", "do"], phrases: ["what do you do", "your services", "what you offer"], synonyms: ["what we offer"], arabicTerms: ["خدمات"], arabiziTerms: ["khadamet"], entities: [] },
    response: "We offer business websites, local business websites, landing pages, website care, custom websites, and booking/order/integration functionality when appropriate — plus Arabic RTL where required.",
    cta: wa,
  },
  {
    id: "pricing", priority: 4, match: { keywords: ["price", "prices", "pricing", "cost", "charge", "fee", "quote", "budget", "rates", "expensive"], phrases: ["how much", "how much is", "how much for", "what does it cost", "what's the price", "pricing plans", "how expensive"], synonyms: ["how much does it cost", "cost me"], arabicTerms: ["سعر", "اسعار", "الأسعار", "تكلفة", "كم", "قديش"], arabiziTerms: ["se3er", "as3ar", "adde", "ade"], entities: ["pricing"] },
    response: "Our websites start from $249. Starter is $249–$349, Business is $449–$649, and Custom starts at $899. Final pricing always depends on your project scope.",
    cta: wa,
  },
  {
    id: "starter_plan", priority: 3, match: { keywords: ["starter", "basic", "cheap", "cheapest"], phrases: ["starter plan", "starter package"], synonyms: [], arabicTerms: ["بسيط"], arabiziTerms: ["basSet"], entities: [] },
    response: "The Starter package is $249–$349 (one-time): a custom one-page website, mobile-first design, WhatsApp + contact setup, Google Maps + social links, SEO basics and launch.",
    cta: wa,
  },
  {
    id: "business_plan", priority: 3, match: { keywords: ["business plan", "business package"], phrases: ["business package", "business plan"], synonyms: [], arabicTerms: [], arabiziTerms: [], entities: [] },
    response: "The Business package is $449–$649 (one-time): up to 5 custom pages, custom design & business structure, WhatsApp + forms + lead capture, analytics + SEO setup, launch and priority support.",
    cta: wa,
  },
  {
    id: "custom_plan", priority: 3, match: { keywords: ["custom plan", "custom package", "most expensive"], phrases: ["custom package", "custom plan"], synonyms: [], arabicTerms: [], arabiziTerms: [], entities: [] },
    response: "The Custom package starts at $899 with a quote based on scope: custom platforms, booking/ordering/integrations, multilingual/Arabic RTL, and ongoing support options.",
    cta: wa,
  },
  {
    id: "compare_plans", priority: 3, match: { keywords: ["compare", "difference", "vs", "which plan"], phrases: ["compare plans", "difference between", "which package"], synonyms: [], arabicTerms: [], arabiziTerms: [], entities: [] },
    response: "Starter ($249–$349) is a one-page presence. Business ($449–$649) adds up to 5 pages, forms, analytics and priority support. Custom (from $899) is for platforms with booking, ordering or integrations.",
    cta: wa,
  },
  {
    id: "what_is_included", priority: 1, match: { keywords: ["included", "features", "comes with"], phrases: ["what is included", "what do i get"], synonyms: [], arabicTerms: [], arabiziTerms: [], entities: [] },
    response: "Every package includes a mobile-first custom design, WhatsApp contact setup, social links and launch. Business adds forms, analytics and SEO; Custom adds platforms, integrations and ongoing support.",
    cta: wa,
  },
  {
    id: "mobile_responsive", priority: 2, match: { keywords: ["mobile", "phone", "responsive", "phones"], phrases: ["work on phones", "mobile friendly", "mobile-first"], synonyms: [], arabicTerms: ["جوال", "موبايل"], arabiziTerms: ["mobile", "jawal"], entities: [] },
    response: "Yes — every website we build is mobile-first and designed to work across phones, tablets and desktops.",
    cta: wa,
  },
  {
    id: "timeline", priority: 2, match: { keywords: ["time", "long", "duration", "days", "weeks", "delivery"], phrases: ["how long", "how long does it take", "delivery time"], synonyms: [], arabicTerms: ["وقت", "شوكت"], arabiziTerms: ["wa2t", "shoukat"], entities: [] },
    response: "Most business websites can be completed within a few days to a couple of weeks, depending on the scope and how quickly the required content is provided.",
    cta: wa,
  },
  {
    id: "support", priority: 1, match: { keywords: ["support", "care", "help", "after"], phrases: ["after launch", "ongoing support", "website care"], synonyms: [], arabicTerms: ["دعم", "صيانة"], arabiziTerms: ["da3em"], entities: [] },
    response: "Yes — we offer website care: content changes, updates, fixes and ongoing support after launch.",
    cta: wa,
  },
  {
    id: "website_updates", priority: 2, match: { keywords: ["update", "updates", "change", "edit"], phrases: ["update website", "website updates", "content changes"], synonyms: [], arabicTerms: ["تعديل", "تحديث"], arabiziTerms: ["ta3dil", "ta7deeth"], entities: [] },
    response: "Yes — we can handle content changes, updates, fixes and ongoing website support after launch.",
    cta: wa,
  },
  {
    id: "seo", priority: 2, match: { keywords: ["seo", "google", "rank", "ranking", "search"], phrases: ["seo setup", "rank on google", "google ranking"], synonyms: [], arabicTerms: ["تحسين محركات البحث"], arabiziTerms: [], entities: [] },
    response: "Every package includes basic SEO setup, and the Business package includes stronger on-page SEO. We don't promise specific rankings.",
    cta: wa,
  },
  {
    id: "google_maps", priority: 2, match: { keywords: ["maps", "map", "location", "directions"], phrases: ["google maps", "maps integration"], synonyms: [], arabicTerms: ["خرائط"], arabiziTerms: ["khara2it"], entities: [] },
    response: "Yes — Google Maps integration is included in our Starter package and above.",
    cta: wa,
  },
  {
    id: "social_links", priority: 1, match: { keywords: ["social", "links", "instagram link", "facebook", "tiktok"], phrases: ["social links", "social media links"], synonyms: [], arabicTerms: [], arabiziTerms: [], entities: [] },
    response: "Yes — social media integration is included in our Starter package and above.",
    cta: wa,
  },
  {
    id: "forms", priority: 2, match: { keywords: ["form", "forms", "contact form", "lead"], phrases: ["contact form", "lead capture", "lead form"], synonyms: [], arabicTerms: ["نموذج"], arabiziTerms: ["namouzaj"], entities: [] },
    response: "Yes — lead/contact forms are included in the Business package and above.",
    cta: wa,
  },
  {
    id: "analytics", priority: 2, match: { keywords: ["analytics", "tracking", "visitors"], phrases: ["google analytics", "analytics setup"], synonyms: [], arabicTerms: [], arabiziTerms: [], entities: [] },
    response: "Yes — Google Analytics setup is included in the Business package and above.",
    cta: wa,
  },
  {
    id: "booking", priority: 2, match: { keywords: ["booking", "book", "appointment", "reservation"], phrases: ["booking system", "bookings", "booking flow"], synonyms: [], arabicTerms: ["حجز", "حجوزات"], arabiziTerms: ["7ajz"], entities: [] },
    response: "Yes — booking or inquiry flows can be included where appropriate, and full booking systems are available in our Custom package.",
    cta: wa,
  },
  {
    id: "ordering", priority: 2, match: { keywords: ["ordering", "order", "ecommerce", "e-commerce", "shop"], phrases: ["online ordering", "e-commerce", "online store"], synonyms: [], arabicTerms: ["طلب", "طلبات"], arabiziTerms: ["talab"], entities: [] },
    response: "Yes — online ordering and e-commerce are available in our Custom package.",
    cta: wa,
  },
  {
    id: "arabic", priority: 2, match: { keywords: ["arabic", "arab"], phrases: ["arabic website", "arabic site"], synonyms: [], arabicTerms: ["عربي"], arabiziTerms: ["3arabi"], entities: [] },
    response: "Yes — Arabic and Arabic RTL support is available where required, especially in our Custom package.",
    cta: wa,
  },
  {
    id: "rtl", priority: 2, match: { keywords: ["rtl", "right to left"], phrases: ["arabic rtl", "rtl layout"], synonyms: [], arabicTerms: [], arabiziTerms: [], entities: [] },
    response: "Yes — Arabic RTL layouts are supported where required.",
    cta: wa,
  },
  {
    id: "multilingual", priority: 2, match: { keywords: ["multilingual", "languages", "english", "arabic english"], phrases: ["multiple languages", "multilingual"], synonyms: [], arabicTerms: ["انجليزي", "لغات"], arabiziTerms: ["3arabi englizi"], entities: [] },
    response: "Yes — multilingual / Arabic-English websites are available in our Custom package.",
    cta: wa,
  },
  {
    id: "domain", priority: 3, match: { keywords: ["domain", "url", "name"], phrases: ["domain name", "my domain", "custom domain"], synonyms: [], arabicTerms: ["دومين"], arabiziTerms: ["domain"], entities: [] },
    response: "We don't list domain pricing on the site. Share your requirements on WhatsApp and we'll confirm what's needed for your project.",
    cta: wa,
  },
  {
    id: "hosting", priority: 3, match: { keywords: ["hosting", "host", "server"], phrases: ["hosting included", "web hosting"], synonyms: [], arabicTerms: ["استضافة"], arabiziTerms: ["istedafe"], entities: [] },
    response: "We don't list hosting pricing on the site. Share your requirements on WhatsApp and we'll confirm what's needed for your project.",
    cta: wa,
  },
  {
    id: "whatsapp", priority: 2, match: { keywords: ["whatsapp", "wa", "chat"], phrases: ["whatsapp number", "contact whatsapp", "your whatsapp"], synonyms: [], arabicTerms: ["واتساب"], arabiziTerms: ["whatsap", "watsab"], entities: [] },
    response: `You can reach us on WhatsApp at ${BUSINESS.whatsappDisplay}.`,
    cta: wa,
  },
  {
    id: "instagram", priority: 2, match: { keywords: ["instagram", "insta", "ig"], phrases: ["instagram page", "your instagram"], synonyms: [], arabicTerms: ["انستغرام"], arabiziTerms: ["insta"], entities: [] },
    response: `You can find us on Instagram at ${BUSINESS.instagram}.`,
    cta: ig,
  },
  {
    id: "email", priority: 2, match: { keywords: ["email", "mail"], phrases: ["email address", "your email"], synonyms: [], arabicTerms: ["ايميل", "بريد"], arabiziTerms: ["email"], entities: [] },
    response: `You can email us at ${BUSINESS.email}.`,
    cta: mail,
  },
  {
    id: "contact", priority: 1, match: { keywords: ["contact", "reach", "get in touch"], phrases: ["get in touch", "how to contact"], synonyms: [], arabicTerms: ["تواصل"], arabiziTerms: ["tawasol"], entities: [] },
    response: `The fastest way is WhatsApp: ${BUSINESS.whatsappDisplay}. You can also email ${BUSINESS.email} or find us on Instagram ${BUSINESS.instagram}.`,
    cta: wa,
  },
  {
    id: "about_business", priority: 1, match: { keywords: ["about", "company", "who"], phrases: ["about cedars", "who are you", "what is cedars"], synonyms: [], arabicTerms: ["شركة", "عن"], arabiziTerms: ["shirke"], entities: [] },
    response: "Cedars Tech designs and builds professional websites for local businesses in Lebanon — restaurants, cafés, barbers, clinics and more.",
    cta: wa,
  },
  {
    id: "location", priority: 1, match: { keywords: ["location", "where", "lebanon", "based"], phrases: ["where are you", "where based"], synonyms: [], arabicTerms: ["وين"], arabiziTerms: ["wen", "wayn"], entities: [] },
    response: "We work with businesses in Lebanon, with a focus on local businesses.",
    cta: wa,
  },
  {
    id: "forsa", priority: 2, match: { keywords: ["forsa"], phrases: ["forsa platform"], synonyms: [], arabicTerms: ["فرصة"], arabiziTerms: ["forsa"], entities: [] },
    response: "Forsa is an opportunity platform connecting students, early-career talent and companies across Lebanon. Built with React, Firebase, Firestore and Tailwind.",
    cta: null,
  },
  {
    id: "abc_qatar", priority: 2, match: { keywords: ["abc", "qatar"], phrases: ["abc qatar"], synonyms: [], arabicTerms: [], arabiziTerms: [], entities: [] },
    response: "ABC Qatar is a client business website we built. See it at https://www.abcqatar.co/.",
    cta: { label: "Visit website", url: "https://www.abcqatar.co/" },
  },
  {
    id: "portfolio", priority: 1, match: { keywords: ["portfolio", "work", "projects", "examples"], phrases: ["your work", "see your work", "examples"], synonyms: [], arabicTerms: ["اعمال"], arabiziTerms: ["a3mal"], entities: [] },
    response: "You can see our selected work — including Forsa and ABC Qatar — in the Work section of this page, plus concept demos.",
    cta: null,
  },
  {
    id: "concepts", priority: 1, match: { keywords: ["concepts", "demos", "demo"], phrases: ["demo websites", "concept websites"], synonyms: [], arabicTerms: [], arabiziTerms: [], entities: [] },
    response: "We have concept demos for Restaurant, Coffee Shop, Barber, Event Plan, Travel & Tourism, Portfolio and Dental Clinic — listed in the Work section.",
    cta: null,
  },
  {
    id: "technology", priority: 1, match: { keywords: ["technology", "tech", "stack", "react"], phrases: ["built with", "tech stack"], synonyms: [], arabicTerms: [], arabiziTerms: [], entities: [] },
    response: "Our sites are built with React, Tailwind and modern web tooling; Forsa uses React, Firebase, Firestore and Tailwind.",
    cta: null,
  },
  {
    id: "faq", priority: 0, match: { keywords: ["faq", "questions"], phrases: ["frequently asked"], synonyms: [], arabicTerms: [], arabiziTerms: [], entities: [] },
    response: "You can find answers to common questions — cost, timeline, support and more — in the FAQ section of this page.",
    cta: null,
  },
  {
    id: "greeting", priority: 0, match: { keywords: ["hi", "hello", "hey", "marhaba"], phrases: ["good morning", "good evening"], synonyms: [], arabicTerms: ["مرحبا", "اهلا", "سلام"], arabiziTerms: ["marhaba", "ahla", "salam"], entities: [] },
    response: "Hi — I can help you with our services, pricing, websites, projects, or getting in touch.",
    cta: null,
  },
  {
    id: "human_contact", priority: 3, match: { keywords: ["human", "person", "call", "talk"], phrases: ["talk to someone", "real person", "speak to human"], synonyms: [], arabicTerms: ["شخص"], arabiziTerms: ["shakhs"], entities: [] },
    response: `Of course — message us on WhatsApp at ${BUSINESS.whatsappDisplay} and a real person will reply.`,
    cta: wa,
  },
  {
    id: "start_project", priority: 3, match: { keywords: ["start", "begin", "order", "hire"], phrases: ["start a project", "get started", "i want a website", "need a website"], synonyms: [], arabicTerms: ["ابدأ", "بدي"], arabiziTerms: ["bidi", "bade", "baddi"], entities: [] },
    response: `Great — the fastest way to start is a WhatsApp message at ${BUSINESS.whatsappDisplay}. Tell us about your business and we'll take it from there.`,
    cta: wa,
  },
];

export const FALLBACK = {
  clarification: "I'm not completely sure what you mean. Are you asking about our services, pricing, or starting a project?",
  fallback: "I can help with our websites, pricing, services, projects, or getting in touch.",
};

export const QUICK_ACTIONS = [
  { label: "Services", query: "services" },
  { label: "Pricing", query: "pricing" },
  { label: "Our Work", query: "our work" },
  { label: "WhatsApp", query: "whatsapp" },
];

// ---------------------------------------------------------------------------
// Conversational layer (approved pools; business facts stay in INTENTS)
// ---------------------------------------------------------------------------

export const CONVERSATIONAL = [
  {
    id: "greeting",
    patterns: ["hi", "hello", "hey", "hey there", "yo", "hi there", "salam"],
    arabic: ["مرحبا", "اهلا", "سلام", "صباح الخير", "مساء الخير"],
    arabizi: ["marhaba", "ahla", "salam", "sabah"],
    responses: [
      "Hi! How can I help you with Cedars Tech?",
      "Hey — what can I help you with?",
      "Hi. Looking for a website, pricing, or something else?",
    ],
  },
  {
    id: "how_are_you",
    patterns: ["how are you", "how's it going", "you good", "how are you doing", "what's up", "sup"],
    arabic: ["كيفك", "كيف حالك"],
    arabizi: ["keefak", "kifak", "shu"],
    responses: [
      "Doing well — thanks. What can I help you with?",
      "All good. What brings you by?",
    ],
  },
  {
    id: "thanks",
    patterns: ["thanks", "thank you", "thx", "merci", "thanks bro", "thank u"],
    arabic: ["شكرا", "يسلمو"],
    arabizi: ["shukran", "merci"],
    responses: [
      "Anytime. Anything else I can help with?",
      "You're welcome. Want help with anything else?",
      "Glad to help. What else can I do for you?",
    ],
  },
  {
    id: "acknowledgement",
    patterns: ["ok", "okay", "yeah", "yep", "yes", "sure", "sounds good", "nice", "great", "got it"],
    arabic: ["اوكي", "اه", "تمام"],
    arabizi: ["okey", "ah", "tamam"],
    responses: [
      "Great. What would you like to do next?",
      "Perfect. Anything else I can help with?",
    ],
  },
  {
    id: "goodbye",
    patterns: ["bye", "see you", "talk later", "goodbye", "later"],
    arabic: ["باي", "مع السلامة"],
    arabizi: ["bye", "ma3 saleme"],
    responses: [
      "Take care — we're here on WhatsApp when you need us.",
      "Goodbye. Message us anytime on WhatsApp.",
    ],
  },
  {
    id: "are_you_there",
    patterns: ["are you there", "hello?", "you there", "anyone there"],
    arabic: ["فيك"],
    arabizi: [],
    responses: ["Yep, I'm here. What are you looking to build?"],
  },
  {
    id: "who_are_you",
    patterns: ["who are you", "what are you", "are you a robot", "who is this"],
    arabic: ["مين انت"],
    arabizi: ["min enta"],
    responses: [
      "I'm the Cedars Tech assistant. I help with our services, pricing, projects, and getting in touch.",
    ],
  },
  {
    id: "what_can_you_do",
    patterns: ["what can you do", "help", "what do you help with", "how can you help"],
    arabic: ["شو بتعمل", "شو بتعملو"],
    arabizi: ["shou bta3mel", "sho btemlou"],
    responses: [
      "I can tell you about our services, pricing, projects, and how to get started — or how to reach us.",
    ],
  },
];

// Entity registry: independent of intent classification
export const ENTITIES = {
  business: [
    { id: "restaurant", terms: ["restaurant", "restaurants", "eatery", "food"], arabic: ["مطعم"], arabizi: ["mat3am", "matam"] },
    { id: "cafe", terms: ["cafe", "café", "coffee", "coffeeshop"], arabic: ["كافيه", "مقهى"], arabizi: ["cafeh", "qahwe"] },
    { id: "barber", terms: ["barber", "barbershop", "salon"], arabic: ["حلاق"], arabizi: ["hallak"] },
    { id: "clinic", terms: ["clinic", "dental", "doctor", "dentist"], arabic: ["عيادة", "اسنان"], arabizi: ["3iyade", "snan"] },
    { id: "local_business", terms: ["local business", "local", "shop", "store"], arabic: ["محل"], arabizi: ["mahali"] },
    { id: "service_business", terms: ["service business", "service", "services"], arabic: [], arabizi: [] },
  ],
  project: [
    { id: "forsa", terms: ["forsa"], arabic: ["فرصة"], arabizi: ["forsa"] },
    { id: "abc_qatar", terms: ["abc", "qatar", "abc qatar"], arabic: [], arabizi: [] },
    { id: "restaurant_demo", terms: ["restaurant demo"], arabic: [], arabizi: [] },
    { id: "coffee_demo", terms: ["coffee demo", "coffee shop demo"], arabic: [], arabizi: [] },
    { id: "barber_demo", terms: ["barber demo"], arabic: [], arabizi: [] },
    { id: "event_demo", terms: ["event demo", "event plan"], arabic: [], arabizi: [] },
    { id: "travel_demo", terms: ["travel demo", "travel tourism"], arabic: [], arabizi: [] },
    { id: "portfolio_demo", terms: ["portfolio demo"], arabic: [], arabizi: [] },
    { id: "dental_demo", terms: ["dental demo", "dental clinic"], arabic: [], arabizi: [] },
  ],
  service: [
    { id: "business_website", terms: ["website", "site", "web page", "online presence", "website for my business"], arabic: ["موقع", "ويبسايت"], arabizi: ["maw2e3", "webayt"] },
    { id: "landing_page", terms: ["landing page", "landing"], arabic: ["صفحة"], arabizi: ["safha"] },
    { id: "website_care", terms: ["website care", "maintenance", "maintain"], arabic: ["صيانة"], arabizi: ["siyane"] },
    { id: "custom_website", terms: ["custom website", "custom", "platform"], arabic: ["مخصص"], arabizi: ["mkhasas"] },
  ],
  feature: [
    { id: "whatsapp", terms: ["whatsapp", "wa"], arabic: ["واتساب"], arabizi: ["whatsap"] },
    { id: "forms", terms: ["form", "forms", "contact form"], arabic: ["نموذج"], arabizi: [] },
    { id: "analytics", terms: ["analytics", "tracking"], arabic: [], arabizi: [] },
    { id: "seo", terms: ["seo"], arabic: [], arabizi: [] },
    { id: "google_maps", terms: ["google maps", "maps"], arabic: ["خرائط"], arabizi: [] },
    { id: "booking", terms: ["booking", "bookings", "appointment"], arabic: ["حجز"], arabizi: ["7ajz"] },
    { id: "ordering", terms: ["ordering", "order", "e-commerce"], arabic: ["طلب"], arabizi: ["talab"] },
    { id: "arabic", terms: ["arabic"], arabic: ["عربي"], arabizi: ["3arabi"] },
    { id: "rtl", terms: ["rtl", "right to left"], arabic: [], arabizi: [] },
    { id: "multilingual", terms: ["multilingual", "languages"], arabic: ["لغات"], arabizi: [] },
    { id: "responsive", terms: ["responsive", "mobile", "phone", "mobile-first"], arabic: ["موبايل", "جوال"], arabizi: ["mobile"] },
  ],
};

export const NEGATION_MARKERS = ["don't", "do not", "not", "no", "without", "ما بدي", "مش", "مو", "بدون", "مش بحاجة", "mesh", "mish"];

export const OUT_OF_SCOPE = {
  patterns: ["president", "weather", "bitcoin", "write me", "write a", "code", "python", "javascript", "movie", "song", "joke", "math", "president", "news", "stock"],
  response: "I’m here specifically to help with Cedars Tech — websites, services, pricing, projects, and getting in touch.",
};

export const QUESTION_PATTERNS = {
  how_much: ["how much", "what's the price", "what does it cost", "how expensive", "budget", "rates", "fee", "charge", "ade", "adde", "2adde", "se3er"],
  how_long: ["how long", "how long does it take", "duration"],
  can_you: ["can you", "do you", "does it", "is it"],
  where: ["where", "wen"],
  comparison: ["which", "compare", "vs", "difference", "better"],
};
