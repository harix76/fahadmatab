// ============================================================================
// FAHAD MATAB — CENTRAL BRAND, WHATSAPP & PRODUCT CONFIGURATION
// Domain: fahadmatab.pk | Herbalist: Hakeem Azhar
// Update whatsappE164 & whatsappDisplay below to Hakeem Azhar's live number.
// ============================================================================

export const BRAND = {
  name: 'Fahad Matab',
  domain: 'fahadmatab.pk',
  tagline: 'Herbal Treatment • Natural Healing',
  hakeemName: 'Hakeem Azhar',
  hakeemTitle: 'Chief Unani Herbalist & Formulator',
  // Live WhatsApp number for Hakeem Azhar (country code 92 without +)
  whatsappE164: '923074306090',
  whatsappDisplay: '+92 307 4306090',
  deliveryRegion: 'All Over Pakistan (Cash on Delivery)',
  dispatchWindow: '24–48 Hours Discreet Dispatch',
  logo: '/images/fahad-matab-logo.jpg',
  heroImage: '/images/herbal-collection-hero.jpg',
};

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${BRAND.whatsappE164}?text=${encodeURIComponent(message)}`;
}

export const PRODUCTS = [
  {
    id: 'male-vitality-oil',
    category: 'Male Reproductive Wellness',
    badge: '100% Discreet Parcel',
    title: 'Shahi Quwwat Male Vitality Herbal Oil',
    shortName: 'Male Vitality Herbal Oil',
    subtitle: 'Traditional Unani Herbal Tila Oil for Strength, Stamina & Male Reproductive Health',
    containerType: 'Amber Glass Dropper Oil Bottle',
    image: '/images/male-vitality-oil-bottle.jpg',
    accentColor: '#FFB700',
    description:
      'Formulated personally by Hakeem Azhar as an authentic Unani herbal tila for external topical care—slow-infused with Kashmiri Zafran, Ashwagandha, and Malkangni. Designed to support healthy blood circulation, nerve strength, masculine stamina, and mardana vitality naturally without steroids or synthetic chemicals.',
    highlights: [
      'Supports healthy local blood flow, nerve strength & masculine vitality',
      '100% natural cold-infused Unani herbal oil — zero harsh chemicals',
      'Precision glass dropper bottle for measured, mess-free daily application',
      'Shipped in plain, unmarked discreet packaging with zero product labels outside',
    ],
    keyHerbs: ['Pure Zafran (Saffron)', 'Ashwagandha Root', 'Malkangni Oil', 'Clove & Nutmeg', 'Sweet Almond Base'],
    variants: [
      { id: '60ml', label: '60ml Dropper Bottle', supply: '3–4 Weeks Course', price: 2450, tag: 'Starter' },
      { id: '120ml', label: '120ml Course Bottle', supply: '6–8 Weeks Full Course', price: 4200, tag: 'Most Popular' },
    ],
    usageTip: 'Apply 6–8 drops gently once daily at night as guided by Hakeem Azhar on WhatsApp.',
  },
  {
    id: 'women-hair-oil',
    category: "Women's Herbal Hair Care",
    badge: 'Pure Cold-Pressed Botanicals',
    title: 'Zulf-e-Hayat Women Herbal Hair Oil',
    shortName: "Women's Herbal Hair Oil",
    subtitle: 'Best Herbal Hair Growth Oil in Pakistan for Hair Fall Control, Thickness & Shine',
    containerType: 'Emerald Botanical Dispenser Oil Bottle',
    image: '/images/women-hair-oil-bottle.jpg',
    accentColor: '#258F67',
    description:
      'A pure, non-sticky organic herbal hair oil prepared by Hakeem Azhar from fresh Amla, Bhringraj, Shikakai, Kalonji (Black Seed Oil), and Rosemary leaf extracts infused in cold-pressed sesame and almond oils. Penetrates deep into weakened follicles to control hair fall, calm dry scalp, and support long, thick hair growth.',
    highlights: [
      'Noticeably reduces excessive hair fall & strengthens weak hair roots',
      'Nourishes dry scalp, helps calm dandruff & repairs split ends',
      'Zero mineral oil, zero paraffin, zero artificial fragrance or silicones',
      'Easy-pour emerald apothecary bottle preserves herbal potency from sunlight',
    ],
    keyHerbs: ['Amla & Bhringraj', 'Kalonji (Black Seed)', 'Shikakai Pod', 'Rosemary Extract', 'Virgin Sesame & Almond'],
    variants: [
      { id: '120ml', label: '120ml Oil Bottle', supply: '1 Month Supply', price: 1850, tag: 'Standard' },
      { id: '240ml', label: '240ml Value Bottle', supply: '2–3 Months Supply', price: 3200, tag: 'Best Value' },
    ],
    usageTip: 'Massage gently into scalp roots 3 times a week, leave for 2 hours or overnight, then wash.',
  },
];

export const COMBO_OFFER = {
  id: 'dual-herbal-combo',
  title: 'Complete Family Herbal Oil Bundle (1 + 1)',
  subtitle: '120ml Male Vitality Herbal Oil + 120ml Women Herbal Hair Oil',
  regularPrice: 6050,
  comboPrice: 5450,
  savings: 600,
  perks: [
    'Save Rs. 600 + Free Nationwide Cash on Delivery',
    'Unmarked privacy box — safe for home or office delivery',
    'Direct private dosage & care guidance from Hakeem Azhar on WhatsApp',
  ],
};

export const ANONYMOUS_REVIEWS = [
  {
    id: 'FM-408',
    anonLabel: 'Anonymous Client • #FM-408',
    city: 'Lahore',
    product: 'Male Vitality Herbal Oil',
    productKey: 'male',
    rating: 5,
    verifiedNote: 'Verified Discreet COD Buyer',
    comment:
      'I hesitated for months before ordering online, mostly worrying about privacy at home. The box from fahadmatab.pk had zero sensitive words printed outside, and Hakeem Azhar explained the exact routine respectfully on WhatsApp. After 3 weeks of regular use, stiffness and energy levels feel much steadier.',
    timeAgo: '2 weeks ago',
  },
  {
    id: 'FM-519',
    anonLabel: 'Anonymous Sister • #FM-519',
    city: 'Islamabad',
    product: "Women's Herbal Hair Oil",
    productKey: 'women',
    rating: 5,
    verifiedNote: 'Verified COD Buyer',
    comment:
      'My hair fall after winter was getting scary. This herbal oil smells like genuine amla and kalonji rather than synthetic perfume, and it washes out clean without feeling greasy. Within four weeks my brush had noticeably fewer strands.',
    timeAgo: '1 month ago',
  },
  {
    id: 'FM-634',
    anonLabel: 'Anonymous Buyer • #FM-634',
    city: 'Karachi',
    product: 'Male Vitality Herbal Oil',
    productKey: 'male',
    rating: 5,
    verifiedNote: 'Verified Repeat Order',
    comment:
      'Ordered the 60ml dropper bottle first, then reordered the 120ml bottle. No burning sensation, pure herbal aroma, and completely confidential WhatsApp support. Truly grateful to Hakeem Azhar.',
    timeAgo: '3 weeks ago',
  },
  {
    id: 'FM-712',
    anonLabel: 'Anonymous Buyer • #FM-712',
    city: 'Rawalpindi',
    product: "Women's Herbal Hair Oil",
    productKey: 'women',
    rating: 5,
    verifiedNote: 'Verified COD Buyer',
    comment:
      'Bought the 240ml bottle for both myself and my mother. Dryness on the scalp settled down in the first two washes and baby hairs around the hairline are visibly thicker now.',
    timeAgo: '1 month ago',
  },
  {
    id: 'FM-805',
    anonLabel: 'Anonymous Patient • #FM-805',
    city: 'Multan',
    product: 'Male Vitality Herbal Oil',
    productKey: 'male',
    rating: 5,
    verifiedNote: 'Verified Discreet COD Buyer',
    comment:
      'What makes Fahad Matab different is Hakeem sahib actually asks about your sleep and diet on WhatsApp instead of just pushing bottles. Gentle, warm, natural oil—works gradually and properly.',
    timeAgo: '5 weeks ago',
  },
  {
    id: 'FM-911',
    anonLabel: 'Anonymous Client • #FM-911',
    city: 'Faisalabad',
    product: 'Dual Herbal Care Combo',
    productKey: 'women',
    rating: 5,
    verifiedNote: 'Verified COD Buyer',
    comment:
      'Ordered the couple combo on WhatsApp. Both glass oil bottles arrived bubble-wrapped inside a plain brown carton. No awkward questions from the courier, cash on delivery was smooth.',
    timeAgo: '6 days ago',
  },
];

export const INGREDIENTS = {
  male: [
    { name: 'Pure Kashmiri Zafran', benefit: 'Warming circulatory botanical traditionally prized in Unani tibb for vitality & endurance.' },
    { name: 'Ashwagandha & Malkangni', benefit: 'Classical adaptogenic root & oil extract supporting nerve calm, vigor & strength.' },
    { name: 'Clove, Nutmeg & Olive Base', benefit: 'Gentle micro-circulation infusion balanced with cold-pressed carrier oils for rapid absorption.' },
  ],
  women: [
    { name: 'Amla & Bhringraj Extract', benefit: 'Time-tested herbal duo that fortifies hair roots, slows shedding & boosts natural volume.' },
    { name: 'Kalonji (Black Seed Oil)', benefit: 'Rich in thymoquinone & essential fatty acids to nourish stressed follicles and dry scalp.' },
    { name: 'Shikakai, Rosemary & Almond', benefit: 'Silky botanical blend adding luster, softness & manageability without synthetic silicones.' },
  ],
};

export const FAQS = [
  {
    q: 'Is my parcel packaging 100% private and anonymous?',
    a: 'Yes. Every order from fahadmatab.pk is shipped in a plain, sealed brown parcel with only your delivery details and "Herbal Care" / "Fahad Matab" on the slip. Neither the courier nor anyone receiving the parcel sees the product category.',
  },
  {
    q: 'How does external Unani Tila oil support male vitality without harsh pills?',
    a: 'Unlike commercial oral capsules that may carry synthetic stimulants, Shahi Quwwat Male Vitality Herbal Oil is a traditional external Unani herbal tila infused with Kashmiri Zafran, Ashwagandha, Aqarqarah-inspired warming botanicals, Malkangni, and Clove oil. Applied via gentle nightly massage in measured drops, it naturally supports healthy local blood circulation, nerve strength, and masculine vigor.',
  },
  {
    q: 'Why choose mineral-oil-free Amla, Bhringraj & Kalonji hair oil over commercial oils?',
    a: 'Most supermarket hair oils rely on liquid paraffin (mineral oil), which sits heavily on hair without nourishing roots. Zulf-e-Hayat Women Herbal Hair Oil infuses cold-pressed sesame and sweet almond oils with real Amla, Bhringraj ("King of Hair"), Shikakai, Kalonji (Black Seed), and Rosemary extract—helping curb hair fall, calm dry dandruff-prone scalps, and encourage healthy follicle regrowth.',
  },
  {
    q: 'How do I place an order on fahadmatab.pk via WhatsApp (+92 307 4306090)?',
    a: 'There is no complicated account signup or online card payment needed. Simply click any "Order on WhatsApp" button (or use the 3-step Quick WhatsApp Order card) to message +92 307 4306090 with your pre-filled oil bottle selection and city for fast Cash on Delivery.',
  },
  {
    q: 'Are both herbal oils 100% free from steroids, sildenafil, and parabens?',
    a: 'Yes. Both Shahi Quwwat Male Vitality Herbal Oil and Zulf-e-Hayat Women’s Herbal Hair Oil are cold-infused small-batch botanical oil formulations prepared under Hakeem Azhar’s supervision—zero steroids, zero sildenafil, zero mineral oil, and zero artificial dyes.',
  },
  {
    q: 'How long does discreet Cash on Delivery take across Pakistan?',
    a: 'Orders confirmed on WhatsApp (+92 307 4306090) are dispatched within 24 hours via private courier and delivered across Lahore, Karachi, Islamabad, Rawalpindi, Multan, Faisalabad, Peshawar, Gujranwala, Sialkot, and nationwide in 2–4 working days.',
  },
];
