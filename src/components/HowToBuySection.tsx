import { useScrollWatch } from '../hooks/useScrollWatch';

const STEPS = [
  {
    num: '1',
    title: 'Get a wallet',
    desc: 'Install Phantom or Solflare wallet and create your Solana (SOL) account.',
    highlight: 'bg-[#cfe0ff]',
    tilt: '-rotate-[0.8deg]',
    headTilt: '',
  },
  {
    num: '2',
    title: 'Fund with SOL',
    desc: 'Buy SOL on your preferred exchange and send it to your Phantom Solana address (or buy SOL directly in Phantom).',
    highlight: 'bg-[#ddead6]',
    tilt: 'rotate-[1.7deg]',
    headTilt: '',
  },
  {
    num: '3',
    title: 'Go to pump.fun',
    desc: 'Open pump.fun, search RichGoat ($RGOAT) or paste the mint address, and connect Phantom.',
    highlight: 'bg-[#cfe0ff]',
    tilt: '',
    headTilt: '',
  },
  {
    num: '4',
    title: 'Swap SOL for $RGOAT',
    desc: 'Enter your SOL amount, click Buy, and confirm the instant Solana transaction in your wallet.',
    highlight: 'bg-[#ddead6]',
    tilt: '-rotate-[0.8deg]',
    headTilt: '-rotate-[1.9deg]',
  },
];

export function HowToBuySection() {
  const { ref, visible } = useScrollWatch(0.15);

  return (
    <section
      id="how"
      ref={ref}
      className="relative z-30 w-full flex items-center justify-center py-14 md:py-20"
    >
      {/* Background texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/bg/z0jD6w2JdUl4.png)' }}
      />
      <div className="rg-divider" aria-hidden="true" />

      <div className="relative z-10 max-w-[112.5625rem] w-full mx-auto px-4">
        {/* Corkboard frame on desktop */}
        <div
          className="relative w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 py-6 md:py-14 lg:aspect-[1771/1015] bg-none md:bg-[url('/assets/bg/j1m3YwfV1vwq.png')] md:bg-contain md:bg-center md:bg-no-repeat"
        >
          {/* Left: Employee of the month poster */}
          <div className="w-[85%] sm:w-[65%] md:w-[40%] lg:w-[37%] flex justify-center shrink-0">
            <div className="relative bg-white border-[4px] border-black rounded-2xl p-3 pt-5 pb-4 shadow-[8px_10px_0_rgba(0,0,0,0.35)] max-w-[440px] w-full">
              <div className="mx-auto w-[64%] mb-2.5 bg-white border-[3px] border-[#8b7d2b] rounded-md py-1 text-center font-comic uppercase text-lg sm:text-xl text-black tracking-wide">
                BEST EMPLOYEE
              </div>
              <div className="border-[3px] border-black rounded-xl overflow-hidden aspect-square">
                <img
                  src="/assets/aistudio/Gemini_Generated_Image_upbc0aupbc0aupbc_3a766b4f.jpg"
                  alt="Best Employee RichGoat standing before a glowing upward stock chart"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mx-auto w-[64%] mt-2.5 bg-white border-[3px] border-[#8b7d2b] rounded-md py-1 text-center font-comic uppercase text-lg sm:text-xl text-black tracking-wide">
                RICHGOAT
              </div>
            </div>
          </div>

          {/* Right: Tilted grid-paper checklist note */}
          <div className="relative z-10 w-full sm:w-[88%] md:w-[44%] lg:w-[35%] md:-translate-x-8 md:translate-y-6 md:rotate-[3.2deg] shrink-0">
            {/* Yellow tape */}
            <img
              src="/assets/bg/ZVid16yI31YW.png"
              alt=""
              aria-hidden="true"
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 md:w-20 z-20 pointer-events-none select-none"
            />

            <div
              className="w-full bg-contain bg-center bg-no-repeat px-6 sm:px-9 py-10 sm:py-12 md:px-10 md:py-14 flex flex-col items-center justify-center bg-[#fcfaf2] border-[3px] border-black shadow-[6px_8px_0_rgba(0,0,0,0.28)] md:border-none md:shadow-none md:bg-transparent md:bg-[url('/assets/bg/M0zVA8ApAFRi.png')] md:bg-[length:100%_100%]"
            >
              <h2
                className={`font-display uppercase text-[#a4aec1] comic-stroke-lg text-center leading-[0.9] mb-4 md:mb-5 ${
                  visible ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'
                }`}
                style={{ fontSize: 'clamp(2.5rem, 5.2vw, 5.5rem)' }}
              >
                how to BUY
              </h2>

              <div className="flex flex-col gap-3 sm:gap-4 w-full">
                {STEPS.map((step, idx) => (
                  <div
                    key={step.num}
                    style={{ transitionDelay: `${idx * 90}ms` }}
                    className={`flex flex-col items-start transition-all duration-300 ${
                      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                    }`}
                  >
                    <h3
                      className={`inline-flex items-center gap-2 px-3 sm:px-4 py-0.5 text-black font-comic text-lg sm:text-xl md:text-2xl mb-1 ${step.highlight} ${step.headTilt}`}
                    >
                      <span>{step.num}</span>
                      <span>{step.title}</span>
                    </h3>
                    <p
                      className={`font-comic text-black text-sm sm:text-base md:text-lg leading-tight pl-2 sm:pl-5 ${step.tilt}`}
                    >
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
