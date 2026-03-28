function Contact() {
  return (
    <section id="contact" className="relative bg-base-200/50 text-base-content py-20 md:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-secondary/20 to-transparent" />
        <div className="absolute -top-40 right-0 w-96 h-96 bg-secondary/8 rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 left-0 w-80 h-80 bg-info/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 md:px-8 z-10">
        {/* Logo */}
        <a href="#" className="flex justify-center items-center mb-8" aria-label="Back to top">
          <img
            src="/Logo/Logo_W.svg"
            alt="MOTIONSIX STUDIO logo"
            loading="lazy"
            decoding="async"
            className="logo-dark-only h-12 md:h-16 w-auto hover:scale-105 transition-transform"
          />
          <img
            src="/Logo/Logo_B.svg"
            alt="MOTIONSIX STUDIO logo"
            loading="lazy"
            decoding="async"
            className="logo-light-only h-12 md:h-16 w-auto hover:scale-105 transition-transform"
          />
        </a>

        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-xs montserrat-500 tracking-[0.2em] uppercase text-secondary mb-3">Contact</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl montserrat-700 text-base-content">
            LET'S <span className="text-secondary">CONNECT</span>
          </h2>
          <div className="mt-4 h-1 w-16 md:w-20 bg-linear-to-r from-secondary to-secondary/30 mx-auto rounded-full" />
        </div>

        {/* Contact card */}
        <div className="relative rounded-2xl border border-base-content/5 bg-base-100/60 backdrop-blur-sm p-6 md:p-10 shadow-xl shadow-black/5">
          {/* Inner gradient glow */}
          <div className="absolute -top-px left-8 right-8 h-px bg-linear-to-r from-transparent via-secondary/40 to-transparent" />

          <h3 className="text-lg md:text-xl montserrat-600 text-secondary mb-8 text-center">
            GET IN TOUCH
          </h3>

          <div className="space-y-2 md:space-y-3 montserrat-300 text-sm md:text-base max-w-lg mx-auto">
            {/* Email */}
            <a
              href="mailto:motionsixstudio@gmail.com"
              className="flex items-center gap-4 p-3 md:p-4 rounded-xl hover:bg-base-content/5 transition-all duration-300 group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors shrink-0">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <span className="group-hover:text-secondary transition-colors break-all">
                motionsixstudio@gmail.com
              </span>
            </a>

            {/* Phone 1 */}
            <a
              href="tel:+66803639043"
              className="flex items-center gap-4 p-3 md:p-4 rounded-xl hover:bg-base-content/5 transition-all duration-300 group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors shrink-0">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <span className="group-hover:text-secondary transition-colors">
                (+66)80-363-9043 <span className="montserrat-400 text-base-content/40 text-xs md:text-sm">(Strange)</span>
              </span>
            </a>

            {/* Phone 2 */}
            <a
              href="tel:+66926344491"
              className="flex items-center gap-4 p-3 md:p-4 rounded-xl hover:bg-base-content/5 transition-all duration-300 group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors shrink-0">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <span className="group-hover:text-secondary transition-colors">
                (+66)92-634-4491 <span className="montserrat-400 text-base-content/40 text-xs md:text-sm">(M)</span>
              </span>
            </a>

            {/* Phone 3 */}
            <a
              href="tel:+66989653536"
              className="flex items-center gap-4 p-3 md:p-4 rounded-xl hover:bg-base-content/5 transition-all duration-300 group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors shrink-0">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <span className="group-hover:text-secondary transition-colors">
                (+66)98-965-3536 <span className="montserrat-400 text-base-content/40 text-xs md:text-sm">(Yorch)</span>
              </span>
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 pt-6 border-t border-base-content/5">
            <p className="text-center text-xs text-base-content/40 mb-5 montserrat-400 tracking-wider uppercase">
              Follow Us
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com/people/Motionsix-Studio/61556910114673/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-xl bg-base-content/5 hover:bg-linear-to-br hover:from-secondary hover:to-secondary/70 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-secondary/20"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-base-content/50 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/motionsixstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-xl bg-base-content/5 hover:bg-linear-to-br hover:from-secondary hover:to-secondary/70 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-secondary/20"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-base-content/50 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
