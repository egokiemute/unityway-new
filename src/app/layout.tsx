import type { Metadata } from "next";
import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";
import Script from "next/script";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: "Unity Way Company Limited",
    template: "%s | Unity Way Company Limited",
  },
  description:
    "Compassionate domiciliary care delivered in the comfort of your home.",
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
    description:
      "Compassionate domiciliary care delivered in the comfort of your home.",
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
    description:
      "Compassionate domiciliary care delivered in the comfort of your home.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning suppressHydrationWarning>
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="08f587e9-c2c6-4380-8dfe-925ec4174e21"
        ></script>
      </head>
      <body className={`${hankenGrotesk.variable} font-sans antialiased`}>
        {children}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function () {
              var s1 = document.createElement("script"),
                s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = "https://embed.tawk.to/69ce0bbbb2f8a31c44a283f6/1jl6drm17";
              s1.charset = "UTF-8";
              s1.setAttribute("crossorigin", "*");
              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
