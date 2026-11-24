import { useScrollWatch } from '../hooks/useScrollWatch';
import { XIcon } from './Icons';

export function JoinSection() {
  const { ref, visible } = useScrollWatch(0.15);

  return (
    <section
      id="join"
      ref={ref}
      className="relative z-30 w-full aspect-[16/10] sm:aspect-[16/9] min-h-[420px] md:min-h-[600px] overflow-hidden flex items-end justify-center"
    >
      <div className="rg-divider" aria-hidden="true" />

      {/* Join Us Banner */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(./assets/aistudio/Gemini_Generated_Image_jlxiyjjlxiyjjlxi_2895de31.jpg)',
        }}
      />

      {/* Subtle bottom contrast scrim for action buttons */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/45 via-black/15 to-transparent pointer-events-none"
      />

      <div
        className={`relative z-10 pb-12 sm:pb-16 md:pb-24 px-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 ${
          visible ? 'anim-fade-left' : 'opacity-0'
        }`}
      >
        <a
          href="https://pump.fun/"
          target="_blank"
          rel="noopener noreferrer"
          className="rg-btn rg-btn--cream w-64 sm:w-[17.8125rem] h-[72px] sm:h-[76px] text-[1.625rem] whitespace-nowrap shrink-0"
        >
          <span>BUY NOW</span>
        </a>

        <a
          href="https://x.com/RICHGOATONSOL"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow RichGoat on X"
          className="rg-social-btn rg-social-btn--cream w-[76px] h-[76px]"
        >
          <XIcon className="w-8 h-8" fill="#000" />
        </a>
      </div>
    </section>
  );
}
