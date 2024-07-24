import React, { useState } from "react";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

const Nav = () => {
   const [mobileMenu, setMobileMenu] = useState(false);

   const toggleMobileMenu = () => setMobileMenu(!mobileMenu);

   return (
      <header className="w-full h-[50px] md:h-[100px] flex items-center justify-evenly z-30 absolute mt-8 transition-transform duration-300  p-12 lg:p-0 md:-mr- lg:-mt-0 xl:mt-14">
         <div className="flex w-[100%] h-[100%] md:pl-10 justify-between flex-row items-center gap-6 text-black">
            <Link href="/">
               <img src="/assets/shared/logo.svg" alt="logo" className="lg:w-16 lg:h-16" />
            </Link>

            <div className=" md:w-12 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative ">
               <img
                  className={`w-${mobileMenu ? 8 : 9}`}
                  src={`/assets/shared/icon-${mobileMenu ? "close" : "hamburger"}.svg`}
                  onClick={toggleMobileMenu}
               />
            </div>
         </div>

         <Menu />

         {mobileMenu && <MenuMobile setMobileMenu={toggleMobileMenu} />}
      </header>
   );
};
export default Nav;
