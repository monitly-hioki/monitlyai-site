"use client";
import { useState } from "react";
import Container from "@/components/Container";

type FormState = "idle" | "submitting" | "success" | "error";

const CHALLENGES = [
  "精度が安定しない",
  "回答が遅い（レイテンシ）",
  "コストが高い",
  "指示文（プロンプト）改善が回らない",
  "評価指標が定まっていない",
  "データが散在している／活用しづらい",
  "本番監視ができていない",
  "検索統合AI（RAG)/対話型AI（エージェント）導入支援が欲しい",
  "ローカルLLMを検討している",
];

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");
  const [other, setOther] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const fd = new FormData(e.currentTarget);
    const payload: Record<string, any> = {};
    fd.forEach((v, k) => (payload[k] = v));

    // gather multi-select
    const selectedChallenges = fd.getAll("challenges");
    if (selectedChallenges.length || other) {
      payload["challenges_summary"] = [...selectedChallenges, ...(other ? [other] : [])].join(", ");
    }

    // honeypot
    if (payload["_hp"]) {
      setState("success"); // silently drop
      return;
    }

    // Prefer Web3Forms if key is present
    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (key) {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: key,
            subject: "Monitly.AI：デモ/相談フォーム",
            ...payload,
          }),
        });
        const json = await res.json();
        if (json.success) {
          setState("success");
          (e.target as HTMLFormElement).reset();
          setOther("");
          return;
        } else {
          setState("error");
          return;
        }
      } catch {
        setState("error");
        return;
      }
    }

    // Fallback: mailto（キー未設定でも即動作）
    try {
      const lines = [
        `お名前: ${payload.name || ""}`,
        `会社名: ${payload.company || ""}`,
        `メール: ${payload.email || ""}`,
        `電話: ${payload.phone || ""}`,
        `導入フェーズ: ${payload.phase || ""}`,
        `希望する支援: ${Array.isArray(payload.needs) ? (payload.needs as string[]).join(", ") : (payload.needs || "")}`,
        `現在の課題: ${payload.challenges_summary || ""}`,
        `連絡希望: ${payload.contact_timing || ""}`,
        `補足: ${payload.message || ""}`,
      ];
      const body = encodeURIComponent(lines.join("\n"));
      const to = encodeURIComponent("hioki@aradia.asia");
      const subject = encodeURIComponent("Monitly.AI：デモ/相談フォーム");
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
      setState("success");
    } catch {
      setState("error");
    }
  }

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-[#EAF2FF] to-white py-12 md:py-16">
        <Container>
          <h1 className="text-3xl md:text-5xl font-bold">お問い合わせ / デモのご依頼</h1>
          <p className="mt-3 text-neutral-600 max-w-3xl">
            現状の課題とゴールをお聞かせください。最短ルートの進め方をご提案します。
            <span className="ml-2 rounded-full bg-[#0056FF]/10 text-[#0056FF] text-xs px-2 py-0.5">
              {process.env.NEXT_PUBLIC_WEB3FORMS_KEY ? "API送信（推奨）" : "メール送信（即時）"}
            </span>
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3">
              <form onSubmit={onSubmit} className="space-y-6">
                {/* honeypot */}
                <input type="text" name="_hp" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">お名前 *</label>
                    <input name="name" required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">会社名</label>
                    <input name="company" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">メール *</label>
                    <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">電話</label>
                    <input name="phone" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" />
                  </div>
                </div>

                {/* 現在の課題（複数選択） */}
                <div>
                  <div className="text-sm font-medium">現在の課題（複数選択可）</div>
                  <div className="mt-2 grid md:grid-cols-2 gap-2">
                    {CHALLENGES.map((c) => (
                      <label key={c} className="flex items-start gap-2 rounded-xl border border-neutral-200 p-2">
                        <input type="checkbox" name="challenges" value={c} className="mt-1" />
                        <span className="text-sm">{c}</span>
                      </label>
                    ))}
                    <div className="md:col-span-2">
                      <label className="block text-sm">その他</label>
                      <input
                        className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"
                        placeholder="自由入力（任意）"
                        value={other}
                        onChange={(e) => setOther(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* 導入フェーズ */}
                <div>
                  <div className="text-sm font-medium">導入フェーズ</div>
                  <div className="mt-2 grid md:grid-cols-4 gap-2 text-sm">
                    {["検討中", "PoC中", "一部運用", "全社展開"].map((p) => (
                      <label key={p} className="flex items-center gap-2 rounded-xl border border-neutral-200 p-2">
                        <input type="radio" name="phase" value={p} />
                        {p}
                      </label>
                    ))}
                  </div>
                </div>

                {/* 希望する支援（複数選択） */}
                <div>
                  <div className="text-sm font-medium">希望する支援（複数選択可）</div>
                  <div className="mt-2 grid md:grid-cols-2 gap-2 text-sm">
                    {[
                      "Monitlyの評価導入",
                      "データ整備（AIが使える状態に）",
                      "指示文（プロンプト）評価/改善",
                      "検索統合AI（RAG)/対話型AI（エージェント）導入支援（パートナー）",
                      "運用改善ワークショップ",
                    ].map((n) => (
                      <label key={n} className="flex items-center gap-2 rounded-xl border border-neutral-200 p-2">
                        <input type="checkbox" name="needs" value={n} />
                        {n}
                      </label>
                    ))}
                  </div>
                </div>

                {/* 連絡希望 */}
                <div className="grid md:grid-cols-3 gap-2 text-sm">
                  <div className="col-span-1">
                    <label className="block font-medium">連絡希望</label>
                    <select name="contact_timing" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2">
                      <option value="">未指定</option>
                      <option>ASAP</option>
                      <option>今週中</option>
                      <option>来週以降</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium">補足（任意）</label>
                    <textarea name="message" rows={4} className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    disabled={state === "submitting"}
                    className="inline-flex items-center rounded-2xl bg-[#0056FF] text-white px-6 py-3 font-semibold disabled:opacity-60"
                  >
                    {state === "submitting" ? "送信中…" : "送信する"}
                  </button>
                  {state === "success" && (
                    <span className="ml-3 text-sm text-green-600">送信が完了しました。折り返しご連絡します。</span>
                  )}
                  {state === "error" && (
                    <span className="ml-3 text-sm text-red-600">送信に失敗しました。恐れ入りますがメールでご連絡ください。</span>
                  )}
                </div>
              </form>
            </div>

            <aside className="md:col-span-2">
              <div className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm">
                <div className="font-semibold">Monitly.AI株式会社</div>
                <div className="text-sm mt-1 text-neutral-600">〒141-0033 東京都品川区西品川1-1-1 TUNNEL TOKYO 9F</div>
                <div className="text-sm mt-2">
                  お急ぎの方は <a className="text-[#0056FF] underline" href="mailto:hioki@aradia.asia">hioki@aradia.asia</a> へ
                </div>
                <ul className="mt-4 text-sm text-neutral-600 list-disc list-inside space-y-1">
                  <li>評価からの小さなPoC開始が可能</li>
                  <li>既存RAG/対話型AI（エージェント）にも後付け導入OK</li>
                  <li>パートナー連携の特別条件あり</li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}
