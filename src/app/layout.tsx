// app/layout.tsx
import "@mantine/core/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import {
  ColorSchemeScript,
  MantineProvider,
  createTheme,
  mantineHtmlProps,
} from "@mantine/core";

const theme = createTheme({
  primaryColor: "violet",
  defaultRadius: "lg",
  fontFamily: "Arial, Helvetica, sans-serif",
  headings: {
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeight: "800",
  },
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iansantos.space"),
  title: "Ian Santos | Full-Stack Developer",
  description:
    "Ian Santos builds thoughtful web products, AI-assisted experiments, and privacy-minded tools.",
  openGraph: {
    title: "Ian Santos | Full-Stack Developer",
    description:
      "Thoughtful web products, AI-assisted experiments, and privacy-minded tools.",
    url: "https://iansantos.space",
    siteName: "Ian Santos",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps} suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body className="min-h-dvh flex flex-col bg-white dark:bg-black text-black dark:text-white">
        <MantineProvider theme={theme} defaultColorScheme="dark">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
