'use client';

import { motion } from 'framer-motion';
import { 
  Target, 
  CheckCircle, 
  Clock, 
  Zap, 
  TrendingUp,
  AlertTriangle,
  ChevronRight,
  Play,
  Calendar
} from 'lucide-react';
import { Recommendation } from './types';
import { useState } from 'react';

interface RecommendationsProps {
  recommendations: Recommendation[];
}

const Recommendations = ({ recommendations }: RecommendationsProps) => {
  const [completed, setCompleted] = useState<string[]>([]);

  const handleComplete = (id: string) => {
    setCompleted(prev => [...prev, id]);
    
    // Remove from list after animation
    setTimeout(() => {
      setCompleted(prev => prev.filter(item => item !== id));
    }, 3000);
  };

  const priorityColors: Record<number, string> = {
    1: '#EF4444',
    2: '#F5A623',
    3: '#3B82F6',
    4: '#10B981'
  };

  const categoryIcons: Record<string, React.ReactNode> = {
    retention: <Users className="w-4 h-4" />,
    inventory: <Package className="w-4 h-4" />,
    marketing: <Megaphone className="w-4 h-4" />,
    pricing: <Tag className="w-4 h-4" />
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm"
    >
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#EC4899]/20 to-transparent border border-[#EC4899]/30 flex items-center justify-center">
              <Target className="w-5 h-5 text-[#EC4899]" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Recomendaciones</h3>
              <p className="text-sm text-gray-400">Acciones priorizadas por impacto</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">Ordenadas por:</span>
            <select className="text-xs bg-transparent text-white border-none focus:outline-none">
              <option>Impacto</option>
              <option>Urgencia</option>
              <option>Dificultad</option>
            </select>
          </div>
        </div>
      </div>

      {/* Recommendations List */}
      <div className="p-6 space-y-4">
        {recommendations.map((rec, index) => (
          <motion.div
            key={rec.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-4 rounded-lg border transition-all ${
              completed.includes(rec.id)
                ? 'border-[#10B981]/30 bg-[#10B981]/5'
                : 'border-white/5 bg-white/5 hover:border-white/10'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${priorityColors[rec.priority]}20` }}
                    >
                      <div style={{ color: priorityColors[rec.priority] }}>
                        {rec.priority === 1 ? (
                          <AlertTriangle className="w-3 h-3" />
                        ) : rec.priority === 2 ? (
                          <Clock className="w-3 h-3" />
                        ) : (
                          <TrendingUp className="w-3 h-3" />
                        )}
                      </div>
                    </div>
                    <span className="text-sm font-medium text-white">
                      Prioridad {rec.priority}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {categoryIcons[rec.category] || <Target className="w-3 h-3" />}
                    <span className="text-xs text-gray-400 capitalize">
                      {rec.category}
                    </span>
                  </div>
                </div>
                
                <h4 className="font-medium text-white mb-2">{rec.action}</h4>
                <p className="text-sm text-gray-400 mb-4">{rec.description}</p>
                
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-3 h-3 text-[#10B981]" />
                    <span className="text-xs text-gray-400">Impacto:</span>
                    <span className="text-xs font-medium text-white">
                      +{rec.estimatedImpact}%
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-400">Tiempo:</span>
                    <span className="text-xs font-medium text-white">
                      {rec.estimatedTime}h
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 ml-4">
                {!completed.includes(rec.id) ? (
                  <>
                    <button
                      onClick={() => handleComplete(rec.id)}
                      className="p-2 rounded-lg bg-gradient-to-r from-[#10B981]/20 to-transparent border border-[#10B981]/30 text-[#10B981] hover:border-[#10B981]/50 transition-all"
                    >
                      <CheckCircle className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all">
                      <Calendar className="w-4 h-4" />
                    </button>
                  </>
                ) : (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-2 text-[#10B981]"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Completado</span>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#F5A623]" />
            <span className="text-sm text-gray-400">
              Implementar todas aumentaría ingresos en ~24%
            </span>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5] text-white font-medium hover:shadow-lg hover:shadow-[#1FB6A6]/20 transition-all">
            <Play className="w-4 h-4" />
            <span>Plan de acción automatizado</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Icon components needed
const Users = ({ className }: { className: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 0c-.828 0-1.5.672-1.5 1.5v4.5" />
  </svg>
);

const Package = ({ className }: { className: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const Megaphone = ({ className }: { className: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
  </svg>
);

const Tag = ({ className }: { className: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
  </svg>
);

export default Recommendations;