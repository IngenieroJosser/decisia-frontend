export interface Metric {
  id: string;
  label: string;
  value: number | string;
  change: number;
  trend: 'up' | 'down' | 'stable';
  format: 'currency' | 'percentage' | 'number' | 'time';
  icon: string;
  color: string;
}

export interface DataPoint {
  timestamp: string;
  value: number;
  category?: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    color: string;
    type?: 'line' | 'bar' | 'area';
  }[];
}

export interface Insight {
  id: string;
  title: string;
  description: string;
  confidence: number;
  impact: 'high' | 'medium' | 'low';
  category: 'revenue' | 'customers' | 'efficiency' | 'risk';
  timestamp: string;
}

export interface Recommendation {
  id: string;
  action: string;
  description: string;
  priority: number;
  estimatedImpact: number;
  estimatedTime: number;
  category: string;
}

export interface Activity {
  id: string;
  type: 'data' | 'alert' | 'insight' | 'action';
  title: string;
  description: string;
  timestamp: string;
  icon: string;
  color: string;
}