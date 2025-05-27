import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ankit Kumar",
  description: "Design and Coded by Ankit Kumar, find me on Web by Ankit628792",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <meta name="author" content="ankit628792" />
        <meta name="theme-color" content="#9d9bf6" />
        <link href="https://fonts.googleapis.com/css2?family=Exile&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poetsen+One&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <Script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html >
  );
}
