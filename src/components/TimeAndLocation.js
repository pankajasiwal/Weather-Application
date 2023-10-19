import React from 'react';
import { formatToLocalTime } from '../services/WeatherService';

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className='text-center text-white font-extralight'>
        <p>{formatToLocalTime(dt, timezone)}</p>
      </div>
      <div className='text-center text-white font-medium text-3xl mt-5'>
        <p>{`${name},${country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
