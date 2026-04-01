// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata = {
  title: 'ContractorWorks | Field Work Management',
  description: 'The easiest way to manage your local crews with GPS clock-ins, photos, and timesheets.',
  openGraph: {
    title: 'ContractorWorks',
    description: 'The easiest way to manage your local crews with GPS clock-ins, photos, and timesheets.',
    url: 'https://iansantos.space/landingpages',
    siteName: 'ContractorWorks',
    images: [
      {
        url: '/og-image.jpg', // You will create this in the next step
        width: 1200,
        height: 630,
        alt: 'ContractorWorks App Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh flex flex-col bg-white dark:bg-black text-black dark:text-white">
        {/* Navbar and Footer REMOVED from here */}
        {children}
      </body>
    </html>
  );
}