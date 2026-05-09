const services = [
  {
    name: "TaxiPro",
    description: "タクシードライバーの売上管理・分析アプリ",
    icon: "🚖",
  },
  {
    name: "FILMO",
    description: "映像制作のマッチングプラットフォーム",
    icon: "🎬",
  },
  {
    name: "FIGHT DEMAND",
    description: "格闘技の試合予想・ファン支援アプリ",
    icon: "🥊",
  },
  {
    name: "NatureQuest",
    description: "自然体験をもっと身近にするアウトドアアプリ",
    icon: "🌿",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Our Services
        </h2>
        <p className="mt-4 text-center text-zinc-400">
          4つの事業領域でイノベーションを推進
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.name}
              className="group rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-8 transition-all hover:border-[var(--accent)]/40 hover:shadow-lg hover:shadow-[var(--accent)]/5"
            >
              <span className="text-4xl">{service.icon}</span>
              <h3 className="mt-4 text-xl font-semibold">{service.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
