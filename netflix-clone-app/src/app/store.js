/*import { configureStore } from '@reduxjs/toolkit';

import { netflixApi } from '../services/netflixApi'
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore ({
    reducer: {
        [netflixApi.reducerPath]: netflixApi.reducer,
    },
    middleware:(getDefaultMiddlware)=>
    getDefaultMiddlware().concat(netflixApi.middleware)
}) 

setupListeners(store.dispatch);

export default store;*/