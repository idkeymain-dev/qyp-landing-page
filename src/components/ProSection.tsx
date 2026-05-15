import { useTranslations } from "next-intl";

const PRO_FEATURES = ["feature_1", "feature_2", "feature_3", "feature_4", "feature_5", "feature_6"] as const;

export function ProSection() {
  const t = useTranslations("pro");

  return (
    <section id="pro" className="py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <div className="relative p-8 rounded-3xl bg-[#222224] border border-[#2ec4b6]/20 overflow-hidden">
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#2ec4b6]/10 blur-3xl" />
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5a624]/15 border border-[#f5a624]/30 text-[#f5a624] text-xs font-semibold uppercase tracking-wider mb-6">
              ✦ {t("title")}
            </div>
            <h2 className="text-3xl font-bold text-[#f4f3f0] mb-3">{t("subtitle")}</h2>
            <p className="text-sm text-[#2ec4b6] mb-8">{t("trial")}</p>

            <ul className="space-y-3 mb-10 text-left">
              {PRO_FEATURES.map((key) => (
                <li key={key} className="flex items-center gap-3 text-sm text-[#f4f3f0]">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#2ec4b6]/20 flex items-center justify-center text-[#2ec4b6] text-xs">✓</span>
                  {t(key)}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="block w-full py-3.5 rounded-2xl bg-[#2ec4b6] text-[#1a1a1c] font-semibold text-center hover:bg-[#1a9e94] transition-colors"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
