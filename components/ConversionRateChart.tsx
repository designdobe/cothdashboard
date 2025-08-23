import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { CothData } from '../types';
import ChartContainer from './ChartContainer';

interface ConversionRateChartProps {
  data: CothData[];
}

export const ConversionRateChart: React.FC<ConversionRateChartProps> = ({ data }) => {
  return (
    <ChartContainer title="Conversion Rate (%)">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <defs>
            <linearGradient id="colorConversion" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00CA56" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#00CA56" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="month" stroke="#718096" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#718096" fontSize={12} tickFormatter={(value) => `${value}%`} tickLine={false} axisLine={false} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#ffffff', 
              borderColor: '#e2e8f0',
              color: '#1a202c',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
            }}
            formatter={(value: number) => [`${value}%`, 'Conversion Rate']}
            cursor={{ fill: 'rgba(0, 202, 86, 0.1)' }}
          />
          <Area type="monotone" dataKey="conversionRate" stroke="#00CA56" fillOpacity={1} fill="url(#colorConversion)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};