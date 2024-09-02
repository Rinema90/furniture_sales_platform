import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const handleClick = () => {
    alert('Le bouton a été cliqué !');
};

const ChaiseDetails = () => {
    const { id } = useParams();
    const [chaise, setChaise] = useState(null);

    useEffect(() => {
        const fetchChaise = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/v1/catalogue/chaises/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log("Received data:", data)
                setChaise(data.data.furniture);
            } catch (error) {
                console.error('Error fetching data:', error);
                setChaise(null);
            }
        };

        fetchChaise();
    }, [id]);

    if (!chaise) {
        return <div>Loading...</div>;
    }

    return (
        <div className="chaise-details p-4">
            <div key={chaise.id} className="flex items-center" >
                <img src={chaise.image} alt={chaise.name} className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl" />
                <div className="ml-4">
                    <h1 className="text-2xl font-bold">{chaise.name}</h1>
                    <p className="text-lg text-gray-700">{chaise.price} €</p>
                    <p className="text-lg mt-4">{chaise.description}</p>
                    <p className="text-lg mt-4">Longueur: {chaise.length}</p>
                    <p className="text-lg mt-4">Profondeur: {chaise.width}</p>
                    <p className="text-lg mt-4">Hauteur: {chaise.height}</p>
                    <button className="bg-[#DDD0C8] hover:bg-[#C6B4A9] text-white font-bold py-4 px-8 rounded-full shadow transition duration-300 ease-in-out mt-20" onClick={handleClick}>
                        Ajouter au panier
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChaiseDetails;
