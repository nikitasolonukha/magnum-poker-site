import { evening } from "@/data/content";
import { siteConfig } from "@/config/site";
import Image from "next/image";

const stepImages: Record<string, string | null> = {
  "01": "/gallery/image-2.webp",
  "02": "/gallery/image-6.webp",
  "03": "/why/food-court.png",
  "04": "/gallery/image-5.webp",
  "05": "/gallery/image-10.webp",
};

export default function EveningTimeline() {
  return (
    <section id="evening" className="bg-paper text-black">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 py-20 md:py-28 lg:py-36">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="lg:col-span-7">
            <p className="text-[12px] font-semibold tracking-[0.2em] uppercase text-muted mb-4">
              Формат вечера
            </p>
            <h2 className="font-display font-bold text-[clamp(32px,9vw,46px)] md:text-[clamp(46px,4.5vw,72px)] leading-[0.95] tracking-tight text-balance">
              <span>Как проходит </span>
              <span className="italic text-burgundy">вечер</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-[16px] md:text-[18px] leading-relaxed text-black/70 max-w-[52ch] text-pretty">
              {evening.lead}
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col">
          {evening.steps.map((step, idx) => {
            const img = stepImages[step.num];
            const isEven = idx % 2 === 1;

            return (
              <article
                key={step.num}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-10 md:py-14 border-t border-black/10 first:border-t-0"
              >
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="font-display text-[48px] md:text-[64px] font-bold leading-none text-burgundy/20">
                    {step.num}
                  </span>
                </div>

                {/* Image */}
                {img && (
                  <div
                    className={`lg:col-span-4 ${
                      isEven ? "lg:order-last" : ""
                    }`}
                  >
                    <div className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-[4px]">
                      <Image
                        src={img}
                        alt={step.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}

                {/* Text */}
                <div
                  className={`${
                    img ? "lg:col-span-7" : "lg:col-span-11"
                  } flex flex-col justify-center`}
                >
                  <h3 className="font-display font-semibold text-[20px] md:text-[24px] leading-snug mb-3 md:mb-4 text-balance">
                    {step.title}
                  </h3>
                  <p className="text-[16px] md:text-[17px] leading-relaxed text-black/70 max-w-[60ch] text-pretty">
                    {step.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 md:mt-20 pt-10 border-t border-black/10">
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-12 md:h-14 px-8 md:px-10 bg-black text-warm-white text-[15px] md:text-[16px] font-semibold tracking-[0.02em] rounded-[4px] hover:bg-warm-black transition-colors duration-200"
          >
            {evening.cta}
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
