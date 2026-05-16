"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const otherLocale = locale === "es" ? "en" : "es";

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 bg-[#1a1617] border-b border-[#2a2a2e]">
      <Link href={`/${locale}`} className="flex items-center gap-2">
        <Image src="/qyp-logo.png" alt="qyp" width={28} height={28} className="rounded-lg" />
        <span className="text-xl font-semibold tracking-wide text-[#f4f3f0]">qyp</span>
      </Link>
      <div className="flex items-center gap-6">
        <a href="#features" className="hidden sm:block text-sm text-[#6a8a88] hover:text-[#f4f3f0] transition-colors">
          {t("features")}
        </a>
        <a href="#pro" className="hidden sm:block text-sm text-[#6a8a88] hover:text-[#f4f3f0] transition-colors">
          {t("pro")}
        </a>
        <Link href={`/en/blog`} className="hidden sm:block text-sm text-[#6a8a88] hover:text-[#f4f3f0] transition-colors">
          {t("blog")}
        </Link>
        <Link
          href={`/${otherLocale}`}
          className="text-sm text-[#6a8a88] hover:text-[#f4f3f0] transition-colors uppercase"
        >
          {otherLocale}
        </Link>
        <a
          href="#download"
          className="text-sm px-4 py-2 rounded-full bg-[#2ec4b6] text-[#1a1a1c] font-medium hover:bg-[#1a9e94] transition-colors"
          onClick={(e) => {
            const hero = document.getElementById("download");
            if (!hero) return;
            const rect = hero.getBoundingClientRect();
            if (rect.top >= -10 && rect.top <= 10) {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent("shakePlayStore"));
            }
          }}
        >
          {t("download")}
        </a>
      </div>
    </nav>
  );
}
