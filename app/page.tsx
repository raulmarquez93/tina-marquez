"use client";
import React from "react";
import { site } from "@/data/site";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import BookingPlaceholder from "@/components/sections/BookingPlaceholder";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";



export default function Page() {
const scrollToBooking = () => {
document.getElementById("reservas")?.scrollIntoView({ behavior: "smooth" });
};

const logos: { alt: string; src: string }[] = [
  { alt: "L'Oréal", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzzHMPfAxEKywXeaB2bxS7mJhuQ2D4CD-fbQ&s" },
  { alt: "Kérastase", src: "https://uk.lorealaccess.com/assets/images/brands/logos/kerastase-logo.webp" },
  { alt: "Wella", src: "https://www.mephistohandwerkstatt.de/wp-content/uploads/2016/07/wella-logo.png " },
  { alt: "Olaplex", src: "https://lesalon.easypara.fr/media/easysoft/home/manufacturer/olaplex-white_1.png" },
  { alt: "Schwarzkopf", src: "https://www.jeancoutu.com/globalassets/magasiner/marques/schwarzkopf/schwarzkopf-logo-450.png" },
];
return (
<div className="font-sans">
<Navbar onReserve={scrollToBooking} />
<Hero title={site.hero.title} subtitle={site.hero.subtitle} onReserve={scrollToBooking} />
<section className="py-10 border-y border-white/10 bg-black/40">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center text-center">
      {logos.map((l) => (
        <img
          key={l.alt}
          src={l.src}
          alt={l.alt}
          className="mx-auto h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition transform hover:scale-[1.02]"
          loading="lazy"
        />
      ))}
    </div>
  </div>
</section>





<Services data={site.services} />
<Gallery />
<BookingPlaceholder phone={site.business.phone} whatsapp={site.business.social.whatsapp} />
<Team list={site.team} />
<Testimonials items={site.testimonials} />
<Contact business={site.business} />
<Footer business={site.business} />
</div>
);
}