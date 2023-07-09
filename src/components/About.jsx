import React from 'react'

const About = () => {
  return (
    <div  name="about"
        className='w-full h-screen bg-gradient-to-b 
        from-gray-800 to-black text-white'>
        
        <div className=' max-w-screen-lg p-4 mx-auto flex
            flex-col justify-center w-full h-full '
        >
            <div className=' pb-b '>
                <p className=' text-4xl font-bold inline border-b-4
                border-gray-500 ' >
                    About
                </p>
            </div>

            <p className=' text-xl mt-20 '>
               Hi, I'am Quadri Oluwagbemileke Emmanuel.
               A Full-Stack Developer having Specialization 
               in Front-End And Back-End Development,
               I have a 3+ years of Experience in Web Development.
            </p>

            <br />

            <p className=' text-xl'>
                 I have a Back-End Skills in JavaScript 
                 Like Nordsjs and Express. And i also have 
                 Front-End Skills in JavaScript like VueJS, 
                 NuxtJS, ReactJs, NextJs, and ReactNative.
            </p>
        </div>
    </div>
  )
}

export default About