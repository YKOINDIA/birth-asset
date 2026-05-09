export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">お問い合わせ</h2>
        <p className="mt-4 text-zinc-400">
          サービスに関するご質問・ご相談はお気軽にお問い合わせください。
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://line.me/ti/p/OQDDi5SIDX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#06C755] px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386a.63.63 0 0 1-.63-.629V8.108c0-.345.281-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016a.63.63 0 0 1-.63.629.626.626 0 0 1-.51-.262l-2.455-3.326v2.958a.633.633 0 0 1-.63.63.63.63 0 0 1-.63-.63V8.108a.63.63 0 0 1 .63-.63c.2 0 .385.096.51.262l2.455 3.326V8.108a.63.63 0 0 1 1.26 0v4.771zm-5.741 0a.63.63 0 0 1-1.26 0V8.108a.63.63 0 0 1 1.26 0v4.771zm-2.527.629H4.856a.63.63 0 0 1-.63-.629V8.108a.63.63 0 0 1 1.26 0v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M12 1C5.373 1 0 5.373 0 12s5.373 11 12 11 12-4.373 12-11S18.627 1 12 1" />
            </svg>
            LINEで問い合わせる
          </a>
          <a
            href="mailto:verseasset@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] px-8 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            メールで問い合わせる
          </a>
        </div>
      </div>
    </section>
  );
}
