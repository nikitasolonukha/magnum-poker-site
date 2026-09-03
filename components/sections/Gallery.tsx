import { gallery as galleryData } from "@/data/content";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-paper text-black">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 py-20 md:py-28 lg:py-36">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-[12px] font-semibold tracking-[0.2em] uppercase text-muted mb-4">
            Фотогалерея
          </p>
          <h2 className="font-display font-bold text-[clamp(32px,9vw,46px)] md:text-[clamp(46px,4.5vw,72px)] leading-[0.95] tracking-tight text-balance">
            <span>Как выглядят </span>
            <span className="italic text-burgundy">наши вечера</span>
          </h2>
        </div>

        {/* Desktop: editorial asymmetric grid */}
        <div className="hidden md:grid grid-cols-12 gap-3 lg:gap-4">
          {/* Row 1 */}
          <div className="col-span-7 relative aspect-[16/10] overflow-hidden rounded-[4px]">
            <Image
              src={galleryData.images[0].src}
              alt={galleryData.images[0].alt}
              fill
              className="object-cover"
              sizes="58vw"
              loading="lazy"
            />
          </div>
          <div className="col-span-5 relative aspect-[16/10] overflow-hidden rounded-[4px]">
            <Image
              src={galleryData.images[1].src}
              alt={galleryData.images[1].alt}
              fill
              className="object-cover"
              sizes="42vw"
              loading="lazy"
            />
          </div>

          {/* Row 2 */}
          <div className="col-span-4 relative aspect-[3/4] overflow-hidden rounded-[4px]">
            <Image
              src={galleryData.images[2].src}
              alt={galleryData.images[2].alt}
              fill
              className="object-cover"
              sizes="33vw"
              loading="lazy"
            />
          </div>
          <div className="col-span-4 relative aspect-[3/4] overflow-hidden rounded-[4px]">
            <Image
              src={galleryData.images[3].src}
              alt={galleryData.images[3].alt}
              fill
              className="object-cover"
              sizes="33vw"
              loading="lazy"
            />
          </div>
          <div className="col-span-4 relative aspect-[3/4] overflow-hidden rounded-[4px]">
            <Image
              src={galleryData.images[4].src}
              alt={galleryData.images[4].alt}
              fill
              className="object-cover"
              sizes="33vw"
              loading="lazy"
            />
          </div>

          {/* Row 3 */}
          <div className="col-span-5 relative aspect-[16/10] overflow-hidden rounded-[4px]">
            <Image
              src={galleryData.images[5].src}
              alt={galleryData.images[5].alt}
              fill
              className="object-cover"
              sizes="42vw"
              loading="lazy"
            />
          </div>
          <div className="col-span-7 relative aspect-[16/10] overflow-hidden rounded-[4px]">
            <Image
              src={galleryData.images[6].src}
              alt={galleryData.images[6].alt}
              fill
              className="object-cover"
              sizes="58vw"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mobile: scroll-snap horizontal */}
        <div className="md:hidden -mx-5 px-5 overflow-x-auto hide-scroll snap-x snap-mandatory flex gap-3 pb-4">
          {galleryData.images.slice(0, 7).map((img, i) => (
            <div
              key={i}
              className="snap-start shrink-0 relative w-[75vw] aspect-[3/4] overflow-hidden rounded-[4px]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="75vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 md:mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[14px] md:text-[15px] text-muted">
            {galleryData.instagramNote}
          </p>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-11 px-6 border border-black/20 text-[14px] font-semibold text-black hover:bg-black hover:text-warm-white transition-colors duration-200 rounded-[4px]"
          >
            {galleryData.cta}
            <span className="ml-2">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
