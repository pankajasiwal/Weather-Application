import './App.css';
import getFormattedWeatherData from './services/WeatherService';
import Forcast from './components/Forcast';
import Inputs from './components/Inputs';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import { useEffect, useState } from 'react';

function App() {
  const [query, setQuery] = useState({ q: 'berlin' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);
  console.log(weather);

  return (
    <div className='max-w-screen-md bg-gradient-to-br from-cyan-700 to-blue-800 md:px-32 py-6 mx-auto mt-5 shadow-xl'>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forcast title='hourely forecast' />
          <Forcast title='daily forecast' />
        </>
      )}
    </div>
  );
}

export default App;
