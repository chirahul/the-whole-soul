import type { Metadata } from "next";
import { playfair, dmSans, fraunces } from "@/lib/fonts";
import { CartProvider } from "@/context/CartContext";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BackToTop } from "@/components/ui/BackToTop";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Clean Label Snacks Made with Soul`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "clean label snacks",
    "baked snacks",
    "no maida snacks",
    "healthy snacks India",
    "plant based snacks",
    "The Whole Soul",
    "Pune snacks",
    "no preservatives",
    "gluten free snacks",
  ],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Clean Label Snacks Made with Soul`,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${fraunces.variable}`}
    >
      <body className="antialiased">
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartDrawer />
          <WhatsAppFloat />
          <ScrollReveal />
          <BackToTop />
        </CartProvider>
      </body>
    </html>
  );
}
