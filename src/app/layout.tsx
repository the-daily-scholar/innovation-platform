import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Daily Scholar - Global Student-Driven Platform",
  description: "A global student-driven platform combining digital newspaper with opportunity sharing, student-led projects, and research collaboration.",
  keywords: ["student", "scholar", "education", "research", "opportunities", "global", "newspaper", "articles", "campaigns"],
  authors: [{ name: "The Daily Scholar Team" }],
  openGraph: {
    title: "The Daily Scholar",
    description: "Global student-driven platform for news, opportunities, and research collaboration",
    url: "https://thedailyscholar.com",
    siteName: "The Daily Scholar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Daily Scholar",
    description: "Global student-driven platform for news, opportunities, and research collaboration",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}