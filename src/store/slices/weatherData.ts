import { createSlice } from '@reduxjs/toolkit';
import { WeatherDataType } from '../../types/weatherdata';

interface initialState {
    weatherData: null | WeatherDataType;
}

const initialState: initialState = {
    weatherData: null,
};

export const weatherData = createSlice({
    name: 'weatherData',
    initialState,
    reducers: {
        setWeatherData: (state, action) => {
            state.weatherData = action.payload;
        },
    },
});

export const { setWeatherData } = weatherData.actions;

export default weatherData.reducer;
