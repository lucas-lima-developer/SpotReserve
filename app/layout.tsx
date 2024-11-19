import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spot Reserve",
  description: "Site do portifólio de lucaslimadev, relacionado a aluguel de espaços para eventos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
