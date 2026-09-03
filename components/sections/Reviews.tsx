"use client";

import { reviews } from "@/data/content";
import { siteConfig } from "@/config/site";
import { useRef, useState, useCallback, useEffect } from "react";

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-review]");
    const w = card ? card.offsetWidth + 16 : 400;
    el.scrollBy({ left: dir === "left" ? -w : w, behavior: "smooth" });
  };

  return (
    <section id="reviews" className="bg-warm-black text-warm-white">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 py-20 md:py-28 lg:py-36">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <p className="text-[12px] font-semibold tracking-[0.2em] uppercase text-muted mb-4">
              Яндекс Карты
            </p>
            <h2 className="font-display font-bold text-[clamp(32px,9vw,46px)] md:text-[clamp(46px,4.5vw,72px)] leading-[0.95] tracking-tight text-balance">
              <span>Что говорят </span>
              <span className="italic text-burgundy-light">наши гости</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-[16px] md:text-[18px] leading-relaxed text-warm-white/70 max-w-[52ch] text-pretty">
              {reviews.lead}
            </p>
          </div>
        </div>

        {/* Controls (desktop) */}
        <div className="hidden md:flex gap-2 mb-6 justify-end">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Предыдущий отзыв"
            className="w-11 h-11 flex items-center justify-center border border-warm-white/15 rounded-[4px] text-warm-white/60 hover:text-warm-white hover:border-warm-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Следующий отзыв"
            className="w-11 h-11 flex items-center justify-center border border-warm-white/15 rounded-[4px] text-warm-white/60 hover:text-warm-white hover:border-warm-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            →
          </button>
        </div>

        {/* Reviews carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-5 overflow-x-auto hide-scroll snap-x snap-mandatory -mx-5 px-5 md:mx-0 md:px-0 pb-4"
          role="region"
          aria-label="Отзывы гостей"
          tabIndex={0}
        >
          {reviews.items.map((review, i) => {
            const isFeatured = i === 0 || i === 2;
            return (
              <article
                key={review.num}
                data-review
                className={`snap-start shrink-0 flex flex-col justify-between p-6 md:p-8 rounded-[6px] ${
                  isFeatured
                    ? "bg-burgundy-dark w-[85vw] md:w-[440px] lg:w-[480px]"
                    : "bg-warm-white/5 border border-warm-white/8 w-[85vw] md:w-[380px] lg:w-[400px]"
                }`}
              >
                <div>
                  <span className="text-[40px] md:text-[48px] font-display font-bold leading-none text-burgundy-light/30 mb-4 block">
                    «
                  </span>
                  <p className="text-[15px] md:text-[16px] leading-relaxed text-warm-white/85 text-pretty">
                    {review.text}
                  </p>
                </div>
                <footer className="mt-6 pt-4 border-t border-warm-white/10 flex items-center justify-between">
                  <span className="text-[14px] font-semibold text-warm-white/70">
                    {review.author}
                  </span>
                  <span className="text-[12px] text-muted font-mono">
                    {review.num}
                  </span>
                </footer>
              </article>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-3">
          <a
            href={siteConfig.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-6 border border-warm-white/15 text-[14px] font-semibold text-warm-white/80 hover:text-warm-white hover:border-warm-white/30 transition-colors duration-200 rounded-[4px]"
          >
            {reviews.ctaAll}
            <span className="ml-2">↗</span>
          </a>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-6 bg-burgundy text-warm-white text-[14px] font-semibold hover:bg-burgundy-active transition-colors duration-200 rounded-[4px]"
          >
            {reviews.ctaBook}
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
