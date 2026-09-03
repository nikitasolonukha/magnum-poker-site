"use client";

import { hero } from "@/data/content";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let gsapModule: typeof import("gsap") | null = null;

    import("gsap").then((mod) => {
      gsapModule = mod;
      const gsap = mod.gsap;
      const el = sectionRef.current;
      if (!el) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(el.querySelectorAll("[data-hero-line]"), {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
      })
        .from(
          el.querySelector("[data-hero-body]"),
          { y: 30, opacity: 0, duration: 0.7 },
          "-=0.4"
        )
        .from(
          el.querySelector("[data-hero-cta]"),
          { y: 20, opacity: 0, duration: 0.5 },
          "-=0.3"
        )
        .from(
          el.querySelectorAll("[data-hero-fact]"),
          { y: 15, opacity: 0, duration: 0.4, stagger: 0.06 },
          "-=0.2"
        )
        .from(
          el.querySelector("[data-hero-chip]"),
          { scale: 0.8, opacity: 0, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        );
    });

    const el = sectionRef.current;
    return () => {
      if (gsapModule && el) {
        gsapModule.gsap.killTweensOf(el.querySelectorAll("*"));
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-svh flex items-end pb-12 md:pb-20 pt-24 md:pt-32 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/gallery/image-3.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left: text */}
          <div className="lg:col-span-7 xl:col-span-6">
            <p
              data-hero-line
              className="text-[12px] md:text-[13px] font-sans font-semibold tracking-[0.2em] uppercase text-warm-white/60 mb-4 md:mb-6"
            >
              {hero.subtitle}
            </p>

            <h1 className="font-display font-bold leading-[0.92] tracking-tight mb-6 md:mb-8">
              <span data-hero-line className="block text-[clamp(36px,10vw,52px)] md:text-[clamp(58px,6.5vw,96px)]">
                ВЕДУЩИЙ
              </span>
              <span
                data-hero-line
                className="block text-[clamp(36px,10vw,52px)] md:text-[clamp(58px,6.5vw,96px)] italic text-burgundy-light"
              >
                ДОМ
              </span>
              <span
                data-hero-line
                className="block text-[clamp(32px,9vw,48px)] md:text-[clamp(58px,6.5vw,96px)] italic text-burgundy-light"
              >
                СПОРТИВНОГО
              </span>
              <span data-hero-line className="block text-[clamp(36px,10vw,52px)] md:text-[clamp(58px,6.5vw,96px)]">
                ПОКЕРА
              </span>
              <span
                data-hero-line
                className="block text-[clamp(24px,7vw,38px)] md:text-[clamp(38px,4vw,64px)] font-normal text-warm-white/70 mt-1"
              >
                В МОСКВЕ
              </span>
            </h1>

            <p
              data-hero-body
              className="text-[16px] md:text-[18px] leading-relaxed text-warm-white/80 max-w-[52ch] mb-8 text-pretty"
            >
              {hero.body}
            </p>

            <div data-hero-cta className="mb-8">
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-12 md:h-14 px-8 md:px-10 bg-burgundy text-warm-white text-[15px] md:text-[16px] font-semibold tracking-[0.02em] rounded-[4px] hover:bg-burgundy-active transition-colors duration-200"
              >
                {hero.cta}
                <span className="ml-2 text-[18px]">→</span>
              </a>
            </div>

            {/* Facts */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {hero.facts.map((fact, i) => (
                <span
                  key={i}
                  data-hero-fact
                  className="text-[13px] md:text-[14px] text-warm-white/50 font-sans"
                >
                  <span className="text-burgundy-light mr-1.5">•</span>
                  {fact}
                </span>
              ))}
            </div>
          </div>

          {/* Right: chip */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 justify-end items-end">
            <div data-hero-chip className="relative w-[280px] xl:w-[360px] aspect-square">
              <Image
                src="/chips/magnum-chip-hero.png"
                alt="Фишка MAGNUM"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(min-width: 1024px) 360px, 0px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
