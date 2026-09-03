import { bookingCta } from "@/data/content";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function BookingCTA() {
  return (
    <section className="bg-burgundy text-warm-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="relative bg-paper text-black p-6 md:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-6 -bottom-10 hidden lg:block w-[180px] aspect-square opacity-90">
            <Image src="/chips/magnum-chip-cta.webp" alt="" fill className="object-contain" sizes="180px" loading="lazy" />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 relative aspect-[4/5] max-h-[480px] overflow-hidden">
              <Image
                src="/gallery/image-7.webp"
                alt=""
                fill
                className="object-cover object-center"
                sizes="40vw"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center lg:pl-4">
              <h2 className="font-display font-bold text-[clamp(32px,7vw,52px)] leading-[0.95] tracking-tight mb-5 text-balance">
                Забронируйте место <span className="italic text-burgundy">на ближайшую игру</span>
              </h2>
              <p className="text-[16px] md:text-[17px] leading-relaxed text-black/75 max-w-[48ch] mb-8 text-pretty">
                {bookingCta.body}
              </p>
              <Button href={siteConfig.bookingUrl} variant="burgundy" className="h-14 px-8 self-start text-[16px]">
                {bookingCta.cta} →
              </Button>
            </div>
          </div>
          <p className="relative z-0 mt-8 font-display font-bold text-[clamp(48px,12vw,120px)] leading-none text-burgundy/10 tracking-tight pointer-events-none">
            MAGNUM
          </p>
        </div>
      </div>
    </section>
  );
}
