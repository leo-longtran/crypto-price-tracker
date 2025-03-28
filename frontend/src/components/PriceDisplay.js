const PriceDisplay = ({ data }) => {
    if (!data) return <p></p>;
    var name = data.symbol.toLowerCase();
    var capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    return <div className="price-display">Current price of {capitalizedName}: {data.price.toLocaleString()}$</div>;
};

export default PriceDisplay;
