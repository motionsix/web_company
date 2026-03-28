import { useLang } from '../contexts/LanguageContext';
import { tx } from '../data/translations';

function Hero() {
  const { lang } = useLang();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-linear-to-br from-info/6 via-transparent to-secondary/6" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-32 text-center z-10">
        <div className="inline-block mb-6 md:mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-base-content/10 bg-base-content/5 text-xs md:text-sm montserrat-400 text-base-content/70 tracking-wider">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            MOTIONSIX STUDIO
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl montserrat-700 tracking-tight text-base-content leading-[1.1]">
          BUILDING <span className="text-transparent bg-clip-text bg-linear-to-r from-info to-info/70">GAMES</span>,
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-accent/70">EVENTS</span>, AND
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-secondary/70">EXPERIENCES</span>
        </h1>

        <p className="mt-6 md:mt-10 text-lg sm:text-xl md:text-2xl text-base-content max-w-3xl mx-auto montserrat-600 leading-relaxed">
          {tx.hero.tagline[lang]}
        </p>
        <p className="mt-3 md:mt-4 text-base sm:text-lg md:text-xl text-base-content/50 max-w-2xl mx-auto montserrat-300">
          {tx.hero.sub[lang]}
        </p>

        <div className="mt-10 md:mt-14 flex justify-center gap-3 md:gap-4 flex-wrap px-4">
          <a
            href="#contact"
            className="btn btn-md md:btn-lg montserrat-500 text-base md:text-lg px-8 md:px-10 bg-linear-to-r from-info to-info/80 text-white border-0 shadow-lg shadow-info/25 hover:shadow-xl hover:shadow-info/30 hover:scale-105 transition-all duration-300"
          >
            {tx.hero.ctaStart[lang]}
          </a>
          <a
            href="#services"
            className="btn btn-outline btn-md md:btn-lg montserrat-500 text-base md:text-lg px-8 md:px-10 text-base-content border-base-content/20 hover:bg-base-content hover:text-base-100 hover:border-base-content transition-all duration-300 hover:scale-105"
          >
            {tx.hero.ctaServices[lang]}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 md:mt-24 flex flex-col items-center gap-2 text-base-content/30">
          <span className="text-xs montserrat-300 tracking-widest uppercase">{tx.hero.scroll[lang]}</span>
          <div className="w-px h-8 bg-linear-to-b from-base-content/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
