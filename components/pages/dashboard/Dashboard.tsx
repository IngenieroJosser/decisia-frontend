'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Sidebar from './Sidebar';
import MetricCard from './MetricCard';
import ChartCard from './ChartCard';
import InsightsPanel from './InsightsPanel';
import Recommendations from './Recommendations';
import ActivityFeed from './ActivityFeed';
import DataStream from './DataStream';
import { 
  Metric, 
  ChartData, 
  Insight, 
  Recommendation, 
  Activity 
} from './types';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeView, setActiveView] = useState('overview');
  const [lastUpdated, setLastUpdated] = useState<string>('Ahora');
  const [isRealTime, setIsRealTime] = useState(true);

  // Estado de métricas en tiempo real
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      id: 'revenue',
      label: 'Ingresos Hoy',
      value: 15420,
      change: 12.4,
      trend: 'up',
      format: 'currency',
      icon: 'currency',
      color: '#1FB6A6'
    },
    {
      id: 'customers',
      label: 'Clientes Activos',
      value: 1248,
      change: 5.2,
      trend: 'up',
      format: 'number',
      icon: 'users',
      color: '#F5A623'
    },
    {
      id: 'conversion',
      label: 'Tasa Conversión',
      value: 3.4,
      change: 0.8,
      trend: 'up',
      format: 'percentage',
      icon: 'trending-up',
      color: '#8B5CF6'
    },
    {
      id: 'avg_order',
      label: 'Ticket Promedio',
      value: 87.5,
      change: 2.1,
      trend: 'up',
      format: 'currency',
      icon: 'shopping-cart',
      color: '#EC4899'
    },
    {
      id: 'churn',
      label: 'Tasa Retención',
      value: 94.2,
      change: 1.3,
      trend: 'up',
      format: 'percentage',
      icon: 'shield',
      color: '#10B981'
    },
    {
      id: 'efficiency',
      label: 'Eficiencia Operativa',
      value: 87,
      change: 3.5,
      trend: 'up',
      format: 'percentage',
      icon: 'zap',
      color: '#3B82F6'
    }
  ]);

  // Datos para gráficos
  const [chartData, setChartData] = useState<ChartData>({
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    datasets: [
      {
        label: 'Ventas',
        data: [6500, 7200, 8100, 8900, 9250, 15420, 14200],
        color: '#1FB6A6',
        type: 'area'
      },
      {
        label: 'Clientes',
        data: [980, 1050, 1120, 1180, 1220, 1248, 1300],
        color: '#F5A623',
        type: 'line'
      }
    ]
  });

  // Insights generados por IA
  const [insights, setInsights] = useState<Insight[]>([
    {
      id: '1',
      title: 'Oportunidad de crecimiento en segmento premium',
      description: 'Los clientes premium tienen un LTV 3.2x mayor y muestran mayor fidelidad.',
      confidence: 94,
      impact: 'high',
      category: 'revenue',
      timestamp: '2024-01-15T10:30:00Z'
    },
    {
      id: '2',
      title: 'Optimización horaria detectada',
      description: 'Las conversiones aumentan 42% entre 14:00-16:00. Recomendamos enfocar esfuerzos.',
      confidence: 88,
      impact: 'medium',
      category: 'efficiency',
      timestamp: '2024-01-15T09:15:00Z'
    }
  ]);

  // Recomendaciones accionables
  const [recommendations, setRecommendations] = useState<Recommendation[]>([
    {
      id: '1',
      action: 'Contactar clientes en riesgo',
      description: '12 clientes muestran señales de churn. Acción inmediata recomendada.',
      priority: 1,
      estimatedImpact: 8,
      estimatedTime: 2,
      category: 'retention'
    },
    {
      id: '2',
      action: 'Ajustar inventario Producto X',
      description: 'Stock bajo detectado. Reponer para evitar pérdida de ventas.',
      priority: 2,
      estimatedImpact: 12,
      estimatedTime: 1,
      category: 'inventory'
    }
  ]);

  // Actividad en tiempo real
  const [activities, setActivities] = useState<Activity[]>([
    {
      id: '1',
      type: 'data',
      title: 'Nuevos datos procesados',
      description: '1,248 transacciones analizadas',
      timestamp: 'Hace 2 minutos',
      icon: 'database',
      color: '#1FB6A6'
    },
    {
      id: '2',
      type: 'insight',
      title: 'Insight generado',
      description: 'Patrón de compra detectado',
      timestamp: 'Hace 5 minutos',
      icon: 'brain',
      color: '#F5A623'
    }
  ]);

  // Simular actualizaciones en tiempo real
  useEffect(() => {
    if (!isRealTime) return;

    const interval = setInterval(() => {
      // Actualizar métricas
      setMetrics(prev => prev.map(metric => ({
        ...metric,
        value: typeof metric.value === 'number' 
          ? metric.value + Math.floor(Math.random() * 10)
          : metric.value,
        change: metric.change + (Math.random() - 0.5)
      })));

      // Actualizar timestamp
      setLastUpdated('Ahora');
      
      // Añadir nueva actividad
      const newActivity: Activity = {
        id: Date.now().toString(),
        type: 'data',
        title: 'Actualización en tiempo real',
        description: 'Métricas actualizadas automáticamente',
        timestamp: 'Hace unos segundos',
        icon: 'refresh',
        color: '#8B5CF6'
      };
      
      setActivities(prev => [newActivity, ...prev.slice(0, 9)]);
    }, 5000);

    return () => clearInterval(interval);
  }, [isRealTime]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1C2D] via-[#0B1C2D] to-[#0A1624]">
      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen}
        activeView={activeView}
        onViewChange={setActiveView}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Main Content */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20'}`}>
        {/* Header */}
        <Header 
          lastUpdated={lastUpdated}
          isRealTime={isRealTime}
          onRealTimeToggle={() => setIsRealTime(!isRealTime)}
          onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        {/* Main Dashboard Grid */}
        <main className="p-4 md:p-6">
          <AnimatePresence mode="wait">
            {activeView === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                  {metrics.map((metric, index) => (
                    <motion.div
                      key={metric.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <MetricCard metric={metric} />
                    </motion.div>
                  ))}
                </div>

                {/* Charts and Visualizations */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <ChartCard 
                    title="Tendencias de Ventas"
                    data={chartData}
                    type="mixed"
                    timeframe="7d"
                  />
                  
                  <div className="space-y-6">
                    <DataStream activities={activities} />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <ChartCard 
                        title="Conversión por Canal"
                        data={{
                          labels: ['Directo', 'Social', 'Email', 'SEO'],
                          datasets: [{
                            label: 'Conversión',
                            data: [35, 25, 20, 20],
                            color: '#1FB6A6',
                            type: 'bar'
                          }]
                        }}
                        type="doughnut"
                        compact
                      />
                      
                      <ChartCard 
                        title="Satisfacción Clientes"
                        data={{
                          labels: ['Ene', 'Feb', 'Mar', 'Abr'],
                          datasets: [{
                            label: 'NPS',
                            data: [65, 72, 78, 82],
                            color: '#F5A623',
                            type: 'line'
                          }]
                        }}
                        type="line"
                        compact
                      />
                    </div>
                  </div>
                </div>

                {/* Insights and Recommendations */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <InsightsPanel insights={insights} />
                  <Recommendations recommendations={recommendations} />
                </div>

                {/* Activity Feed */}
                <div className="lg:col-span-2">
                  <ActivityFeed activities={activities.slice(0, 5)} />
                </div>
              </motion.div>
            )}

            {/* Otras vistas pueden añadirse aquí */}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;