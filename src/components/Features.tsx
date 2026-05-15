import { useTranslations } from "next-intl";
import { type ReactNode } from "react";

function IconEnvelope() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  );
}

function IconStats() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M7 16l4-5 4 3 4-6" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 3 7v6c0 5 4 9 9 9s9-4 9-9V7z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function IconRecurring() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 2 21 6l-4 4" />
      <path d="M21 6H7a4 4 0 0 0-4 4v1" />
      <path d="M7 22 3 18l4-4" />
      <path d="M3 18h14a4 4 0 0 0 4-4v-1" />
    </svg>
  );
}

function IconCloud() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function IconThemes() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      <path d="m4.93 4.93 2.83 2.83M16.24 16.24l2.83 2.83M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83" />
    </svg>
  );
}

const FEATURES: { key: string; Icon: () => ReactNode }[] = [
  { key: "envelope",  Icon: IconEnvelope },
  { key: "stats",     Icon: IconStats },
  { key: "cap",       Icon: IconShield },
  { key: "recurring", Icon: IconRecurring },
  { key: "sync",      Icon: IconCloud },
  { key: "themes",    Icon: IconThemes },
];

export function Features() {
  const t = useTranslations("features");

  return (
    <section id="features" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#f4f3f0] mb-16">
        {t("title")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURES.map(({ key, Icon }) => (
          <div
            key={key}
            className="p-6 rounded-2xl bg-[#222224] border border-[#2a2a2e] hover:border-[#2ec4b6]/30 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-[#2ec4b6]/10 flex items-center justify-center text-[#2ec4b6] mb-4">
              <Icon />
            </div>
            <h3 className="text-lg font-semibold text-[#f4f3f0] mb-2">
              {t(`${key}_title` as Parameters<typeof t>[0])}
            </h3>
            <p className="text-sm text-[#6a8a88] leading-relaxed">
              {t(`${key}_desc` as Parameters<typeof t>[0])}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
