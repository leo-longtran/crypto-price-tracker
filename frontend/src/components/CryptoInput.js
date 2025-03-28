const CryptoInput = ({ onSearch }) => {
  const handleSearch = () => {
    const symbol = document.getElementById("crypto-symbol").value.toLowerCase();
    if (symbol) onSearch(symbol);
  };

  return (
    <div className="crypto-input">
      <input
        id="crypto-symbol"
        type="text"
        placeholder="Enter crypto name (e.g., Bitcoin, Ethereum)"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default CryptoInput;
