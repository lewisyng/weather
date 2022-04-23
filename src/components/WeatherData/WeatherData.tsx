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
    
    useEffect(() => {
        if (weatherData) {
            const { temp } = weatherData.main;
            const { speed } = weatherData.wind;

            setTempInC(kelvinToCelsius(temp));
            setWindSpeed(Number((speed * 3.6).toFixed(2)));
        }
    }, [weatherData]);

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
