import { memo } from 'react';
import { useLang } from '../contexts/LanguageContext';
import { tx } from '../data/translations';

function Footer() {
  const { lang } = useLang();

  return (
    <footer className="relative bg-base-100 border-t border-base-300 z-10">
      <div className="mx-auto max-w-6xl px-4 py-6 md:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm text-base-content/60 montserrat-300">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} MotionSix Studio. {tx.footer.rights[lang]}
          </p>
          <div className="flex gap-4 md:gap-6">
            <a href="#services" className="hover:text-info transition-colors">{tx.footer.services[lang]}</a>
            <a href="#about" className="hover:text-accent transition-colors">{tx.footer.about[lang]}</a>
            <a href="#contact" className="hover:text-secondary transition-colors">{tx.footer.contact[lang]}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
