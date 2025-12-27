'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Brain,
  Database,
  Cpu,
  Target,
  Zap,
  TrendingUp,
  Sparkles,
  Layers,
  Workflow,
  Eye,
  BrainCircuit,
  CheckCircle,
  ArrowRight,
  Code,
  BarChart,
  Filter,
  Lightbulb,
  Shield,
  Clock,
  Users
} from 'lucide-react';

const DecisionIntelligenceSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeLayer, setActiveLayer] = useState('insights');

  // Capas de la Inteligencia Decisional
  const intelligenceLayers = [
    {
      id: 'data',
      title: 'Datos Crudos',
      icon: <Database className="w-6 h-6" />,
      description: 'Información desestructurada de múltiples fuentes',
      color: '#3B82F6',
      inputs: ['Ventas', 'Clientes', 'Costos', 'Operaciones'],
      outputs: 'Datos limpios'
    },
    {
      id: 'analytics',
      title: 'Analítica Básica',
      icon: <BarChart className="w-6 h-6" />,
      description: 'Métricas y KPIs organizados',
      color: '#8B5CF6',
      inputs: ['Datos limpios'],
      outputs: 'Métricas clave'
    },
    {
      id: 'insights',
      title: 'Insights Inteligentes',
      icon: <Brain className="w-6 h-6" />,
      description: 'Patrones, correlaciones y anomalías detectadas',
      color: '#1FB6A6',
      inputs: ['Métricas clave'],
      outputs: 'Revelaciones accionables'
    },
    {
      id: 'decisions',
      title: 'Decisiones Optimizadas',
      icon: <Target className="w-6 h-6" />,
      description: 'Recomendaciones específicas con impacto predecible',
      color: '#F5A623',
      inputs: ['Revelaciones accionables'],
      outputs: 'Acciones recomendadas'
    },
    {
      id: 'execution',
      title: 'Ejecución Automatizada',
      icon: <Zap className="w-6 h-6" />,
      description: 'Implementación y seguimiento automático',
      color: '#EC4899',
      inputs: ['Acciones recomendadas'],
      outputs: 'Resultados medidos'
    }
  ];

  // Proceso de Decisión Inteligente
  const decisionProcess = [
    {
      step: 1,
      title: 'Recolección de Contexto',
      description: 'Agrega datos de todas tus fuentes en un solo lugar',
      icon: <Database className="w-5 h-5" />,
      time: 'Instantáneo',
      accuracy: '100%',
      example: 'Ventas de Shopify + Gastos bancarios + Horas trabajadas'
    },
    {
      step: 2,
      title: 'Análisis Predictivo',
      description: 'IA identifica patrones y proyecta tendencias futuras',
      icon: <BrainCircuit className="w-5 h-5" />,
      time: '< 1 minuto',
      accuracy: '94%',
      example: 'Pronóstico de ventas para el próximo mes'
    },
    {
      step: 3,
      title: 'Generación de Opciones',
      description: 'Crea múltiples escenarios con diferentes variables',
      icon: <Layers className="w-5 h-5" />,
      time: '2 minutos',
      accuracy: 'N/A',
      example: '3 estrategias de precios con sus proyecciones'
    },
    {
      step: 4,
      title: 'Evaluación de Impacto',
      description: 'Calcula el ROI y riesgo de cada decisión',
      icon: <Target className="w-5 h-5" />,
      time: '30 segundos',
      accuracy: '87%',
      example: 'ROI esperado: 3.2x vs 1.8x vs 4.1x'
    },
    {
      step: 5,
      title: 'Recomendación Inteligente',
      description: 'Sugiere la mejor opción basada en tus objetivos',
      icon: <Sparkles className="w-5 h-5" />,
      time: 'Instantáneo',
      accuracy: '92%',
      example: 'Recomendación: Aumentar precios 15% en Producto X'
    }
  ];

  // Casos de uso específicos
  const useCases = [
    {
      scenario: '¿Debo contratar más personal?',
      traditional: 'Intuición + Conversaciones + Spreadsheets',
      traditionalTime: '2-3 semanas',
      traditionalAccuracy: '45%',
      decisia: 'Análisis de carga + ROI por empleado + Proyección',
      decisiaTime: '20 minutos',
      decisiaAccuracy: '89%',
      improvement: '44%'
    },
    {
      scenario: '¿Qué productos debo descontinuar?',
      traditional: 'Ventas históricas + Opinión personal',
      traditionalTime: '1 semana',
      traditionalAccuracy: '60%',
      decisia: 'Margen + Rotación + Costo de almacenamiento + Tendencia',
      decisiaTime: '5 minutos',
      decisiaAccuracy: '96%',
      improvement: '36%'
    },
    {
      scenario: '¿Cuándo hacer una campaña de marketing?',
      traditional: 'Calendario + Presupuesto + "Feeling"',
      traditionalTime: 'Varios días',
      traditionalAccuracy: '55%',
      decisia: 'Temporadas + Comportamiento cliente + ROI histórico',
      decisiaTime: '10 minutos',
      decisiaAccuracy: '91%',
      improvement: '36%'
    }
  ];

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
      id="inteligencia-decisional"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0D2238] via-[#0B1C2D] to-[#0A1624]"
    >
      {/* Fondo con circuitos neuronales */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Patrón de circuitos */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.03 }}>
          <defs>
            <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M0,50 Q25,25 50,50 T100,50"
                stroke="#1FB6A6"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M50,0 Q75,25 50,50 T50,100"
                stroke="#F5A623"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="50" cy="50" r="3" fill="#6366F1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>

        {/* Neuronas flotantes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + Math.sin(i) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
          >
            <div className="relative">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5]" />
              {[...Array(3)].map((_, j) => (
                <div
                  key={j}
                  className="absolute w-2 h-2 rounded-full bg-[#F5A623]"
                  style={{
                    left: `${Math.cos(j * 2.09) * 20}px`,
                    top: `${Math.sin(j * 2.09) * 20}px`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1FB6A6]/20 to-[#6366F1]/20 border border-[#1FB6A6]/30 mb-6">
            <BrainCircuit className="w-4 h-4 text-[#1FB6A6]" />
            <span className="text-sm font-medium text-white">Inteligencia Decisional</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="block text-white">Más que datos,</span>
            <span className="block bg-gradient-to-r from-[#1FB6A6] via-[#8B5CF6] to-[#F5A623] bg-clip-text text-transparent">
              sabiduría accionable
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
            La Inteligencia Decisional combina datos, análisis y contexto empresarial para transformar 
            información en decisiones estratégicas. No es solo qué pasó, sino qué hacer al respecto.
          </p>
        </motion.div>

        {/* Capas de Inteligencia - Visualización interactiva */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Las 5 Capas de la Inteligencia Decisional</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              De datos crudos a acciones automatizadas, cada capa añade valor y contexto
            </p>
          </div>

          {/* Selector de capas */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {intelligenceLayers.map((layer) => (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all ${
                  activeLayer === layer.id
                    ? 'bg-gradient-to-r from-white/10 to-white/5 border border-white/20'
                    : 'hover:bg-white/5 border border-transparent'
                }`}
                style={activeLayer === layer.id ? { borderLeftColor: layer.color, borderLeftWidth: '4px' } : {}}
              >
                <div style={{ color: layer.color }}>{layer.icon}</div>
                <span className="font-medium text-white">{layer.title}</span>
              </button>
            ))}
          </div>

          {/* Visualización de capas */}
          <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/10">
            {/* Líneas de conexión */}
            <svg className="absolute inset-0 w-full h-full">
              {intelligenceLayers.map((layer, index) => (
                index < intelligenceLayers.length - 1 && (
                  <motion.line
                    key={`line-${index}`}
                    x1={`${(index * 20) + 10}%`}
                    y1="50%"
                    x2={`${((index + 1) * 20) + 10}%`}
                    y2="50%"
                    stroke={layer.color}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                )
              ))}
            </svg>

            {/* Nodos de cada capa */}
            {intelligenceLayers.map((layer, index) => (
              <motion.div
                key={layer.id}
                className="absolute top-1/2 transform -translate-y-1/2"
                style={{ left: `${(index * 20) + 10}%` }}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1 }}
              >
                {/* Nodo principal */}
                <div
                  className={`relative w-20 h-20 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${
                    activeLayer === layer.id ? 'ring-4 ring-offset-2 ring-offset-[#0B1C2D]' : ''
                  }`}
                  style={{ 
                    backgroundColor: `${layer.color}20`,
                    border: `2px solid ${layer.color}40`,
                    boxShadow: activeLayer === layer.id ? `0 0 30px ${layer.color}40` : 'none'
                  }}
                  onClick={() => setActiveLayer(layer.id)}
                >
                  <div style={{ color: layer.color }} className="mb-1">
                    {layer.icon}
                  </div>
                  <span className="text-xs font-semibold text-white text-center">
                    {layer.title}
                  </span>
                </div>

                {/* Tooltip/Info al hacer hover */}
                {activeLayer === layer.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-4 w-64 p-4 rounded-xl bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/10 shadow-2xl"
                    style={{ left: '50%', transform: 'translateX(-50%)' }}
                  >
                    <h4 className="font-bold text-white mb-2">{layer.title}</h4>
                    <p className="text-sm text-gray-300 mb-4">{layer.description}</p>
                    
                    <div className="space-y-2">
                      <div className="text-xs text-gray-400">Entradas:</div>
                      <div className="flex flex-wrap gap-1">
                        {layer.inputs.map((input, i) => (
                          <span key={i} className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-300">
                            {input}
                          </span>
                        ))}
                      </div>
                      
                      <div className="text-xs text-gray-400 mt-3">Salida:</div>
                      <div className="px-3 py-2 rounded-lg bg-gradient-to-r from-white/5 to-transparent border border-white/10">
                        <span className="text-sm text-white">{layer.outputs}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}

            {/* Flecha de progreso */}
            <motion.div
              className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </div>

          {/* Descripción de la capa activa */}
          <motion.div
            key={activeLayer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10"
          >
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${intelligenceLayers.find(l => l.id === activeLayer)?.color}20` }}
              >
                <div style={{ color: intelligenceLayers.find(l => l.id === activeLayer)?.color }}>
                  {intelligenceLayers.find(l => l.id === activeLayer)?.icon}
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-white mb-2">
                  {intelligenceLayers.find(l => l.id === activeLayer)?.title}
                </h4>
                <p className="text-gray-300">
                  {intelligenceLayers.find(l => l.id === activeLayer)?.description}
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">Transforma:</span>
                    <span className="text-white font-medium">
                      {intelligenceLayers.find(l => l.id === activeLayer)?.inputs.join(' + ')}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#1FB6A6]" />
                    <span className="text-gray-400">En:</span>
                    <span className="text-white font-medium">
                      {intelligenceLayers.find(l => l.id === activeLayer)?.outputs}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Proceso de Decisión Inteligente */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Cómo toma decisiones Decisia</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Un proceso estructurado que combina datos, contexto y objetivos empresariales
            </p>
          </div>

          <div className="relative">
            {/* Línea de tiempo */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1FB6A6] via-[#8B5CF6] to-[#F5A623]" />

            {decisionProcess.map((step, index) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-8 mb-12`}
              >
                {/* Punto en la línea */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#0B1C2D] z-10"
                  style={{ top: '1.5rem', backgroundColor: intelligenceLayers[index]?.color }}
                />

                {/* Contenido */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                  <div className="bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/10 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${intelligenceLayers[index]?.color}20` }}
                      >
                        <div style={{ color: intelligenceLayers[index]?.color }}>
                          {step.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">{step.title}</h4>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="p-3 rounded-lg bg-white/5">
                        <div className="text-xs text-gray-400 mb-1">Tiempo</div>
                        <div className="text-sm font-semibold text-white flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {step.time}
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5">
                        <div className="text-xs text-gray-400 mb-1">Precisión</div>
                        <div className="text-sm font-semibold text-white flex items-center gap-1">
                          <Target className="w-3 h-3" />
                          {step.accuracy}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-white/5 to-transparent">
                      <div className="text-xs text-gray-400 mb-1">Ejemplo práctico:</div>
                      <div className="text-sm text-white">{step.example}</div>
                    </div>
                  </div>
                </div>

                {/* Número de paso */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B1C2D] to-[#1FB6A6]/20 border border-white/10 flex items-center justify-center flex-shrink-0 ${
                  index % 2 === 0 ? 'order-first' : 'order-last'
                }`}>
                  <span className="text-xl font-bold text-white">{step.step}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Comparativa: Tradicional vs Decisia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Decisión Tradicional vs Inteligencia Decisional
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Compara cómo se toman decisiones con y sin Decisia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                className="bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/10 rounded-2xl overflow-hidden"
              >
                <div className="p-6 border-b border-white/10">
                  <h4 className="text-lg font-bold text-white mb-3">{useCase.scenario}</h4>
                  
                  {/* Tradicional */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <span className="text-sm font-medium text-gray-400">Método Tradicional</span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-300">{useCase.traditional}</div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Tiempo:</span>
                        <span className="text-white">{useCase.traditionalTime}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Precisión:</span>
                        <span className="text-white">{useCase.traditionalAccuracy}</span>
                      </div>
                    </div>
                  </div>

                  {/* Decisia */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-[#1FB6A6]" />
                      <span className="text-sm font-medium text-gray-400">Con Decisia</span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-300">{useCase.decisia}</div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Tiempo:</span>
                        <span className="text-white">{useCase.decisiaTime}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Precisión:</span>
                        <span className="text-white">{useCase.decisiaAccuracy}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mejora */}
                <div className="p-4 bg-gradient-to-r from-[#1FB6A6]/10 to-transparent">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">Mejora en precisión</div>
                    <div className="text-lg font-bold text-white">+{useCase.improvement}</div>
                  </div>
                  <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5] rounded-full"
                      style={{ width: `${useCase.improvement}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center p-8 rounded-2xl bg-gradient-to-r from-[#1FB6A6]/10 via-[#8B5CF6]/5 to-[#F5A623]/10 border border-white/10">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Comienza a tomar decisiones más inteligentes hoy
              </h3>
              <p className="text-gray-300">
                Únete a miles de negocios que ya usan Inteligencia Decisional
              </p>
            </div>
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5] text-white font-bold hover:shadow-2xl hover:shadow-[#1FB6A6]/20 transition-all flex items-center gap-3">
              <BrainCircuit className="w-5 h-5" />
              Probar Decisia Gratis
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DecisionIntelligenceSection;