import React, { useState } from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState('');

  const unitsChnageHandler = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) {
      setUnits(selectedUnit);
    }
  };

  const searchClickHandler = () => {
    if (city !== '') {
      setQuery({ q: city });
    }
    setCity('');
  };

  const locationClickHandler = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
      });
    }
  };
  return (
    <div className='flex my-6 sm:flex-row sm:justify-center items-center flex-col '>
      <div className='flex justify-center items-center space-x-4 sm:w-3/4 sm:my-0 my-2'>
        <input
          type='text'
          value={city}
          onChange={(event) => setCity(event.target.value)}
          placeholder='search for cities...'
          className='sm:w-[70%] w-[60%] p-2 focus:outline-none capitalize text-xl font-light placeholder:lowercase'
        />
        <UilSearch
          color={'white'}
          className='cursor-pointer transition ease-out hover:scale-125'
          onClick={searchClickHandler}
        />
        <UilLocationPoint
          color={'white'}
          className='cursor-pointer transition ease-out hover:scale-125'
          onClick={locationClickHandler}
        />
      </div>
      <div className='flex flex-row justify-center w-1/4 items-center text-white'>
        <button
          name='metric'
          className='text-xl font-light hover:scale-125 transition ease-out'
          onClick={unitsChnageHandler}
        >
          °C
        </button>
        <p className='mx-1'>|</p>
        <button
          name='imperial'
          className='text-xl font-light hover:scale-125 transition ease-out'
          onClick={unitsChnageHandler}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
