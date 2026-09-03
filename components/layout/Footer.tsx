import { footer, navigation } from "@/data/content";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-black text-warm-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 pt-12 md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 border-t border-warm-white/10 pt-10">
          <nav className="md:col-span-4" aria-label="Навигация в подвале">
            <ul className="flex flex-col gap-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[15px] text-warm-white/55 hover:text-warm-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-4 flex flex-col gap-2">
            <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer" className="text-[15px] text-warm-white/55 hover:text-warm-white">
              Telegram ↗
            </a>
            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-[15px] text-warm-white/55 hover:text-warm-white">
              Instagram ↗
            </a>
            <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="text-[15px] text-warm-white/55 hover:text-warm-white">
              Записаться на игру ↗
            </a>
          </div>
        </div>
        <p className="text-[13px] md:text-[14px] text-warm-white/40 pb-4">{footer.tagline}</p>
        <p className="font-display font-bold text-[clamp(64px,18vw,180px)] leading-[0.8] tracking-tight text-warm-white/8 translate-y-4 select-none" aria-hidden>
          MAGNUM
        </p>
      </div>
    </footer>
  );
}
