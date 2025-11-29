import React from "react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import type { Testimonial } from "@/lib/types";


export default function Testimonials({ items }: { items: Testimonial[] }) {
return (
<section className="py-20">
<Container>
<h2 className="font-serif text-3xl md:text-4xl text-white">Lo que dicen nuestras clientas</h2>
<div className="mt-2 h-0.5 w-16 bg-[#D4AF37]" />
<div className="mt-10 grid md:grid-cols-3 gap-6">
{items.map((t, i) => (
<Card key={i}>
<blockquote className="text-white/80">“{t.quote}”</blockquote>
<figcaption className="mt-4 text-[#D4AF37]">— {t.author}</figcaption>
</Card>
))}
</div>
</Container>
</section>
);
}