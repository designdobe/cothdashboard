
import React from 'react';
import type { ReactNode } from 'react';

interface ChartContainerProps {
  title: string;
  children: ReactNode;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ title, children }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="text-xl font-bold text-gray-900 mb-6">{title}</h3>
      <div className="h-96 w-full">
        {children}
      </div>
    </div>
  );
};

export default ChartContainer;
