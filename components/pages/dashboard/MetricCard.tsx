'use client';

import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  Minus,
  DollarSign,
  Users,
  Target,
  Shield,
  Zap,
  Percent,
  Clock
} from 'lucide-react';
import { Metric } from './types';
import { useState, useEffect } from 'react';

interface MetricCardProps {
  metric: Metric;
}

const MetricCard = ({ metric }: MetricCardProps) => {
  const [animatedValue, setAnimatedValue] = useState(
    typeof metric.value === 'number' ? metric.value : parseFloat(metric.value)
  );
  
  const iconMap: Record<string, React.ReactNode> = {
    currency: <DollarSign className="w-4 h-4" />,
    users: <Users className="w-4 h-4" />,
    'trending-up': <TrendingUp className="w-4 h-4" />,
    'shopping-cart': <Target className="w-4 h-4" />,
    shield: <Shield className="w-4 h-4" />,
    zap: <Zap className="w-4 h-4" />
  };

  const formatValue = (value: number) => {
    switch (metric.format) {
      case 'currency':
        return `€${value.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
      case 'percentage':
        return `${value.toFixed(1)}%`;
      case 'time':
        return `${value}h`;
      default:
        return value.toLocaleString('es-ES');
    }
  };

  useEffect(() => {
    if (typeof metric.value === 'number') {
      const startValue = animatedValue;
      const endValue = metric.value;
      const duration = 500;
      
      let startTime: number;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        setAnimatedValue(startValue + (endValue - startValue) * progress);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [metric.value]);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="relative group"
    >
      {/* Background glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-white/5 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Card content */}
      <div className="relative p-4 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${metric.color}20` }}
            >
              <div style={{ color: metric.color }}>
                {iconMap[metric.icon] || <Target className="w-4 h-4" />}
              </div>
            </div>
            <span className="text-sm font-medium text-gray-300">{metric.label}</span>
          </div>
          
          {/* Trend indicator */}
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${
            metric.trend === 'up' ? 'bg-green-500/20 text-green-400' :
            metric.trend === 'down' ? 'bg-red-500/20 text-red-400' :
            'bg-gray-500/20 text-gray-400'
          }`}>
            {metric.trend === 'up' ? (
              <TrendingUp className="w-3 h-3" />
            ) : metric.trend === 'down' ? (
              <TrendingDown className="w-3 h-3" />
            ) : (
              <Minus className="w-3 h-3" />
            )}
            <span className="text-xs font-medium">
              {metric.change > 0 ? '+' : ''}{metric.change.toFixed(1)}%
            </span>
          </div>
        </div>

        {/* Value */}
        <div className="mb-2">
          <div className="text-2xl font-bold text-white">
            {formatValue(animatedValue)}
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(Math.abs(metric.change) * 3, 100)}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`h-full rounded-full ${
              metric.trend === 'up' ? 'bg-[#1FB6A6]' :
              metric.trend === 'down' ? 'bg-[#EF4444]' :
              'bg-gray-500'
            }`}
          />
        </div>

        {/* Time indicator */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-gray-500" />
            <span className="text-xs text-gray-500">Última hora</span>
          </div>
          <button className="text-xs text-gray-400 hover:text-white transition-colors">
            Detalles →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MetricCard;