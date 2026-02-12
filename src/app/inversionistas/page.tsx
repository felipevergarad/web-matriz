import InvestmentThesis from "@/components/sections/InvestmentThesis";
import ESGImpact from "@/components/sections/ESGImpact";

export const metadata = {
    title: "Inversionistas | Inmobiliaria Matriz",
    description: "Oportunidades de inversión estructurada en vivienda social con rentabilidad ajustada por riesgo y alto impacto ESG.",
};

export default function InversionistasPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="bg-gray-900 text-white py-24 px-4 relative overflow-hidden border-b-4 border-matriz-blue">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-blueprint-dark opacity-20 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 z-0" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <div className="inline-block px-4 py-1 border border-matriz-blue/30 bg-matriz-blue/10 rounded mb-6 backdrop-blur-sm">
                        <span className="text-matriz-blue font-rajdhani font-bold tracking-[0.2em] uppercase text-sm">Investment Assets</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none font-rajdhani">
                        Inversión con <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-matriz-orange to-amber-500">Propósito</span> y <span className="text-transparent bg-clip-text bg-gradient-to-r from-matriz-blue to-cyan-400">Seguridad</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light font-rajdhani leading-relaxed">
                        Un modelo de negocio <strong className="text-white font-bold">resiliente</strong>, respaldado por la demanda inelástica de vivienda y <strong className="text-white font-bold">garantías estatales</strong>.
                    </p>
                </div>
            </div>

            <InvestmentThesis />
            <ESGImpact />
        </main>
    );
}
