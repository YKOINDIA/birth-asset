const services = [
  {
    name: "TaxiPro",
    description: "タクシードライバーの売上管理・分析アプリ",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    links: {
      web: "https://www.taxipro.jp",
      ios: "https://apps.apple.com/jp/app/taxipro/id6762537951",
    },
  },
  {
    name: "FILMO",
    description: "映像制作のマッチングプラットフォーム",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    links: {
      web: "https://filmo.me",
      ios: "https://apps.apple.com/jp/app/filmo-%E6%98%A0%E7%94%BB%E3%83%8E%E3%83%BC%E3%83%88/id6764256992",
    },
  },
  {
    name: "FIGHT DEMAND",
    description: "格闘技の試合予想・ファン支援アプリ",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
    links: {
      web: "https://fightdemand.com",
    },
  },
  {
    name: "NatureQuest",
    description: "自然体験をもっと身近にするアウトドアアプリ",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.592L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 1 7.5 8.046M12.75 3.031a9 9 0 1 0-8.862 10.681M12.75 3.031l.9 3.482m-3.9 8.83a6.735 6.735 0 0 1-1.373-1.025L7.2 13.2a3.375 3.375 0 0 0-2.812-.962l-.51.064" />
      </svg>
    ),
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
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                {service.icon}
              </div>
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
