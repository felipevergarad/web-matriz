"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const CONTACT_TYPES = [
    {
        id: "investor",
        label: "Inversionista / Family Office",
        description: "Busco rentabilidad estructurada en proyectos DS49.",
        color: "border-matriz-orange text-matriz-orange bg-matriz-orange/5"
    },
    {
        id: "landowner",
        label: "Propietario de Suelo",
        description: "Tengo un terreno con potencial para desarrollo habitacional.",
        color: "border-matriz-blue text-matriz-blue bg-matriz-blue/5"
    },
    {
        id: "partner",
        label: "Partnership / Proveedores",
        description: "Ofrezco soluciones industriales o servicios constructivos.",
        color: "border-matriz-pink text-matriz-pink bg-matriz-pink/5"
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
        <main className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-gray-900 text-white py-24 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-matriz-blue/10 to-matriz-orange/10 z-0" />
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 uppercase tracking-tight">
                        Conversemos de <span className="text-matriz-blue">Negocios</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Selecciona tu perfil para derivar tu requerimiento al área especializada correspondiente.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Column: Context & Info */}
                    <div>
                        <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-8">
                            Nuestras Coordenadas
                        </h2>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gray-100 rounded-lg text-gray-900">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Oficinas Centrales</h3>
                                    <p className="text-gray-600">Av. Apoquindo 1234, Of. 501<br />Las Condes, Santiago, Chile</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gray-100 rounded-lg text-gray-900">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Correo Electrónico</h3>
                                    <p className="text-gray-600">contacto@imatriz.cl</p>
                                    <p className="text-sm text-gray-400">Respuesta en máx. 24 hrs hábiles.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gray-100 rounded-lg text-gray-900">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Teléfono</h3>
                                    <p className="text-gray-600">+56 2 2345 6789</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-2">Horario de Atención</h4>
                            <p className="text-gray-600 mb-0">Lunes a Viernes<br />09:00 - 18:30 hrs.</p>
                        </div>
                    </div>

                    {/* Right Column: Dynamic Form */}
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 relative overflow-hidden">
                        {formStatus === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center p-8"
                            >
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje Enviado!</h3>
                                <p className="text-gray-600 max-w-xs mx-auto">
                                    Hemos recibido tus datos. Un ejecutivo del área seleccionada te contactará a la brevedad.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        ¿Cuál es tu perfil?
                                    </label>
                                    <div className="grid grid-cols-1 gap-3">
                                        {CONTACT_TYPES.map((type) => (
                                            <div
                                                key={type.id}
                                                onClick={() => setSelectedType(type.id)}
                                                className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 relative ${selectedType === type.id
                                                        ? `${type.color} bg-white shadow-md ring-1 ring-offset-2 ring-current`
                                                        : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50'
                                                    }`}
                                            >
                                                <div className="flex justify-between items-center">
                                                    <span className="font-bold">{type.label}</span>
                                                    {selectedType === type.id && <CheckCircle size={18} />}
                                                </div>
                                                <p className="text-xs text-gray-500 mt-1">{type.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                                        <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-matriz-blue focus:border-transparent outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Corporativo</label>
                                        <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-matriz-blue focus:border-transparent outline-none transition-all" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje / Detalle del Requerimiento</label>
                                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-matriz-blue focus:border-transparent outline-none transition-all" placeholder="Cuéntanos brevemente sobre tu interés..."></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={!selectedType || formStatus === 'submitting'}
                                    className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all ${selectedType
                                            ? 'bg-gray-900 hover:bg-gray-800 shadow-lg hover:shadow-xl translate-y-0'
                                            : 'bg-gray-300 cursor-not-allowed'
                                        }`}
                                >
                                    {formStatus === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
                                    {!selectedType && <span className="text-xs font-normal opacity-70 ml-2">(Selecciona un perfil primero)</span>}
                                    {selectedType && formStatus !== 'submitting' && <ArrowRight size={18} />}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
