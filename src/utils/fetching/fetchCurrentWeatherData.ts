import { OPEN_WEATHER_MAP_API_KEY } from "../../api";

/**
 * Fetch weather data for given location at current time
 * @param location
 * @returns {Promise<any>}
 */

export const fetchCurrentWeatherData = async (location: string) => {
    const res = await fetch(
        `https://cors-everywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${OPEN_WEATHER_MAP_API_KEY}`
    );

    return res;
}