import { contacts } from "@/data/content";
import { siteConfig } from "@/config/site";

const contactFields = [
  { label: "Адрес", value: contacts.address },
  { label: "Метро", value: contacts.metro },
  { label: "Парковка", value: contacts.parking },
  { label: "Часы работы", value: contacts.hours },
  { label: "Связь и запись", value: contacts.communication },
];

export default function Location() {
  return (
    <section id="contacts" className="bg-black text-warm-white">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 py-20 md:py-28 lg:py-36">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-[12px] font-semibold tracking-[0.2em] uppercase text-muted mb-4">
            Контакты
          </p>
          <h2 className="font-display font-bold text-[clamp(32px,9vw,46px)] md:text-[clamp(46px,4.5vw,72px)] leading-[0.95] tracking-tight text-balance mb-6">
            <span>Как </span>
            <span className="italic text-burgundy-light">нас найти</span>
          </h2>
          <p className="text-[16px] md:text-[18px] leading-relaxed text-warm-white/70 max-w-[56ch] text-pretty">
            {contacts.lead}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact details */}
          <dl className="flex flex-col gap-6">
            {contactFields.map((field) => (
              <div key={field.label} className="border-b border-warm-white/8 pb-4">
                <dt className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted mb-1.5">
                  {field.label}
                </dt>
                <dd className="text-[16px] md:text-[17px] leading-relaxed text-warm-white/85">
                  {field.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Map */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px] rounded-[6px] overflow-hidden bg-warm-black">
            <iframe
              src="https://yandex.ru/map-widget/v1/?text=Москва,+Большая+Новодмитровская+улица,+36с13&z=16&l=map"
              title="Карта: MAGNUM, Москва, Большая Новодмитровская улица, 36с13"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
            <noscript>
              <a
                href={siteConfig.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Открыть карту
              </a>
            </noscript>
          </div>
        </div>

        {/* Route + CTA */}
        <div className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-3">
          <a
            href={siteConfig.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-6 border border-warm-white/15 text-[14px] font-semibold text-warm-white/80 hover:text-warm-white hover:border-warm-white/30 transition-colors duration-200 rounded-[4px]"
          >
            Построить маршрут
            <span className="ml-2">↗</span>
          </a>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-6 bg-burgundy text-warm-white text-[14px] font-semibold hover:bg-burgundy-active transition-colors duration-200 rounded-[4px]"
          >
            {contacts.cta}
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
