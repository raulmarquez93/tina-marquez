import React from "react";
import Container from "@/components/ui/Container";
import type { GalleryItem } from "@/lib/types"; // Tipo de cada imagen

// Ahora Gallery recibe la lista de imágenes como prop
export default function Gallery({ list }: { list: GalleryItem[] }) {
  return (
    <section id="galeria" className="py-20 bg-black/40 border-t border-white/10">
      <Container>
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Resultados de nuestros trabajos
          </h2>
          <div className="mt-2 h-0.5 w-16 bg-[#D4AF37] mx-auto" />
          <p className="text-white/70 mt-2">
            Inspiración real: clientas que confiaron en nuestra técnica y experiencia.
          </p>
        </div>

        {/* Galería */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {list.map((item, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-white/10">
              <img
                src={item.src}
                alt={item.alt || `Resultado ${i + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
