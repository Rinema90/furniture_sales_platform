import React from "react";
import { Link } from "react-router-dom";
import logOut from "../assets/logOut.svg";
import logIn from "../assets/logIn.svg"; // Add the new icon here
import { useAuth } from "../context/AuthContext"; // Import the Auth context

const Compte = () => {
  const { isAuthenticated } = useAuth(); // Destructure isAuthenticated from Auth context

  return (
    <div className="relative">
      <Link to={isAuthenticated ? "/compte" : "/connexion"}>
        <img
          src={isAuthenticated ? logIn : logOut}
          alt="Mon compte"
          className="bg-[#ddd0c8] h-6 w-6 cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default Compte;
