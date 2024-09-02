import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const handleClick = () => {
    alert('Le bouton a été cliqué !');
};

const CanapeDetails = () => {
    const { id } = useParams();
    const [canape, setCanape] = useState(null);

    useEffect(() => {
        const fetchCanape = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/v1/catalogue/canapes/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log("Received data:", data)
                setCanape(data.data.furniture);
            } catch (error) {
                console.error('Error fetching data:', error);
                setCanape(null); // Reset canape state on error
            }
        };
        fetchCanape();
    }, [id]);

    if (!canape) {
        return <div>Loading...</div>;
    }

    return (
        <div className="canape-details p-4">
            <div key={canape.id} className="flex items-center" >
                <img src={canape.image} alt={canape.name} className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl" />
                {/* Utilisation de max-w-md, max-w-lg, max-w-xl pour ajuster la taille sur différents écrans */}
                <div className="ml-4">
                    <h1 className="text-2xl font-bold">{canape.name}</h1>
                    <p className="text-lg text-gray-700">{canape.price} €</p>
                    <p className="text-lg mt-4">{canape.description}</p>
                    <p className="text-lg mt-4">Longueur: {canape.length}</p>
                    <p className="text-lg mt-4">Profondeur: {canape.width}</p>
                    <p className="text-lg mt-4">Hauteur: {canape.height}</p>
                    <button className="bg-[#DDD0C8] hover:bg-[#C6B4A9] text-white font-bold py-4 px-8 rounded-full shadow transition duration-300 ease-in-out mt-20" onClick={handleClick}>
                        Ajouter au panier
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CanapeDetails;