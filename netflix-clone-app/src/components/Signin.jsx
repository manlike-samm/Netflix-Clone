import React from 'react';
import {Link} from 'react-router-dom';

const Signin = () => {
    return (
        <>
            <div className='flex flex-col pg1'>
                <div className='tab:bg-opacity-40 bg-black'>
                    <div className='h-fit px-2 tab:px-6 text-white'>
                        <div className='flex flex-row items-center justify-between '>
                            <Link to="/"><img src='https://upload.wikimedia.org/wikipedia/commons/e/ef/NETFLIX_logo.svg' alt="netflix-logo" className="w-20 tab:w-52 tab:p-8 tab:-mt-4 aspect-video hover:cursor-pointer" /></Link>
                        </div>
                        <div className="rounded-lg bg-black bg-opacity-70 tab:max-w-md mx-auto ">
                            <div className='px-3 py-6 tab:pt-14 tab:pb-36 tab:px-16 tab:mb-24' >
                                <p className='text-3xl font-bold mb-7'>Sign In</p>
                                <input type="email" className="form-control block w-full px-4 py-3 mb-4 bg-neutral-700 text-white rounded focus:bg-neutral-600 focus:border-neutral-600 focus:outline-none" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Email or phone number"/>
                                <input type="password" className="form-control block w-full px-4 py-3 mb-4 bg-neutral-700 text-white rounded focus:bg-neutral-600 focus:border-neutral-600 focus:outline-none" id="exampleInputPassword2" placeholder="Password"/>
                                <Link to="/whoiswatching"> <button type="submit" className=" w-full px-6 py-3.5 bg-red-600 text-white font-medium text-sm leading-tight rounded shadow-md">Sign in</button></Link>
                                <div className="flex justify-between items-center text-sm mt-1 mb-12">
                                    <div>
                                        <input type="checkbox" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 checked:bg-blue-400"/>
                                        <label className="">Remember me</label>
                                    </div>
                                    <a href="#!" className=" hover:underline">Need help?</a>
                                </div>
                                
                                <i className="fab fa-facebook-square mt-0.5 text-blue-600 mr-1 text-lg "></i><a href="#!" className=" text-sm opacity-50 hover:underline">Login with Facebook</a>
                                <p className=" mt-4 text-neutral-400">New to Netflix? <a href="#!" className="  text-white hover:underline">Sign up now.</a> </p>
                                <p className=" mt-4 opacity-80 text-sm text-neutral-400 leading-3">This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#!" className="text-blue-500 hover:underline text-base font-semibold">Learn more.</a> </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-black opacity-70'>
                        <div className='footer text-white  text-sm py-16 px-11 mx-auto w-full max-w-5xl'>
                            <div className='mx-auto'>
                            <div className='flex flex-col '>
                                <p className='mb-7 hover:cursor-pointer hover:underline'>Questions? Contact us.</p>
                                <div className='w-full grid grid-cols-4'>
                                <div className=' space-y-2'>
                                    <p className='hover:cursor-pointer hover:underline'>FAQ</p>
                                    <p className='hover:cursor-pointer hover:underline'>Cookie Preferences</p>
                                </div>
                                <div className=' space-y-2'>
                                    <p className='hover:cursor-pointer hover:underline'>Help Center</p>
                                    <p className='hover:cursor-pointer hover:underline'>Corporate Information</p>
                                </div>
                                <div className=' space-y-2'>
                                    <p className='hover:cursor-pointer hover:underline'>Terms of Use</p>
                                </div>
                                <div className=' space-y-2'>
                                    <p className='hover:cursor-pointer hover:underline'>Privacy</p>
                                </div>
                                </div>
                            </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;