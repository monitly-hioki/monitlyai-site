'use client';

import { useState } from 'react';

type Form = {
  name: string;
  email: string;
  company: string;
  phone: string;
  dept: string;
  title: string;
  category: string;
  phase: string;
  challenges: string[];
  supports: string[];
  body: string;
};

const INIT: Form = {
  name: '',
  email: '',
  company: '',
  phone: '',
  dept: '',
  title: '',
  category: '',
  phase: '',
  challenges: [],
  supports: [],
  body: '',
};

const CHALLENGE_OPTIONS = [
  '精度が安定しない',
  '回答が遅い',
  'コストが高い',
  'プロンプト改善が回らない',
  '評価指標が定まってない',
  'データが散在している/活用しづらい',
  '本番監視ができていない',
  'RAG/AIエージェント導入支援が欲しい',
  'ローカルLLMを検討している',
];

const SUPPORT_OPTIONS = [
  'Monitly.AIの評価導入',
  'データ整備',
  'プロンプト評価改善',
  'RAG・AIエージェント導入支援',
  '運用改善ワークショップ',
];

export default function Page() {
  const [form, setForm] = useState<Form>(INIT);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const t = e.target;
    const name = t.name as keyof Form;

    if (t instanceof HTMLInputElement && t.type === 'checkbox') {
      const v = t.value;
      const checked = t.checked;
      if (name === 'challenges' || name === 'supports') {
        const prev = (form[name] as string[]) || [];
        const next = checked ? Array.from(new Set([...prev, v])) : prev.filter(x => x !== v);
        setForm(s => ({ ...s, [name]: next }));
      }
      return;
    }

    const value = t.value ?? '';
    setForm(s => ({ ...s, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setErr(null);
    setDone(false);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          department: form.dept,
          title: form.title,
          category: form.category,
          phase: form.phase,
          challenges: form.challenges,
          supports: form.supports,
          message: form.body,
        }),
      });
      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(text || `HTTP ${res.status}`);
      }
      setDone(true);
      setForm(INIT);
    } catch (e: any) {
      setErr(e?.message || '送信に失敗しました');
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="px-6 md:px-10 py-14 bg-white text-zinc-800">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold">お問い合わせ</h1>
        <p className="mt-3 text-zinc-600">
          下記フォームよりお問い合わせください。内容を確認のうえ、担当者からご連絡いたします。
        </p>

        <form className="mt-8 space-y-8" onSubmit={onSubmit} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-1">お名前（必須）</label>
              <input
                required
                className="w-full rounded-lg border border-zinc-300 px-3 py-2"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={onChange}
              />
            </div>
            <div>
              <label className="block text-sm mb-1">メールアドレス（必須）</label>
              <input
                type="email"
                required
                className="w-full rounded-lg border border-zinc-300 px-3 py-2"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={onChange}
              />
            </div>
            <div>
              <label className="block text-sm mb-1">会社名（必須）</label>
              <input
                required
                className="w-full rounded-lg border border-zinc-300 px-3 py-2"
                name="company"
                autoComplete="organization"
                value={form.company}
                onChange={onChange}
              />
            </div>
            <div>
              <label className="block text-sm mb-1">電話番号（任意）</label>
              <input
                className="w-full rounded-lg border border-zinc-300 px-3 py-2"
                name="phone"
                autoComplete="tel"
                value={form.phone}
                onChange={onChange}
              />
            </div>
            <div>
              <label className="block text-sm mb-1">部署（任意）</label>
              <input
                className="w-full rounded-lg border border-zinc-300 px-3 py-2"
                name="dept"
                value={form.dept}
                onChange={onChange}
              />
            </div>
            <div>
              <label className="block text-sm mb-1">役職（任意）</label>
              <input
                className="w-full rounded-lg border border-zinc-300 px-3 py-2"
                name="title"
                value={form.title}
                onChange={onChange}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">お問い合わせ種別（必須）</label>
            <select
              name="category"
              required
              className="w-full rounded-lg border border-zinc-300 px-3 py-2"
              value={form.category}
              onChange={onChange}
            >
              <option value="">選択してください</option>
              <option value="デモ依頼">デモ依頼</option>
              <option value="資料請求">資料請求</option>
              <option value="パートナーシップについて">パートナーシップについて</option>
              <option value="その他">その他</option>
              <option value="営業">営業</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">生成AI導入フェーズ（必須）</label>
            <select
              name="phase"
              required
              className="w-full rounded-lg border border-zinc-300 px-3 py-2"
              value={form.phase}
              onChange={onChange}
            >
              <option value="">選択してください</option>
              <option value="検討中">検討中</option>
              <option value="PoC中">PoC中</option>
              <option value="一部運用">一部運用</option>
              <option value="全社展開">全社展開</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">現在の課題（複数選択可）</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CHALLENGE_OPTIONS.map(opt => (
                <label key={opt} className="flex items-center space-x-2 text-sm">
                  <input
                    type="checkbox"
                    name="challenges"
                    value={opt}
                    checked={form.challenges.includes(opt)}
                    onChange={onChange}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">希望する支援内容（複数選択可）</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SUPPORT_OPTIONS.map(opt => (
                <label key={opt} className="flex items-center space-x-2 text-sm">
                  <input
                    type="checkbox"
                    name="supports"
                    value={opt}
                    checked={form.supports.includes(opt)}
                    onChange={onChange}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">お問い合わせ内容（必須）</label>
            <textarea
              name="body"
              rows={6}
              required
              className="w-full rounded-lg border border-zinc-300 px-3 py-2"
              value={form.body}
              onChange={onChange}
            />
          </div>

          {err && <p className="text-sm text-red-600">{err}</p>}
          {done && <p className="text-sm text-green-700">送信しました。担当者よりご連絡します。</p>}

          <div className="pt-2">
            <button
              type="submit"
              disabled={sending}
              className="rounded-xl px-4 py-2 font-medium text-white bg-zinc-900 hover:bg-zinc-800 disabled:opacity-50"
            >
              {sending ? '送信中…' : '送信する'}
            </button>
          </div>

          <p className="mt-4 text-[12px] text-zinc-500">
            送信いただいた個人情報は当社プライバシーポリシーに基づき適切に取り扱います。
          </p>
        </form>
      </article>
    </main>
  );
}
