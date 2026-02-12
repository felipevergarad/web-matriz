import Link from "next/link";
import { ArrowRight, CheckCircle2, Building2, Users, Factory, HardHat, Home } from "lucide-react";

export default function ModeloPage() {
    const steps = [
        {
            id: "01",
            title: "Gestión de Capital",
            icon: <Building2 className="w-8 h-8 text-matriz-blue" />,
            description: "Estructuración financiera sólida para viabilizar proyectos de alto impacto.",
            details: ["Fondos de Inversión", "Subsidios DS49", "Gestión de Suelo"],
            color: "border-matriz-blue"
        },
        {
            id: "02",
            title: "Desarrollo y Validación",
            icon: <Users className="w-8 h-8 text-matriz-orange" />,
            description: "Desarrollo de especialidades y calificación del proyecto. Búsqueda y validación de familias junto a la Entidad Patrocinante.",
            details: ["Ingeniería de Detalle", "Calificación SERVIU", "Gestión Social (EP)"],
            color: "border-matriz-orange"
        },
        {
            id: "03",
            title: "Industrialización Flexible",
            icon: <Factory className="w-8 h-8 text-matriz-red" />,
            description: "Selección de tecnología y asociatividades estratégicas adaptadas al modelo de negocios particular.",
            details: ["Manufactura Off-site", "Selección Tecnológica", "Alianzas Estratégicas"],
            color: "border-matriz-red"
        },
        {
            id: "04",
            title: "Ejecución y Logística",
            icon: <HardHat className="w-8 h-8 text-matriz-blue" />,
            description: "Coordinación logística precisa de todos los actores de la cadena de valor y la empresa constructora.",
            details: ["Logística Just-in-Time", "Coordinación de Actores", "Control de Obra"],
            color: "border-matriz-blue"
        },
        {
            id: "05",
            title: "Comunidad",
            icon: <Home className="w-8 h-8 text-matriz-orange" />,
            description: "Liderando con la Entidad Patrocinante. Entrega de barrios integrados de alto estándar.",
            details: ["Barrios Integrados", "Entrega Final", "Plusvalía Social"],
            color: "border-matriz-orange"
        }
    ];

    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-blueprint-dark opacity-20 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6">
                        Modelo <span className="text-transparent bg-clip-text bg-gradient-to-r from-matriz-blue to-matriz-red">Matriz</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
                        Un proceso industrializado de 5 etapas para transformar la inversión en soluciones habitacionales de alto estándar.
                    </p>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>

                <div className="space-y-12 md:space-y-24">
                    {steps.map((step, index) => (
                        <div key={step.id} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Timeline Node (Desktop) */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-gray-900 rounded-full hidden md:block"></div>

                            {/* Content Card */}
                            <div className="w-full md:w-1/2">
                                <div className={`bg-gray-50 border-l-4 ${step.color} p-8 shadow-sm hover:shadow-md transition-shadow relative group matriz-cut`}>
                                    <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black font-rajdhani text-gray-900 pointer-events-none select-none">
                                        {step.id}
                                    </div>

                                    <div className="mb-4 flex items-center gap-4">
                                        <div className="p-3 bg-white shadow-sm matriz-cut-sm">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold uppercase tracking-tight text-gray-900">{step.title}</h3>
                                    </div>

                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {step.description}
                                    </p>

                                    <ul className="space-y-2">
                                        {step.details.map((detail, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm font-rajdhani font-medium text-gray-500 uppercase tracking-wide">
                                                <CheckCircle2 className="w-4 h-4 text-matriz-blue" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Spacer for alignment */}
                            <div className="w-full md:w-1/2 hidden md:block"></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-900 text-white relative">
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl font-bold uppercase mb-8 tracking-tight">¿Listo para innovar?</h2>
                    <Link href="/contacto" className="inline-block bg-matriz-red text-white px-10 py-4 text-lg font-bold uppercase tracking-widest hover:bg-white hover:text-matriz-red transition-all matriz-cut">
                        Hablemos de tu Proyecto
                    </Link>
                </div>
            </section>
        </main>
    );
}
