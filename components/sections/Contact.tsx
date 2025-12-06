import React from "react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Phone, Mail, Instagram, Facebook, MapPin } from "lucide-react";
import type { Business } from "@/lib/types";


const GOLD = "#D4AF37" as const;


export default function Contact({ business }: { business: Business }) {
return (
<section id="contacto" className="py-20 bg-black/40 border-t border-white/10">
<Container>
<div className="grid md:grid-cols-2 gap-10 items-start">
<div>
<h2 className="font-serif text-3xl md:text-4xl text-white">Contacto</h2>
<div className="mt-2 h-0.5 w-16 bg-[#D4AF37]" />
<p className="text-white/70 mt-2">Estamos en {business.address}.</p>
<div className="mt-6 space-y-2 text-white/80">
<p className="flex items-center gap-2"><Phone size={16} /> <a className="underline hover:text-[#D4AF37]" href={`tel:${business.phone.replace(/\s+/g, "")}`}>{business.phone}</a></p>
<p className="flex items-center gap-2"><Instagram size={16} /> <a className="underline hover:text-[#D4AF37]" href={business.social.instagram} target="_blank" rel="noreferrer">Instagram</a></p>
<p className="flex items-center gap-2"><Facebook size={16} /> <a className="underline hover:text-[#D4AF37]" href={business.social.facebook} target="_blank" rel="noreferrer">Facebook</a></p>
<p className="flex items-center gap-2"><MapPin size={16} /> <a className="underline hover:text-[#D4AF37]" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`} target="_blank" rel="noreferrer">Cómo llegar</a></p>
</div>
<div className="mt-8 rounded-2xl border border-white/10 overflow-hidden">
  <iframe
    title="Mapa — Peluquería Tina Márquez"
    src={`https://www.google.com/maps?q=${encodeURIComponent(business.address)}&output=embed`}
    className="w-full h-56 md:h-80"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>


</div>
<Card>
<h3 className="font-serif text-2xl text-white">Escríbenos</h3>
<div className="mt-4 space-y-3">
<input className="w-full bg-black/40 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2" style={{ outlineColor: GOLD }} placeholder="Tu nombre" />
<input className="w-full bg-black/40 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2" style={{ outlineColor: GOLD }} placeholder="Email" />
<textarea rows={4} className="w-full bg-black/40 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2" style={{ outlineColor: GOLD }} placeholder="Mensaje" />
<Button className="w-full">Enviar mensaje</Button>
</div>
<p className="text-xs text-white/60 mt-3">Al enviar aceptas nuestra <a href="#" className="underline hover:text-[#D4AF37]">política de privacidad</a>.</p>
</Card>
</div>
</Container>
</section>
);
}