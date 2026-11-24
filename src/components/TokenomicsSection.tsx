import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { useScrollWatch } from '../hooks/useScrollWatch';

const CONTRACT_ADDRESS = 'RichGoat0000000000000000000000000000000pump';

const TOKENOMICS_ROWS = [
  { num: '01', name: 'Liquidity Provider', value: 'BURNT' },
  { num: '02', name: 'BUY/SELL TAX', value: '0/0' },
  { num: '03', name: 'Token Supply', value: '1B' },
];

export function TokenomicsSection() {
  const { ref, visible } = useScrollWatch(0.15);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback copy
      const input = document.createElement('input');
      input.value = CONTRACT_ADDRESS;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="tokenomics"
      ref={ref}
      className="relative z-20 w-full pt-20 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#9a7256]"
      style={{
        backgroundImage:
          'linear-gradient(122deg, rgba(178,134,102,0.92) 0%, rgba(178,134,102,0.92) 54%, rgba(132,96,72,0.96) 54.2%, rgba(132,96,72,0.96) 100%)',
      }}
    >
      <div className="rg-divider rg-divider--flush" aria-hidden="true" />

      <div className="relative z-10 max-w-[99.5625rem] mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10">
        {/* Comic Clipboard Stack (Faithful recreation of PRICH2 clipboard tailored for $RGOAT) */}
        <div className="relative w-full max-w-[46rem] md:w-[48rem] pt-6 pb-8 shrink-0">
          {/* Back folders */}
          <div
            aria-hidden="true"
            className="hidden sm:block absolute inset-x-3 top-2 bottom-2 bg-[#b5874c] border-[3px] border-black rotate-[2deg] shadow-[4px_6px_0_rgba(0,0,0,0.3)]"
          />
          <div
            aria-hidden="true"
            className="hidden sm:block absolute inset-x-2 top-4 bottom-0 bg-[#527dc6] border-[3px] border-black -rotate-[2.5deg]"
          />

          {/* Main white tilted sheet */}
          <div className="relative bg-[#fdfdfd] border-[3px] border-black shadow-[8px_12px_0_rgba(0,0,0,0.35)] -rotate-[4deg] sm:-rotate-[5deg] px-6 sm:px-12 pt-10 pb-14 sm:pt-12 sm:pb-16">
            {/* Decorative Paperclips */}
            <div
              aria-hidden="true"
              className="absolute -top-6 right-24 sm:right-32 flex gap-2 pointer-events-none"
            >
              <div className="w-6 h-14 border-[4px] border-[#7c1d1d] rounded-full -rotate-12 bg-transparent" />
              <div className="w-5 h-12 border-[3px] border-black rounded-full -rotate-12 bg-transparent" />
            </div>

            {/* Header line: Employee name & Date */}
            <div className="flex flex-wrap items-end justify-between gap-4 mb-5 font-comic text-[#303c40]">
              <div className="flex items-end gap-2">
                <span className="text-base sm:text-xl font-bold">Employee name</span>
                <span className="border-b-2 border-[#0385af] px-3 text-lg sm:text-2xl text-black tracking-wide">
                  $RGOAT
                </span>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-base sm:text-xl">Date</span>
                <span className="border-b-2 border-[#0385af] px-3 text-base sm:text-xl text-[#303c40]">
                  2026
                </span>
              </div>
            </div>

            {/* Cyan Tokenomics Banner */}
            <div className="inline-block bg-[#0385af] border-t-[4px] border-[#8b989d] px-4 py-1.5 mb-8">
              <h2 className="font-display text-3xl sm:text-5xl text-white tracking-wide leading-none">
                TOKENOMICS.
              </h2>
            </div>

            {/* Table */}
            <div
              className={`w-full mb-6 transition-opacity duration-300 ${
                visible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex items-center gap-4 bg-[#0385af] text-[#fdfdfd] py-1.5 px-2 font-comic text-sm sm:text-base">
                <div className="min-w-[2rem] pl-1">№</div>
                <div className="flex-1">Name</div>
                <div className="pr-1">Value</div>
              </div>

              {TOKENOMICS_ROWS.map((row) => (
                <div
                  key={row.num}
                  className="flex items-center gap-4 border-b border-l border-r border-[#303c40]/80 py-2 px-2 font-comic text-sm sm:text-base text-[#303c40]/90 tabular-nums"
                >
                  <div className="min-w-[2rem] pl-1">{row.num}</div>
                  <div className="flex-1 uppercase">{row.name}</div>
                  <div className="pr-1 font-bold text-black">{row.value}</div>
                </div>
              ))}
            </div>

            {/* Contract Address Copy Box */}
            <div
              className={`flex items-center gap-2 border-2 border-[#596366] bg-[#7c8486]/10 px-2.5 py-1.5 transition-opacity duration-300 ${
                visible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="font-comic text-base sm:text-lg text-[#596366] shrink-0">
                CA:
              </span>
              <button
                type="button"
                onClick={handleCopy}
                aria-label="Copy RichGoat contract address"
                className="flex items-center justify-between gap-2 flex-1 min-w-0 font-comic text-base sm:text-lg text-[#596366] hover:text-[#ed9858] transition-colors cursor-pointer text-left"
              >
                <span className="truncate font-mono text-xs sm:text-base tabular-nums">
                  {CONTRACT_ADDRESS}
                </span>
                <span className="inline-flex items-center gap-1 shrink-0 text-sm font-comic uppercase">
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-700" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </span>
              </button>
            </div>

            {/* Bottom page footer on sheet */}
            <div className="mt-10 pt-2 border-t-2 border-[#8b989d] flex items-center justify-between font-comic text-sm sm:text-base text-[#596366] pl-28 sm:pl-44">
              <span>page:01/04</span>
              <span>2026</span>
            </div>
          </div>

          {/* Mascot peeking at bottom-left corner of clipboard */}
          <img
            src="/assets/aistudio/Gemini_Generated_Image_xkpe1qxkpe1qxkpe_d5c0053e.jpg"
            alt="RichGoat mascot peeking over the tokenomics report"
            referrerPolicy="no-referrer"
            className="pointer-events-none select-none absolute -bottom-2 -left-2 sm:-left-6 w-28 sm:w-40 md:w-44 aspect-square object-cover rounded-2xl border-[4px] border-black shadow-[5px_7px_0_#000] z-20"
          />
        </div>

        {/* Right side of wooden desk: Motivational Goat Buck Stack */}
        <div className="w-[80%] sm:w-[60%] lg:w-[36%] max-w-[460px] flex justify-center self-center rotate-[3deg]">
          <img
            src="/assets/aistudio/Billete_verde_del_chivo_motivacional_a159570f.png"
            alt="One RichGoat Buck motivational bill stack"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-contain drop-shadow-[12px_16px_0_rgba(0,0,0,0.35)] select-none"
          />
        </div>
      </div>
    </section>
  );
}
