'use client';

import { motion } from 'framer-motion';
import { 
  MoreVertical, 
  Download, 
  Maximize2,
  Filter,
  TrendingUp,
  TrendingDown
} from 'lucide-react';
import { ChartData } from './types';
import { useState } from 'react';

interface ChartCardProps {
  title: string;
  data: ChartData;
  type?: 'line' | 'bar' | 'area' | 'mixed' | 'doughnut';
  timeframe?: string;
  compact?: boolean;
}

const ChartCard = ({ title, data, type = 'line', timeframe = '30d', compact = false }: ChartCardProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const renderChart = () => {
    if (type === 'doughnut') {
      return (
        <div className="relative w-32 h-32 mx-auto">
          <svg viewBox="0 0 100 100" className="transform -rotate-90">
            {data.datasets[0].data.map((value, index) => {
              const percentage = (value / 100) * 100;
              const circumference = 2 * Math.PI * 40;
              const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
              
              return (
                <circle
                  key={index}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={data.datasets[0].color}
                  strokeWidth="8"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={index * (circumference / data.datasets[0].data.length)}
                  className="transition-all duration-500"
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {data.datasets[0].data.reduce((a, b) => a + b, 0)}%
              </div>
              <div className="text-xs text-gray-400">Total</div>
            </div>
          </div>
        </div>
      );
    }

    // Line/Bar/Area chart
    const maxValue = Math.max(...data.datasets.flatMap(d => d.data));
    const chartHeight = compact ? 120 : 200;

    return (
      <div className="relative" style={{ height: chartHeight }}>
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="border-t border-white/5"
              style={{ height: `${chartHeight / 4}px` }}
            />
          ))}
        </div>

        {/* Chart lines */}
        <svg className="w-full h-full">
          {data.datasets.map((dataset, datasetIndex) => (
            <g key={datasetIndex}>
              {dataset.type === 'area' && (
                <path
                  d={(() => {
                    const points = data.labels.map((_, i) => {
                      const x = (i / (data.labels.length - 1)) * 100;
                      const y = 100 - (dataset.data[i] / maxValue) * 100;
                      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                    }).join(' ');
                    return `${points} L 100 100 L 0 100 Z`;
                  })()}
                  fill={`url(#gradient-${datasetIndex})`}
                  className="opacity-30"
                />
              )}
              
              <path
                d={(() => {
                  return data.labels.map((_, i) => {
                    const x = (i / (data.labels.length - 1)) * 100;
                    const y = 100 - (dataset.data[i] / maxValue) * 100;
                    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                  }).join(' ');
                })()}
                fill="none"
                stroke={dataset.color}
                strokeWidth="2"
                className="transition-all duration-500"
              />
            </g>
          ))}
          
          {/* Gradient definitions */}
          <defs>
            {data.datasets.map((dataset, i) => (
              <linearGradient
                key={i}
                id={`gradient-${i}`}
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor={dataset.color} stopOpacity="0.8" />
                <stop offset="100%" stopColor={dataset.color} stopOpacity="0" />
              </linearGradient>
            ))}
          </defs>
        </svg>

        {/* Hover indicators */}
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-0 bottom-0 w-px bg-white/20"
            style={{
              left: `${(hoveredIndex / (data.labels.length - 1)) * 100}%`
            }}
          />
        )}
      </div>
    );
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={`rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm ${
        compact ? 'p-4' : 'p-6'
      }`}
    >
      {/* Header */}
      <div className={`flex items-center justify-between ${compact ? 'mb-4' : 'mb-6'}`}>
        <div>
          <h3 className="font-semibold text-white">{title}</h3>
          {!compact && (
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-400">Período: {timeframe}</span>
              <div className="w-1 h-1 rounded-full bg-gray-600" />
              <span className="text-sm text-gray-400">Actualizado ahora</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
            <Filter className="w-4 h-4 text-gray-400" />
          </button>
          <button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
            <Download className="w-4 h-4 text-gray-400" />
          </button>
          <button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
            <Maximize2 className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Chart */}
      <div 
        className={compact ? '' : 'mb-4'}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {renderChart()}
      </div>

      {/* Legend */}
      {!compact && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {data.datasets.map((dataset, i) => (
              <div key={i} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: dataset.color }}
                />
                <span className="text-sm text-gray-400">{dataset.label}</span>
              </div>
            ))}
          </div>
          
          {/* Summary */}
          <div className="flex items-center gap-2">
            {data.datasets[0].data[data.datasets[0].data.length - 1] > 
             data.datasets[0].data[0] ? (
              <TrendingUp className="w-4 h-4 text-[#1FB6A6]" />
            ) : (
              <TrendingDown className="w-4 h-4 text-[#EF4444]" />
            )}
            <span className="text-sm font-medium text-white">
              {data.datasets[0].data[data.datasets[0].data.length - 1] > 
               data.datasets[0].data[0] ? '+' : ''}
              {((data.datasets[0].data[data.datasets[0].data.length - 1] - 
                data.datasets[0].data[0]) / data.datasets[0].data[0] * 100).toFixed(1)}%
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ChartCard;