import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], display: "swap" });


export const viewport = {
  themeColor: "#9d9bf6",
}

export const metadata = {
  title: "Ankit Kumar – Developer Portfolio",
  description:
    "Explore the portfolio of Mr. Ank, a passionate developer creating responsive websites and scalable applications with clean, efficient code.",
  metadataBase: new URL("https://ankit.delanki.com"),
  authors: [{ name: "Ankit Kumar", url: "https://ankit.delanki.com" }],
  creator: "Ankit Kumar",
  keywords: [
    "Ankit Kumar",
    "Developer Portfolio",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "JavaScript",
    "Frontend",
    "Backend",
    "Ankit628792",
    "ankit_628292",
    "안키트"
  ],
  openGraph: {
    title: "Ankit Kumar – Developer Portfolio",
    description:
      "Explore the portfolio of Mr. Ank, a passionate developer creating responsive websites and scalable applications with clean, efficient code.",
    url: "https://ankit.delanki.com",
    siteName: "Ankit Kumar Portfolio",
    images: [
      {
        url: "https://ankit.delanki.com/favicon.png",
        width: 1200,
        height: 630,
        alt: "Ankit Kumar Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Kumar – Developer Portfolio",
    description:
      "Explore the portfolio of Mr. Ank, a passionate developer creating responsive websites and scalable applications with clean, efficient code.",
    images: ["https://ankit.delanki.com/favicon.png"],
    creator: "@ankit628792",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ankit Kumar" />

        {/* Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Exile&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poetsen+One&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        {/* GSAP Scripts */}
        <Script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js" strategy="beforeInteractive" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
