export const SITE_NAME = "The Whole Soul";
export const SITE_DESCRIPTION =
  "Clean ingredients. No shortcuts. No artificial tricks. Just wholesome goodness inspired by traditional wisdom, shaped for modern lives.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const ANNOUNCEMENT_TEXT =
  "Free Shipping on Orders Above \u20B9499  \u2022  No Maida  \u2022  No Palm Oil  \u2022  100% Natural";

export const FREE_SHIPPING_THRESHOLD = 499;

export const NAV_LINKS = [
  { label: "Shop All", href: "/shop" },
  { label: "Baked Snacks", href: "/collections/baked-snacks" },
  { label: "Chocolate", href: "/collections/chocolate-collection" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const TRUST_BADGES = [
  { label: "No Maida", icon: "wheat-off" },
  { label: "No Palm Oil", icon: "droplet-off" },
  { label: "Baked Not Fried", icon: "flame" },
  { label: "Gluten Free", icon: "check-circle" },
  { label: "No Preservatives", icon: "shield-check" },
  { label: "100% Natural", icon: "leaf" },
] as const;
