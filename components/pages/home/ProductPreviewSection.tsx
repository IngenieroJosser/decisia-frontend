'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence, Variants } from 'framer-motion';
import {
  Play,
  Pause,
  Zap,
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  RefreshCw,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Monitor,
  Tablet,
  Sparkles,
  Shield,
  Cpu,
  BrainCircuit,
  AlertCircle
} from 'lucide-react';

const ProductPreviewSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentDemoStep, setCurrentDemoStep] = useState(0);
  const [deviceView, setDeviceView] = useState('desktop');
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Solo ejecutar en el cliente para evitar errores de hidratación
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Pasos de la demo interactiva
  const demoSteps = [
    {
      id: 'data-ingest',
      title: 'Carga de Datos',
      description: 'Conecta tus fuentes de datos en segundos',
      icon: <Cpu className="w-4 h-4" />,
      duration: 3000
    },
    {
      id: 'analysis',
      title: 'Análisis Automático',
      description: 'IA procesa y encuentra patrones',
      icon: <BrainCircuit className="w-4 h-4" />,
      duration: 4000
    },
    {
      id: 'insights',
      title: 'Insights',
      description: 'Descubre oportunidades ocultas',
      icon: <BarChart3 className="w-4 h-4" />,
      duration: 3500
    },
    {
      id: 'recommendations',
      title: 'Recomendaciones',
      description: 'Acciones específicas para mejorar',
      icon: <Target className="w-4 h-4" />,
      duration: 4000
    }
  ];

  // Métricas demo en tiempo real
  const [demoMetrics, setDemoMetrics] = useState({
    sales: 15420,
    growth: 23.4,
    customers: 342,
    churn: 2.1,
    efficiency: 87,
    roi: 3.2
  });

  // Simular datos en tiempo real
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setDemoMetrics(prev => ({
        sales: prev.sales + Math.floor(Math.random() * 100),
        growth: Math.max(15, Math.min(35, prev.growth + (Math.random() - 0.5))),
        customers: prev.customers + Math.floor(Math.random() * 3),
        churn: Math.max(1, Math.min(5, prev.churn + (Math.random() - 0.3))),
        efficiency: Math.max(80, Math.min(95, prev.efficiency + (Math.random() - 0.5))),
        roi: Math.max(2.5, Math.min(4, prev.roi + (Math.random() - 0.2)))
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Avanzar pasos de demo automáticamente
  useEffect(() => {
    if (!isPlaying) return;

    const timeout = setTimeout(() => {
      setCurrentDemoStep((prev) => (prev + 1) % demoSteps.length);
    }, demoSteps[currentDemoStep].duration);

    return () => clearTimeout(timeout);
  }, [currentDemoStep, isPlaying, demoSteps]);

  // Elementos interactivos del dashboard
  const interactiveElements = [
    {
      id: 'revenue-chart',
      title: 'Pronóstico de Ventas',
      description: 'IA predice tus ventas futuras con 94% de precisión',
      position: { x: '15%', y: '20%' },
      color: '#1FB6A6'
    },
    {
      id: 'customer-segments',
      title: 'Segmentación de Clientes',
      description: 'Identifica automáticamente clientes en riesgo y oportunidades',
      position: { x: '65%', y: '25%' },
      color: '#F5A623'
    },
    {
      id: 'profit-margin',
      title: 'Análisis de Rentabilidad',
      description: 'Descubre qué productos generan más margen',
      position: { x: '40%', y: '60%' },
      color: '#6366F1'
    },
    {
      id: 'alerts',
      title: 'Alertas Inteligentes',
      description: 'Notificaciones proactivas cuando detecta anomalías',
      position: { x: '80%', y: '70%' },
      color: '#EC4899'
    }
  ];

  // Pestañas del dashboard
  const dashboardTabs = [
    { id: 'dashboard', label: 'Dashboard', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'analytics', label: 'Analytics', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'customers', label: 'Clientes', icon: <Users className="w-4 h-4" /> },
    { id: 'reports', label: 'Reportes', icon: <DollarSign className="w-4 h-4" /> }
  ];

  // Variantes de animación CORREGIDAS
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  // Función para formatear números de manera consistente (evita error de hidratación)
  const formatNumber = (num: number, type: 'currency' | 'percentage' | 'decimal' | 'plain' = 'plain') => {
    if (!isClient) return ''; // Evita renderizar durante SSR

    switch (type) {
      case 'currency':
        return `$${num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
      case 'percentage':
        return `${num.toFixed(1)}%`;
      case 'decimal':
        return num.toFixed(1);
      default:
        return num.toLocaleString('en-US');
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="demo"
      className="relative py-24 overflow-hidden bg-linear-to-b from-[#0B1C2D] via-[#0D2238] to-[#0B1C2D]"
    >
      {/* Fondo con elementos de UI */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid de interfaz */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #1FB6A6 1px, transparent 1px),
              linear-gradient(180deg, #1FB6A6 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Efectos de datos fluyendo */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
          <path
            d="M0,100 Q150,50 300,150 T600,50 T900,150 T1200,50"
            stroke="#1FB6A6"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10"
            className="animate-pulse"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="1000"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-[#1FB6A6]/20 to-[#F5A623]/20 border border-[#1FB6A6]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#F5A623]" />
            <span className="text-sm font-medium text-white">Demo Interactiva</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block text-white">Decisia en</span>
            <span className="block bg-linear-to-r from-[#1FB6A6] via-[#2CD9C5] to-[#1FB6A6] bg-clip-text text-transparent">
              Acción
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Experimenta cómo Decisia transforma tus datos en decisiones estratégicas. 
            Interactúa con el dashboard para descubrir cada funcionalidad.
          </p>
        </motion.div>

        {/* Controles de la demo */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap items-center justify-between gap-4 mb-8 max-w-4xl mx-auto"
        >
          {/* Selector de dispositivo */}
          <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10">
            <button
              onClick={() => setDeviceView('mobile')}
              className={`p-2 rounded-lg transition-all ${deviceView === 'mobile' ? 'bg-white/10' : 'hover:bg-white/5'}`}
            >
              <Smartphone className="w-5 h-5 text-gray-400" />
            </button>
            <button
              onClick={() => setDeviceView('tablet')}
              className={`p-2 rounded-lg transition-all ${deviceView === 'tablet' ? 'bg-white/10' : 'hover:bg-white/5'}`}
            >
              <Tablet className="w-5 h-5 text-gray-400" />
            </button>
            <button
              onClick={() => setDeviceView('desktop')}
              className={`p-2 rounded-lg transition-all ${deviceView === 'desktop' ? 'bg-white/10' : 'hover:bg-white/5'}`}
            >
              <Monitor className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Progreso de la demo */}
          <div className="flex-1 max-w-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Demo paso a paso</span>
              <span className="text-sm font-medium text-white">
                {currentDemoStep + 1} / {demoSteps.length}
              </span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-linear-to-r from-[#1FB6A6] to-[#2CD9C5]"
                initial={{ width: '0%' }}
                animate={{ width: `${((currentDemoStep + 1) / demoSteps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Controles de reproducción */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 rounded-xl bg-linear-to-r from-[#1FB6A6]/20 to-[#1FB6A6]/10 border border-[#1FB6A6]/30 hover:border-[#1FB6A6]/50 transition-all"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-[#1FB6A6]" />
              ) : (
                <Play className="w-5 h-5 text-[#1FB6A6]" />
              )}
            </button>
            <button
              onClick={() => setCurrentDemoStep(0)}
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
            >
              <RefreshCw className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </motion.div>

        {/* Contenedor principal del preview */}
        <div className="relative max-w-6xl mx-auto">
          {/* Dashboard preview */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={`relative rounded-2xl overflow-hidden border border-white/20 bg-linear-to-br from-[#0B1C2D] to-[#0A1624] shadow-2xl ${
              deviceView === 'mobile' ? 'max-w-sm mx-auto' :
              deviceView === 'tablet' ? 'max-w-2xl mx-auto' :
              'w-full'
            }`}
          >
            {/* Barra superior del dashboard */}
            <div className="p-4 border-b border-white/10 bg-linear-to-r from-white/5 to-transparent">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-linear-to-br from-[#1FB6A6] to-[#0B1C2D] flex items-center justify-center">
                    <BrainCircuit className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Decisia Dashboard</div>
                    <div className="text-xs text-gray-400">Datos en tiempo real • Actualizado ahora</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1FB6A6] animate-pulse" />
                  <span className="text-sm text-[#1FB6A6]">Conectado</span>
                </div>
              </div>
            </div>

            {/* Navegación de pestañas */}
            <div className="flex border-b border-white/10">
              {dashboardTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'text-white border-b-2 border-[#1FB6A6] bg-linear-to-t from-[#1FB6A6]/10 to-transparent'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Contenido del dashboard */}
            <div className="p-6">
              {/* Métricas en tiempo real */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                {Object.entries(demoMetrics).map(([key, value]) => (
                  <motion.div
                    key={key}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                  >
                    <div className="text-2xl font-bold text-white mb-1">
                      {typeof value === 'number' && key !== 'roi' ? (
                        <>
                          {key === 'sales' && '$'}
                          {formatNumber(value, key === 'sales' ? 'plain' : 'decimal')}
                          {key === 'growth' || key === 'churn' || key === 'efficiency' ? '%' : ''}
                        </>
                      ) : (
                        `${value}x`
                      )}
                    </div>
                    <div className="text-xs text-gray-400 capitalize">
                      {key === 'sales' && 'Ventas Hoy'}
                      {key === 'growth' && 'Crecimiento'}
                      {key === 'customers' && 'Clientes Activos'}
                      {key === 'churn' && 'Tasa de Churn'}
                      {key === 'efficiency' && 'Eficiencia'}
                      {key === 'roi' && 'ROI'}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Gráficos y visualizaciones */}
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                {/* Gráfico principal */}
                <div 
                  className="relative p-6 rounded-xl bg-linear-to-br from-[#1FB6A6]/10 to-transparent border border-[#1FB6A6]/20"
                  onMouseEnter={() => setHoveredElement('revenue-chart')}
                  onMouseLeave={() => setHoveredElement(null)}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="font-semibold text-white mb-1">Pronóstico de Ventas</div>
                      <div className="text-sm text-gray-400">Próximos 30 días</div>
                    </div>
                    <div className="text-lg font-bold text-[#1FB6A6]">+23.4%</div>
                  </div>
                  <div className="h-48">
                    {/* Gráfico animado */}
                    <svg className="w-full h-full" viewBox="0 0 400 150">
                      <defs>
                        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#1FB6A6" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#1FB6A6" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,120 L40,100 L80,80 L120,60 L160,90 L200,70 L240,50 L280,80 L320,60 L360,40 L400,20"
                        fill="url(#chartGradient)"
                        stroke="#1FB6A6"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                {/* Segmentación de clientes */}
                <div 
                  className="relative p-6 rounded-xl bg-linear-to-br from-[#F5A623]/10 to-transparent border border-[#F5A623]/20"
                  onMouseEnter={() => setHoveredElement('customer-segments')}
                  onMouseLeave={() => setHoveredElement(null)}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="font-semibold text-white mb-1">Segmentación de Clientes</div>
                      <div className="text-sm text-gray-400">Por riesgo y valor</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#1FB6A6]" />
                      <div className="text-sm text-gray-400">12 en riesgo</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {['Alto Valor', 'Riesgo Medio', 'Leales', 'Inactivos'].map((segment, i) => (
                      <div key={segment} className="p-3 rounded-lg bg-white/5">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-white">{segment}</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                            {[42, 23, 156, 65][i]}
                          </span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-linear-to-r from-[#F5A623] to-[#FFC107] rounded-full"
                            style={{ width: `${[80, 60, 95, 30][i]}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Insights y recomendaciones */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Insights generados por IA */}
                <div className="p-6 rounded-xl bg-linear-to-br from-[#6366F1]/10 to-transparent border border-[#6366F1]/20">
                  <div className="flex items-center gap-3 mb-6">
                    <BrainCircuit className="w-5 h-5 text-[#6366F1]" />
                    <div className="font-semibold text-white">Insights de IA</div>
                  </div>
                  <div className="space-y-4">
                    {[
                      'Las ventas de productos premium crecieron 34% este mes',
                      'Los clientes que compran los martes tienen 2.3x más LTV',
                      'Segmento "Familias jóvenes" muestra mayor potencial'
                    ].map((insight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-white/5"
                      >
                        <Sparkles className="w-4 h-4 text-[#F5A623] mt-0.5" />
                        <div className="text-sm text-gray-300">{insight}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Recomendaciones accionables */}
                <div className="p-6 rounded-xl bg-linear-to-br from-[#EC4899]/10 to-transparent border border-[#EC4899]/20">
                  <div className="flex items-center gap-3 mb-6">
                    <Target className="w-5 h-5 text-[#EC4899]" />
                    <div className="font-semibold text-white">Recomendaciones</div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { action: 'Contactar clientes en riesgo', priority: 'Alta', impact: '+8% retención' },
                      { action: 'Ajustar precios de Producto X', priority: 'Media', impact: '+12% margen' },
                      { action: 'Optimizar horario de atención', priority: 'Baja', impact: '+5% satisfacción' }
                    ].map((rec, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-3 rounded-lg bg-white/5"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm font-medium text-white">{rec.action}</div>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            rec.priority === 'Alta' ? 'bg-red-500/20 text-red-400' :
                            rec.priority === 'Media' ? 'bg-amber-500/20 text-amber-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {rec.priority}
                          </span>
                        </div>
                        <div className="text-sm text-gray-400">Impacto estimado: {rec.impact}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Estado actual de la demo */}
            <div className="p-4 border-t border-white/10 bg-linear-to-r from-white/5 to-transparent">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    demoSteps[currentDemoStep].id === 'data-ingest' ? 'bg-[#1FB6A6]' :
                    demoSteps[currentDemoStep].id === 'analysis' ? 'bg-[#F5A623]' :
                    demoSteps[currentDemoStep].id === 'insights' ? 'bg-[#6366F1]' :
                    'bg-[#EC4899]'
                  } animate-pulse`} />
                  <div>
                    <div className="text-sm font-medium text-white">
                      {demoSteps[currentDemoStep].title}
                    </div>
                    <div className="text-xs text-gray-400">
                      {demoSteps[currentDemoStep].description}
                    </div>
                  </div>
                </div>
                <button className="text-sm text-[#1FB6A6] hover:text-[#2CD9C5] transition-colors">
                  Probar esta función →
                </button>
              </div>
            </div>
          </motion.div>

          {/* Tooltips interactivos */}
          <AnimatePresence>
            {hoveredElement && (
              interactiveElements.map((element) => (
                hoveredElement === element.id && (
                  <motion.div
                    key={element.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute z-50"
                    style={{
                      left: element.position.x,
                      top: element.position.y,
                      transform: 'translate(-50%, -100%)'
                    }}
                  >
                    <div className="relative w-64 p-4 rounded-xl bg-linear-to-br from-[#0B1C2D] to-[#0A1624] border border-white/20 shadow-2xl">
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-[#0B1C2D] border-r border-b border-white/20" />
                      <div className="flex items-start gap-3 mb-3">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${element.color}20` }}
                        >
                          <div style={{ color: element.color }}>
                            <Target className="w-5 h-5" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{element.title}</h4>
                          <p className="text-sm text-gray-300">{element.description}</p>
                        </div>
                      </div>
                      <button className="w-full py-2 rounded-lg bg-linear-to-r from-white/10 to-white/5 text-sm font-medium text-white hover:bg-white/20 transition-colors">
                        Explorar función
                      </button>
                    </div>
                  </motion.div>
                )
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Características destacadas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16"
        >
          {[
            {
              icon: <Zap className="w-6 h-6" />,
              title: 'Tiempo Real',
              description: 'Datos actualizados al instante',
              color: '#F5A623'
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: 'Seguro',
              description: 'Encriptación end-to-end',
              color: '#1FB6A6'
            },
            {
              icon: <Cpu className="w-6 h-6" />,
              title: 'Automático',
              description: 'Sin configuración manual',
              color: '#6366F1'
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${feature.color}20` }}
              >
                <div style={{ color: feature.color }}>
                  {feature.icon}
                </div>
              </div>
              <div>
                <div className="font-semibold text-white mb-1">{feature.title}</div>
                <div className="text-sm text-gray-400">{feature.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 rounded-xl bg-linear-to-r from-[#1FB6A6] to-[#1FB6A6]/90 text-white font-bold hover:shadow-2xl hover:shadow-[#1FB6A6]/20 transition-all">
              Probar Decisia Gratis
            </button>
            <button className="px-8 py-4 rounded-xl border-2 border-white/20 text-white font-medium hover:border-white/40 transition-all">
              Solicitar Demo Personalizada
            </button>
          </div>
          <p className="text-gray-400 mt-6 text-sm">
            Sin tarjeta de crédito • 14 días gratis • Setup en 2 minutos
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPreviewSection;