import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trevor Grant Sidewand",
  description: "Personal site of Trevor Grant Sidewand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">
          <Link href="/" className="text-xl font-bold tracking-tight no-underline text-foreground">
            Trevor Grant Sidewand
          </Link>
          {/* <div className="flex gap-8 text-[15px]">
            <Link href="/writing" className="text-foreground hover:opacity-60 transition-opacity no-underline">
              Writing
            </Link>
          </div> */}
        </nav>
        <main className="flex-1 px-6 md:px-12 lg:px-20 py-8 md:py-12">
          {children}
        </main>
        <footer className="px-6 md:px-12 lg:px-20 py-8" />
      </body>
    </html>
  );
}
