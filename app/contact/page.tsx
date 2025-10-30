// app/contact/page.tsx
'use client';

import { useState, useCallback } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    dept: '',
    title: '',
    phone: '',
    category: '',
    phase: '',
    challenges: [] as string[],
    supports: [] as string[],
    body: '',
  });

  const categories = ['デモ依頼', '資料請求', 'パートナーシップについて', 'その他', '営業'];
  const phases = ['検討中', 'PoC中', '一部運用', '全社展開'];
  const challengeOptions = [
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
  const supportOptions = [
    'Monitly.AIの評価導入',
    'データ整備',
    'プロンプト評価改善',
    'RAG・AIエージェント導入支援',
    '運用改善ワークショップ',
  ];

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const list = form[name as keyof typeof form] as string[];
      setForm((prev) => ({
        ...prev,
        [name]: checked ? [...list, value] : list.filter((v) => v !== value),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const resetMessages = () => {
    setStatus('idle');
    setMessage('');
  };

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (status === 'loading') return;
      resetMessages();
      setStatus('loading');

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            company: form.company.trim(),
            phone: form.phone.trim(),
            department: form.dept.trim(),
            title: form.title.trim(),
            category: form.category,
            phase: form.phase,
            challenges: form.challenges,
            supports: form.supports,
            message: form.body.trim(),
          }),
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        await res.json().catch(() => ({}));

        setStatus('success');
        setMessage('送信しました。担当者よりご連絡いたします。');
        setForm({
          name: '',
          email: '',
          company: '',
          dept: '',
          title: '',
          phone: '',
          category: '',
          phase: '',
          challenges: [],
          supports: [],
          body: '',
        });
      } catch (err: any) {
        setStatus('error');
        setMessage('送信に失敗しました。時間をおいて再度お試しください。');
        console.error('[contact] submit failed:', err?.message || err);
      }
    },
    [form, status]
  );

  const disabled = status === 'loading';

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
              <input name="name" required value={form.name} onChange={onChange}
                className="w-full rounded-lg border border-zinc-300 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">メールアドレス（必須）</label>
              <input type="email" name="email" required value={form.email} onChange={onChange}
                className="w-full rounded-lg border border-zinc-300 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">会社名（必須）</label>
              <input name="company" required value={form.company} onChange={onChange}
                className="w-full rounded-lg border border-zinc-300 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">電話番号（任意）</label>
              <input name="phone" value={form.phone} onChange={onChange}
                className="w-full rounded-lg border border-zinc-300 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">部署（任意）</label>
              <input name="dept" value={form.dept} onChange={onChange}
                className="w-full rounded-lg border border-zinc-300 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">役職（任意）</label>
              <input name="title" value={form.title} onChange={onChange}
                className="w-full rounded-lg border border-zinc-300 px-3 py-2" />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">お問い合わせ種別（必須）</label>
            <select name="category" required value={form.category} onChange={onChange}
              className="w-full rounded-lg border border-zinc-300 px-3 py-2">
              <option value="">選択してください</option>
              {categories.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">生成AI導入フェーズ（必須）</label>
            <select name="phase" required value={form.phase} onChange={onChange}
              className="w-full rounded-lg border border-zinc-300 px-3 py-2">
              <option value="">選択してください</option>
              {phases.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">現在の課題（複数選択可）</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {challengeOptions.map((opt) => (
                <label key={opt} className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" name="challenges" value={opt}
                    checked={form.challenges.includes(opt)} onChange={onChange} />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">希望する支援内容（複数選択可）</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {supportOptions.map((opt) => (
                <label key={opt} className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" name="supports" value={opt}
                    checked={form.supports.includes(opt)} onChange={onChange} />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">お問い合わせ内容（必須）</label>
            <textarea name="body" rows={6} required value={form.body} onChange={onChange}
              className="w-full rounded-lg border border-zinc-300 px-3 py-2" />
          </div>

          {status === 'success' && (
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-md px-3 py-2">{message}</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">{message}</p>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={disabled}
              className={`rounded-xl px-4 py-2 font-medium text-white ${
                disabled ? 'bg-zinc-400 cursor-not-allowed' : 'bg-zinc-900 hover:bg-zinc-800'
              }`}
            >
              {status === 'loading' ? '送信中…' : '送信する'}
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
