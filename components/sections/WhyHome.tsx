import { whyHome } from "@/data/content";
import Image from "next/image";

export default function WhyHome() {
  return (
    <section id="why" className="bg-black text-warm-white">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 py-20 md:py-28 lg:py-36">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="lg:col-span-7">
            <p className="text-[12px] font-semibold tracking-[0.2em] uppercase text-muted mb-4">
              О клубе
            </p>
            <h2 className="font-display font-bold text-[clamp(32px,9vw,46px)] md:text-[clamp(46px,4.5vw,72px)] leading-[0.95] tracking-tight text-balance">
              <span>Почему «Магнум» называют </span>
              <span className="italic text-burgundy-light">домом</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-[16px] md:text-[18px] leading-relaxed text-warm-white/70 max-w-[52ch] text-pretty">
              {whyHome.lead}
            </p>
          </div>
        </div>

        {/* Features — editorial bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5">
          {/* 01 — Large feature with image */}
          <article className="lg:col-span-7 relative overflow-hidden rounded-[6px] group">
            <div className="relative aspect-[16/10] md:aspect-[16/9]">
              <Image
                src={whyHome.features[0].image!}
                alt={whyHome.features[0].title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 58vw, 100vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="text-[11px] font-semibold tracking-[0.15em] text-burgundy-light mb-2 block">
                {whyHome.features[0].num}
              </span>
              <h3 className="font-display font-bold text-[22px] md:text-[28px] leading-tight mb-2">
                {whyHome.features[0].title}
              </h3>
              <p className="text-[15px] md:text-[16px] leading-relaxed text-warm-white/75 max-w-[44ch]">
                {whyHome.features[0].body}
              </p>
            </div>
          </article>

          {/* 02 — Flakon */}
          <article className="lg:col-span-5 relative overflow-hidden rounded-[6px]">
            <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[280px]">
              <Image
                src={whyHome.features[1].image!}
                alt={whyHome.features[1].title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 42vw, 100vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="text-[11px] font-semibold tracking-[0.15em] text-burgundy-light mb-2 block">
                {whyHome.features[1].num}
              </span>
              <h3 className="font-display font-bold text-[20px] md:text-[24px] leading-tight mb-2">
                {whyHome.features[1].title}
              </h3>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-warm-white/75 max-w-[40ch]">
                {whyHome.features[1].body}
              </p>
            </div>
          </article>

          {/* 03 — Metro (text-only compact) */}
          <article className="lg:col-span-4 bg-burgundy-dark rounded-[6px] p-6 md:p-8 flex flex-col justify-between min-h-[200px]">
            <span className="text-[11px] font-semibold tracking-[0.15em] text-burgundy-light mb-auto">
              {whyHome.features[2].num}
            </span>
            <div>
              <h3 className="font-display font-bold text-[20px] md:text-[24px] leading-tight mb-2">
                {whyHome.features[2].title}
              </h3>
              <p className="text-[15px] leading-relaxed text-warm-white/75">
                {whyHome.features[2].body}
              </p>
            </div>
          </article>

          {/* 04 — Parking */}
          <article className="lg:col-span-4 relative overflow-hidden rounded-[6px]">
            <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[200px]">
              <Image
                src={whyHome.features[3].image!}
                alt={whyHome.features[3].title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, 100vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="text-[11px] font-semibold tracking-[0.15em] text-burgundy-light mb-2 block">
                {whyHome.features[3].num}
              </span>
              <h3 className="font-display font-bold text-[18px] md:text-[20px] leading-tight mb-2">
                {whyHome.features[3].title}
              </h3>
              <p className="text-[14px] leading-relaxed text-warm-white/75 max-w-[40ch]">
                {whyHome.features[3].body}
              </p>
            </div>
          </article>

          {/* 05 — Kitchen */}
          <article className="lg:col-span-4 relative overflow-hidden rounded-[6px]">
            <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[200px]">
              <Image
                src={whyHome.features[4].image!}
                alt={whyHome.features[4].title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, 100vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="text-[11px] font-semibold tracking-[0.15em] text-burgundy-light mb-2 block">
                {whyHome.features[4].num}
              </span>
              <h3 className="font-display font-bold text-[18px] md:text-[20px] leading-tight mb-2">
                {whyHome.features[4].title}
              </h3>
              <p className="text-[14px] leading-relaxed text-warm-white/75 max-w-[40ch]">
                {whyHome.features[4].body}
              </p>
            </div>
          </article>

          {/* 06 — Team */}
          <article className="lg:col-span-12 md:col-span-2 bg-warm-black border border-warm-white/8 rounded-[6px] p-6 md:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[4px]">
              <Image
                src={whyHome.features[5].image!}
                alt={whyHome.features[5].title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                loading="lazy"
              />
            </div>
            <div>
              <span className="text-[11px] font-semibold tracking-[0.15em] text-burgundy-light mb-3 block">
                {whyHome.features[5].num}
              </span>
              <h3 className="font-display font-bold text-[22px] md:text-[28px] leading-tight mb-3">
                {whyHome.features[5].title}
              </h3>
              <p className="text-[16px] md:text-[17px] leading-relaxed text-warm-white/75 max-w-[44ch]">
                {whyHome.features[5].body}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
