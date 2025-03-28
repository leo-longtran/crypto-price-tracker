const PriceDisplay = ({ data }) => {
    if (!data) return <p></p>;
    return <div className="price-display">{data.symbol.toUpperCase()}: ${data.price.toLocaleString()}</div>;
};

export default PriceDisplay;
