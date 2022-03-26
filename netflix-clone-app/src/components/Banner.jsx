import React, {useEffect,useState} from 'react';

import axios from '../services/axios'
import requests from '../services/request';

const base_url = 'https://image.tmdb.org/t/p/original'


const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(requests.fetchActionMovies);
          setMovie(request.data.results[
              Math.floor(Math.random() * request.data.results.length -1)
          ])
          
          return request;
        }
        fetchData()
      }, []);

      console.log(movie)

      function truncate(str, n) {
          return str?.length > n ? str.substr(0, n - 1) + ' ...' : str; 
      }
    
  return (
    <>
    <div className='relative bg-neutral-900 text-white h-448 flex flex-col'>
        <div className='banner h-full opacity-20 blur-sm z-30 '
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(${base_url}/${movie?.backdrop_path})`,
            backgroundFilter: 'blur(8px)',
            backgroundPosition: '',
        }}>

        </div>
        <div className='absolute w-full z-20 opacity-100 '>
            <div className='relative ml-2 mx-10 tab:ml-7 pt-16 tab:pt-40 h-20 bg tab:h-48'>
                <div className='h-full mx-8 '
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(${base_url}/${movie?.backdrop_path})`,
                    backgroundFilter: 'blur(8px)',
                    backgroundPosition: '',
                }}>
                </div>
                <div className='absolute flex justify-around tab:hidden w-full'>
                    <p>Series</p>
                    <p>Film</p>
                    <p>Categories</p>
                </div>
                <p className='hidden tab:block text-5xl font-extrabold pb-1'>{movie?.title || movie?.name || movie?.original_name}</p>
                <div className="btns font-bold w-fit mt-2 hidden tab:block ">
                    <button className='rounded px-8 mr-4 bg-neutral-800 bg-opacity-50 hover:invert duration-500'>Play</button>
                    <button className='rounded px-8 mr-4 bg-neutral-800 bg-opacity-50 hover:invert duration-500'>My List</button>
                </div>
                <div className="(description hidden tab:block w-45 pt-4 text-sm max-w-sm h-20">
                    <p>{truncate(movie?.overview, 150)}</p>
                </div>
            </div>

        </div>
        <div className='mt-12 h-full bg-gradient-to-t from-neutral-900 to-transparent -mb-1'></div>
        
    </div>
    </>
  )
}

export default Banner;