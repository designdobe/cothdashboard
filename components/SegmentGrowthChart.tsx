import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { SegmentData } from '../types';
import ChartContainer from './ChartContainer';

interface SegmentGrowthChartProps {
  data: SegmentData[];
}

export const SegmentGrowthChart: React.FC<SegmentGrowthChartProps> = ({ data }) => {
  return (
    <ChartContainer title="Customer Segment Growth (%)">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <defs>
            <linearGradient id="segmentGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#111111" />
              <stop offset="100%" stopColor="#00CA56" />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#333333" strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" stroke="#808080" fontSize={12} tickFormatter={(value) => `${value}%`} axisLine={false} tickLine={false}/>
          <YAxis dataKey="name" type="category" stroke="#808080" fontSize={12} width={80} axisLine={false} tickLine={false}/>
          <Tooltip
            contentStyle={{
              backgroundColor: '#1C1C1C', 
              borderColor: '#333333',
              color: '#FFFFFF',
              borderRadius: '0.75rem',
            }}
            formatter={(value: number) => [`+${value}%`, 'Growth']}
            cursor={{ fill: 'rgba(0, 202, 86, 0.1)' }}
          />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{fontSize: "14px", top: "-28px", right: "0px", color: '#FFFFFF'}}/>
          <Bar dataKey="growth" name="Growth Rate" fill="url(#segmentGradient)" barSize={20} radius={[0, 10, 10, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};