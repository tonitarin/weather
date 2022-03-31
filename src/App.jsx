import React, { useEffect, useState } from 'react';
import { regionClient } from './app/client/region';
import { REGION_CONSTANTS } from './app/domain/region';
import './App.css'

const App = () => {
    const { REGION_CODE, REGION_NAME} = REGION_CONSTANTS;
    const regionsCodes = Object.values(REGION_CODE);

    const [ info, setInfo ] = useState(null)
    const [ region, setRegion ] = useState('and');

    const getWeatherInfo = async () => {
        const info = await regionClient.getWeatherInfoByRegion(region);
        setInfo(info.replace(/\n/g, "<br>"));
    }

    const handleRegionSelect = ({ target }) => {
        const { value } = target;
        setRegion(value);
    }

    useEffect(() => {
        getWeatherInfo();
    }, [region])

    return (
        <div className="App">
            <h1>INFO METEOROLOGICA</h1>
            <label>
                Comunidad:
                <select onChange={handleRegionSelect}>
                    {
                        regionsCodes
                            .map(regionKey =>
                                <option
                                    key={regionKey}
                                    value={regionKey}
                                >
                                    {REGION_NAME[regionKey]}
                                </option>
                            )
                    }
                </select>
            </label>
            {
                info && <p dangerouslySetInnerHTML={{__html: info}}></p>
            }
        </div>
    );
}
export default App
