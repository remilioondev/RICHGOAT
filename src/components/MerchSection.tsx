import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollWatch } from '../hooks/useScrollWatch';

const MERCH_ITEMS = [
  {
    src: '/assets/images/goat_merch_hoodie_1795534779192.jpg',
    subtitle: 'RichGoat Classic',
    quote: '“POOR? NAH, RICHGOAT”',
    alt: "Person wearing RichGoat hoodie reading You're Not Broke, You're RichGoat",
  },
  {
    src: '/assets/images/goat_merch_tee_1795534780294.jpg',
    subtitle: 'RichGoat Essential Tee',
    quote: '“CLOCK OUT. STACK UP.”',
    alt: 'Model wearing minimalist off-white RichGoat crewneck t-shirt',
  },
  {
    src: '/assets/aistudio/Gemini_Generated_Image_vonjzsvonjzsvonj_4c459d8f.jpg',
    subtitle: 'Executive Print',
    quote: '“YOU CAN DO IT — $RGOAT”',
    alt: 'RichGoat executive art print',
  },
];

export function MerchSection() {
  const { ref, visible } = useScrollWatch(0.15);
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + MERCH_ITEMS.length) % MERCH_ITEMS.length);
  const next = () => setIndex((i) => (i + 1) % MERCH_ITEMS.length);
  const current = MERCH_ITEMS[index];

  return (
    <section
      id="merch"
      ref={ref}
      className="relative w-full bg-cover bg-center bg-no-repeat py-16 md:py-28 overflow-hidden"
      style={{ backgroundImage: 'url(/assets/bg/VQJukSQCz0XG.png)' }}
    >
      <div className="rg-divider rg-divider--flush" aria-hidden="true" />

      <div className="relative z-10 max-w-[89.5rem] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left column */}
        <div className="w-full md:w-[49%] flex flex-col items-start">
          <h2
            className={`font-display text-[#f29d60] comic-stroke-lg leading-[0.82] drop-shadow-[4px_6px_0_#000] mb-6 ${
              visible ? 'anim-to-right' : 'opacity-0'
            }`}
            style={{ fontSize: 'clamp(4.5rem, 11vw, 11.5rem)' }}
          >
            Rich Merch
          </h2>

          <h3
            className={`font-display text-black leading-none mb-2 ${
              visible ? 'anim-fade-right' : 'opacity-0'
            }`}
            style={{ fontSize: 'clamp(2rem, 3.2vw, 3.25rem)' }}
          >
            {current.subtitle}
          </h3>

          <p
            className={`font-display text-black leading-snug mb-6 ${
              visible ? 'anim-fade-right' : 'opacity-0'
            }`}
            style={{ fontSize: 'clamp(1.375rem, 1.8vw, 1.75rem)' }}
          >
            {current.quote}
          </p>

          {/* Carousel Controls */}
          <div className="flex items-center gap-6 mb-6">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous merch item"
              className="w-12 h-12 flex items-center justify-center bg-black border-2 border-black text-white hover:text-[#ed9858] transition-colors cursor-pointer shadow-[3px_3px_0_#ed9858]"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            <div className="font-display text-black text-3xl md:text-5xl tabular-nums select-none">
              {index + 1} / {MERCH_ITEMS.length}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next merch item"
              className="w-12 h-12 flex items-center justify-center bg-black border-2 border-black text-white hover:text-[#ed9858] transition-colors cursor-pointer shadow-[3px_3px_0_#ed9858]"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>

          <a
            href="https://pump.fun/"
            target="_blank"
            rel="noopener noreferrer"
            className={`rg-btn rg-btn--cream w-72 h-[76px] text-[1.625rem] whitespace-nowrap shrink-0 ${
              visible ? 'anim-fade-right' : 'opacity-0'
            }`}
          >
            <span>BUY NOW</span>
          </a>
        </div>

        {/* Right column: 3-layer rotating comic stack */}
        <div className="w-full max-w-[30rem] md:max-w-[36rem] lg:w-[46%] aspect-square relative">
          <div className="relative w-full h-full">
            <div
              aria-hidden="true"
              className="merch-frame-back absolute top-1/2 left-1/2 w-[82%] aspect-square border-2 border-black bg-[#f29d60]"
            />
            <div
              aria-hidden="true"
              className="merch-frame-middle absolute top-1/2 left-1/2 w-[82%] aspect-square border-2 border-black bg-white"
            />
            <div className="merch-frame-front absolute top-1/2 left-1/2 w-[82%] aspect-square border-2 border-black overflow-hidden bg-white shadow-lg">
              <img
                key={current.src}
                src={current.src}
                alt={current.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
