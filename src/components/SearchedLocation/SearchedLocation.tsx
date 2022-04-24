import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { WeatherDataType } from '../../types/weatherdata';

export const SearchedLocation = () => {
    const weatherData = useSelector(
        (state: RootState) => state.weatherData.weatherData
    );

    return (
        <div>
            <div className="flex justify-center gap-5 pt-5">
                {(weatherData as WeatherDataType)?.coord?.lat && <p className="font-bold">Lat: {(weatherData as WeatherDataType).coord.lat}</p>}
                {(weatherData as WeatherDataType)?.coord?.lon && <p className="font-bold">Lon: {(weatherData as WeatherDataType).coord.lon}</p>}
            </div>
        </div>
    );
};

export default SearchedLocation;
