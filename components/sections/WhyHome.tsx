import { whyHome } from "@/data/content";
import Image from "next/image";

export default function WhyHome() {
  const f = whyHome.features;

  return (
    <section id="why" className="bg-black text-warm-white overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 py-20 md:py-28">
        <h2 className="font-display font-bold text-[clamp(32px,9vw,46px)] md:text-[clamp(44px,4vw,72px)] leading-[0.95] tracking-tight text-balance max-w-[16ch] mb-6">
          Почему «Магнум» называют <span className="italic text-burgundy-light">домом</span>
        </h2>
        <p className="text-[16px] md:text-[18px] leading-relaxed text-warm-white/80 max-w-[54ch] text-pretty mb-16 md:mb-24">
          {whyHome.lead}
        </p>
      </div>

      {/* 01 house — photo then text, not overlay card */}
      <article className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 mb-16 md:mb-24">
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          <Image src={f[0].image!} alt="" fill className="object-cover object-center" sizes="100vw" loading="lazy" />
        </div>
        <div className="mt-6 md:mt-8 md:grid md:grid-cols-12 md:gap-8">
          <span className="md:col-span-2 font-display text-burgundy-light text-[13px] tracking-[0.16em]">{f[0].num}</span>
          <div className="md:col-span-10">
            <h3 className="font-display font-bold text-[24px] md:text-[32px] mb-3">{f[0].title}</h3>
            <p className="text-[16px] md:text-[18px] leading-relaxed text-warm-white/80 max-w-[52ch] text-pretty">{f[0].body}</p>
          </div>
        </div>
      </article>

      {/* 02 flacon — text left, image right */}
      <article className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 mb-16 md:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 lg:pr-6">
          <span className="font-display text-burgundy-light text-[13px] tracking-[0.16em]">{f[1].num}</span>
          <h3 className="font-display font-bold text-[22px] md:text-[28px] mt-3 mb-4">{f[1].title}</h3>
          <p className="text-[16px] leading-relaxed text-warm-white/80 max-w-[44ch] text-pretty">{f[1].body}</p>
        </div>
        <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-[5/3] overflow-hidden lg:translate-x-8">
          <Image src={f[1].image!} alt="" fill className="object-cover" sizes="(min-width: 1024px) 58vw, 100vw" loading="lazy" />
        </div>
      </article>

      {/* 03 metro — typographic */}
      <article className="bg-burgundy-dark mb-16 md:mb-24">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <p className="md:col-span-4 font-display font-bold text-[clamp(72px,18vw,160px)] leading-none text-warm-white/15">
            5
          </p>
          <div className="md:col-span-8 pb-2">
            <span className="font-display text-burgundy-light text-[13px] tracking-[0.16em]">{f[2].num}</span>
            <h3 className="font-display font-bold text-[22px] md:text-[28px] mt-2 mb-3">{f[2].title}</h3>
            <p className="text-[16px] md:text-[18px] leading-relaxed text-warm-white/90 max-w-[40ch]">{f[2].body}</p>
          </div>
        </div>
      </article>

      {/* 04 parking — horizontal */}
      <article className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
        <div className="md:col-span-5 relative aspect-[16/10] overflow-hidden">
          <Image src={f[3].image!} alt="" fill className="object-cover object-[center_60%]" sizes="40vw" loading="lazy" />
        </div>
        <div className="md:col-span-7">
          <span className="font-display text-burgundy-light text-[13px] tracking-[0.16em]">{f[3].num}</span>
          <h3 className="font-display font-bold text-[22px] md:text-[26px] mt-2 mb-3">{f[3].title}</h3>
          <p className="text-[16px] md:text-[17px] leading-relaxed text-warm-white/80 max-w-[52ch] text-pretty">{f[3].body}</p>
        </div>
      </article>

      {/* 05 kitchen — edge image */}
      <article className="mb-16 md:mb-24">
        <div className="relative h-[42vw] min-h-[220px] max-h-[420px]">
          <Image src={f[4].image!} alt="" fill className="object-cover object-center" sizes="100vw" loading="lazy" />
        </div>
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 py-8">
          <span className="font-display text-burgundy-light text-[13px] tracking-[0.16em]">{f[4].num}</span>
          <h3 className="font-display font-bold text-[22px] md:text-[28px] mt-2 mb-3">{f[4].title}</h3>
          <p className="text-[16px] leading-relaxed text-warm-white/80 max-w-[48ch] text-pretty">{f[4].body}</p>
        </div>
      </article>

      {/* 06 team */}
      <article className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 pb-20 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 relative aspect-[4/5] max-h-[560px] overflow-hidden">
          <Image src={f[5].image!} alt="" fill className="object-cover object-[center_20%]" sizes="40vw" loading="lazy" />
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <span className="font-display text-burgundy-light text-[13px] tracking-[0.16em]">{f[5].num}</span>
          <h3 className="font-display font-bold text-[24px] md:text-[32px] mt-3 mb-4">{f[5].title}</h3>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-warm-white/85 max-w-[40ch] text-pretty">{f[5].body}</p>
        </div>
      </article>
    </section>
  );
}
