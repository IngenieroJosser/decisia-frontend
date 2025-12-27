'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BrainCircuit,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Users,
  BarChart3,
  Target,
  Clock,
  DollarSign,
  ChevronRight,
  X,
  Upload,
  Database,
  Cpu,
  TrendingUp,
  Lock,
  Star,
  Award
} from 'lucide-react';

const StartPage = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    employeeCount: '',
    monthlyRevenue: ''
  });
  const [selectedPlan, setSelectedPlan] = useState('free');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Tipos de negocio
  const businessTypes = [
    { id: 'retail', label: 'Tienda local', icon: '🛍️' },
    { id: 'service', label: 'Servicios', icon: '🔧' },
    { id: 'food', label: 'Alimentos', icon: '🍽️' },
    { id: 'freelance', label: 'Freelancer', icon: '💼' },
    { id: 'consulting', label: 'Consultoría', icon: '📊' },
    { id: 'other', label: 'Otro', icon: '✨' }
  ];

  // Planes
  const plans = [
    {
      id: 'free',
      name: 'Gratis',
      price: '€0',
      period: 'para siempre',
      features: [
        'Hasta 1,000 transacciones/mes',
        'Análisis predictivo básico',
        'Dashboard principal',
        'Soporte por email',
        '2 integraciones'
      ],
      cta: 'Comenzar gratis',
      popular: false,
      color: '#1FB6A6'
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '€29',
      period: 'por mes',
      features: [
        'Hasta 10,000 transacciones/mes',
        'Análisis predictivo avanzado',
        'Dashboard completo',
        'Soporte prioritario 24/7',
        'Integraciones ilimitadas',
        'Alertas inteligentes',
        'Reportes automáticos'
      ],
      cta: 'Probar 14 días gratis',
      popular: true,
      color: '#F5A623'
    },
    {
      id: 'business',
      name: 'Business',
      price: '€79',
      period: 'por mes',
      features: [
        'Transacciones ilimitadas',
        'IA predictiva completa',
        'Dashboard empresarial',
        'Soporte dedicado',
        'Onboarding personalizado',
        'API completa',
        'White label',
        'Equipo ilimitado'
      ],
      cta: 'Contactar ventas',
      popular: false,
      color: '#8B5CF6'
    }
  ];

  // Procesar formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular proceso de registro
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
      
      // Redirigir después de mostrar éxito
      setTimeout(() => {
        router.push('/dashboard');
      }, 3000);
    }, 1500);
  };

  // Actualizar datos del formulario
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Beneficios de registrarse
  const benefits = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Configuración en 2 minutos',
      description: 'Comienza a tomar decisiones inteligentes casi inmediatamente'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Privacidad garantizada',
      description: 'Tus datos están seguros con encriptación de grado bancario'
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: 'Sin tarjeta de crédito',
      description: 'Prueba todas las funciones sin compromiso'
    }
  ];

  // Características destacadas
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Análisis Predictivo',
      description: 'Pronósticos de ventas con 94% de precisión',
      color: '#1FB6A6'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Segmentación Clientes',
      description: 'Identifica oportunidades y riesgos automáticamente',
      color: '#F5A623'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Recomendaciones',
      description: 'Acciones específicas para mejorar tu negocio',
      color: '#8B5CF6'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Ahorro de Tiempo',
      description: 'Reduce 15+ horas semanales en análisis manual',
      color: '#EC4899'
    }
  ];

  // Testimonios rápidos
  const quickTestimonials = [
    {
      text: 'Configurado en 3 minutos. Resultados en 2 días.',
      author: 'María, Boutique',
      metric: '+28% ventas'
    },
    {
      text: 'De adivinar a saber. Cambió completamente mi negocio.',
      author: 'Carlos, Freelancer',
      metric: '3.2x ROI'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1C2D] via-[#0D2238] to-[#0A1624]">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1FB6A6] to-[#0B1C2D] flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5 text-white" />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 border-2 border-[#1FB6A6]/20 rounded-xl"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">Decisia</span>
                <span className="text-xs text-gray-400">Decision Intelligence</span>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="text-gray-300 hover:text-white transition-colors"
              >
                ¿Ya tienes cuenta?
              </Link>
              <Link
                href="/demo"
                className="px-4 py-2 rounded-lg border border-white/20 text-white hover:border-white/40 transition-all"
              >
                Ver demo
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Progreso */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 1 ? 'bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5] text-white' : 'bg-white/10 text-gray-400'
                }`}>
                  {step > 1 ? <CheckCircle className="w-4 h-4" /> : '1'}
                </div>
                <div className={`h-1 w-12 ${
                  step >= 2 ? 'bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5]' : 'bg-white/10'
                }`} />
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 2 ? 'bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5] text-white' : 'bg-white/10 text-gray-400'
                }`}>
                  {step > 2 ? <CheckCircle className="w-4 h-4" /> : '2'}
                </div>
                <div className={`h-1 w-12 ${
                  step >= 3 ? 'bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5]' : 'bg-white/10'
                }`} />
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 3 ? 'bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5] text-white' : 'bg-white/10 text-gray-400'
                }`}>
                  {step > 3 ? <CheckCircle className="w-4 h-4" /> : '3'}
                </div>
              </div>
              <button
                onClick={() => router.push('/')}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span className={step >= 1 ? 'text-white font-medium' : ''}>Tu negocio</span>
              <span className={step >= 2 ? 'text-white font-medium' : ''}>Tu plan</span>
              <span className={step >= 3 ? 'text-white font-medium' : ''}>Confirmar</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Formulario principal */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/10 rounded-2xl p-8"
                  >
                    <div className="mb-8">
                      <h1 className="text-3xl font-bold text-white mb-3">
                        Cuéntanos sobre tu negocio
                      </h1>
                      <p className="text-gray-400">
                        Personalizaremos Decisia para tus necesidades específicas
                      </p>
                    </div>

                    <form onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                      <div className="space-y-6">
                        {/* Nombre y Email */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Tu nombre
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => handleInputChange('name', e.target.value)}
                              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#1FB6A6]/50 focus:ring-1 focus:ring-[#1FB6A6]/20"
                              placeholder="María González"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Email de trabajo
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#1FB6A6]/50 focus:ring-1 focus:ring-[#1FB6A6]/20"
                              placeholder="maria@sunegocio.com"
                            />
                          </div>
                        </div>

                        {/* Tipo de negocio */}
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-4">
                            ¿Qué tipo de negocio tienes?
                          </label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {businessTypes.map((type) => (
                              <button
                                key={type.id}
                                type="button"
                                onClick={() => handleInputChange('businessType', type.id)}
                                className={`p-4 rounded-xl border-2 transition-all ${
                                  formData.businessType === type.id
                                    ? 'border-[#1FB6A6] bg-gradient-to-r from-[#1FB6A6]/10 to-transparent'
                                    : 'border-white/10 hover:border-white/20 bg-white/5'
                                }`}
                              >
                                <div className="text-2xl mb-2">{type.icon}</div>
                                <div className="text-sm font-medium text-white">{type.label}</div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Tamaño del negocio */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              ¿Cuántas personas trabajan contigo?
                            </label>
                            <select
                              value={formData.employeeCount}
                              onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#1FB6A6]/50 focus:ring-1 focus:ring-[#1FB6A6]/20"
                            >
                              <option value="">Seleccionar</option>
                              <option value="1">Solo yo</option>
                              <option value="2-5">2-5 personas</option>
                              <option value="6-10">6-10 personas</option>
                              <option value="11-20">11-20 personas</option>
                              <option value="20+">Más de 20 personas</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Facturación mensual aproximada
                            </label>
                            <select
                              value={formData.monthlyRevenue}
                              onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
                              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#1FB6A6]/50 focus:ring-1 focus:ring-[#1FB6A6]/20"
                            >
                              <option value="">Seleccionar</option>
                              <option value="0-5k">€0 - €5,000</option>
                              <option value="5k-20k">€5,000 - €20,000</option>
                              <option value="20k-50k">€20,000 - €50,000</option>
                              <option value="50k+">Más de €50,000</option>
                            </select>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-6 border-t border-white/10">
                          <button
                            type="submit"
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5] text-white font-bold hover:shadow-2xl hover:shadow-[#1FB6A6]/20 transition-all flex items-center justify-center gap-3 group"
                          >
                            <span>Siguiente: Elegir plan</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/10 rounded-2xl p-8"
                  >
                    <div className="mb-8">
                      <h1 className="text-3xl font-bold text-white mb-3">
                        Elige tu plan perfecto
                      </h1>
                      <p className="text-gray-400">
                        Sin compromiso. Cambia o cancela cuando quieras.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      {plans.map((plan) => (
                        <div
                          key={plan.id}
                          onClick={() => setSelectedPlan(plan.id)}
                          className={`relative rounded-2xl p-6 border-2 transition-all cursor-pointer ${
                            selectedPlan === plan.id
                              ? 'border-white/30 bg-gradient-to-b from-white/10 to-transparent'
                              : 'border-white/10 hover:border-white/20 bg-white/5'
                          }`}
                          style={selectedPlan === plan.id ? { borderColor: plan.color } : {}}
                        >
                          {plan.popular && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#F5A623] to-[#FFC107] text-white text-xs font-bold">
                              MÁS POPULAR
                            </div>
                          )}

                          <div className="text-center mb-6">
                            <div className="text-lg font-bold text-white mb-2">{plan.name}</div>
                            <div className="flex items-baseline justify-center gap-1">
                              <span className="text-4xl font-bold text-white">{plan.price}</span>
                              <span className="text-gray-400">/{plan.period}</span>
                            </div>
                          </div>

                          <ul className="space-y-3 mb-6">
                            {plan.features.map((feature, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#1FB6A6] flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-300">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <button
                            className={`w-full py-3 rounded-xl font-bold transition-all ${
                              selectedPlan === plan.id
                                ? 'text-white'
                                : 'text-gray-400 hover:text-white'
                            }`}
                            style={
                              selectedPlan === plan.id
                                ? { backgroundColor: plan.color }
                                : { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                            }
                          >
                            {plan.cta}
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <button
                        onClick={() => setStep(1)}
                        className="px-6 py-3 rounded-xl border-2 border-white/20 text-white hover:border-white/40 transition-all"
                      >
                        Atrás
                      </button>
                      <button
                        onClick={() => setStep(3)}
                        className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5] text-white font-bold hover:shadow-2xl hover:shadow-[#1FB6A6]/20 transition-all"
                      >
                        Siguiente: Confirmar
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    {!showSuccess ? (
                      <div className="bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/10 rounded-2xl p-8">
                        <div className="mb-8">
                          <h1 className="text-3xl font-bold text-white mb-3">
                            Confirma tu cuenta
                          </h1>
                          <p className="text-gray-400">
                            Revisa los detalles y comienza tu viaje con Decisia
                          </p>
                        </div>

                        <div className="space-y-8">
                          {/* Resumen */}
                          <div className="p-6 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10">
                            <h3 className="text-lg font-bold text-white mb-4">Resumen de tu cuenta</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <div className="text-sm text-gray-400 mb-2">Plan seleccionado</div>
                                <div className="text-lg font-bold text-white">
                                  {plans.find(p => p.id === selectedPlan)?.name}
                                </div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-400 mb-2">Precio</div>
                                <div className="text-lg font-bold text-white">
                                  {plans.find(p => p.id === selectedPlan)?.price}
                                  <span className="text-sm text-gray-400">
                                    /{plans.find(p => p.id === selectedPlan)?.period}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Beneficios incluidos */}
                          <div>
                            <h3 className="text-lg font-bold text-white mb-4">Incluye todo esto:</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                              {features.map((feature, index) => (
                                <div
                                  key={index}
                                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5"
                                >
                                  <div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: `${feature.color}20` }}
                                  >
                                    <div style={{ color: feature.color }}>
                                      {feature.icon}
                                    </div>
                                  </div>
                                  <div>
                                    <div className="font-medium text-white mb-1">{feature.title}</div>
                                    <div className="text-sm text-gray-400">{feature.description}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Contraseña */}
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Crea tu contraseña
                            </label>
                            <input
                              type="password"
                              required
                              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#1FB6A6]/50 focus:ring-1 focus:ring-[#1FB6A6]/20"
                              placeholder="••••••••"
                            />
                            <div className="flex items-center gap-2 mt-2">
                              <Lock className="w-4 h-4 text-gray-500" />
                              <span className="text-xs text-gray-500">
                                Encriptación de grado bancario
                              </span>
                            </div>
                          </div>

                          {/* Términos */}
                          <div className="flex items-start gap-3">
                            <input
                              type="checkbox"
                              required
                              className="mt-1 w-4 h-4 rounded bg-white/5 border border-white/10 text-[#1FB6A6] focus:ring-[#1FB6A6]/20"
                            />
                            <div className="text-sm text-gray-400">
                              Acepto los{' '}
                              <Link href="/terms" className="text-[#1FB6A6] hover:text-[#2CD9C5]">
                                Términos de Servicio
                              </Link>{' '}
                              y la{' '}
                              <Link href="/privacy" className="text-[#1FB6A6] hover:text-[#2CD9C5]">
                                Política de Privacidad
                              </Link>
                              . También acepto recibir consejos y actualizaciones por email.
                            </div>
                          </div>

                          {/* CTA final */}
                          <div className="flex items-center justify-between gap-4 pt-6 border-t border-white/10">
                            <button
                              type="button"
                              onClick={() => setStep(2)}
                              className="px-6 py-3 rounded-xl border-2 border-white/20 text-white hover:border-white/40 transition-all"
                            >
                              Atrás
                            </button>
                            <button
                              type="button"
                              onClick={handleSubmit}
                              disabled={isLoading}
                              className="flex-1 py-4 rounded-xl bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5] text-white font-bold hover:shadow-2xl hover:shadow-[#1FB6A6]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                            >
                              {isLoading ? (
                                <>
                                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                  Creando tu cuenta...
                                </>
                              ) : (
                                <>
                                  <Sparkles className="w-5 h-5" />
                                  Comenzar mi prueba gratis
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/10 rounded-2xl p-12 text-center"
                      >
                        <div className="relative w-24 h-24 mx-auto mb-8">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border-4 border-[#1FB6A6]/20"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1FB6A6] to-[#2CD9C5] flex items-center justify-center">
                              <CheckCircle className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-4">
                          ¡Cuenta creada con éxito!
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-md mx-auto">
                          Estamos preparando tu dashboard personalizado con inteligencia artificial.
                          Serás redirigido en unos segundos...
                        </p>

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1FB6A6]/20 to-[#F5A623]/20 border border-[#1FB6A6]/30">
                          <Sparkles className="w-4 h-4 text-[#F5A623]" />
                          <span className="text-sm font-medium text-white">
                            Dashboard personalizado en preparación
                          </span>
                        </div>

                        <div className="mt-8 flex justify-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#1FB6A6] animate-pulse" />
                          <div className="w-2 h-2 rounded-full bg-[#1FB6A6] animate-pulse" style={{ animationDelay: '0.2s' }} />
                          <div className="w-2 h-2 rounded-full bg-[#1FB6A6] animate-pulse" style={{ animationDelay: '0.4s' }} />
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar - Benefits & Social Proof */}
            <div className="lg:col-span-1 space-y-6">
              {/* Benefits Card */}
              <div className="bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#F5A623]" />
                  ¿Por qué elegir Decisia?
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                        <div className="text-[#1FB6A6]">
                          {benefit.icon}
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-white mb-1">{benefit.title}</div>
                        <div className="text-sm text-gray-400">{benefit.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonios rápidos */}
              <div className="bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#F5A623]" />
                  Lo que dicen otros
                </h3>
                <div className="space-y-4">
                  {quickTestimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10"
                    >
                      <p className="text-gray-300 mb-3">{testimonial.text}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white">{testimonial.author}</span>
                        <span className="text-sm font-bold text-[#1FB6A6]">{testimonial.metric}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/10 rounded-2xl p-6">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1FB6A6]/20 to-[#F5A623]/20 border border-[#1FB6A6]/30 mb-4">
                    <Shield className="w-4 h-4 text-[#1FB6A6]" />
                    <span className="text-sm font-medium text-white">100% Seguro</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-white/5">
                      <Lock className="w-6 h-6 text-green-400 mx-auto mb-2" />
                      <div className="text-xs text-gray-400">Datos encriptados</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <Award className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-xs text-gray-400">Certificado SOC2</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ rápida */}
              <div className="bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Preguntas frecuentes</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-white mb-1">
                      ¿Puedo cancelar en cualquier momento?
                    </div>
                    <div className="text-sm text-gray-400">
                      Sí, sin preguntas ni penalizaciones.
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white mb-1">
                      ¿Necesito tarjeta de crédito?
                    </div>
                    <div className="text-sm text-gray-400">
                      No para la prueba gratuita.
                    </div>
                  </div>
                  <Link
                    href="/faq"
                    className="inline-flex items-center gap-2 text-sm text-[#1FB6A6] hover:text-[#2CD9C5] transition-colors"
                  >
                    Ver todas las preguntas
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Decisia. Decision Intelligence Platform.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/terms" className="text-sm text-gray-500 hover:text-white transition-colors">
                Términos
              </Link>
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-white transition-colors">
                Privacidad
              </Link>
              <Link href="/security" className="text-sm text-gray-500 hover:text-white transition-colors">
                Seguridad
              </Link>
              <Link href="/contact" className="text-sm text-gray-500 hover:text-white transition-colors">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StartPage;