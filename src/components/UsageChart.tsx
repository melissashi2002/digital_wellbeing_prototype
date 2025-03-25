"use client";
import React from 'react';
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
  ChartData,
  ChartOptions
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface UsageChartProps {
  type: 'line' | 'bar';
  data: ChartData<'line' | 'bar'>;
  options?: ChartOptions<'line' | 'bar'>;
  height?: number;
}

const UsageChart: React.FC<UsageChartProps> = ({ type, data, options, height = 300 }) => {
  const defaultOptions: ChartOptions<'line' | 'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '使用数据',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const chartOptions = { ...defaultOptions, ...options };

  return (
    <div style={{ height: `${height}px` }}>
      {type === 'line' ? (
        <Line data={data as ChartData<'line'>} options={chartOptions as ChartOptions<'line'>} />
      ) : (
        <Bar data={data as ChartData<'bar'>} options={chartOptions as ChartOptions<'bar'>} />
      )}
    </div>
  );
};

export default UsageChart; 