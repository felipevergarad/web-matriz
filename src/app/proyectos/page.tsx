"use client";

import { useState } from 'react';
import Navbar from "@/components/layout/Navbar";
import ProjectCard from "@/components/ui/ProjectCard";
import { Filter } from 'lucide-react';

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
        <main className="min-h-screen bg-gray-50">

            {/* Header */}
            <div className="bg-gray-900 text-white py-24 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-matriz-red/20 to-matriz-orange/20 z-0" />
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 uppercase tracking-tight">
                        Track <span className="text-matriz-red">Record</span> y <span className="text-white">Proyectos</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Cartera de proyectos estructurada para inversión de alto impacto social.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Filters */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div className="flex items-center gap-2 text-gray-500 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                        <Filter size={18} />
                        <span className="text-sm font-medium uppercase tracking-wide">Estado de Desarrollo</span>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center">
                        {['Todos', 'En Desarrollo', 'Banco de Suelo'].map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category as ProjectCategory)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === category
                                    ? 'bg-gray-900 text-white shadow-md'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No se encontraron proyectos en esta categoría.</p>
                    </div>
                )}
            </div>

        </main>
    );
}
