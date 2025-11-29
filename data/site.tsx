import type { SiteData } from "@/lib/types";

export const site: SiteData = {
  business: {
    name: "Peluquería Tina Márquez",
    address: "Carrer Bon Repòs, 1, Bajo, 03590 Altea, Alicante",
    phone: "965 84 22 18",
    email: "info@tinamarquez.com",
    hours: [
      { d: "Lunes", v: "09:30–14:00" },
      { d: "Martes", v: "Cerrado" },
      { d: "Miércoles", v: "09:30–14:00" },
      { d: "Jueves", v: "09:30–19:00" },
      { d: "Viernes", v: "09:30–19:00" },
      { d: "Sábado", v: "09:00–14:00" },
      { d: "Domingo", v: "Cerrado" }
    ],
    seoCities: ["Altea", "Benidorm", "Calpe", "La Nucía", "Albir", "Alfaz del Pi", "Callosa d'en Sarrià"],
    social: {
      instagram: "https://www.instagram.com/salontinamarquez/?hl=en",
      facebook: "https://www.facebook.com/p/Salon-Tina-Márquez-100075938607669",
      whatsapp: "https://wa.me/34965842218"
    }
  },
  hero: {
    title: (
      <>
        Tu cabello, tratado con la <span className="text-[#D4AF37]">excelencia</span> que mereces.
      </>
    ),
    subtitle:
      "Experiencia premium en tratamientos capilares, coloración de alto nivel y asesoría personalizada para mujeres que valoran la calidad."
  },
  services: [
    {
      category: "Color",
      items: [
        { name: "Coloración Premium a medida", desc: "Diagnóstico y tono personalizado con brillo intenso.", price: "Desde 120€", featured: true },
        { name: "Balayage & Babylights", desc: "Transiciones suaves y efecto luz natural.", price: "Desde 150€", featured: true },
        { name: "Mechas Foil Premium", desc: "Iluminación homogénea y control de tono.", price: "Desde 130€" }
      ]
    },
    {
      category: "Tratamientos",
      items: [
        { name: "Keratina Premium", desc: "Anti-frizz de larga duración con acabado sedoso.", price: "Desde 200€", featured: true },
        { name: "Alisado Orgánico", desc: "Control del encrespamiento sin químicos agresivos.", price: "Desde 180€" },
        { name: "Bótox Capilar", desc: "Reparación profunda y sellado de brillo.", price: "Desde 110€" },
        { name: "Ritual Reparador Kérastase", desc: "Diagnóstico + tratamiento personalizado en cabina.", price: "Desde 90€" }
      ]
    },
    {
      category: "Corte & Styling",
      items: [
        { name: "Corte & Peinado Premium", desc: "Asesoría de imagen + acabado profesional.", price: "55–70€" },
        { name: "Peinado de Evento", desc: "Ondas, pulido o volumen según ocasión.", price: "55–90€" }
      ]
    },
    {
      category: "Novias & Eventos",
      items: [
        { name: "Pack Novia Esencial", desc: "Prueba recogido + día B (salón).", price: "280–350€" },
        { name: "Pack Novia Premium", desc: "Prueba + día B a domicilio + maquillaje asociado.", price: "380–450€" }
      ]
    }
  ],
  team: [
    { name: "Tina Márquez", image: "equipo.png", role: "Directora creativa", bio: "Especialista en coloración premium y diagnóstico personalizado. 12+ años de experiencia." },
    { name: "Elena Rivas", image: "equipo.png", role: "Senior Colorist", bio: "Balayage, corrección de color y técnicas freehand." },
    { name: "María López", image: "equipo.png", role: "Stylist & Keratin Expert", bio: "Corte femenino, keratina y alisado orgánico." },
    { name: "Sofía Martín", image: "equipo.png", role: "Bridal & Events", bio: "Recogidos, peinados de evento y novias." }
  ],
  testimonials: [
    { author: "Laura G.", quote: "Resultados impecables y atención exquisita." },
    { author: "Marta R.", quote: "El mejor alisado que me he hecho. Brillo espectacular." },
    { author: "Andrea P.", quote: "Asesoría personalizada y productos de lujo. 10/10." }
  ]
};
