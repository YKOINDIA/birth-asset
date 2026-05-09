export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        テクノロジーで、
        <br />
        <span className="text-[var(--accent)]">新しい価値</span>を創る。
      </h1>
      <p className="mt-6 max-w-xl text-lg text-zinc-400">
        バースアセット株式会社は、モビリティ・エンタメ・スポーツ・自然体験の領域で
        革新的なプロダクトを生み出しています。
      </p>
      <a
        href="#services"
        className="mt-10 rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
      >
        サービスを見る
      </a>
    </section>
  );
}
