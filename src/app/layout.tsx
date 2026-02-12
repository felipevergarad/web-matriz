import type { Metadata } from "next";
import { Montserrat, Rajdhani, Chakra_Petch } from "next/font/google"; // Added technical fonts
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Primary Technical Font (Body/Data)
const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Display Font (Headings/Stencil)
const chakra = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Inmobiliaria Matriz | Ingeniería Social de Alto Impacto",
  description: "Plataforma de inversión y desarrollo habitacional industrializado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        suppressHydrationWarning
        className={`${montserrat.variable} ${rajdhani.variable} ${chakra.variable} antialiased selection:bg-matriz-blue selection:text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
