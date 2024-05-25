import React from "react";
import arrayDestruct from "../assets/portfolio/note.png";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import xclone from "../assets/portfolio/X-clone.png"

const Portfolio = () => {



const portfolios=[
    {
        id:1,
        src : arrayDestruct,
        lin:"https://deepak-note-book.netlify.app",
        github:"https://github.com/deepak123-m/note-book"
    },
    {
        id:2,
        src : xclone,
        lin:"https://deepak-socialmedia.netlify.app/login",
        github:"https://github.com/deepak123-m/social-media"
    },
    {
        id:3,
        src : reactSmooth
    },
    {
        id:4,
        src : reactParallax
    },
    {
        id:5,
        src : reactWeather
    },
    {
        id:6,
        src : navbar
    },
]

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

      
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

        {
            portfolios.map(({id,src,lin,github}) => (

                
                <div key={id}  className="shadow-md shadow-gray-600 rounded-lg">
                  
                  <img src={src} alt="" className="rounded-md  duration-200 hover:scale-105"/>
                
                <div className="flex items-center justify-center">
                  <a href={lin} rel="noreferrer" target="_blank"><button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110 ">Demo</button></a>
                  <a href={github} rel="noreferrer" target="_blank"><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">Code</button></a>
                </div>
                </div>

         

            ))
        }
        
        
              </div>

      </div>
    </div>
  );
};

export default Portfolio;
