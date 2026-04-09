import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Unity Way Company Limited",
    template: "%s | Unity Way Company Limited",
  },
  description: "Compassionate domiciliary care delivered in the comfort of your home.",
  applicationName: "Unity Way Company Limited",
  keywords: [
    "domiciliary care",
    "home care",
    "personal care",
    "live-in care",
    "medication support",
    "companionship support",
    "care at home",
    "Unity Way Company Limited",
  ],
  openGraph: {
    title: "Unity Way Company Limited",
    description: "Compassionate domiciliary care delivered in the comfort of your home.",
    locale: "en_GB",
    images: [
      {
        url: "/seo-image.png",
        width: 1200,
        height: 630,
        alt: "Unity Way Company Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unity Way Company Limited",
    description: "Compassionate domiciliary care delivered in the comfort of your home.",
    images: ["/seo-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning suppressHydrationWarning>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
