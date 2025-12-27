'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  BrainCircuit,
  Target,
  Zap,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  Shield,
  CheckCircle,
  ArrowRight,
  Sparkles,
  BarChart3,
  Cpu,
  Lightbulb,
  Rocket,
  LineChart
} from 'lucide-react';

const SolutionSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Mapeo directo de problemas a soluciones
  const solutions = [
    {
      id: 1,
      problemId: 1,
      icon: <BrainCircuit className="w-6 h-6" />,
      title: 'Inteligencia Predictiva',
      description: 'Prevé tendencias y toma decisiones basadas en datos en tiempo real.',
      features: [
        'Forecasting automático de ventas',
        'Análisis de tendencias históricas',
        'Alertas proactivas de oportunidades'
      ],
      benefits: [
        'Reduce incertidumbre en 87%',
        'Aumenta precisión de pronósticos',
        'Anticipa cambios del mercado'
      ],
      color: '#1FB6A6',
      gradient: 'from-[#1FB6A6]/20 to-[#2CD9C5]/10',
      stat: '94% de precisión en pronósticos',
      demoComponent: 'SalesForecast'
    },
    {
      id: 2,
      problemId: 2,
      icon: <Target className="w-6 h-6" />,
      title: 'Segmentación Inteligente',
      description: 'Identifica clientes en riesgo y oportunidades de crecimiento.',
      features: [
        'Scoring automático de clientes',
        'Detección de patrones de abandono',
        'Recomendaciones de retención'
      ],
      benefits: [
        'Reduce churn en 65%',
        'Aumenta LTV en 3.2x',
        'Mejora satisfacción'
      ],
      color: '#F5A623',
      gradient: 'from-[#F5A623]/20 to-[#FFC107]/10',
      stat: 'Identifica riesgo 30 días antes',
      demoComponent: 'CustomerInsights'
    },
    {
      id: 3,
      problemId: 3,
      icon: <Zap className="w-6 h-6" />,
      title: 'Automatización de Análisis',
      description: 'Deja que la IA procese tus datos y genere insights automáticos.',
      features: [
        'ETL automático de múltiples fuentes',
        'Reportes generados por IA',
        'Dashboards en tiempo real'
      ],
      benefits: [
        'Ahorra 15+ horas semanales',
        'Elimina errores manuales',
        'Decisiones más rápidas'
      ],
      color: '#6366F1',
      gradient: 'from-[#6366F1]/20 to-[#8B5CF6]/10',
      stat: 'Configuración en 2 minutos',
      demoComponent: 'AutomatedReports'
    },
    {
      id: 4,
      problemId: 4,
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Optimización de Rentabilidad',
      description: 'Descubre dónde estás ganando y perdiendo dinero automáticamente.',
      features: [
        'Análisis de márgenes por producto',
        'Detección de ineficiencias',
        'Recomendaciones de precios'
      ],
      benefits: [
        'Aumenta margen promedio 23%',
        'Reduce costos innecesarios',
        'Optimiza portafolio'
      ],
      color: '#EC4899',
      gradient: 'from-[#EC4899]/20 to-[#F472B6]/10',
      stat: 'ROI promedio de 3.2x',
      demoComponent: 'ProfitabilityAnalyzer'
    }
  ];

  // Beneficios transformacionales
  const transformationalBenefits = [
    {
      before: 'Incertidumbre constante',
      after: 'Confianza basada en datos',
      icon: <Shield className="w-5 h-5" />,
      improvement: '87%'
    },
    {
      before: 'Tiempo perdido en análisis',
      after: 'Acción estratégica inmediata',
      icon: <Clock className="w-5 h-5" />,
      improvement: '18h/semana'
    },
    {
      before: 'Clientes que se escapan',
      after: 'Relaciones monetizadas',
      icon: <Users className="w-5 h-5" />,
      improvement: '65% menos churn'
    },
    {
      before: 'Decisiones a ciegas',
      after: 'Estrategias optimizadas',
      icon: <LineChart className="w-5 h-5" />,
      improvement: '94% precisión'
    }
  ];

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 30, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const transformVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (i: number) => ({
      width: "100%",
      opacity: 1,
      transition: {
        delay: 0.8 + i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <section 
      ref={sectionRef}
      id="solucion"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0B1C2D] via-[#0D2238] to-[#0B1C2D]"
    >
      {/* Elementos decorativos de fondo - Transformación */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid de datos perfecto */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #1FB6A6 1px, transparent 1px),
              linear-gradient(180deg, #1FB6A6 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Gradientes de energía positiva */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-b from-[#1FB6A6]/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-t from-[#F5A623]/10 via-transparent to-transparent blur-3xl" />
        
        {/* Líneas de conexión fluidas */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
          <path
            d="M0,100 C150,50 300,150 450,100 S600,50 750,100 S900,150 1000,100"
            stroke="#1FB6A6"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,200 C200,150 400,250 600,200 S800,150 1000,200"
            stroke="#F5A623"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '0.5s' }}
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado transformacional */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* Badge de solución */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1FB6A6]/20 to-[#F5A623]/20 border border-[#1FB6A6]/30 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-5 h-5 text-[#1FB6A6]" />
            <span className="text-sm font-semibold bg-gradient-to-r from-[#1FB6A6] to-[#F5A623] bg-clip-text text-transparent">
              Solución Integral
            </span>
          </motion.div>

          {/* Título principal - Transformación */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="block text-white">De la intuición a la</span>
            <span className="block bg-gradient-to-r from-[#1FB6A6] via-[#2CD9C5] to-[#1FB6A6] bg-clip-text text-transparent">
              Inteligencia Estratégica
            </span>
          </h2>

          {/* Subtítulo - Promesa clara */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Decisia transforma cada problema en una oportunidad mediante inteligencia artificial 
            accesible y explicable. Sin complicaciones, solo resultados.
          </p>

          {/* CTA intermedio */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="inline-block"
          >
            <a
              href="#demo"
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-white font-medium hover:border-white/40 transition-all duration-300"
            >
              <span>Ver demostración en vivo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Transformaciones antes/después */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto"
        >
          {transformationalBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              className="relative p-5 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm"
            >
              {/* Línea de transformación */}
              <motion.div
                custom={index}
                variants={transformVariants}
                className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#1FB6A6] to-transparent"
                style={{ y: '-50%' }}
              />
              
              {/* Contenido */}
              <div className="relative z-10">
                {/* Estado anterior */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                    <span className="text-sm font-medium text-gray-400">Antes</span>
                  </div>
                  <p className="text-gray-300 text-sm">{benefit.before}</p>
                </div>

                {/* Flecha de transformación */}
                <div className="flex items-center justify-center my-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#1FB6A6] to-[#F5A623] flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white transform rotate-90" />
                  </div>
                </div>

                {/* Estado posterior */}
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#1FB6A6] animate-pulse" />
                    <span className="text-sm font-medium text-gray-400">Después</span>
                  </div>
                  <p className="text-white font-medium text-sm">{benefit.after}</p>
                </div>

                {/* Mejora cuantificada */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="text-[#1FB6A6]">
                        {benefit.icon}
                      </div>
                      <span className="text-xs text-gray-400">Mejora</span>
                    </div>
                    <span className="text-lg font-bold text-white">{benefit.improvement}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Grid de soluciones específicas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.id}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Tarjeta de solución */}
              <div className={`relative h-full rounded-2xl bg-gradient-to-br from-[#0B1C2D] to-[#0D2238] border-2 border-white/[0.12] overflow-hidden backdrop-blur-sm`}>
                {/* Indicador de efectividad */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#1FB6A6]/20 to-[#F5A623]/10 backdrop-blur-sm">
                    <CheckCircle className="w-3.5 h-3.5 text-[#1FB6A6]" />
                    <span className="text-xs font-semibold text-white">Efectivo</span>
                  </div>
                </div>

                {/* Contenido principal */}
                <div className="p-6">
                  {/* Header con ícono animado */}
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      animate={{ 
                        rotate: [0, 5, 0, -5, 0],
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`w-14 h-14 rounded-xl flex items-center justify-center relative`}
                      style={{ backgroundColor: `${solution.color}20` }}
                    >
                      <div style={{ color: solution.color }}>
                        {solution.icon}
                      </div>
                      {/* Aura sutil */}
                      <div className="absolute -inset-2 rounded-xl border-2 border-white/5" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                      <p className="text-gray-300">{solution.description}</p>
                    </div>
                  </div>

                  {/* Features y beneficios en paralelo */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Features (qué hace) */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Cpu className="w-4 h-4 text-[#1FB6A6]" />
                        <span className="text-sm font-medium text-gray-400">Cómo funciona</span>
                      </div>
                      <ul className="space-y-2">
                        {solution.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            className="flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#1FB6A6]" />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits (qué logras) */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Rocket className="w-4 h-4 text-[#F5A623]" />
                        <span className="text-sm font-medium text-gray-400">Resultados</span>
                      </div>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.8 + index * 0.1 }}
                            className="flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                            <span className="text-sm text-white font-medium">{benefit}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Estadística comprobada */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-400">Comprobado:</div>
                        <div className="text-lg font-bold text-white">{solution.stat}</div>
                      </div>
                      <Lightbulb className="w-5 h-5 text-[#1FB6A6]" />
                    </div>
                  </div>
                </div>

                {/* Efecto de borde dinámico */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#1FB6A6]/30 transition-all duration-500 pointer-events-none" />
                
                {/* Efecto de energía */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>

              {/* Demo preview (aparece al hover) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10 w-11/12"
              >
                <div className="relative p-4 rounded-xl bg-gradient-to-br from-[#0B1C2D] to-[#0D2238] border border-[#1FB6A6]/30 shadow-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#1FB6A6] animate-pulse" />
                    <span className="text-xs font-medium text-[#1FB6A6]">Demo en vivo</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Ver {solution.demoComponent} →</span>
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5] flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Cierre de sección - CTA principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-20 pt-16 border-t border-white/10 relative"
        >
          {/* Elemento decorativo flotante */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5] flex items-center justify-center shadow-2xl shadow-[#1FB6A6]/30">
                <BrainCircuit className="w-8 h-8 text-white" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border-2 border-[#1FB6A6]/20 rounded-full"
              />
            </div>
          </motion.div>

          {/* Mensaje final */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Transforma tu negocio hoy
            </h3>
            <p className="text-gray-300 mb-8">
              Únete a miles de pequeños negocios que ya toman mejores decisiones con Decisia. 
              Sin contratos largos, sin complicaciones.
            </p>

            {/* CTAs finales */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/start"
                  className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-[#1FB6A6] via-[#2CD9C5] to-[#1FB6A6] text-white font-bold text-lg flex items-center gap-3 overflow-hidden"
                >
                  <span className="relative z-10">Comenzar gratis ahora</span>
                  <Zap className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Partículas de energía */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      animate={{
                        y: [0, -25, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                      style={{
                        left: `${20 + i * 15}%`,
                        bottom: '15%'
                      }}
                    />
                  ))}
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="/demo-full"
                  className="px-8 py-4 rounded-xl border-2 border-white/20 text-white font-medium hover:border-white/40 transition-all duration-300 flex items-center gap-3 group"
                >
                  <span>Demo completa guiada</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>

            {/* Garantía */}
            <div className="mt-8 flex items-center justify-center gap-3 text-sm text-gray-400">
              <Shield className="w-4 h-4" />
              <span>Garantía de 14 días • Sin tarjeta requerida • Cancelación instantánea</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Elementos decorativos flotantes */}
      <motion.div
        animate={{ 
          x: [0, 20, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 left-10 hidden lg:block"
      >
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-2 border-[#1FB6A6]/30" />
          <div className="absolute inset-0 rounded-full border-2 border-[#1FB6A6]/10 animate-ping" />
        </div>
      </motion.div>

      <motion.div
        animate={{ 
          x: [0, -15, 0],
          y: [0, 15, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/3 right-10 hidden lg:block"
      >
        <div className="relative">
          <div className="w-12 h-12 rounded-full border-2 border-[#F5A623]/30" />
          <div className="absolute inset-0 rounded-full border-2 border-[#F5A623]/10 animate-ping" />
        </div>
      </motion.div>
    </section>
  );
};

export default SolutionSection;