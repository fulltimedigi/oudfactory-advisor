# Oud Factory Fragrance Advisor 🌿

**مستشار عطور Oud Factory — أداة تشخيصية تفاعلية**

A bilingual (EN/AR) interactive fragrance advisor built specifically for [oudfactory.com](https://www.oudfactory.com). Guides visitors through 6 questions and recommends the perfect product from a curated selection of 25 items.

---

## What It Does / ما تفعله الأداة

- Asks 6 smart questions about usage, occasion, intensity, scent character, oud preference, and budget
- Scores all 25 products against the answers using a weighted algorithm
- Returns a ranked result: **Top Match + Close Alternatives + Full Collection**
- Auto-detects Arabic/English browser language (toggle available)
- Direct links to product pages on oudfactory.com (Shopify)
- WhatsApp CTA button (+971-56-878-8399) for personal consultation

---

## Files / الملفات

| File | Description |
|------|-------------|
| `index.html` | The complete advisor — all CSS, JS, and content in one self-contained file |
| `README.md` | This document |
| `SETUP.md` | Step-by-step Shopify integration guide |
| `collect-leads.gs` | Google Apps Script to log visitor data to a Google Sheet |

---

## Products Covered / المنتجات المغطاة (25)

### Perfumes / عطور بخاخ (10)
| ID | Name | Character |
|----|------|-----------|
| P1 | IL Mio Cuore Parfum | Musky Floral |
| P2 | Katana Extrait de Parfum | Oud Leather |
| P3 | Tobaco Cubano Parfum | Tobacco Smoky |
| P4 | Harukaze Parfum | Fresh Musky |
| P5 | Coração De Rosas Parfum | Floral Rose |
| P6 | Fumo Dolce Extrait de Parfum | Oud Sweet |
| P7 | Akai Kemuri Parfum | Smoky Sweet |
| P8 | Sabaku Nomad Parfum | Oriental Woody |
| P9 | Moya Kvitka Eau de Parfum | Musky Floral |
| P10 | Flamme Rouge Extrait de Parfum | Pure Oud |

### Oud Oils / زيوت العود (8)
| ID | Name | Character |
|----|------|-----------|
| O1 | Senshi Oud Oil | Pure Oud |
| O2 | Deer Musk Oil | Animalic Musk |
| O3 | Rosa Escura Oil | Dark Rose & Oud |
| O4 | Thai Oud Oil | Sweet Woody |
| O5 | Fumo Dolce Oil | Sweet Oud |
| O6 | Flamme Rouge Oil | Pure Oud |
| O7 | Katana Oil | Oud Leather |
| O8 | Cambodian Oud Oil | Sweet Woody |

### Agarwood / أخشاب العود (3)
| ID | Name | Character |
|----|------|-----------|
| W1 | Indian Gold Agarwood | Bold Oriental |
| W2 | Malaysian Agarwood | Soft Fruity |
| W3 | Kalimantan Agarwood | Wild Resinous |

### Gift Sets / هدايا (2)
| ID | Name |
|----|------|
| G1 | 3 Oud Oil Set |
| G2 | 2 Oud Oil Box |

---

## Scoring System / آلية التقييم

Each product is scored (max ~100 pts) across 6 dimensions:

| Question | Weight | Factor |
|----------|--------|--------|
| q1 — Usage type | 35 pts | personal / home / gift |
| q4 — Scent character | 30 pts | warm / smoky / fresh / floral / sweet |
| q3 — Intensity | 15 pts | strong / moderate / quiet |
| q2 — Occasion | 12 pts | daily / events / both |
| q6 — Budget | 8 pts | eco / mid / high |
| q5 — Oud affinity | +5–10 bonus | lover / oil / moderate / musk / light |

---

## Customization / التخصيص

All products, questions, and scoring weights are in the `<script>` section of `index.html`. To add or remove products, edit the `const P = { ... }` object. Each product needs:

```js
{
  n: "Product Name",           // English name
  nAr: "اسم المنتج",           // Arabic name
  category: "Parfum",          // Display category
  sale: "686.00",              // Current price (USD)
  was: "980.00",               // Original price
  url: "https://...",          // Shopify product URL
  desc: "English description", // Short description (EN)
  descAr: "وصف عربي",          // Short description (AR)
  tags: ["Tag1","Tag2"],       // Display tags
  usage: "wear",               // "wear" or "burn"
  family: "musky_floral",      // Scent family (see scoring map)
  intensity: 2,                // 1=subtle, 2=moderate, 3=strong
  occasions: ["daily","events"], // Occasions array
  tier: "mid"                  // "eco", "mid", "high", or "luxury"
}
```

---

## Built by / بُني بواسطة

**FullTimeDigi** — Diagnostic Funnel Specialists  
Powered by FTD Engine v1
