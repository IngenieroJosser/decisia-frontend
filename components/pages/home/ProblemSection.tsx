'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion'; // Agregar Variants al import
import {
  TrendingDown,
  Users,
  Clock,
  DollarSign,
  AlertTriangle,
  BarChart2,
  Target,
  HelpCircle,
  ArrowRight,
  ChevronRight,
  Zap,
  Brain
} from 'lucide-react';

const ProblemSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Datos de problemas - Estructura narrativa
  const problems = [
    {
      id: 1,
      icon: <TrendingDown className="w-6 h-6" />,
      title: 'Decisiones a ciegas',
      description: 'Tomas decisiones financieras sin datos concretos, confiando en intuición o información desactualizada.',
      painPoints: [
        'Pronósticos imprecisos',
        'Falta de visibilidad futura',
        'Incertidumbre constante'
      ],
      frequency: 'Diario',
      severity: 'Alto',
      color: '#EF4444',
      gradient: 'from-red-500/10 to-red-900/5',
      stat: '67% de pequeños negocios toman decisiones sin datos'
    },
    {
      id: 2,
      icon: <Users className="w-6 h-6" />,
      title: 'Clientes que se van',
      description: 'Pierdes clientes valiosos sin entender por qué, ni saber cuándo están en riesgo de irse.',
      painPoints: [
        'Rotación silenciosa',
        'Feedback no sistematizado',
        'Relaciones no monetizadas'
      ],
      frequency: 'Semanal',
      severity: 'Crítico',
      color: '#F59E0B',
      gradient: 'from-amber-500/10 to-amber-900/5',
      stat: 'Cuesta 5x más conseguir nuevo cliente que retener uno'
    },
    {
      id: 3,
      icon: <Clock className="w-6 h-6" />,
      title: 'Tiempo perdido analizando',
      description: 'Inviertes horas manuales recopilando datos en hojas de cálculo, sin tiempo para la estrategia.',
      painPoints: [
        'Procesos manuales',
        'Reportes desactualizados',
        'Análisis superficial'
      ],
      frequency: 'Constante',
      severity: 'Moderado',
      color: '#3B82F6',
      gradient: 'from-blue-500/10 to-blue-900/5',
      stat: '18 horas semanales en tareas repetitivas de análisis'
    },
    {
      id: 4,
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Fugas de dinero invisibles',
      description: 'No identificas dónde pierdes rentabilidad ni qué productos o servicios no son viables.',
      painPoints: [
        'Costos ocultos',
        'Margenes erosionados',
        'Oportunidades perdidas'
      ],
      frequency: 'Mensual',
      severity: 'Alto',
      color: '#8B5CF6',
      gradient: 'from-violet-500/10 to-violet-900/5',
      stat: '23% de pérdidas por ineficiencias operativas no detectadas'
    }
  ];

  // Estadísticas impactantes
  const impactStats = [
    { value: '89%', label: 'sienten incertidumbre financiera', icon: <AlertTriangle className="w-4 h-4" /> },
    { value: '72%', label: 'pierden clientes sin saber por qué', icon: <Users className="w-4 h-4" /> },
    { value: '65%', label: 'toman decisiones sin datos', icon: <BarChart2 className="w-4 h-4" /> },
    { value: '94%', label: 'quieren más tiempo para estrategia', icon: <Clock className="w-4 h-4" /> }
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

  const statVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 150
      }
    })
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0A1624] via-[#0B1C2D] to-[#0A1624]"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid de datos deteriorado */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #1FB6A6 1px, transparent 1px),
              linear-gradient(180deg, #1FB6A6 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(circle at 50% 50%, black 30%, transparent 70%)'
          }}
        />
        
        {/* Sombras direccionales */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-red-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-amber-500/5 to-transparent blur-3xl" />
        
        {/* Líneas de conexión rotas */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
          <path
            d="M0,150 Q100,100 200,50 T400,100 T600,50 T800,100 T1000,150"
            stroke="#EF4444"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10,5"
          />
          <path
            d="M0,250 Q150,200 300,150 T500,200 T700,150 T900,200"
            stroke="#F59E0B"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,6"
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado con tensión narrativa */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge de alerta */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-amber-500/10 border border-red-500/20 mb-6"
          >
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-red-400 to-amber-400 bg-clip-text text-transparent">
              Problemas Comunes
            </span>
          </motion.div>

          {/* Título principal - Creando empatía */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block text-white">¿Reconoces estos</span>
            <span className="block bg-gradient-to-r from-red-400 via-amber-400 to-red-400 bg-clip-text text-transparent">
              desafíos en tu negocio?
            </span>
          </h2>

          {/* Subtítulo - Validación emocional */}
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            No estás solo. La mayoría de pequeños negocios enfrentan estos obstáculos diariamente, 
            limitando su crecimiento y consumiendo su tiempo.
          </p>

          {/* Estadísticas de impacto */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={statVariants}
                className="text-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400 flex items-center justify-center gap-1">
                  {stat.icon}
                  <span>{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Grid de problemas - Estructura narrativa */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {problems.map((problem) => (
            <motion.div
              key={problem.id}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Tarjeta de problema */}
              <div className={`relative h-full rounded-2xl bg-gradient-to-br ${problem.gradient} border border-white/10 overflow-hidden backdrop-blur-sm`}>
                {/* Indicador de severidad */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/30 backdrop-blur-sm">
                    <span className="text-xs text-gray-400">Frecuencia:</span>
                    <span className="text-xs font-semibold text-white">{problem.frequency}</span>
                  </div>
                  <div 
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: problem.color }}
                  />
                </div>

                {/* Contenido principal */}
                <div className="p-6">
                  {/* Header con ícono y título */}
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center`}
                      style={{ backgroundColor: `${problem.color}20` }}
                    >
                      <div style={{ color: problem.color }}>
                        {problem.icon}
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>
                      <p className="text-gray-400">{problem.description}</p>
                    </div>
                  </div>

                  {/* Puntos de dolor específicos */}
                  <div className="space-y-2 mb-6">
                    {problem.painPoints.map((point, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        <span className="text-sm text-gray-300">{point}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Estadística impactante */}
                  <div className="p-4 rounded-lg bg-black/20 border border-white/10">
                    <div className="text-sm text-gray-400 mb-1">Estudio revela:</div>
                    <div className="text-lg font-semibold text-white">{problem.stat}</div>
                  </div>
                </div>

                {/* Efecto de borde interactivo */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20 transition-all duration-300 pointer-events-none" />
                
                {/* Efecto de brillo al hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>

              {/* Indicador de solución (aparece al hover) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute -bottom-3 -right-3 z-10"
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1FB6A6] to-[#2CD9C5] flex items-center justify-center shadow-lg shadow-[#1FB6A6]/30">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-2 border-2 border-[#1FB6A6]/30 rounded-xl"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Cierre narrativo - Transición a la solución */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 pt-12 border-t border-white/10"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#1FB6A6]/10 to-[#F5A623]/10 border border-[#1FB6A6]/20 mb-6">
            <Zap className="w-5 h-5 text-[#F5A623]" />
            <span className="text-lg font-semibold text-white">La buena noticia:</span>
            <span className="text-gray-300">Todos estos problemas tienen solución</span>
          </div>

          {/* CTA de transición */}
          <motion.div
            initial={{ scale: 0.95 }}
            animate={isInView ? { scale: 1 } : {}}
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <a
              href="#solucion"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#1FB6A6] to-[#1FB6A6]/90 text-white font-semibold hover:shadow-2xl hover:shadow-[#1FB6A6]/20 transition-all duration-300"
            >
              <span>Descubre cómo solucionarlos</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>

          {/* Indicador de progreso */}
          <motion.div
            animate={{ 
              width: isInView ? '200px' : '0px',
              opacity: isInView ? 1 : 0
            }}
            transition={{ delay: 1, duration: 1 }}
            className="h-0.5 bg-gradient-to-r from-[#1FB6A6] via-[#F5A623] to-[#1FB6A6] mx-auto mt-8 rounded-full"
          />
        </motion.div>
      </div>

      {/* Elemento decorativo flotante */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-10 hidden lg:block"
      >
        <div className="relative">
          <div className="w-32 h-32 rounded-full border-2 border-red-500/20" />
          <div className="absolute inset-0 rounded-full border-2 border-amber-500/20 animate-ping" />
        </div>
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 left-10 hidden lg:block"
      >
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-2 border-blue-500/20" />
          <div className="absolute inset-0 rounded-full border-2 border-violet-500/20 animate-ping" />
        </div>
      </motion.div>
    </section>
  );
};

export default ProblemSection;