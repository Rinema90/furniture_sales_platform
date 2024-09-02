import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import '../index.css';

const Tables = () => {
    const [tables, setTables] = useState([]);
    console.log("entree composant")
    useEffect(() => {
        const fetchData = async () => {
            try {
                // requête HTTP GET à l'endpoint '/api....' pour récupérer les données des canapés
                const response = await fetch("http://localhost:8000/api/v1/catalogue/tables");
                if (!response.ok) {
                    throw new Error("Response was not ok");
                }
                const data = await response.json();

                setTables(data.data.furnitures);
                console.log("data ", data)
            } catch (error) {
                console.error("Error fetching tables", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Tables</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tables.map(table => (
                    <div key={table.id} className="grid grid-cols-1 gap-5 mb-4">
                        <div className="bg-white shadow-md rounded p-4">
                            <Link to={`/tables/${table.id}`}>
                                <img src={table.image} style={{ maxWidth: '100%', cursor: 'pointer' }} alt={table.name} className="mt-2 rounded-md" />
                            </Link>
                            <h2>{table.name}</h2>
                            <p>Prix : {table.price}€</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tables;