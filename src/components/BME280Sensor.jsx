import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

const lineData = {
  labels: ['15:41:30', '15:42:00', '15:42:30', '15:43:00', '15:43:30', '15:44:00', '15:44:30', '15:45:00'],
  datasets: [
    {
      label: 'Temperature',
      data: [28.4, 28.5, 28.6, 28.5, 28.4, 28.5, 28.6, 28.5],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Humidity',
      data: [30, 30.1, 30.2, 30.1, 30, 30.1, 30.2, 30.1],
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
    },
  ],
};

const lineOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Temperature and Humidity',
    },
  },
};

const doughnutData = (value, label, color) => ({
  datasets: [
    {
      data: [value, 100 - value],
      backgroundColor: [color, 'rgba(0, 0, 0, 0.1)'],
      borderWidth: 0,
    },
  ],
  labels: [label],
});

const doughnutOptions = {
  cutout: '80%',
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

function BME280Sensor() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">เซ็นเซอร์ BME280</h2>
      <div className="h-48">
        <Line data={lineData} options={lineOptions} />
      </div>
      <div className="flex justify-around mt-4">
        <div className="relative h-36 w-36">
          <Doughnut data={doughnutData(28.5, 'Temperature', 'rgb(255, 99, 132)')} options={doughnutOptions} />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-lg font-bold">28.5°C</p>
          </div>
        </div>
        <div className="relative h-36 w-36">
          <Doughnut data={doughnutData(30.1, 'Humidity', 'rgb(54, 162, 235)')} options={doughnutOptions} />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-lg font-bold">30.1%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BME280Sensor;