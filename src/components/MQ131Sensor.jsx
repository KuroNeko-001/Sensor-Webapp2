import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const lineData = {
  labels: ['15:41:30', '15:42:00', '15:42:30', '15:43:00', '15:43:30', '15:44:00', '15:44:30', '15:45:00'],
  datasets: [
    {
      label: 'Ozone Level',
      data: [1890, 1895, 1900, 1895, 1890, 1895, 1900, 1895],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Ozone Level',
    },
  },
};

function MQ131Sensor() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">เซ็นเซอร์ MQ131</h2>
      <div className="h-48">
        <Line data={lineData} options={options} />
      </div>
    </div>
  );
}

export default MQ131Sensor;