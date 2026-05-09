export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          会社概要
        </h2>

        <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)]">
          <table className="w-full text-left text-sm">
            <tbody>
              <Row label="会社名" value="バースアセット株式会社（Birth Asset Inc.）" />
              <Row label="設立" value="2018年" />
              <Row label="代表" value="横尾忠司" />
              <Row label="所在地" value="東京都足立区新田1-8-6" />
              <Row label="事業内容" value="モバイルアプリ・Webサービスの企画・開発・運営" />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <tr className="border-b border-[var(--card-border)] last:border-b-0">
      <th className="w-1/3 px-6 py-4 font-medium text-zinc-400">{label}</th>
      <td className="px-6 py-4">{value}</td>
    </tr>
  );
}
