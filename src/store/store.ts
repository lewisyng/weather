import {configureStore} from "@reduxjs/toolkit";
import weatherData from './slices/weatherData';

export const store = configureStore({
    reducer: {
        weatherData
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch