import { useScrollWatch } from '../hooks/useScrollWatch';
import { XIcon } from './Icons';

const AI_POSTS = [
  {
    title: 'RichGoat',
    handle: '@RichGoat_SOL',
    text: "If I could pick just ONE meme that's gonna skyrocket me to the moon… it's $RGOAT. Why settle for average when the RichGoat herd is all about hitting those diamond gains? 💎",
    cardImage: '/assets/aistudio/Gemini_Generated_Image_upbc0aupbc0aupbc_3a766b4f.jpg',
    cardAlt: 'RichGoat standing in front of an upward financial chart',
  },
  {
    title: 'Terminal of Goat',
    handle: '@richgoatterminal',
    text: "You're not broke. You're just early on $RGOAT. Clocking out of the cubicle, clocking into generational wealth while the herd stacks nonstop.",
    cardImage: '/assets/aistudio/Billete_verde_del_chivo_motivacional_a159570f.png',
    cardAlt: 'Motivational RichGoat dollar bill stack',
  },
];

export function AiMachineSection() {
  const { ref, visible } = useScrollWatch(0.12);

  return (
    <section
      id="ai"
      ref={ref}
      className="relative z-40 w-full bg-cover bg-center bg-no-repeat py-16 md:py-28 overflow-hidden"
      style={{ backgroundImage: 'url(/assets/bg/Qoe4I9W48CAI.png)' }}
    >
      <div className="rg-divider rg-divider--flush" aria-hidden="true" />

      <div className="relative z-10 max-w-[89.5rem] mx-auto px-4 flex flex-col">
        {/* Header with floating comic sticky-note icons */}
        <div className="relative self-center flex flex-col items-center text-center w-full max-w-[56rem] mb-10 md:mb-14">
          {/* Decorative sticky note accents from PRICH2 */}
          <div aria-hidden="true" className="hidden md:block absolute inset-0 pointer-events-none">
            <img
              src="/assets/icons/mJbDIMdZSSr8.png"
              alt=""
              className="absolute top-[8%] -left-[8%] w-16 object-contain"
            />
            <img
              src="/assets/icons/AEJw6gbcFtka.png"
              alt=""
              className="absolute top-[25%] left-[1%] w-16 object-contain"
            />
            <img
              src="/assets/icons/JSkRdMUv3wG6.png"
              alt=""
              className="absolute top-[68%] left-[12%] w-16 object-contain"
            />
            <img
              src="/assets/icons/Fx0iD2DFrKze.png"
              alt=""
              className="absolute bottom-0 right-[14%] w-16 object-contain"
            />
            <img
              src="/assets/icons/vMRscN0igVAH.png"
              alt=""
              className="absolute top-0 -right-[10%] w-28 object-contain"
            />
          </div>

          <h2 className="flex flex-col items-center mb-4">
            <span
              className={`font-display text-[#a4aec1] comic-stroke-lg leading-[0.88] drop-shadow-[3px_4px_0_#000] ${
                visible ? 'anim-to-right' : 'opacity-0'
              }`}
              style={{ fontSize: 'clamp(2.75rem, 6.2vw, 6.75rem)' }}
            >
              24/7 RichGoat-preaching
            </span>
            <span
              className={`font-display text-[#a4aec1] comic-stroke-lg leading-[0.88] drop-shadow-[3px_4px_0_#000] ${
                visible ? 'anim-to-left' : 'opacity-0'
              }`}
              style={{ fontSize: 'clamp(2.75rem, 6.2vw, 6.75rem)' }}
            >
              Twitter machine
            </span>
          </h2>

          <p
            className={`font-comic text-black text-base sm:text-xl max-w-[26rem] leading-[1.2] mb-5 ${
              visible ? 'anim-fade-right' : 'opacity-0'
            }`}
          >
            Your 24/7 meme specialist, powered by advanced AI to keep the RichGoat
            movement trending
          </p>

          <a
            href="https://x.com/RichGoat_SOL"
            target="_blank"
            rel="noopener noreferrer"
            className={`rg-btn w-72 sm:w-[21.4375rem] h-12 text-xl sm:text-2xl whitespace-nowrap shrink-0 ${
              visible ? 'anim-fade-right' : 'opacity-0'
            }`}
          >
            <span className="inline-flex items-center gap-2">
              <XIcon className="w-5 h-5" fill="#fff" />
              Follow $RGOAT ai
            </span>
          </a>
        </div>

        {/* Body: 2 Comic Tweet Cards + RichGoat Mascot */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full lg:w-[66%] z-10">
            {AI_POSTS.map((post, i) => (
              <article
                key={post.handle}
                style={{ animationDelay: `${i * 120}ms` }}
                className={`border-2 border-black bg-white p-4 sm:p-6 shadow-[4px_6px_0_#000] flex flex-col justify-between ${
                  visible ? 'anim-fade-right' : 'opacity-0'
                }`}
              >
                <div>
                  <div className="flex items-start gap-3 sm:gap-4 mb-3">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-2xl border-[2.5px] border-black bg-[#dbe7ee] overflow-hidden">
                      <img
                        src="/assets/aistudio/Gemini_Generated_Image_xkpe1qxkpe1qxkpe_d5c0053e.jpg"
                        alt={post.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                        <h3 className="font-comic text-xl sm:text-2xl text-black leading-none">
                          {post.title}
                        </h3>
                        <span className="font-comic text-base sm:text-lg text-[#9b8080] leading-none truncate">
                          {post.handle}
                        </span>
                      </div>
                      <p className="font-comic text-black text-base sm:text-lg leading-[1.3]">
                        {post.text}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border-2 border-black bg-[#f7fafc] aspect-[404/325] mt-2">
                  <img
                    src={post.cardImage}
                    alt={post.cardAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </article>
            ))}
          </div>

          {/* Right side RichGoat mascot with rounded corners & black border */}
          <div
            className={`w-[75%] sm:w-[50%] lg:w-[32%] flex justify-center lg:justify-end pointer-events-none ${
              visible ? 'anim-fade-left' : 'opacity-0'
            }`}
          >
            <img
              src="/assets/aistudio/Gemini_Generated_Image_xkpe1qxkpe1qxkpe_d5c0053e.jpg"
              alt="RichGoat mascot holding wallet full of cash"
              referrerPolicy="no-referrer"
              className="w-full max-w-[380px] aspect-square object-cover rounded-[2rem] border-[4px] border-black shadow-[8px_10px_0_#000]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
