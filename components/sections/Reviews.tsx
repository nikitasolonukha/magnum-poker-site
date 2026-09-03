"use client";

import { reviews } from "@/data/content";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import { useRef, useState, useCallback, useEffect } from "react";

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const rest = reviews.items.slice(1);

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

  const featured = reviews.items[0];

  return (
    <section id="reviews" className="bg-paper text-black">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 pt-20 md:pt-28 pb-10">
        <h2 className="font-display font-bold text-[clamp(32px,9vw,46px)] md:text-[clamp(44px,4vw,72px)] leading-[0.95] tracking-tight text-balance mb-4">
          Что говорят <span className="italic text-burgundy">наши гости</span>
        </h2>
        <p className="text-[16px] md:text-[18px] leading-relaxed text-black/70 max-w-[50ch] text-pretty">
          {reviews.lead}
        </p>
      </div>

      <blockquote className="bg-burgundy-dark text-warm-white">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 py-12 md:py-16">
          <p className="font-display text-[13px] tracking-[0.16em] text-burgundy-light mb-6">{featured.num}</p>
          <p className="font-display text-[22px] md:text-[32px] leading-[1.25] max-w-[28ch] md:max-w-[40ch] text-pretty">
            «{featured.text}»
          </p>
          <footer className="mt-8 text-[15px] text-warm-white/70">{featured.author}</footer>
        </div>
      </blockquote>

      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 py-10 md:py-14">
        <div className="hidden md:flex gap-2 mb-5 justify-end">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Предыдущий отзыв"
            className="w-11 h-11 flex items-center justify-center border border-black/15 text-black/60 hover:text-black disabled:opacity-30"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Следующий отзыв"
            className="w-11 h-11 flex items-center justify-center border border-black/15 text-black/60 hover:text-black disabled:opacity-30"
          >
            →
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-0 overflow-x-auto hide-scroll snap-x snap-mandatory -mx-5 px-5 md:mx-0 md:px-0 border-y border-black/10"
          role="region"
          aria-label="Отзывы гостей"
          tabIndex={0}
        >
          {rest.map((review) => (
            <article
              key={review.num}
              data-review
              className="snap-start shrink-0 w-[85vw] md:w-[min(420px,40vw)] p-6 md:p-8 border-r border-black/10 flex flex-col justify-between min-h-[280px]"
            >
              <p className="text-[16px] leading-relaxed text-black/80 text-pretty">«{review.text}»</p>
              <footer className="mt-8 flex justify-between text-[13px] text-black/50">
                <span>{review.author}</span>
                <span>{review.num}</span>
              </footer>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Button href={siteConfig.reviewsUrl} variant="ghost-light">
            {reviews.ctaAll} ↗
          </Button>
          <Button href={siteConfig.bookingUrl} variant="burgundy">
            {reviews.ctaBook} →
          </Button>
        </div>
      </div>
    </section>
  );
}
