import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image/Video Fallback */}
            <div
                className="absolute inset-0 z-0 opacity-60"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />

            {/* Brand Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-br from-matriz-blue/90 to-matriz-purple/80" />

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-xl uppercase font-sans">
                    Industrialización.<br />
                    Impacto.<br />
                    Rentabilidad.
                </h1>

                <p className="text-xl md:text-2xl text-gray-100 mb-10 font-medium max-w-3xl mx-auto opacity-95">
                    La nueva era de la vivienda social en Chile.<br />
                    <span className="text-base md:text-lg opacity-80 font-normal">Transformamos el déficit habitacional en oportunidades de inversión estructurada.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/inversionistas"
                        className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 matriz-cut sm:matriz-cut-none font-bold uppercase tracking-wider text-sm transition-transform transform hover:scale-105 shadow-lg"
                    >
                        Ver Oportunidades
                    </Link>
                    <Link
                        href="/modelo"
                        className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 matriz-cut sm:matriz-cut-none font-bold uppercase tracking-wider text-sm transition-transform transform hover:scale-105"
                    >
                        Conocer Modelo
                    </Link>
                </div>
            </div>
        </section>
    );
}
