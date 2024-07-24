import Link from "next/link";
import React from "react";

const MenuMobile = ({ setMobileMenu }) => {
   return (
      <ul className="flex items-center flex-col md:hidden p- font-bold right-10 absolute top-[60px] w-44    bg-white border-t text-black">
         {data.map(([name, url]) => (
            <li key={name} className="flex items-center justify-center p-2 cursor-pointer hover:bg-slate-600 w-[100%]">
               {url ? <Link href={url}>{name}</Link> : name}
            </li>
         ))}
      </ul>
   );
};

const data = [
   ["HOME", "/"],
   ["DESTINATION", "destination"],
   ["CREW", "crew"],
   ["TECHNOLOGY", "technology"],
];

export default MenuMobile;
