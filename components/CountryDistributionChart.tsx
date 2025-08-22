
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { CountryData } from '../types';
import ChartContainer from './ChartContainer';

interface CountryDistributionChartProps {
  data: CountryData[];
}

const COLORS = ['#00D283', '#DAE854', '#60a5fa', '#a0aec0'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="#1a202c" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="font-bold text-sm">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


export const CountryDistributionChart: React.FC<CountryDistributionChartProps> = ({ data }) => {
  return (
    <ChartContainer title="User Distribution by Country">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip
            contentStyle={{
              backgroundColor: '#ffffff',
              borderColor: '#e2e8f0',
              color: '#1a202c',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
            }}
            formatter={(value: number, name: string) => [`${value.toLocaleString()}%`, name]}
          />
          <Legend wrapperStyle={{fontSize: "14px"}} layout="vertical" align="right" verticalAlign="middle" iconType="circle" iconSize={10} />
          <Pie
            data={data}
            cx="40%"
            cy="50%"
            innerRadius={60}
            outerRadius={110}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            nameKey="name"
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};
