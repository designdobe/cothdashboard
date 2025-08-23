import React from 'react';

// New full COTH logo component
export const CothLogo: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 280 70" xmlns="http://www.w.org/2000/svg" className={className} preserveAspectRatio="xMinYMid meet">
        <g transform="translate(-405 -926)">
            <path fill="#00CA56" d="M473.3,957.4c-1.4-16.3-14.3-29.8-31.2-31.4-18.9-1.7-35.7,12.2-37.4,31.1-1.7,18.9,12.2,35.7,31.1,37.4,18.9,1.7,35.7-12.2,37.4-31.1l-34.3-3.1,34.3-2.9Z"/>
            <g fill="currentColor">
                <path d="M485.4,960.3c0-15.8,11.9-26.1,26.9-26.1s14.7,2.7,19,7l-9.6,11c-2-2.7-5.2-4-8.7-4-6.3,0-11.3,4.8-11.3,12.1s5,11.9,11.2,11.9,7.2-1.9,8.9-4.3l9.6,10.9c-4.4,4.6-11,7.6-19.3,7.6-15.1,0-26.8-10.6-26.8-26.1Z"/>
                <path d="M532.4,960c0-15.8,11.6-25.8,27.2-25.8s27.3,10,27.3,25.8-11.7,26.4-27.3,26.4-27.2-10.6-27.2-26.4ZM570.8,960c0-7-4.7-11.9-11.2-11.9s-11.1,4.9-11.1,11.9,4.7,12.3,11.1,12.3,11.2-5.2,11.2-12.3Z"/>
                <path d="M599.8,985v-36.6h-12.7v-12.8h40.6v12.8h-12.7v36.6h-15.2Z"/>
                <path d="M632.2,985v-49.4h15.1v17.4h15.3v-17.4h15.2v49.4h-15.1v-19.3h-15.3v19.3h-15.2Z"/>
            </g>
        </g>
    </svg>
);


// Replaced with new SVG path for hamburger menu for design consistency.
export const HamburgerIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6H20M4 12H20M4 18H20"/>
    </svg>
);

export const UsersIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// Replaced with a standard Dollar icon.
export const DollarIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
);

export const TrendingUpIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

export const TargetIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
    </svg>
);