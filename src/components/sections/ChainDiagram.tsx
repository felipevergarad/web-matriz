"use client";

import { motion } from "framer-motion";
import { BadgeDollarSign, Factory, HardHat, Users } from "lucide-react";

const steps = [
    {
        id: "capital",
        title: "Estructura Financiera",
        description: "Gestión de Fondos de Inversión, estructurados según las posibilidades del suelo en backlog.",
        details: "Garantizamos el flujo mediante subsidios estatales (DS49).",
        icon: BadgeDollarSign,
        color: "bg-matriz-orange",
        text: "text-matriz-orange",
        border: "border-matriz-orange",
        gradient: "from-matriz-orange/20 to-transparent",
    },
    {
        id: "design",
        title: "Diseño y Desarrollo",
        description: "Alineamos la tecnología con las posibilidades urbanísticas y las reglas vigentes del subsidio.",
        details: "Optimización normativa que maximiza la cabida y la rentabilidad.",
        icon: Factory,
        color: "bg-matriz-pink",
        text: "text-matriz-pink",
        border: "border-matriz-pink",
        gradient: "from-matriz-pink/20 to-transparent",
    },
    {
        id: "construction",
        title: "Ejecución Ágil",
        description: "Coordinando la cadena logística para una reducción de plazos de un 40%.",
        details: "Montaje de precisión que acelera el retorno sobre el capital.",
        icon: HardHat,
        color: "bg-matriz-red",
        text: "text-matriz-red",
        border: "border-matriz-red",
        gradient: "from-matriz-red/20 to-transparent",
    },
    {
        id: "community",
        title: "Comunidad",
        description: "Liderando el Rol con la Entidad Patrocinante. Entrega de barrios integrados con alto estándar.",
        details: "Plusvalía social y rentabilidad financiera alineadas.",
        icon: Users,
        color: "bg-matriz-blue",
        text: "text-matriz-blue",
        border: "border-matriz-blue",
        gradient: "from-matriz-blue/20 to-transparent",
    },
];

export default function ChainDiagram() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">
                        Nuestra Ventaja Competitiva
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                        El Modelo <span className="text-matriz-blue">Matriz</span>
                    </h3>
                    <p className="max-w-2xl mx-auto text-xl text-gray-600">
                        No somos una inmobiliaria tradicional. Somos una plataforma de integración vertical que orquesta todo el ciclo de valor.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                            >
                                {/* Connector Dot (Desktop) - Replaces the line visually at the node */}
                                <div className={`hidden md:block absolute top-1/2 -left-4 w-8 h-8 rounded-full border-4 border-white ${step.color} -translate-y-1/2 shadow-sm z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                {/* Header Icon */}
                                <div className={`w-16 h-16 rounded-2xl ${step.color} bg-opacity-10 flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300`}>
                                    <step.icon className={`h-8 w-8 ${step.text}`} />
                                </div>

                                {/* Content */}
                                <h4 className="text-xl font-bold text-gray-900 mb-3 text-center md:text-left">
                                    {step.title}
                                </h4>
                                <p className="text-gray-600 mb-4 text-center md:text-left">
                                    {step.description}
                                </p>

                                {/* Hover Details */}
                                <div className="mt-auto overflow-hidden max-h-0 group-hover:max-h-24 transition-[max-height] duration-500 ease-in-out">
                                    <p className={`text-sm ${step.text} font-medium pt-4 border-t border-gray-100`}>
                                        {step.details}
                                    </p>
                                </div>

                                {/* Gradient Bottom Border */}
                                <div className={`absolute bottom-0 left-0 w-full h-1 ${step.color} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
