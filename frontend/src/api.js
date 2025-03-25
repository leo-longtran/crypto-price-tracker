import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchCryptoPrice = async (symbol) => {
    try {
        const response = await axios.get(`${API_URL}/price/${symbol}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching price:', error);
        return null;
    }
};