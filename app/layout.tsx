import "./globals.css";

export const metadata = {
  title: "Peluquería Tina Márquez",
  description: "Experiencia premium en Altea",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
