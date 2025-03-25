const PriceDisplay = ({ data }) => {
    return <div className="price-display">{data.symbol}: ${data.price.toLocaleString()}</div>;
};

export default PriceDisplay;
