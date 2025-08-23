import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { CothData } from '../types';
import ChartContainer from './ChartContainer';

interface CostVsValueChartProps {
  data: CothData[];
}

export const CostVsValueChart: React.FC<CostVsValueChartProps> = ({ data }) => {
  return (
    <ChartContainer title="CAC vs. LTV">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }} barGap={10}>
          <defs>
            <linearGradient id="cacGradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#111111" />
              <stop offset="100%" stopColor="#00CA56" />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#333333" strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#808080" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#808080" fontSize={12} tickFormatter={(value) => `${(value/1000)}k`} tickLine={false} axisLine={false} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1C1C1C', 
              borderColor: '#333333',
              color: '#FFFFFF',
              borderRadius: '0.75rem',
            }}
            formatter={(value: number) => [`₩${value.toLocaleString()}`]}
            cursor={{ fill: 'rgba(144, 144, 144, 0.1)' }}
          />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{fontSize: "14px", top: "-28px", right: "0px", color: '#FFFFFF'}}/>
          <Bar dataKey="cac" name="CAC" fill="url(#cacGradient)" radius={[8, 8, 0, 0]} />
          <Bar dataKey="ltv" name="LTV" fill="#4D4D4D" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};