import Link from 'next/link';
import { MapPin, Calendar, Building, Coins } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
    id: string;
    title: string;
    location: string;
    investment: string;
    units: number;
    date: string;
    status: string;
    category?: string;
    imageUrl: string;
    className?: string;
}

const statusColors: Record<string, string> = {
    'Entregado': 'bg-emerald-100 text-emerald-700 border-emerald-200',
    'En Construcción': 'bg-matriz-blue/10 text-matriz-blue border-matriz-blue/20',
    'Permiso de Edificación': 'bg-matriz-orange/10 text-matriz-orange border-matriz-orange/20',
    'Anteproyecto': 'bg-matriz-purple/10 text-matriz-purple border-matriz-purple/20',
    'Banco de Suelo': 'bg-gray-100 text-gray-600 border-gray-200',
    'En Estructuración': 'bg-gray-100 text-gray-600 border-gray-200',
};

export default function ProjectCard({
    title,
    location,
    investment,
    units,
    date,
    status,
    imageUrl,
    className = '',
}: ProjectCardProps) {
    const statusStyle = statusColors[status] || 'bg-gray-100 text-gray-600 border-gray-200';

    return (
        <div className={`group bg-white border border-gray-200 hover:border-matriz-blue transition-all duration-300 ${className}`}>
            {/* Image Container with Matriz Cut */}
            <div className="relative h-64 w-full bg-gray-100 overflow-hidden matriz-cut border-b border-gray-200">

                {/* Fallback Pattern/Gradient for when image is missing */}
                <div className="absolute inset-0 bg-blueprint" />

                {/* Placeholder Icon if no image */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                    <Building size={64} className="text-gray-400 stroke-1" />
                </div>

                {/* 
                <Image 
                    src={imageUrl} 
                    alt={title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
              */}

                <div className="absolute top-0 right-0 z-10 bg-white/90 backdrop-blur-sm border-l border-b border-gray-200 px-4 py-2">
                    <span className={`text-xs font-bold uppercase tracking-widest ${status === 'En Construcción' ? 'text-matriz-blue' : status === 'Entregado' ? 'text-emerald-600' : 'text-gray-500'}`}>
                        {status}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-matriz-blue transition-colors font-display uppercase leading-tight">
                    {title}
                </h3>
                <div className="flex items-center text-gray-500 text-sm mb-6 font-mono border-b border-gray-100 pb-4">
                    <MapPin size={14} className="mr-2 text-matriz-orange" />
                    {location}
                </div>

                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-bold">Inversión (UF)</p>
                        <p className="font-bold text-gray-900 text-lg font-mono">{investment}</p>
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-bold">Unidades</p>
                        <p className="font-bold text-gray-900 text-lg font-mono">{units}</p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-bold">Entrega Estimada</p>
                        <p className="font-medium text-gray-900 font-mono">{date}</p>
                    </div>
                </div>
            </div>

            {/* Technical Footer Bar */}
            <div className="h-1 w-full bg-gray-100 mt-0 group-hover:bg-matriz-blue transition-colors"></div>
        </div>
    );
}
