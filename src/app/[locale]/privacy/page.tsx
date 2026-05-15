import { getLocale } from "next-intl/server";
import Link from "next/link";

const content = {
  en: {
    title: "Privacy Policy of qyp: Budget & Spending",
    updated: "Last updated: May 2026",
    sections: [
      {
        heading: "1. Introduction",
        body: "qyp is a personal finance tool designed with privacy as a core principle. This policy explains how we handle data and your rights as a user.",
      },
      {
        heading: "2. Data Collection (Anonymous)",
        body: "We do not collect any Personal Identifiable Information (PII).",
        bullets: [
          "No Registration: We do not ask for your name, email, or phone number.",
          "Anonymous ID: To sync your data across devices, we use a unique, randomly generated anonymous ID. This ID does not reveal your identity.",
          "Financial Data: We store your budget entries and expense records on our secure servers solely to provide the synchronization feature.",
        ],
      },
      {
        heading: "3. Use of Data",
        body: "The data collected is used exclusively for:",
        bullets: [
          "App Functionality: Providing the cloud sync and backup features.",
          "Premium Features: Managing your Pro subscription status through Google Play Billing.",
        ],
      },
      {
        heading: "4. Data Sharing",
        body: "We do not sell or share your financial data or anonymous ID with any third-party companies, advertisers, or external services.",
      },
      {
        heading: "5. Data Security",
        body: "All data is encrypted in transit using HTTPS protocols and stored in a secure cloud environment.",
      },
      {
        heading: "6. User Rights and Data Deletion",
        body: "In compliance with Google Play policies, users have full control over their data:",
        bullets: [
          "In-App Deletion: You can delete all your data and your anonymous account at any time through the \"Settings\" menu within the app.",
          "Permanent Wipe: Once the deletion is requested, all financial records associated with your ID are permanently removed from our servers.",
        ],
      },
      {
        heading: "7. Contact",
        body: "For any questions regarding your privacy, contact us at: idkey.main@gmail.com",
      },
    ],
  },
  es: {
    title: "Política de Privacidad de qyp: Presupuesto y Gastos",
    updated: "Última actualización: mayo 2026",
    sections: [
      {
        heading: "1. Introducción",
        body: "qyp es una herramienta de finanzas personales diseñada con la privacidad como principio fundamental. Esta política explica cómo tratamos los datos y cuáles son tus derechos como usuario.",
      },
      {
        heading: "2. Recopilación de datos (anónima)",
        body: "No recopilamos ningún dato de identificación personal (PII).",
        bullets: [
          "Sin registro: No te pedimos nombre, correo electrónico ni número de teléfono.",
          "ID anónimo: Para sincronizar tus datos entre dispositivos, usamos un ID único generado de forma aleatoria. Este ID no revela tu identidad.",
          "Datos financieros: Almacenamos tus registros de presupuesto y gastos en nuestros servidores seguros únicamente para ofrecer la función de sincronización.",
        ],
      },
      {
        heading: "3. Uso de los datos",
        body: "Los datos recopilados se utilizan exclusivamente para:",
        bullets: [
          "Funcionalidad de la app: Proporcionar las funciones de sincronización y copia de seguridad en la nube.",
          "Funciones premium: Gestionar el estado de tu suscripción Pro a través de Google Play Billing.",
        ],
      },
      {
        heading: "4. Compartición de datos",
        body: "No vendemos ni compartimos tus datos financieros ni tu ID anónimo con ninguna empresa de terceros, anunciantes ni servicios externos.",
      },
      {
        heading: "5. Seguridad de los datos",
        body: "Todos los datos se cifran en tránsito mediante protocolos HTTPS y se almacenan en un entorno seguro en la nube.",
      },
      {
        heading: "6. Derechos del usuario y eliminación de datos",
        body: "De acuerdo con las políticas de Google Play, los usuarios tienen control total sobre sus datos:",
        bullets: [
          "Eliminación desde la app: Puedes eliminar todos tus datos y tu cuenta anónima en cualquier momento desde el menú \"Ajustes\" de la aplicación.",
          "Eliminación permanente: Una vez solicitada la eliminación, todos los registros financieros asociados a tu ID se borran permanentemente de nuestros servidores.",
        ],
      },
      {
        heading: "7. Contacto",
        body: "Para cualquier pregunta sobre tu privacidad, contáctanos en: idkey.main@gmail.com",
      },
    ],
  },
};

export default async function PrivacyPage() {
  const locale = await getLocale();
  const c = locale === "es" ? content.es : content.en;
  const backLabel = locale === "es" ? "← Volver" : "← Back";

  return (
    <div className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-2xl mx-auto">
        <Link
          href={`/${locale}`}
          className="text-sm text-[#6a8a88] hover:text-[#f4f3f0] transition-colors mb-10 inline-block"
        >
          {backLabel}
        </Link>

        <h1 className="text-3xl font-bold text-[#f4f3f0] mb-2">{c.title}</h1>
        <p className="text-sm text-[#6a8a88] mb-12">{c.updated}</p>

        <div className="space-y-10">
          {c.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-lg font-semibold text-[#2ec4b6] mb-3">{s.heading}</h2>
              <p className="text-[#f4f3f0]/80 leading-relaxed mb-3">{s.body}</p>
              {"bullets" in s && s.bullets && (
                <ul className="space-y-2 mt-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-[#f4f3f0]/70 leading-relaxed text-sm">
                      <span className="text-[#2ec4b6] mt-0.5 flex-shrink-0">·</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
