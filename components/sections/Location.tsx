import { contacts } from "@/data/content";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";

const contactFields = [
  { label: "Адрес", value: contacts.address },
  { label: "Метро", value: contacts.metro },
  { label: "Парковка", value: contacts.parking },
  { label: "Часы работы", value: contacts.hours },
  { label: "Связь и запись", value: contacts.communication },
];

export default function Location() {
  return (
    <section id="contacts" className="bg-paper text-black">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 py-20 md:py-28">
        <h2 className="font-display font-bold text-[clamp(32px,9vw,46px)] md:text-[clamp(44px,4vw,68px)] leading-[0.95] tracking-tight text-balance mb-5">
          Как <span className="italic text-burgundy">нас найти</span>
        </h2>
        <p className="text-[16px] md:text-[18px] leading-relaxed text-black/75 max-w-[54ch] text-pretty mb-10">
          {contacts.lead}
        </p>

        <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-black/45 mb-2">Адрес</p>
        <p className="font-display font-bold text-[clamp(22px,4.5vw,40px)] leading-[1.15] tracking-tight max-w-[20ch] mb-12">
          {contacts.address}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <dl className="lg:col-span-5 flex flex-col">
            {contactFields.slice(1).map((field) => (
              <div key={field.label} className="border-t border-black/10 py-4">
                <dt className="text-[11px] font-semibold tracking-[0.14em] uppercase text-black/45 mb-1">
                  {field.label}
                </dt>
                <dd className="text-[16px] leading-relaxed text-black/85">{field.value}</dd>
              </div>
            ))}
          </dl>
          <div className="lg:col-span-7 relative min-h-[280px] lg:min-h-[420px] bg-black/5">
            <iframe
              src="https://yandex.ru/map-widget/v1/?text=Москва,+Большая+Новодмитровская+улица,+36с13&z=16&l=map"
              title="Карта: MAGNUM, Москва, Большая Новодмитровская улица, 36с13"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Button href={siteConfig.mapUrl} variant="ghost-light">
            Построить маршрут ↗
          </Button>
          <Button href={siteConfig.bookingUrl} variant="ink">
            {contacts.cta} →
          </Button>
        </div>
      </div>
    </section>
  );
}
