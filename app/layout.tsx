import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";


const fontSettings = Geist ({
  variable: "--font-settings",
  weight: ["400"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: {
    default: "DECISIA — Decision Intelligence for Small Businesses",
    template: "%s — DECISIA",
  },
  description:
    "DECISIA helps small businesses transform operational data into clear, actionable decisions using intelligent insights, forecasts, and recommendations.",
  applicationName: "DECISIA",
  keywords: [
    "decision intelligence",
    "business intelligence",
    "small business analytics",
    "data-driven decisions",
    "forecasting",
    "AI for business",
    "SaaS B2B",
  ],
  authors: [{ name: "DECISIA" }],
  creator: "DECISIA",
  publisher: "DECISIA",
  metadataBase: new URL("https://decisia.ai"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "DECISIA — Turn Data Into Decisions",
    description:
      "A Decision Intelligence platform that transforms business data into insights, forecasts, and concrete actions.",
    type: "website",
    locale: "en_US",
    siteName: "DECISIA",
  },
  twitter: {
    card: "summary_large_image",
    title: "DECISIA — Decision Intelligence Platform",
    description:
      "Transform your business data into decisions that drive measurable impact.",
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
        className={`${fontSettings.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
