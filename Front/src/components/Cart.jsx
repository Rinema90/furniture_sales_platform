import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shoppingBagIcon from '../assets/shopping-bag.png';

const Cart = () => {
    const [itemCount, setItemCount] = useState(0); // État pour gérer le nombre d'articles dans le panier

    // Fonction pour ajouter un article au panier
    const addToCart = () => {
        setItemCount(itemCount + 1);
    };

    // Fonction pour vider le panier
    const clearCart = () => {
        setItemCount(0);
    };

    return (
        <div className="relative">
            {/* Icône du panier */}
            <Link to="/panier">
                <img
                    src={shoppingBagIcon}
                    alt="Shopping Bag"
                    className="h-6 w-6 cursor-pointer"
                />
            </Link>

            {/* Badge pour indiquer le nombre d'articles dans le panier (affiché uniquement si itemCount > 0) */}
            {itemCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold">
                    {itemCount} {/* Nombre d'articles (dynamique) */}
                </span>
            )}
        </div>
    );
};

export default Cart;