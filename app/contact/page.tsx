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
    body: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const resetMessages = () => {
    setStatus('idle');
    setMessage('');
  };

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'loading') return;

    // 送信前に必ずリセット（成功と失敗が同時表示されるのを防ぐ）
    resetMessages();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          dept: form.dept.trim(),
          title: form.title.trim(),
          message: form.body.trim(),
        }),
      });

      // 2xx 以外は明示的にエラーにする
      if (!res.ok) {
        const t = await res.text().catch(() => '');
        throw new Error(`HTTP ${res.status} ${t || ''}`.trim());
      }

      // API が JSON を返すことを前提にする（返らない場合は無視して良い）
      await res
        .json()
        .catch(() => ({} as any));

      setStatus('success');
      setMessage('送信しました。担当者よりご連絡いたします。');

      // 必要ならフォーム初期化
      setForm({ name: '', email: '', company: '', dept: '', title: '', body: '' });
    } catch (err: any) {
      // 成功ルートからは来ない（上で return/throw しているため）
      setStatus('error');
      setMessage('送信に失敗しました。時間をおいて再度お試しください。');
      console.error('[contact] submit failed:', err?.message || err);
    }
  }, [form, status]);

  const disabled = status === 'loading';

  return (
    <main className="px-6 md:px-10 py-14 bg-white text-zinc-800">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold">お問い合わせ</h1>
        <p className="mt-3 text-zinc-600">
          下記フォームよりお問い合わせください。内容を確認のうえ、担当者からご連絡いたします。
        </p>

        <form className="mt-8 space-y-6" onSubmit={onSubmit} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-zinc-600 mb-1">お名前（必須）</label>
              <input
                name="name"
                required
                value={form.name}
                onChange={onChange}
                className="w-full rounded-lg border border-zinc-300 px-3 py-2"
                autoComplete="name"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-600 mb-1">メールアドレス（必須）</label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={onChange}
                className="w-full rounded-lg border border-zinc-300 px-3 py-2"
                autoComplete="email"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-600 mb-1">会社名（必須）</label>
              <input
                name="company"
                required
                value={form.company}
                onChange={onChange}
                className="w-full rounded-lg border border-zinc-300 px-3 py-2"
                autoComplete="organization"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-600 mb-1">部署（任意）</label>
              <input
                name="dept"
                value={form.dept}
                onChange={onChange}
                className="w-full rounded-lg border border-zinc-300 px-3 py-2"
                autoComplete="organization-title"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-zinc-600 mb-1">役職（任意）</label>
              <input
                name="title"
                value={form.title}
                onChange={onChange}
                className="w-full rounded-lg border border-zinc-300 px-3 py-2"
                autoComplete="organization-title"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-zinc-600 mb-1">お問い合わせ内容</label>
            <textarea
              name="body"
              rows={6}
              value={form.body}
              onChange={onChange}
              className="w-full rounded-lg border border-zinc-300 px-3 py-2"
            />
          </div>

          {/* ステータス表示（相互排他） */}
          {status === 'success' && (
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-md px-3 py-2">
              {message}
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">
              {message}
            </p>
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
