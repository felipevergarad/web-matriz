"use client";

import { useState } from 'react';
import Navbar from "@/components/layout/Navbar";
import ProjectCard from "@/components/ui/ProjectCard";
import { Filter, Building2, Map } from 'lucide-react';

// Mock Data - In a real app this would come from a CMS or API
// Real Data from User Request
const PROJECTS_DATA = [
    {
        id: "1",
        title: "Condominio Doña Antonia Norte",
        location: "Doñihue, O'Higgins",
        investment: "UF 7.000",
        units: 115,
        date: "2do Semestre 2027",
        status: "Permiso de Edificación",
        category: "En Desarrollo",
        imageUrl: "/assets/projects/alerces.jpg" // Placeholder re-used
    },
    {
        id: "2",
        title: "Condominio Doña Antonia Sur",
        location: "Doñihue, O'Higgins",
        investment: "UF 6.000",
        units: 70,
        date: "2do Semestre 2027",
        status: "Permiso de Edificación",
        category: "En Desarrollo",
        imageUrl: "/assets/projects/alerces.jpg" // Placeholder re-used
    },
    {
        id: "3",
        title: "Condominio San Esteban",
        location: "Rancagua, O'Higgins",
        investment: "UF 5.000",
        units: 64,
        date: "2do Semestre 2027",
        status: "Anteproyecto",
        category: "En Desarrollo",
        imageUrl: "/assets/projects/alerces.jpg" // Placeholder re-used
    },
    {
        id: "4",
        title: "Condominio Los Quilos",
        location: "Rancagua, O'Higgins",
        investment: "UF 15.000",
        units: 280,
        date: "En Estructuración",
        status: "Anteproyecto",
        category: "En Desarrollo",
        imageUrl: "/assets/projects/loboza.jpg" // Placeholder re-used
    },
    {
        id: "5",
        title: "Condominio Parque Vigneau Etapa 1",
        location: "Rancagua, O'Higgins",
        investment: "UF 8.000",
        units: 200,
        date: "En Estructuración",
        status: "Banco de Suelo",
        category: "Banco de Suelo",
        imageUrl: "/assets/projects/loboza.jpg" // Placeholder re-used
    },
    {
        id: "6",
        title: "Condominio Parque Vigneau Etapa 2",
        location: "Rancagua, O'Higgins",
        investment: "UF 9.000",
        units: 200,
        date: "En Estructuración",
        status: "Banco de Suelo",
        category: "Banco de Suelo",
        imageUrl: "/assets/projects/loboza.jpg" // Placeholder re-used
    }
] as const;

type ProjectCategory = typeof PROJECTS_DATA[number]['category'] | 'Todos';

export default function ProyectosPage() {
    const [filter, setFilter] = useState<ProjectCategory>('Todos');

    const filteredProjects = filter === 'Todos'
        ? PROJECTS_DATA
        : PROJECTS_DATA.filter(project => project.category === filter);

    return (
        <main className="min-h-screen bg-gray-50 relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-blueprint opacity-5 pointer-events-none fixed" />

            {/* Header */}
            <div className="bg-gray-900 text-white py-24 px-4 relative overflow-hidden border-b-4 border-matriz-red">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-blueprint-dark opacity-20 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-matriz-red/20 z-0" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <div className="inline-block px-4 py-1 border border-matriz-red/30 bg-matriz-red/10 rounded mb-6 backdrop-blur-sm">
                        <span className="text-matriz-red font-rajdhani font-bold tracking-[0.2em] uppercase text-sm">Portfolio 2025-2027</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none font-rajdhani">
                        Track <span className="text-transparent bg-clip-text bg-gradient-to-r from-matriz-red to-orange-600">Record</span> y <span className="text-white">Proyectos</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light font-rajdhani">
                        Cartera de proyectos estructurada para inversión de <strong className="text-white">alto impacto social</strong>.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                {/* Filters */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8 sticky top-24 z-20 bg-gray-50/80 backdrop-blur-md p-4 rounded-xl border border-gray-200">
                    <div className="flex items-center gap-3 text-gray-700">
                        <div className="p-2 bg-white border border-gray-200 rounded matriz-cut-sm">
                            <Filter size={20} className="text-matriz-red" />
                        </div>
                        <span className="text-sm font-bold uppercase tracking-widest font-rajdhani">Filtros de Cartera</span>
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center">
                        {['Todos', 'En Desarrollo', 'Banco de Suelo'].map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category as ProjectCategory)}
                                className={`px-6 py-2 text-sm font-bold tracking-wider uppercase transition-all matriz-cut-sm ${filter === category
                                    ? 'bg-matriz-red text-white shadow-lg border-transparent'
                                    : 'bg-white text-gray-500 hover:text-matriz-red hover:border-matriz-red border border-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-32 border-2 border-dashed border-gray-200 rounded-3xl bg-white/50">
                        <Building2 size={48} className="mx-auto text-gray-300 mb-4" />
                        <p className="text-gray-500 text-lg font-rajdhani">No se encontraron proyectos en esta categoría.</p>
                    </div>
                )}
            </div>

        </main>
    );
}
