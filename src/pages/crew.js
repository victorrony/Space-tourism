import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../utils/data"; // Certifique-se de que o caminho está correto
import CrewCarousel from "../components/CrewCarousel";

const Crew = () => {
   const [selectedCrew, setSelectedCrew] = useState(data.crew[0]);
   const crewMembers = data.crew;

   const handleSlideChange = (index) => {
      setSelectedCrew(crewMembers[index]);
   };

   return (
      <main className="bg-[url('/assets/destination/background-destination-mobile.jpg')] lg:bg-[url('/assets/destination/background-destination-tablet.jpg')] xl:bg-[url('/assets/destination/background-destination-desktop.jpg')] bg-cover bg-center flex flex-col justify-center items-center pt-44  xl:justify-between xl:p-40 min-h-screen">
         <h1 className="text-xl text-white justify-center flex w-[100%] xl:justify-start xl:pt-20">
            02 MEET YOUR CREW
         </h1>

         <CrewCarousel crewMembers={crewMembers} onSlideChange={handleSlideChange} />
      </main>
   );
};

export default Crew;
