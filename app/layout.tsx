import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-display", weight: ["600", "700", "800"] });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600", "700", "800"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["500", "700", "800"] });

const title = "SpectraSec.id | Komunitas Cyber Security & Ethical Hacking Indonesia";
const description = "SpectraSec.id adalah komunitas belajar keamanan cyber Indonesia untuk ethical hacking, web security, bug hunting, OSINT, Linux, dan responsible disclosure bersama core member SpectraSec.";
const memberKeywords = [
  "Musa Hamonangan Lubis",
  "Rakha Hayya Ilhamsyah",
  "Radit Restu Juniarko",
  "Muhammad Rizki Aulia",
  "Ferry Farhan",
  "Malik Ibrahim",
  "Hammad Matt",
  "Firoos Ghathfaan Ramadhan",
  "Balqis Amanda",
];

export const metadata: Metadata = {
  metadataBase: new URL("https://spectrasec.id"),
  title,
  description,
  applicationName: "SpectraSec.id",
  authors: [{ name: "SpectraSec.id", url: "https://spectrasec.id" }],
  creator: "SpectraSec.id",
  publisher: "SpectraSec.id",
  category: "Cybersecurity Education",
  keywords: [
    "SpectraSec",
    "SpectraSec.id",
    "komunitas cyber security Indonesia",
    "komunitas cybersecurity Indonesia",
    "ethical hacking Indonesia",
    "belajar keamanan cyber",
    "bug hunting Indonesia",
    "web security",
    "OSINT",
    "responsible disclosure",
    ...memberKeywords,
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://spectrasec.id",
    siteName: "SpectraSec.id",
    title,
    description,
    images: [{ url: "/images/spectrasec-hero.png", width: 1393, height: 891, alt: "SpectraSec.id cyber security community Indonesia" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/spectrasec-hero.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id" className={`${sora.variable} ${manrope.variable} ${jetbrainsMono.variable}`}><body>{children}</body></html>;
}
