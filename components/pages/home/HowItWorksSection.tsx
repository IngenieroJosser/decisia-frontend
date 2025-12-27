'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Upload,
  Cpu,
  Brain,
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
  Users,
  BarChart3,
  TrendingUp,
  Filter,
  Database,
  LineChart,
  PieChart,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  Repeat
} from 'lucide-react';

const HowItWorksSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  // Pasos del proceso
  const steps = [
    {
      number: 1,
      title: 'Conecta tus datos',
      subtitle: 'Integración sin código',
      icon: <Upload className="w-8 h-8" />,
      color: '#3B82F6',
      duration: '2 minutos',
      description: 'Conecta todas tus fuentes de datos en un solo lugar sin complicaciones técnicas.',
      features: [
        'CSV/Excel upload',
        'Conexiones API automáticas',
        'POS, Stripe, Shopify',
        'Bancos y facturación'
      ],
      visualization: 'DataFlow',
      demo: {
        title: 'Sin configuración técnica',
        description: 'Interfaz drag & drop para conectar tus fuentes',
        time: '< 2min setup'
      }
    },
    {
      number: 2,
      title: 'Procesamiento inteligente',
      subtitle: 'Análisis automático por IA',
      icon: <Cpu className="w-8 h-8" />,
      color: '#8B5CF6',
      duration: 'Instantáneo',
      description: 'Nuestra IA limpia, organiza y prepara tus datos para análisis en segundos.',
      features: [
        'Limpieza automática',
        'Normalización de datos',
        'Detección de anomalías',
        'Enriquecimiento contextual'
      ],
      visualization: 'Processing',
      demo: {
        title: 'Procesamiento en tiempo real',
        description: 'Transforma datos crudos en información estructurada',
        time: 'Segundos'
      }
    },
    {
      number: 3,
      title: 'Análisis predictivo',
      subtitle: 'Insights con IA avanzada',
      icon: <Brain className="w-8 h-8" />,
      color: '#1FB6A6',
      duration: '< 1 minuto',
      description: 'Modelos de IA encuentran patrones, predicen tendencias y detectan oportunidades.',
      features: [
        'Forecasting automático',
        'Segmentación inteligente',
        'Detección de correlaciones',
        'Análisis de sentimiento'
      ],
      visualization: 'Analysis',
      demo: {
        title: 'Predictions en vivo',
        description: 'Genera pronósticos precisos con un clic',
        time: '30 segundos'
      }
    },
    {
      number: 4,
      title: 'Recomendaciones accionables',
      subtitle: 'Decisiones claras y específicas',
      icon: <Target className="w-8 h-8" />,
      color: '#F5A623',
      duration: 'Instantáneo',
      description: 'Recibe recomendaciones concretas con impacto predecible para tu negocio.',
      features: [
        'Acciones específicas',
        'Impacto cuantificado',
        'Priorización automática',
        'Seguimiento de resultados'
      ],
      visualization: 'Recommendations',
      demo: {
        title: 'Decisiones optimizadas',
        description: 'De insights abstractos a acciones concretas',
        time: 'Tiempo real'
      }
    },
    {
      number: 5,
      title: 'Ejecución y monitoreo',
      subtitle: 'Resultados en tiempo real',
      icon: <Zap className="w-8 h-8" />,
      color: '#EC4899',
      duration: 'Continuo',
      description: 'Implementa las decisiones y monitorea los resultados automáticamente.',
      features: [
        'Dashboard en vivo',
        'Alertas automáticas',
        'Reportes automáticos',
        'Optimización continua'
      ],
      visualization: 'Monitoring',
      demo: {
        title: 'Resultados medibles',
        description: 'Ve el impacto de cada decisión en tiempo real',
        time: '24/7'
      }
    }
  ];

  // Contenido demo por paso
  const demoContent = {
    DataFlow: {
      title: 'Flujo de datos unificado',
      metrics: [
        { label: 'Fuentes conectadas', value: '3', change: '+100%' },
        { label: 'Datos procesados', value: '15,420', change: '↗' },
        { label: 'Tiempo de sync', value: '< 5min', change: '' }
      ],
      visualization: (
        <div className="relative h-48">
          {/* Fuentes de datos */}
          <div className="absolute left-4 top-1/4 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30 flex items-center justify-center">
            <Database className="w-6 h-6 text-blue-400" />
          </div>
          <div className="absolute left-20 top-1/3 w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/30 flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-green-400" />
          </div>
          <div className="absolute left-36 top-1/2 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 flex items-center justify-center">
            <Users className="w-6 h-6 text-purple-400" />
          </div>

          {/* Flechas de conexión */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
              </marker>
            </defs>
            <path
              d="M64,40 L120,40 L160,80"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
              strokeDasharray="5"
            />
            <path
              d="M144,56 L200,56 L240,96"
              stroke="#10B981"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
              strokeDasharray="5"
            />
          </svg>

          {/* Centro de procesamiento */}
          <div className="absolute right-20 top-1/2 transform -translate-y-1/2 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1FB6A6]/20 to-[#1FB6A6]/5 border-2 border-[#1FB6A6]/30 flex items-center justify-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1FB6A6] to-[#2CD9C5] flex items-center justify-center">
              <Upload className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      )
    },
    Processing: {
      title: 'Procesamiento inteligente',
      metrics: [
        { label: 'Datos limpios', value: '100%', change: '' },
        { label: 'Anomalías detectadas', value: '12', change: '' },
        { label: 'Procesamiento', value: '98%', change: '' }
      ],
      visualization: (
        <div className="relative h-48">
          {/* Datos entrando */}
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
            <div className="flex flex-col gap-2">
              {['Ventas', 'Clientes', 'Costos', 'Operaciones'].map((item, i) => (
                <motion.div
                  key={item}
                  animate={{ x: [0, 200, 0] }}
                  transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Procesador central */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="relative w-24 h-24"
            >
              <div className="absolute inset-0 rounded-full border-2 border-[#8B5CF6]/30" />
              <div className="absolute inset-4 rounded-full border-2 border-[#8B5CF6]/50" />
              <div className="absolute inset-8 rounded-full border-2 border-[#8B5CF6]/70" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Cpu className="w-8 h-8 text-[#8B5CF6]" />
              </div>
            </motion.div>
          </div>

          {/* Datos procesados */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
            <div className="flex flex-col gap-2">
              {['KPIs', 'Tendencias', 'Segmentos', 'Alertas'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#8B5CF6]/20 to-transparent border border-[#8B5CF6]/30 text-xs text-white font-medium"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    Analysis: {
      title: 'Análisis predictivo',
      metrics: [
        { label: 'Precisión', value: '94%', change: ''},
        { label: 'Patrones', value: '28', change: '' },
        { label: 'Predicciones', value: '15', change: '' }
      ],
      visualization: (
        <div className="relative h-48">
          {/* Gráfico de predicción */}
          <div className="absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              {/* Línea histórica */}
              <path
                d="M0,150 Q50,130 100,140 Q150,150 200,120 Q250,90 300,100 Q350,110 400,80"
                fill="none"
                stroke="#1FB6A6"
                strokeWidth="3"
                opacity="0.7"
              />
              
              {/* Línea de predicción */}
              <path
                d="M200,120 Q250,90 300,100 Q350,110 400,80 L450,60 L500,40"
                fill="none"
                stroke="#1FB6A6"
                strokeWidth="3"
                strokeDasharray="5,5"
              />
              
              {/* Área de predicción */}
              <path
                d="M200,120 Q250,90 300,100 Q350,110 400,80 L400,200 L200,200 Z"
                fill="url(#prediction-gradient)"
                opacity="0.2"
              />
              
              <defs>
                <linearGradient id="prediction-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1FB6A6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#1FB6A6" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Punto de inicio predicción */}
              <circle cx="200" cy="120" r="4" fill="#1FB6A6" />
              <text x="210" y="115" fill="#1FB6A6" fontSize="12">Hoy</text>
            </svg>
          </div>

          {/* Brain icon animado */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-4 right-8"
          >
            <Brain className="w-10 h-10 text-[#1FB6A6]" />
          </motion.div>
        </div>
      )
    },
    Recommendations: {
      title: 'Recomendaciones accionables',
      metrics: [
        { label: 'Acciones', value: '5', change: '' },
        { label: 'Impacto', value: '+23%', change: '' },
        { label: 'Prioridad', value: 'Alta', change: '' }
      ],
      visualization: (
        <div className="relative h-48">
          {/* Tarjetas de recomendación */}
          <div className="absolute inset-0 flex flex-col gap-3">
            {[
              { action: 'Ajustar precios Producto X', impact: '+12% margen', priority: 'Alta' },
              { action: 'Contactar clientes en riesgo', impact: '+8% retención', priority: 'Media' },
              { action: 'Optimizar horario atención', impact: '+15% eficiencia', priority: 'Baja' }
            ].map((rec, i) => (
              <motion.div
                key={i}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-[#F5A623]/10 to-transparent border border-[#F5A623]/20"
              >
                <div>
                  <div className="text-sm font-medium text-white">{rec.action}</div>
                  <div className="text-xs text-gray-400">Impacto: {rec.impact}</div>
                </div>
                <div className={`px-2 py-1 rounded text-xs font-medium ${
                  rec.priority === 'Alta' ? 'bg-red-500/20 text-red-400' :
                  rec.priority === 'Media' ? 'bg-amber-500/20 text-amber-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {rec.priority}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Target animado */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-2 -right-2"
          >
            <Target className="w-8 h-8 text-[#F5A623]" />
          </motion.div>
        </div>
      )
    },
    Monitoring: {
      title: 'Monitoreo en tiempo real',
      metrics: [
        { label: 'Uptime', value: '99.9%', change: '' },
        { label: 'Alertas', value: '3', change: '' },
        { label: 'Optimizaciones', value: '7', change: '' }
      ],
      visualization: (
        <div className="relative h-48">
          {/* Dashboard en vivo */}
          <div className="absolute inset-0 grid grid-cols-3 gap-2">
            {[
              { value: '23.4%', label: 'Crecimiento', trend: 'up' },
              { value: '87%', label: 'Satisfacción', trend: 'up' },
              { value: '2.1%', label: 'Churn', trend: 'down' },
              { value: '15,420', label: 'Ventas', trend: 'up' },
              { value: '3.2x', label: 'ROI', trend: 'up' },
              { value: '94%', label: 'Precisión', trend: 'steady' }
            ].map((metric, i) => (
              <div
                key={i}
                className="p-2 rounded-lg bg-white/5 border border-white/10"
              >
                <div className="text-lg font-bold text-white">{metric.value}</div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{metric.label}</span>
                  {metric.trend === 'up' && <TrendingUp className="w-3 h-3 text-green-400" />}
                  {metric.trend === 'down' && <TrendingUp className="w-3 h-3 text-red-400 rotate-180" />}
                  {metric.trend === 'steady' && <div className="w-3 h-3 rounded-full bg-gray-400" />}
                </div>
              </div>
            ))}
          </div>

          {/* Indicador de actividad */}
          <div className="absolute -top-2 -left-2">
            <div className="relative">
              <div className="w-4 h-4 rounded-full bg-green-400 animate-ping" />
              <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-green-500" />
            </div>
          </div>
        </div>
      )
    }
  };

  const currentDemo = demoContent[steps[activeStep].visualization as keyof typeof demoContent];

  // Auto-play steps
  React.useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, steps.length]);

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
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

  return (
    <section 
      ref={sectionRef}
      id="como-funciona"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0D2238] via-[#0B1C2D] to-[#0A1624]"
    >
      {/* Fondo con patrones de flujo */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 20%, #1FB6A6 1px, transparent 1px),
              radial-gradient(circle at 70% 40%, #F5A623 1px, transparent 1px),
              radial-gradient(circle at 40% 60%, #8B5CF6 1px, transparent 1px),
              radial-gradient(circle at 80% 80%, #EC4899 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
        
        {/* Líneas de flujo animadas */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
          <path
            d="M0,100 C150,50 300,150 450,100 S600,50 750,100 S900,150 1200,100"
            stroke="#1FB6A6"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="100"
              dur="5s"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1FB6A6]/20 to-[#F5A623]/20 border border-[#1FB6A6]/30 mb-6">
            <Zap className="w-4 h-4 text-[#F5A623]" />
            <span className="text-sm font-medium text-white">Proceso Simple</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block text-white">Cómo funciona</span>
            <span className="block bg-gradient-to-r from-[#1FB6A6] via-[#8B5CF6] to-[#F5A623] bg-clip-text text-transparent">
              Decisia en 5 pasos
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Desde la conexión de tus datos hasta decisiones optimizadas, cada paso es simple, 
            rápido y completamente automatizado.
          </p>
        </motion.div>

        {/* Controles del proceso */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          {/* Controles de navegación */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveStep(prev => (prev - 1 + steps.length) % steps.length)}
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>
            
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="p-3 rounded-xl bg-gradient-to-r from-[#1FB6A6]/20 to-[#1FB6A6]/10 border border-[#1FB6A6]/30 hover:border-[#1FB6A6]/50 transition-all"
            >
              {isAutoPlaying ? (
                <Pause className="w-5 h-5 text-[#1FB6A6]" />
              ) : (
                <Play className="w-5 h-5 text-[#1FB6A6]" />
              )}
            </button>
            
            <button
              onClick={() => setActiveStep(prev => (prev + 1) % steps.length)}
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
            >
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Indicadores de progreso */}
          <div className="flex items-center gap-2">
            {steps.map((step, index) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(index)}
                className={`relative w-12 h-2 rounded-full transition-all ${
                  activeStep === index
                    ? 'bg-gradient-to-r from-[#1FB6A6] to-[#F5A623]'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                {activeStep === index && (
                  <motion.div
                    layoutId="active-step"
                    className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-white border-4 border-[#0B1C2D] flex items-center justify-center"
                    style={{ backgroundColor: step.color }}
                  >
                    <span className="text-xs font-bold text-white">{step.number}</span>
                  </motion.div>
                )}
              </button>
            ))}
          </div>

          {/* Botón de reinicio */}
          <button
            onClick={() => setActiveStep(0)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
          >
            <Repeat className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">Reiniciar</span>
          </button>
        </motion.div>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Columna izquierda: Pasos del proceso */}
          <div>
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/10 rounded-2xl p-8"
            >
              {/* Header del paso */}
              <div className="flex items-start gap-6 mb-8">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center relative"
                  style={{ backgroundColor: `${steps[activeStep].color}20` }}
                >
                  <div style={{ color: steps[activeStep].color }}>
                    {steps[activeStep].icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-[#0B1C2D] to-[#1FB6A6]/20 border-2 border-[#0B1C2D] flex items-center justify-center">
                    <span className="text-lg font-bold text-white">{steps[activeStep].number}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">{steps[activeStep].title}</h3>
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-white/10 text-white">
                      {steps[activeStep].duration}
                    </span>
                  </div>
                  <p className="text-lg text-gray-300 mb-4">{steps[activeStep].subtitle}</p>
                  <p className="text-gray-400">{steps[activeStep].description}</p>
                </div>
              </div>

              {/* Características */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Qué incluye este paso:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {steps[activeStep].features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      onMouseEnter={() => setHoveredFeature(feature)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      <CheckCircle className="w-4 h-4 text-[#1FB6A6]" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Demo info */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-5 h-5 text-[#F5A623]" />
                  <span className="font-medium text-white">{steps[activeStep].demo.title}</span>
                </div>
                <p className="text-sm text-gray-400 mb-2">{steps[activeStep].demo.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Demo en vivo</span>
                  <span className="text-sm font-medium text-white flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {steps[activeStep].demo.time}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Timeline de pasos */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400">Progreso del proceso</span>
                <span className="text-sm font-medium text-white">
                  Paso {activeStep + 1} de {steps.length}
                </span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#1FB6A6] via-[#8B5CF6] to-[#F5A623]"
                  initial={{ width: '0%' }}
                  animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>

          {/* Columna derecha: Visualización del paso */}
          <div>
            <motion.div
              key={steps[activeStep].visualization}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/10 rounded-2xl p-8 h-full"
            >
              {/* Header de la visualización */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{currentDemo.title}</h3>
                  <p className="text-gray-400">Demostración en tiempo real</p>
                </div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${steps[activeStep].color}20` }}
                >
                  <div style={{ color: steps[activeStep].color }}>
                    {steps[activeStep].icon}
                  </div>
                </div>
              </div>

              {/* Métricas del paso */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {currentDemo.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{metric.label}</span>
                      <span className="text-xs">{metric.change}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Visualización principal */}
              <div className="relative">
                {currentDemo.visualization}
                
                {/* Efecto de borde animado */}
                <div className="absolute -inset-1 rounded-2xl border-2 border-transparent">
                  <div className="absolute inset-0 rounded-2xl border-2 border-[#1FB6A6]/10 animate-pulse" />
                </div>
              </div>

              {/* Leyenda */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#1FB6A6]" />
                    <span className="text-gray-400">Proceso automático</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#F5A623]" />
                    <span className="text-gray-400">Datos en tiempo real</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#8B5CF6]" />
                    <span className="text-gray-400">IA trabajando</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Resumen del proceso */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-[#1FB6A6]/10 via-[#8B5CF6]/5 to-[#F5A623]/10 border border-white/10">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">2 minutos</div>
                <div className="text-gray-400">Para comenzar</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">0 código</div>
                <div className="text-gray-400">Configuración necesaria</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Monitoreo automático</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center p-8 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/10">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                ¿Listo para comenzar?
              </h3>
              <p className="text-gray-300">
                Miles de negocios ya están tomando mejores decisiones con Decisia
              </p>
            </div>
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5] text-white font-bold hover:shadow-2xl hover:shadow-[#1FB6A6]/20 transition-all flex items-center gap-3 group">
              <span>Comenzar proceso gratuito</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;