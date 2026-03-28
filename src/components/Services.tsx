import { useState } from 'react';
import { useLang } from '../contexts/LanguageContext';
import { tx } from '../data/translations';

const servicesMeta = [
  {
    image: '/services/immersive.jpg',
    gradient: 'from-info/80 to-info/20',
    accent: 'info',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
  },
  {
    image: '/services/interactive.jpg',
    gradient: 'from-accent/80 to-accent/20',
    accent: 'accent',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
      </svg>
    ),
  },
  {
    image: '/services/digital.jpg',
    gradient: 'from-secondary/80 to-secondary/20',
    accent: 'secondary',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
      </svg>
    ),
  },
] as const;

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  gradient: string;
  accent: string;
  icon: React.ReactNode;
}

function ServiceCard({ title, description, image, gradient, accent, icon }: ServiceCardProps) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="group relative rounded-2xl overflow-hidden h-72 md:h-80 cursor-pointer ring-1 ring-base-content/5 transition-all duration-500 hover:ring-base-content/10 hover:shadow-2xl hover:-translate-y-1">
      {!imgFailed ? (
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <div className={`absolute inset-0 bg-linear-to-br ${gradient}`}>
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-white/30">
            {icon}
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500" />
      <div className="relative h-full flex flex-col justify-end p-5 md:p-7">
        <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm text-white mb-3 transition-transform duration-500 group-hover:scale-110`}>
          {icon}
        </div>
        <h3 className="text-lg md:text-2xl montserrat-600 text-white mb-2 transition-transform duration-500 group-hover:translate-y-[-4px]">
          {title}
        </h3>
        <p className="text-xs md:text-sm montserrat-300 text-white/70 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:translate-y-3 md:group-hover:translate-y-0 transition-all duration-500 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}

function Services() {
  const { lang } = useLang();

  return (
    <section id="services" className="relative bg-base-100 py-20 md:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-info/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-secondary/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-xs montserrat-500 tracking-[0.2em] uppercase text-info mb-3">
            {tx.services.subtitle[lang]}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl montserrat-700 text-base-content">
            {tx.services.titlePrefix[lang]} <span className="text-info">{tx.services.titleHighlight[lang]}</span>
          </h2>
          <div className="mt-4 h-1 w-16 md:w-20 bg-linear-to-r from-info to-info/30 mx-auto rounded-full" />
          <p className="mt-6 text-sm md:text-base text-base-content/50 montserrat-300 max-w-2xl mx-auto">
            {tx.services.description[lang]}
          </p>
        </div>

        <div className="grid gap-5 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tx.services.items.map((item, i) => (
            <ServiceCard
              key={item.title}
              title={item.title}
              description={item.description[lang]}
              image={servicesMeta[i].image}
              gradient={servicesMeta[i].gradient}
              accent={servicesMeta[i].accent}
              icon={servicesMeta[i].icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
