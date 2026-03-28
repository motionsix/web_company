import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';

export type Lang = 'th' | 'en';

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'th',
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem('lang') as Lang) || 'th';
  });

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === 'th' ? 'en' : 'th';
      localStorage.setItem('lang', next);
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
