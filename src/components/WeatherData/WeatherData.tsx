import styles from './WeatherData.module.css';
import { WeatherDataType } from '../../types/weatherdata';
import { kelvinToCelsius } from '../../utils/helpers/kelvinToCelsius';
import { useEffect, useState } from 'react';
import BasicCard from '../BasicCard/BasicCard';
import cn from 'classnames';

export const WeatherData = ({
    weatherData,
}: {
    weatherData: WeatherDataType;
}) => {
    const { temp } = weatherData.main;
    const { speed } = weatherData.wind;

    const [tempInC, setTempInC] = useState<null | number>(null);
    const [windSpeed, setWindSpeed] = useState<null | number>(null);

    useEffect(() => {
        if (temp) {
            setTempInC(kelvinToCelsius(temp));
        }
        if (speed) {
            setWindSpeed(Number((speed * 3.6).toFixed(2)));
        }
    }, [temp, speed]);

    return (
        <div className={cn(styles.weatherData, 'py-5')}>
            {tempInC && <BasicCard title="Temperature" mainData={tempInC} />}
            {windSpeed && <BasicCard title="Wind" mainData={windSpeed} />}
            {windSpeed && <BasicCard title="Wind" mainData={windSpeed} />}
            {windSpeed && <BasicCard title="Wind" mainData={windSpeed} />}
            {windSpeed && <BasicCard title="Wind" mainData={windSpeed} />}
        </div>
    );
};

export default WeatherData;
