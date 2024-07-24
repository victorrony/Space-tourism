import React from "react";

const Home = () => {
   return (
      <main className="bg-[url('/assets/home/background-home-mobile.jpg')] lg:bg-[url('/assets/home/background-home-tablet.jpg')] xl:bg-[url('/assets/home/background-home-desktop.jpg')] bg-cover bg-center flex flex-col   justify-center items-center py-44 xl:flex-row xl:justify-between xl:items-end xl:p-40 min-h-screen">
         <div className="flex flex-col justify-center items-center mt-20 gap-20 xl:gap-10 xl:mt-40 text-white text-center">
            <h2 className="text-xl md:mt-16 xl:mt-32 xl:text-3xl">SO, YOU WANT TO TRAVEL TO</h2>
            <h1 className="text-9xl md:text-[150px] xl:text-[200px] ">SPACE</h1>
            <p className="max-w-lg mx-auto text-lg md:text-2xl">
               Let´s face it: if you want to go to space, you might as well genuinely go to outer space and not hover
               kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world
               experience!{" "}
            </p>
         </div>
         <div>
            <button className="w-44 h-40 md:w-52 md:h-48 lg:w-60 lg:h-60 md:my-32 flex justify-center items-center mt-20 rounded-full p-12 bg-white text-black text-xl border-white">
               EXPLORE
            </button>
         </div>
      </main>
   );
};

export default Home;
