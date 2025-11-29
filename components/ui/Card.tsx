import React from "react";


export default function Card({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
return (
<div className={`rounded-2xl border border-white/10 hover:border-[#D4AF37] p-6 bg-black/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition ${className}`}>
{children}
</div>
);
}