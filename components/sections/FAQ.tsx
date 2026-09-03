"use client";

import { faq } from "@/data/content";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import { useState, useCallback } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = useCallback((i: number) => {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  }, []);

  return (
    <section id="faq" className="bg-paper text-black">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 py-20 md:py-28 lg:py-36">
        <h2 className="font-display font-bold text-[clamp(32px,9vw,46px)] md:text-[clamp(44px,4vw,72px)] leading-[0.95] tracking-tight text-balance mb-4">
          Коротко <span className="italic text-burgundy">о главном</span>
        </h2>
        <p className="text-[16px] md:text-[18px] leading-relaxed text-black/75 max-w-[50ch] text-pretty mb-12 md:mb-16">
          {faq.lead}
        </p>

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
          <Button href={siteConfig.bookingUrl} variant="ink">
            {faq.cta} →
          </Button>
        </div>
      </div>
    </section>
  );
}
