import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PriceChart = ({ data }) => {
    if (!data) return <p>No data available</p>;

    const fakePriceHistory = [
        { time: '01/2025', price: data.price * (1 + Math.random() * 0.02 - 0.01) },
        { time: '02/2025', price: data.price * (1 + Math.random() * 0.02 - 0.01) },
        { time: '03/2025', price: data.price * (1 + Math.random() * 0.02 - 0.01) },
        { time: '04/2025', price: data.price * (1 + Math.random() * 0.02 - 0.01) },
        { time: '05/2025', price: data.price * (1 + Math.random() * 0.02 - 0.01) },
    ];

    const chartData = {
        labels: fakePriceHistory.map(item => item.time),
        datasets: [
            {
                label: `Price`,
                data: fakePriceHistory.map(item => item.price),
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.3,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
        },
    };

    return (
        <div className="chart-container">
            <p>Price History</p>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default PriceChart;
