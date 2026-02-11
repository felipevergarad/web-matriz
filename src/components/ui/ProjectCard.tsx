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
        <div className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className}`}>
            {/* Image Container */}
            <div className="relative h-64 w-full bg-gray-100 overflow-hidden group-hover:bg-gray-50 transition-colors">

                {/* Fallback Pattern/Gradient for when image is missing */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>

                {/* Placeholder Icon if no image */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                    <Building size={64} className="text-gray-400" />
                </div>

                {/* 
                <Image 
                    src={imageUrl} 
                    alt={title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              */}

                <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border shadow-sm ${statusStyle}`}>
                        {status}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-matriz-blue transition-colors">
                    {title}
                </h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                    <MapPin size={16} className="mr-1" />
                    {location}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-50">
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                            <Coins size={12} /> Inversión
                        </p>
                        <p className="font-bold text-gray-800">{investment}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                            <Building size={12} /> Unidades
                        </p>
                        <p className="font-bold text-gray-800">{units} Deptos.</p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                            <Calendar size={12} /> Entrega Estimada
                        </p>
                        <p className="font-medium text-gray-800">{date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
