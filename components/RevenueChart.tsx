import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { CothData } from '../types';
import ChartContainer from './ChartContainer';

interface RevenueChartProps {
  data: CothData[];
}

export const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => {
  return (
    <ChartContainer title="Monthly Revenue">
       <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00CA56" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#00CA56" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#333333" strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#808080" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis 
            stroke="#808080" 
            fontSize={12} 
            tickFormatter={(value) => `${value}M`} 
            tickLine={false} 
            axisLine={false}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1C1C1C', 
              borderColor: '#333333',
              color: '#FFFFFF',
              borderRadius: '0.75rem',
            }}
            formatter={(value: number) => [`₩${value} Million`, 'Revenue']}
            cursor={{ stroke: '#00CA56', strokeWidth: 1, fill: 'rgba(0, 202, 86, 0.1)' }}
          />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{fontSize: "14px", top: "-28px", right: "0px", color: '#FFFFFF'}}/>
          <Area type="monotone" dataKey="monthlyRevenue" name="Monthly Revenue (Million KRW)" stroke="#00CA56" strokeWidth={2} fill="url(#colorRevenue)" dot={false} activeDot={{ r: 6 }} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};