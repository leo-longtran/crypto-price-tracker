import { useState } from 'react';
import CryptoInput from './components/CryptoInput';
import PriceDisplay from './components/PriceDisplay';
import PriceChart from './components/PriceChart';
import './styles/App.css';
import './styles/components.css';

const fakeDefaultData = {
    symbol: 'BTC',
    price: 50000,
};

const App = () => {
    const [cryptoData, setCryptoData] = useState(fakeDefaultData);

    const handleSearch = async (symbol) => {
        const data = {
            symbol,
            price: 55000 + Math.random() * 5000,
        };
        setCryptoData(data);
    };

    return (
        <div className="container">
            <h1>Crypto Price Tracker</h1>
            <CryptoInput onSearch={handleSearch} />
            <PriceDisplay data={cryptoData} />
            <PriceChart data={cryptoData} />
        </div>
    );
};

export default App;
