import React from "react";
import MainPicture from "../components/MainPicture";
import LandPageMiniPic from "../components/LandPageMiniPic";

const Home = (props) => {
  const images = [
    {
      src: "https://cdn.sklum.com/fr/wk/2660449/chaise-de-salle-a-manger-en-tissu-et-bois-de-cloda.jpg?cf-resize=gallery",
      alt: "un meuble vitaif",
    },
    {
      src: "https://rededition.com/wp-content/uploads/2018/06/Collection-REDEDITION-Cre%CC%81dit-Photo-%C2%A9-Frederic-Lucano-En-vente-www.rededition.comFL-13566-1-e1612795231761-scaled.jpg",
      alt: "un autre meuble vitaif",
    },
    {
      src: "https://rededition.com/wp-content/uploads/2018/06/Collection-REDEDITION-Cre%CC%81dit-Photo-%C2%A9-Frederic-Lucano-En-vente-www.rededition.comFL-13566-1-e1612795231761-scaled.jpg",
      alt: "un troisième meuble vitaif",
    },
    // ajoutez autant d'images que vous le souhaitez
  ];
  images.map((image, index) => {
    console.log(image.src);
  });
  return (
    <div className=" flex flex-col">
      <div>
        <MainPicture />
      </div>
      <div className="container flex flex-col flex-grow justify-center items-center min-w-full">
        <h2 className="mt-5 sm:text-4xl text-2xl font-bold mx-auto text-center">
          Nouveautés
        </h2>
        <div class="container mx-auto mt-0 lg:px-32 lg:pt-6 lg:max-h-[5em]">
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div className="grid grid-cols-3 w-full p-1 md:p-2 gap-2">
              {images.map((image, index) => (
                <LandPageMiniPic key={index} src={image.src} alt={image.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

/**
 <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
  <div class="-m-1 flex flex-wrap md:-m-2">
    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
      </div>
    </div>
    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
      </div>
    </div>
    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
      </div>
    </div>
    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
      </div>
    </div>
    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp" />
      </div>
    </div>
    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
      </div>
    </div>
  </div>
</div>
 */
