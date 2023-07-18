import React from 'react';
import Image from "../assests/image.png"

const Portfolio = () => {


    const Portfolios = [
        {
            id: 1, 
            src: Image,
            href: 'https://github.com/Quadratom'
        },
        {
            id: 2, 
            src: Image,
            href: 'https://github.com/Quadratom'
        },
        {
            id: 3, 
            src: Image,
            href: 'https://github.com/Quadratom'
        },
        {
            id: 4, 
            src: Image,
            href: 'https://github.com/Quadratom'
        },
        {
            id: 5, 
            src: Image,
            href: 'https://github.com/Quadratom'
        },
        {
            id: 6, 
            src: Image,
            href: 'https://github.com/Quadratom'
        }
    ]

  return (

    <div
      name="portfolio"
      className=' bg-gradient-to-b from-black to-gray-800
      w-full text-white md:h-screen '
    >
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full '>
            <div className=' pb-8 '>
                <p className=' text-4xl font-bold inline border-b-4
                border-gray-500 '>
                    Portfolio
                </p>
                <p className='py-8'>Check out some of my work right here</p>
            </div>
            
            <div className=' grid sm:grid-cols-2 md:grid-cols-3
                gap-8 px-12 sm:px-9  '>
                    {Portfolios.map(({ id, src, href }) => (
                             <div 
                            key={id}
                               className=' shadow-md shadow-gray-600 rounded-lg ' >
                                <img 
                                    src={src} 
                                    alt="myImage" 
                                    // duration-200 hover:scale-105, for classname
                                    className=' rounded-md '
                                />
                                <div className=' flex items-center justify-center '>
                                    <button 
                                    // duration-200 hover:scale-105, for classname
                                        className='w-1/2 px-6 py-3 m-4 '
                                    >
                                        Demo
                                    </button>
                                    <button 
                                    // duration-200 hover:scale-105, for classname
                                        className='w-1/2 px-6 py-3 m-4 ' 
                                    > 
                                        <a 
                                            href={href}
                                            target='_blank'
                                            rel="noreferrer"
                                        >
                                            Code
                                        </a>
                                    </button>
                             </div>
                         </div>
        
                    ))}
               
            </div>
        </div>
    </div>
  )
}

export default Portfolio