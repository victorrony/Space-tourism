import Link from "next/link";
import React from "react";

const data = [
   ["00 HOME", "/"],
   ["01 DESTINATION", "destination"],
   ["02 CREW", "crew"],
   ["03 TECHNOLOGY", "technology"],
];

const Menu = () => (
   <ul className="hidden md:flex md:items-center md:px-20 md:h-[100px] lg:w-[1500px] xl:w-[2200px] xl:gap-28 gap-10  font-medium text-white backdrop-contrast-75   ">
      {data.map(([name, url]) => (
         <li key={name} className="cursor-pointer flex">
            {url ? <Link href={url}>{name}</Link> : name}
         </li>
      ))}
   </ul>
);

export default Menu;
