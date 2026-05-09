"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--card-border)] bg-[var(--background)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight">
          Birth Asset
        </a>

        <nav className="hidden gap-8 text-sm md:flex">
          <a href="#services" className="transition-colors hover:text-[var(--accent)]">
            サービス
          </a>
          <a href="#about" className="transition-colors hover:text-[var(--accent)]">
            会社概要
          </a>
          <a href="#contact" className="transition-colors hover:text-[var(--accent)]">
            お問い合わせ
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-4 border-t border-[var(--card-border)] px-6 py-4 md:hidden">
          <a href="#services" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-[var(--accent)]">
            サービス
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-[var(--accent)]">
            会社概要
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-[var(--accent)]">
            お問い合わせ
          </a>
        </nav>
      )}
    </header>
  );
}
