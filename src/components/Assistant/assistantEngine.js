// Deterministic assistant engine: normalization, entity extraction, conversational
// classification, question typing, negation, typo tolerance, context, composition.
import {
  INTENTS,
  FALLBACK,
  QUICK_ACTIONS,
  CONVERSATIONAL,
  ENTITIES,
  NEGATION_MARKERS,
  OUT_OF_SCOPE,
} from "./assistantKnowledge";

// ---------------- normalization ----------------
const ARABIC_INDIC_DIGITS = { "٠": "0", "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9" };
const arabiziMap = new Map([
  ["shou", "what"], ["shu", "what"], ["ade", "how much"], ["adde", "how much"], ["2adde", "how much"],
  ["se3er", "price"], ["seer", "price"], ["as3ar", "prices"], ["bade", "want"], ["baddi", "want"],
  ["bidi", "want"], ["3ande", "i have"], ["mesh", "not"], ["mish", "not"], ["fi", "in"], ["ma", "no"],
  ["wen", "where"], ["wayn", "where"], ["keef", "how"], ["kif", "how"], ["hal", "is"], ["iza", "if"],
  ["7ajz", "booking"], ["maw2e3", "website"], ["tawasol", "contact"], ["merci", "thanks"],
]);

export function normalize(raw, mapArabizi = true) {
  let s = String(raw || "").toLowerCase();
  for (const [ar, en] of Object.entries(ARABIC_INDIC_DIGITS)) s = s.split(ar).join(en);
  s = s.replace(/[أإآ]/g, "ا").replace(/ة/g, "ه").replace(/ى/g, "ي");
  s = s.replace(/[?؟!.,;:()'’"«»\-_/\\*]/g, " ");
  s = s.replace(/(.)\1{2,}/g, "$1$1");
  if (mapArabizi) s = s.split(/\s+/).map((w) => arabiziMap.get(w) || w).join(" ");
  return s.replace(/\s+/g, " ").trim();
}

const rawNorm = (s) => normalize(s, false);

const tokenize = (s) => s.split(" ").filter(Boolean);

function shingleSet(s) {
  const set = new Set();
  const flat = s.replace(/\s+/g, "");
  for (let i = 0; i < flat.length - 1; i++) set.add(flat.slice(i, i + 2));
  return set;
}

// ---------------- token-phase helpers ----------------
function stripAl(token) {
  return token.replace(/^ال/, "");
}

function tokenHas(tokens, term) {
  const tTokens = rawNorm(term).split(" ").filter(Boolean);
  if (tTokens.length === 0) return false;
  if (tTokens.length === 1) {
    const t = tTokens[0];
    return tokens.some((tok) => tok === t || stripAl(tok) === t || (t.length >= 4 && tok.startsWith(t)));
  }
  // multi-word term: must appear as contiguous subsequence
  for (let i = 0; i <= tokens.length - tTokens.length; i++) {
    let ok = true;
    for (let j = 0; j < tTokens.length; j++) {
      if (tokens[i + j] !== tTokens[j] && stripAl(tokens[i + j]) !== tTokens[j]) { ok = false; break; }
    }
    if (ok) return true;
  }
  return false;
}

function phraseInTokens(tokens, phrase) {
  const pTokens = rawNorm(phrase).split(" ").filter(Boolean);
  return tokenHas(tokens, phrase);
}

function hasPhrase(normalized, phrase) {
  const p = rawNorm(phrase);
  if (p.length === 0) return false;
  const nTokens = normalized.split(" ").filter(Boolean);
  if (!p.includes(" ")) return tokenHas(nTokens, p);
  return phraseInTokens(nTokens, p);
}

// ---------------- typo tolerance ----------------
const vocab = new Set();
for (const i of INTENTS) {
  i.match.keywords.forEach((k) => vocab.add(normalize(k)));
  i.match.synonyms.forEach((k) => vocab.add(normalize(k)));
  i.match.phrases.forEach((p) => normalize(p).split(" ").forEach((w) => vocab.add(w)));
}
const TYPOS = { webiste: "website", websit: "website", prcing: "pricing", resturant: "restaurant", whatsap: "whatsapp", instgram: "instagram", cofe: "cafe", webste: "website" };

function editDistance(a, b) {
  const m = a.length, n = b.length;
  if (Math.abs(m - n) > 1) return 2;
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    prev = cur;
  }
  return prev[n];
}

function fuzzyToken(token) {
  if (vocab.has(token)) return token;
  if (TYPOS[token]) return TYPOS[token];
  if (token.length >= 4) {
    for (const v of vocab) {
      if (Math.abs(v.length - token.length) <= 1 && editDistance(token, v) <= 1) return v;
    }
  }
  return token;
}

function normalizeFuzzy(raw) {
  const n = normalize(raw);
  return tokenize(n).map(fuzzyToken).join(" ");
}

// ---------------- entities ----------------
export function extractEntities(message) {
  const n = rawNorm(message);
  const locked = tokenize(n);
  const neg = NEGATION_MARKERS.some((m) => n.includes(rawNorm(m)));
  const found = { business: [], project: [], service: [], feature: [], negated: neg };

  for (const [group, list] of Object.entries(ENTITIES)) {
    for (const e of list) {
      const hit =
        e.terms.some((t) => tokenHas(locked, t)) ||
        e.arabic.some((a) => tokenHas(locked, a)) ||
        e.arabizi.some((az) => locked.includes(az));
      if (hit) found[group].push(e.id);
    }
  }
  return found;
}

// ---------------- question type ----------------
export function questionType(message) {
  const n = normalize(message);
  if (/how much|what'?s the price|what does it cost|how expensive|budget|rates|fee|charge|ade|adde|2adde|se3er|قديش|كم/.test(n)) return "how_much";
  if (/how long|how long does it take|duration|شوكت/.test(n)) return "how_long";
  if (/can you|do you|does it|is it|هل/.test(n)) return "can_you";
  if (/where|wen|وين/.test(n)) return "where";
  if (/which|compare|vs|difference|better|اي/.test(n)) return "comparison";
  if (/what|شو|shou|shu/.test(n)) return "what";
  if (/why|ليش/.test(n)) return "why";
  return "statement";
}

// ---------------- negation ----------------
export function isNegated(message, entityId) {
  const n = rawNorm(message);
  const tokens = tokenize(n);
  const e = Object.values(ENTITIES).flat().find((x) => x.id === entityId);
  if (!e) return false;
  for (const marker of NEGATION_MARKERS) {
    const mTokens = rawNorm(marker).split(" ").filter(Boolean);
    if (!mTokens.every((mt) => tokens.includes(mt))) continue;
    for (const term of [...e.terms, ...e.arabic, ...e.arabizi]) {
      const tTokens = rawNorm(term).split(" ").filter(Boolean);
      if (tTokens.every((tt) => tokens.includes(tt))) return true;
    }
  }
  return false;
}

// ---------------- conversational matching ----------------
export function matchConversational(message) {
  const n = rawNorm(message);
  const tokens = tokenize(n);
  let best = null;
  let bestLen = 0;
  for (const c of CONVERSATIONAL) {
    const all = [...(c.patterns || []), ...(c.arabic || []), ...(c.arabizi || [])];
    for (const p of all) {
      if (phraseInTokens(tokens, p)) {
        const len = rawNorm(p).split(" ").length;
        if (len > bestLen) { best = c; bestLen = len; }
      }
    }
  }
  return best;
}

function pick(arr, seed = 0) {
  if (!arr || !arr.length) return "";
  return arr[Math.abs(seed) % arr.length];
}

// ---------------- business intent scoring ----------------
export function matchIntents(message, context) {
  const normalized = normalizeFuzzy(message);
  const tokens = new Set(tokenize(normalized));
  const shingles = shingleSet(normalized);
  const results = [];

  for (const intent of INTENTS) {
    let score = 0;
    const m = intent.match;
    for (const p of m.phrases) if (hasPhrase(normalized, p)) score += 4;
    for (const k of m.keywords) if (tokens.has(normalize(k)) || tokens.has(fuzzyToken(normalize(k)))) score += 2;
    for (const syn of m.synonyms) if (hasPhrase(normalized, syn)) score += 1.5;
    for (const ar of m.arabicTerms) if (normalized.includes(ar)) score += 3;
    for (const az of m.arabiziTerms) if (tokens.has(az) || normalized.includes(az)) score += 2.5;
    for (const e of m.entities) if (tokens.has(e)) score += 1;

    const intentText = normalize([...m.phrases, ...m.keywords].join(" "));
    if (intentText) {
      const target = shingleSet(intentText);
      let overlap = 0;
      for (const sh of shingles) if (target.has(sh)) overlap++;
      score += Math.min(overlap / 6, 1.5);
    }
    score += (intent.priority || 0) * 0.3;
    if (context && context.lastTopic && intent.id === context.lastTopic) score += 0.5;

    if (score > 0) results.push({ intent, score });
  }

  // contextual boost for pricing signals
  if (/(price|pricing|cost|budget|rates|fee|charge|how much|ade|adde|2adde|se3er|قديش)/.test(normalized)) {
    const p = results.find((r) => r.intent.id === "pricing");
    if (p) p.score += 2.5;
  }

  return results.sort((a, b) => b.score - a.score);
}

const FEATURE_INTENT = {
  whatsapp: "whatsapp", forms: "forms", analytics: "analytics", seo: "seo",
  google_maps: "google_maps", booking: "booking", ordering: "ordering",
  arabic: "arabic", rtl: "rtl", multilingual: "multilingual", responsive: "mobile_responsive",
};

// ---------------- out of scope ----------------
function isOutOfScope(message) {
  const n = normalize(message);
  return OUT_OF_SCOPE.patterns.some((p) => n.includes(normalize(p)));
}

// ---------------- main entry ----------------
export function getAssistantResponse(message, context) {
  const normalized = normalize(message);
  const fuzzy = normalizeFuzzy(message);
  const entities = extractEntities(message);
  const qType = questionType(message);
  const ranked = matchIntents(message, context);
  const top = ranked[0];
  const conversational = matchConversational(message);

  // acknowledgements that continue a pending offer
  if (conversational && ["acknowledgement"].includes(conversational.id)) {
    if (context && context.lastIntent === "need_website" && entities.business.length) {
      const biz = INTENTS.find((i) => i.id === entities.business[0]) || INTENTS.find((i) => i.id === "restaurant");
      return done(biz, entities, message, context);
    }
    if (context && context.lastIntent === "options_offer") {
      return done(INTENTS.find((i) => i.id === "pricing"), entities, message, context);
    }
  }

  // greeting / how_are_you / thanks / goodbye etc — respond conversationally
  if (conversational && !["are_you_there"].includes(conversational.id) === false) {
    /* handled below uniformly */
  }
  if (conversational) {
    return doneConvo(conversational, message, context);
  }

  // out of scope guard
  if (isOutOfScope(message)) {
    return {
      text: OUT_OF_SCOPE.response,
      cta: null,
      intentId: "out_of_scope",
      confidence: 1,
      suggestions: ["Services", "Pricing", "Our Work", "WhatsApp"],
      context: { lastIntent: "out_of_scope", lastTopic: context?.lastTopic || null, recentUserMessages: [...(context?.recentUserMessages || []), message].slice(-5) },
    };
  }

  // quick actions pills
  for (const qa of QUICK_ACTIONS) {
    if (normalize(qa.query) === normalized) {
      const map = { services: "services", pricing: "pricing", "our work": "portfolio", whatsapp: "whatsapp", "start a project": "start_project" };
      return done(INTENTS.find((i) => i.id === map[qa.query]), entities, message, context);
    }
  }

  // negation: suppress features the user explicitly rejected
  const suppressedFeatures = entities.feature.filter((f) => isNegated(message, f));

  // follow-up context: "what about for a restaurant?"
  const followUp = /^(what about|and for|for a|and |also |what of)\b/.test(normalized) || /^for\s/.test(normalized);
  if (followUp && context && context.lastIntent) {
    const biz = entities.business[0];
    if (biz && context.lastIntent === "pricing") {
      return done(INTENTS.find((i) => i.id === "pricing"), entities, message, context, INTENTS.find((i) => i.id === biz));
    }
    if (biz) return done(INTENTS.find((i) => i.id === biz), entities, message, context);
    if (entities.feature.length) {
      const feat = entities.feature[0];
      if (suppressedFeatures.includes(feat)) {
        return { text: "No problem — which feature would you like to know more about instead?", cta: null, intentId: null, confidence: 0.6, suggestions: [], context: nextCtx(context, message, null, null) };
      }
      const intentId = FEATURE_INTENT[feat];
      const intent = intentId ? INTENTS.find((i) => i.id === intentId) : null;
      return done(intent, entities, message, context);
    }
  }

  // package follow-up: user replies with a package name after pricing
  if (context && /pricing|starter_plan|business_plan|custom_plan|compare_plans/.test(context.lastIntent || "")) {
    if (/starter|basic|one[- ]?page/.test(normalized)) return done(INTENTS.find((i) => i.id === "starter_plan"), entities, message, context);
    if (/business|growth|up to 5/.test(normalized)) return done(INTENTS.find((i) => i.id === "business_plan"), entities, message, context);
    if (/custom|advanced|platform|booking|ecommerce/.test(normalized)) return done(INTENTS.find((i) => i.id === "custom_plan"), entities, message, context);
  }

  // "what does it include?" — resolve against the last business/topic
  if (/include|features|come with/.test(normalized) && context?.lastTopic) {
    return {
      text: "It includes a custom design for that business, mobile-first layout, WhatsApp + contact setup, and launch support. Business and Custom add forms, analytics, SEO and more.",
      cta: { label: "WhatsApp", url: "https://wa.me/96181090757" },
      intentId: "what_is_included",
      confidence: 0.9,
      suggestions: [],
      context: nextCtx(context, message, "what_is_included", context.lastTopic),
    };
  }

  // "I need a website" with no business yet → ask which business, set context
  const wantsSite = /(need|want|looking for).*(website|site|web page|online presence)/.test(normalized) || /online presence/.test(normalized);
  if (wantsSite && !entities.business.length) {
    return {
      text: "Sure. What kind of business is it?",
      cta: null,
      intentId: "need_website",
      confidence: 0.9,
      suggestions: [],
      context: nextCtx(context, message, "need_website", "business_website"),
    };
  }

  // restaurant entity right after need_website → restaurant-focused answer + offer options
  if (context && context.lastIntent === "need_website" && entities.business.length) {
    const biz = INTENTS.find((i) => i.id === entities.business[0]);
    if (biz) {
      const base = biz.response.split(".")[0] + ".";
      return {
        text: `${base} Packages start at $249. Want to see the options?`,
        cta: biz.cta,
        intentId: biz.id,
        confidence: 0.95,
        suggestions: ["Pricing", "WhatsApp"],
        context: nextCtx(context, message, "options_offer", biz.id),
      };
    }
  }

  // compound answer 1: business + pricing ("how much for a restaurant website")
  const bizEntity = entities.business[0];
  const isPricing = qType === "how_much" || top?.intent?.id === "pricing" || /(price|cost|budget|se3er|adde)/.test(normalized);
  if (bizEntity && isPricing) {
    const biz = INTENTS.find((i) => i.id === bizEntity);
    return done(INTENTS.find((i) => i.id === "pricing"), entities, message, context, biz);
  }

  // compound answer 2: business + language/rtl ("can you make it arabic?")
  if (bizEntity && (entities.feature.includes("arabic") || entities.feature.includes("rtl") || entities.feature.includes("multilingual"))) {
    return {
      text: `Yes — we can build that for your ${bizEntity.replace("_", " ")}. Arabic and RTL support is available, especially in our Custom package. If you tell us what you need, we can discuss the setup on WhatsApp.`,
      cta: { label: "WhatsApp", url: "https://wa.me/96181090757" },
      intentId: "arabic",
      confidence: 0.95,
      suggestions: [],
      context: nextCtx(context, message, "arabic", bizEntity),
    };
  }

  // compound answer 3: business + mobile/responsive
  if (bizEntity && entities.feature.includes("responsive")) {
    return {
      text: `Yes — we build mobile-first websites for ${bizEntity.replace("_", " ")}s, designed to work across phones, tablets and desktops. Packages start at $249, with the final price depending on the scope.`,
      cta: null,
      intentId: "mobile_responsive",
      confidence: 0.95,
      suggestions: ["Pricing", "WhatsApp"],
      context: nextCtx(context, message, "mobile_responsive", bizEntity),
    };
  }

  // compound answer 4: business + feature (booking/ordering)
  if (bizEntity && entities.feature.some((f) => ["booking", "ordering", "forms", "analytics", "seo", "google_maps", "whatsapp"].includes(f))) {
    const feats = entities.feature.filter((f) => !suppressedFeatures.includes(f));
    const featText = feats.length
      ? ` It can include ${feats.join(", ")} where appropriate.`
      : " Without those extras, it stays a clean, focused site.";
    return {
      text: `Yes — we build websites for ${bizEntity.replace("_", " ")}s.${featText} Packages start at $249, depending on scope.`,
      cta: null,
      intentId: "business_website",
      confidence: 0.9,
      suggestions: ["Pricing", "WhatsApp"],
      context: nextCtx(context, message, "business_website", bizEntity),
    };
  }

  // suppressed single feature ("I don't need booking")
  if (suppressedFeatures.length && ranked.length && suppressedFeatures.includes(entities.feature[0])) {
    return { text: "No problem. Is there something specific about our services you'd like to know?", cta: null, intentId: null, confidence: 0.7, suggestions: [], context: nextCtx(context, message, null, context?.lastTopic) };
  }

  // normal business matching with fallback/clarification
  if (!top || top.score < 1.2) {
    if (ranked.length && ranked[0].score >= 0.8) {
      return {
        text: FALLBACK.clarification,
        cta: null,
        intentId: null,
        confidence: ranked[0].score,
        suggestions: ["Services", "Pricing", "Our Work", "WhatsApp"],
        context: nextCtx(context, message, null, context?.lastTopic),
      };
    }
    return {
      text: FALLBACK.fallback,
      cta: null,
      intentId: null,
      confidence: 0,
      suggestions: ["Services", "Pricing", "Our Work", "WhatsApp"],
      context: nextCtx(context, message, null, context?.lastTopic),
    };
  }

  return done(top.intent, entities, message, context);
}

function nextCtx(context, message, lastIntent, lastTopic) {
  return {
    lastIntent: lastIntent || null,
    lastTopic: lastTopic || context?.lastTopic || null,
    lastBusinessEntity: lastTopic && lastTopic !== "business_website" ? lastTopic : context?.lastBusinessEntity || null,
    lastPlan: context?.lastPlan || null,
    lastQuestionType: null,
    recentUserMessages: [...(context?.recentUserMessages || []), message].slice(-5),
  };
}

function done(intent, entities, message, context, businessEntity) {
  if (!intent) {
    return { text: FALLBACK.fallback, cta: null, intentId: null, confidence: 0, suggestions: ["Services", "Pricing", "Our Work", "WhatsApp"], context: nextCtx(context, message, null, context?.lastTopic) };
  }
  let text = intent.response;
  if (businessEntity) text = `${businessEntity.response.split(".")[0]}.\n\n${text}`;
  return {
    text,
    cta: intent.cta,
    intentId: intent.id,
    confidence: 1,
    suggestions: [],
    context: nextCtx(context, message, intent.id, intent.entityType === "business" ? intent.id : entities.business[0] || context?.lastTopic),
  };
}

function doneConvo(c, message, context) {
  const text = pick(c.responses, (context?.recentUserMessages?.length || 0));
  return {
    text,
    cta: null,
    intentId: c.id,
    confidence: 1,
    suggestions: [],
    context: nextCtx(context, message, c.id, context?.lastTopic),
  };
}
