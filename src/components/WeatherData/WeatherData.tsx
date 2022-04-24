import styles from './WeatherData.module.css';
import { WeatherDataType } from '../../types/weatherdata';
import { kelvinToCelsius } from '../../utils/helpers/kelvinToCelsius';
import { useEffect, useState } from 'react';
import BasicCard from '../BasicCard/BasicCard';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const WeatherData = () => {
    const weatherData = useSelector(
        (state: RootState) => state.weatherData.weatherData
    );

    const [tempInC, setTempInC] = useState<null | number>(null);
    const [windSpeed, setWindSpeed] = useState<null | number>(null);
    const [feelsLike, setFeelsLike] = useState<null | number>(null);
    const [tempMin, setTempMin] = useState<null | number>(null);
    const [tempMax, setTempMax] = useState<null | number>(null);
    const [pressure, setPressure] = useState<null | number>(null);
    const [humidity, setHumidity] = useState<null | number>(null);

    useEffect(() => {
        if (weatherData) {
            const { temp, feels_like, temp_min, temp_max, pressure, humidity } =
                (weatherData as WeatherDataType).main;
            const { speed } = (weatherData as WeatherDataType).wind;

            setTempInC(kelvinToCelsius(temp));
            setWindSpeed(Number((speed * 3.6).toFixed(2)));
            setFeelsLike(kelvinToCelsius(feels_like));
            setTempMin(kelvinToCelsius(temp_min));
            setTempMax(kelvinToCelsius(temp_max));
            setPressure(pressure);
            setHumidity(humidity);
        }
    }, [weatherData]);

    return (
        <div
            className={cn(
                styles.weatherData,
                'py-5',
                'grid',
                'grid-cols-4',
                'gap-5'
            )}
        >
            {tempInC && (
                <BasicCard
                    title="Temperature"
                    mainData={<span>{tempInC}&deg;C</span>}
                />
            )}

            {feelsLike && (
                <BasicCard
                    title="Feels like"
                    mainData={<span>{feelsLike}&deg;C</span>}
                />
            )}

            {tempMin && (
                <BasicCard
                    title="Minimum temperature"
                    mainData={<span>{tempMin}&deg;C</span>}
                />
            )}

            {tempMax && (
                <BasicCard
                    title="Maximum temperature"
                    mainData={<span>{tempMax}&deg;C</span>}
                />
            )}

            {windSpeed && (
                <BasicCard
                    title="Wind speed"
                    mainData={<span>{windSpeed} km/h</span>}
                />
            )}

            {pressure && (
                <BasicCard
                    title="Pressure"
                    mainData={<span>{pressure}hPa</span>}
                />
            )}

            {humidity && (
                <BasicCard
                    title="Humidity"
                    mainData={<span>{humidity}%</span>}
                />
            )}
        </div>
    );
};

export default WeatherData;
