const axios = require("axios");
const PRICE_URL = (symbol) =>
  `https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false`;
const HISTORY_URL = (symbol) =>
  `https://api.coingecko.com/api/v3/coins/${symbol}/market_chart?vs_currency=usd&days=15&interval=daily`;
const config = {
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": "CG-wq6cyWo4rnBn2p3N1Tvqptfz",
  },
};

const getCurrentPrice = async (symbol) => {
  try {
    const response = await axios.get(PRICE_URL(symbol), config);
    return response.data[symbol]?.usd || null;
  } catch (error) {
    console.error("Error fetching price:", error);
    return null;
  }
};

const getHistoryPrice = async (symbol) => {
  try {
    const response = await axios.get(HISTORY_URL(symbol), config);
    return response.data?.prices || null;
  } catch (error) {
    console.error("Error fetching history price:", error);
    return null;
  }
};

module.exports = { getCurrentPrice, getHistoryPrice };
