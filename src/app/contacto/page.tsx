"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const CONTACT_TYPES = [
    {
        id: "investor",
        label: "Inversionista / FO",
        description: "Busco rentabilidad estructurada en proyectos DS49.",
        color: "border-matriz-orange text-matriz-orange",
        activeBg: "bg-matriz-orange text-white"
    },
    {
        id: "landowner",
        label: "Propietario de Suelo",
        description: "Tengo un terreno con potencial para desarrollo habitacional.",
        color: "border-matriz-blue text-matriz-blue",
        activeBg: "bg-matriz-blue text-white"
    },
    {
        id: "partner",
        label: "Partnership / Prov.",
        description: "Ofrezco soluciones industriales o servicios constructivos.",
        color: "border-matriz-pink text-matriz-pink",
        activeBg: "bg-matriz-pink text-white"
    }
];

export default function ContactPage() {
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate API call
        setTimeout(() => setFormStatus('success'), 1500);
    };

    return (
        <main className="min-h-screen bg-white relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-blueprint opacity-5 pointer-events-none fixed" />

            {/* Header */}
            <div className="bg-gray-900 text-white py-24 px-4 relative overflow-hidden border-b-4 border-matriz-blue">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-blueprint-dark opacity-20 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 z-0" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <div className="inline-block px-4 py-1 border border-matriz-blue/30 bg-matriz-blue/10 rounded mb-6 backdrop-blur-sm">
                        <span className="text-matriz-blue font-rajdhani font-bold tracking-[0.2em] uppercase text-sm">Communication Uplink</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none font-rajdhani">
                        Conversemos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-matriz-blue to-cyan-400">Negocios</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light font-rajdhani">
                        Selecciona tu perfil para derivar tu requerimiento al <strong className="text-white">área especializada</strong> correspondiente.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Column: Context & Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-8 h-[2px] bg-matriz-orange"></div>
                            <h2 className="text-sm font-bold tracking-widest text-matriz-orange uppercase font-rajdhani">
                                Coordenadas Operativas
                            </h2>
                        </div>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-6 group">
                                <div className="p-4 bg-gray-50 border border-gray-200 text-gray-900 matriz-cut-sm transition-colors group-hover:border-matriz-blue group-hover:bg-matriz-blue/5">
                                    <MapPin size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-1">Oficinas Centrales</h3>
                                    <p className="text-gray-600 font-rajdhani text-lg leading-tight">Av. Apoquindo 1234, Of. 501<br />Las Condes, Santiago, Chile</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-4 bg-gray-50 border border-gray-200 text-gray-900 matriz-cut-sm transition-colors group-hover:border-matriz-blue group-hover:bg-matriz-blue/5">
                                    <Mail size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-1">Correo Electrónico</h3>
                                    <p className="text-gray-600 font-rajdhani text-lg cursor-pointer hover:text-matriz-blue transition-colors">contacto@imatriz.cl</p>
                                    <p className="text-xs text-matriz-blue mt-1 font-mono uppercase bg-matriz-blue/10 inline-block px-2 py-0.5">SLA: 24 hrs hábiles</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-4 bg-gray-50 border border-gray-200 text-gray-900 matriz-cut-sm transition-colors group-hover:border-matriz-blue group-hover:bg-matriz-blue/5">
                                    <Phone size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-1">Teléfono</h3>
                                    <p className="text-gray-600 font-rajdhani text-lg">+56 2 2345 6789</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-8 border-l-4 border-matriz-orange relative overflow-hidden">
                            <div className="absolute inset-0 bg-blueprint-dark opacity-20 pointer-events-none" />
                            <h4 className="font-bold text-white mb-2 uppercase tracking-wider relative z-10 flex items-center gap-2">
                                <Terminal size={16} className="text-matriz-orange" />
                                Horario de Atención
                            </h4>
                            <p className="text-gray-400 mb-0 font-mono text-sm relative z-10">Lunes a Viernes // 09:00 - 18:30 hrs.</p>
                        </div>
                    </div>

                    {/* Right Column: Dynamic Form */}
                    <div className="bg-gray-50 border border-gray-200 p-8 relative overflow-hidden matriz-cut shadow-xl">
                        {formStatus === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center p-8"
                            >
                                <div className="w-24 h-24 bg-green-50 border border-green-200 text-green-600 mb-6 flex items-center justify-center matriz-cut">
                                    <CheckCircle size={48} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-3xl font-black text-gray-900 mb-2 uppercase tracking-tighter">¡Mensaje Enviado!</h3>
                                <p className="text-gray-600 max-w-xs mx-auto font-rajdhani text-lg">
                                    Hemos recibido tus datos. Un ejecutivo del área seleccionada te contactará a la brevedad.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                                        // Paso 01: Identificación de Perfil
                                    </label>
                                    <div className="grid grid-cols-1 gap-3">
                                        {CONTACT_TYPES.map((type) => (
                                            <div
                                                key={type.id}
                                                onClick={() => setSelectedType(type.id)}
                                                className={`cursor-pointer p-4 border transition-all duration-200 relative group matriz-cut-sm ${selectedType === type.id
                                                    ? `${type.activeBg} border-transparent shadow-lg`
                                                    : 'border-gray-300 bg-white hover:border-gray-400'
                                                    }`}
                                            >
                                                <div className="flex justify-between items-center">
                                                    <span className={`font-bold uppercase tracking-wide ${selectedType === type.id ? 'text-white' : 'text-gray-900'}`}>{type.label}</span>
                                                    {selectedType === type.id && <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>}
                                                </div>
                                                <p className={`text-sm mt-1 font-rajdhani ${selectedType === type.id ? 'text-white/80' : 'text-gray-500 group-hover:text-gray-700'}`}>{type.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                                        // Paso 02: Datos de Contacto
                                    </label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-xs font-bold text-gray-700 mb-1 uppercase">Nombre Completo</label>
                                            <input type="text" id="name" required className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-matriz-blue focus:ring-0 outline-none transition-all font-rajdhani text-lg placeholder-gray-300" placeholder="Ej. Juan Pérez" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-xs font-bold text-gray-700 mb-1 uppercase">Email Corporativo</label>
                                            <input type="email" id="email" required className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-matriz-blue focus:ring-0 outline-none transition-all font-rajdhani text-lg placeholder-gray-300" placeholder="nombre@empresa.com" />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs font-bold text-gray-700 mb-1 uppercase">Requerimiento</label>
                                    <textarea id="message" rows={4} className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-matriz-blue focus:ring-0 outline-none transition-all font-rajdhani text-lg placeholder-gray-300" placeholder="Describe brevemente tu interés o proyecto..."></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={!selectedType || formStatus === 'submitting'}
                                    className={`w-full py-5 font-black uppercase tracking-widest text-white flex items-center justify-center gap-3 transition-all matriz-cut ${selectedType
                                        ? 'bg-gray-900 hover:bg-matriz-blue shadow-xl hover:shadow-2xl translate-y-0'
                                        : 'bg-gray-300 cursor-not-allowed text-gray-500'
                                        }`}
                                >
                                    {formStatus === 'submitting' ? 'Transmitiendo...' : 'Iniciar Conversación'}
                                    {selectedType && formStatus !== 'submitting' && <ArrowRight size={20} />}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
