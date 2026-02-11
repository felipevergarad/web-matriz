"use client";

import { Leaf, Users, Building2 } from "lucide-react";

export default function ESGImpact() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-matriz-green uppercase mb-3 text-emerald-600">
                        Sostenibilidad Real
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                        Impacto <span className="text-emerald-600">ESG</span> Medible
                    </h3>
                    <p className="max-w-2xl mx-auto text-xl text-gray-600">
                        Nuestra metodología no solo genera retorno financiero, sino que crea valor tangible para la sociedad y el medio ambiente.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Environmental */}
                    <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100 hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-600">
                            <Leaf size={28} />
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">Environmental</h4>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-500 font-bold">•</span>
                                Menor huella de carbono por transporte optimizado.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-500 font-bold">•</span>
                                Reducción de escombros y residuos de obra (-70%).
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-500 font-bold">•</span>
                                Eficiencia energética en vivienda terminada.
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100 hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                            <Users size={28} />
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">Social</h4>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-bold">•</span>
                                Acceso a vivienda digna para sectores medios y vulnerables.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-bold">•</span>
                                Integración social real en barrios bien ubicados.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-bold">•</span>
                                Generación de empleo local calificado en planta.
                            </li>
                        </ul>
                    </div>

                    {/* Governance */}
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-slate-200 rounded-full flex items-center justify-center mb-6 text-slate-700">
                            <Building2 size={28} />
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">Governance</h4>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-slate-500 font-bold">•</span>
                                Transparencia total en el uso de fondos.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-slate-500 font-bold">•</span>
                                Compliance estricto con normativa SERVIU.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-slate-500 font-bold">•</span>
                                Directorio profesionalizado y auditoría externa.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
