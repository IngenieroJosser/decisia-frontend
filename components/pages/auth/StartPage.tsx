'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Brain,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Building,
  Sparkles,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Key,
  Fingerprint,
  Cpu,
  LineChart,
  Target,
  Users,
  Clock,
  BarChart3,
  Cloud,
  Globe,
  ShieldCheck,
  Rocket,
  Star,
  TrendingUp,
  PieChart,
  Bell,
  Settings,
  LogIn,
  UserPlus,
  HelpCircle,
  AlertCircle,
  Loader2,
  Smartphone,
  Monitor,
  Server,
  Database,
  Network,
  GitBranch,
  CloudRain,
  Target as TargetIcon
} from 'lucide-react';

// ============================================================================
// CONSTANTES VISUALES CON PALETA ESPECÍFICA
// ============================================================================
const COLORS = {
  primary: '#0B1C2D',     // Fondo principal
  accent: '#1FB6A6',      // Color primario - cian/verde
  secondary: '#F5A623',   // Color secundario - naranja
  white: '#FFFFFF',
  gray: {
    100: '#F7FAFC',
    200: '#EDF2F7',
    300: '#E2E8F0',
    400: '#CBD5E0',
    500: '#A0AEC0',
    600: '#718096',
    700: '#4A5568',
    800: '#2D3748',
    900: '#1A202C'
  }
};

const PRIMARY_GRADIENT = `linear-gradient(135deg, ${COLORS.accent} 0%, #2CD9C5 100%)`;
const SECONDARY_GRADIENT = `linear-gradient(135deg, ${COLORS.secondary} 0%, #FFC107 100%)`;

// ============================================================================
// COMPONENTES VISUALES
// ============================================================================

