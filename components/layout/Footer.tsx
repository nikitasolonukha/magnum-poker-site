import { footer, navigation } from "@/data/content";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-black text-warm-white border-t border-warm-white/6">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 py-12 md:py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 md:mb-14">
          {/* Brand */}
          <div className="md:col-span-4">
            <span className="font-display font-bold text-[clamp(40px,8vw,72px)] leading-none tracking-tight text-warm-white/10 block mb-4">
              MAGNUM
            </span>
          </div>

          {/* Nav */}
          <nav className="md:col-span-4" aria-label="Навигация в подвале">
            <ul className="flex flex-col gap-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[14px] text-warm-white/50 hover:text-warm-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-warm-white/50 hover:text-warm-white transition-colors"
            >
              Telegram ↗
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-warm-white/50 hover:text-warm-white transition-colors"
            >
              Instagram ↗
            </a>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-warm-white/50 hover:text-warm-white transition-colors"
            >
              Записаться на игру ↗
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-warm-white/6">
          <p className="text-[13px] md:text-[14px] text-warm-white/40">
            {footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
