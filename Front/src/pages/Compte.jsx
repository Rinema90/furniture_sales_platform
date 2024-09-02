import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Compte = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/v1/users/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUser(data.data.user);
            } catch (error) {
                console.error('Error fetching data:', error);
                setUser(null);
            }
        };

        fetchUser();
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="user-details p-4">
            <div key={user.id} className="flex items-center" >
                <div className="ml-4">
                    <h1 className="text-2xl font-bold">Paramètres du compte</h1>
                    <div>
                        <p className="text-2xl mt-4">{user.name}</p>
                        <p className="text-lg mt-4">email: {user.email}</p>
                        <p className="text-lg mt-4">Mot de passe: {user.password}</p>
                    </div>
                    <p className="text-lg mt-4">Date de création du compte: {user.created_at}</p>
                </div>
            </div>
        </div>
    );
};

export default Compte;