// Animación de Partículas Inteligentes
const ParticulasInteligentes = () => {
  const particles = useRef<HTMLDivElement>(null);
  const [particleCount] = useState(30);

  useEffect(() => {
    if (!particles.current) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full';
      
      // Tamaño aleatorio
      const size = Math.random() * 4 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Color de la paleta
      const colors = ['#1FB6A6', '#2CD9C5', '#F5A623', '#8B5CF6'];
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.opacity = '0.3';
      
      // Posición inicial
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Animación
      particle.animate(
        [
          { transform: 'translate(0, 0)', opacity: 0 },
          { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`, opacity: 0.6 },
          { transform: 'translate(0, 0)', opacity: 0 }
        ],
        {
          duration: Math.random() * 3000 + 2000,
          iterations: Infinity
        }
      );
      
      particles.current?.appendChild(particle);
    };

    // Crear partículas
    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }

    return () => {
      if (particles.current) {
        particles.current.innerHTML = '';
      }
    };
  }, [particleCount]);

  return (
    <div
      ref={particles}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    />
  );
};

// Paso a Paso Animado
const PasosRegistro = ({ pasoActual }: { pasoActual: number }) => {
  const pasos = [
    { numero: 1, titulo: 'Cuenta', descripcion: 'Crear tu perfil' },
    { numero: 2, titulo: 'Negocio', descripcion: 'Configurar empresa' },
    { numero: 3, titulo: 'Dashboard', descripcion: 'Acceso inmediato' },
  ];

  return (
    <div className="relative">
      {/* Línea de progreso */}
      <div className="absolute top-5 left-0 right-0 h-0.5 bg-white/10 -z-10">
        <motion.div
          className="h-full bg-gradient-to-r from-[#1FB6A6] via-[#F5A623] to-[#1FB6A6] bg-[length:200%_100%]"
          initial={{ width: '0%' }}
          animate={{ width: `${((pasoActual - 1) / (pasos.length - 1)) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="flex justify-between">
        {pasos.map((paso) => (
          <div key={paso.numero} className="flex flex-col items-center">
            <motion.div
              className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                paso.numero <= pasoActual
                  ? 'bg-gradient-to-br from-[#1FB6A6] to-[#2CD9C5] text-white'
                  : 'bg-white/10 text-gray-400'
              }`}
              animate={{
                scale: paso.numero === pasoActual ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {paso.numero < pasoActual ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                paso.numero
              )}
            </motion.div>
            <div className="text-center">
              <div className={`text-sm font-medium ${
                paso.numero <= pasoActual ? 'text-white' : 'text-gray-400'
              }`}>
                {paso.titulo}
              </div>
              <div className="text-xs text-gray-500">{paso.descripcion}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Tarjeta de Beneficios
const TarjetaBeneficio = ({ icono, titulo, descripcion, color }: any) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -2 }}
    className="p-4 rounded-xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/[0.08] hover:border-white/[0.15] transition-all"
  >
    <div className="flex items-start gap-3">
      <div 
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${color}20` }}
      >
        <div style={{ color: color }}>
          {icono}
        </div>
      </div>
      <div>
        <div className="font-medium text-white mb-1">{titulo}</div>
        <div className="text-sm text-gray-400">{descripcion}</div>
      </div>
    </div>
  </motion.div>
);

// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================
const StartPage = () => {
  const router = useRouter();
  
  // Estados del formulario
  const [paso, setPaso] = useState(1);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    contraseña: '',
    empresa: '',
    tamañoEmpresa: '',
    industria: '',
  });
  const [mostrarContraseña, setMostrarContraseña] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');
  const [metodoRegistro, setMetodoRegistro] = useState<'email' | 'google' | 'github' | null>(null);

  // Industrias para selección
  const industrias = [
    { id: 'tech', nombre: 'Tecnología', icono: '💻' },
    { id: 'retail', nombre: 'Retail', icono: '🛍️' },
    { id: 'servicios', nombre: 'Servicios', icono: '🔧' },
    { id: 'finanzas', nombre: 'Finanzas', icono: '💰' },
    { id: 'salud', nombre: 'Salud', icono: '🏥' },
    { id: 'educacion', nombre: 'Educación', icono: '🎓' },
    { id: 'manufactura', nombre: 'Manufactura', icono: '🏭' },
    { id: 'consultoria', nombre: 'Consultoría', icono: '📊' },
  ];

  // Tamaños de empresa
  const tamañosEmpresa = [
    { id: 'solo', nombre: 'Solo yo / Freelancer' },
    { id: '2-10', nombre: '2-10 empleados' },
    { id: '11-50', nombre: '11-50 empleados' },
    { id: '51-200', nombre: '51-200 empleados' },
    { id: '201+', nombre: '201+ empleados' },
  ];

  // Beneficios de registro
  const beneficios = [
    {
      icono: <Zap className="w-5 h-5" />,
      titulo: 'Dashboard en 2 minutos',
      descripcion: 'Comienza a tomar decisiones inteligentes inmediatamente',
      color: COLORS.accent
    },
    {
      icono: <Shield className="w-5 h-5" />,
      titulo: 'Privacidad garantizada',
      descripcion: 'Tus datos protegidos con encriptación de grado bancario',
      color: COLORS.accent
    },
    {
      icono: <Sparkles className="w-5 h-5" />,
      titulo: '14 días gratis Pro',
      descripcion: 'Prueba todas las funciones sin tarjeta de crédito',
      color: COLORS.secondary
    },
  ];

  // Características principales
  const características = [
    {
      icono: <LineChart className="w-5 h-5" />,
      titulo: 'Análisis Predictivo',
      descripcion: '94% de precisión en pronósticos',
      color: COLORS.accent
    },
    {
      icono: <Target className="w-5 h-5" />,
      titulo: 'Recomendaciones IA',
      descripcion: 'Acciones específicas para tu negocio',
      color: COLORS.secondary
    },
    {
      icono: <Users className="w-5 h-5" />,
      titulo: 'Equipo Colaborativo',
      descripcion: 'Dashboard compartido en tiempo real',
      color: '#8B5CF6'
    },
    {
      icono: <Clock className="w-5 h-5" />,
      titulo: 'Ahorro de Tiempo',
      descripcion: 'Reduce 15+ horas semanales',
      color: '#EC4899'
    },
  ];

  // Manejar cambios en el formulario
  const manejarCambio = (campo: string, valor: string) => {
    setFormData(prev => ({ ...prev, [campo]: valor }));
  };

  // Validar paso actual
  const validarPaso = () => {
    switch (paso) {
      case 1:
        if (!formData.email || !formData.contraseña || !formData.nombre) {
          setError('Por favor completa todos los campos');
          return false;
        }
        if (formData.contraseña.length < 6) {
          setError('La contraseña debe tener al menos 6 caracteres');
          return false;
        }
        break;
      case 2:
        if (!formData.empresa || !formData.tamañoEmpresa || !formData.industria) {
          setError('Por favor completa la información de tu empresa');
          return false;
        }
        break;
    }
    setError('');
    return true;
  };

  // Avanzar al siguiente paso
  const siguientePaso = () => {
    if (validarPaso()) {
      if (paso < 3) {
        setPaso(paso + 1);
      } else {
        completarRegistro();
      }
    }
  };

  // Retroceder al paso anterior
  const pasoAnterior = () => {
    if (paso > 1) {
      setPaso(paso - 1);
      setError('');
    }
  };

  // Completar registro con email/contraseña
  const completarRegistro = async () => {
    setCargando(true);
    setError('');
    
    // Simular llamada API
    setTimeout(() => {
      setCargando(false);
      // Redirigir al dashboard
      router.push('/dashboard?onboarding=true');
    }, 2000);
  };

  // Manejar registro social
  const manejarRegistroSocial = async (proveedor: 'google' | 'github') => {
    setMetodoRegistro(proveedor);
    setCargando(true);
    setError('');
    
    // Simular autenticación social
    setTimeout(() => {
      setCargando(false);
      // Redirigir al onboarding
      router.push('/dashboard?onboarding=true&social=' + proveedor);
    }, 1500);
  };

  // Contenido del paso actual
  const renderizarPaso = () => {
    switch (paso) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Crea tu cuenta</h2>
            <p className="text-gray-400">Comienza tu viaje hacia decisiones más inteligentes</p>
            
            {/* Campos básicos */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre completo
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => manejarCambio('nombre', e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:border-[#1FB6A6] focus:ring-2 focus:ring-[#1FB6A6]/20"
                    placeholder="Tu nombre"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Correo electrónico
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => manejarCambio('email', e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:border-[#1FB6A6] focus:ring-2 focus:ring-[#1FB6A6]/20"
                    placeholder="tu@empresa.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type={mostrarContraseña ? 'text' : 'password'}
                    value={formData.contraseña}
                    onChange={(e) => manejarCambio('contraseña', e.target.value)}
                    className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:border-[#1FB6A6] focus:ring-2 focus:ring-[#1FB6A6]/20"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setMostrarContraseña(!mostrarContraseña)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white"
                  >
                    {mostrarContraseña ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  Mínimo 6 caracteres. Recomendamos mayúsculas, números y símbolos.
                </div>
              </div>
            </div>

            {/* Términos y condiciones */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                required
                className="mt-1 w-4 h-4 rounded bg-white/[0.03] border border-white/[0.1] text-[#1FB6A6] focus:ring-[#1FB6A6]/20"
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

            {/* Botón de continuar */}
            <button
              onClick={siguientePaso}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5] text-white font-bold hover:shadow-2xl hover:shadow-[#1FB6A6]/40 transition-all flex items-center justify-center gap-3 group"
            >
              <span>Continuar</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Sobre tu negocio</h2>
            <p className="text-gray-400">Personalizamos Decisia para tus necesidades específicas</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre de tu empresa
                </label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    value={formData.empresa}
                    onChange={(e) => manejarCambio('empresa', e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:border-[#1FB6A6] focus:ring-2 focus:ring-[#1FB6A6]/20"
                    placeholder="Mi Empresa S.L."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tamaño de tu equipo
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {tamañosEmpresa.map((tamaño) => (
                    <button
                      key={tamaño.id}
                      type="button"
                      onClick={() => manejarCambio('tamañoEmpresa', tamaño.id)}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        formData.tamañoEmpresa === tamaño.id
                          ? 'border-[#1FB6A6] bg-gradient-to-r from-[#1FB6A6]/10 to-transparent'
                          : 'border-white/[0.1] hover:border-white/[0.2] bg-white/[0.02]'
                      }`}
                    >
                      <div className="text-sm font-medium text-white">{tamaño.nombre}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Industria principal
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {industrias.map((industria) => (
                    <button
                      key={industria.id}
                      type="button"
                      onClick={() => manejarCambio('industria', industria.id)}
                      className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center ${
                        formData.industria === industria.id
                          ? 'border-[#1FB6A6] bg-gradient-to-r from-[#1FB6A6]/10 to-transparent'
                          : 'border-white/[0.1] hover:border-white/[0.2] bg-white/[0.02]'
                      }`}
                    >
                      <div className="text-2xl mb-2">{industria.icono}</div>
                      <div className="text-sm font-medium text-white">{industria.nombre}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Botones de navegación */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={pasoAnterior}
                className="flex-1 py-3.5 rounded-xl border-2 border-white/[0.15] text-white hover:border-white/[0.25] transition-all"
              >
                Atrás
              </button>
              <button
                onClick={siguientePaso}
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5] text-white font-bold hover:shadow-2xl hover:shadow-[#1FB6A6]/40 transition-all"
              >
                Continuar
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">¡Todo listo!</h2>
            <p className="text-gray-400">Comienza tu prueba gratuita de 14 días</p>
            
            {/* Resumen */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/[0.08]">
              <h3 className="text-lg font-bold text-white mb-4">Resumen de tu cuenta</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Plan</span>
                  <span className="font-medium text-white">Pro - 14 días gratis</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Empresa</span>
                  <span className="font-medium text-white">{formData.empresa || 'Mi Empresa'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Email</span>
                  <span className="font-medium text-white">{formData.email}</span>
                </div>
              </div>
            </div>

            {/* Beneficios incluidos */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Incluye todo esto:</h3>
              <div className="space-y-3">
                {características.map((característica, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02]">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${característica.color}20` }}
                    >
                      <div style={{ color: característica.color }}>
                        {característica.icono}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-white">{característica.titulo}</div>
                      <div className="text-sm text-gray-400">{característica.descripcion}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Botón final */}
            <button
              onClick={completarRegistro}
              disabled={cargando}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5] text-white font-bold hover:shadow-2xl hover:shadow-[#1FB6A6]/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {cargando ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Creando tu cuenta...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Comenzar prueba gratuita
                </>
              )}
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0B1C2D] to-[#0A1624] overflow-hidden">
      {/* Partículas de fondo */}
      <ParticulasInteligentes />
      
      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-[#1FB6A6]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#F5A623]/5 rounded-full blur-3xl"
        />
      </div>

      {/* Header */}
      <header className="relative z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="group">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-3"
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-2 rounded-full border border-[#1FB6A6]/30"
                  />
                  <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#1FB6A6] to-[#0B1C2D] flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-xl font-bold tracking-tighter text-white">DECISIA</div>
                  <div className="text-xs text-gray-400">Inteligencia para Decisiones</div>
                </div>
              </motion.div>
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="text-sm text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/[0.02] flex items-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                Iniciar sesión
              </Link>
              <Link
                href="/demo"
                className="px-4 py-2 rounded-xl border border-white/[0.15] text-white font-medium hover:bg-white/[0.02] transition-all flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                Demo en vivo
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Columna izquierda - Contenido principal */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 text-center lg:text-left"
                >
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                      De datos a decisiones,
                    </span>
                    <br />
                    <span className="text-gray-300">en segundos</span>
                  </h1>
                  <p className="text-xl text-gray-400">
                    La primera plataforma de inteligencia predictiva que entiende tu negocio y te dice exactamente qué hacer después.
                  </p>
                </motion.div>

                {/* Paso a paso */}
                <div className="mb-8">
                  <PasosRegistro pasoActual={paso} />
                </div>

                {/* Formulario principal */}
                <motion.div
                  key={paso}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="relative mb-8"
                >
                  {/* Fondo glass */}
                  <div className="absolute -inset-6 bg-gradient-to-r from-[#1FB6A6]/5 to-[#0B1C2D] blur-2xl rounded-3xl" />
                  
                  {/* Contenedor del formulario */}
                  <div className="relative bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/[0.08] rounded-2xl p-8">
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20"
                      >
                        <div className="flex items-center gap-2 text-red-400">
                          <AlertCircle className="w-5 h-5" />
                          <span>{error}</span>
                        </div>
                      </motion.div>
                    )}

                    {renderizarPaso()}
                  </div>
                </motion.div>

                {/* Registro social - Solo en paso 1 */}
                {paso === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative"
                  >
                    <div className="relative bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/[0.08] rounded-2xl p-8">
                      <div className="text-center mb-6">
                        <div className="text-sm text-gray-400 mb-2">O regístrate con</div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <button
                          onClick={() => manejarRegistroSocial('google')}
                          disabled={cargando}
                          className="py-4 rounded-xl border border-white/[0.1] hover:border-white/[0.2] bg-white/[0.02] text-white font-medium transition-all disabled:opacity-50 flex items-center justify-center gap-3 group"
                        >
                          {cargando && metodoRegistro === 'google' ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                          ) : (
                            <>
                              <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                              </svg>
                              <span>Google</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => manejarRegistroSocial('github')}
                          disabled={cargando}
                          className="py-4 rounded-xl border border-white/[0.1] hover:border-white/[0.2] bg-white/[0.02] text-white font-medium transition-all disabled:opacity-50 flex items-center justify-center gap-3 group"
                        >
                          {cargando && metodoRegistro === 'github' ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                          ) : (
                            <>
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                              <span>GitHub</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="text-center mt-6 pt-6 border-t border-white/[0.1]">
                        <p className="text-gray-400">
                          ¿Ya tienes una cuenta?{' '}
                          <Link
                            href="/login"
                            className="text-[#1FB6A6] hover:text-[#2CD9C5] font-medium"
                          >
                            Inicia sesión aquí
                          </Link>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Columna derecha - Beneficios y características */}
              <div className="space-y-8">
                {/* Beneficios de registro */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#F5A623]" />
                    Beneficios inmediatos
                  </h3>
                  {beneficios.map((beneficio, index) => (
                    <TarjetaBeneficio
                      key={index}
                      icono={beneficio.icono}
                      titulo={beneficio.titulo}
                      descripcion={beneficio.descripcion}
                      color={beneficio.color}
                    />
                  ))}
                </motion.div>

                {/* Características principales */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#1FB6A6]" />
                    Lo que obtienes hoy
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {características.map((característica, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                      >
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
                          style={{ backgroundColor: `${característica.color}20` }}
                        >
                          <div style={{ color: característica.color }}>
                            {característica.icono}
                          </div>
                        </div>
                        <div className="text-sm font-medium text-white">{característica.titulo}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Estadísticas de confianza */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/[0.08]"
                >
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#1FB6A6]/10 to-[#F5A623]/10 border border-[#1FB6A6]/30 mb-3">
                      <TrendingUp className="w-4 h-4 text-[#F5A623]" />
                      <span className="text-sm font-medium text-white">Resultados comprobados</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Precisión IA</span>
                      <span className="text-lg font-bold text-white">94%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">ROI promedio</span>
                      <span className="text-lg font-bold text-white">3.2x</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Tiempo ahorrado/semana</span>
                      <span className="text-lg font-bold text-white">15h</span>
                    </div>
                  </div>
                </motion.div>

                {/* Testimonio rápido */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/[0.08]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5] flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-white">María González</div>
                      <div className="text-sm text-gray-400">CEO, RetailTech</div>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    "Decisia nos ayudó a aumentar nuestras ventas en un 28% en solo 2 meses. La plataforma es intuitiva y las predicciones son increíblemente precisas."
                  </p>
                </motion.div>

                {/* Seguridad */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/[0.08]"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#1FB6A6]/10 to-[#0B1C2D] border border-[#1FB6A6]/30 mb-4">
                    <ShieldCheck className="w-4 h-4 text-[#1FB6A6]" />
                    <span className="text-sm font-medium text-white">100% Seguro</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Tus datos están protegidos con encriptación de grado bancario. Sin tarjeta de crédito requerida para la prueba gratuita.
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-24 border-t border-white/[0.08]">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Decisia. Plataforma de Inteligencia para Decisiones.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/security" className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors">
                <Shield className="w-4 h-4" />
                Seguridad
              </Link>
              <div className="h-4 w-px bg-white/[0.1]" />
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-white transition-colors">
                Privacidad
              </Link>
              <Link href="/support" className="text-sm text-gray500 hover:text-white transition-colors">
                Soporte
              </Link>
              <Link href="/help" className="text-sm text-gray-500 hover:text-white transition-colors">
                <HelpCircle className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StartPage;