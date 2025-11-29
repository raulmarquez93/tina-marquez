"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";


const GOLD = "#D4AF37" as const;


type NavbarProps = { onReserve: () => void };


export default function Navbar({ onReserve }: NavbarProps) {
const [open, setOpen] = useState(false);
const links = [
{ href: "#servicios", label: "Servicios" },
{ href: "#galeria", label: "Galería" },
{ href: "#reservas", label: "Reservas" },
{ href: "#equipo", label: "Nosotras" },
{ href: "#contacto", label: "Contacto" }
];
return (
<header className="sticky top-0 z-50 backdrop-blur bg-black/50 border-b border-white/10">
<div className="absolute inset-x-0 bottom-0 h-[1px]" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
<Container className="py-4 flex items-center justify-between">
<a href="#home" className="font-serif text-2xl tracking-wider text-white">
Tina <span className="text-[#D4AF37]">Márquez</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-white">
{links.map((l) => (
<a key={l.href} href={l.href} className="hover:text-[#D4AF37]">{l.label}</a>
))}
</nav>
<div className="hidden md:block">
<Button onClick={onReserve}>Reserva ahora</Button>
</div>
<button aria-label="Abrir menú" className="md:hidden p-2 rounded border border-white/20 text-white" onClick={() => setOpen(!open)}>
<Menu size={18} />
</button>
</Container>
{open && (
<nav className="md:hidden border-t border-white/10 bg-black/70">
<div className="px-4 py-3 flex flex-col gap-3 text-white">
{links.map((l) => (
<a key={l.href} href={l.href} className="hover:text-[#D4AF37]" onClick={() => setOpen(false)}>{l.label}</a>
))}
<Button onClick={() => { setOpen(false); onReserve(); }} className="mt-2">Reserva ahora</Button>
</div>
</nav>
)}
</header>
);
}