import React from 'react';
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from '@iconscout/react-unicons';
import { iconUrlFromCode, formatToLocalTime } from '../services/WeatherService';

function TemperatureAndDetails({
  weather: { details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, feels_like, timezone, humidity },
}) {
  return (
    <div>
      <div className='text-center py-6'>
        <p className='text-cyan-400'>{details}</p>
      </div>

      <div className='flex flex-row items-center justify-between text-white p-3.5'>
        <img src={iconUrlFromCode(icon)} alt='weather-condition' className='w-20' />
        <p className='text-5xl'>{`${temp.toFixed()}°`}</p>
        <div className='flex flex-col space-y-2'>
          <div className='flex font-light text-sm items-center justify-center space-x-1'>
            <UilTemperature size={18} /> Real fell: <span>{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center space-x-1'>
            <UilTear size={18} /> Humidity: <span>{`${humidity.toFixed()}%`}</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center space-x-1'>
            <UilWind size={18} /> Wind: <span>{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap sm:flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
        <UilSun />
        <p className='font-light'>
          Rise: <span className='font-medium'>{formatToLocalTime(sunrise, timezone, 'hh:mm a')}</span>
        </p>
        <p className='font-light'>|</p>

        <UilSunset />
        <p className='font-light'>
          Set: <span className='font-medium'>{formatToLocalTime(sunset, timezone, 'hh:mm a')}</span>
        </p>
        <p className='font-light'>|</p>

        <UilArrowUp />
        <p className='font-light'>
          High: <span className='font-medium'>{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className='font-light'>|</p>

        <UilArrowDown />
        <p className='font-light'>
          Low: <span className='font-medium'>{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
