import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trevor Grant",
  description: "Personal site of Trevor Grant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <nav className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-6 border-b border-border">
          <Link href="/" className="text-lg font-semibold tracking-tight no-underline">
            Trevor Grant
          </Link>
          <div className="flex gap-6 text-sm text-muted">
            <Link href="/writing" className="hover:text-foreground transition-colors">
              Writing
            </Link>
            <Link href="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
          </div>
        </nav>
        <main className="flex-1 px-6 md:px-12 lg:px-24 py-12 md:py-16">
          {children}
        </main>
        <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-border text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} Trevor Grant</p>
        </footer>
      </body>
    </html>
  );
}
