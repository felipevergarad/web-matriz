"use client";

import { Leaf, Users, Building2 } from "lucide-react";

export default function ESGImpact() {
    return (
        <section className="py-24 bg-gray-900 relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-blueprint-dark opacity-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-matriz-green uppercase mb-3 font-rajdhani">
                        Sostenibilidad Real
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
                        Impacto <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-matriz-green">ESG</span> Medible
                    </h3>
                    <p className="max-w-2xl mx-auto text-xl text-gray-400 font-light">
                        Nuestra metodología no solo genera retorno financiero, sino que crea valor tangible para la sociedad y el medio ambiente.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Environmental */}
                    <div className="bg-gray-800 border-l-4 border-emerald-500 p-8 hover:bg-gray-800/80 transition-all matriz-cut relative group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Leaf size={100} className="text-emerald-500" />
                        </div>
                        <div className="w-16 h-16 bg-gray-900 border border-emerald-500/30 flex items-center justify-center mb-6 text-emerald-500 matriz-cut-sm">
                            <Leaf size={32} />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Environmental</h4>
                        <ul className="space-y-4 text-gray-300 font-rajdhani text-lg">
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 font-bold mt-1">/</span>
                                Menor huella de carbono por transporte optimizado.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 font-bold mt-1">/</span>
                                Reducción de escombros y residuos de obra (-70%).
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 font-bold mt-1">/</span>
                                Eficiencia energética en vivienda terminada.
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="bg-gray-800 border-l-4 border-matriz-blue p-8 hover:bg-gray-800/80 transition-all matriz-cut relative group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Users size={100} className="text-matriz-blue" />
                        </div>
                        <div className="w-16 h-16 bg-gray-900 border border-matriz-blue/30 flex items-center justify-center mb-6 text-matriz-blue matriz-cut-sm">
                            <Users size={32} />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Social</h4>
                        <ul className="space-y-4 text-gray-300 font-rajdhani text-lg">
                            <li className="flex items-start gap-3">
                                <span className="text-matriz-blue font-bold mt-1">/</span>
                                Acceso a vivienda digna para sectores vulnerables.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-matriz-blue font-bold mt-1">/</span>
                                Integración social real en barrios bien ubicados.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-matriz-blue font-bold mt-1">/</span>
                                Generación de empleo local calificado en planta.
                            </li>
                        </ul>
                    </div>

                    {/* Governance */}
                    <div className="bg-gray-800 border-l-4 border-gray-400 p-8 hover:bg-gray-800/80 transition-all matriz-cut relative group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Building2 size={100} className="text-white" />
                        </div>
                        <div className="w-16 h-16 bg-gray-900 border border-gray-500/30 flex items-center justify-center mb-6 text-white matriz-cut-sm">
                            <Building2 size={32} />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Governance</h4>
                        <ul className="space-y-4 text-gray-300 font-rajdhani text-lg">
                            <li className="flex items-start gap-3">
                                <span className="text-gray-400 font-bold mt-1">/</span>
                                Transparencia total en el uso de fondos subsidiarios.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-gray-400 font-bold mt-1">/</span>
                                Compliance estricto con normativa SERVIU.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-gray-400 font-bold mt-1">/</span>
                                Directorio profesionalizado y auditoría externa.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
