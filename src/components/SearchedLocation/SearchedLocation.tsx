import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const SearchedLocation = () => {
    const weatherData = useSelector(
        (state: RootState) => state.weatherData.weatherData
    );

    return (
        <div>
            <div className="flex justify-center gap-5 pt-5">
                {weatherData?.coord?.lat && <p className="font-bold">Lat: {weatherData.coord.lat}</p>}
                {weatherData?.coord?.lon && <p className="font-bold">Lon: {weatherData.coord.lon}</p>}
            </div>
        </div>
    );
};

export default SearchedLocation;
