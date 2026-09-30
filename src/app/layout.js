import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-serif",
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
});

export const metadata = {
  title: "Escape in Yoga",
  description: "Mindful movement and wellness with Avani Jain",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="font-sans min-h-screen">{children}</body>
    </html>
  );
}
