'use client';
import Image from 'next/image';
import { useRef } from 'react';

type Props = {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
};

export default function LightboxImage({ src, alt, sizes = '100vw', className }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        className="group relative block focus:outline-none"
        aria-label={`${alt} を拡大表示`}
      >
        <Image src={src} alt={alt} fill sizes={sizes} className={className} />
        <span className="absolute bottom-2 right-2 text-[10px] px-2 py-1 rounded bg-black/60 text-white opacity-0 group-hover:opacity-100 transition">
          クリックで拡大
        </span>
      </button>

      <dialog
        ref={ref}
        className="w-full max-w-none bg-transparent p-0"
        onClick={(e) => {
          // 背景クリックで閉じる
          if (e.target === ref.current) ref.current?.close();
        }}
      >
        <div className="fixed inset-0 bg-black/70" />
        <div className="fixed inset-4 md:inset-10 rounded-xl overflow-hidden shadow-xl bg-white">
          <button
            onClick={() => ref.current?.close()}
            className="absolute right-3 top-3 z-10 rounded-lg bg-black/60 text-white px-2 py-1 text-xs"
            aria-label="閉じる"
          >
            閉じる
          </button>
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority={false}
            />
          </div>
        </div>
      </dialog>
    </>
  );
}
