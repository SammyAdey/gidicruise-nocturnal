import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AudioProvider } from "@/components/AudioProvider";
import { FloatingAudioButton } from "@/components/FloatingAudioButton";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gidicruise",
  description: "GIDICRUISE NOCTURNAL & OVMBR CRUISE!",
  openGraph: {
    title: "Gidicruise",
    description: "GIDICRUISE NOCTURNAL & OVMBR CRUISE!",
    url: "https://gidicruise.com",
    siteName: "Gidicruise",
    images: [
      {
        url: "https://res.cloudinary.com/temidayo-falomo/image/upload/v1764264082/opengraph-imae_ys0ynx.jpg",
        width: 1200,
        height: 630,
        alt: "Gidicruise - NOCTURNAL & OVMBR CRUISE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gidicruise",
    description: "GIDICRUISE NOCTURNAL & OVMBR CRUISE!",
    images: [
      "https://res.cloudinary.com/temidayo-falomo/image/upload/v1764264082/opengraph-imae_ys0ynx.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AudioProvider>
          {children}
          <FloatingAudioButton />
        </AudioProvider>
      </body>
    </html>
  );
}
