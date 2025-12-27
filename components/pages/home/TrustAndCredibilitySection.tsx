'use client';

import { useState, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion'; // Agregar Variants al import
import {
  Shield,
  Lock,
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  Globe,
  Clock,
  Zap,
  Target,
  BarChart3,
  Heart,
  MessageCircle,
  ThumbsUp,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  BadgeCheck,
  FileCheck
} from 'lucide-react';

const TrustAndCredibilitySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeMetric, setActiveMetric] = useState<string | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Métricas de confianza
  const trustMetrics = [
    {
      id: 'security',
      icon: <ShieldCheck className="w-8 h-8" />,
      value: '100%',
      label: 'Seguridad de datos',
      description: 'Encriptación end-to-end y backups automáticos',
      color: '#1FB6A6',
      certifications: ['SOC2', 'GDPR', 'ISO 27001']
    },
    {
      id: 'uptime',
      icon: <Zap className="w-8 h-8" />,
      value: '99.9%',
      label: 'Uptime garantizado',
      description: 'Infraestructura redundante y monitoreo 24/7',
      color: '#F5A623',
      details: 'Disponibilidad en los últimos 12 meses'
    },
    {
      id: 'customers',
      icon: <Users className="w-8 h-8" />,
      value: '2,500+',
      label: 'Negocios confían',
      description: 'Pequeñas empresas que ya transforman sus decisiones',
      color: '#8B5CF6',
      growth: '+45% este año'
    },
    {
      id: 'accuracy',
      icon: <Target className="w-8 h-8" />,
      value: '94%',
      label: 'Precisión comprobada',
      description: 'Promedio de precisión en predicciones y recomendaciones',
      color: '#EC4899',
      benchmark: 'vs 67% de métodos tradicionales'
    }
  ];

  // Certificaciones y cumplimientos
  const certifications = [
    {
      name: 'SOC2 Tipo II',
      issuer: 'AICPA',
      description: 'Auditoría de seguridad y disponibilidad',
      validity: 'Vigente',
      icon: <FileCheck className="w-6 h-6" />,
      color: '#1FB6A6'
    },
    {
      name: 'GDPR Compliant',
      issuer: 'UE',
      description: 'Cumplimiento de protección de datos europea',
      validity: 'Certificado',
      icon: <Globe className="w-6 h-6" />,
      color: '#3B82F6'
    },
    {
      name: 'ISO 27001',
      issuer: 'ISO',
      description: 'Estándar internacional de seguridad',
      validity: 'Certificado',
      icon: <BadgeCheck className="w-6 h-6" />,
      color: '#F5A623'
    },
    {
      name: 'CCPA Ready',
      issuer: 'California',
      description: 'Cumplimiento de privacidad California',
      validity: 'Implementado',
      icon: <Shield className="w-6 h-6" />,
      color: '#8B5CF6'
    }
  ];

  // Testimonios verificados
  const testimonials = [
    {
      name: 'María González',
      role: 'Dueña de Boutique Elegante',
      business: 'Tienda de moda',
      location: 'Madrid, España',
      avatar: 'MG',
      rating: 5,
      quote: 'Decisia transformó cómo gestionamos nuestro inventario. Pasamos de adivinar a saber exactamente qué comprar. Nuestras ventas aumentaron 28% en 3 meses.',
      results: [
        { metric: '+28%', label: 'Ventas' },
        { metric: '-34%', label: 'Exceso stock' },
        { metric: '45h/mes', label: 'Tiempo ahorrado' }
      ],
      verified: true,
      months: 6
    },
    {
      name: 'Carlos Méndez',
      role: 'Diseñador Freelance',
      business: 'Servicios UX/UI',
      location: 'Ciudad de México',
      avatar: 'CM',
      rating: 5,
      quote: 'Como freelancer, la inestabilidad era constante. Decisia me ayudó a fijar tarifas óptimas y prever proyectos. Mis ingresos son 60% más consistentes ahora.',
      results: [
        { metric: '+42%', label: 'Tarifa hora' },
        { metric: '3.1x', label: 'ROI' },
        { metric: '65%', label: 'Menor tiempo admin' }
      ],
      verified: true,
      months: 4
    },
    {
      name: 'Ana Rodríguez',
      role: 'Propietaria de Café Artesanal',
      business: 'Cafetería',
      location: 'Bogotá, Colombia',
      avatar: 'AR',
      rating: 5,
      quote: 'El desperdicio era nuestro mayor problema. Con Decisia redujimos mermas en 62% y mejoramos nuestro margen un 25%. La IA predice perfectamente nuestra demanda diaria.',
      results: [
        { metric: '-62%', label: 'Desperdicio' },
        { metric: '+25%', label: 'Margen' },
        { metric: '+41%', label: 'Satisfacción' }
      ],
      verified: true,
      months: 8
    },
    {
      name: 'Roberto Sánchez',
      role: 'Socio de Consultoría',
      business: 'Consultoría Estratégica',
      location: 'Buenos Aires, Argentina',
      avatar: 'RS',
      rating: 5,
      quote: 'Gestionábamos proyectos por intuición. Ahora sabemos exactamente qué clientes son más rentables y cómo asignar recursos. Facturación +50% en 5 meses.',
      results: [
        { metric: '+50%', label: 'Facturación' },
        { metric: '2.8x', label: 'ROI por cliente' },
        { metric: '-37%', label: 'Tiempo no facturado' }
      ],
      verified: true,
      months: 5
    }
  ];

  // Socios y integraciones
  const partners = [
    { name: 'Stripe', logo: '💳', description: 'Pagos y facturación' },
    { name: 'Shopify', logo: '🛍️', description: 'E-commerce' },
    { name: 'Google', logo: '📊', description: 'Analytics' },
    { name: 'Slack', logo: '💬', description: 'Notificaciones' },
    { name: 'QuickBooks', logo: '📈', description: 'Contabilidad' },
    { name: 'Zapier', logo: '⚡', description: 'Automatizaciones' }
  ];

  // Garantías y políticas
  const guarantees = [
    {
      title: 'Garantía de 14 días',
      description: 'Prueba Decisia sin riesgo. Si no ves valor, te devolvemos el dinero.',
      icon: <CheckCircle className="w-6 h-6" />,
      color: '#10B981'
    },
    {
      title: 'Sin tarjeta requerida',
      description: 'Comienza tu prueba gratuita sin compromisos ni datos de pago.',
      icon: <Lock className="w-6 h-6" />,
      color: '#3B82F6'
    },
    {
      title: 'Cancelación instantánea',
      description: 'Cancela cuando quieras, sin preguntas ni penalizaciones.',
      icon: <Zap className="w-6 h-6" />,
      color: '#F59E0B'
    },
    {
      title: 'Soporte prioritario',
      description: 'Respuestas en menos de 4 horas, 7 días a la semana.',
      icon: <MessageCircle className="w-6 h-6" />,
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

  return (
    <section 
      ref={sectionRef}
      id="confianza"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0B1C2D] via-[#0D2238] to-[#0B1C2D]"
    >
      {/* Fondo con elementos de seguridad */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Patrón de escudos */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, #1FB6A6 2px, transparent 2px),
              radial-gradient(circle at 80% 40%, #F5A623 2px, transparent 2px),
              radial-gradient(circle at 40% 70%, #8B5CF6 2px, transparent 2px),
              radial-gradient(circle at 60% 20%, #EC4899 2px, transparent 2px)
            `,
            backgroundSize: '120px 120px'
          }}
        />
        
        {/* Elementos de seguridad flotantes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + Math.sin(i) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            <div className="w-8 h-8 rounded-full border-2 border-[#1FB6A6]/20 flex items-center justify-center">
              <Shield className="w-4 h-4 text-[#1FB6A6]/40" />
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1FB6A6]/20 to-[#F5A623]/20 border border-[#1FB6A6]/30 mb-6">
            <Shield className="w-4 h-4 text-[#1FB6A6]" />
            <span className="text-sm font-medium text-white">Confianza y Credibilidad</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block text-white">Construido sobre</span>
            <span className="block bg-gradient-to-r from-[#1FB6A6] via-[#F5A623] to-[#8B5CF6] bg-clip-text text-transparent">
              cimientos sólidos
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Miles de negocios confían en Decisia para sus decisiones más importantes. 
            Nuestro compromiso con la seguridad, transparencia y resultados está en todo lo que hacemos.
          </p>
        </motion.div>

        {/* Métricas de confianza */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {trustMetrics.map((metric) => (
            <motion.div
              key={metric.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onMouseEnter={() => setActiveMetric(metric.id)}
              onMouseLeave={() => setActiveMetric(null)}
              className={`relative bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border rounded-2xl p-6 transition-all duration-300 ${
                activeMetric === metric.id
                  ? 'border-white/30 shadow-2xl'
                  : 'border-white/10 hover:border-white/20'
              }`}
              style={activeMetric === metric.id ? { borderColor: metric.color } : {}}
            >
              {/* Icono */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${metric.color}20` }}
              >
                <div style={{ color: metric.color }}>
                  {metric.icon}
                </div>
              </div>

              {/* Métricas */}
              <div className="mb-3">
                <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-lg font-semibold text-white">{metric.label}</div>
              </div>

              {/* Descripción */}
              <p className="text-sm text-gray-400 mb-4">{metric.description}</p>

              {/* Detalles adicionales */}
              {activeMetric === metric.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-white/10">
                    {metric.certifications && (
                      <div className="flex flex-wrap gap-2">
                        {metric.certifications.map((cert) => (
                          <span
                            key={cert}
                            className="px-2 py-1 text-xs rounded-lg bg-white/5 text-gray-300"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    )}
                    {metric.details && (
                      <div className="text-xs text-gray-500 mt-2">{metric.details}</div>
                    )}
                    {metric.growth && (
                      <div className="flex items-center gap-2 mt-2">
                        <TrendingUp className="w-3 h-3 text-green-400" />
                        <span className="text-xs text-green-400">{metric.growth}</span>
                      </div>
                    )}
                    {metric.benchmark && (
                      <div className="text-xs text-gray-500 mt-2">{metric.benchmark}</div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Indicador de hover */}
              {activeMetric === metric.id && (
                <motion.div
                  layoutId="metric-glow"
                  className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -z-10"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Certificaciones y cumplimientos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-4">Certificaciones y Cumplimientos</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Estándares internacionales que garantizan la seguridad y privacidad de tus datos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${cert.color}20` }}
                  >
                    <div style={{ color: cert.color }}>
                      {cert.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{cert.name}</h4>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-4">{cert.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                    {cert.validity}
                  </span>
                  <Award className="w-4 h-4 text-gray-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonios verificados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-[#F5A623]" />
              <h3 className="text-2xl font-bold text-white">Testimonios Verificados</h3>
              <Star className="w-5 h-5 text-[#F5A623]" />
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Historias reales de negocios que ya transforman sus decisiones con Decisia
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Testimonio activo */}
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/10 rounded-2xl p-8"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Información del cliente */}
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1FB6A6] to-[#8B5CF6] flex items-center justify-center text-white text-xl font-bold">
                      {testimonials[activeTestimonial].avatar}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-sm text-gray-400">{testimonials[activeTestimonial].role}</p>
                      <div className="flex items-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-[#F5A623] fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#1FB6A6]" />
                      <span className="text-sm text-gray-400">Negocio:</span>
                      <span className="text-sm text-white">{testimonials[activeTestimonial].business}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#F5A623]" />
                      <span className="text-sm text-gray-400">Ubicación:</span>
                      <span className="text-sm text-white">{testimonials[activeTestimonial].location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                      <span className="text-sm text-gray-400">Usando Decisia:</span>
                      <span className="text-sm text-white">{testimonials[activeTestimonial].months} meses</span>
                    </div>
                  </div>

                  {/* Badge verificado */}
                  {testimonials[activeTestimonial].verified && (
                    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20">
                      <BadgeCheck className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400">Cliente verificado</span>
                    </div>
                  )}
                </div>

                {/* Cita y resultados */}
                <div className="lg:col-span-2">
                  <div className="relative mb-8">
                    <div className="text-5xl text-white/10 absolute -top-4 -left-2">"</div>
                    <p className="text-lg text-gray-300 relative z-10">
                      {testimonials[activeTestimonial].quote}
                    </p>
                  </div>

                  {/* Resultados */}
                  <div className="grid grid-cols-3 gap-4">
                    {testimonials[activeTestimonial].results.map((result, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10"
                      >
                        <div className="text-2xl font-bold text-white mb-1">{result.metric}</div>
                        <div className="text-sm text-gray-400">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navegación de testimonios */}
            <div className="flex items-center justify-center gap-4 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeTestimonial === index
                      ? 'bg-gradient-to-r from-[#1FB6A6] to-[#F5A623] w-8'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Ver testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Garantías y políticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-4">Nuestras Garantías</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Políticas claras diseñadas para que pruebes Decisia sin ningún riesgo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${guarantee.color}20` }}
                >
                  <div style={{ color: guarantee.color }}>
                    {guarantee.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{guarantee.title}</h4>
                <p className="text-gray-400">{guarantee.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Socios e integraciones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-4">Integraciones de Confianza</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Conecta Decisia con las herramientas que ya usas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-white/20 transition-all"
              >
                <div className="text-3xl mb-3">{partner.logo}</div>
                <div className="text-center">
                  <div className="font-semibold text-white mb-1">{partner.name}</div>
                  <div className="text-xs text-gray-400">{partner.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA final de confianza */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-8 items-center p-10 rounded-2xl bg-gradient-to-r from-[#1FB6A6]/10 via-[#8B5CF6]/5 to-[#F5A623]/10 border border-white/10 relative overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#1FB6A6]/10 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#F5A623]/10 blur-3xl" />
            
            <div className="relative z-10 text-left">
              <h3 className="text-2xl font-bold text-white mb-3">
                ¿Listo para unirte a miles de negocios confiables?
              </h3>
              <p className="text-gray-300">
                Comienza tu prueba gratuita de 14 días. Sin tarjeta de crédito, sin compromisos.
              </p>
            </div>
            
            <div className="relative z-10">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5] text-white font-bold hover:shadow-2xl hover:shadow-[#1FB6A6]/20 transition-all flex items-center gap-3 group">
                <Shield className="w-5 h-5" />
                <span>Comenzar prueba segura</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Garantía de 14 días</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-400" />
                  <span>Datos encriptados</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>Soporte 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustAndCredibilitySection;