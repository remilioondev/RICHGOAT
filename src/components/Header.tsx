import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { RichGoatLogo } from './Icons';

interface HeaderProps {
  activeSection: string;
}

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'how', label: 'How to buy' },
  { id: 'tokenomics', label: 'Tokenomics' },
  { id: 'merch', label: 'Merch' },
];

export function Header({ activeSection }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/55 backdrop-blur-sm transition-opacity md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header className="fixed top-0 left-0 z-50 w-full pt-3.5 px-4">
        <div className="max-w-[99.375rem] mx-auto flex items-center justify-between gap-8">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hero');
            }}
            className="relative z-50 shrink-0 transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-[#ed9858]"
          >
            <RichGoatLogo />
          </a>

          <nav className="hidden md:flex items-center bg-[#ed9858] p-[3px] shadow-[0_4px_0_#000]">
            <ul className="flex items-center gap-10 lg:gap-14 px-7 py-2.5 border-[3px] border-black bg-[#181e22]">
              {NAV_LINKS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(item.id);
                      }}
                      className={`font-comic uppercase text-xl leading-none whitespace-nowrap shrink-0 inline-block transition-all duration-200 ${
                        isActive
                          ? 'text-[#ed9858] scale-110'
                          : 'text-white hover:text-[#ed9858] hover:scale-105'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="https://pump.fun/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex rg-btn rg-btn--white w-40 h-14 text-xl whitespace-nowrap shrink-0"
            >
              <span>BUY NOW</span>
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              className="md:hidden relative z-50 w-12 h-12 bg-[#ed9858] p-[3px] flex items-center justify-center shadow-[0_3px_0_#000]"
            >
              <span className="w-full h-full bg-[#181e22] border-[2.5px] border-black flex items-center justify-center text-white">
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`md:hidden fixed top-0 right-0 h-screen w-[82vw] max-w-xs z-40 bg-[#ed9858] p-1 transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="w-full h-full bg-[#181e22] border-[3px] border-black flex flex-col justify-between p-6 pt-24">
            <ul className="flex flex-col gap-6">
              {NAV_LINKS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.id);
                    }}
                    className={`font-comic uppercase text-3xl block transition-colors whitespace-nowrap ${
                      activeSection === item.id ? 'text-[#ed9858]' : 'text-white hover:text-[#ed9858]'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="https://pump.fun/"
              target="_blank"
              rel="noopener noreferrer"
              className="rg-btn rg-btn--white w-full h-14 text-xl"
            >
              <span>BUY NOW</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
