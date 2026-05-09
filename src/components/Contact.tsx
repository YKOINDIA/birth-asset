export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">お問い合わせ</h2>
        <p className="mt-4 text-zinc-400">
          サービスに関するご質問・ご相談はお気軽にお問い合わせください。
        </p>
        <a
          href="mailto:contact@birth-asset.com"
          className="mt-8 inline-block rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
        >
          メールで問い合わせる
        </a>
      </div>
    </section>
  );
}
