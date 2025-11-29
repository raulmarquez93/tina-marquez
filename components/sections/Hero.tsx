import React from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";


type HeroProps = { title: React.ReactNode; subtitle: string; onReserve: () => void };


export default function Hero({ title, subtitle, onReserve }: HeroProps) {
return (
<section id="home" className="relative overflow-hidden">
<Container className="py-24 md:py-36 grid md:grid-cols-2 gap-10 items-center">
<div>
<h1 className="font-serif text-4xl md:text-6xl leading-tight">{title}</h1>
<p className="mt-6 text-white/80 max-w-xl">{subtitle}</p>
<div className="mt-8 flex items-center gap-4">
<Button onClick={onReserve}>Reservar cita</Button>
<a href="#servicios"><Button variant="outline">Ver servicios</Button></a>
</div>
</div>
<div className="relative rounded-2xl overflow-hidden h-80 md:h-[36rem]">
  <img
    src="Hero.png"
    alt="Hero"
    className="w-full h-full object-cover object-[center_2%]" // <- sube el encuadre
    loading="eager"
  />
</div>


</Container>
</section>
);
}