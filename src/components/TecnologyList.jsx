import React from "react";

const TecnologyList = ({ onTecnologyClick, selectedTecnology, technology }) => {
   return (
      <ul className="flex flex-row xl:flex-col gap-10 text-xl">
         {technology?.map((item) => (
            <button key={item.name} className={`cursor-pointer `} onClick={() => onTecnologyClick(item.name)}>
               <li
                  className={`flex justify-center items-center p-3 xl:p-7  w-12 h-12 border-2 border-white rounded-full ${
                     item.name === selectedTecnology ? "bg-white text-black" : ""
                  }`}
               >
                  <div>{item.numero}</div>
               </li>
            </button>
         ))}
      </ul>
   );
};

export default TecnologyList;
