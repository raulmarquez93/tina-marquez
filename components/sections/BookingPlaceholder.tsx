import React from "react";
import Container from "@/components/ui/Container";
import { Phone } from "lucide-react";
import  Button  from "@/components/ui/Button";
type Props = { phone: string; whatsapp: string };


export default function BookingPlaceholder({ phone }: Props) {
return (
<section id="reservas" className="py-20">
<Container>
<div className="grid  gap-10 ">
<div>
<h2 className="font-serif text-3xl md:text-4xl text-white">Reserva tu experiencia</h2>
<div className="mt-2 h-0.5 w-16 bg-[#D4AF37]" />
<p className="text-white/70 mt-2">Muy pronto activaremos la reserva online. Mientras tanto, puedes reservar por teléfono o WhatsApp.</p>
<ul className="mt-6 space-y-3 text-white/80">
<li>• Atención personalizada</li>
<li>• Marcas de alta gama</li>
<li>• Resultados visibles desde la primera visita</li>
</ul>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a href={`tel:${phone.replace(/\s+/g, "")}`}>
<Button className="flex items-center gap-2"><Phone size={16} /> Llamar</Button>
</a>

</div>
</div>



</div>
</Container>
</section>
);
}