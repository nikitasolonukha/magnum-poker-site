import { evening } from "@/data/content";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import Image from "next/image";

const stepImages = [
  "/gallery/image-2.webp",
  "/gallery/image-6.webp",
  "/why/food-court.png",
  "/gallery/image-5.webp",
  "/gallery/image-10.webp",
] as const;

export default function EveningTimeline() {
  return (
    <section id="evening" className="bg-paper text-black">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 py-20 md:py-28 lg:py-36">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start">
          <header className="lg:col-span-4 lg:sticky lg:top-24 mb-12 lg:mb-0">
            <h2 className="font-display font-bold text-[clamp(32px,9vw,46px)] md:text-[clamp(40px,3.6vw,64px)] leading-[0.95] tracking-tight text-balance mb-5">
              Как проходит <span className="italic text-burgundy">вечер</span>
            </h2>
            <p className="text-[16px] md:text-[17px] leading-relaxed text-black/75 max-w-[42ch] text-pretty mb-8">
              {evening.lead}
            </p>
            <Button href={siteConfig.bookingUrl} variant="ink">
              {evening.cta} →
            </Button>
          </header>

          <div className="lg:col-span-8 flex flex-col">
            {evening.steps.map((step, idx) => {
              const wide = idx === 2;
              return (
                <article
                  key={step.num}
                  className="border-t border-black/12 py-8 md:py-10 first:border-t-0 first:pt-0"
                >
                  <div className={`grid grid-cols-1 gap-5 ${wide ? "" : "md:grid-cols-[88px_1fr]"}`}>
                    <span className="font-display text-[56px] md:text-[72px] font-bold leading-none text-burgundy/25">
                      {step.num}
                    </span>
                    <div>
                      {wide ? (
                        <div className="relative -mx-5 md:mx-0 aspect-[16/8] mb-5 overflow-hidden">
                          <Image
                            src={stepImages[idx]}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 60vw, 100vw"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div
                          className={`relative overflow-hidden mb-4 ${
                            idx === 0
                              ? "aspect-[5/3] md:aspect-[16/9]"
                              : idx === 1
                                ? "md:float-right md:ml-6 md:mb-2 w-full md:w-[42%] aspect-[3/4]"
                                : idx === 3
                                  ? "w-[46%] aspect-square"
                                  : "aspect-[4/3] md:w-3/5"
                          }`}
                        >
                          <Image
                            src={stepImages[idx]}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 40vw, 100vw"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <h3 className="font-display font-semibold text-[20px] md:text-[24px] leading-snug mb-3 text-balance">
                        {step.title}
                      </h3>
                      <p className="text-[16px] md:text-[17px] leading-relaxed text-black/75 max-w-[58ch] text-pretty">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
