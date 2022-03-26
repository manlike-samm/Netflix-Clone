/*import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios'

const netflixApiHeaders = {
    'x-rapidapi-host': 'unogsng.p.rapidapi.com',
    'x-rapidapi-key': '24d8daeae1mshf8275614b9b1445p1ca270jsnfdcfedc41462',
};

const baseURL = 'https://unogsng.p.rapidapi.com'

const options = {
    method: 'GET',
    url: 'https://unogsng.p.rapidapi.com/countries',
    headers: {
      'x-rapidapi-host': 'unogsng.p.rapidapi.com',
      'x-rapidapi-key': '24d8daeae1mshf8275614b9b1445p1ca270jsnfdcfedc41462'
    }
  };

//const createRequest = (url) => ({ baseURL, headers: netflixApiHeaders });

export const netflixApi = createApi({
    reducerPath: 'netflixApi',
    baseQuery: fetchBaseQuery({ baseURL }),
    endpoints: (builder) => ({
      getGenres: builder.query({
        query:axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        })
      }),
    }),
});

export const {
    useGetGenresQuery, 
} = netflixApi; 

/*var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://unogsng.p.rapidapi.com/genres',
  headers: {
    'x-rapidapi-host': 
    'x-rapidapi-key': ''
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
*/
