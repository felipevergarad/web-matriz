import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="relative h-12 w-48 mb-6">
                            <Image
                                src="/assets/matriz_blanco.png"
                                alt="Matriz"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Ingeniería Social de Alto Impacto. Transformando la vivienda en Chile.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-matriz-blue">Explorar</h4>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li><Link href="/Inversionistas" className="hover:text-white transition-colors">Inversionistas</Link></li>
                            <li><Link href="/modelo" className="hover:text-white transition-colors">Modelo Matriz</Link></li>
                            <li><Link href="/proyectos" className="hover:text-white transition-colors">Proyectos</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-matriz-orange">Contacto</h4>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li>contacto@imatriz.cl</li>
                            <li>Santa Rita 1030, Las Condes<br />Santiago</li>
                        </ul>
                    </div>

                    {/* Social / Legal */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-matriz-pink">Legal</h4>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Términos de Uso</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} Inmobiliaria Matriz SpA. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
