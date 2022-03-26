import React from 'react'
import {Link} from 'react-router-dom';

import profileAva from '../images/netflix-bg.jpg'
import profileBlueAva from '../images/blue-Ava.png'
import profileYellowAva from '../images/yellow-Ava.png'
import profileKidsAva from '../images/kids-Ava.png'

const Whoiswatching = () => {
  return (
    <>
        <div className='mx-9 -mt-1'>
            <div className='flex flex-col'>
                <Link to="/"><img src='https://upload.wikimedia.org/wikipedia/commons/e/ef/NETFLIX_logo.svg' alt="netflix-logo" className=" hidden tab:block tab:w-36 rounded-lg aspect-video hover:cursor-pointer absolute z-50" /></Link>
                <div className='text-neutral-400 text-lg'>
                    <div className='flex flex-col tab:absolute z-20 tab:left-0 tab:right-0 tab:top-0 tab:bottom-0 justify-center items-center max-w-2xl mx-auto'>
                        <p className='tab:text-5xl tab:pb-12 pt-2 font-semibold text-white'>Who's watching?</p>
                        <div className='flex flex-row flex-wrap place-content-center tab:items-center tab:flex-nowrap pt-10 tab:pt-0'>
                            <div className='pr-6 hover:text-white hover:font-medium'>
                                <Link to='/browse' >    
                                    <img src={profileBlueAva} alt="profile-avatar" className="w-24 tab:w-36 rounded-lg aspect-square hover:cursor-pointer hover:border-2" />
                                    <p className='text-center pt-1'>Sammy</p>
                                </Link>
                            </div>
                            <div className='pr-6 hover:text-white hover:font-medium'>
                                <Link to='/browse' >
                                    <img src={profileYellowAva} alt="profile-avatar" className="w-24 tab:w-36 rounded-lg aspect-square hover:cursor-pointer hover:border-2" />
                                    <p className='text-center pt-1'>Sammy</p>
                                </Link>
                            </div>
                            <div className='pr-6 hover:text-white hover:font-medium'>
                                <Link to='/browse' >
                                    <img src={profileYellowAva} alt="profile-avatar" className="w-24 tab:w-36 rounded-lg aspect-square hover:cursor-pointer hover:border-2" />
                                    <p className='text-center pt-1'>Sammy</p>
                                </Link>
                            </div>
                            <div className='pr-6 hover:text-white hover:font-medium'>
                                <Link to='/browse' >
                                    <img src={profileAva} alt="profile-avatar" className="w-24 tab:w-36 rounded-lg aspect-square hover:cursor-pointer hover:border-2" />
                                    <p className='text-center pt-1'>Sammy</p>
                                </Link>
                            </div>
                            <div className='pr-6 hover:text-white hover:font-medium'>
                                <Link to='/browse' >
                                    <img src={profileKidsAva} alt="profile-avatar" className="w-24 tab:w-36 rounded-lg aspect-square hover:cursor-pointer hover:border-2" />
                                    <p className='text-center pt-1'>Kids</p>
                                </Link>
                            </div>
                        </div>
                        <p className='mt-16 border-2 border-neutral-600 py-2 px-9 text-neutral-400'>Manage Profiles</p>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Whoiswatching;