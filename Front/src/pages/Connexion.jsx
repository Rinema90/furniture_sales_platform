import React from 'react';
import LoginCard from '../components/LoginCard';  // Importer le composant de connexion
import SignupCard from '../components/SignupCard';  // Importer le composant de création de compte

const Connexion = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-start items-center pt-16">
            <h2 className="text-3xl font-bold mb-8 mt-12">Page de Connexion</h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-screen-lg w-full max-w-screen-lg min-h-[50vh] bg-opacity-80 backdrop-blur-sm rounded-md mt-8">
                <div className="flex justify-center">
                    <div className="w-full">
                        <LoginCard />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-full">
                        <SignupCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connexion;
