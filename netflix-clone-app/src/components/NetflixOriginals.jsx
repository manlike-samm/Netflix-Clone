import React,{useEffect, useState} from 'react'
import axios from '../services/axios'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = 'https://image.tmdb.org/t/p/original'

const NetflixOriginals = ({title, fetchUrl}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    const handleClick = (movie) => {
      if (trailerUrl) {
        setTrailerUrl('')
      }else {
        movieTrailer(movie?.name || movie?.original_name || "") 
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
    <div className='netflixOriginals tab:mx-5'>
        <p className='uppercase tab:text-3xl p-1 tab:p-2 font-semibold'>{title}</p>
        <div className='scrollbar flex items-center justify-start mx-1 tab:mx-14 overflow-y-hidden overflow-x-scroll tab:p-5'>
            {movies.map((movie)=> (
                <img onClick={() => handleClick(movie)} src={`${base_url}${movie.poster_path}`} key={movie.id} alt="movie poster" className='aspect-3/4 h-28 tab:h-60 pr-2 tab:pr-4 hover:scale-110 hover:cursor-pointer transition ease-in duration-300' />
            ))}
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} className='mx-auto' />}

    </div>
  )
}

export default NetflixOriginals