import { useLang } from '../contexts/LanguageContext';
import { tx } from '../data/translations';

function About() {
  const { lang } = useLang();

  const capabilities = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </svg>
      ),
      label: tx.about.capabilities.interactiveInstallation[lang],
      color: 'info',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
      ),
      label: tx.about.capabilities.eventProduction[lang],
      color: 'secondary',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
        </svg>
      ),
      label: tx.about.capabilities.arVr[lang],
      color: 'accent',
    },
  ];

  return (
    <section id="about" className="relative bg-base-200/50 py-20 md:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-linear-to-tr from-accent/6 via-transparent to-info/5" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-xs montserrat-500 tracking-[0.2em] uppercase text-accent mb-3">
            {tx.about.subtitle[lang]}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl montserrat-700 text-base-content">
            {tx.about.titlePrefix[lang]} <span className="text-accent">{tx.about.titleHighlight[lang]}</span>
          </h2>
          <div className="mt-4 h-1 w-16 md:w-20 bg-linear-to-r from-accent to-accent/30 mx-auto rounded-full" />
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {lang === 'th' ? (
            <>
              <p className="text-sm md:text-base lg:text-lg montserrat-400 text-base-content/90 leading-relaxed text-center">
                ในยุคที่ <span className="montserrat-600 text-accent">"ประสบการณ์"</span> คือหัวใจสำคัญของการสื่อสาร{' '}
                <span className="montserrat-600 text-accent">MOTIONSIX STUDIO</span>{' '}
                คือที่ที่ <span className="montserrat-600 text-accent">'ศิลปะแห่งการเล่าเรื่อง'</span> มาบรรจบกับ{' '}
                <span className="montserrat-600 text-accent">'พลังของนวัตกรรม'</span>{' '}
                เราเชื่อว่าเทคโนโลยีคือเครื่องมือที่ดีที่สุดในการสร้างความทรงจำที่น่าประทับใจระหว่างแบรนด์และผู้คน
              </p>
              <p className="text-sm md:text-base lg:text-lg montserrat-300 text-base-content/70 leading-relaxed text-center">
                เราคือทีมที่ประกอบด้วยนักคิดและนักสร้างสรรค์จากแขนงต่างๆ ไม่ว่าจะเป็น
                <span className="montserrat-500"> นักออกแบบ, วิศวกร หรือสถาปนิก</span>
                {' '}ที่ทำงานร่วมกันเพื่อสร้างสรรค์ผลงานที่ไร้รอยต่อ
                เราไม่เพียงแค่สร้าง แต่เราออกแบบ{' '}
                <span className="montserrat-600 text-accent">ประสบการณ์ที่สมจริง (Immersive Experience)</span>{' '}
                ผ่านโซลูชั่นที่หลากหลาย
              </p>
            </>
          ) : (
            <>
              <p className="text-sm md:text-base lg:text-lg montserrat-400 text-base-content/90 leading-relaxed text-center">
                In an era where <span className="montserrat-600 text-accent">"experience"</span> is at the heart of communication,{' '}
                <span className="montserrat-600 text-accent">MOTIONSIX STUDIO</span>{' '}
                is where <span className="montserrat-600 text-accent">'the art of storytelling'</span> meets{' '}
                <span className="montserrat-600 text-accent">'the power of innovation'</span>.{' '}
                We believe technology is the best tool for creating memorable connections between brands and people.
              </p>
              <p className="text-sm md:text-base lg:text-lg montserrat-300 text-base-content/70 leading-relaxed text-center">
                We are a team of thinkers and creators from diverse fields —
                <span className="montserrat-500"> designers, engineers, and architects</span>
                {' '}— working together to craft seamless work.
                We don't just build; we design{' '}
                <span className="montserrat-600 text-accent">Immersive Experiences</span>{' '}
                through diverse solutions.
              </p>
            </>
          )}
        </div>

        {/* Capability cards */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
          {capabilities.map((cap) => (
            <div
              key={cap.label}
              className="group relative rounded-2xl border border-base-content/5 bg-base-100/60 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:border-base-content/10 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-${cap.color}/10 text-${cap.color} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                {cap.icon}
              </div>
              <p className="montserrat-500 text-sm text-base-content">{cap.label}</p>
            </div>
          ))}
        </div>

        {/* Blockquote */}
        <div className="mt-12 md:mt-16 max-w-3xl mx-auto">
          <div className="relative rounded-2xl bg-linear-to-br from-accent/5 to-accent/0 border border-accent/10 p-6 md:p-8">
            <svg
              className="absolute top-4 left-4 w-8 h-8 text-accent/20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>
            <p className="relative text-base md:text-lg lg:text-xl montserrat-500 text-accent leading-relaxed text-center pt-4">
              {tx.about.quote[lang]}
            </p>
          </div>
        </div>

        {/* CTA line */}
        <p className="mt-10 md:mt-12 text-sm md:text-base lg:text-lg montserrat-400 text-center text-base-content/50">
          {tx.about.cta[lang]}
        </p>
      </div>
    </section>
  );
}

export default About;
