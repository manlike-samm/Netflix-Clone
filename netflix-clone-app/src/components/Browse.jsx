import React from 'react';

import BrowseTemplate from './BrowseTemplate';
import NetflixOriginals from './NetflixOriginals';
import Banner from './Banner';
import NavBar from './NavBar';

import requests from '../services/request'

const Browse = () => {
  return (
    <>
        <div className='bg-black text-white '>
            <div className='grid'>
                <NavBar />
                <Banner />
                <NetflixOriginals title='netflix originals' fetchUrl={requests.fetchNetflixOriginals} />
                <BrowseTemplate title='top rated' fetchUrl={requests.fetchTopRated}  />
                <BrowseTemplate title='action movies' fetchUrl={requests.fetchActionMovies} />
                <BrowseTemplate title='comedy movies' fetchUrl={requests.fetchComedyMovies} />
                <BrowseTemplate title='Popular movies' fetchUrl={requests.fetchPopular} />
            </div>
        </div>    
    </>
  )
}

export default Browse