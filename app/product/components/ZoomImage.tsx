// components/ZoomImage.tsx
"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

type Props = {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  aspectClass?: string; // 例: "aspect-[16/9]"
};

export default function ZoomImage({
  src,
  alt,
  sizes,
  className,
  aspectClass = "aspect-[16/9]",
}: Props) {
  const [open, setOpen] = useState(false);

  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onKey]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative overflow-hidden rounded-xl group w-full"
        aria-label={`${alt} を拡大表示`}
      >
        <div className={`relative ${aspectClass}`}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className={`object-cover transition-transform duration-300 group-hover:scale-[1.02] ${className || ""}`}
            priority={false}
          />
        </div>
        <span className="absolute right-2 bottom-2 text-[10px] px-2 py-1 rounded bg-black/50 text-white">
          クリックで拡大
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] bg-black/70 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="閉じる"
              className="absolute -top-10 right-0 text-white/90 hover:text-white"
            >
              ✕
            </button>
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-black">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
