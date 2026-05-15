"use client";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

const SHAKE_CSS = `
  @keyframes shake {
    0%,100% { transform: translateX(0); }
    15%      { transform: translateX(-6px) rotate(-1deg); }
    30%      { transform: translateX(6px) rotate(1deg); }
    45%      { transform: translateX(-5px) rotate(-0.5deg); }
    60%      { transform: translateX(5px) rotate(0.5deg); }
    75%      { transform: translateX(-3px); }
    90%      { transform: translateX(3px); }
  }
  .shake { animation: shake 0.55s ease-in-out; }
`;

export function Hero() {
  const t = useTranslations("hero");
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShaking(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setShaking(true));
      });
    };
    window.addEventListener("shakePlayStore", handler);
    return () => window.removeEventListener("shakePlayStore", handler);
  }, []);

  return (
    <section id="download" className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-20 text-center">
      <style>{SHAKE_CSS}</style>
      <div className="relative max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2ec4b6]/30 bg-[#2ec4b6]/10 text-[#2ec4b6] text-sm mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2ec4b6] animate-pulse" />
          qyp Pro — 30 días gratis
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-[#f4f3f0] leading-[1.1] mb-6 text-balance">
          {t("tagline")}
        </h1>

        <p className="text-lg sm:text-xl text-[#6a8a88] max-w-xl mx-auto mb-12 leading-relaxed whitespace-pre-line">
          {t("description")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            ref={btnRef}
            href="https://play.google.com/store/apps/details?id=com.hermes.nest"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#f4f3f0] text-[#1a1a1c] font-medium hover:bg-white hover:scale-105 transition-all duration-200${shaking ? " shake" : ""}`}
            onAnimationEnd={() => setShaking(false)}
          >
            <PlayIcon />
            <span className="text-left">
              <span className="block text-[10px] leading-none opacity-60">Get it on</span>
              <span className="block text-base font-semibold leading-tight">Google Play</span>
            </span>
          </a>

          {/* App Store — coming soon */}
          <div className="relative opacity-40 cursor-not-allowed select-none">
            <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#f4f3f0] text-[#1a1a1c] font-medium blur-[1.5px]">
              <AppleIcon />
              <span className="text-left">
                <span className="block text-[10px] leading-none opacity-60">Download on the</span>
                <span className="block text-base font-semibold leading-tight">App Store</span>
              </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#f4f3f0] bg-[#1a1a1c]/70 px-2 py-0.5 rounded-full">
                {t("coming_soon")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
    </svg>
  );
}
