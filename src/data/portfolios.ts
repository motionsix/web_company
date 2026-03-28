export interface BilingualText {
  th: string;
  en: string;
}

export interface PortfolioItem {
  title: BilingualText;
  description: BilingualText;
  images: string[];
  videos?: string[];
}

export interface ClientData {
  name: BilingualText;
  logo: string;
  color: string;
  portfolio: PortfolioItem[];
}

export const clients: ClientData[] = [
  {
    name: { th: 'GISTDA', en: 'GISTDA' },
    logo: "/clients/Gistda.svg",
    color: "#1B3D6F",
    portfolio: [],
  },
  {
    name: { th: 'Makro', en: 'Makro' },
    logo: "/clients/Makro.png",
    color: "#D71920",
    portfolio: [
      {
        title: {
          th: 'Makro ตลาดนัดโชห่วย 16 รวมมิตร',
          en: 'Makro Wholesale Market 16 — Reunion',
        },
        description: {
          th: 'พัฒนาระบบลงทะเบียนผู้เข้าร่วมงาน และ Interactive Display ภายในงาน Makro ตลาดนัดโชห่วย 16 รวมมิตร',
          en: 'Developed an attendee registration system and Interactive Display for the Makro Wholesale Market 16 — Reunion event.',
        },
        images: ["/portfolio/makro_02/01.webp", "/portfolio/makro_02/02.webp", "/portfolio/makro_02/03.webp", "/portfolio/makro_02/04.webp"],
        videos: [],
      },
      {
        title: {
          th: 'Makro โชห่วยออนทัวร์รวมมิตร 2025 ครั้งที่ 16',
          en: 'Makro Wholesale On Tour — Reunion 2025 (Vol. 16)',
        },
        description: {
          th: 'พัฒนา Interactive Mini Game บนเครื่อง POS ภายในงาน Makro โชห่วย สร้างประสบการณ์แปลกใหม่ที่ดึงดูดผู้ร่วมงานให้มีส่วนร่วมกับแบรนด์',
          en: 'Developed an Interactive Mini Game on POS devices for the Makro Wholesale event, creating a novel experience that engaged attendees with the brand.',
        },
        images: ["/portfolio/makro_01/01.webp", "/portfolio/makro_01/02.webp", "/portfolio/makro_01/03.webp", "/portfolio/makro_01/04.webp", "/portfolio/makro_01/05.webp"],
        videos: [],
      }
    ],
  },
  {
    name: { th: 'CPF', en: 'CPF' },
    logo: "/clients/CPF.png",
    color: "#1B7D3A",
    portfolio: [
      {
        title: {
          th: 'CPF SX Sustainability Expo 2025 Booth',
          en: 'CPF SX Sustainability Expo 2025 Booth',
        },
        description: {
          th: 'พัฒนา Interactive Exhibition และ ระบบ POS ให้ความรู้สินค้าของ CPF สำหรับงาน CPF SX Sustainability Expo 2025 Booth',
          en: 'Developed an Interactive Exhibition and POS system to educate visitors about CPF products for the CPF SX Sustainability Expo 2025 Booth.',
        },
        images: ["/portfolio/cpf_01/01.webp", "/portfolio/cpf_01/02.webp", "/portfolio/cpf_01/03.webp", "/portfolio/cpf_01/04.webp", "/portfolio/cpf_01/05.webp", "/portfolio/cpf_01/06.webp", "/portfolio/cpf_01/07.webp", "/portfolio/cpf_01/08.webp", "/portfolio/cpf_01/09.webp"],
        videos: [],
      },
    ],
  },
  {
    name: { th: 'Maybelline', en: 'Maybelline' },
    logo: "/clients/Maybelline.png",
    color: "#1A1A1A",
    portfolio: [],
  },
  {
    name: { th: 'ThaiBev', en: 'ThaiBev' },
    logo: "/clients/ThaiBev.png",
    color: "#006B3F",
    portfolio: [],
  },
  {
    name: { th: 'TCP', en: 'TCP' },
    logo: "/clients/TCP.png",
    color: "#1E3A8A",
    portfolio: [],
  },
  {
    name: { th: 'EGAT', en: 'EGAT' },
    logo: "/clients/EGAT.png",
    color: "#1D4ED8",
    portfolio: [
      {
        title: {
          th: 'EGAT Learning Center',
          en: 'EGAT Learning Center',
        },
        description: {
          th: 'ออกแบบ Interactive Exhibition สำหรับศูนย์เรียนรู้พลังงาน พร้อมระบบ Touch Screen และ AR Experience',
          en: 'Designed an Interactive Exhibition for the energy learning center, featuring Touch Screen and AR Experience systems.',
        },
        images: ["/portfolio/egat/1.jpg"],
        videos: [],
      }
    ],
  },
  {
    name: { th: 'TCC', en: 'TCC' },
    logo: "/clients/TCC.png",
    color: "#B8860B",
    portfolio: [],
  },
  {
    name: { th: 'คณะแพทยศาสตร์ศิริราชพยาบาล', en: 'Faculty of Medicine Siriraj Hospital' },
    logo: "/clients/MU.png",
    color: "#1E3A5F",
    portfolio: [],
  },
  {
    name: { th: 'Central Pattana', en: 'Central Pattana' },
    logo: "/clients/CentralP.png",
    color: "#8B6914",
    portfolio: [],
  },
  {
    name: { th: 'The Mall', en: 'The Mall' },
    logo: "/clients/TheMall.png",
    color: "#C41230",
    portfolio: [],
  },
  {
    name: { th: 'Grab', en: 'Grab' },
    logo: "/clients/Grab.png",
    color: "#00B14F",
    portfolio: [],
  },
];
