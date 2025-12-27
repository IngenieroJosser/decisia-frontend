'use client';

import { useState, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion'; // Agregar Variants al import
import {
  Store,
  Palette,
  Coffee,
  Briefcase,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  Target,
  CheckCircle,
  ArrowRight,
  Zap,
  Sparkles,
  BarChart3,
  BrainCircuit,
  Shield,
  Eye,
  PieChart,
  LineChart,
  Calendar,
  Filter
} from 'lucide-react';

const UseCasesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeUseCase, setActiveUseCase] = useState('retail');
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);

  // Casos de uso específicos para cada tipo de negocio
  const useCases = [
    {
      id: 'retail',
      title: 'Tienda Local',
      subtitle: 'Comercio minorista',
      icon: <Store className="w-8 h-8" />,
      color: '#1FB6A6',
      gradient: 'from-[#1FB6A6]/20 to-[#2CD9C5]/10',
      problem: {
        title: 'Gestión de inventario ineficiente',
        description: 'Exceso de stock en algunos productos y faltantes en otros, lo que genera pérdidas y ventas perdidas.',
        details: [
          'No sabes qué productos ordenar ni en qué cantidad',
          'Descuentos excesivos para liquidar stock viejo',
          'Clientes insatisfechos por productos agotados'
        ]
      },
      solution: {
        steps: [
          {
            icon: <BrainCircuit className="w-5 h-5" />,
            title: 'Predicción de demanda',
            description: 'Analiza patrones históricos y tendencias para predecir ventas futuras'
          },
          {
            icon: <Target className="w-5 h-5" />,
            title: 'Optimización de inventario',
            description: 'Sugiere cantidades ideales de pedido basadas en rotación y margen'
          },
          {
            icon: <BarChart3 className="w-5 h-5" />,
            title: 'Análisis de rentabilidad',
            description: 'Identifica qué productos generan más margen y cuáles no son rentables'
          }
        ],
        timeToValue: '2 semanas'
      },
      results: [
        { metric: '34%', label: 'Reducción en exceso de inventario', icon: <TrendingUp className="w-4 h-4" />, color: '#1FB6A6' },
        { metric: '28%', label: 'Aumento en ventas', icon: <DollarSign className="w-4 h-4" />, color: '#F5A623' },
        { metric: '56%', label: 'Menor tiempo en gestión', icon: <Clock className="w-4 h-4" />, color: '#6366F1' }
      ],
      testimonial: {
        quote: "Antes adivinábamos qué comprar. Ahora sabemos exactamente qué y cuánto ordenar. Redujimos nuestro inventario un 30% y aumentamos ventas.",
        author: "María González",
        role: "Propietaria de Boutique Elegante",
        improvement: "45% más eficiente"
      },
      demoData: {
        chart: [65, 78, 82, 90, 85, 88, 92, 95, 90, 85, 88, 94],
        topProducts: [
          { name: 'Camisetas Premium', margin: 42, stock: 'Óptimo' },
          { name: 'Jeans Clásicos', margin: 38, stock: 'Bajo' },
          { name: 'Chaquetas', margin: 55, stock: 'Óptimo' }
        ]
      }
    },
    {
      id: 'freelance',
      title: 'Freelancer',
      subtitle: 'Servicios profesionales',
      icon: <Palette className="w-8 h-8" />,
      color: '#F5A623',
      gradient: 'from-[#F5A623]/20 to-[#FFC107]/10',
      problem: {
        title: 'Inestabilidad de ingresos y mala gestión del tiempo',
        description: 'Proyectos irregulares, dificultad para fijar precios y tiempo perdido en tareas administrativas.',
        details: [
          'No sabes cuánto cobrar por tus servicios',
          'Tiempo improductivo entre proyectos',
          'Dificultad para proyectar ingresos futuros'
        ]
      },
      solution: {
        steps: [
          {
            icon: <LineChart className="w-5 h-5" />,
            title: 'Análisis de tarifas',
            description: 'Compara tus precios con el mercado y calcula tu valor hora ideal'
          },
          {
            icon: <Calendar className="w-5 h-5" />,
            title: 'Pronóstico de proyectos',
            description: 'Predice períodos ocupados y tiempos muertos para mejor planificación'
          },
          {
            icon: <PieChart className="w-5 h-5" />,
            title: 'Optimización de portafolio',
            description: 'Identifica qué tipos de proyectos son más rentables y satisfactorios'
          }
        ],
        timeToValue: '1 semana'
      },
      results: [
        { metric: '42%', label: 'Aumento en tarifa hora', icon: <DollarSign className="w-4 h-4" />, color: '#F5A623' },
        { metric: '65%', label: 'Menor tiempo administrativo', icon: <Clock className="w-4 h-4" />, color: '#1FB6A6' },
        { metric: '3.1x', label: 'ROI en herramientas', icon: <TrendingUp className="w-4 h-4" />, color: '#6366F1' }
      ],
      testimonial: {
        quote: "Dejé de adivinar cuánto cobrar. Ahora tengo datos que respaldan mis tarifas y puedo proyectar mis ingresos con meses de anticipación.",
        author: "Carlos Méndez",
        role: "Diseñador UX/UI Freelance",
        improvement: "Ingresos 60% más consistentes"
      },
      demoData: {
        chart: [45, 52, 60, 58, 65, 72, 68, 75, 82, 78, 85, 90],
        topProjects: [
          { name: 'Diseño App Móvil', rate: 85, satisfaction: 95 },
          { name: 'Rediseño Web', rate: 75, satisfaction: 88 },
          { name: 'Branding', rate: 90, satisfaction: 92 }
        ]
      }
    },
    {
      id: 'cafe',
      title: 'Cafetería',
      subtitle: 'Negocio de alimentos',
      icon: <Coffee className="w-8 h-8" />,
      color: '#8B5CF6',
      gradient: 'from-[#8B5CF6]/20 to-[#A78BFA]/10',
      problem: {
        title: 'Desperdicio de productos y poca optimización del menú',
        description: 'Alimentos que se echan a perder, precios incorrectos y horarios de demanda mal aprovechados.',
        details: [
          'No sabes cuánto preparar cada día',
          'Precios que no reflejan costos reales',
          'Horas pico mal atendidas'
        ]
      },
      solution: {
        steps: [
          {
            icon: <Filter className="w-5 h-5" />,
            title: 'Análisis de desperdicio',
            description: 'Identifica patrones de consumo para reducir mermas'
          },
          {
            icon: <DollarSign className="w-5 h-5" />,
            title: 'Precios dinámicos',
            description: 'Ajusta precios según costo, demanda y competencia'
          },
          {
            icon: <Clock className="w-5 h-5" />,
            title: 'Optimización de horarios',
            description: 'Recomienda mejores horarios de preparación y personal'
          }
        ],
        timeToValue: '3 semanas'
      },
      results: [
        { metric: '62%', label: 'Reducción en desperdicio', icon: <TrendingUp className="w-4 h-4" />, color: '#8B5CF6' },
        { metric: '23%', label: 'Aumento en margen', icon: <DollarSign className="w-4 h-4" />, color: '#F5A623' },
        { metric: '41%', label: 'Mejor satisfacción cliente', icon: <Users className="w-4 h-4" />, color: '#1FB6A6' }
      ],
      testimonial: {
        quote: "Antes tirabamos café y comida todos los días. Ahora preparamos exactamente lo que vamos a vender. Nuestro margen mejoró un 25%.",
        author: "Ana Rodríguez",
        role: "Dueña de Café Artesanal",
        improvement: "Desperdicio reducido en 62%"
      },
      demoData: {
        chart: [72, 68, 75, 82, 85, 90, 88, 85, 82, 78, 75, 80],
        topItems: [
          { name: 'Café Especial', margin: 65, waste: 'Bajo' },
          { name: 'Pastel de Chocolate', margin: 58, waste: 'Medio' },
          { name: 'Sándwich Club', margin: 48, waste: 'Alto' }
        ]
      }
    },
    {
      id: 'consultancy',
      title: 'Consultoría',
      subtitle: 'Servicios profesionales',
      icon: <Briefcase className="w-8 h-8" />,
      color: '#EC4899',
      gradient: 'from-[#EC4899]/20 to-[#F472B6]/10',
      problem: {
        title: 'Ineficiencia en asignación de recursos y seguimiento de proyectos',
        description: 'Clientes que pagan tarde, proyectos que exceden el presupuesto y recursos mal utilizados.',
        details: [
          'No sabes qué proyectos son más rentables',
          'Horas no facturadas por mala tracking',
          'Dificultad para escalar el negocio'
        ]
      },
      solution: {
        steps: [
          {
            icon: <Eye className="w-5 h-5" />,
            title: 'Seguimiento de rentabilidad',
            description: 'Monitorea en tiempo real el margen de cada proyecto'
          },
          {
            icon: <Users className="w-5 h-5" />,
            title: 'Optimización de recursos',
            description: 'Asigna el personal adecuado a cada tipo de proyecto'
          },
          {
            icon: <Shield className="w-5 h-5" />,
            title: 'Predicción de cash flow',
            description: 'Anticipa ingresos y egresos para mejor planificación financiera'
          }
        ],
        timeToValue: '2 semanas'
      },
      results: [
        { metric: '51%', label: 'Aumento en facturación', icon: <DollarSign className="w-4 h-4" />, color: '#EC4899' },
        { metric: '37%', label: 'Menor tiempo no facturado', icon: <Clock className="w-4 h-4" />, color: '#1FB6A6' },
        { metric: '2.8x', label: 'ROI por cliente', icon: <TrendingUp className="w-4 h-4" />, color: '#F5A623' }
      ],
      testimonial: {
        quote: "Pasamos de trabajar mucho a trabajar inteligentemente. Ahora sabemos exactamente qué proyectos tomar y cómo asignar nuestro equipo.",
        author: "Roberto Sánchez",
        role: "Socio de Consultoría Estratégica",
        improvement: "Facturación 50% más alta"
      },
      demoData: {
        chart: [55, 60, 65, 70, 75, 80, 85, 88, 85, 90, 92, 95],
        topClients: [
          { name: 'Tech Startup A', profitability: 72, payment: 'Puntual' },
          { name: 'Retail Chain B', profitability: 65, payment: 'Retrasado' },
          { name: 'Manufacturer C', profitability: 88, payment: 'Puntual' }
        ]
      }
    }
  ];

  const activeCase = useCases.find(uc => uc.id === activeUseCase) || useCases[0];

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

  return (
    <section 
      ref={sectionRef}
      id="casos-de-uso"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0B1C2D] via-[#0D2238] to-[#0B1C2D]"
    >
      {/* Fondo con elementos de negocio */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Patrones de diferentes negocios */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, #1FB6A6 1px, transparent 1px),
              radial-gradient(circle at 80% 40%, #F5A623 1px, transparent 1px),
              radial-gradient(circle at 40% 70%, #8B5CF6 1px, transparent 1px),
              radial-gradient(circle at 60% 20%, #EC4899 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
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
            <Target className="w-4 h-4 text-[#F5A623]" />
            <span className="text-sm font-medium text-white">Casos de Uso Específicos</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block text-white">Decisia funciona para</span>
            <span className="block bg-gradient-to-r from-[#1FB6A6] via-[#F5A623] to-[#8B5CF6] bg-clip-text text-transparent">
              tu tipo de negocio
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Descubre cómo negocios como el tuyo están transformando su operación con inteligencia decisional.
            Selecciona tu perfil para ver resultados específicos.
          </p>
        </motion.div>

        {/* Selector de casos de uso */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
        >
          {useCases.map((useCase) => (
            <motion.button
              key={useCase.id}
              variants={itemVariants}
              onClick={() => setActiveUseCase(useCase.id)}
              className={`relative p-6 rounded-2xl border-2 transition-all duration-300 group ${
                activeUseCase === useCase.id
                  ? 'border-white/30 bg-gradient-to-br from-white/10 to-transparent'
                  : 'border-white/10 hover:border-white/20 bg-white/5'
              }`}
              style={
                activeUseCase === useCase.id
                  ? { borderColor: useCase.color }
                  : {}
              }
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all ${
                    activeUseCase === useCase.id
                      ? 'scale-110'
                      : 'group-hover:scale-105'
                  }`}
                  style={{
                    backgroundColor: `${useCase.color}20`,
                    border: `2px solid ${useCase.color}40`
                  }}
                >
                  <div style={{ color: useCase.color }}>
                    {useCase.icon}
                  </div>
                </div>
                <h3 className="font-bold text-white mb-1">{useCase.title}</h3>
                <p className="text-sm text-gray-400">{useCase.subtitle}</p>
              </div>

              {/* Indicador activo */}
              {activeUseCase === useCase.id && (
                <motion.div
                  layoutId="active-indicator"
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45"
                  style={{ backgroundColor: useCase.color }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Detalles del caso de uso activo */}
        <motion.div
          key={activeUseCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Columna izquierda: Problema y Solución */}
            <div className="space-y-8">
              {/* Problema */}
              <div className="bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-red-900/10 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">?</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">El Problema</h3>
                    <p className="text-gray-400">¿Qué enfrentan negocios como el tuyo?</p>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-white mb-3">
                  {activeCase.problem.title}
                </h4>
                <p className="text-gray-300 mb-6">
                  {activeCase.problem.description}
                </p>

                <div className="space-y-3">
                  {activeCase.problem.details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2" />
                      <span className="text-gray-300">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Solución */}
              <div className="bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${activeCase.color}20` }}
                  >
                    <Sparkles className="w-6 h-6" style={{ color: activeCase.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">La Solución Decisia</h3>
                    <p className="text-gray-400">Cómo transformamos el problema</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {activeCase.solution.steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${activeCase.color}20` }}
                      >
                        <div style={{ color: activeCase.color }}>
                          {step.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{step.title}</h4>
                        <p className="text-sm text-gray-300">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-400">Tiempo hasta ver resultados</div>
                      <div className="text-lg font-bold text-white">{activeCase.solution.timeToValue}</div>
                    </div>
                    <Zap className="w-5 h-5 text-[#F5A623]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Columna derecha: Resultados y Demo */}
            <div className="space-y-8">
              {/* Resultados */}
              <div className="bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-white">Resultados Medibles</h3>
                    <p className="text-gray-400">Mejoras específicas obtenidas</p>
                  </div>
                  <TrendingUp className="w-6 h-6 text-[#1FB6A6]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {activeCase.results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onMouseEnter={() => setHoveredMetric(result.label)}
                      onMouseLeave={() => setHoveredMetric(null)}
                      className={`p-4 rounded-xl transition-all ${
                        hoveredMetric === result.label
                          ? 'bg-gradient-to-br from-white/10 to-transparent border-white/20'
                          : 'bg-white/5 border-white/10'
                      } border`}
                      style={{
                        borderColor: hoveredMetric === result.label ? result.color : undefined
                      }}
                    >
                      <div className="text-3xl font-bold text-white mb-2" style={{ color: result.color }}>
                        {result.metric}
                      </div>
                      <div className="flex items-center gap-2">
                        <div style={{ color: result.color }}>
                          {result.icon}
                        </div>
                        <span className="text-sm text-gray-300">{result.label}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Gráfico de demostración */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Progreso típico</h4>
                  <div className="h-48 relative">
                    {/* Grid de fondo */}
                    <div className="absolute inset-0 flex flex-col justify-between">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-px bg-white/10 w-full" />
                      ))}
                    </div>
                    
                    {/* Línea del gráfico */}
                    <svg className="w-full h-full" viewBox="0 0 400 200">
                      <path
                        d={`M0,${200 - activeCase.demoData.chart[0]} ${activeCase.demoData.chart.map((value, i) => `L ${i * 33},${200 - value}`).join(' ')}`}
                        fill="none"
                        stroke={activeCase.color}
                        strokeWidth="3"
                        strokeDasharray="10"
                      />
                      <path
                        d={`M0,${200 - activeCase.demoData.chart[0]} ${activeCase.demoData.chart.map((value, i) => `L ${i * 33},${200 - value}`).join(' ')}`}
                        fill={`url(#gradient-${activeCase.id})`}
                        stroke="none"
                        opacity="0.2"
                      />
                      <defs>
                        <linearGradient id={`gradient-${activeCase.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor={activeCase.color} stopOpacity="0.4" />
                          <stop offset="100%" stopColor={activeCase.color} stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Datos específicos */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10">
                  <h4 className="font-semibold text-white mb-3">Insights específicos</h4>
                  <div className="space-y-2">
                    {/* Verificar tipo de caso para mostrar datos específicos */}
                    {activeCase.id === 'retail' && 'topProducts' in activeCase.demoData && (
                      <>
                        {(activeCase.demoData as any).topProducts.map((product: any, i: number) => (
                          <div key={i} className="flex items-center justify-between text-sm">
                            <span className="text-gray-300">{product.name}</span>
                            <div className="flex items-center gap-3">
                              <span className="text-gray-400">Margen: {product.margin}%</span>
                              <span className={`px-2 py-1 rounded text-xs ${
                                product.stock === 'Óptimo' ? 'bg-green-500/20 text-green-400' :
                                product.stock === 'Bajo' ? 'bg-red-500/20 text-red-400' :
                                'bg-yellow-500/20 text-yellow-400'
                              }`}>
                                {product.stock}
                              </span>
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                    {activeCase.id === 'freelance' && 'topProjects' in activeCase.demoData && (
                      <>
                        {(activeCase.demoData as any).topProjects.map((project: any, i: number) => (
                          <div key={i} className="flex items-center justify-between text-sm">
                            <span className="text-gray-300">{project.name}</span>
                            <div className="flex items-center gap-3">
                              <span className="text-gray-400">Tarifa: ${project.rate}/h</span>
                              <span className="text-gray-400">Satisfacción: {project.satisfaction}%</span>
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                    {activeCase.id === 'cafe' && 'topItems' in activeCase.demoData && (
                      <>
                        {(activeCase.demoData as any).topItems.map((item: any, i: number) => (
                          <div key={i} className="flex items-center justify-between text-sm">
                            <span className="text-gray-300">{item.name}</span>
                            <div className="flex items-center gap-3">
                              <span className="text-gray-400">Margen: {item.margin}%</span>
                              <span className={`px-2 py-1 rounded text-xs ${
                                item.waste === 'Bajo' ? 'bg-green-500/20 text-green-400' :
                                item.waste === 'Medio' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-red-500/20 text-red-400'
                              }`}>
                                Desperdicio: {item.waste}
                              </span>
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                    {activeCase.id === 'consultancy' && 'topClients' in activeCase.demoData && (
                      <>
                        {(activeCase.demoData as any).topClients.map((client: any, i: number) => (
                          <div key={i} className="flex items-center justify-between text-sm">
                            <span className="text-gray-300">{client.name}</span>
                            <div className="flex items-center gap-3">
                              <span className="text-gray-400">Rentabilidad: {client.profitability}%</span>
                              <span className={`px-2 py-1 rounded text-xs ${
                                client.payment === 'Puntual' ? 'bg-green-500/20 text-green-400' :
                                'bg-red-500/20 text-red-400'
                              }`}>
                                {client.payment}
                              </span>
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Testimonio */}
              <div className={`bg-gradient-to-br ${activeCase.gradient} border border-white/10 rounded-2xl p-6`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Testimonio Real</h3>
                    <p className="text-sm text-white/80">Historia verificada</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="text-4xl text-white/20 absolute -top-4 -left-2">"</div>
                  <p className="text-white mb-6 relative z-10">
                    {activeCase.testimonial.quote}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">{activeCase.testimonial.author}</div>
                      <div className="text-sm text-white/80">{activeCase.testimonial.role}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-white">{activeCase.testimonial.improvement}</div>
                      <div className="text-sm text-white/80">Mejora total</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA específico */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="inline-flex flex-col sm:flex-row gap-6 items-center p-8 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/10">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  ¿Te identificas con este caso de uso?
                </h3>
                <p className="text-gray-300">
                  Miles de {activeCase.subtitle.toLowerCase()} ya están obteniendo estos resultados
                </p>
              </div>
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5] text-white font-bold hover:shadow-2xl hover:shadow-[#1FB6A6]/20 transition-all flex items-center gap-3 group">
                <span>Probar Decisia para {activeCase.title}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesSection;