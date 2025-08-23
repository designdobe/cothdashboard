import React from 'react';
import type { ReactNode } from 'react';

interface ChartContainerProps {
  title: string;
  children: ReactNode;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ title, children }) => {
  return (
    <div className="bg-transparent">
      <h3 className="text-xl font-bold text-white mb-8">{title}</h3>
      <div className="h-80 w-full">
        {children}
      </div>
    </div>
  );
};

export default ChartContainer;