import { useState } from 'react';
import CryptoInput from './components/CryptoInput';
import PriceDisplay from './components/PriceDisplay';
import PriceChart from './components/PriceChart';
import './styles/App.css';
import './styles/components.css';
import {fetchCryptoPrice, fetchCryptoPriceHistory} from './api';

const App = () => {
    const [priceData, setPriceData] = useState(undefined);
    const [priceHistoryData, setPriceHistoryData] = useState(undefined);

    const handleSearch = async (symbol) => {
        const priceData = await fetchCryptoPrice(symbol);
        const historyData = await fetchCryptoPriceHistory(symbol);
        setPriceData(priceData);
        setPriceHistoryData(historyData);
    };

    console.log('priceData:', priceData);
    console.log('priceHistoryData:', priceHistoryData);


    return (
        <div className="container">
            <h1>Crypto Price Tracker</h1>
            <CryptoInput onSearch={handleSearch} />
            <PriceDisplay data={priceData} />
            <PriceChart data={priceHistoryData} />
        </div>
    );
};

export default App;
