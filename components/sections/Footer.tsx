import React from "react";
import Container from "@/components/ui/Container";
import { Clock } from "lucide-react";
import type { Business } from "@/lib/types";


export default function Footer({ business }: { business: Business }) {
return (
<footer className="border-t border-white/10 bg-black/60 text-white">
<Container className="py-10 grid md:grid-cols-4 gap-8 text-sm">
<div>
<div className="font-serif text-xl">Tina <span className="text-[#D4AF37]">Márquez</span></div>
<p className="text-white/60 mt-3">Peluquería premium para mujeres en Altea. Resultados profesionales y experiencia exclusiva.</p>
</div>
<div>
<h4 className="font-semibold mb-3 text-white/80">Secciones</h4>
<ul className="space-y-2">
<li><a className="hover:text-[#D4AF37]" href="#servicios">Servicios</a></li>
<li><a className="hover:text-[#D4AF37]" href="#galeria">Galería</a></li>
<li><a className="hover:text-[#D4AF37]" href="#reservas">Reservas</a></li>
<li><a className="hover:text-[#D4AF37]" href="#contacto">Contacto</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-3 text-white/80">Contacto</h4>
<ul className="space-y-2">
<li>{business.address}</li>
<li>{business.phone}</li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-3 text-white/80">Horario</h4>
<ul className="space-y-1">
{business.hours.map((h) => (
<li key={h.d} className="flex items-center gap-2"><Clock size={14} /> {h.d}: {h.v}</li>
))}
</ul>
</div>
</Container>
<div className="border-t border-white/10 py-6 text-center text-xs text-white/60">© {new Date().getFullYear()} Tina Márquez. Todos los derechos reservados.</div>
</footer>
);
}