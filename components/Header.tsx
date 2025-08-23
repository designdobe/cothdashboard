import React from 'react';
import PeriodSelector from './PeriodSelector';
import { CothLogo, HamburgerIcon } from './Icons';
import type { Period } from '../types';

type ViewMode = 'yearly' | 'monthly';

interface HeaderProps {
  months: string[];
  selectedPeriod: Period;
  onPeriodChange: (newPeriod: Period) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

const Header: React.FC<HeaderProps> = ({ months, selectedPeriod, onPeriodChange, viewMode, onViewModeChange }) => {
  const buttonBaseClasses = "px-6 py-2 text-sm font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-gray-900 rounded-full";
  const activeClasses = "bg-primary text-white";
  const inactiveClasses = "text-gray-400 hover:text-white";

  return (
    <header className="space-y-6">
      <div className="flex justify-between items-center">
        <CothLogo className="h-8 w-auto text-white" />
        <button className="w-10 h-10 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary flex-shrink-0 flex items-center justify-center transition-colors">
            <HamburgerIcon />
        </button>
      </div>

      <div>
        <p className="text-lg font-medium text-gray-400 tracking-tight">
          Welcome back, here's COTH 2024 performance snapshot.
        </p>
      </div>

      <div className="text-left my-8">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-white">
          <span className="text-primary">3 PERCENT</span><br />
          GROWTH<br />
          BEYOND
        </h1>
      </div>
      
      <div className="flex flex-wrap items-end gap-6">
        <div>
            <label className="block mb-2 text-sm text-gray-500">View</label>
            <div className="inline-flex rounded-full border border-gray-700 p-1" role="group">
                <button
                type="button"
                aria-pressed={viewMode === 'yearly'}
                className={`${buttonBaseClasses} ${viewMode === 'yearly' ? activeClasses : inactiveClasses}`}
                onClick={() => onViewModeChange('yearly')}
                >
                YEARLY
                </button>
                <button
                type="button"
                aria-pressed={viewMode === 'monthly'}
                className={`${buttonBaseClasses} ${viewMode === 'monthly' ? activeClasses : inactiveClasses}`}
                onClick={() => onViewModeChange('monthly')}
                >
                MONTHLY
                </button>
            </div>
        </div>
        
        <div className={viewMode === 'monthly' ? 'opacity-100' : 'opacity-0 pointer-events-none'}>
          <PeriodSelector 
            months={months} 
            selectedPeriod={selectedPeriod} 
            onPeriodChange={onPeriodChange} 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;