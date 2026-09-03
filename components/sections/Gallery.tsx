import { gallery as galleryData } from "@/data/content";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Gallery() {
  const imgs = galleryData.images;

  return (
    <section id="gallery" className="bg-paper text-black">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 pt-20 md:pt-28">
        <h2 className="font-display font-bold text-[clamp(32px,9vw,46px)] md:text-[clamp(44px,4vw,72px)] leading-[0.95] tracking-tight text-balance mb-10 md:mb-14">
          Как выглядят <span className="italic text-burgundy">наши вечера</span>
        </h2>
      </div>

      <div className="hidden md:grid grid-cols-12 gap-px bg-black/10 max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16">
        <div className="col-span-8 relative aspect-[16/10] bg-paper">
          <Image src={imgs[0].src} alt={imgs[0].alt} fill className="object-cover" sizes="66vw" loading="lazy" />
        </div>
        <div className="col-span-4 relative aspect-[16/10] bg-paper">
          <Image src={imgs[1].src} alt={imgs[1].alt} fill className="object-cover" sizes="33vw" loading="lazy" />
        </div>
        <div className="col-span-3 relative aspect-[3/4] bg-paper">
          <Image src={imgs[2].src} alt={imgs[2].alt} fill className="object-cover" sizes="25vw" loading="lazy" />
        </div>
        <div className="col-span-6 relative aspect-[3/4] bg-paper">
          <Image src={imgs[3].src} alt={imgs[3].alt} fill className="object-cover" sizes="50vw" loading="lazy" />
        </div>
        <div className="col-span-3 relative aspect-[3/4] bg-paper">
          <Image src={imgs[4].src} alt={imgs[4].alt} fill className="object-cover" sizes="25vw" loading="lazy" />
        </div>
        <div className="col-span-5 relative aspect-[16/11] bg-paper">
          <Image src={imgs[5].src} alt={imgs[5].alt} fill className="object-cover" sizes="42vw" loading="lazy" />
        </div>
        <div className="col-span-7 relative aspect-[16/11] bg-paper">
          <Image src={imgs[6].src} alt={imgs[6].alt} fill className="object-cover" sizes="58vw" loading="lazy" />
        </div>
      </div>

      <div className="md:hidden">
        <div className="relative aspect-[4/5]">
          <Image src={imgs[0].src} alt={imgs[0].alt} fill className="object-cover" sizes="100vw" loading="lazy" />
        </div>
        <div className="px-5 pt-3 overflow-x-auto hide-scroll snap-x snap-mandatory flex gap-2 pb-2">
          {imgs.slice(1, 7).map((img) => (
            <div key={img.src} className="snap-start shrink-0 relative w-[58vw] aspect-[3/4]">
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="58vw" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 py-10 md:py-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-[15px] text-black/60 max-w-[48ch]">{galleryData.instagramNote}</p>
        <Button href={siteConfig.instagram} variant="ghost-light">
          {galleryData.cta} ↗
        </Button>
      </div>
    </section>
  );
}
