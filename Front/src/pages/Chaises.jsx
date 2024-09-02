import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import '../index.css';

const Chaises = () => {
    const [chaises, setChaises] = useState([]);
    console.log("entree composant")
    useEffect(() => {
        const fetchData = async () => {
            try {
                // requête HTTP GET à l'endpoint '/api....' pour récupérer les données des chaises
                const response = await fetch('http://localhost:8000/api/v1/catalogue/chaises');
                if (!response.ok) {
                    throw new Error("Response was not ok");
                }
                const data = await response.json();

                setChaises(data.data.furnitures);
                console.log(data)
            } catch (error) {
                console.error("Error fetching chaises", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Chaises</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {chaises.map((chaise) => (
                    <div key={chaise.id} className="bg-white shadow-md rounded-md p-4">
                        <div className="bg-white shadow-md rounded p-4">
                            <Link to={`/chaises/${chaise.id}`}>
                                <img src={chaise.image} style={{ cursor: 'pointer' }} alt={chaise.name} className="w-full h-48 object-cover" />
                            </Link>
                            <h2>{chaise.name}</h2>
                            <p>Prix : {chaise.price}€</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};


export default Chaises;