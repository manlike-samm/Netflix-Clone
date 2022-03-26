import React from 'react'
import {Link} from 'react-router-dom';

import netflixKids from '.././images/netflix-kids.png'



const Landingpage = () => {

  return (
    <>
        <div className='flex flex-col transition-all duration-500'>
            <div className='pg1 '>
                <div className='bg-opacity-70 bg-black h-fit px-2 mobileL:p-4 border-b-8 border-gray-500 border-opacity-30 '>
                    <div className=' flex flex-row items-center justify-between pt-1 h-16 mx-4 bp2:mx-10'>
                        <Link to="/"><img src='https://upload.wikimedia.org/wikipedia/commons/e/ef/NETFLIX_logo.svg' alt="netflix-logo" className="w-24 h-16 hover:cursor-pointer"/></Link>
                        <Link to='/signin'> <button className=' bg-red-600 text-white text-sm px-4 py-1 font-medium rounded'>Sign In</button></Link>
                    </div>
                    <div className='flex flex-col items-center text-center text-white max-w-4xl py-14 bp2:py-36 bp2:px-11 space-y-4 scale-95 mobileL:scale-100 mx-auto'>
                        <p className='text-3xl bp2:text-5xl font-semibold bp2:font-bold max-w-xl mobileL:mx-6 bp2:mx-1'> Unlimited movies, TV shows, and more.</p>
                        <p className='my-6 text-lg bp2:text-2xl font-normal'>Watch anywhere. Cancel anytime.</p>
                        <p className='text-center text-lg bp2:text-2xl bp3:text-lg mobileL:mx-12 bp2:mx-10 bp3:my-6 font-normal leading-tight bp3:leading-none max-w-lg bp3:max-w-xl '>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className=' flex flex-col bp3:grid bp3:grid-cols-3 max-w-xl bp3:max-w-2xl rounded mx-4 bp3:m-0 mb-3 w-full'>
                            <input type="email" className=' text-lg mobileL:text-base bp3:text-lg text-black p-3 mobileL:py-3 bp3:p-3 w-full  bp3:max-w-none bp2:w-11/12 bp3:w-full bp2:m-auto bp3:m-0 col-span-2 ' placeholder='Email address'/>
                            <button className=' text-lg bp3:text-3xl bg-red-600 px-3 py-2 bp3:px-6 bp3:py-3 mt-3 w-fit bp3:w-full mx-auto bp3:m-0'> Get started ></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-white py-14 px-1 mobileL:px-4 bp4:px-11 border-b-8 border-gray-500 border-opacity-30 max-h-fit'>
                <div className='flex flex-col bp3:grid bp3:grid-cols-2 items-center m-auto max-w-6xl'>
                    <div className='text-center font-semibold bp3:text-left px-7 bp3:px-12 scale-110 bp3:scale-100'>
                        <p className=' text-2xl bp2:text-4xl bp3:text-5xl'> Enjoy on your TV. </p>
                        <p className=' mt-3 bp2:text-lg bp2:mx-10 bp3:mx-0 leading-tight bp3:text-2xl'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div>
                    <div className='mt-2 bp3:-my-10 flex flex-row'>
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" className=' px-5 bp3:px-0 z-30' />
                        <div className='absolute mt-7 mobileL:mt-11 bp2:mt-20 bp2:px-4 mx-10 mobileL:mx-12 bp2:mx-14 z-20' >
                            <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" className=' aspect-video pl-4 bp2:pl-5 bp3:px-0 pr-4' type="video/mp4" autoPlay muted loop ></video>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-white py-12 px-5 bp2:py-20 bp2:px-11 border-b-8 border-gray-500 border-opacity-30'>
                <div className='bp3:grid bp3:grid-cols-2 flex flex-col items-center m-auto max-w-6xl'>
                    <div className='bp3:order-last text-center bp3:text-left leading-tight bp3:leading-none'>
                        <p className='text-2xl bp2:text-4xl bp3:text-5xl font-semibold pr-6'>Download your shows to watch offline. </p>
                        <p className='text-lg bp2:text-xl bp3:text-2xl mt-2 bp3:mt-5 pt-1 mobileL:mx-3 bp3:mx-0 bp3:pr-6 leading-tight'>Save your favorites easily and always have something to watch.</p>
                    </div>
                    <div className='flex flex-col items-center mb-2 bp3:mb-5 relative bp3:-my-12 bp3:pr-24'>
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" className='' />
                        <div className='flex flex-row justify-between absolute h-14 w-4/5 mobileL:w-2/3 bp3:w-1/2 bottom-3 mobileL:bottom-5 bg-black border rounded-lg items-center px-3 py-1 ' >
                            <div className='flex flex-row'>
                                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" className='w-8 h-11 self-center' />
                                <div className='text-left text-xs col-span-2 ml-3 my-1 py-3 leading-4'>
                                    <p className='font-medium'>Stranger Things</p>
                                    <p className='text-blue-400 '>Downloading...</p>
                                </div>
                            </div>
                            <i className="fa-solid fa-download pl-6 bp4:mr-6"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-white py-12 px-5 bp2:py-20 bp2:px-11 border-b-8 border-gray-500 border-opacity-30'>
                <div className='bp3:grid bp3:grid-cols-2 items-center m-auto max-w-6xl leading-none'>
                    <div className='bp3:order-first mobileL:font-semibold bp3:pr-5 bp3:ml-6 bp3:-my-10 text-center bp3:text-left scale-105'>
                        <p className=' text-2xl bp2:text-4xl bp3:text-5xl font-semibold'>Watch everywhere. </p>
                        <p className=' text-lg bp2:text-xl bp3:text-2xl mt-2 leading-5 pb-8'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                </div>
            </div>
            <div className='text-white py-12 px-5 bp2:py-20 bp2:px-11 border-b-8 border-gray-500 border-opacity-30'>
                <div className='bp3:grid bp3:grid-cols-2 items-center mx-auto max-w-6xl'>
                    <div className='text-center bp3:text-left mobileL:mx-1 bp3:order-last bp3:pl-8 bp3:scale-110'>
                        <p className=' text-2xl bp2:text-4xl bp3:text-5xl scale-110 bp3:scale-100 font-semibold '>Create profiles for kids.</p>
                        <p className=' text-lg bp2:text-xl bp3:text-2xl mt-2 bp3:mt-5 leading-6 bp3:leading-tight pr-5'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                    </div>
                    <div className=' bp3:-my-10 py-4'>
                        <img src={netflixKids} alt="" className='' />
                    </div>
                </div>
            </div>
            <div className=' flex border-b-8 border-gray-500 border-opacity-30'>
                <div className='flex-col items-center text-white w-full max-w-4xl py-12 mx-auto'>
                    <p className='text-center text-3xl bp2:text-5xl scale-90 font-medium'>Frequently Asked Questions</p>
                    <div className='grid grid-cols-1 py-5 text-lg bp2:text-xl bp3:text-2xl bp2:max-w-xl bp3:max-w-2xl mx-auto'>
                        <div>
                            <div className='flex flex-row justify-between bg-neutral-700 px-6 py-3 mb-2 relative'>
                                <p className=''>What is netflix?</p>
                                <span className="material-icons absolute top-4 right-5 rotate-45 ">close</span>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-row justify-between bg-neutral-700 px-6 py-3 mb-2 relative'>
                                <p className=''>How much does Netflix cost?</p>
                                <span className="material-icons absolute top-4 right-5 rotate-45 ">close</span>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-row justify-between bg-neutral-700 px-6 py-3 mb-2 relative'>
                                <p className=''>Where can I watch?</p>
                                <span className="material-icons absolute top-4 right-5 rotate-45 ">close</span>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-row justify-between bg-neutral-700 px-6 py-3 mb-2 relative'>
                                <p className=''>How do i cancel?</p>
                                <span className="material-icons absolute top-4 right-5 rotate-45 ">close</span>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-row justify-between bg-neutral-700 px-6 py-3 mb-2 relative'>
                                <p className=''>What can I watch on Netflix?</p>
                                <span className="material-icons absolute top-4 right-5 rotate-45 ">close</span>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-row justify-between bg-neutral-700 px-6 py-3 mb-2 relative'>
                                <p className=''>Is Netflix good for kids?</p>
                                <span className="material-icons absolute top-4 right-5 rotate-45 ">close</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className='flex flex-col items-center  '>
                        <p className='text-center scale-95 text-xl mx-7 mobileL:mx-12 mobileL:font-semibold bp4:mb-1 leading-tight pb-3 max-w-lg'>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className='bp3:grid bp3:grid-cols-3 flex flex-col items-center max-w-3xl bp2:max-w-lg w-full bp2:w-11/12 bp2:m-auto mx-auto'>
                            <input type="email" className='text-sm bp3:text-lg px-2 py-3 bp3:col-span-2 w-11/12 bp3:w-full ' placeholder='Email address'/>
                            <button className='text-lg bp3:text-xl bg-red-600 px-3 py-2 bp3:px-6 bp3:py-3 mt-3 w-fit bp3:w-full mx-auto bp3:m-0'> Get started ></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer text-white text-sm opacity-30 pt-16 px-3 bp2:pt-20 bp2:px-11 m-auto w-full max-w-5xl'>
                <div className='mx-auto w-10/12 '>
                    <div className='flex flex-col '>
                        <p className='mb-7 hover:cursor-pointer hover:underline'>Questions? Contact us.</p>
                        <div className='w-full grid grid-cols-2 bp2:grid-cols-4 space-y-2'>
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