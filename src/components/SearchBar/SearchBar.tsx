import cn from 'classnames';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiKey } from '../../api';
import { setWeatherData } from '../../store/slices/weatherData';
import { RootState } from '../../store/store';

export const SearchBar = () => {
    const weatherData = useSelector(
        (state: RootState) => state.weatherData.weatherData
    );

    const dispatch = useDispatch();

    const [search, setSearch] = useState('');

    const fetchWeather = async (e: React.FormEvent) => {
        e.preventDefault();

        if (search !== '') {
            const res = await fetch(
                `https://cors-everywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`
            );
            const json = await res.json();
            if (json.cod === 200) {
                dispatch(setWeatherData(json));
            }
        }
    };

    return (
        <form onSubmit={fetchWeather}>
            <input
                type="text"
                className={cn(
                    'block',
                    'w-full',
                    'text-center',
                    'py-4',
                    'focus:placeholder-transparent',
                    'text-5xl',
                    'leading-5',
                    'font-bold',
                    'text-gray-700',
                    'bg-white',
                    'bg-clip-padding',
                    'border-b',
                    'border-solid',
                    'transition',
                    'ease-in-out',
                    'focus:text-gray-700',
                    'focus:bg-white',
                    'focus:border-blue-600',
                    'focus:outline-none'
                )}
                placeholder="Search for a location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* <button
                type="submit"
                className={cn(
                    'rounded-r-lg',
                    'text-gray-700',
                    'font-bold',
                    'p-2',
                    'border-r',
                    'border-t',
                    'border-b',
                    'border-solid',
                    'border-gray-300',
                )}
            >
                Search
            </button> */}
        </form>
    );
};
