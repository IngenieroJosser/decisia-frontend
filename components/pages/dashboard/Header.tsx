'use client';

import { motion } from 'framer-motion';
import { 
  Menu, 
  Bell, 
  Search, 
  Settings, 
  Wifi,
  WifiOff,
  RefreshCw,
  Clock,
  Zap
} from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  lastUpdated: string;
  isRealTime: boolean;
  onRealTimeToggle: () => void;
  onSidebarToggle: () => void;
}

const Header = ({ 
  lastUpdated, 
  isRealTime, 
  onRealTimeToggle, 
  onSidebarToggle 
}: HeaderProps) => {
  const [notifications, setNotifications] = useState(3);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#0B1C2D]/80 to-[#0A1624]/80 backdrop-blur-xl border-b border-white/10">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center gap-4">
            <button
              onClick={onSidebarToggle}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Menu className="w-5 h-5 text-gray-400" />
            </button>

            <div className="hidden md:flex items-center gap-2">
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-1 rounded-full border border-[#1FB6A6]/30"
                />
                <div className="relative w-6 h-6 rounded-lg bg-gradient-to-br from-[#1FB6A6] to-[#2CD9C5] flex items-center justify-center">
                  <Zap className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <h1 className="font-semibold text-white">Decisia Dashboard</h1>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Clock className="w-3 h-3" />
                  <span>Datos en tiempo real • Actualizado {lastUpdated}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center - Search */}
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Buscar métricas, insights, datos..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#1FB6A6]/50 focus:ring-1 focus:ring-[#1FB6A6]/20"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Real-time toggle */}
            <button
              onClick={onRealTimeToggle}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
            >
              {isRealTime ? (
                <>
                  <Wifi className="w-4 h-4 text-[#1FB6A6]" />
                  <span className="text-xs text-gray-300">En tiempo real</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-4 h-4 text-gray-500" />
                  <span className="text-xs text-gray-500">Pausado</span>
                </>
              )}
            </button>

            {/* Manual refresh */}
            <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
              <RefreshCw className="w-4 h-4 text-gray-400" />
            </button>

            {/* Notifications */}
            <div className="relative">
              <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                <Bell className="w-4 h-4 text-gray-400" />
              </button>
              {notifications > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-[#F5A623] to-[#FFC107] flex items-center justify-center"
                >
                  <span className="text-xs font-bold text-white">{notifications}</span>
                </motion.div>
              )}
            </div>

            {/* Settings */}
            <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
              <Settings className="w-4 h-4 text-gray-400" />
            </button>

            {/* User avatar */}
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-0.5 rounded-full border border-[#1FB6A6]/30"
              />
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-[#1FB6A6] to-[#8B5CF6] flex items-center justify-center">
                <span className="text-sm font-semibold text-white">A</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;