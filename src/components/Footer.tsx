import { XIcon, DexScreenerIcon, DexToolsIcon } from './Icons';

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="relative z-30 border-t-[3px] border-black overflow-hidden">
      {/* Top comic cash-stack band */}
      <div
        className="relative pt-8 md:pt-10 bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url(./assets/bg/UrXXC4YPcQot.jpg)',
          backgroundPosition: '70% bottom',
        }}
      >
        <div className="relative z-10 max-w-[99.375rem] mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          {/* Left: Big comic nav links + social buttons */}
          <div className="relative z-20 pb-8 md:pb-12">
            <nav aria-label="Footer navigation" className="flex flex-col items-start gap-3 md:gap-4 mb-8 md:mb-10">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('about');
                }}
                className="font-display uppercase text-white comic-stroke-heavy leading-[0.92] hover:text-[#ed9858] transition-colors drop-shadow-[3px_4px_0_#000]"
                style={{ fontSize: 'clamp(2.75rem, 5.5vw, 5.75rem)' }}
              >
                About
              </a>
              <a
                href="#how"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('how');
                }}
                className="font-display uppercase text-white comic-stroke-heavy leading-[0.92] hover:text-[#ed9858] transition-colors drop-shadow-[3px_4px_0_#000]"
                style={{ fontSize: 'clamp(2.75rem, 5.5vw, 5.75rem)' }}
              >
                how to buy
              </a>
              <a
                href="#tokenomics"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('tokenomics');
                }}
                className="font-display uppercase text-white comic-stroke-heavy leading-[0.92] hover:text-[#ed9858] transition-colors drop-shadow-[3px_4px_0_#000]"
                style={{ fontSize: 'clamp(2.75rem, 5.5vw, 5.75rem)' }}
              >
                Goatonomics
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="https://x.com/RICHGOATONSOL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RichGoat on X"
                className="rg-social-btn w-[60px] h-[60px]"
              >
                <XIcon className="w-6 h-6" fill="#fff" />
              </a>
              <a
                href="https://dexscreener.com/solana"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RichGoat on DexScreener"
                className="rg-social-btn w-[60px] h-[60px]"
              >
                <DexScreenerIcon className="w-6 h-7" />
              </a>
              <a
                href="https://www.dextools.io"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RichGoat on DexTools"
                className="rg-social-btn w-[60px] h-[60px]"
              >
                <DexToolsIcon className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Right: Peeking RichGoat Mascot */}
          <div className="w-64 sm:w-80 md:w-[36%] max-w-[400px] self-end pb-4 pointer-events-none select-none">
            <img
              src="./assets/aistudio/Gemini_Generated_Image_xkpe1qxkpe1qxkpe_d5c0053e.jpg"
              alt="RichGoat mascot in sunglasses holding cash wallet"
              referrerPolicy="no-referrer"
              className="w-full aspect-square object-cover rounded-3xl border-[4px] border-black shadow-[6px_8px_0_#000] block"
            />
          </div>
        </div>
      </div>

      {/* Black copyright bar */}
      <div className="relative z-20 border-t-[3px] border-black bg-black">
        <div className="max-w-[99.375rem] mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4 font-comic uppercase text-white text-lg md:text-xl">
          <span>2026 © RICHGOAT — ALL RIGHTS RESERVED</span>
          <span className="text-[#ed9858]">$RGOAT COMMUNITY</span>
        </div>
      </div>
    </footer>
  );
}
