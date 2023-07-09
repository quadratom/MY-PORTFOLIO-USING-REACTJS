import React from 'react';
import Quad from '../assests/quad1.png';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div 
        name="home"
        className=' h-screen w-full bg-gradient-to-b from-black
        via-black to-gray-800'
    >
        <div
            className=' max-w-screen-lg mx-auto flex flex-col
            items-center justify-center h-full px-4 md:flex-row'
        >
            <div className=' flex flex-col justify-center h-full'>
                <h2 className=' text-4xl sm:text-7xl font-bold
                text-white' >
                    I'm a Full Stack Developer
                </h2>
                <p className=' text-gray-500 py-4 pr-20'>
                    I have 4 years of experience building and
                    and designing software.
                    Currently, I love to work on Web Application 
                    using technologies like 
                    ReactJs, NextJs, VueJs, NuxtJs, TailwindCSS,
                    And NodeJs.
                </p>
                <div>
                    <Link
                        to='portfolio'
                        smooth-duration={500}
                        className=' group text-white w-fit
                        px-6 py-3 my-2 flex items-center rounded-md
                        bg-gradient-to-r from-cyan-500 to-blue-500
                        cursor-pointer'>
                        Portfolio 
                        <span className='group-hover:rotate-90 
                        duration-300'>
                            <FaLongArrowAltRight size={25}
                              className='ml-1'
                            />
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img 
                    src={Quad} 
                    alt="Quad" 
                    className=' mt-12 rounded-2xl mx-auto w-2/3 md:w-full'
                />
            </div>
        </div>
    </div>
  )
}

export default Home