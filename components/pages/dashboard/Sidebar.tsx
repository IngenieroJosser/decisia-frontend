'use client';

import { motion } from 'framer-motion';
import {
  Home,
  BarChart3,
  Users,
  DollarSign,
  Target,
  Settings,
  FileText,
  Bell,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Zap,
  Brain,
  TrendingUp,
  PieChart,
  Globe,
  Database
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  activeView: string;
  onViewChange: (view: string) => void;
  onToggle: () => void;
}

const Sidebar = ({ isOpen, activeView, onViewChange, onToggle }: SidebarProps) => {
  const navItems = [
    { id: 'overview', label: 'Resumen', icon: <Home className="w-4 h-4" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'customers', label: 'Clientes', icon: <Users className="w-4 h-4" /> },
    { id: 'revenue', label: 'Ingresos', icon: <DollarSign className="w-4 h-4" /> },
    { id: 'targets', label: 'Objetivos', icon: <Target className="w-4 h-4" /> },
    { id: 'reports', label: 'Reportes', icon: <FileText className="w-4 h-4" /> },
  ];

  const aiItems = [
    { id: 'insights', label: 'Insights IA', icon: <Brain className="w-4 h-4" /> },
    { id: 'predictions', label: 'Predicciones', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'segments', label: 'Segmentos', icon: <PieChart className="w-4 h-4" /> },
  ];

  const dataItems = [
    { id: 'sources', label: 'Fuentes', icon: <Database className="w-4 h-4" /> },
    { id: 'integrations', label: 'Integraciones', icon: <Globe className="w-4 h-4" /> },
  ];

  return (
    <motion.aside
      animate={{ width: isOpen ? 256 : 80 }}
      className="fixed left-0 top-0 h-screen bg-gradient-to-b from-[#0B1C2D] to-[#0A1624] border-r border-white/10 z-40 overflow-hidden"
    >
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 rounded-full border border-[#1FB6A6]/30"
                />
                <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#1FB6A6] to-[#2CD9C5] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
              </div>
              <div>
                <div className="font-bold text-white">Decisia</div>
                <div className="text-xs text-gray-400">Dashboard</div>
              </div>
            </motion.div>
          ) : (
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1FB6A6] to-[#2CD9C5] flex items-center justify-center mx-auto">
              <Zap className="w-4 h-4 text-white" />
            </div>
          )}
          
          <button
            onClick={onToggle}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? (
              <ChevronLeft className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-6">
        {/* Main Navigation */}
        <div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2"
            >
              Navegación
            </motion.div>
          )}
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                  activeView === item.id
                    ? 'bg-gradient-to-r from-[#1FB6A6]/20 to-transparent border border-[#1FB6A6]/30 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className={activeView === item.id ? 'text-[#1FB6A6]' : ''}>
                  {item.icon}
                </div>
                {isOpen && <span className="text-sm">{item.label}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* AI Features */}
        <div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2"
            >
              Inteligencia Artificial
            </motion.div>
          )}
          <div className="space-y-1">
            {aiItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                  activeView === item.id
                    ? 'bg-gradient-to-r from-[#F5A623]/20 to-transparent border border-[#F5A623]/30 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className={activeView === item.id ? 'text-[#F5A623]' : ''}>
                  {item.icon}
                </div>
                {isOpen && <span className="text-sm">{item.label}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Data Sources */}
        <div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2"
            >
              Datos
            </motion.div>
          )}
          <div className="space-y-1">
            {dataItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
              >
                {item.icon}
                {isOpen && <span className="text-sm">{item.label}</span>}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Bottom Actions */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all">
            <Settings className="w-4 h-4" />
            {isOpen && <span className="text-sm">Configuración</span>}
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all">
            <HelpCircle className="w-4 h-4" />
            {isOpen && <span className="text-sm">Ayuda</span>}
          </button>
        </div>

        {/* Status indicator */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 p-3 rounded-lg bg-gradient-to-r from-[#1FB6A6]/10 to-transparent border border-[#1FB6A6]/30"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#1FB6A6] animate-pulse" />
              <span className="text-xs font-medium text-white">Conectado</span>
            </div>
            <div className="text-xs text-gray-400">
              Todos los sistemas operativos
            </div>
          </motion.div>
        )}
      </div>
    </motion.aside>
  );
};

export default Sidebar;