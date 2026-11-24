import { XIcon } from './Icons';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative z-10 w-full min-h-screen overflow-hidden flex items-end pt-24 md:pt-28"
    >
      {/* Flipped office window & water-cooler comic background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -scale-x-100 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(./assets/bg/irwZXUlmaAb8.jpg)' }}
      />

      <div className="relative z-10 max-w-[99.375rem] w-full mx-auto px-4 flex flex-col-reverse md:flex-row items-center md:items-end justify-between gap-6 min-h-[calc(100vh-6rem)]">
        {/* Left: RichGoat Hero Mascot */}
        <div className="anim-to-right w-[90%] sm:w-[70%] md:w-[44%] lg:w-[42%] flex justify-center md:justify-start self-center md:self-center pb-6 md:pb-12 shrink-0">
          <img
            src="./assets/aistudio/Gemini_Generated_Image_xkpe1qxkpe1qxkpe_d5c0053e.jpg"
            alt="RichGoat mascot wearing sunglasses and holding a wallet full of cash"
            referrerPolicy="no-referrer"
            className="w-full max-w-[460px] object-cover rounded-[2rem] border-[4px] border-black shadow-[8px_10px_0_#000] select-none"
          />
        </div>

        {/* Right: Hero Comic Title + Actions */}
        <div className="anim-to-left w-full md:w-[52%] flex flex-col items-center md:items-center text-center self-center pb-6 md:pb-20">
          <p className="font-comic uppercase text-lg md:text-2xl text-[#181e22] tracking-wider mb-1">
            $RGOAT · PRE-RICH ERA
          </p>

          <h1
            className="font-display uppercase leading-[0.86] text-[#a4aec1] comic-stroke-heavy drop-shadow-[4px_6px_0_#000] select-none mb-6 md:mb-8"
            style={{ fontSize: 'clamp(4.25rem, 11vw, 10.5rem)' }}
          >
            RICH<span className="text-[#f29d60]">GOAT</span>
          </h1>

          <div className="flex items-center justify-center gap-4 anim-fade-left">
            <a
              href="https://pump.fun/"
              target="_blank"
              rel="noopener noreferrer"
              className="rg-btn w-44 h-[60px] text-[1.625rem] whitespace-nowrap shrink-0"
            >
              <span>BUY NOW</span>
            </a>

            <a
              href="https://x.com/RichGoat_SOL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow RichGoat on X"
              className="rg-social-btn w-[60px] h-[60px]"
            >
              <XIcon className="w-6 h-6" fill="#fff" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
