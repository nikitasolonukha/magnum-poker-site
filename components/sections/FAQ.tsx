"use client";

import { faq } from "@/data/content";
import { siteConfig } from "@/config/site";
import { useState, useCallback } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = useCallback((i: number) => {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  }, []);

  return (
    <section id="faq" className="bg-paper text-black">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 py-20 md:py-28 lg:py-36">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <p className="text-[12px] font-semibold tracking-[0.2em] uppercase text-muted mb-4">
              Частые вопросы
            </p>
            <h2 className="font-display font-bold text-[clamp(32px,9vw,46px)] md:text-[clamp(46px,4.5vw,72px)] leading-[0.95] tracking-tight text-balance">
              <span>Коротко </span>
              <span className="italic text-burgundy">о главном</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-[16px] md:text-[18px] leading-relaxed text-black/70 max-w-[52ch] text-pretty">
              {faq.lead}
            </p>
          </div>
        </div>

        {/* Questions */}
        <div className="max-w-[860px]">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border-t border-black/10 last:border-b"
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left group focus-visible:outline-2 focus-visible:outline-burgundy focus-visible:outline-offset-2"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-[13px] font-mono text-muted shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display font-semibold text-[17px] md:text-[19px] leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <span
                    className={`shrink-0 w-6 h-6 flex items-center justify-center text-[20px] text-muted transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="faq-content"
                  data-open={isOpen}
                >
                  <div>
                    <p className="pl-[calc(13px+1rem+4px)] md:pl-[calc(13px+1rem+16px)] pb-5 md:pb-6 text-[15px] md:text-[16px] leading-relaxed text-black/70 max-w-[56ch] text-pretty">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16">
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-12 md:h-14 px-8 md:px-10 bg-black text-warm-white text-[15px] md:text-[16px] font-semibold tracking-[0.02em] rounded-[4px] hover:bg-warm-black transition-colors duration-200"
          >
            {faq.cta}
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
