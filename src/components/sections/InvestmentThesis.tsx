"use client";

import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, PieChart } from "lucide-react";

const thesisPoints = [
    {
        icon: ShieldCheck,
        title: "Riesgo Acotado (Risk-Adjusted)",
        description: "Nuestro modelo opera sobre subsidios estatales (DS49), eliminando el riesgo comercial de venta. La demanda está garantizada por el déficit habitacional.",
        color: "text-matriz-blue",
        bg: "bg-matriz-blue/10",
        border: "border-matriz-blue/20"
    },
    {
        icon: TrendingUp,
        title: "Rentabilidad Competitiva",
        description: "La industrialización y la reducción de plazos (-40%) aceleran la rotación del capital, mejorando la TIR del proyecto frente a la construcción tradicional.",
        color: "text-matriz-orange",
        bg: "bg-matriz-orange/10",
        border: "border-matriz-orange/20"
    },
    {
        icon: PieChart,
        title: "Estructuración Flexible",
        description: "Diseñamos vehículos de inversión ad-hoc (Fondos Privados, SpA) adaptados al perfil de cada aportante, con reportabilidad trimestral transparente.",
        color: "text-matriz-purple",
        bg: "bg-matriz-purple/10",
        border: "border-matriz-purple/20"
    }
];

export default function InvestmentThesis() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Details */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blueprint opacity-5 pointer-events-none border-l border-gray-100"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-[2px] bg-matriz-orange"></div>
                            <h2 className="text-sm font-bold tracking-widest text-matriz-orange uppercase font-rajdhani">
                                Tesis de Inversión
                            </h2>
                        </div>

                        <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-none uppercase tracking-tighter">
                            ¿Por qué invertir en <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-matriz-blue to-cyan-600">Vivienda Industrializada?</span>
                        </h3>

                        <div className="space-y-6">
                            {thesisPoints.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-6 group"
                                >
                                    <div className={`shrink-0 w-14 h-14 matriz-cut-sm ${point.bg} border ${point.border} flex items-center justify-center transition-transform group-hover:scale-105`}>
                                        <point.icon className={`w-7 h-7 ${point.color}`} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide">{point.title}</h4>
                                        <p className="text-gray-600 leading-relaxed font-rajdhani font-medium text-lg">{point.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Visual / Graph Representation */}
                    <div className="relative">
                        {/* Technical Decorators */}
                        <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-matriz-blue opacity-50"></div>
                        <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-matriz-orange opacity-50"></div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[600px] w-full bg-gray-50 border border-gray-200 p-8 flex flex-col justify-center items-center overflow-hidden matriz-cut shadow-2xl"
                        >
                            {/* Blueprint Grid Background */}
                            <div className="absolute inset-0 bg-blueprint opacity-10 z-0" />

                            <div className="relative z-10 text-center w-full h-full flex flex-col justify-between pt-12 pb-8">
                                <div>
                                    <div className="text-7xl font-black text-gray-900 mb-2 tracking-tighter font-rajdhani">
                                        UF + 12<span className="text-4xl align-top">%</span>
                                    </div>
                                    <div className="text-sm text-gray-500 uppercase tracking-[0.2em] font-bold border-b border-gray-300 pb-4 inline-block">Retorno Objetivo Anual</div>
                                </div>

                                {/* Chart Bars - Fixed Height Container */}
                                <div className="flex gap-6 justify-center items-end h-[300px] mt-8 w-full px-8">
                                    <div className="w-16 h-[30%] bg-gray-300/50 backdrop-blur-sm relative group">
                                        <div className="absolute -top-6 left-0 right-0 text-center text-xs font-bold text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity font-rajdhani">Trad.</div>
                                    </div>
                                    <div className="w-16 h-[50%] bg-matriz-blue/30 backdrop-blur-sm relative group">
                                        <div className="absolute -top-6 left-0 right-0 text-center text-xs font-bold text-matriz-blue opacity-0 group-hover:opacity-100 transition-opacity font-rajdhani">Optim.</div>
                                    </div>
                                    <div className="w-16 h-[75%] bg-matriz-blue/60 backdrop-blur-sm relative group">
                                        <div className="absolute -top-6 left-0 right-0 text-center text-xs font-bold text-matriz-blue opacity-0 group-hover:opacity-100 transition-opacity font-rajdhani">Scale</div>
                                    </div>
                                    <div className="w-16 h-full bg-matriz-blue shadow-[0_0_15px_rgba(0,159,227,0.5)] relative">
                                        <div className="absolute top-0 right-0 w-2 h-2 bg-white"></div> {/* Technical Detail */}
                                    </div>
                                </div>

                                <p className="text-xs text-gray-400 uppercase tracking-widest mt-6 font-rajdhani">
                                    *Rentabilidad referencial histórica DS49
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
