import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import '../index.css';

const Canapes = () => {
    const [canapes, setCanapes] = useState([]);
    console.log("entree composant")
    useEffect(() => {
        const fetchData = async () => {
            try {
                // requête HTTP GET à l'endpoint '/api....' pour récupérer les données des canapés
                const response = await fetch('http://localhost:8000/api/v1/catalogue/canapes');
                if (!response.ok) {
                    throw new Error("Response was not ok");
                }
                const data = await response.json();
                console.log("Data fetched for Canapes:", data);

                setCanapes(data.data.furnitures);

            } catch (error) {
                console.error("Error fetching canapés", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Canapés</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {canapes.map(canape => (
                    <div key={canape.id} className="grid grid-cols-1 gap-5 mb-4">
                        <div className="bg-white shadow-md rounded p-4">
                            <Link to={`/canapes/${canape.id}`}>
                                <img src={canape.image} style={{ cursor: 'pointer' }} alt={canape.name} className="w-full h-48 object-cover" />
                            </Link>
                            <h2>{canape.name}</h2>
                            <p>Prix : {canape.price}€</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Canapes;