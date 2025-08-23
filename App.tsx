import React, { useState, useMemo, useEffect } from 'react';
import { cothData, segmentData, countryData } from './constants';
import Header from './components/Header';
import { UserGrowthChart } from './components/UserGrowthChart';
import { RevenueChart } from './components/RevenueChart';
import { CostVsValueChart } from './components/CostVsValueChart';
import { SegmentGrowthChart } from './components/SegmentGrowthChart';
import { CountryDistributionChart } from './components/CountryDistributionChart';
import type { Period, CothData } from './types';
import AnimateOnScroll from './components/AnimateOnScroll';

type ViewMode = 'yearly' | 'monthly';

const PerformanceCarousel: React.FC<{ stats: any[] }> = ({ stats }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (stats.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [stats.length]);

  const currentStat = stats[currentIndex];

  if (!currentStat) return null;

  return (
    <div className="text-center my-12 md:my-20 transition-opacity duration-500">
      <AnimateOnScroll key={currentIndex}>
        <p className="text-sm text-gray-500 uppercase tracking-widest">{currentStat.title}</p>
        <h2 className="text-6xl md:text-8xl font-extrabold my-2 text-white" style={{ textShadow: '0 0 10px #00CA56' }}>
          {currentStat.value}
        </h2>
        <p className="text-primary font-semibold text-lg">
          {currentStat.changeValue} {currentStat.changeDescription}
        </p>
      </AnimateOnScroll>
      <div className="flex justify-center gap-3 mt-8">
        {stats.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-primary scale-125' : 'bg-gray-700 hover:bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const months = useMemo(() => cothData.map(d => d.month), []);
  const [period, setPeriod] = useState<Period>({ start: months[0], end: months[months.length - 1] });
  const [viewMode, setViewMode] = useState<ViewMode>('yearly');

  const filteredData = useMemo(() => {
    if (viewMode === 'yearly') return cothData;

    const startIndex = months.indexOf(period.start);
    const endIndex = months.indexOf(period.end);

    if (startIndex === -1 || endIndex === -1) return cothData;
    
    const start = Math.min(startIndex, endIndex);
    const end = Math.max(startIndex, endIndex);

    return cothData.slice(start, end + 1);
  }, [period, months, viewMode]);

  const calculateStats = (data: CothData[]) => {
    if (data.length === 0) {
      return { averageMau: 0, averageConversionRate: 0, averageLtv: 0 };
    }
    const averageMau = data.reduce((acc, item) => acc + item.mau, 0) / data.length;
    const averageConversionRate = data.reduce((acc, item) => acc + item.conversionRate, 0) / data.length;
    const averageLtv = data.reduce((acc, item) => acc + item.ltv, 0) / data.length;
    return { averageMau, averageConversionRate, averageLtv };
  };
  
  const currentStats = useMemo(() => calculateStats(filteredData), [filteredData]);

  const stats = useMemo(() => ([
    {
      title: "Total Revenue",
      value: "₩686,000,000",
      changeValue: "+11.2%",
      changeDescription: "vs Previous Year",
    },
    {
      title: "Average MAU",
      value: Math.round(currentStats.averageMau).toLocaleString(),
      changeValue: "+24.5%",
      changeDescription: "vs Previous Year",
    },
    {
      title: "Avg. Conversion",
      value: `${currentStats.averageConversionRate.toFixed(1)}%`,
      changeValue: "+1.8%",
      changeDescription: "vs Previous Year",
    },
    {
      title: "Average LTV",
      value: `₩${Math.round(currentStats.averageLtv).toLocaleString()}`,
      changeValue: "+8.3%",
      changeDescription: "vs Previous Year",
    }
  ]), [currentStats]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <Header 
          months={months}
          selectedPeriod={period}
          onPeriodChange={setPeriod}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
        <main>
          <PerformanceCarousel stats={stats} />
          
          <div className="space-y-12 mt-16">
              <AnimateOnScroll>
                  <UserGrowthChart data={filteredData} />
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                  <CostVsValueChart data={filteredData} />
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                  <RevenueChart data={filteredData} />
              </AnimateOnScroll>
              <AnimateOnScroll delay={300}>
                  <SegmentGrowthChart data={segmentData} />
              </AnimateOnScroll>
              <AnimateOnScroll delay={400}>
                  <CountryDistributionChart data={countryData} />
              </AnimateOnScroll>
          </div>
        </main>
        <footer className="text-center py-10 mt-10 border-t border-gray-800">
            <div className="text-gray-500">@design.dobe</div>
            <div className="text-gray-400 mt-1">made with google ai studio</div>
        </footer>
      </div>
    </div>
  );
};

export default App;