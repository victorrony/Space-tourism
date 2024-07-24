import React from "react";

const DestinationList = ({ onDestinationClick, destinations, selectedDestination }) => {
   return (
      <ul className="flex gap-10 text-xl ">
         {destinations?.map((item) => (
            <button
               key={item.name}
               className={`cursor-pointer ${item.name === selectedDestination ? "border-b-2 border-white" : ""}`}
               onClick={() => onDestinationClick(item.name)}
            >
               <li className="cursor-pointer p-2">
                  <div>{item.name}</div>
               </li>
            </button>
         ))}
      </ul>
   );
};

export default DestinationList;
