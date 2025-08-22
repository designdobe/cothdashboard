
import React from 'react';

// Replaced with the new COTH logo SVG, viewBox and dimensions adjusted for correct aspect ratio.
export const CothLogoMark: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 68 67" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g transform="translate(-405 -926)">
            <path d="M473.3,957.4c-1.4-16.3-14.3-29.8-31.2-31.4-18.9-1.7-35.7,12.2-37.4,31.1-1.7,18.9,12.2,35.7,31.1,37.4,18.9,1.7,35.7-12.2,37.4-31.1l-34.3-3.1,34.3-2.9Z" />
        </g>
    </svg>
);


// Replaced with new SVG path for hamburger menu for design consistency.
export const HamburgerIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

// Replaced with a standard Korean Won icon to match the Figma design.
export const WonIcon: React.FC = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 11L9 18L12 11L15 18L18 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 9H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 13H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
