import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const App = () => {
  return (
    <div className="flex flex-col">
      {/* Votre contenu principal ici */}
      <FooterComponent />
    </div>
  );
};

const FooterComponent = () => {
  return (
    <footer className="bg-[#ddd0c8] h-24 py-4 px-8 flex justify-between max-h-footer mt-auto">
      <ul className="flex justify-between w-full">
        <li className="mr-4">
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/admin" className="text-gray-600 hover:text-gray-900">
            Admin
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default App;
