import type { Metadata } from "next";
import { Syne } from "next/font/google"; // 1. Import Font
import "@/styles/globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import { ThemeProvider } from "@/components/layout/theme-provider";
import ClientWrapper from "@/components/layout/client-wrapper";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

// 2. Configure Font
const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne", // Creates CSS variable --font-syne
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: { default: SITE_CONFIG.name, template: `%s | ${SITE_CONFIG.name}` },
  description: SITE_CONFIG.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 3. Apply font variable class to body */}
      <body
        className={`${syne.variable} font-sans flex flex-col min-h-screen antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClientWrapper>
            <Navbar />
            <main className="flex-grow pt-20">{children}</main>
            <Footer />
          </ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
