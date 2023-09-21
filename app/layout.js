import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import clsx from "clsx";
export const metadata = {
  title: "Proj-एकता",
  description: "A united platform for all universities project's",
  icon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
