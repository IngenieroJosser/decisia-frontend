'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, 
  Brain, 
  Bell, 
  Zap, 
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  CheckCircle,
  AlertTriangle,
  MoreVertical
} from 'lucide-react';
import { Activity } from './types';
import { useState } from 'react';

interface ActivityFeedProps {
  activities: Activity[];
}

const ActivityFeed = ({ activities }: ActivityFeedProps) => {
  const [filter, setFilter] = useState<string>('all');

  const typeIcons: Record<string, React.ReactNode> = {
    data: <Database className="w-4 h-4" />,
    insight: <Brain className="w-4 h-4" />,
    alert: <Bell className="w-4 h-4" />,
    action: <Zap className="w-4 h-4" />
  };

  const typeLabels: Record<string, string> = {
    data: 'Datos',
    insight: 'Insight',
    alert: 'Alerta',
    action: 'Acción'
  };

  const filteredActivities = filter === 'all' 
    ? activities 
    : activities.filter(a => a.type === filter);

  return (
    <div className="rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1FB6A6]/20 to-transparent border border-[#1FB6A6]/30 flex items-center justify-center">
              <Zap className="w-5 h-5 text-[#1FB6A6]" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Actividad en Tiempo Real</h3>
              <p className="text-sm text-gray-400">Eventos y actualizaciones del sistema</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {['all', 'data', 'insight', 'alert', 'action'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-3 py-1.5 text-xs rounded-lg transition-all ${
                  filter === type
                    ? 'bg-gradient-to-r from-[#1FB6A6]/20 to-transparent border border-[#1FB6A6]/30 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {type === 'all' ? 'Todos' : typeLabels[type]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Activity List */}
      <div className="p-6">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/10" />
          
          <AnimatePresence>
            <div className="space-y-6">
              {filteredActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4 group"
                >
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 animate-ping" style={{ 
                      backgroundColor: activity.color,
                      opacity: 0.3 
                    }} />
                    <div 
                      className="relative w-12 h-12 rounded-full flex items-center justify-center border-2 border-white/20"
                      style={{ backgroundColor: `${activity.color}20` }}
                    >
                      <div style={{ color: activity.color }}>
                        {typeIcons[activity.type]}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-white">
                          {activity.title}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          activity.type === 'alert' ? 'bg-red-500/20 text-red-400' :
                          activity.type === 'action' ? 'bg-green-500/20 text-green-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {typeLabels[activity.type]}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">{activity.timestamp}</span>
                    </div>
                    
                    <p className="text-sm text-gray-400 mb-3">{activity.description}</p>
                    
                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      <button className="text-xs text-gray-500 hover:text-white transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                      {activity.type === 'alert' && (
                        <button className="text-xs px-3 py-1 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors">
                          Resolver
                        </button>
                      )}
                      {activity.type === 'insight' && (
                        <button className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors">
                          Explorar
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>

        {/* Live indicator */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#1FB6A6] animate-pulse" />
              <span className="text-sm text-gray-400">Streaming activo</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Clock className="w-4 h-4" />
              <span>Actualizado cada 5 segundos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;