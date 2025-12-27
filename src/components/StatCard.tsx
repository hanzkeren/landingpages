import React from 'react';
import { StatMetric } from '../types';

interface StatCardProps {
  metric: StatMetric;
  className?: string; // Menambahkan prop className untuk kontrol layout eksternal
}

const StatCard: React.FC<StatCardProps> = ({ metric, className = '' }) => {
  return (
    <div
      className={`bg-background/90 p-6 rounded-[2rem] border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full ${className}`}
    >
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <span className="text-muted-foreground font-semibold text-[10px] uppercase tracking-[0.15em]">
            {metric.label}
          </span>
          <h3 className="text-2xl font-bold text-foreground leading-none">{metric.value}</h3>
        </div>
        <div className="p-2.5 bg-muted rounded-2xl text-muted-foreground">{metric.icon}</div>
      </div>
      <div className="mt-4">
        <p className="text-muted-foreground text-xs font-medium inline-flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-primary/70"></span>
          {metric.subtext}
        </p>
      </div>
    </div>
  );
};

export default StatCard;
