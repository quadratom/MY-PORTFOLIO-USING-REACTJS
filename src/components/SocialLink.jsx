import React from 'react';
import { FaLinkedin} from 'react-icons/fa';
import { AiFillGithub, AiFillMail } from 'react-icons/ai';
import { BsPersonHearts } from 'react-icons/bs';

const SocialLink = () => {
  const links = [
    {
      id: 1, 
      child: (
        <>
        Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: 'http://linkedin.com',
      style:'rounded-tr-md'
    },
    {
      id: 2, 
      child: (
        <>
        GitHub <AiFillGithub size={30} />
        </>
      ),
      href: 'https://github.com/Quadratom'
    },
    {
      id: 3, 
      child: (
        <>
        Mail <AiFillMail size={30} />
        </>
      ),
      href: 'mailto:quadratomz@gmail.com'
    },
    {
      id: 4, 
      child: (
        <>
        Resume <BsPersonHearts size={30} />
        </>
      ),
      href: '/resume.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ]
  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({ id, child, href, style, download }) => (
        <li  
        key={id}
        className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] 
        hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`  } 
        >
            <a 
              href={href}
              className=' flex justify-between items-center
              w-full text-white'
              download={download}
              target='_blank'
              rel="noreferrer"
            >
          <>
           {child}
          </>
            </a>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLink