import { bookingCta } from "@/data/content";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function BookingCTA() {
  return (
    <section className="relative bg-burgundy-dark text-warm-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/gallery/image-7.webp"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-dark via-burgundy-dark/90 to-burgundy-dark/60" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 py-20 md:py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text */}
          <div className="lg:col-span-7">
            <h2 className="font-display font-bold text-[clamp(32px,9vw,46px)] md:text-[clamp(46px,4.5vw,72px)] leading-[0.95] tracking-tight mb-6 md:mb-8 text-balance">
              <span>Забронируйте место </span>
              <span className="italic text-warm-white/70">на ближайшую игру</span>
            </h2>
            <p className="text-[16px] md:text-[18px] leading-relaxed text-warm-white/80 max-w-[56ch] mb-8 md:mb-10 text-pretty">
              {bookingCta.body}
            </p>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-14 md:h-16 px-10 md:px-12 bg-warm-white text-black text-[16px] md:text-[18px] font-bold tracking-[0.02em] rounded-[4px] hover:bg-paper transition-colors duration-200"
            >
              {bookingCta.cta}
              <span className="ml-3 text-[20px]">→</span>
            </a>
          </div>

          {/* Chip decorative */}
          <div className="hidden lg:flex lg:col-span-5 justify-center">
            <div className="relative w-[240px] xl:w-[300px] aspect-square">
              <Image
                src="/chips/magnum-chip-cta.webp"
                alt=""
                fill
                className="object-contain drop-shadow-2xl"
                sizes="300px"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
