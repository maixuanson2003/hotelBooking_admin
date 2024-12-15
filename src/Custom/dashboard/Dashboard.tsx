"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
export default function Dashboard() {
  // Chart Data
  const lineChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "New Users",
        data: [20, 30, 50, 40, 60, 70, 80, 70, 60, 90, 85, 100],
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const barChartData = {
    labels: ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F"],
    datasets: [
      {
        label: "Conversions",
        data: [3000, 4500, 7000, 6000, 4000, 5500],
        backgroundColor: "#38BDF8",
      },
    ],
  };

  const pieChartData = {
    labels: ["Group A", "Group B", "Group C", "Group D"],
    datasets: [
      {
        data: [30, 20, 25, 25],
        backgroundColor: ["#4F46E5", "#38BDF8", "#A78BFA", "#34D399"],
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100  ">
      {/* Top Stats */}
      <div>
        <div className="grid grid-cols-4 gap-6 mb-6">
          <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-lg font-semibold">349</h2>
            <p className="text-gray-500">Total Users</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-lg font-semibold">$129,438</h2>
            <p className="text-gray-500">Revenue</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-lg font-semibold">7,048</h2>
            <p className="text-gray-500">New Sales</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-lg font-semibold">683,923</h2>
            <p className="text-gray-500">Messages</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-3 gap-6">
          {/* Line Chart */}
          <div className="col-span-2 bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold mb-4">New Users</h3>
            <Line data={lineChartData} />
          </div>

          {/* Bar Chart */}
          <div className="col-span-1 bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Conversions</h3>
            <Bar data={barChartData} />
          </div>

          {/* Revenue Line Chart */}
          <div className="col-span-2 bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Revenue</h3>
            <Line data={lineChartData} />
          </div>

          {/* Pie Chart */}
          <div className="col-span-1 bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Users by Device</h3>
            <Pie data={pieChartData} />
          </div>
        </div>
      </div>
    </div>
  );
}
