import React from "react";
import "../index.css";

const MainPicture = () => {
  return (
    <div className="relative z-10 font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-45 before:z-10">
      <img
        src="https://d.media.kavehome.com/image/upload/w_1152,c_fill,ar_1.5,f_auto/v1716811966/entities/collection-images/nora_main.jpg"
        alt="Example"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="min-h-[350px] relative z-20 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">
          Découvrez nos meubles
        </h2>
        <p className="sm:text-lg text-base text-center text-gray-200">
          Laissez-vous séduire par notre sélection de meubles d'occasion !
        </p>

        <button
          type="button"
          className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
        >
          Parcourir
        </button>
      </div>
    </div>
  );
};

export default MainPicture;

/**
<div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <img src="https://readymadeui.com/cardImg.webp" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

      <div class="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 class="sm:text-4xl text-2xl font-bold mb-6">Explore the World</h2>
        <p class="sm:text-lg text-base text-center text-gray-200">Embark on unforgettable journeys. Book your dream vacation today!</p>

        <button
          type="button"
          class="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300">
          Book Now
        </button>
      </div>
    </div> 
*/
