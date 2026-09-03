"use client";

import { hero } from "@/data/content";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let gsapModule: typeof import("gsap") | null = null;
    const el = sectionRef.current;

    import("gsap").then((mod) => {
      gsapModule = mod;
      if (!el) return;
      const gsap = mod.gsap;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(el.querySelectorAll("[data-hero-line]"), {
        y: 48,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
      })
        .from(el.querySelector("[data-hero-body]"), { y: 24, opacity: 0, duration: 0.6 }, "-=0.35")
        .from(el.querySelector("[data-hero-cta]"), { y: 16, opacity: 0, duration: 0.45 }, "-=0.25")
        .from(el.querySelectorAll("[data-hero-fact]"), { y: 12, opacity: 0, duration: 0.35, stagger: 0.05 }, "-=0.2");
    });

    return () => {
      if (gsapModule && el) gsapModule.gsap.killTweensOf(el.querySelectorAll("*"));
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/gallery/image-3.webp"
          alt=""
          fill
          priority
          className="object-cover object-[center_35%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/25" />
      </div>

      <div
        data-hero-chip
        className="pointer-events-none absolute right-[-8%] bottom-[18%] w-[140px] md:right-[4%] md:bottom-[22%] md:w-[180px] lg:w-[200px] aspect-square opacity-90"
        aria-hidden
      >
        <Image
          src="/chips/magnum-chip-hero.png"
          alt=""
          fill
          className="object-contain"
          sizes="200px"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-5 md:px-8 lg:px-16 pt-24 pb-[max(2rem,env(safe-area-inset-bottom))] md:pb-16">
        <p
          data-hero-line
          className="text-[12px] md:text-[13px] font-semibold tracking-[0.18em] uppercase text-warm-white/70 mb-5 max-w-[28ch] md:max-w-none"
        >
          {hero.subtitle}
        </p>

        <h1 className="font-display font-bold leading-[0.9] tracking-tight mb-6 md:mb-8 max-w-[18ch] md:max-w-[16ch]">
          <span data-hero-line className="block text-[clamp(36px,10vw,52px)] md:text-[clamp(64px,7vw,104px)]">
            ВЕДУЩИЙ
          </span>
          <span data-hero-line className="block italic text-burgundy-light text-[clamp(36px,10vw,52px)] md:text-[clamp(64px,7vw,104px)]">
            ДОМ
          </span>
          <span data-hero-line className="block italic text-[clamp(28px,8vw,44px)] md:text-[clamp(40px,4.4vw,68px)] text-burgundy-light">
            СПОРТИВНОГО ПОКЕРА
          </span>
          <span data-hero-line className="block mt-1 font-medium text-warm-white/80 text-[clamp(22px,6vw,36px)] md:text-[clamp(32px,3.2vw,48px)]">
            В МОСКВЕ
          </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          <div className="lg:col-span-7">
            <p
              data-hero-body
              className="text-[16px] md:text-[18px] leading-relaxed text-warm-white max-w-[50ch] mb-7 text-pretty"
            >
              {hero.body}
            </p>
            <div data-hero-cta>
              <Button href={siteConfig.bookingUrl} className="h-12 md:h-14 px-8 md:px-10 text-[15px] md:text-[16px]">
                {hero.cta} →
              </Button>
            </div>
          </div>

          <ul className="lg:col-span-5 lg:justify-self-end w-full lg:max-w-[320px] border-t border-warm-white/15 divide-y divide-warm-white/15">
            {hero.facts.map((fact, i) => (
              <li
                key={fact}
                data-hero-fact
                className="flex gap-3 py-2.5 text-[14px] md:text-[15px] text-warm-white/90"
              >
                <span className="font-display text-[11px] text-burgundy-light tracking-wider shrink-0 pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
