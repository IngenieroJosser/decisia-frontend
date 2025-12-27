'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  BrainCircuit,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Shield,
  Sparkles,
  Zap,
  CheckCircle,
  ArrowRight,
  Key,
  Fingerprint,
  Cpu,
  Database,
  LineChart,
  Target,
  Users,
  Clock,
  BarChart3,
  Cloud,
  Globe,
  ShieldCheck,
  Rocket,
  Brain,
  Network,
  Loader2,
  AlertCircle,
  Smartphone,
  Tablet,
  Monitor,
  Code,
  Star,
  TrendingUp,
  PieChart,
  Bell,
  Settings,
  LogIn,
  UserPlus,
  HelpCircle
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
const GLASS_EFFECT = `backdrop-filter backdrop-blur-xl bg-white/[0.02] border border-white/[0.08]`;

// ============================================================================
// COMPONENTES VISUALES
// ============================================================================

// Escudo de Seguridad Animado
const EscudoSeguridad = () => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative"
    >
      <motion.div
        animate={{ rotate: hovered ? 360 : 0 }}
        transition={{ duration: 2, ease: "linear" }}
        className="absolute inset-0 rounded-full border-2 border-[#1FB6A6]/30"
      />
      <motion.div
        animate={{ scale: hovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#1FB6A6]/10 to-[#0B1C2D] border border-[#1FB6A6]/30 flex items-center justify-center"
      >
        <Shield className="w-10 h-10 text-[#1FB6A6]" />
        {hovered && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5] flex items-center justify-center"
          >
            <CheckCircle className="w-5 h-5 text-white" />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

// Vista Previa del Dashboard
const VistaPreviaDashboard = () => {
  const [pestañaActiva, setPestañaActiva] = useState('predicciones');
  
  return (
    <div className="relative">
      {/* Fondo con efecto glow */}
      <div className="absolute -inset-6 bg-gradient-to-r from-[#1FB6A6]/10 via-[#0B1C2D] to-[#F5A623]/10 blur-2xl rounded-3xl" />
      
      {/* Tarjeta principal */}
      <div className="relative bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/[0.08] rounded-2xl p-6 overflow-hidden">
        {/* Encabezado */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#1FB6A6]" />
            <span className="text-sm font-medium text-white">Vista Previa en Vivo</span>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-6 h-6"
          >
            <Cpu className="w-6 h-6 text-[#1FB6A6]" />
          </motion.div>
        </div>
        
        {/* Pestañas */}
        <div className="flex gap-2 mb-6">
          {['predicciones', 'métricas', 'tendencias'].map((pestaña) => (
            <button
              key={pestaña}
              onClick={() => setPestañaActiva(pestaña)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                pestañaActiva === pestaña
                  ? `bg-gradient-to-r from-[#1FB6A6]/20 to-[#0B1C2D] text-white border border-white/[0.1]`
                  : 'text-gray-400 hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              {pestaña.charAt(0).toUpperCase() + pestaña.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Métricas */}
        <div className="space-y-4">
          {[
            { 
              etiqueta: 'Precisión Predictiva', 
              valor: '94%', 
              cambio: '+2.3%', 
              color: COLORS.accent,
              icono: <LineChart className="w-4 h-4" />
            },
            { 
              etiqueta: 'Usuarios Activos', 
              valor: '2.8K', 
              cambio: '+14%', 
              color: COLORS.secondary,
              icono: <Users className="w-4 h-4" />
            },
            { 
              etiqueta: 'Pronóstico Ventas', 
              valor: '€28.5K', 
              cambio: '+8.7%', 
              color: '#8B5CF6',
              icono: <TrendingUp className="w-4 h-4" />
            },
          ].map((metrica, i) => (
            <motion.div
              key={i}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${metrica.color}20` }}
                >
                  <div style={{ color: metrica.color }}>
                    {metrica.icono}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">{metrica.etiqueta}</div>
                  <div className="text-lg font-bold text-white">{metrica.valor}</div>
                </div>
              </div>
              <div className="text-sm font-medium" style={{ color: metrica.color }}>
                {metrica.cambio}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Barra de progreso animada */}
        <motion.div
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="mt-6 h-2 rounded-full bg-gradient-to-r from-[#1FB6A6] via-[#F5A623] to-[#1FB6A6] bg-[length:200%_100%]"
        />
      </div>
    </div>
  );
};

// Carrusel de Dispositivos
const CarruselDispositivos = () => {
  const dispositivos = [
    { tipo: 'mobile', icono: <Smartphone className="w-6 h-6" />, etiqueta: 'App Móvil' },
    { tipo: 'tablet', icono: <Tablet className="w-6 h-6" />, etiqueta: 'Tablet' },
    { tipo: 'desktop', icono: <Monitor className="w-6 h-6" />, etiqueta: 'Escritorio' },
    { tipo: 'api', icono: <Code className="w-6 h-6" />, etiqueta: 'API' },
  ];
  
  const [dispositivoActivo, setDispositivoActivo] = useState(0);
  
  useEffect(() => {
    const intervalo = setInterval(() => {
      setDispositivoActivo((prev) => (prev + 1) % dispositivos.length);
    }, 3000);
    
    return () => clearInterval(intervalo);
  }, []);
  
  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-white mb-2">Acceso Multiplataforma</h3>
        <p className="text-sm text-gray-400">Tu dashboard disponible en cualquier dispositivo</p>
      </div>
      
      <div className="flex justify-center gap-4">
        {dispositivos.map((dispositivo, index) => (
          <button
            key={dispositivo.tipo}
            onClick={() => setDispositivoActivo(index)}
            className={`p-4 rounded-xl transition-all transform hover:scale-105 ${
              dispositivoActivo === index
                ? `bg-gradient-to-r from-[#1FB6A6]/20 to-[#0B1C2D] border border-[#1FB6A6]/30 shadow-lg shadow-[#1FB6A6]/10`
                : 'bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1]'
            }`}
          >
            <div className={`${dispositivoActivo === index ? 'text-white' : 'text-gray-400'}`}>
              {dispositivo.icono}
            </div>
          </button>
        ))}
      </div>
      
      <div className="text-center">
        <div className="text-lg font-bold text-white mt-2">{dispositivos[dispositivoActivo].etiqueta}</div>
      </div>
    </div>
  );
};

// Testimonios Rápidos
const TestimoniosRapidos = () => {
  const testimonios = [
    {
      texto: "Desde que uso Decisia, mis decisiones son 3x más acertadas.",
      autor: "Carlos M., Director de Marketing",
      rol: "Empresa Retail",
      color: COLORS.accent
    },
    {
      texto: "La predicción de ventas con 94% de precisión cambió nuestro negocio.",
      autor: "Ana L., CEO",
      rol: "Startup Tech",
      color: COLORS.secondary
    }
  ];
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-white flex items-center gap-2">
        <Star className="w-5 h-5 text-[#F5A623]" />
        Lo que dicen nuestros usuarios
      </h3>
      <div className="space-y-3">
        {testimonios.map((testimonio, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="p-4 rounded-xl bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/[0.08]"
          >
            <div className="flex items-start gap-3">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${testimonio.color}20` }}
              >
                <div style={{ color: testimonio.color }}>
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <div>
                <p className="text-gray-300 italic">"{testimonio.texto}"</p>
                <div className="mt-3">
                  <div className="text-sm font-medium text-white">{testimonio.autor}</div>
                  <div className="text-xs text-gray-400">{testimonio.rol}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================
const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mostrarContraseña, setMostrarContraseña] = useState(false);
  const [recordarme, setRecordarme] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');
  const [metodoLogin, setMetodoLogin] = useState<'contraseña' | 'google' | 'github'>('contraseña');
  
  // Usuarios demo para acceso rápido
  const usuariosDemo = [
    { email: 'ceo@empresa.com', rol: 'Vista CEO', icono: '' },
    { email: 'analista@empresa.com', rol: 'Vista Analista', icono: '' },
    { email: 'marketing@empresa.com', rol: 'Vista Marketing', icono: '' },
  ];

  const manejarLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setCargando(true);

    // Simular llamada API
    setTimeout(() => {
      if (email && contraseña) {
        // Login exitoso
        router.push('/dashboard');
      } else {
        setError('Por favor ingresa tanto el email como la contraseña');
      }
      setCargando(false);
    }, 1500);
  };

  const manejarLoginSocial = (metodo: 'google' | 'github') => {
    setMetodoLogin(metodo);
    setCargando(true);
    
    // Simular login social
    setTimeout(() => {
      router.push('/dashboard');
    }, 1200);
  };

  const accesoRapido = (demoEmail: string) => {
    setEmail(demoEmail);
    setContraseña('demo123');
    
    // Auto login después de 1 segundo
    setTimeout(() => {
      router.push('/dashboard?demo=true');
    }, 1000);
  };

  // Características de seguridad
  const característicasSeguridad = [
    {
      icono: <ShieldCheck className="w-4 h-4" />,
      texto: 'Encriptación de extremo a extremo'
    },
    {
      icono: <Fingerprint className="w-4 h-4" />,
      texto: 'Autenticación biométrica'
    },
    {
      icono: <Lock className="w-4 h-4" />,
      texto: 'Certificación SOC2 Type II'
    }
  ];

  // Novedades recientes
  const novedades = [
    { icono: '', texto: 'Predicciones en tiempo real actualizadas' },
    { icono: '', texto: 'Nuevo motor de insights automatizados' },
    { icono: '', texto: 'Herramientas de visualización mejoradas' },
    { icono: '', texto: 'Recomendaciones IA mejoradas en 23%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0B1C2D] to-[#0A1624] overflow-hidden">
      {/* Fondo animado con colores de la paleta */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1FB6A6]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-3xl"
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
                href="/start"
                className="text-sm text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/[0.02] flex items-center gap-2"
              >
                <UserPlus className="w-4 h-4" />
                Crear cuenta
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Columna Izquierda - Formulario */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-8"
                >
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                      Bienvenido de vuelta
                    </span>
                    <br />
                    <span className="text-gray-300">a tu centro de inteligencia</span>
                  </h1>
                  <p className="text-gray-400">
                    Continúa tu viaje de datos a decisiones inteligentes
                  </p>
                </motion.div>

                {/* Acceso Rápido Demo */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-8"
                >
                  <div className="text-sm text-gray-400 mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#F5A623]" />
                    Acceso rápido demo:
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {usuariosDemo.map((usuario, index) => (
                      <button
                        key={usuario.email}
                        onClick={() => accesoRapido(usuario.email)}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all group hover:transform hover:scale-[1.02]"
                      >
                        <div className="text-2xl mb-2">{usuario.icono}</div>
                        <div className="text-xs text-gray-400">{usuario.rol}</div>
                        <div className="text-sm font-medium text-white truncate">{usuario.email}</div>
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Formulario de Login */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  {/* Fondo con efecto glass */}
                  <div className="absolute -inset-6 bg-gradient-to-r from-[#1FB6A6]/5 to-[#0B1C2D] blur-2xl rounded-3xl" />
                  
                  {/* Contenedor del formulario */}
                  <div className="relative bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/[0.08] rounded-2xl p-8">
                    {/* Badge de seguridad */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#1FB6A6]/10 to-[#0B1C2D] border border-[#1FB6A6]/30">
                        <ShieldCheck className="w-4 h-4 text-[#1FB6A6]" />
                        <span className="text-sm font-medium text-white">Login Seguro</span>
                      </div>
                    </div>

                    <form onSubmit={manejarLogin} className="space-y-6">
                      {/* Campo Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Correo electrónico
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:border-[#1FB6A6] focus:ring-2 focus:ring-[#1FB6A6]/20"
                            placeholder="tu@empresa.com"
                            required
                          />
                        </div>
                      </div>

                      {/* Campo Contraseña */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="block text-sm font-medium text-gray-300">
                            Contraseña
                          </label>
                          <Link
                            href="/forgot-password"
                            className="text-sm text-[#1FB6A6] hover:text-[#2CD9C5] transition-colors"
                          >
                            ¿Olvidaste tu contraseña?
                          </Link>
                        </div>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                          <input
                            type={mostrarContraseña ? 'text' : 'password'}
                            value={contraseña}
                            onChange={(e) => setContraseña(e.target.value)}
                            className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:border-[#1FB6A6] focus:ring-2 focus:ring-[#1FB6A6]/20"
                            placeholder="••••••••"
                            required
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
                      </div>

                      {/* Recordarme y Error */}
                      <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={recordarme}
                            onChange={(e) => setRecordarme(e.target.checked)}
                            className="w-4 h-4 rounded bg-white/[0.03] border border-white/[0.1] text-[#1FB6A6] focus:ring-[#1FB6A6]/20"
                          />
                          <span className="text-sm text-gray-300">Recordarme</span>
                        </label>
                        
                        {error && (
                          <div className="flex items-center gap-2 text-red-400 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            {error}
                          </div>
                        )}
                      </div>

                      {/* Botón de Login */}
                      <button
                        type="submit"
                        disabled={cargando}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5] text-white font-bold hover:shadow-2xl hover:shadow-[#1FB6A6]/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {cargando ? (
                          <div className="flex items-center justify-center gap-3">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Accediendo a tu dashboard...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-3">
                            <Key className="w-5 h-5" />
                            <span>Acceder al Dashboard</span>
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        )}
                      </button>

                      {/* Divisor */}
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-white/[0.1]"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-4 bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] text-gray-500">
                            O continúa con
                          </span>
                        </div>
                      </div>

                      {/* Login Social */}
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => manejarLoginSocial('google')}
                          disabled={cargando}
                          className="py-3 rounded-xl border border-white/[0.1] hover:border-white/[0.2] bg-white/[0.02] text-white font-medium transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                        >
                          <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                          Google
                        </button>
                        <button
                          type="button"
                          onClick={() => manejarLoginSocial('github')}
                          disabled={cargando}
                          className="py-3 rounded-xl border border-white/[0.1] hover:border-white/[0.2] bg-white/[0.02] text-white font-medium transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </button>
                      </div>

                      {/* Enlace para crear cuenta */}
                      <div className="text-center pt-4 border-t border-white/[0.1]">
                        <p className="text-gray-400">
                          ¿No tienes una cuenta?{' '}
                          <Link
                            href="/start"
                            className="text-[#1FB6A6] hover:text-[#2CD9C5] font-medium"
                          >
                            Crea una ahora
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </motion.div>

                {/* Características de seguridad */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8"
                >
                  <div className="flex flex-col sm:flex-row justify-center gap-6">
                    {característicasSeguridad.map((característica, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="text-[#1FB6A6]">
                          {característica.icono}
                        </div>
                        <span className="text-sm text-gray-400">{característica.texto}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Columna Derecha - Vista Previa y Beneficios */}
              <div className="space-y-8">
                {/* Vista Previa del Dashboard */}
                <VistaPreviaDashboard />

                {/* Acceso Multiplataforma */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <CarruselDispositivos />
                </motion.div>

                {/* Testimonios */}
                <TestimoniosRapidos />

                {/* Novedades */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#F5A623]" />
                    Novedades desde tu última visita
                  </h3>
                  <div className="space-y-3">
                    {novedades.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                        <div className="text-xl">{item.icono}</div>
                        <div className="text-sm text-gray-300">{item.texto}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Escudo de Seguridad */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <div className="inline-block mb-4">
                    <EscudoSeguridad />
                  </div>
                  <div className="text-sm text-gray-400">
                    Tus datos están protegidos con encriptación de grado militar
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
              <Link href="/support" className="text-sm text-gray-500 hover:text-white transition-colors">
                Soporte 24/7
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

export default LoginPage;