"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { navigation } from "@/data/content";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    btnRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-sm border-b border-warm-white/6"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-display font-bold text-[17px] md:text-[19px] tracking-[0.14em] text-warm-white"
        >
          MAGNUM
        </a>

        {/* Desktop nav */}
        <nav aria-label="Основная навигация" className="hidden lg:flex items-center gap-6">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] text-warm-white/70 hover:text-warm-white transition-colors duration-200 font-sans"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center h-9 px-5 text-[13px] font-semibold tracking-[0.04em] bg-burgundy text-warm-white hover:bg-burgundy-active transition-colors duration-200 rounded-[4px]"
        >
          Записаться
        </a>

        {/* Mobile right side */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-8 px-3.5 text-[12px] font-semibold tracking-[0.04em] bg-burgundy text-warm-white rounded-[4px]"
          >
            Записаться
          </a>
          <button
            ref={btnRef}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] text-warm-white"
          >
            <span
              className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${
                menuOpen ? "translate-y-[3.25px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${
                menuOpen ? "-translate-y-[3.25px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Навигация"
        className={`lg:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-md transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-start px-6 pt-10 gap-6" aria-label="Мобильная навигация">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="font-display text-[28px] font-semibold text-warm-white tracking-tight"
            >
              {item.label}
            </a>
          ))}
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-6 inline-flex items-center h-12 px-8 text-[15px] font-semibold tracking-[0.04em] bg-burgundy text-warm-white rounded-[4px]"
          >
            Записаться на игру
          </a>
        </nav>
      </div>
    </header>
  );
}
