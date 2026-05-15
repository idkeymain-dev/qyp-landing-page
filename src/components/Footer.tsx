import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2a2a2e] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#6a8a88]">
        <span>{t("copyright", { year })}</span>
        <div className="flex gap-6">
          <Link href={`/${locale}/privacy`} className="hover:text-[#f4f3f0] transition-colors">{t("privacy")}</Link>
          <a href="mailto:idkey.main@gmail.com" className="hover:text-[#f4f3f0] transition-colors">{t("contact")}</a>
        </div>
      </div>
    </footer>
  );
}
