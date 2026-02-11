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
            <div className="bg-gray-900 text-white py-24 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-matriz-blue/20 to-matriz-purple/20 z-0" />
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 uppercase tracking-tight">
                        Inversión con <span className="text-matriz-orange">Propósito</span> y <span className="text-matriz-blue">Seguridad</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Un modelo de negocio resiliente, respaldado por la demanda inelástica de vivienda y garantías estatales.
                    </p>
                </div>
            </div>

            <InvestmentThesis />
            <ESGImpact />
        </main>
    );
}
