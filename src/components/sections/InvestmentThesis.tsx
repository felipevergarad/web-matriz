"use client";

import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, PieChart } from "lucide-react";

const thesisPoints = [
    {
        icon: ShieldCheck,
        title: "Riesgo Acotado (Risk-Adjusted)",
        description: "Nuestro modelo opera sobre subsidios estatales (DS49), eliminando el riesgo comercial de venta. La demanda está garantizada por el déficit habitacional.",
        color: "text-matriz-blue",
        bg: "bg-matriz-blue/10"
    },
    {
        icon: TrendingUp,
        title: "Rentabilidad Competitiva",
        description: "La industrialización y la reducción de plazos (-40%) aceleran la rotación del capital, mejorando la TIR del proyecto frente a la construcción tradicional.",
        color: "text-matriz-orange",
        bg: "bg-matriz-orange/10"
    },
    {
        icon: PieChart,
        title: "Estructuración Flexible",
        description: "Diseñamos vehículos de inversión ad-hoc (Fondos Privados, SpA) adaptados al perfil de cada aportante, con reportabilidad trimestral transparente.",
        color: "text-matriz-purple",
        bg: "bg-matriz-purple/10"
    }
];

export default function InvestmentThesis() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div>
                        <h2 className="text-sm font-bold tracking-widest text-matriz-orange uppercase mb-3">
                            Tesis de Inversión
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                            ¿Por qué invertir en <br />
                            <span className="text-matriz-blue">Vivienda Industrializada?</span>
                        </h3>

                        <div className="space-y-8">
                            {thesisPoints.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-4"
                                >
                                    <div className={`shrink-0 w-12 h-12 rounded-xl ${point.bg} flex items-center justify-center`}>
                                        <point.icon className={`w-6 h-6 ${point.color}`} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">{point.title}</h4>
                                        <p className="text-gray-600 leading-relaxed">{point.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Visual / Graph Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] w-full bg-white rounded-3xl shadow-xl border border-gray-100 p-8 flex flex-col justify-center items-center overflow-hidden"
                    >
                        {/* Abstract Chart Representation */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white z-0" />

                        <div className="relative z-10 text-center">
                            <div className="text-6xl font-black text-gray-900 mb-2">UF + 12%</div>
                            <div className="text-sm text-gray-500 uppercase tracking-widest mb-12">Retorno Objetivo Anual</div>

                            {/* Decorative Elements replacing an image for now */}
                            <div className="flex gap-4 justify-center items-end h-40">
                                <div className="w-16 h-24 bg-gray-200 rounded-t-lg animate-pulse" />
                                <div className="w-16 h-32 bg-matriz-blue/20 rounded-t-lg" />
                                <div className="w-16 h-48 bg-matriz-blue/40 rounded-t-lg" />
                                <div className="w-16 h-64 bg-matriz-blue rounded-t-lg shadow-lg" />
                            </div>
                            <p className="mt-8 text-xs text-gray-400 max-w-xs mx-auto">
                                *Rentabilidad referencial basada en proyectos históricos DS49.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
