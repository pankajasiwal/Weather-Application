import React from 'react';

function TopButtons({ setQuery }) {
  const cities = [
    { id: 1, title: 'London' },
    { id: 2, title: 'Sydney' },
    { id: 3, title: 'Tokyo' },
    { id: 4, title: 'Toronto' },
    { id: 5, title: 'Paris' },
  ];
  return (
    <div className='flex sm:justify-around items-center flex-wrap sm:flex-nowrap gap-4 sm:gap-0 justify-center'>
      {cities.map((citie) => (
        <button key={citie.id} className='text-lg text-white font-medium' onClick={() => setQuery({ q: citie.title })}>
          {citie.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
