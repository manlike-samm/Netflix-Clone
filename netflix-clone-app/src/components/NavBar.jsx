import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';

import profileBlueAva from '../images/blue-Ava.png' 

const NavBar = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])
  return (
    <div className='absolute z-50 flex flex-col w-full'>
        <div className={`fixed flex flex-row items-center justify-between tab:py-10 h-16 w-full ${show && "bg-black  duration-500 ease-in "}`}>
            <Link to="/"><img src='https://upload.wikimedia.org/wikipedia/commons/e/ef/NETFLIX_logo.svg' alt="netflix-logo" className="w-20 tab:w-36 rounded-lg aspect-video hover:cursor-pointer pl-2 tab:pl-5 mx-0 tab:mx-4" /></Link>
            <Link to='/'><img src={profileBlueAva} alt='avatar' className='w-10 tab:w-20 px-2 tab:px-5 tab:py-2 tab:mr-4 rounded mx-0 tab:mx-4'/></Link>
        </div>
    </div>
  )
  window.addEventListener()
}

export default NavBar