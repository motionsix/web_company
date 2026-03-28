import { useState, useCallback, useRef } from 'react';

const LOGO_DARK = "/Logo/Logo_W.svg";
const LOGO_LIGHT = "/Logo/Logo_B.svg";

function Header() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'dark'
  );
  const btnRef = useRef<HTMLButtonElement>(null);

  const applyTheme = useCallback((next: string) => {
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    setTheme(next);
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';

    if (!document.startViewTransition || !btnRef.current) {
      applyTheme(next);
      return;
    }

    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      applyTheme(next);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
  }, [theme, applyTheme]);

  const isDark = theme === 'dark';
  const logoSrc = isDark ? LOGO_DARK : LOGO_LIGHT;

  return (
    <header className="sticky top-0 bg-base-100/70 backdrop-blur border-b border-base-300 z-50 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center" aria-label="MOTIONSIX STUDIO home">
          <img 
            src={logoSrc} 
            alt="MOTIONSIX STUDIO logo" 
            className="h-8 md:h-12 w-auto" 
            height={48}
          />
        </a>

        {/* Mobile */}
        <div className="flex items-center gap-1 md:hidden">
          <button
            ref={btnRef}
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle btn-sm text-base-content"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-base-content hover:bg-base-content/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-200 border border-base-300 rounded-lg w-52">
              <li>
                <a href="#services" className="text-base-content hover:bg-info/20 hover:text-info montserrat-500 py-3">
                  SERVICES
                </a>
              </li> 
              <li>
                <a href="#about" className="text-base-content hover:bg-accent/20 hover:text-accent montserrat-500 py-3">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#contact" className="text-base-content hover:bg-secondary/20 hover:text-secondary montserrat-500 py-3">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6 montserrat-500 text-lg">
            <a href="#services" className="text-base-content hover:text-info transition-colors">SERVICES</a>
            <a href="#about" className="text-base-content hover:text-accent transition-colors">ABOUT</a>
            <a href="#contact" className="text-base-content hover:text-secondary transition-colors">CONTACT</a>
          </nav>
          <button
            ref={btnRef}
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle btn-sm text-base-content"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
