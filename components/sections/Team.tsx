import React from "react";
import Container from "@/components/ui/Container";
import type { TeamMember } from "@/lib/types";

export default function Team({ list }: { list: TeamMember[] }) {
  return (
    <section id="equipo" className="py-20 bg-black/40 border-t border-white/10">
      <Container>
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-white">Nuestro equipo</h2>
          <div className="mt-2 h-0.5 w-16 bg-[#D4AF37] mx-auto" />
          <p className="text-white/80 mt-4">
            Más de 10 años creando experiencias de belleza para mujeres que valoran la excelencia. 
            Cada especialista aporta su toque único para lograr resultados impecables.
          </p>
        </div>

        {/* Equipo */}
        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {list.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center bg-black/30 border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37] transition"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-[#D4AF37]/40 mb-5">
                <img
                  src={member.image || "https://via.placeholder.com/300x300?text=Stylist"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-white">{member.name}</h3>
              <p className="text-[#D4AF37] font-medium mt-1">{member.role}</p>
              <p className="text-white/70 text-sm mt-3">{member.bio}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
