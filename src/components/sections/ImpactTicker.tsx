
export default function ImpactTicker() {
    const stats = [
        { value: "1.000", label: "Familias por Beneficiar" },
        { value: "50k", label: "m² por Construir" },
        { value: "UF 20k", label: "Gestionados" },
    ];

    return (
        <div className="relative z-30 bg-white border-b border-gray-100">
            {/* Brand Color Strip Top */}
            <div className="h-2 w-full bg-gradient-to-r from-matriz-orange via-matriz-pink via-matriz-red via-matriz-blue to-matriz-purple" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    {stats.map((stat, index) => (
                        <div key={index} className="pt-4 md:pt-0">
                            <span className="block text-4xl md:text-5xl font-extrabold text-gray-900 leading-none mb-2 tracking-tight">
                                {stat.value}
                            </span>
                            <span className="block text-xs md:text-sm font-bold text-gray-500 uppercase tracking-[0.15em]">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
