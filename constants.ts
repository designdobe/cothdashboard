import type { CothData, SegmentData, CountryData } from './types';

// 가상 지표 데이터 (최근 12개월)
export const cothData: CothData[] = [
  { month: '1월', mau: 12500, dau: 1050, cac: 42000, ltv: 420000, conversionRate: 4.2, monthlyRevenue: 120 },
  { month: '2월', mau: 13200, dau: 1150, cac: 41500, ltv: 430000, conversionRate: 4.4, monthlyRevenue: 128 },
  { month: '3월', mau: 14000, dau: 1220, cac: 41000, ltv: 440000, conversionRate: 4.6, monthlyRevenue: 135 },
  { month: '4월', mau: 15300, dau: 1350, cac: 40500, ltv: 450000, conversionRate: 4.8, monthlyRevenue: 145 },
  { month: '5월', mau: 16800, dau: 1500, cac: 40200, ltv: 460000, conversionRate: 5.0, monthlyRevenue: 158 },
  { month: '6월', mau: 17900, dau: 1620, cac: 39800, ltv: 470000, conversionRate: 5.2, monthlyRevenue: 170 },
  { month: '7월', mau: 18700, dau: 1750, cac: 39500, ltv: 480000, conversionRate: 5.4, monthlyRevenue: 182 },
  { month: '8월', mau: 19800, dau: 1880, cac: 39200, ltv: 490000, conversionRate: 5.6, monthlyRevenue: 193 },
  { month: '9월', mau: 21000, dau: 1980, cac: 39000, ltv: 500000, conversionRate: 5.8, monthlyRevenue: 205 },
  { month: '10월', mau: 22200, dau: 2050, cac: 38800, ltv: 510000, conversionRate: 5.9, monthlyRevenue: 213 },
  { month: '11월', mau: 23500, dau: 2100, cac: 38600, ltv: 515000, conversionRate: 6.0, monthlyRevenue: 221 },
  { month: '12월', mau: 24800, dau: 2150, cac: 38500, ltv: 520000, conversionRate: 6.1, monthlyRevenue: 230 },
];

// 고객 세그먼트별 성장률: B2B (+140%), B2C (+75%), 교육기관(+60%)
export const segmentData: SegmentData[] = [
    { name: 'B2B', growth: 140 },
    { name: 'B2C', growth: 75 },
    { name: '교육기관', growth: 60 },
];

// 주요 국가별 사용자 비중: 한국(45%), 미국(25%), 일본(15%), 기타(15%)
export const countryData: CountryData[] = [
    { name: '한국', value: 45 },
    { name: '미국', value: 25 },
    { name: '일본', value: 15 },
    { name: '기타', value: 15 },
];
