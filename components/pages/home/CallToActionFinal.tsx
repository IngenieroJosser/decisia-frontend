'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence, Variants } from 'framer-motion';
import {
  Rocket,
  Sparkles,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Target,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  Star,
  Award,
  Trophy,
  Gift,
  ChevronDown,
  X
} from 'lucide-react';

const CallToActionFinal = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPricingComparison, setShowPricingComparison] = useState(false);
  const [activePlan, setActivePlan] = useState('startup');

  // Planes con precios estratégicos
  const pricingPlans = [
    {
      id: 'startup',
      name: 'Startup',
      price: '$49',
      period: '/mes',
      description: 'Perfecto para negocios que están comenzando',
      color: '#1FB6A6',
      features: [
        { text: 'Hasta 5,000 transacciones/mes', included: true },
        { text: '3 fuentes de datos conectadas', included: true },
        { text: 'Pronósticos de ventas básicos', included: true },
        { text: 'Dashboard personalizado', included: true },
        { text: 'Soporte por email', included: true },
        { text: 'Reportes automáticos', included: true },
        { text: 'Segmentación avanzada de clientes', included: false },
        { text: 'API completa', included: false },
        { text: 'Soporte prioritario 24/7', included: false }
      ],
      cta: 'Comenzar Startup',
      popular: false
    },
    {
      id: 'growth',
      name: 'Growth',
      price: '$99',
      period: '/mes',
      description: 'Para negocios en expansión que necesitan más poder',
      color: '#F5A623',
      features: [
        { text: 'Hasta 25,000 transacciones/mes', included: true },
        { text: '10 fuentes de datos conectadas', included: true },
        { text: 'Pronósticos de ventas avanzados', included: true },
        { text: 'Dashboard personalizado', included: true },
        { text: 'Soporte prioritario', included: true },
        { text: 'Reportes automáticos + personalizados', included: true },
        { text: 'Segmentación avanzada de clientes', included: true },
        { text: 'API completa', included: true },
        { text: 'Soporte prioritario 24/7', included: false }
      ],
      cta: 'Comenzar Growth',
      popular: true,
      badge: 'Más popular'
    },
    {
      id: 'scale',
      name: 'Scale',
      price: '$199',
      period: '/mes',
      description: 'Para empresas que toman decisiones críticas diarias',
      color: '#8B5CF6',
      features: [
        { text: 'Transacciones ilimitadas', included: true },
        { text: 'Fuentes de datos ilimitadas', included: true },
        { text: 'Pronósticos de ventas empresariales', included: true },
        { text: 'Dashboard personalizado + white-label', included: true },
        { text: 'Soporte dedicado 24/7', included: true },
        { text: 'Reportes avanzados + exportación', included: true },
        { text: 'Segmentación avanzada de clientes', included: true },
        { text: 'API completa + webhooks', included: true },
        { text: 'Soporte prioritario 24/7 + consultoría', included: true }
      ],
      cta: 'Comenzar Scale',
      popular: false
    }
  ];

  // Beneficios inmediatos
  const immediateBenefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Configuración en 2 minutos',
      description: 'Comienza a tomar decisiones hoy mismo',
      color: '#F5A623'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Garantía de 14 días',
      description: 'Prueba sin riesgo, devolución total',
      color: '#1FB6A6'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'ROI desde el primer mes',
      description: 'Clientes reportan 3.2x retorno promedio',
      color: '#8B5CF6'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Soporte humano 24/7',
      description: 'No chatbots, personas reales',
      color: '#EC4899'
    }
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Aquí iría la lógica real de envío
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const activePlanData = pricingPlans.find(plan => plan.id === activePlan) || pricingPlans[1];

  return (
    <section 
      ref={sectionRef}
      id="comenzar"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0A1624] via-[#0B1C2D] to-[#0A1624]"
    >
      {/* Resto del código permanece igual... */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Partículas animadas */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-[#1FB6A6] to-[#F5A623]"
              initial={{ 
                x: Math.random() * 100 + 'vw',
                y: Math.random() * 100 + 'vh',
                scale: 0
              }}
              animate={{ 
                x: Math.random() * 100 + 'vw',
                y: Math.random() * 100 + 'vh',
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        {/* Gradientes energéticos */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-b from-[#F5A623]/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-t from-[#1FB6A6]/20 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado impactante */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#F5A623]/20 to-[#EC4899]/20 border border-[#F5A623]/30 mb-6 animate-pulse">
            <Rocket className="w-4 h-4 text-[#F5A623]" />
            <span className="text-sm font-medium text-white">Último Paso</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="block text-white">Tu próximo paso hacia</span>
            <span className="block bg-gradient-to-r from-[#F5A623] via-[#EC4899] to-[#1FB6A6] bg-clip-text text-transparent">
              decisiones más inteligentes
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
             Comienza ya transformando tus operaciones con Decisia. 
            <span className="text-white font-semibold"> Ahora es tu turno.</span>
          </p>
        </motion.div>

        {/* Comparación de planes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Elige tu plan perfecto
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Todos los planes incluyen prueba gratuita de 14 días. Sin tarjeta de crédito requerida.
            </p>
          </div>

          {/* Selector de planes */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10">
              {pricingPlans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setActivePlan(plan.id)}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                    activePlan === plan.id
                      ? 'bg-gradient-to-r from-white/10 to-white/5 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {plan.name}
                </button>
              ))}
            </div>
          </div>

          {/* Plan activo destacado */}
          <motion.div
            key={activePlan}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/10 rounded-2xl p-8 overflow-hidden">
              {/* Badge popular */}
              {activePlanData.popular && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#F5A623] to-[#EC4899] text-white font-bold text-sm flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    {activePlanData.badge}
                  </div>
                </div>
              )}

              {/* Header del plan */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">{activePlanData.name}</h4>
                  <p className="text-gray-400">{activePlanData.description}</p>
                </div>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-white">{activePlanData.price}</span>
                  <span className="text-gray-400 ml-2">{activePlanData.period}</span>
                </div>
              </div>

              {/* Features del plan */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {activePlanData.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    {feature.included ? (
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`${feature.included ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA del plan */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-8 border-t border-white/10">
                <div className="text-left">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Shield className="w-4 h-4" />
                    <span>Incluye garantía de 14 días</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Zap className="w-4 h-4" />
                    <span>Configuración en 2 minutos</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-4 rounded-xl text-white font-bold text-lg overflow-hidden group"
                  style={{ background: `linear-gradient(135deg, ${activePlanData.color}, ${activePlanData.color}90)` }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {activePlanData.cta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Ver todos los planes */}
          <div className="text-center mt-6">
            <button
              onClick={() => setShowPricingComparison(!showPricingComparison)}
              className="text-[#1FB6A6] hover:text-[#2CD9C5] transition-colors flex items-center gap-2 mx-auto"
            >
              {showPricingComparison ? 'Ocultar comparación' : 'Comparar todos los planes'}
              <ChevronDown className={`w-4 h-4 transition-transform ${showPricingComparison ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Comparación completa */}
          <AnimatePresence>
            {showPricingComparison && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-8 bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/10 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-white mb-6 text-center">Comparación de planes</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left p-4 text-gray-400">Característica</th>
                          {pricingPlans.map(plan => (
                            <th key={plan.id} className="p-4 text-center">
                              <div className="font-bold text-white">{plan.name}</div>
                              <div className="text-sm text-gray-400">{plan.price}{plan.period}</div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {pricingPlans[0].features.map((_, index) => (
                          <tr key={index} className="border-t border-white/10">
                            <td className="p-4 text-gray-300">
                              {pricingPlans[0].features[index].text}
                            </td>
                            {pricingPlans.map(plan => (
                              <td key={plan.id} className="p-4 text-center">
                                {plan.features[index].included ? (
                                  <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                                ) : (
                                  <X className="w-5 h-5 text-gray-600 mx-auto" />
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Beneficios inmediatos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {immediateBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${benefit.color}20` }}
              >
                <div style={{ color: benefit.color }}>
                  {benefit.icon}
                </div>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Formulario de conversión */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/10 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Comienza gratis en 2 minutos
              </h3>
              <p className="text-gray-400">
                Sin tarjeta de crédito. Sin compromisos. Solo resultados.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Tu nombre
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#1FB6A6] focus:outline-none transition-colors"
                    placeholder="Ej: María González"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#1FB6A6] focus:outline-none transition-colors"
                    placeholder="tunegocio@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Tipo de negocio
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#1FB6A6] focus:outline-none transition-colors">
                  <option value="">Selecciona tu tipo de negocio</option>
                  <option value="retail">Tienda local / Retail</option>
                  <option value="freelance">Freelancer / Servicios</option>
                  <option value="food">Restaurante / Cafetería</option>
                  <option value="consultancy">Consultoría / Agencia</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <AnimatePresence>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5] flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">¡Perfecto!</h4>
                    <p className="text-gray-400">
                      Revisa tu correo para comenzar tu prueba gratuita.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#1FB6A6] via-[#2CD9C5] to-[#1FB6A6] text-white font-bold text-lg hover:shadow-2xl hover:shadow-[#1FB6A6]/30 transition-all flex items-center justify-center gap-3 group"
                    >
                      <Rocket className="w-5 h-5" />
                      <span>Comenzar prueba gratuita de 14 días</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="text-center">
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>Datos 100% seguros</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Cancelación instantánea</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Último CTA absoluto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center p-10 rounded-2xl bg-gradient-to-r from-[#F5A623]/10 via-[#EC4899]/5 to-[#1FB6A6]/10 border border-white/10 relative overflow-hidden">
            {/* Efectos de fondo */}
            <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">
                ¿Qué estás esperando?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Miles de negocios ya están tomando mejores decisiones. 
                <span className="text-white font-semibold"> Tu próxima decisión inteligente comienza ahora.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5] text-white font-bold hover:shadow-2xl hover:shadow-[#1FB6A6]/30 transition-all flex items-center gap-3"
                >
                  <Rocket className="w-5 h-5" />
                  <span>Comenzar prueba gratuita</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-xl border-2 border-white/20 text-white font-medium hover:border-white/40 transition-all flex items-center gap-3"
                >
                  <Users className="w-5 h-5" />
                  <span>Agendar demo personalizada</span>
                </motion.button>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p> 4.9/5 en Trustpilot •  Garantía de 14 días •  Setup en 2 minutos</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionFinal;