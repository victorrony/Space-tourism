import React, { useCallback, useMemo, useState } from "react";
import data from "../utils/data";
import TecnologyList from "../components/TecnologyList";

const technology = () => {
   const [selectedTechnology, setSelectedTechnology] = useState(data?.technology[0]);
   const technologys = useMemo(() => data?.technology, [data]);

   const handleTecnologyClick = useCallback(
      (name) => {
         const destination = technologys.find((destination) => destination.name === name);
         setSelectedTechnology(destination);
      },
      [technologys]
   );
   return (
      <main className="bg-[url('/assets/technology/background-technology-mobile.jpg')] lg:bg-[url('/assets/technology/background-technology-tablet.jpg')] xl:bg-[url('/assets/technology/background-technology-desktop.jpg')] bg-cover bg-center flex flex-col   justify-center items-center pt-44 xl:flex-ro xl:justify-between  xl:p-40 min-h-screen">
         <h1 className="text-xl  text-white justify-center  flex w-[100%] xl:justify-start xl:pt-20">
            03 SPACE LAUNCH 101
         </h1>

         <div className="flex flex-col xl:flex-row justify-center items-center my-16 gap-20 xl:gap-10 xl:mt-40 xl:w-[100%] xl:justify-evenly text-white text-center">
            <div className="flex xl:justify-start">
               <img
                  src={selectedTechnology.images.portrait}
                  alt={selectedTechnology.name}
                  className=" mx-2 w-[433px]  xl:w-[600px] xl:h-[600px]"
               />
            </div>

            <div className="flex flex-col justify-center items-center w-[100%] xl:w-[45%] gap-10 xl:flex-row xl:justify-between ">
               <div className="flex xl:w-">
                  <TecnologyList
                     technology={technologys}
                     selectedTecnology={selectedTechnology.name}
                     onTecnologyClick={handleTecnologyClick}
                  />
               </div>

               <div className="flex flex-col justify-center items-center w-[100%] gap-10">
                  <h2>THE TERMONOLOGY...</h2>
                  <h1 className="text-5xl">{selectedTechnology.name}</h1>
                  <p className="max-w-md mx-auto text-lg">{selectedTechnology.description}</p>
               </div>
            </div>
         </div>
      </main>
   );
};

export default technology;
