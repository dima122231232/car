import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
    title: "LiveLane",
    description: "Real-time auction platform for dealers",
    icons: {
        icon: "/favicon.ico",
    },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}