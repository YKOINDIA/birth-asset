const services = [
  {
    name: "TaxiPro",
    description: "タクシードライバーの売上管理・分析アプリ",
    icon: "🚖",
    links: {
      web: "https://www.taxipro.jp",
      ios: "https://apps.apple.com/jp/app/taxipro/id6762537951",
    },
  },
  {
    name: "FILMO",
    description: "映像制作のマッチングプラットフォーム",
    icon: "🎬",
    links: {
      web: "https://filmo.me",
      ios: "https://apps.apple.com/jp/app/filmo-%E6%98%A0%E7%94%BB%E3%83%8E%E3%83%BC%E3%83%88/id6764256992",
    },
  },
  {
    name: "FIGHT DEMAND",
    description: "格闘技の試合予想・ファン支援アプリ",
    icon: "🥊",
    links: {
      web: "https://fightdemand.com",
    },
  },
  {
    name: "NatureQuest",
    description: "自然体験をもっと身近にするアウトドアアプリ",
    icon: "🌿",
    links: {
      web: "https://www.naturequest.me",
    },
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
              <div className="mt-4 flex gap-3">
                {service.links.web && (
                  <a
                    href={service.links.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[var(--card-border)] px-4 py-1.5 text-xs transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    Web
                  </a>
                )}
                {service.links.ios && (
                  <a
                    href={service.links.ios}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[var(--card-border)] px-4 py-1.5 text-xs transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    iOS
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
