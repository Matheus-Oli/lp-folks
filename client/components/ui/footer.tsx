import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Youtube, Leaf } from 'lucide-react';
import { WhatsAppIcon } from './whatsapp-icon';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Sobre', href: '#inicio' },
    { name: 'Projetos', href: '#galeria' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/folks.ecossistema/',
      icon: <Instagram className="h-5 w-5" />
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/5511999999999',
      icon: <WhatsAppIcon size={20} />
    }
  ];

  return (
    <footer className="bg-charcoal border-t border-charcoal/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-moss rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-teal rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-3">
                  <img src="/favicon.ico" alt="" style={{ width: '48px' }} />
                  <h3 className="font-playfair text-3xl font-bold text-gold">
                    Folks Ecossistema
                  </h3>
                </div>
                <p className="font-work text-off-white/90 text-lg italic leading-relaxed">
                  "Conectando você à natureza com sofisticação."
                </p>
              </div>

              <p className="font-work text-off-white/80 leading-relaxed mb-6 max-w-md">
                Especializados em lagos ornamentais, piscinas naturais e biopiscinas que transformam
                qualquer espaço em um refúgio natural único e sustentável.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <motion.a
                  href="https://wa.me/5511999999999"
                  className="flex items-center space-x-3 text-off-white/80 hover:text-gold transition-colors group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-moss/20 group-hover:bg-gold rounded-lg p-2 transition-colors group-hover:scale-110">
                    <WhatsAppIcon size={16} className="text-moss group-hover:text-charcoal" />
                  </div>
                  <span className="font-work font-medium">(11) 99999-9999</span>
                </motion.a>

                <motion.a
                  href="mailto:contato@folks.eco.br"
                  className="flex items-center space-x-3 text-off-white/80 hover:text-gold transition-colors group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-moss/20 group-hover:bg-gold rounded-lg p-2 transition-colors group-hover:scale-110">
                    <Mail className="h-4 w-4 text-moss group-hover:text-charcoal" />
                  </div>
                  <span className="font-work font-medium">contato@folks.eco.br</span>
                </motion.a>

                <div className="flex items-center space-x-3 text-off-white/80">
                  <div className="bg-moss/20 rounded-lg p-2">
                    <MapPin className="h-4 w-4 text-moss" />
                  </div>
                  <div>
                    <span className="font-work font-medium">Atendemos: </span>
                    <span className="bg-gold/20 text-gold text-sm px-3 py-1 rounded-full font-work font-semibold">
                      Todo o Brasil
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-playfair text-xl font-semibold text-off-white mb-6">
                Links Rápidos
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="font-work text-off-white/70 hover:text-gold transition-colors block py-1"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-playfair text-xl font-semibold text-off-white mb-6">
                Redes Sociais
              </h4>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-off-white/70 hover:text-gold transition-colors group"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-moss/20 group-hover:bg-gold rounded-lg p-2 transition-colors group-hover:scale-110">
                      <div className="text-moss group-hover:text-charcoal">
                        {social.icon}
                      </div>
                    </div>
                    <span className="font-work font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-off-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              className="font-work text-off-white/60 text-sm text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              © {currentYear} Folks Ecossistema. Todos os direitos reservados.
            </motion.p>

            <motion.p
              className="font-work text-off-white/60 text-sm text-center md:text-right"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Desenvolvido por{' '}
              <motion.a
                href="https://vilainfo.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-off-white transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Vila Info
              </motion.a>
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
