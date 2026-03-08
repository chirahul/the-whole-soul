export const SITE_NAME = "The Whole Soul";
export const SITE_DESCRIPTION =
  "India's clean-label snack brand. Baked, not fried. No preservatives, no maida, no palm oil. Plant-based snacks made with real ingredients in Pune.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const WHATSAPP_NUMBER = "7709825243";
export const WHATSAPP_URL = `https://wa.me/91${WHATSAPP_NUMBER}?text=Hi! I'd like to place an order.`;

export const ANNOUNCEMENT_MESSAGES = [
  "Free Shipping on Orders Above ₹499 — because your wallet deserves love too",
  "No Maida • No Palm Oil • No Preservatives • 100% Natural",
  "Baked, Not Fried — your gut will thank you later",
];

export const ANNOUNCEMENT_TEXT =
  "Free Shipping Above ₹499  •  No Maida  •  No Palm Oil  •  Baked Not Fried  •  100% Natural";

export const FREE_SHIPPING_THRESHOLD = 499;

export const NAV_LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "Our Story", href: "/about" },
  { label: "Our Philosophy", href: "/philosophy" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const TRUST_BADGES = [
  { label: "No Preservatives", icon: "shield-x" },
  { label: "No Refined Sugar", icon: "candy-off" },
  { label: "No Maida", icon: "wheat-off" },
  { label: "No Palm Oil", icon: "droplet-off" },
  { label: "Vegan", icon: "leaf" },
  { label: "Gluten Free", icon: "grain-off" },
  { label: "No MSG", icon: "flask-off" },
] as const;

export const CLEAN_LABEL_TYPICAL = [
  "Deep Fried",
  "Designed for Shelf Life — Not Health",
  "Long Ingredient List",
  "Artificial Flavours",
  "Refined Flour (Maida)",
];

export const CLEAN_LABEL_OURS = [
  "Baked, Not Fried",
  "Goodness of Real Ingredients",
  "No Synthetic Additives",
  "Real Spices, Real Taste",
  "Made with Whole Grains",
];

export const DIFFERENTIATORS = [
  {
    title: "Plant Based",
    description: "Every product is 100% plant-based and cruelty-free",
    icon: "sprout",
  },
  {
    title: "Baked, Not Fried",
    description: "Our snacks are baked to crispy perfection, never deep fried",
    icon: "flame",
  },
  {
    title: "No Artificial Flavours",
    description: "Only real ingredients, real spices, real taste",
    icon: "sparkles",
  },
  {
    title: "Made in Small Batches",
    description: "Quality over quantity, every single time",
    icon: "heart-handshake",
  },
  {
    title: "Lab Tested",
    description: "Every batch is tested for safety and quality",
    icon: "microscope",
  },
  {
    title: "Deliciously Soulful",
    description: "Because healthy food should taste amazing",
    icon: "smile",
  },
];

export const TESTIMONIALS = [
  {
    name: "Priya M.",
    location: "Mumbai",
    text: "These broccoli chips are insanely good. My kids think they're eating junk food. Little do they know.",
    rating: 5,
    product: "Baked Broccoli Chips",
  },
  {
    name: "Arjun K.",
    location: "Bangalore",
    text: "Finally, a snack brand that doesn't lie on the label. The peanuts are addictive. Like, dangerously addictive.",
    rating: 5,
    product: "Barbeque Coated Peanuts",
  },
  {
    name: "Sneha R.",
    location: "Pune",
    text: "Ordered the date bites for a house party. They disappeared in 10 minutes. Now I order them just for myself.",
    rating: 5,
    product: "Chocolate Coated Date Bites",
  },
  {
    name: "Vikram S.",
    location: "Delhi",
    text: "My wife is super particular about ingredients. She read the label, nodded, and said 'approved.' That never happens.",
    rating: 5,
    product: "Baked Beetroot Chips",
  },
  {
    name: "Meera P.",
    location: "Hyderabad",
    text: "The vada pav chilla is genius. Tastes exactly like the real thing but I don't feel guilty after eating 3 of them.",
    rating: 5,
    product: "Vada Pav Chilla Premix",
  },
];

export const FAQ_ITEMS = [
  {
    question: "What does \"clean label\" mean?",
    answer: "It means our products contain only necessary, natural ingredients — no artificial preservatives, flavours, or fillers. If you can't pronounce it, we probably didn't put it in there.",
  },
  {
    question: "Are your snacks fried?",
    answer: "Nope. Our chips are baked, not deep fried. Your arteries can relax.",
  },
  {
    question: "Are your products suitable for weight loss?",
    answer: "Our snacks are designed to be a better alternative to fried, processed snacks. They're lower in fat and higher in nutrition. But they should be part of a balanced diet — we're snacks, not magic beans.",
  },
  {
    question: "Do you use preservatives?",
    answer: "No synthetic preservatives are used. Ever. We keep it real.",
  },
  {
    question: "Where are you based?",
    answer: "Pune, Maharashtra, India. Born and baked here.",
  },
  {
    question: "Is it really 20% protein?",
    answer: "Yes. Our formulations are designed to deliver 20%+ protein per serving. We don't play with numbers.",
  },
  {
    question: "Is it safe for diabetics?",
    answer: "Our products are designed to reduce sugar spikes due to high protein and fiber. However, please consult your doctor if you have a medical condition — we make snacks, not medical advice.",
  },
  {
    question: "Is it gluten-free?",
    answer: "Yes, all our products are completely gluten-free.",
  },
  {
    question: "Does it contain soy?",
    answer: "No. We do not use soy in any of our products.",
  },
  {
    question: "What's the shelf life?",
    answer: "3 months in sealed packaging. But honestly, they never last that long.",
  },
];
