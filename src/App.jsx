import React, { useEffect, useState } from 'react';
import { regionClient } from './app/client/region';
import { REGION_CONSTANTS } from './app/domain/region';
import { Selector } from './components/selector';
import './App.css';

function App() {
  const { REGION_NAME } = REGION_CONSTANTS;

  const [info, setInfo] = useState(null);
  const [region, setRegion] = useState('and');

  const getWeatherInfo = async () => {
    const retrievedInfo = await regionClient.getWeatherInfoByRegion(region);
    setInfo(retrievedInfo.replace(/\n/g, '<br>'));
  };

  const handleRegionSelect = ({ target }) => {
    const { value } = target;
    setRegion(value);
  };

  useEffect(() => {
    getWeatherInfo();
  }, [region]);

  return (
    <div className="App">
      <h1>Weather</h1>
      <Selector
        label="Comunidad:"
        options={REGION_NAME}
        onChange={handleRegionSelect}
      />
      {
                info && <p dangerouslySetInnerHTML={{ __html: info }} />
        }
    </div>
  );
}
export default App;
