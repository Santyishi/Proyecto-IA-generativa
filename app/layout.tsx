import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coffeelabbb.netlify.app"),
  title: "CoffeeLab | Inteligencia Artificial & Café",
  description:
    "Explora cómo los modelos generativos redefinen nuestra conexión con el café. Un experimento de diseño y tecnología.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "CoffeeLab | IA & Café",
    description:
      "Donde la inteligencia artificial encuentra su sabor. Descubre prompts, imágenes generadas y audio inmersivo.",
    url: "https://coffeelabbb.netlify.app",
    siteName: "CoffeeLab",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "CoffeeLab - Vista previa",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoffeeLab | IA & Café",
    description:
      "Portfolio IA: prompts, imágenes generadas y audio, todo con estética CoffeeLab.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
 