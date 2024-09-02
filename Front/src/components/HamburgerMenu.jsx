// Importation des modules nécessaires depuis React
import React, { useState } from 'react';

// Déclaration du composant fonctionnel HamburgerMenu
const HamburgerMenu = () => {
    // Utilisation du hook useState pour gérer l'état d'ouverture du menu
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour basculer l'état d'ouverture du menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Rendu du composant
    return (
        <div className="relative z-50">
            {/* Bouton pour ouvrir/fermer le menu */}
            <button
                onClick={toggleMenu}
                className="p-4 focus:outline-none z-50"
            >
                {/* Icône du menu hamburger */}
                <div className="space-y-2">
                    <div className="w-8 h-0.5 bg-gray-600"></div>
                    <div className="w-8 h-0.5 bg-gray-600"></div>
                    <div className="w-8 h-0.5 bg-gray-600"></div>
                </div>
            </button>

            {/* Contenu du menu */}
            <div
                className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {/* Bouton pour fermer le menu */}
                <button
                    onClick={toggleMenu}
                    className="p-4 focus:outline-none"
                >
                    Close
                </button>
                {/* Navigation du menu */}
                <nav className="p-4">
                    <ul>
                        <li className="mb-2"><a href="/home">Home</a></li>
                        <li className="mb-2"><a href="/catalogue">Tous les produits</a></li>
                        <li className="mb-2"><a href="/canapes">Canapés</a></li>
                        <li className="mb-2"><a href="/chaises">Chaises</a></li>
                        <li className="mb-2"><a href="/tables">Tables</a></li>
                        <li className="mb-2"><a href="/compte">Compte</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

// Exportation du composant pour pouvoir l'utiliser dans d'autres fichiers
export default HamburgerMenu;
