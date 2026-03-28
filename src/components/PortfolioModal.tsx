import { useEffect, useCallback, useState, useRef } from 'react';
import type { ClientData } from '../data/portfolios';
import { useLang } from '../contexts/LanguageContext';
import { tx } from '../data/translations';

interface Props {
  client: ClientData;
  onClose: () => void;
}

function getVideoEmbed(url: string): string | null {
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  return null;
}

function ImageGallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const touchStart = useRef<number | null>(null);
  const touchDelta = useRef(0);

  if (images.length === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
    touchDelta.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    touchDelta.current = e.touches[0].clientX - touchStart.current;
  };
  const onTouchEnd = () => {
    const threshold = 50;
    if (touchDelta.current > threshold) prev();
    else if (touchDelta.current < -threshold) next();
    touchStart.current = null;
    touchDelta.current = 0;
  };

  return (
    <div
      className="relative w-full aspect-video rounded-2xl overflow-hidden group/gallery ring-1 ring-base-content/10 touch-pan-y"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-base-300/50 to-base-200/50" />
      <img
        src={images[index]}
        alt={`Portfolio image ${index + 1}`}
        className="relative w-full h-full object-cover select-none pointer-events-none"
        draggable={false}
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          const fallback = e.currentTarget.parentElement!.querySelector('.img-fallback');
          if (fallback) (fallback as HTMLElement).style.display = 'flex';
        }}
      />
      <div className="img-fallback absolute inset-0 items-center justify-center hidden">
        <div className="text-center">
          <svg className="w-10 h-10 mx-auto text-base-content/20 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
          </svg>
          <span className="text-base-content/30 montserrat-300 text-sm">Image not available</span>
        </div>
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-100 md:opacity-0 md:group-hover/gallery:opacity-100 transition-all hover:bg-black/60 hover:scale-110"
            aria-label="Previous image"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-100 md:opacity-0 md:group-hover/gallery:opacity-100 transition-all hover:bg-black/60 hover:scale-110"
            aria-label="Next image"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`rounded-full transition-all duration-300 ${i === index ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function VideoPlayer({ url }: { url: string }) {
  const embedUrl = getVideoEmbed(url);

  if (embedUrl) {
    return (
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden ring-1 ring-base-content/10">
        <iframe
          src={embedUrl}
          title="Video"
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <video
      src={url}
      controls
      className="w-full aspect-video rounded-2xl bg-black ring-1 ring-base-content/10"
      preload="metadata"
    >
      <track kind="captions" />
    </video>
  );
}

export default function PortfolioModal({ client, onClose }: Props) {
  const { lang } = useLang();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  const hasPortfolio = client.portfolio.length > 0 &&
    client.portfolio.some(p => p.images.length > 0 || (p.videos && p.videos.length > 0));

  const clientName = client.name[lang];
  const projectCount = client.portfolio.length;
  const projectLabel = projectCount === 1 ? tx.portfolio.project[lang] : tx.portfolio.projects[lang];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${clientName} portfolio`}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]" aria-hidden="true" />

      {/* Modal content */}
      <div
        className="relative w-full max-w-3xl mx-4 md:mx-8 my-8 md:my-12 animate-[modalIn_0.3s_cubic-bezier(0.16,1,0.3,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-base-100 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-base-content/10">

          {/* Hero Header */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ background: `linear-gradient(135deg, ${client.color}, transparent)` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-transparent to-transparent" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-base-100/80 backdrop-blur-sm ring-1 ring-base-content/10 flex items-center justify-center text-base-content/60 hover:text-base-content hover:bg-base-100 transition-all hover:scale-110 shadow-lg"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative px-6 md:px-8 pt-8 pb-6 flex items-end gap-5">
              <div className="w-18 h-18 md:w-22 md:h-22 shrink-0 client-card rounded-2xl shadow-xl ring-1 ring-base-content/10 flex items-center justify-center p-3">
                <img
                  src={client.logo}
                  alt={`${clientName} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="pb-1">
                <h3 className="text-2xl md:text-3xl montserrat-700 text-base-content leading-tight">{clientName}</h3>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="inline-flex items-center gap-1 text-xs montserrat-500 px-2.5 py-1 rounded-full" style={{ color: client.color, backgroundColor: `${client.color}15` }}>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                    Portfolio
                  </span>
                  {hasPortfolio && (
                    <span className="text-xs montserrat-400 text-base-content/40">
                      {projectCount} {projectLabel}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="px-6 md:px-8 py-6 md:py-8 max-h-[65vh] overflow-y-auto">
            {!hasPortfolio ? (
              <div className="text-center py-16">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-info/20 to-accent/20 animate-pulse" />
                  <div className="absolute inset-2 rounded-full bg-base-100 flex items-center justify-center">
                    <svg className="w-10 h-10 text-base-content/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                    </svg>
                  </div>
                </div>
                <p className="text-lg text-base-content/60 montserrat-500">{tx.portfolio.comingSoon[lang]}</p>
                <p className="text-sm text-base-content/30 montserrat-300 mt-2 max-w-xs mx-auto">
                  {tx.portfolio.comingSoonDesc[lang]}
                </p>
              </div>
            ) : (
              <div className="space-y-10">
                {client.portfolio.map((item, idx) => (
                  <div key={idx}>
                    {/* Project header */}
                    <div className="flex items-start gap-3 mb-4">
                      {client.portfolio.length > 1 && (
                        <span className="shrink-0 w-7 h-7 rounded-lg text-white text-xs montserrat-600 flex items-center justify-center mt-0.5" style={{ backgroundColor: client.color }}>
                          {idx + 1}
                        </span>
                      )}
                      <div>
                        <h4 className="text-lg md:text-xl montserrat-600 text-base-content leading-snug">{item.title[lang]}</h4>
                        <p className="text-sm md:text-base text-base-content/60 montserrat-300 leading-relaxed mt-2 whitespace-pre-line">
                          {item.description[lang]}
                        </p>
                      </div>
                    </div>

                    {/* Media */}
                    <div className="space-y-4 mt-5">
                      {item.images.length > 0 && <ImageGallery images={item.images} />}

                      {item.videos && item.videos.length > 0 && (
                        <div className="space-y-4">
                          {item.videos.map((video, vi) => (
                            <VideoPlayer key={vi} url={video} />
                          ))}
                        </div>
                      )}
                    </div>

                    {idx < client.portfolio.length - 1 && (
                      <div className="flex items-center gap-4 mt-10">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-base-300 to-transparent" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 md:px-8 py-4 border-t border-base-content/5 bg-base-200/30 flex items-center justify-between">
            <p className="text-sm montserrat-500" style={{ color: `${client.color}90` }}>
              {clientName} &times; MotionSix Studio
            </p>
            <button
              onClick={onClose}
              className="btn btn-sm btn-ghost montserrat-400 gap-1 text-base-content/60 hover:text-base-content"
            >
              {tx.portfolio.close[lang]}
              <kbd className="hidden md:inline-flex kbd kbd-xs text-base-content/30">Esc</kbd>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
