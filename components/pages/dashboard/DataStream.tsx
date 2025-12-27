'use client';

import { motion, useAnimation } from 'framer-motion';
import { 
  Database, 
  Cpu, 
  GitBranch, 
  Zap,
  Cloud,
  Server,
  Activity,
  ChevronRight
} from 'lucide-react';
import { useState, useEffect } from 'react';

interface DataStreamProps {
  activities?: any[];
}

const DataStream = ({ activities }: DataStreamProps) => {
  const [nodes] = useState([
    { id: 1, type: 'source', label: 'Stripe', icon: <Database className="w-4 h-4" />, color: '#1FB6A6' },
    { id: 2, type: 'source', label: 'Google Analytics', icon: <Activity className="w-4 h-4" />, color: '#F5A623' },
    { id: 3, type: 'source', label: 'Shopify', icon: <Server className="w-4 h-4" />, color: '#8B5CF6' },
    { id: 4, type: 'processor', label: 'API Gateway', icon: <Cloud className="w-4 h-4" />, color: '#10B981' },
    { id: 5, type: 'processor', label: 'ETL Pipeline', icon: <GitBranch className="w-4 h-4" />, color: '#3B82F6' },
    { id: 6, type: 'processor', label: 'IA Engine', icon: <Cpu className="w-4 h-4" />, color: '#EC4899' },
    { id: 7, type: 'output', label: 'Decisia AI', icon: <Zap className="w-4 h-4" />, color: '#1FB6A6' },
  ]);

  const [dataPoints, setDataPoints] = useState<any[]>([]);
  const controls = useAnimation();

  useEffect(() => {
    const generateDataPoint = () => {
      const source = nodes[Math.floor(Math.random() * 3)];
      const processor = nodes[3 + Math.floor(Math.random() * 3)];
      
      return {
        id: Date.now(),
        source,
        processor,
        progress: 0,
        color: source.color
      };
    };

    const interval = setInterval(() => {
      setDataPoints(prev => {
        const newPoints = [generateDataPoint(), ...prev.slice(0, 4)];
        
        // Animate new points
        controls.start(i => ({
          pathLength: 1,
          transition: { duration: 2, ease: "linear" }
        }));
        
        return newPoints;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-white">Flujo de Datos en Tiempo Real</h3>
          <p className="text-sm text-gray-400">Visualización del pipeline de datos</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-[#1FB6A6] animate-pulse" />
            <span className="text-xs text-gray-400">Activo</span>
          </div>
          <span className="text-xs text-gray-500">24.5K datos/min</span>
        </div>
      </div>

      {/* Pipeline visualization */}
      <div className="relative h-48">
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full">
          {/* Source to processor connections */}
          <motion.path
            d="M20,40 L120,40"
            stroke="#1FB6A6"
            strokeWidth="1"
            strokeDasharray="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M20,80 L120,80"
            stroke="#F5A623"
            strokeWidth="1"
            strokeDasharray="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />
          <motion.path
            d="M20,120 L120,120"
            stroke="#8B5CF6"
            strokeWidth="1"
            strokeDasharray="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
          />

          {/* Processor to AI connections */}
          <motion.path
            d="M200,60 L280,100"
            stroke="#10B981"
            strokeWidth="1"
            strokeDasharray="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M200,80 L280,100"
            stroke="#3B82F6"
            strokeWidth="1"
            strokeDasharray="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.3 }}
          />
          <motion.path
            d="M200,100 L280,100"
            stroke="#EC4899"
            strokeWidth="1"
            strokeDasharray="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.6 }}
          />
        </svg>

        {/* Nodes */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          {/* Sources */}
          <div className="space-y-8">
            {nodes.slice(0, 3).map((node) => (
              <div
                key={node.id}
                className="flex items-center gap-3"
              >
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center border-2 border-white/10"
                  style={{ backgroundColor: `${node.color}20` }}
                >
                  <div style={{ color: node.color }}>
                    {node.icon}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{node.label}</div>
                  <div className="text-xs text-gray-400">Live</div>
                </div>
              </div>
            ))}
          </div>

          {/* Processors */}
          <div className="space-y-8">
            {nodes.slice(3, 6).map((node) => (
              <div
                key={node.id}
                className="flex items-center gap-3"
              >
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center border-2 border-white/10"
                  style={{ backgroundColor: `${node.color}20` }}
                >
                  <div style={{ color: node.color }}>
                    {node.icon}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{node.label}</div>
                  <div className="text-xs text-gray-400">Procesando</div>
                </div>
              </div>
            ))}
          </div>

          {/* Output */}
          <div className="text-center">
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border-2 border-[#1FB6A6]/30"
              />
              <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-[#1FB6A6] to-[#2CD9C5] flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-sm font-bold text-white">Decisia AI</div>
              <div className="text-xs text-gray-400">Analizando</div>
            </div>
          </div>
        </div>

        {/* Animated data points */}
        {dataPoints.map((point) => (
          <motion.div
            key={point.id}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: point.color,
              left: `${point.progress * 100}%`,
              top: '50%'
            }}
            animate={{
              x: [0, 300],
              opacity: [1, 0]
            }}
            transition={{
              duration: 2,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="p-3 rounded-lg bg-white/5">
          <div className="text-xs text-gray-400 mb-1">Datos procesados</div>
          <div className="text-lg font-bold text-white">2.4M</div>
        </div>
        <div className="p-3 rounded-lg bg-white/5">
          <div className="text-xs text-gray-400 mb-1">Latencia</div>
          <div className="text-lg font-bold text-white">42ms</div>
        </div>
        <div className="p-3 rounded-lg bg-white/5">
          <div className="text-xs text-gray-400 mb-1">Uptime</div>
          <div className="text-lg font-bold text-white">99.99%</div>
        </div>
      </div>
    </div>
  );
};

export default DataStream;