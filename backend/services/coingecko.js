const axios = require('axios');
const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/simple/price';

const getCurrentPrice = async (symbol) => {
    try {
        const response = await axios.get(`${COINGECKO_API_URL}?ids=${symbol}&vs_currencies=usd`);
        return response.data[symbol]?.usd || null;
    } catch (error) {
        console.error('Error fetching price:', error);
        return null;
    }
};

module.exports = { getCurrentPrice };
