'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BrainCircuit,
  Sparkles,
  Zap,
  ChevronRight,
  ArrowUpRight,
  Menu,
  X,
  BarChart,
  Target,
  Shield,
  TrendingUp
} from 'lucide-react';
import Image from 'next/image';

interface FeatureItem {
  text: string;
  icon?: React.ReactNode;
}

interface NavigationItem {
  id: string;
  label: string;
  description: string;
  features?: FeatureItem[];
  badge?: string;
}

interface TrustIndicator {
  metric: string;
  label: string;
  icon: React.ReactNode;
}

const StrategicHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(Math.min(currentScroll / totalHeight, 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems: NavigationItem[] = [
    {
      id: 'product',
      label: 'Producto',
      description: 'Cómo funciona',
      features: [
        { icon: <BrainCircuit className="w-4 h-4" />, text: 'IA Explicable' },
        { icon: <BarChart className="w-4 h-4" />, text: 'Análisis Predictivo' },
        { icon: <Target className="w-4 h-4" />, text: 'Recomendaciones Accionables' }
      ]
    },
    {
      id: 'solutions',
      label: 'Soluciones',
      description: 'Para tu negocio',
      features: [
        { text: 'Comercios locales' },
        { text: 'Freelancers' },
        { text: 'Microempresas' }
      ]
    },
    {
      id: 'pricing',
      label: 'Precios',
      description: 'Planes claros',
      badge: 'Sin sorpresas'
    }
  ];

  const trustIndicators: TrustIndicator[] = [
    { metric: '3.2x', label: 'ROI promedio', icon: <TrendingUp className="w-3 h-3" /> },
    { metric: '2min', label: 'Configuración', icon: <Zap className="w-3 h-3" /> },
    { metric: '100%', label: 'Seguridad', icon: <Shield className="w-3 h-3" /> }
  ];

  return (
    <>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="relative overflow-hidden bg-[#0B1C2D] border-b border-white/8"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            {/* Left: Trust metrics */}
            <div className="flex items-center gap-6">
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={indicator.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="text-xs text-[#1FB6A6]">{indicator.icon}</div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white leading-none">
                      {indicator.metric}
                    </span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                      {indicator.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right: Announcement */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden md:flex items-center gap-2"
            >
              <Sparkles className="w-3 h-3 text-[#F5A623]" />
              <span className="text-xs text-gray-300">
                <span className="text-white font-medium">Nuevo:</span> Forecast automático
              </span>
              <Link
                href="/novedades"
                className="text-xs text-[#1FB6A6] hover:text-[#2CD9C5] transition-colors flex items-center gap-1"
              >
                Ver más
                <ChevronRight className="w-3 h-3" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Progress indicator */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#1FB6A6] via-[#F5A623] to-[#1FB6A6]"
          style={{ scaleX: scrollProgress, transformOrigin: 'left' }}
        />
      </motion.div>

      {/* ==================== */}
      {/* STRATEGY: Main header - Value proposition focus */}
      {/* ==================== */}
      <motion.header
        initial={{ y: 0 }}
        animate={{
          y: 0,
          backdropFilter: isScrolled ? 'blur(20px)' : 'blur(10px)',
          backgroundColor: isScrolled ? 'rgba(11, 28, 45, 0.95)' : 'rgba(11, 28, 45, 0.85)',
          borderColor: isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)'
        }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 z-50 border-b border-white/8"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo + Core value proposition */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              onMouseEnter={() => setActiveHover('logo')}
              onMouseLeave={() => setActiveHover(null)}
            >
              <motion.div
                animate={{
                  rotate: activeHover === 'logo' ? 5 : 0,
                  scale: activeHover === 'logo' ? 1.05 : 1
                }}
                className="relative"
              >
                <motion.div
                  animate={{
                    opacity: activeHover === 'logo' ? 1 : 0.3,
                    scale: activeHover === 'logo' ? 1.1 : 1
                  }}
                  className="absolute -inset-2 rounded-xl bg-gradient-to-r from-[#1FB6A6]/20 to-[#1FB6A6]/5 blur-sm"
                />

                <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-[#0B1C2D] to-[#1FB6A6]/20 border border-white/15 flex items-center justify-center shadow-lg">
                  <Image
                    src='/decisia-logo-without-bg.png'
                    alt='Logo Oficial de Decisia'
                    width={100}
                    height={100}
                  />

                  <motion.div
                    animate={{
                      scale: activeHover === 'logo' ? 1 : 0,
                      opacity: activeHover === 'logo' ? 1 : 0
                    }}
                    className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#F5A623]"
                  />
                </div>
              </motion.div>

              <div className="flex flex-col">
                <motion.span
                  animate={{
                    color: activeHover === 'logo' ? '#ffffff' : '#f8fafc'
                  }}
                  className="text-lg font-bold tracking-tight text-slate-50 transition-colors"
                >
                  Decisia
                </motion.span>
                <span className="text-[10px] text-gray-400 tracking-wider">
                  Decision Intelligence
                </span>
              </div>
            </Link>

            {/* Navigation as decision funnel */}
            <nav className="hidden lg:flex items-center h-full">
              {navigationItems.map((item) => (
                <div
                  key={item.id}
                  className="relative h-full"
                  onMouseEnter={() => setActiveHover(item.id)}
                  onMouseLeave={() => setActiveHover(null)}
                >
                  <Link
                    href={`#${item.id}`}
                    className="relative h-full flex items-center px-4"
                  >
                    <div className="flex flex-col items-start">
                      <div className="flex items-center gap-2">
                        <motion.span
                          animate={{
                            color: activeHover === item.id ? '#ffffff' : '#cbd5e1'
                          }}
                          className="text-sm font-medium transition-colors"
                        >
                          {item.label}
                        </motion.span>

                        {item.badge && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="px-1.5 py-0.5 text-[10px] font-semibold rounded-full bg-gradient-to-r from-[#F5A623]/10 to-[#F5A623]/5 text-[#F5A623] border border-[#F5A623]/20"
                          >
                            {item.badge}
                          </motion.span>
                        )}
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{
                          opacity: activeHover === item.id ? 1 : 0,
                          y: activeHover === item.id ? 0 : -5
                        }}
                        className="absolute top-full mt-1"
                      >
                        <span className="text-xs text-gray-400 whitespace-nowrap">
                          {item.description}
                        </span>
                      </motion.div>
                    </div>
                  </Link>

                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1FB6A6] to-[#F5A623]"
                    initial={false}
                    animate={activeHover === item.id ? {
                      opacity: 1,
                      scaleY: 1
                    } : {
                      opacity: 0,
                      scaleY: 0
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />

                  <AnimatePresence>
                    {activeHover === item.id && item.features && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-64 rounded-lg bg-gradient-to-b from-[#0B1C2D] to-[#0A1624] border border-white/8 shadow-2xl overflow-hidden"
                      >
                        <div className="p-4">
                          {item.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className="flex items-center gap-3 p-2 rounded-md hover:bg-white/3 transition-colors"
                            >
                              {feature.icon && (
                                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#1FB6A6]/10 to-transparent flex items-center justify-center">
                                  <div className="text-[#1FB6A6]">
                                    {feature.icon}
                                  </div>
                                </div>
                              )}
                              <span className="text-sm text-gray-300">
                                {feature.text}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA hierarchy - Clear conversion path */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/demo"
                  className="px-4 py-2 rounded-lg border border-white/15 text-sm font-medium text-gray-300 hover:text-white hover:border-white/25 transition-all duration-200 flex items-center gap-2 group"
                  onMouseEnter={() => setActiveHover('demo')}
                  onMouseLeave={() => setActiveHover(null)}
                >
                  <span>Ver demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#1FB6A6] transition-colors" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/start"
                  className="relative px-5 py-2.5 rounded-lg text-white text-sm font-semibold overflow-hidden group"
                  onMouseEnter={() => setActiveHover('start')}
                  onMouseLeave={() => setActiveHover(null)}
                >
                  <motion.div
                    className="absolute inset-0"
                    initial={{ x: '-100%' }}
                    animate={{
                      x: activeHover === 'start' ? '100%' : '-100%'
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />

                  <span className="relative z-10 flex items-center gap-2">
                    Comenzar gratis
                    <motion.div
                      animate={{
                        rotate: activeHover === 'start' ? 45 : 0
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                    </motion.div>
                  </span>

                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-[#1FB6A6]/20 via-transparent to-[#1FB6A6]/20 blur-sm"
                    animate={{
                      opacity: activeHover === 'start' ? 1 : 0
                    }}
                  />
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu trigger */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Menú"
            >
              <AnimatePresence mode="wait">
                {showMobileMenu ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="w-5 h-5 text-gray-400" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* ==================== */}
      {/* STRATEGY: Mobile menu - Focused experience */}
      {/* ==================== */}
      <AnimatePresence>
        {showMobileMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setShowMobileMenu(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-gradient-to-b from-[#0B1C2D] to-[#0A1624] border-l border-white/8 shadow-2xl z-50 overflow-y-auto"
            >
              {/* Mobile header */}
              <div className="p-6 border-b border-white/8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0B1C2D] to-[#1FB6A6]/20 border border-white/15 flex items-center justify-center">
                      <BrainCircuit className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Decisia</div>
                      <div className="text-xs text-gray-400">Decision Intelligence</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowMobileMenu(false)}
                    className="p-2 rounded-lg hover:bg-white/5"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                {/* Mobile trust indicators */}
                <div className="grid grid-cols-3 gap-3">
                  {trustIndicators.map((indicator) => (
                    <div
                      key={indicator.label}
                      className="p-3 rounded-lg bg-white/3 border border-white/8"
                    >
                      <div className="text-lg font-bold text-white">{indicator.metric}</div>
                      <div className="text-xs text-gray-400">{indicator.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile navigation */}
              <nav className="p-6">
                <div className="space-y-1">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-center justify-between p-4 rounded-lg hover:bg-white/3 transition-colors group"
                      onClick={() => setShowMobileMenu(false)}
                    >
                      <div>
                        <div className="font-medium text-white mb-1">{item.label}</div>
                        <div className="text-sm text-gray-400">{item.description}</div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-[#1FB6A6] transition-colors" />
                    </Link>
                  ))}
                </div>

                {/* Mobile CTAs */}
                <div className="mt-8 space-y-3">
                  <Link
                    href="/demo"
                    className="block w-full py-3 px-4 text-center rounded-lg border border-white/15 text-white font-medium hover:border-white/25 transition-colors"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Ver demo interactiva
                  </Link>
                  <Link
                    href="/start"
                    className="block w-full py-3 px-4 text-center rounded-lg bg-gradient-to-r from-[#1FB6A6] to-[#1FB6A6]/90 text-white font-semibold hover:shadow-lg hover:shadow-[#1FB6A6]/20 transition-all"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Comenzar gratis
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default StrategicHeader;