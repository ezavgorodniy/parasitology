import type { Metadata } from "next";
import Link from "next/link";
import type { JSX, ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Паразитологія котів і собак в Україні",
    template: "%s — Паразитологія котів і собак",
  },
  description: "Інтерактивний довідник паразитів котів і собак за системами органів.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="uk">
      <body>
        <div className="prototype-banner">
          Демо-прототип. Схеми умовні, дані потребують перевірки фахівцем.
        </div>
        <header className="site-header">
          <Link href="/" className="site-header__logo">
            Паразитологія котів і собак
          </Link>
          <nav className="site-header__nav">
            <Link href="/">Схема</Link>
            <Link href="/parasites/">Каталог</Link>
          </nav>
        </header>
        <main className="site-main">{children}</main>
        <footer className="site-footer">
          Інформація на сайті не замінює консультацію ветеринарного лікаря.
        </footer>
      </body>
    </html>
  );
}
