import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL

export const fetchCryptoPrice = async (symbol) => {
    try {
        const response = await axios.get(`${API_URL}/price/${symbol}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching price:', error);
        return null;
    }
};

export const fetchCryptoPriceHistory = async (symbol) => {
    try {
        const response = await axios.get(`${API_URL}/price/${symbol}/history`);
        return response.data;
    } catch (error) {
        console.error('Error fetching price:', error);
        return null;
    }
};