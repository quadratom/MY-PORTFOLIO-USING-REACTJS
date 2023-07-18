import React from 'react';
import Html from '../assests/html.png';
import Css from '../assests/css.png';
import Tailwind from '../assests/tailwindcss.png';
// import Bootstrap from '../assests/bootstrap.png';
import Javascript from '../assests/javascript.png';
import Vue from '../assests/vue.png';
import Nuxt from '../assests/nuxtjs.png';
import react from '../assests/reactjs.png';
// import Next from '../assests/nextjs.png';
import Reactnative from '../assests/reactnative.png';
import Nodejs from '../assests/nodejs.png';


const Experience = () => {

  const techs = [
    {
      id: 1,
      src: Html,
      title: "Html",
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: Css,
      title: "Css",
      style: 'shadow-yellow-500'
    },
    {
      id: 3,
      src: Tailwind,
      title: "Tailwind",
      style: 'shadow-sky-400'
    },
    // {
    //   id: 4,
    //   src: Bootstrap,
    //   title: "Bootstrap",
    //   style: ''
    // },
    {
      id: 5,
      src: Javascript,
      title: "Javascript",
      style: 'shadow-yellow-500'
    },
    {
      id: 6,
      src: Vue,
      title: "VueJs",
      style: ''
    },
    {
      id: 7,
      src: Nuxt,
      title: "NuxtJs",
      style: ''
    },
    {
      id: 8,
      src: react,
      title: "Reactjs",
      style: 'shadow-blue-600'
    },
    // {
    //   id: 9,
    //   src: Next,
    //   title: "Next",
    //   style: 'shadow-white'
    // },
    {
      id: 10,
      src: Reactnative,
      title: "Reactnative",
      style: ''
    },
    {
      id: 11,
      src: Nodejs,
      title: "Nodejs",
      style: ''
    },
  ]

  return (
    <div 
      name="experience"
      className=' bg-gradient-to-b from-gray-800 to-black
      w-full h-screen  '
    >
      <div>
      <div className=' max-w-screen-lg mx-auto p-4 md:hidden flex flex-col
          justify-center w-full text-white  '>
        <div>
          <p className='  text-4xl font-bold border-b-4
          border-gray-500 p-2 inline'>
            Experience
             </p>
          <p className='py-6'>
            These are the Technologies I've worked with
          </p>
          <div>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>TAILWINDCSS</li>
              <li>JAVASCRIPT</li>
              <li>VUEJS AND NUXTJS</li>
              <li>REACTJS AND NEXTJS</li>
              <li>REACTNATIVE</li>
              <li>NORDJS</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      <div className=' max-w-screen-lg mx-auto p-4  hidden md:flex flex-col
      justify-center w-full text-white  '>
        <div>
          <p className='  text-4xl font-bold border-b-4
          border-gray-500 p-2 inline'>
            Experience
          </p>
          <p className='py-6'>
            These are the Technologies I've worked with
          </p>
        </div>


        <div 
        className='  w-full  grid grid-cols-2   sm:grid-cols-3
        gap-8 text-center  px-12   sm:px-0'
        >

          {techs.map(({ id, src, title, style }) => (
                  <div 
                  key={id}
                  // hover:scale-105 duration-500, for classname
                  className={`shadow-md 
                  py-2 rounded-lg ${style}`}>
                    <img src={src} alt="html" className='w-20 mx-auto' />
                    <p className=' mt-4'>{title}</p>
                  </div>
          ))}
        </div>
        
      </div>

      
    </div>

    
  )
}

export default Experience