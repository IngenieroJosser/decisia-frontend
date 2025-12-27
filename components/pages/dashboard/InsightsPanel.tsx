'use client';

import { motion } from 'framer-motion';
import { 
  Brain, 
  Sparkles, 
  AlertCircle, 
  TrendingUp,
  Users,
  Zap,
  Clock,
  ChevronRight
} from 'lucide-react';
import { Insight } from './types';
import { useState } from 'react';

interface InsightsPanelProps {
  insights: Insight[];
}

const InsightsPanel = ({ insights }: InsightsPanelProps) => {
  const [expandedInsight, setExpandedInsight] = useState<string | null>(null);

  const categoryIcons: Record<string, React.ReactNode> = {
    revenue: <TrendingUp className="w-4 h-4" />,
    customers: <Users className="w-4 h-4" />,
    efficiency: <Zap className="w-4 h-4" />,
    risk: <AlertCircle className="w-4 h-4" />
  };

  const categoryColors: Record<string, string> = {
    revenue: '#1FB6A6',
    customers: '#F5A623',
    efficiency: '#8B5CF6',
    risk: '#EF4444'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm"
    >
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8B5CF6]/20 to-transparent border border-[#8B5CF6]/30 flex items-center justify-center">
              <Brain className="w-5 h-5 text-[#8B5CF6]" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Insights de IA</h3>
              <p className="text-sm text-gray-400">Análisis predictivo en tiempo real</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <Sparkles className="w-3 h-3 text-[#F5A623]" />
            <span className="text-xs font-medium text-white">94% de precisión</span>
          </div>
        </div>
      </div>

      {/* Insights List */}
      <div className="p-6 space-y-4">
        {insights.map((insight, index) => (
          <motion.div
            key={insight.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div
              onClick={() => setExpandedInsight(
                expandedInsight === insight.id ? null : insight.id
              )}
              className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 cursor-pointer transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: `${categoryColors[insight.category]}20` }}
                  >
                    <div style={{ color: categoryColors[insight.category] }}>
                      {categoryIcons[insight.category]}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-white mb-2">{insight.title}</h4>
                    <p className="text-sm text-gray-400 mb-3">{insight.description}</p>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                          <span className="text-xs text-gray-400">Confianza:</span>
                        </div>
                        <span className="text-xs font-medium text-white">
                          {insight.confidence}%
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3 text-gray-500" />
                        <span className="text-xs text-gray-400">
                          {new Date(insight.timestamp).toLocaleTimeString('es-ES', {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform ${
                  expandedInsight === insight.id ? 'rotate-90' : ''
                }`} />
              </div>

              {/* Expanded content */}
              {expandedInsight === insight.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 pt-4 border-t border-white/10"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="text-xs text-gray-400 mb-1">Impacto estimado</div>
                      <div className="text-lg font-semibold text-white">
                        {insight.impact === 'high' ? 'Alto' :
                         insight.impact === 'medium' ? 'Medio' : 'Bajo'}
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="text-xs text-gray-400 mb-1">Acciones sugeridas</div>
                      <div className="text-lg font-semibold text-white">3</div>
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 py-2 rounded-lg bg-gradient-to-r from-white/10 to-white/5 text-sm font-medium text-white hover:bg-white/20 transition-colors">
                    Ver plan de acción detallado
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-white/10">
        <button className="w-full py-3 rounded-lg bg-gradient-to-r from-[#8B5CF6]/20 to-transparent border border-[#8B5CF6]/30 text-[#8B5CF6] font-medium hover:border-[#8B5CF6]/50 transition-all flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4" />
          <span>Generar nuevos insights</span>
        </button>
      </div>
    </motion.div>
  );
};

export default InsightsPanel;