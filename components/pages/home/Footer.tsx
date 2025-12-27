'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BrainCircuit,
  Sparkles,
  Zap,
  Shield,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ChevronRight,
  CheckCircle,
  ArrowUpRight,
  MessageCircle,
  Clock,
  Users,
  Award,
  Globe,
  Send
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Links organizados por categoría
  const footerLinks = {
    producto: [
      { label: 'Características', href: '#caracteristicas' },
      { label: 'Cómo funciona', href: '#como-funciona' },
      { label: 'Casos de uso', href: '#casos-uso' },
      { label: 'Precios', href: '#precios' },
      { label: 'API', href: '#api' },
      { label: 'Actualizaciones', href: '#changelog' }
    ],
    recursos: [
      { label: 'Centro de ayuda', href: '#ayuda' },
      { label: 'Blog', href: '#blog' },
      { label: 'Guías', href: '#guias' },
      { label: 'Webinars', href: '#webinars' },
      { label: 'Comunidad', href: '#comunidad' },
      { label: 'Status', href: '#status' }
    ],
    empresa: [
      { label: 'Sobre nosotros', href: '#nosotros' },
      { label: 'Carreras', href: '#carreras' },
      { label: 'Contacto', href: '#contacto' },
      { label: 'Prensa', href: '#prensa' },
      { label: 'Socios', href: '#socios' },
      { label: 'Legal', href: '#legal' }
    ],
    industrias: [
      { label: 'Retail', href: '#retail' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Restaurantes', href: '#restaurantes' },
      { label: 'Consultoría', href: '#consultoria' },
      { label: 'E-commerce', href: '#ecommerce' },
      { label: 'Manufactura', href: '#manufactura' }
    ]
  };

  // Características de confianza
  const trustFeatures = [
    { icon: <Shield className="w-4 h-4" />, text: 'SOC2 Tipo II Certificado' },
    { icon: <Globe className="w-4 h-4" />, text: 'GDPR Compliant' },
    { icon: <Award className="w-4 h-4" />, text: '4.9/5 en Trustpilot' },
    { icon: <Users className="w-4 h-4" />, text: '2,500+ negocios' }
  ];

  // Integraciones populares
  const integrations = [
    { name: 'Stripe', color: '#635bff' },
    { name: 'Shopify', color: '#96bf48' },
    { name: 'QuickBooks', color: '#2ca01c' },
    { name: 'Google Analytics', color: '#f9ab00' },
    { name: 'Slack', color: '#4a154b' },
    { name: 'Zapier', color: '#ff4a00' }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0A1624] to-[#0B1C2D] border-t border-white/10 overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Patrón de circuitos sutiles */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M20,50 Q40,30 60,50 T100,50" stroke="#1FB6A6" strokeWidth="1" fill="none" />
                <circle cx="50" cy="50" r="3" fill="#1FB6A6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        </div>

        {/* Partículas de datos */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#1FB6A6]"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Sección superior del footer */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Columna izquierda: Brand y newsletter */}
            <div>
              {/* Logo y eslogan */}
              <div className="flex items-center gap-3 mb-6">
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
                <div>
                  <div className="text-xl font-bold text-white">Decisia</div>
                  <div className="text-sm text-gray-400">Decision Intelligence Platform</div>
                </div>
              </div>

              {/* Eslogan principal */}
              <p className="text-gray-300 text-lg mb-8 max-w-md">
                Transformamos datos en decisiones estratégicas para pequeños negocios y emprendedores.
              </p>

              {/* Newsletter */}
              <div className="mb-8">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Suscríbete a insights semanales
                </h3>
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#1FB6A6] focus:outline-none transition-colors"
                    required
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-4 py-3 rounded-lg bg-gradient-to-r from-[#1FB6A6] to-[#1FB6A6]/90 text-white font-medium hover:shadow-lg hover:shadow-[#1FB6A6]/20 transition-all flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>
                <AnimatePresence>
                  {isSubscribed && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 flex items-center gap-2 text-sm text-green-400"
                    >
                      <CheckCircle className="w-4 h-4" />
                      ¡Gracias por suscribirte! Revisa tu correo.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Trust features */}
              <div className="flex flex-wrap gap-4">
                {trustFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10"
                  >
                    <div className="text-[#1FB6A6]">
                      {feature.icon}
                    </div>
                    <span className="text-xs text-gray-300">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna derecha: Links organizados */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-white font-semibold mb-4 capitalize">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          onMouseEnter={() => setHoveredLink(link.label)}
                          onMouseLeave={() => setHoveredLink(null)}
                          className="flex items-center justify-between group"
                        >
                          <span className="text-gray-400 group-hover:text-white transition-colors text-sm">
                            {link.label}
                          </span>
                          <motion.div
                            animate={{ 
                              x: hoveredLink === link.label ? 4 : 0,
                              opacity: hoveredLink === link.label ? 1 : 0
                            }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <ChevronRight className="w-3 h-3 text-[#1FB6A6]" />
                          </motion.div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Sección de integraciones */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Integraciones populares
              </h3>
              <a href="#integraciones" className="text-sm text-[#1FB6A6] hover:text-[#2CD9C5] transition-colors flex items-center gap-1">
                Ver todas
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              {integrations.map((integration) => (
                <div
                  key={integration.name}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: integration.color }}
                    />
                    <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                      {integration.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Línea divisoria */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

          {/* Sección inferior del footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Información de contacto */}
            <div className="flex flex-wrap gap-6">
              <a
                href="mailto:hola@decisia.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                hola@decisia.com
              </a>
              <a
                href="tel:+34900123456"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +34 900 123 456
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                Madrid, España
              </div>
            </div>

            {/* Redes sociales */}
            <div className="flex items-center gap-4">
              {[
                { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', href: '#' },
                { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: '#' },
                { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: '#' },
                { icon: <Youtube className="w-5 h-5" />, label: 'YouTube', href: '#' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-white/10 bg-gradient-to-r from-[#0B1C2D] to-[#0A1624]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright y legal */}
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Decisia. Todos los derechos reservados.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-2">
                  <a href="#privacidad" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
                    Política de privacidad
                  </a>
                  <a href="#terminos" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
                    Términos de servicio
                  </a>
                  <a href="#cookies" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
                    Cookies
                  </a>
                </div>
              </div>

              {/* CTA final y badges */}
              <div className="flex items-center gap-6">
                {/* Badge de disponibilidad */}
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400">Disponible 24/7</span>
                </div>

                {/* Botón de contacto rápido */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#1FB6A6]/20 to-[#1FB6A6]/10 border border-[#1FB6A6]/30 text-[#1FB6A6] hover:text-[#2CD9C5] hover:border-[#1FB6A6]/50 transition-all flex items-center gap-2 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat en vivo</span>
                </motion.button>
              </div>
            </div>

            {/* Garantías finales */}
            <div className="flex flex-wrap justify-center gap-6 mt-6 pt-6 border-t border-white/5">
              {[
                { text: 'Garantía de 14 días', icon: <Shield className="w-3 h-3" /> },
                { text: 'Setup en 2 minutos', icon: <Zap className="w-3 h-3" /> },
                { text: 'Soporte 24/7', icon: <Clock className="w-3 h-3" /> },
                { text: 'Sin tarjeta requerida', icon: <CheckCircle className="w-3 h-3" /> }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="text-[#1FB6A6]">
                    {item.icon}
                  </div>
                  <span className="text-xs text-gray-500">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;