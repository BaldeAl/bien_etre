import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a className="text-3xl font-bold leading-none" href="/">
                    Ma Pharmacie
                </a>
                <div className="flex items-center">
                    <div className="lg:mr-4">
                        <Link className="px-3 py-2 text-sm font-semibold text-white hover:bg-gray-700" href="/">
                            
                                Accueil
                              
                        </Link>
                        <Link className="px-3 py-2 text-sm font-semibold text-white hover:bg-gray-700" href="/Products">
                            Produits
                        </Link>
                        <Link className="px-3 py-2 text-sm font-semibold text-white hover:bg-gray-700" href='/appoitments'>
                            Rendez-vous
                        </Link>
                        <Link className="px-3 py-2 text-sm font-semibold text-white hover:bg-gray-700" href="/dashboard">
                            Espace patient
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
