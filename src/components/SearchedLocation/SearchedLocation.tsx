import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const SearchedLocation = () => {
    const weatherData = useSelector(
        (state: RootState) => state.weatherData.weatherData
    );

    return (
        <div>
            {/* <div>
                {weatherData?.name ? (
                    <p className="text-center border-b pb-5 mt-5 text-6xl font-bold text-black dark:text-white ml-2">
                        {weatherData.name}
                    </p>
                ) : null}
            </div> */}
            <div className="flex justify-center gap-5 pt-5">
                {weatherData?.coord?.lat && <p className="font-bold">Lat: {weatherData.coord.lat}</p>}
                {weatherData?.coord?.lon && <p className="font-bold">Lon: {weatherData.coord.lon}</p>}
            </div>
        </div>
    );
};

export default SearchedLocation;
