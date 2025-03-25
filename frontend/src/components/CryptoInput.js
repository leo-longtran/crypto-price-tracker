const CryptoInput = ({ onSearch }) => {
    const handleSearch = () => {
        const symbol = document.getElementById("crypto-symbol").value.toUpperCase();
        if (symbol) onSearch(symbol);
    };

    return (
        <div className="crypto-input">
            <input id="crypto-symbol" type="text" placeholder="Enter crypto symbol (e.g., BTC)" />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default CryptoInput;