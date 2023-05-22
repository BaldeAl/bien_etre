export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white px-6 py-3 text-center">
            <div className="container mx-auto">
                <p className="mb-4">
                    &copy; {new Date().getFullYear()} Ma Pharmacie. Tous les droits réservés.
                </p>
                <p>
                    123 Rue de la Pharmacie, 75000 Paris, France | Tel: 01 23 45 67 89
                </p>
            </div>
        </footer>
    );
}
