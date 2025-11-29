import React from "react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import type { ServiceCategory } from "@/lib/types";


const GOLD = "#D4AF37" as const;


type ServicesProps = { data: ServiceCategory[] };


export default function Services({ data }: ServicesProps) {
return (
<section id="servicios" className="py-20">
<Container>
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="font-serif text-3xl md:text-4xl text-white">Servicios destacados</h2>
<div className="mt-2 h-0.5 w-16 bg-[#D4AF37]" />
<p className="text-white/70 mt-2">Tratamientos de alto valor para resultados visibles y duraderos.</p>
</div>
<a href="#reservas"><Button variant="outline" className="hidden md:inline-block">Reservar</Button></a>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">
{data.flatMap(c => c.items.filter(i => i.featured)).slice(0,3).length === 0 ? (
<p className="text-white/70">Pronto añadiremos nuestros servicios.</p>
) : (
data.flatMap(c => c.items.filter(i => i.featured)).slice(0,3).map((s, idx) => (
<Card key={idx}>
<h3 className="font-serif text-2xl text-white">{s.name}</h3>
<p className="text-white/70 mt-3">{s.desc}</p>
<div className="mt-6 flex items-center justify-between">
<span className="text-[#D4AF37] font-medium">{s.price}</span>
<a href="#reservas" className="text-sm underline hover:text-[#D4AF37] text-white">Reservar</a>
</div>
</Card>
))
)}
</div>


<div className="mt-14 space-y-10">
{data.map((cat) => (
<div key={cat.category}>
<h3 className="font-serif text-2xl text-white border-l-4 pl-3" style={{ borderColor: GOLD }}>{cat.category}</h3>
<div className="mt-6 grid md:grid-cols-2 gap-6">
{cat.items.map((s) => (
<Card key={s.name}>
<div className="flex items-start justify-between gap-4">
<div>
<h4 className="text-white text-xl font-serif">{s.name}</h4>
<p className="text-white/70 mt-1">{s.desc}</p>
</div>
<div className="text-sm text-[#D4AF37] whitespace-nowrap">{s.price}</div>
</div>
</Card>
))}
</div>
</div>
))}
</div>
</Container>
</section>
);
}
