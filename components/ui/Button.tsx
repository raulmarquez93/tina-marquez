"use client";
import React from "react";


const GOLD = "#D4AF37" as const;


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
children?: React.ReactNode;
variant?: "gold" | "outline" | "ghost";
className?: string;
};


export default function Button({ children, variant = "gold", className = "", ...props }: ButtonProps) {
const base = `px-5 py-2.5 rounded-full font-semibold tracking-wide transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[${GOLD}] focus:ring-offset-black shadow-md`;
const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
gold: "bg-[#D4AF37] text-black hover:opacity-95 hover:shadow-lg border border-transparent",
outline: "bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black",
ghost: "text-white/80 hover:text-white hover:bg-white/10 border border-white/10",
};
return (
<button className={`${base} ${variants[variant]} ${className}`} {...props}>
{children}
</button>
);
}