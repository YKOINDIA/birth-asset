export default function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} バースアセット株式会社</p>
        <div className="flex gap-6">
          <a href="#services" className="transition-colors hover:text-white">
            サービス
          </a>
          <a href="#about" className="transition-colors hover:text-white">
            会社概要
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            お問い合わせ
          </a>
        </div>
      </div>
    </footer>
  );
}
