export type ServiceItem = { name: string; desc: string; price: string; featured?: boolean };
export type ServiceCategory = { category: string; items: ServiceItem[] };
export type TeamMember = { name: string; role: string; bio: string;  image?: string;};
export type Testimonial = { author: string; quote: string };
export type GalleryItem = { src: string; alt: string };
export type Business = {
  name: string;
  address: string;
  phone: string;
  hours: { d: string; v: string }[];
  seoCities: string[];
  social: { instagram: string; facebook: string; whatsapp: string };
};

export type SiteData = {
  business: Business;
  hero: { title: React.ReactNode; subtitle: string }; // ← JSX aquí
  services: ServiceCategory[];
  team: TeamMember[];
  galeria: { src: string; alt: string }[];
  testimonials: Testimonial[];
};
