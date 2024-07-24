import React, { useCallback, useMemo, useState } from "react";
import data from "../utils/data";
import DestinationList from "../components/DestinationList";

const Destination = () => {
   const [selectedDestination, setSelectedDestination] = useState(data?.destinations[0]);
   const destinations = useMemo(() => data?.destinations, [data]);

   const handleDestinationClick = useCallback(
      (name) => {
         const destination = destinations.find((destination) => destination.name === name);
         setSelectedDestination(destination);
      },
      [destinations]
   );

   const selectedDestinationDistance = selectedDestination?.distance ?? "N/A";
   const selectedDestinationTravel = selectedDestination?.travel ?? "N/A";

   return (
      <main className="bg-[url('/assets/destination/background-destination-mobile.jpg')] lg:bg-[url('/assets/destination/background-destination-tablet.jpg')] xl:bg-[url('/assets/destination/background-destination-desktop.jpg')] bg-cover bg-center flex flex-col   justify-center items-center pt-44 xl:justify-between  xl:p-40 min-h-screen">
         <h1 className="text-xl  text-white justify-center  flex w-[100%] xl:justify-start xl:pt-20">
            01 PICK YOUR DESTINATION
         </h1>

         <div className="flex flex-col xl:flex-row justify-center items-center mx-5 mt-20 gap-20 xl:gap-10 xl:mt-40 xl:w-[100%] xl:justify-evenly text-white text-center">
            <div className="flex">
               <img
                  src={selectedDestination.images.webp}
                  alt={selectedDestination.name}
                  className="w-96 h-96 mx-3 xl:w-[650px] xl:h-[600px]"
               />
            </div>

            <div className="flex flex-col mx-3 gap-10">
               <div>
                  <DestinationList
                     destinations={destinations}
                     onDestinationClick={handleDestinationClick}
                     selectedDestination={selectedDestination.name}
                  />
               </div>

               <h1 className="text-[120px]">{selectedDestination.name}</h1>

               <p className="max-w-sm mx-auto text-lg">{selectedDestination.description}</p>

               <hr />

               <div className="flex flex-col justify-center items-center gap-10">
                  <div>
                     <span>AVG DISTANCE</span>
                     <br /> <span className="text-4xl">{selectedDestinationDistance}</span>
                  </div>{" "}
                  <div>
                     <span>EST. TRAVEL TIME</span>
                     <br /> <span className="text-4xl">{selectedDestinationTravel}</span>
                  </div>
                  <div></div>
               </div>
            </div>
         </div>
      </main>
   );
};

export default Destination;
