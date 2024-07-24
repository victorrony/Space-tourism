import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CrewCarousel = ({ crewMembers, onSlideChange }) => {
   return (
      <Carousel
         showArrows={false}
         showThumbs={false}
         showStatus={false}
         interval={5000}
         infiniteLoop={true}
         autoPlay={true}
         showIndicators={false} // Ocultar os control dots
         onChange={onSlideChange}
         className="w-full "
      >
         {crewMembers.map((member, index) => (
            <div
               key={index}
               className="flex flex-col xl:flex-row justify-center items-center mx-5 mt-20 gap-20 xl:gap-10 xl:mt-40 xl:w-[100%] xl:justify-evenly text-white text-center"
            >
               <div className="flex xl:w-[50%]">
                  <img src={member.images.webp} alt={member.name} className="w-96 h-96  xl:h-[600px]" />
               </div>

               <div className="control-dots xl:invisible "></div>

               <div className="flex flex-col my-14 gap-10 xl:w-[50%]">
                  <h1 className="text-3xl">{member.role}</h1>
                  <h2 className="text-5xl">{member.name}</h2>
                  <p className="max-w-md mx-auto text-lg">{member.bio}</p>
               </div>
            </div>
         ))}
      </Carousel>
   );
};

export default CrewCarousel;
