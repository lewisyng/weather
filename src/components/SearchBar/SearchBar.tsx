import React, { useRef, useState } from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setWeatherData } from '../../store/slices/weatherData';
import { RootState } from '../../store/store';
import { fetchCurrentWeatherData } from '../../utils/fetching/fetchCurrentWeatherData';
import { fetchForecastedWeatherData } from '../../utils/fetching/fetchForcastedWeatherData';
import { toUpperCase } from '../../utils/helpers/toUpperCase';

export const SearchBar = () => {
    const router = useRouter();
    const searchbarRef = useRef<HTMLInputElement>(null);
    const weatherData = useSelector(
        (state: RootState) => state.weatherData.weatherData
    );

    const dispatch = useDispatch();

    const [search, setSearch] = useState('');

    const fetchWeather = async (e: React.FormEvent) => {
        e.preventDefault();

        if (search !== '') {
            if (router.pathname === '/') {
                const res = await fetchCurrentWeatherData(search);
                const json = await res.json();

                if (json.cod === 200) {
                    dispatch(setWeatherData(json));

                    setSearch(() => toUpperCase(search));

                    searchbarRef.current?.blur();
                }
            } else if (router.pathname === '/forecast') {
                const res = await fetchForecastedWeatherData(search);
                const json = await res.json();

                if (json.cod === '200') {
                    dispatch(setWeatherData(json));

                    setSearch(() => toUpperCase(search));

                    searchbarRef.current?.blur();
                }
            }
        }
    };

    return (
        <form onSubmit={fetchWeather}>
            <input
                ref={searchbarRef}
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
