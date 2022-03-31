import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css'

const App = () => {
    const [ info, setInfo] = useState(null)
    const getWeatherInfo = async () => {
       const { data } = await axios.get(`${process.env.VITE_API_BASE_URL}/prediccion/ccaa/hoy/val?api_key=${process.env.VITE_API_KEY}`);
       const { datos: infoURL } = data;

       const { data: textInfo} = await axios.get(infoURL);

       setInfo(textInfo)
    }
    useEffect(() => {
        getWeatherInfo();
    }, [])

    return (
        <div className="App">
            <h1>INFO METEOROLOGICA</h1>
            {
                info && info
            }
        </div>
    );
}
export default App
