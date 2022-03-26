import React, { useState, useEffect } from 'react'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

import axios from '../services/axios'

const base_url = 'https://image.tmdb.org/t/p/original/'

const BrowseTemplate = ({title, fetchUrl, isScreenSmall}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    const handleClick = (movie) => {
      if (trailerUrl) {
        setTrailerUrl('')
      } else{
        movieTrailer(movie?.title || movie?.original_title || "") 
        .then(url => {
          const urlParams =new URLSearchParams(new URL(url).search) ;
          setTrailerUrl(urlParams.get('v'));

        }).catch(err => console.log(err.message));
      }
    }

    useEffect(() => {
    
      async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results)
        return request;

      }
      fetchData()
    }, [fetchUrl]); 
    
    const opts = {
      height: '390',
      width: '90%',
      playerVars: {

        autoplay: 1,
      }
    }
    

  return (
    <>
      <div className='topRated tab:mx-5 '>
          <p className='capitalize tab:text-3xl p-1 tab:p-2 font-semibold'>{title}</p>
          <div className='scrollbar flex items-center justify-start mx-1 tab:mx-14 overflow-y-hidden overflow-x-scroll tab:p-5'>
            {movies.map((movie)=> (
                <img 
                  key={movie.id} 
                  onClick={() => handleClick(movie)}
                  src={`${base_url}${movie.backdrop_path || movie.poster_path}`} 
                  alt="movie poster"  
                  className='tab:aspect-video h-16 tab:h-28 pr-3 tab:pr-4 hover:scale-110 hover:cursor-pointer transition ease-in duration-300'/>
            ))}
          </div>
          {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} className='mx-auto' autoplay />}
      </div>
    </>
  )
}

export default BrowseTemplate;