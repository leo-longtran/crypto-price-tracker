import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const PriceChart = ({ data }) => {
  if (!data || !data.history) return <p></p>;

  const formattedHistory = data?.history ? data.history.map(([timestamp, price]) => ({
    time: new Date(timestamp).toLocaleDateString("en-GB"),
    price,
  })) : [];

  const chartData = {
    labels: formattedHistory.map((item) => item.time),
    datasets: [
      {
        label: `Price`,
        data: formattedHistory.map((item) => item.price),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
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
