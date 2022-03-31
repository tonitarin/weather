import React from 'react';
import { render, screen } from '@testing-library/react'
import axios from "axios";
import App from '../App';

jest.mock('axios')
describe('App', () => {
    beforeEach(() => {
        process.env = {
            VITE_API_BASE_URL: 'https://opendata.aemet.es/opendata/api',
            VITE_API_KEY: '123'
        }
    })
    it('should render app', async () => {
        axios.get.mockResolvedValueOnce({
            data: {
                    "descripcion": "exito",
                    "estado": 200,
                    "datos": "https://opendata.aemet.es/opendata/sh/63abfabe",
                    "metadatos": "https://opendata.aemet.es/opendata/sh/0548758c"
                }
            });
        axios.get.mockResolvedValueOnce({
            data: `
                AGENCIA ESTATAL DE METEOROLOGÍA

                PREDICCIÓN GENERAL PARA LA COMUNIDAD DE VALENCIA
            `
            });
        render(<App />);
        const title = await screen.findByText('INFO METEOROLOGICA');

        expect(title).toBeInTheDocument();
    })

    it('should render weather prevision on plain text', async () => {
        axios.get.mockResolvedValueOnce({
            data: {
                    "descripcion": "exito",
                    "estado": 200,
                    "datos": "https://opendata.aemet.es/opendata/sh/63abfabe",
                    "metadatos": "https://opendata.aemet.es/opendata/sh/0548758c"
                }
            });
        axios.get.mockResolvedValueOnce({
            data: `
                AGENCIA ESTATAL DE METEOROLOGÍA

                PREDICCIÓN GENERAL PARA LA COMUNIDAD DE VALENCIA
            `
            });
        render(<App />);
        await screen.findByText(/AGENCIA ESTATAL DE METEOROLOGÍA/);

        expect(axios.get).toHaveBeenCalledWith('https://opendata.aemet.es/opendata/api/prediccion/ccaa/hoy/val?api_key=123')
        expect(axios.get).toHaveBeenCalledWith('https://opendata.aemet.es/opendata/sh/63abfabe')
    })
})