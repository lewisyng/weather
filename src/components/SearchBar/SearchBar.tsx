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
        <form className="m-4 flex" onSubmit={fetchWeather}>
            <input
                className={cn(
                    'rounded-l-lg',
                    'p-4',
                    'border-t',
                    'mr-0',
                    'border-b',
                    'border-l',
                    'text-gray-800',
                    'border-gray-200',
                    'bg-white'
                )}
                placeholder="Search for a location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <button
                type="submit"
                className={cn(
                    'px-8',
                    'rounded-r-lg',
                    'bg-yellow-400',
                    'text-gray-800',
                    'font-bold',
                    'p-4',
                    'uppercase',
                    'border-yellow-500',
                    'border-t',
                    'border-b',
                    'border-r'
                )}
            >
                Search
            </button>
        </form>
    );
};
