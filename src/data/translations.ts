import type { Lang } from '../contexts/LanguageContext';

export type Bilingual = { th: string; en: string };

export const tx = {
  nav: {
    services: { th: 'บริการ', en: 'SERVICES' },
    about: { th: 'เกี่ยวกับเรา', en: 'ABOUT' },
    contact: { th: 'ติดต่อ', en: 'CONTACT' },
  },
  hero: {
    tagline: { th: 'เราทำให้มันเกิดขึ้น', en: 'We make it happen.' },
    sub: { th: 'มาสร้างสิ่งที่น่าทึ่งไปด้วยกัน', en: "Let's build something amazing together." },
    ctaStart: { th: 'เริ่มต้นโปรเจกต์', en: 'Start a project' },
    ctaServices: { th: 'บริการของเรา', en: 'Our services' },
    scroll: { th: 'เลื่อนลง', en: 'Scroll' },
  },
  about: {
    subtitle: { th: 'เกี่ยวกับเรา', en: 'About Us' },
    titlePrefix: { th: 'เราคือ', en: 'WHO WE' },
    titleHighlight: { th: 'ใคร', en: 'ARE' },
    quote: {
      th: 'เพื่อส่งมอบความแปลกใหม่และความประทับใจที่ไม่รู้ลืม',
      en: 'To deliver novelty and impressions that last forever.',
    },
    cta: {
      th: 'มาร่วมมือกับเราเพื่อสร้างมาตรฐานใหม่และกำหนดอนาคตของประสบการณ์ดิจิทัลไปด้วยกัน',
      en: 'Join us to set new standards and define the future of digital experiences together.',
    },
    capabilities: {
      interactiveInstallation: { th: 'Interactive Installation', en: 'Interactive Installation' },
      eventProduction: { th: 'Event Production', en: 'Event Production' },
      arVr: { th: 'AR / VR', en: 'AR / VR' },
    },
  },
  services: {
    subtitle: { th: 'สิ่งที่เราทำ', en: 'What We Do' },
    titlePrefix: { th: 'บริการ', en: 'OUR' },
    titleHighlight: { th: 'ของเรา', en: 'SERVICES' },
    description: {
      th: 'ผสมผสานเทคโนโลยีและความคิดสร้างสรรค์เพื่อสร้างประสบการณ์ที่ไม่เหมือนใคร',
      en: 'Blending technology and creativity to craft one-of-a-kind experiences',
    },
    items: [
      {
        title: 'Immersive Experience',
        description: {
          th: 'สร้างประสบการณ์ที่ดื่มด่ำและน่าประทับใจด้วยเทคโนโลยีล้ำสมัย',
          en: 'Create immersive and memorable experiences with cutting-edge technology',
        },
      },
      {
        title: 'Interactive Media',
        description: {
          th: 'พัฒนาสื่อโต้ตอบที่สร้างสรรค์และมีส่วนร่วม',
          en: 'Develop creative and engaging interactive media',
        },
      },
      {
        title: 'Digital Platform Solutions',
        description: {
          th: 'ออกแบบและพัฒนาแพลตฟอร์มดิจิทัลที่ตอบโจทย์ธุรกิจและกิจกรรม',
          en: 'Design and develop digital platforms tailored for business and events',
        },
      },
    ],
  },
  clients: {
    subtitle: { th: 'เราทำงานร่วมกับ', en: 'We Work With' },
    titlePrefix: { th: 'ลูกค้า', en: 'OUR' },
    titleHighlight: { th: 'ของเรา', en: 'CLIENTS' },
    hint: { th: 'กดที่โลโก้เพื่อดูผลงาน', en: 'Click on a logo to view portfolio' },
  },
  contact: {
    subtitle: { th: 'ติดต่อ', en: 'Contact' },
    titlePrefix: { th: "มาเชื่อมต่อ", en: "LET'S" },
    titleHighlight: { th: 'กัน', en: 'CONNECT' },
    getInTouch: { th: 'ติดต่อเรา', en: 'GET IN TOUCH' },
    followUs: { th: 'ติดตามเรา', en: 'Follow Us' },
  },
  footer: {
    rights: { th: 'สงวนลิขสิทธิ์', en: 'All rights reserved.' },
    services: { th: 'บริการ', en: 'Services' },
    about: { th: 'เกี่ยวกับ', en: 'About' },
    contact: { th: 'ติดต่อ', en: 'Contact' },
  },
  portfolio: {
    comingSoon: { th: 'เร็วๆ นี้', en: 'Coming Soon' },
    comingSoonDesc: {
      th: 'ผลงานกำลังจะถูกเพิ่มเร็วๆ นี้ รอติดตามนะครับ',
      en: 'Portfolio will be added soon. Stay tuned!',
    },
    projects: { th: 'โปรเจกต์', en: 'projects' },
    project: { th: 'โปรเจกต์', en: 'project' },
    close: { th: 'ปิด', en: 'Close' },
  },
} as const;

export function t(bilingual: Bilingual, lang: Lang): string {
  return bilingual[lang];
}
