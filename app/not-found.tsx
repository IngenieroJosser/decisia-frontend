'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Home,
  ArrowLeft,
  Search,
  BrainCircuit,
  Compass,
  Zap,
  Sparkles,
  AlertTriangle,
  BarChart3,
  TrendingUp,
  ChevronRight
} from 'lucide-react';

const NotFoundPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glitchEffect, setGlitchEffect] = useState(false);

  // Efecto de seguimiento del cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Efecto de glitch aleatorio
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitchEffect(true);
        setTimeout(() => setGlitchEffect(false), 100);
      }
    }, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(glitchInterval);
    };
  }, []);

  // Páginas populares para redirigir
  const popularPages = [
    { name: 'Dashboard Principal', path: '/', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Características', path: '/#features', icon: <Sparkles className="w-4 h-4" /> },
    { name: 'Precios', path: '/#pricing', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'Demo Interactiva', path: '/demo', icon: <Zap className="w-4 h-4" /> }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0B1C2D] via-[#0D2238] to-[#0A1624] overflow-hidden">
      {/* Efecto de partículas que siguen el cursor */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(31, 182, 166, 0.1), transparent 80%)`
          }}
        />
        
        {/* Grid de fondo con errores */}
        <div 
          className={`absolute inset-0 transition-opacity duration-300 ${
            glitchEffect ? 'opacity-30' : 'opacity-10'
          }`}
          style={{
            backgroundImage: `
              linear-gradient(90deg, #1FB6A6 1px, transparent 1px),
              linear-gradient(180deg, #1FB6A6 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: glitchEffect ? 'translateX(5px)' : 'translateX(0)'
          }}
        />

        {/* Efectos de glitch */}
        {glitchEffect && (
          <>
            <div className="absolute inset-0 bg-red-500/5 mix-blend-overlay animate-pulse" />
            <div 
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 mix-blend-overlay"
              style={{ transform: 'translate(-50%, -50%) skewX(10deg)' }}
            />
          </>
        )}

        {/* Líneas de datos rotas */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
          <path
            d="M0,100 Q200,50 400,150 T800,100 T1200,150"
            stroke="#1FB6A6"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10,5"
          />
          <path
            d="M0,200 Q300,150 600,250 T1000,200"
            stroke="#F5A623"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,8"
            className={glitchEffect ? 'translate-x-2' : ''}
          />
        </svg>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full max-w-6xl mx-auto py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Columna izquierda - Visualización del error */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Número 404 con efectos */}
              <div className="relative">
                {/* Efecto de sombra */}
                <div className="absolute -inset-8 bg-gradient-to-r from-[#1FB6A6]/20 to-[#F5A623]/20 blur-3xl rounded-full" />
                
                {/* Números principales */}
                <div className="relative">
                  <div className={`text-[180px] lg:text-[240px] font-black leading-none transition-all duration-300 ${
                    glitchEffect ? 'text-red-400' : 'text-white'
                  }`}>
                    <span className="inline-block">4</span>
                    <span className="inline-block mx-4">0</span>
                    <span className="inline-block">4</span>
                  </div>
                  
                  {/* Efecto de desvanecimiento */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-transparent to-transparent" />
                </div>

                {/* Icono de alerta animado */}
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-red-500/20 to-amber-500/10 border-2 border-red-500/30 flex items-center justify-center backdrop-blur-sm">
                      <AlertTriangle className="w-16 h-16 text-red-400" />
                    </div>
                    <div className="absolute -inset-4 rounded-full border-2 border-red-500/20 animate-ping" />
                  </div>
                </motion.div>
              </div>

              {/* Mensaje de error */}
              <div className="mt-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-amber-500/10 border border-red-500/20 mb-4">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  <span className="text-sm font-medium text-red-300">Error de navegación detectado</span>
                </div>
                <h1 className="text-3xl font-bold text-white mb-4">
                  Página no encontrada
                </h1>
                <p className="text-gray-400 text-lg">
                  Parece que los datos que buscas se perdieron en el análisis.
                </p>
              </div>
            </motion.div>

            {/* Columna derecha - Soluciones y navegación */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Encabezado */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1FB6A6]/20 to-[#8B5CF6]/20 border border-[#1FB6A6]/30 mb-4">
                  <BrainCircuit className="w-4 h-4 text-[#1FB6A6]" />
                  <span className="text-sm font-medium text-white">Inteligencia Decisional al rescate</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Te ayudamos a encontrar el camino
                </h2>
                <p className="text-gray-400">
                  Mientras nuestros algoritmos buscan la página perdida, aquí tienes alternativas inteligentes.
                </p>
              </div>

              {/* Tarjeta de diagnóstico */}
              <div className="bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1FB6A6]/20 to-[#1FB6A6]/5 border border-[#1FB6A6]/30 flex items-center justify-center">
                    <Search className="w-6 h-6 text-[#1FB6A6]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Diagnóstico automático</h3>
                    <p className="text-sm text-gray-400">Nuestra IA analizó el error</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <span className="text-sm text-gray-400">URL solicitada:</span>
                    <span className="text-sm font-mono text-gray-300 truncate max-w-[200px]">
                      {typeof window !== 'undefined' ? window.location.pathname : '/pagina-no-encontrada'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <span className="text-sm text-gray-400">Código de error:</span>
                    <span className="text-sm font-mono text-red-400">404 - Not Found</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <span className="text-sm text-gray-400">Solución recomendada:</span>
                    <span className="text-sm text-[#1FB6A6]">Redirección inteligente</span>
                  </div>
                </div>
              </div>

              {/* Páginas populares */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#F5A623]" />
                  Páginas populares
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {popularPages.map((page) => (
                    <Link
                      key={page.path}
                      href={page.path}
                      className="group flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <div className="text-[#1FB6A6]">
                            {page.icon}
                          </div>
                        </div>
                        <span className="font-medium text-white">{page.name}</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#1FB6A6] group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Acciones principales */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/"
                  className="group flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-[#1FB6A6] to-[#1FB6A6]/90 text-white font-semibold hover:shadow-2xl hover:shadow-[#1FB6A6]/20 transition-all"
                >
                  <Home className="w-5 h-5" />
                  <span>Volver al inicio</span>
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Link>
                
                <button
                  onClick={() => window.history.back()}
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl border-2 border-white/20 text-white font-medium hover:border-white/40 transition-all group"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span>Página anterior</span>
                </button>
              </div>

              {/* Buscador */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1FB6A6]/10 to-[#8B5CF6]/10 rounded-2xl blur-xl opacity-50" />
                <div className="relative p-4 rounded-2xl bg-gradient-to-br from-[#0B1C2D] to-[#0A1624] border border-white/10">
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#F5A623]" />
                    ¿Buscas algo específico?
                  </h4>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Buscar en Decisia..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#1FB6A6]/50 focus:ring-1 focus:ring-[#1FB6A6]/20"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          window.location.href = `/search?q=${(e.target as HTMLInputElement).value}`;
                        }
                      }}
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-lg bg-gradient-to-r from-[#1FB6A6] to-[#2CD9C5] hover:shadow-lg hover:shadow-[#1FB6A6]/20 transition-all">
                      <Search className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer del error */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 pt-8 border-t border-white/10 text-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1FB6A6] to-[#0B1C2D] flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white">Decisia AI</div>
                  <div className="text-xs text-gray-400">Decision Intelligence Platform</div>
                </div>
              </div>
              
              <div className="text-sm text-gray-500">
                Si crees que esto es un error, contacta a nuestro{' '}
                <Link href="/support" className="text-[#1FB6A6] hover:text-[#2CD9C5] transition-colors">
                  equipo de soporte
                </Link>
              </div>
              
              <div className="text-xs text-gray-600">
                Error ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Efectos de partículas */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#1FB6A6]"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            animate={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Consola de errores (efecto visual) */}
      {glitchEffect && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 h-48 bg-black/90 border border-red-500/30 rounded-lg overflow-hidden font-mono text-xs opacity-0 animate-in fade-in duration-300">
          <div className="flex items-center justify-between px-4 py-2 bg-red-900/30 border-b border-red-500/30">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-300">ERROR CONSOLE</span>
            </div>
            <span className="text-gray-500">404.log</span>
          </div>
          <div className="p-4 space-y-1">
            <div className="text-red-400">$ error: PAGE_NOT_FOUND</div>
            <div className="text-yellow-400">$ warning: ROUTE_ANALYSIS_FAILED</div>
            <div className="text-green-400">$ info: AI_REDIRECTION_ACTIVATED</div>
            <div className="text-blue-400">$ solution: USER_REDIRECT_TO_HOME</div>
            <div className="text-gray-500">$ timestamp: {new Date().toISOString()}</div>
            <div className="text-purple-400 animate-pulse">$ _</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotFoundPage;