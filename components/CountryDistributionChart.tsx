import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { CountryData } from '../types';
import ChartContainer from './ChartContainer';

interface CountryDistributionChartProps {
  data: CountryData[];
}

const COLORS = ['#00CA56', '#DAE854', '#a3e635', '#4B5563'];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800/80 backdrop-blur-sm p-3 border border-gray-700 rounded-lg shadow-lg">
        <p className="text-sm text-white">{payload[0].name}</p>
        <p className="text-lg font-bold text-primary mt-1">{`${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};


export const CountryDistributionChart: React.FC<CountryDistributionChartProps> = ({ data }) => {
  return (
    <ChartContainer title="Customer Segment Growth (%)">
      <div className="donut-chart-wrapper w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
            />
            <Legend wrapperStyle={{fontSize: "14px", color: '#FFFFFF', paddingBottom: '20px' }} layout="horizontal" verticalAlign="bottom" align="center" iconType="circle" iconSize={10} />
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              innerRadius={80}
              outerRadius={120}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
              nameKey="name"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </ChartContainer>
  );
};