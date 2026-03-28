import { useState } from 'react';
import { clients } from '../data/portfolios';
import type { ClientData } from '../data/portfolios';
import PortfolioModal from './PortfolioModal';
import { useLang } from '../contexts/LanguageContext';
import { tx } from '../data/translations';

function Clients() {
  const [selectedClient, setSelectedClient] = useState<ClientData | null>(null);
  const { lang } = useLang();

  return (
    <section className="relative bg-base-200/50 py-20 md:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-accent/4 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-xs montserrat-500 tracking-[0.2em] uppercase text-accent mb-3">
            {tx.clients.subtitle[lang]}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl montserrat-700 text-base-content">
            {tx.clients.titlePrefix[lang]} <span className="text-accent">{tx.clients.titleHighlight[lang]}</span>
          </h2>
          <div className="mt-4 h-1 w-16 md:w-20 bg-linear-to-r from-accent to-accent/30 mx-auto rounded-full" />
        </div>

        {/* Client grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 md:gap-5 max-w-fit mx-auto">
            {clients.map((client) => (
              <button
                key={client.name.en}
                type="button"
                onClick={() => setSelectedClient(client)}
                className="group relative aspect-square client-card rounded-2xl p-3 md:p-4 flex items-center justify-center border border-base-content/8 transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1.5 hover:scale-105 cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`${client.name[lang]} logo`}
                    loading="lazy"
                    decoding="async"
                    className="max-w-full max-h-full object-contain transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<span class="text-xs text-base-content/50 montserrat-400 text-center">${client.name[lang]}</span>`;
                    }}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Hint text */}
        <div className="mt-10 md:mt-12 text-center">
          <p className="inline-flex items-center gap-2 text-base-content/40 montserrat-300 text-xs md:text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
            </svg>
            {tx.clients.hint[lang]}
          </p>
        </div>
      </div>

      {selectedClient && (
        <PortfolioModal
          client={selectedClient}
          onClose={() => setSelectedClient(null)}
        />
      )}
    </section>
  );
}

export default Clients;
