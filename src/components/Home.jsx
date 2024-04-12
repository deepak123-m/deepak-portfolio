import React from 'react'
import HeroImage from "../assets/heroimage.png"
import {MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from'react-scroll'
const Home = () => { 
  return (
   

    <div name = "home" className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 ">
      
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full  ">
        <div className="flex flex-col justify-center h-full">
            <h3 className="text-4xl sm:text-7xl font-bold text-white">I'm a Full Stack Developer</h3>
            <p className="text-gray-500 mt-4 py-4 max-w-md">
            I have 1 year of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Nodejs, Javascript and MongoDB.
            </p>

            <div>
              <Link to="portfolio"className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Portfolio 
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                </span>
              </Link>
            </div>
        </div>

        <div>
          <img src={HeroImage} alt="my profile"  className = "mx-auto pl-60  w-full md:w-full "/>
        </div>
      </div>
    </div>
  )
}

export default Home
