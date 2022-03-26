import React from 'react'
import {Link} from 'react-router-dom';

import netflixKids from '.././images/netflix-kids.png'



const Landingpage = () => {

  return (
    <>
        <div className='flex flex-col'>
            <div className='pg1 '>
                <div className='bg-opacity-70 bg-black h-fit px-6 border-b-8 border-gray-500 border-opacity-30 shadow-inner '>
                    <div className=' flex flex-row items-center justify-between pt-7 h- mx-4'>
                        <Link to="/"><img src='https://upload.wikimedia.org/wikipedia/commons/e/ef/NETFLIX_logo.svg' alt="netflix-logo" className="  p-5 hover:cursor-pointer"/></Link>
                        <Link to='/signin'> <button className=' bg-red-600 text-white text-sm px-5 py-2 mr-4 font-medium rounded'>Sign In</button></Link>
                    </div>
                    <div className='flex flex-col items-center text-center text-white font-medium max-w-4xl py-40 mx-auto'>
                        <p className='text-5xl font-semibold mx-auto max-w-xl'> Unlimited movies, TV shows, and more.</p>
                        <p className='my-6 text-2xl'>Watch anywhere. Cancel anytime.</p>
                        <p className='text-center text-lg mx-10 mb-1 leading-none pb-5 max-w-4xl'>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className='grid grid-cols-3 max-w-4xl rounded mx-auto'>
                        <input type="email" className=' text-lg text-black p-4 w-full col-span-2 ' placeholder='Email address'/>
                        <button className=' bg-red-600 px-6 py-3 w-full text-3xl '> Get started ></button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='  text-white py-20 px-11 border-b-8 border-gray-500 border-opacity-30 max-h-fit'>
                    <div className='grid grid-cols-2 items-center m-auto max-w-6xl'>
                    <div className='text-left px-14 scale-110'>
                        <p className=' text-5xl font-semibold'> Enjoy on your TV. </p>
                        <p className=' text-2xl mt-5'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div>
                    <div className='mb-5 relative flex flex-row -my-20'>
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" className='z-30' />
                        <div className='absolute my-11 px-1 bp3:mt-20 mobileL:mx-16 z-20' >
                        <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" className=' aspect-video px-2' type="video/mp4" autoPlay muted loop ></video>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='text-white py-20 px-11 border-b-8 border-gray-500 border-opacity-30'>
                    <div className='grid grid-cols-2 items-center m-auto max-w-6xl'>
                    <div className='bp3:order-last'>
                        <p className=' text-5xl font-semibold pr-6'>Download your shows to watch offline. </p>
                        <p className=' text-2xl mt-5 pt-1'>Save your favorites easily and always have something to watch.</p>
                    </div>
                    <div className='mb-5 relative -my-12 pr-24'>
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" className='' />
                        <div className='flex flex-row justify-between absolute w-3/5 left-16 bottom-5 bg-black border rounded-lg items-center px-3 py-1 ' >
                        <div className='flex flex-row'>
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" className='w-8' />
                            <div className='text-left col-span-2 ml-3 my-1 py-3 leading-4'>
                            <p className='font-medium'>Stranger Things</p>
                            <p className='text-blue-400 text-sm'>Downloading...</p>
                            </div>
                        </div>
                        <i className="fa-solid fa-download mr-6"></i>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='text-white py-16 px-12 border-b-8 border-gray-500 border-opacity-30'>
                    <div className='grid grid-cols-2 items-center m-auto max-w-6xl'>
                    <div className='bp3:order-first pr-10 ml-6  scale-110'>
                        <p className=' text-5xl font-semibold'>Watch everywhere. </p>
                        <p className=' text-2xl mt-5'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    </div>
                </div>
                <div className='text-white py-20 px-11 border-b-8 border-gray-500 border-opacity-30'>
                    <div className='grid grid-cols-2 items-center mx-auto max-w-6xl'>
                    <div className='bp3:order-last pl-8 scale-110'>
                        <p className=' text-5xl font-semibold '>Create profiles for kids.</p>
                        <p className=' text-2xl mt-5'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                    </div>
                    <div className=' -my-10'>
                        <img src={netflixKids} alt="" className='' />
                    </div>
                    </div>
                </div>
                <div className=' flex border-b-8 border-gray-500 border-opacity-30'>
                    <div className='flex-col text-white w-full font-medium max-w-4xl py-20 mx-auto '>
                    <p className='text-center text-6xl'>Frequently Asked Questions</p>
                    <div className='grid grid-cols-1 py-14'>
                        <div>
                        <div className='flex flex-row justify-between bg-neutral-700 px-6 py-4 mb-2 relative'>
                            <p className=' text-2xl'>What is netflix?</p>
                            <span className="material-icons absolute top-5 right-5 rotate-45 ">close</span>
                        </div>
                        </div>
                        <div>
                        <div className='flex flex-row justify-between bg-neutral-700 px-6 py-4 mb-2 relative'>
                            <p className=' text-2xl'>How much does Netflix cost?</p>
                            <span className="material-icons absolute top-5 right-5 rotate-45 ">close</span>
                        </div>
                        </div>
                        <div>
                        <div className='flex flex-row justify-between bg-neutral-700 px-6 py-4 mb-2 relative'>
                            <p className=' text-2xl'>Where can I watch?</p>
                            <span className="material-icons absolute top-5 right-5 rotate-45 ">close</span>
                        </div>
                        </div>
                        <div>
                        <div className='flex flex-row justify-between bg-neutral-700 px-6 py-4 mb-2 relative'>
                            <p className=' text-2xl'>How do i cancel?</p>
                            <span className="material-icons absolute top-5 right-5 rotate-45 ">close</span>
                        </div>
                        </div>
                        <div>
                        <div className='flex flex-row justify-between bg-neutral-700 px-6 py-4 mb-2 relative'>
                            <p className=' text-2xl'>What can I watch on Netflix?</p>
                            <span className="material-icons absolute top-5 right-5 rotate-45 ">close</span>
                        </div>
                        </div>
                        <div>
                        <div className='flex flex-row justify-between bg-neutral-700 px-6 py-4 mb-2 relative'>
                            <p className=' text-2xl'>Is Netflix good for kids?</p>
                            <span className="material-icons absolute top-5 right-5 rotate-45 ">close</span>
                        </div>
                        </div>
                        
                    </div>
                    <div>
                        <p className='text-center text-xl mx-10 mb-1 leading-none pb-5 max-w-4xl'>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className='grid grid-cols-3 max-w-3xl rounded mx-auto'>
                        <input type="email" className=' text-lg p-4 col-span-2 ' placeholder='Email address'/>
                        <button className=' bg-red-600 px-6 py-4 w-full text-3xl '> Get started ></button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='footer text-white text-sm opacity-30 pt-16 px-11 m-auto w-full max-w-5xl'>
                    <div className='mx-auto '>
                    <div className='flex flex-col '>
                        <p className='mb-7 hover:cursor-pointer hover:underline'>Questions? Contact us.</p>
                        <div className='w-full grid grid-cols-4'>
                        <div className=' space-y-2'>
                            <p className='hover:cursor-pointer hover:underline'>FAQ</p>
                            <p className='hover:cursor-pointer hover:underline'>Investor Relations</p>
                            <p className='hover:cursor-pointer hover:underline'>Privacy</p>
                            <p className='hover:cursor-pointer hover:underline'>Speed Test</p>
                        </div>
                        <div className=' space-y-2'>
                            <p className='hover:cursor-pointer hover:underline'>Help Center</p>
                            <p className='hover:cursor-pointer hover:underline'>Jobs</p>
                            <p className='hover:cursor-pointer hover:underline'>Cookie Preferences</p>
                            <p className='hover:cursor-pointer hover:underline'>Legal Notices</p>
                        </div>
                        <div className=' space-y-2'>
                            <p className='hover:cursor-pointer hover:underline'>Account</p>
                            <p className='hover:cursor-pointer hover:underline'>Ways to Watch</p>
                            <p className='hover:cursor-pointer hover:underline'>Corporate Information</p>
                            <p className='hover:cursor-pointer hover:underline'>Only on Netflix</p>
                        </div>
                        <div className=' space-y-2'>
                            <p className='hover:cursor-pointer hover:underline'>Media Center</p>
                            <p className='hover:cursor-pointer hover:underline'>Terms of Use</p>
                            <p className='hover:cursor-pointer hover:underline'>Contact Us</p>
                        </div>
                        </div>
                        <p className='mt-8 mb-5'>Netflix Nigeria</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Landingpage