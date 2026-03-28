export interface PortfolioItem {
  title: string;
  description: string;
  images: string[];
  videos?: string[];
}

export interface ClientData {
  name: string;
  logo: string;
  color: string;
  portfolio: PortfolioItem[];
}

export const clients: ClientData[] = [
  {
    name: "GISTDA",
    logo: "/clients/Gistda.svg",
    color: "#1B3D6F",
    portfolio: [],
  },
  {
    name: "Makro",
    logo: "/clients/Makro.png",
    color: "#D71920",
    portfolio: [
      {
        title: "Makro ตลาดนัดโชห่วย 16 รวมมิตร",
        description: "พัฒนาระบบลงทะเบียนผู้เข้าร่วมงาน และ Interactive Display ภายในงาน Makro ตลาดนัดโชห่วย 16 รวมมิตร",
        images: ["/portfolio/makro_02/01.webp", "/portfolio/makro_02/02.webp", "/portfolio/makro_02/03.webp", "/portfolio/makro_02/04.webp"],
        videos: [],
      },
      {
        title: "Makro โชห่วยออนทัวร์รวมมิตร 2025 ครั้งที่ 16",
        description: "พัฒนา Interactive Mini Game บนเครื่อง POS ภายในงาน Makro โชห่วย สร้างประสบการณ์แปลกใหม่ที่ดึงดูดผู้ร่วมงานให้มีส่วนร่วมกับแบรนด์",
        images: ["/portfolio/makro_01/01.webp", "/portfolio/makro_01/02.webp", "/portfolio/makro_01/03.webp", "/portfolio/makro_01/04.webp", "/portfolio/makro_01/05.webp"],
        videos: [],
      }
    ],
  },{
    name: "CPF",
    logo: "/clients/CPF.png",
    color: "#1B7D3A",
    portfolio: [
      {
        title: "CPF SX Sustainability Expo 2026 Booth",
        description: "พัฒนา Interactive Exhibition และ ระบบ POS ให้ความรู้สินค้าของ CPF สำหรับงาน CPF SX Sustainability Expo 2026 Booth",
        images: ["/portfolio/cpf_01/01.webp", "/portfolio/cpf_01/02.webp", "/portfolio/cpf_01/03.webp", "/portfolio/cpf_01/04.webp", "/portfolio/cpf_01/05.webp", "/portfolio/cpf_01/06.webp", "/portfolio/cpf_01/07.webp", "/portfolio/cpf_01/08.webp"],
        videos: [],
      },
    ],
  },
  {
    name: "Maybelline",
    logo: "/clients/Maybelline.png",
    color: "#1A1A1A",
    portfolio: [],
  },
  {
    name: "ThaiBev",
    logo: "/clients/ThaiBev.png",
    color: "#006B3F",
    portfolio: [],
  },
  {
    name: "TCP",
    logo: "/clients/TCP.png",
    color: "#1E3A8A",
    portfolio: [],
  },
  {
    name: "EGAT",
    logo: "/clients/EGAT.png",
    color: "#1D4ED8",
    portfolio: [
      {
        title: "EGAT Learning Center",
        description: "ออกแบบ Interactive Exhibition สำหรับศูนย์เรียนรู้พลังงาน พร้อมระบบ Touch Screen และ AR Experience",
        images: ["/portfolio/egat/1.jpg"],
        videos: [],
      }
    ],
  },
  {
    name: "TCC",
    logo: "/clients/TCC.png",
    color: "#B8860B",
    portfolio: [],
  },
  {
    name: "คณะแพทยศาสตร์ศิริราชพยาบาล",
    logo: "/clients/MU.png",
    color: "#1E3A5F",
    portfolio: [],
  },
  {
    name: "Central Pattana",
    logo: "/clients/CentralP.png",
    color: "#8B6914",
    portfolio: [],
  },
  {
    name: "The Mall",
    logo: "/clients/TheMall.png",
    color: "#C41230",
    portfolio: [],
  },
  {
    name: "Grab",
    logo: "/clients/Grab.png",
    color: "#00B14F",
    portfolio: [],
  },
];
