import React from 'react'

const About = () => {
  return (
    <div name = "about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>

            <p className="text-xl mt-20">
            I am a software developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) and proficient in Tailwind CSS. With extensive experience and expertise in each of these technologies, I excel in crafting dynamic and efficient end-to-end web applications that meet and exceed client expectations.
            </p>
            <br/>

            <p className="text-xl">
            I am an expert in C++ problem-solving skills and logical thinking. With a track record of solving over 500 coding problems, I possess a deep understanding of algorithmic complexities and excel in crafting efficient and elegant solutions to intricate challenges.            </p>
        </div>
      </div>
    </div>
  )
}

export default About
