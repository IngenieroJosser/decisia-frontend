'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Sparkles, 
  BarChart3, 
  BrainCircuit,
  ChevronRight,
  Zap,
  Target,
  Lightbulb,
  Shield
} from 'lucide-react';

const HeroSection = () => {
  const [activeInsight, setActiveInsight] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Rotación automática de insights
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveInsight((prev) => (prev + 1) % insights.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovering]);

  // Insights estratégicos
  const insights = [
    {
      id: 1,
      question: "¿Voy a vender más o menos el próximo mes?",
      insight: "+23% ventas proyectadas",
      action: "Aumentar inventario",
      color: "#1FB6A6"
    },
    {
      id: 2,
      question: "¿Qué clientes están en riesgo?",
      insight: "12 clientes inactivos",
      action: "Campaña de retención",
      color: "#F5A623"
    },
    {
      id: 3,
      question: "¿Dónde estoy perdiendo dinero?",
      insight: "Costo operativo +18%",
      action: "Optimizar procesos",
      color: "#6366F1"
    }
  ];

  // Datos para el gráfico animado
  const dataPoints = [30, 45, 60, 80, 95, 85, 75, 90, 100, 85];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#0B1C2D] overflow-hidden">
      
      {/* Fondo de partículas minimalista */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C2D] via-[#0A1929] to-[#0B1C2D]" />
        
        {/* Grid de datos sutil */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #1FB6A6 1px, transparent 1px),
              linear-gradient(180deg, #1FB6A6 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Luz focalizada */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1FB6A6]/5 via-transparent to-transparent blur-3xl" />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-32">
        
        {/* Navegación minimalista */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex justify-between items-center mb-16 md:mb-24"
        >
          {/* Logo + Brand */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1FB6A6] to-[#0B1C2D] flex items-center justify-center shadow-lg">
                {/* <BrainCircuit className="w-5 h-5 text-white" /> */}
                <Image 
                  src='/decisia-logo-without-bg.png'
                  alt='Logo Oficial de Decisia'
                  width={100}
                  height={100}
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 border-2 border-[#1FB6A6]/20 rounded-xl"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Decisia
            </span>
          </div>

          {/* CTA de acceso */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/login"
              className="px-6 py-2.5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all duration-300"
            >
              Acceder a la plataforma
            </Link>
          </motion.div>
        </motion.div>

        {/* Grid principal de contenido */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Columna izquierda - Contenido textual */}
          <div className="relative">
            
            {/* Badge de diferenciación */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1FB6A6]/10 to-[#F5A623]/10 border border-white/10 backdrop-blur-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#F5A623]" />
              <span className="text-sm font-medium text-white">
                Intelligence Platform B2B
              </span>
            </motion.div>

            {/* Headline principal - Jerarquía clara */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              <span className="block text-white leading-[1.1]">
                Decisiones inteligentes
              </span>
              <span className="block bg-gradient-to-r from-[#1FB6A6] via-[#2CD9C5] to-[#1FB6A6] bg-clip-text text-transparent leading-[1.1]">
                sin analistas
              </span>
            </motion.h1>

            {/* Subheadline - Claridad absoluta */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed"
            >
              Convierte tus datos en decisiones operativas y financieras accionables. 
              Diseñado para pequeños negocios que quieren crecer con inteligencia.
            </motion.p>

            {/* CTA Principal - Foco en conversión */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="/start"
                className="group relative px-8 py-4 bg-gradient-to-r from-[#1FB6A6] to-[#1FB6A6]/90 text-white font-semibold rounded-xl text-lg flex items-center justify-center gap-3 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#1FB6A6]/30"
              >
                <span className="relative z-10">Comenzar gratis</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                href="/demo"
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl text-lg hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Ver demo</span>
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <ChevronRight className="w-3 h-3" />
                </div>
              </Link>
            </motion.div>

            {/* Trust signals minimalistas */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#1FB6A6]" />
                <span>Datos 100% seguros</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#F5A623]" />
                <span>Configuración en 2 minutos</span>
              </div>
            </motion.div>
          </div>

          {/* Columna derecha - Demostración interactiva */}
          <div className="relative">
            
            {/* Contenedor de demostración */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative bg-gradient-to-br from-white/[0.02] to-transparent border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
            >
              
              {/* Header de demostración */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#1FB6A6]" />
                  <div className="text-white font-medium">Dashboard Decisia</div>
                </div>
                <div className="text-xs text-gray-400">Tiempo real</div>
              </div>

              {/* Gráfico de impacto principal */}
              <div className="relative h-48 mb-8">
                {/* Línea base */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
                
                {/* Línea de datos */}
                <svg className="w-full h-full" viewBox="0 0 400 150">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1FB6A6" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#1FB6A6" stopOpacity="1" />
                      <stop offset="100%" stopColor="#1FB6A6" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  
                  <motion.path
                    d={`M 0,${150 - dataPoints[0]} ${dataPoints.map((point, i) => `L ${(i * 40)},${150 - point}`).join(' ')}`}
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </svg>

                {/* Punto de decisión actual */}
                <motion.div
                  className="absolute top-1/2 right-8 -translate-y-1/2"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1, 1.2, 1] }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-[#1FB6A6] shadow-lg shadow-[#1FB6A6]/30" />
                    <div className="absolute inset-0 rounded-full bg-[#1FB6A6] animate-ping" />
                  </div>
                </motion.div>
              </div>

              {/* Insights interactivos */}
              <div className="space-y-4">
                <AnimatePresence mode="wait">
                  {insights.map((item, index) => (
                    activeInsight === index && (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        onMouseEnter={() => {
                          setIsHovering(true);
                          setActiveInsight(index);
                        }}
                        onMouseLeave={() => setIsHovering(false)}
                        className="p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
                        style={{ backgroundColor: `${item.color}10` }}
                      >
                        <div className="flex items-start gap-4">
                          <div 
                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${item.color}20` }}
                          >
                            <Lightbulb className="w-5 h-5" style={{ color: item.color }} />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-gray-400 mb-1">Pregunta frecuente</div>
                            <div className="text-white font-medium mb-2">{item.question}</div>
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-xs text-gray-400">Insight detectado</div>
                                <div className="text-lg font-bold" style={{ color: item.color }}>
                                  {item.insight}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-xs text-gray-400">Recomendación</div>
                                <div className="font-medium text-white">{item.action}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>

                {/* Indicadores de insights */}
                <div className="flex justify-center gap-2 pt-4">
                  {insights.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveInsight(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeInsight === index 
                          ? 'bg-[#1FB6A6] w-8' 
                          : 'bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Ver insight ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Indicador de decisión */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-6 pt-6 border-t border-white/10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-[#F5A623]" />
                    <div className="text-sm text-white">Decisión recomendada:</div>
                  </div>
                  <div className="text-lg font-bold text-white">
                    {insights[activeInsight].action}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Elemento decorativo flotante */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 w-32 h-32"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1FB6A6]/10 to-transparent border border-[#1FB6A6]/20 rounded-2xl backdrop-blur-sm rotate-12" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">87%</div>
                  <div className="text-xs text-[#1FB6A6]">de precisión</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Indicador de scroll sutil */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="text-xs text-gray-500">Explorar más</div>
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 rounded-full bg-[#1FB6A6]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;