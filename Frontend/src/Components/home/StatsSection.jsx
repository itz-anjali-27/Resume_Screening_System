import React from 'react';
import StatCard from './StatCard';

const stats = [
  { value: '1,200+', label: 'Active Jobs' },
  { value: '350+', label: 'Companies Hiring' },
  { value: '5,000+', label: 'Success Stories' },
];

export default function StatsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}