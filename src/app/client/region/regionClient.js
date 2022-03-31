import axios from 'axios';

const getWeatherInfoByRegion = async (region) => {
    const { data } = await axios.get(`${process.env.VITE_API_BASE_URL}/prediccion/ccaa/hoy/${region}?api_key=${process.env.VITE_API_KEY}`);
    const { datos: infoURL } = data;

    const { data: textInfo} = await axios.get(infoURL);

    return textInfo;
}

const regionClient = {
    getWeatherInfoByRegion,
}

export { regionClient };