import React, { useEffect, useState } from 'react';
import '../index.css';

const CataloguePage = () => {
    const [furnitures, setFurnitures] = useState([]);

    useEffect(() => {
        const fetchFurnitures = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/v1/catalogue');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setFurnitures(data.data.furnitures); // Supposant que la réponse est structurée comme { status: 'success', data: { categories: [...] } }
                console.log("data ", data)
            } catch (error) {
                console.error('Error fetching furnitures:', error);
            }
        };

        fetchFurnitures();
    }, []);


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Catalogue des meubles</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {furnitures.map((furniture) => (
                    <div key={furniture.id} className="bg-white shadow-md rounded-md p-4">
                        <h2 className="text-lg font-bold">{furniture.name}</h2>
                        <p className="text-gray-700">Prix: {furniture.price} €</p>
                        <img src={furniture.image} alt={furniture.name} className="mt-2 rounded-md" style={{ maxWidth: '100%' }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CataloguePage;
