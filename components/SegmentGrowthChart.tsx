
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
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
          <XAxis type="number" stroke="#718096" fontSize={12} tickFormatter={(value) => `${value}%`} axisLine={false} tickLine={false}/>
          <YAxis dataKey="name" type="category" stroke="#718096" fontSize={12} width={80} axisLine={false} tickLine={false}/>
          <Tooltip
            contentStyle={{
              backgroundColor: '#ffffff',
              borderColor: '#e2e8f0',
              color: '#1a202c',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
            }}
            formatter={(value: number) => [`+${value}%`, 'Growth']}
            cursor={{ fill: 'rgba(0, 210, 131, 0.1)' }}
          />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{fontSize: "14px", top: "-28px", right: "0px"}}/>
          <Bar dataKey="growth" name="Growth Rate" fill="#00D283" barSize={30} radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};
