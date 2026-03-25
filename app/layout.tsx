import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";

export const metadata: Metadata = {
  title: "iFood Ecossistema - Sua plataforma pra crescer mais",
  description: "Gerencie seu restaurante com um ecossistema completo: delivery, salão, pagamentos e logística integrados. Crescimento amplificado com inteligência de dados em tempo real.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
