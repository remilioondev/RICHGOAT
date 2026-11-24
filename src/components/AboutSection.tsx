import { useScrollWatch } from '../hooks/useScrollWatch';

export function AboutSection() {
  const { ref, visible } = useScrollWatch(0.15);

  return (
    <section
      id="about"
      ref={ref}
      className="relative z-20 w-full bg-cover bg-center bg-no-repeat pb-12 md:pb-24 pt-14 md:pt-28"
      style={{ backgroundImage: 'url(./assets/bg/ttamKaPOQa5R.png)' }}
    >
      <div className="rg-divider" aria-hidden="true" />

      <div className="relative z-10 max-w-[99.375rem] mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-10">
        {/* Left: What is RichGoat */}
        <div className="w-full md:w-[46%] max-w-[39.875rem] self-center">
          <h2 className="flex flex-col items-start mb-6 md:mb-8 select-none">
            <span
              className={`font-display lowercase leading-[0.88] text-white comic-stroke-lg drop-shadow-[3px_4px_0_#000] transition-opacity duration-300 ${
                visible ? 'anim-to-right' : 'opacity-0'
              }`}
              style={{ fontSize: 'clamp(2.5rem, 4.8vw, 4.75rem)' }}
            >
              what is
            </span>
            <span
              className={`font-display uppercase leading-[0.86] text-[#ed9858] comic-stroke-heavy drop-shadow-[4px_6px_0_#000] transition-opacity duration-300 ${
                visible ? 'anim-to-left' : 'opacity-0'
              }`}
              style={{ fontSize: 'clamp(3.75rem, 7.5vw, 7.25rem)' }}
            >
              RICHGOAT
            </span>
          </h2>

          <p
            className={`font-comic text-[#515151] text-lg md:text-2xl leading-[1.3] lowercase mb-7 md:mb-9 ${
              visible ? 'anim-fade-right' : 'opacity-0'
            }`}
          >
            you&apos;re not poor. you&apos;re just in your richgoat phase. richgoat is the
            mindset of future moguls, crypto degens, and dreamers who know the moon is
            just a matter of timing. we don&apos;t flex lambos — yet. but we&apos;re
            building, stacking, and vibing until the world catches up. if you know,
            you&apos;re richgoat.
          </p>

          <div
            className={`flex flex-wrap items-center gap-3 ${
              visible ? 'anim-fade-right' : 'opacity-0'
            }`}
          >
            <a
              href="https://pump.fun/"
              target="_blank"
              rel="noopener noreferrer"
              className="rg-btn w-44 h-[60px] text-[1.625rem] whitespace-nowrap shrink-0"
            >
              <span>BUY NOW</span>
            </a>

            <a
              href="https://dexscreener.com/solana"
              target="_blank"
              rel="noopener noreferrer"
              className="rg-btn rg-btn--sage w-44 h-[60px] text-[1.625rem] whitespace-nowrap shrink-0"
            >
              <span>CHART</span>
            </a>
          </div>
        </div>

        {/* Right: Framed Comic Office Goat Illustration */}
        <div className="w-full md:w-[52%] max-w-[40.8125rem] rounded-3xl border-[4px] border-black bg-[#dbe7ee] shadow-[8px_8px_0_#000] overflow-hidden self-center md:self-end">
          <img
            src="./assets/aistudio/Gemini_Generated_Image_vonjzsvonjzsvonj_4c459d8f.jpg"
            alt="RichGoat in sunglasses and suit at the office desk with a You Can Do It sticky note"
            referrerPolicy="no-referrer"
            className="w-full h-auto block object-cover"
          />
        </div>
      </div>
    </section>
  );
}
