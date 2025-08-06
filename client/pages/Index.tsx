import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Stepper } from "@/components/ui/stepper";
import { EnhancedStepper } from "@/components/ui/enhanced-stepper";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import VideoCarousel from "@/components/ui/video-carousel";
import TestimonialsCarousel from "@/components/ui/testimonials-carousel";
import FlipCard from "@/components/ui/flip-card";
import FAQAccordion from "@/components/ui/faq-accordion";
import Footer from "@/components/ui/footer";
import { EnhancedCTA, CompactCTA } from "@/components/ui/enhanced-cta";
import { Phone, Mail, Fish, Waves, Droplets, Leaf, MapPin, Clock, Award, Menu, X, Target, Lightbulb, Hammer, Sparkles, HeartHandshake, Shield, Users, Beaker, Crown, Heart, TreePine, Home, Zap, DollarSign, Smile } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from "@/hooks/use-scroll-animation";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappNumber = "5511999999999"; // Replace with actual WhatsApp number
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os lagos ornamentais da Folks Ecossistema.";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setMobileMenuOpen(false);
  };

  // Handle scroll to change header background
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8; // 80% of viewport height
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Início', href: '#inicio' },
    { name: 'Como trabalhamos', href: '#como-trabalhamos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Perguntas Frequentes', href: '#faq' },
  ];

  const serviceSteps = [
    {
      title: "Imersão no Projeto",
      subtitle: "Cada lago começa com uma visão.",
      description: "Entendemos os desejos do cliente, analisamos o espaço disponível e oferecemos uma consultoria personalizada. Tudo começa com uma visita técnica ou reunião online para captar a essência do projeto dos seus sonhos.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Concepção Personalizada",
      subtitle: "Natureza e técnica desenhadas sob medida.",
      description: "Criamos o projeto exclusivo, incluindo plantas, volumetria, escolha de materiais naturais e definição das tecnologias ecológicas (biofiltro, oxigenação, areia natural, etc.). O cliente aprova cada detalhe.",
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      title: "Execução com Excelência",
      subtitle: "Do papel para a natureza.",
      description: "Nossa equipe especializada entra em campo com cronograma bem definido. Toda a execução segue padrões de qualidade e segurança, com cuidado estético e respeito ao meio ambiente.",
      icon: <Hammer className="h-6 w-6" />
    },
    {
      title: "Finalização & Encantamento",
      subtitle: "A primeira contemplação do seu novo lar natural.",
      description: "Entregamos o lago ou biopiscina com testes completos, instruções de uso, e aquele momento inesquecível do primeiro contato com o novo espaço.",
      icon: <Sparkles className="h-6 w-6" />
    },
    {
      title: "Suporte & Pós-Obra Premium",
      subtitle: "Sua tranquilidade é parte do projeto.",
      description: "Oferecemos acompanhamento técnico, suporte e orientações contínuas. Também disponibilizamos planos de manutenção e consultoria futura para expansão ou melhorias.",
      icon: <HeartHandshake className="h-6 w-6" />
    }
  ];

  const lakeTypes = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Lagos Ornamentais",
      description: "Paisagismo aquático com plantas aquáticas e pedras naturais para criar um ambiente zen e relaxante."
    },
    {
      icon: <Fish className="h-8 w-8" />,
      title: "Lagos com Peixes",
      description: "Ecossistemas completos com carpas, kinguios e outras espécies, criando vida e movimento ao seu espaço."
    },
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Piscinas Naturais",
      description: "Áreas de banho integradas à natureza, com filtração biológica e design que imita ambientes naturais."
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Biopiscinas",
      description: "Sistemas de tratamento natural da água, sem uso de químicos, criando um ambiente saudável e sustentável."
    }
  ];

  const differentiators = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Experiência Comprovada",
      subtitle: "+70 projetos entregues em 5 estados",
      description: "Mais de 70 projetos entregues em 5 estados, adaptando cada obra ao bioma local e aos desejos do cliente. Atuamos com precisão técnica e sensibilidade estética, transformando sonhos em realidade aquática."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Garantia e Suporte Premium",
      subtitle: "Tranquilidade que vai além da entrega",
      description: "Garantia real da obra + plano de acompanhamento pós-entrega. Você não fica sozinho após a finalização — oferecemos consultoria contínua e serviços de manutenção especializados."
    },
    {
      icon: <Beaker className="h-8 w-8" />,
      title: "Tecnologia Ecológica Natural",
      subtitle: "Inovação sustentável para água cristalina",
      description: "Utilizamos biofiltros, oxigenadores, pedras naturais e areia de rio para criar lagos cristalinos, sustentáveis e livres de pernilongos. Tecnologia que respeita e potencializa a natureza."
    },
    {
      icon: <Crown className="h-8 w-8" />,
      title: "Materiais Exclusivos Premium",
      subtitle: "Qualidade em cada detalhe",
      description: "Trabalhamos com fornecedores selecionados e uma equipe apaixonada por detalhes. Cada pedra e planta é posicionada com propósito e precisão, garantindo resultados excepcionais."
    }
  ];

  // Sample video data - replace with actual video URLs
  const galleryVideos = [
    {
      id: "project1",
      src: "/videos/video1.mp4",
      poster: "/thumbs/thumb1.png",
    },
    {
      id: "project2",
      src: "/videos/video2.mp4",
      poster: "/thumbs/thumb2.png",
    },
    {
      id: "project3",
      src: "/videos/video3.mp4",
      poster: "/thumbs/thumb3.png",
    },
    {
      id: "project4",
      src: "/videos/video4.mp4",
      poster: "/thumbs/thumb4.png",
    },
    {
      id: "project5",
      src: "/videos/video5.mp4",
      poster: "/thumbs/thumb5.png",
    },
    {
      id: "project6",
      src: "/videos/video6.mp4",
      poster: "/thumbs/thumb6.png",
    },
    {
      id: "project7",
      src: "/videos/video7.mp4",
      poster: "/thumbs/thumb7.png",
    },
    {
      id: "project8",
      src: "/videos/video8.mp4",
      poster: "/thumbs/thumb8.png",
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: "testimonial1",
      initials: "AC",
      name: "Ana C.",
      location: "Bragança Paulista/SP",
      text: "Transformaram nosso quintal em um verdadeiro paraíso. A sensação de paz ao ouvir a água correndo é indescritível.",
      rating: 5
    },
    {
      id: "testimonial2",
      initials: "RM",
      name: "Roberto M.",
      location: "Alphaville/SP",
      text: "O lago trouxe uma energia única para nossa casa. Recebemos visitas que ficam encantadas com a beleza natural.",
      rating: 5
    },
    {
      id: "testimonial3",
      initials: "MF",
      name: "Marcia F.",
      location: "Campos do Jordão/SP",
      text: "Profissionalismo excepcional. Entregaram exatamente o que sonhamos, com qualidade e cuidado em cada detalhe.",
      rating: 5
    },
    {
      id: "testimonial4",
      initials: "JS",
      name: "João S.",
      location: "Brasília/DF",
      text: "Nossa biopiscina é o lugar favorito da família. As crianças adoram nadar em água cristalina e natural.",
      rating: 5
    },
    {
      id: "testimonial5",
      initials: "LP",
      name: "Luciana P.",
      location: "Uberlândia/MG",
      text: "O investimento valeu cada centavo. Temos um refúgio natural em casa que aumentou muito o valor da propriedade.",
      rating: 5
    },
    {
      id: "testimonial6",
      initials: "CF",
      name: "Carlos F.",
      location: "Goiânia/GO",
      text: "Superaram nossas expectativas. O lago ornamental é uma obra de arte que traz tranquilidade para nosso lar.",
      rating: 5
    }
  ];

  // Benefits data
  const benefits = [
    {
      id: "wellbeing",
      icon: <Heart className="h-12 w-12" />,
      title: "Bem-estar e Tranquilidade",
      description: "O som suave da água corrente e a vista natural do lago criam um ambiente de paz e relaxamento, reduzindo o estresse e promovendo sensação de bem-estar em sua própria casa."
    },
    {
      id: "environment",
      icon: <TreePine className="h-12 w-12" />,
      title: "Conexão com a Natureza",
      description: "Desperte para o canto dos pássaros, observe a vida aquática se desenvolver e sinta a energia renovadora que apenas um ecossistema natural pode proporcionar no seu dia a dia."
    },
    {
      id: "property",
      icon: <Home className="h-12 w-12" />,
      title: "Valorização do Imóvel",
      description: "Lagos ornamentais são um diferencial premium que pode aumentar significativamente o valor da sua propriedade, além de torná-la única e memorável para visitantes."
    },
    {
      id: "energy",
      icon: <Zap className="h-12 w-12" />,
      title: "Eficiência Energética",
      description: "Nossos sistemas de filtração e oxigenação são projetados para serem altamente eficientes, utilizando tecnologia moderna que minimiza o consumo de energia elétrica."
    },
    {
      id: "investment",
      icon: <DollarSign className="h-12 w-12" />,
      title: "Investimento Duradouro",
      description: "Com materiais de qualidade premium e técnicas especializadas, seu lago será um investimento que durará décadas, proporcionando retorno emocional e financeiro a longo prazo."
    },
    {
      id: "family",
      icon: <Smile className="h-12 w-12" />,
      title: "Momentos em Família",
      description: "Crie memórias inesquecíveis em um espaço único onde sua família poderá se reunir, relaxar e desfrutar de momentos especiais em harmonia com a natureza."
    }
  ];

  // FAQ data
  const faqItems = [
    {
      id: "cost",
      question: "Custo médio?",
      answer: "O custo varia conforme o tamanho e complexidade do projeto. Entre em contato para orçamento personalizado."
    },
    {
      id: "maintenance",
      question: "Como é feita a manutenção?",
      answer: "A manutenção é simples e natural, com acompanhamento técnico especializado para garantir o equilíbrio do ecossistema."
    },
    {
      id: "licensing",
      question: "Precisa de licenciamento?",
      answer: "Sim, cuidamos de todo o processo de licenciamento ambiental para você."
    },
    {
      id: "fish",
      question: "E se eu quiser incluir peixes?",
      answer: "Trabalhamos com espécies que mantêm o equilíbrio natural do lago, garantindo saúde ao ecossistema."
    },
    {
      id: "timeline",
      question: "Quanto tempo leva a obra?",
      answer: "7 dias após a chegada do material"
    }
  ];

  return (
    <div className="min-h-screen bg-off-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-moss/20 shadow-lg'
          : 'bg-transparent'
      }`}>
        <div className="w-full max-w-[1500px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
             <img src="/favicon.ico" alt="" style={{ width: '48px' }} />
              <h1 className={`font-playfair text-2xl font-bold transition-colors duration-300 drop-shadow-lg ${
                isScrolled ? 'text-moss' : 'text-white'
              }`}>
                Folks Ecossistema
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`transition-colors duration-300 font-medium hover:scale-105 transform ${
                    isScrolled
                      ? 'text-charcoal hover:text-moss'
                      : 'text-white/90 hover:text-gold drop-shadow-sm'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Contact Info - Improved Design */}
            <div className="hidden xl:flex items-center space-x-6">
              <div className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'bg-moss/10 text-moss'
                  : 'bg-white/20 text-white backdrop-blur-sm'
              }`}>
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm font-medium">Todo o Brasil</span>
              </div>
              <div className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'bg-gold/10 text-gold'
                  : 'bg-white/20 text-white backdrop-blur-sm'
              }`}>
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm font-medium">7 dias</span>
              </div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-3 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'text-charcoal hover:text-moss bg-sand/20 hover:bg-moss/10'
                  : 'text-white hover:text-gold bg-black/20 hover:bg-gold/10 backdrop-blur-sm border border-white/20'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className={`lg:hidden absolute top-full left-0 right-0 mx-4 mt-2 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
                  isScrolled
                    ? 'bg-white/95 backdrop-blur-md border border-moss/20'
                    : 'bg-black/90 backdrop-blur-md border border-white/20'
                }`}
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <nav className="flex flex-col px-6 py-6">
                  <div className="space-y-1">
                    {navigation.map((item, index) => (
                      <motion.button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        className={`w-full text-left font-medium py-3 px-4 rounded-xl transition-all duration-200 ${
                          isScrolled
                            ? 'text-charcoal hover:text-moss hover:bg-moss/5'
                            : 'text-white hover:text-gold hover:bg-white/10'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        whileHover={{ x: 4 }}
                      >
                        {item.name}
                      </motion.button>
                    ))}
                  </div>

                  <motion.div
                    className={`mt-6 pt-6 border-t space-y-3 text-sm ${
                      isScrolled
                        ? 'border-moss/20 text-charcoal/70'
                        : 'border-white/20 text-white/70'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    <div className="flex items-center space-x-3 py-2">
                      <div className={`p-1 rounded-lg ${isScrolled ? 'bg-moss/10' : 'bg-white/10'}`}>
                        <MapPin className="h-4 w-4" />
                      </div>
                      <span className="font-medium">Atende todo o Brasil</span>
                    </div>
                    <div className="flex items-center space-x-3 py-2">
                      <div className={`p-1 rounded-lg ${isScrolled ? 'bg-moss/10' : 'bg-white/10'}`}>
                        <Clock className="h-4 w-4" />
                      </div>
                      <span className="font-medium">Prazo: 7 dias após chegada do material</span>
                    </div>
                    <div className="flex items-center space-x-3 py-2">
                      <div className={`p-1 rounded-lg ${isScrolled ? 'bg-moss/10' : 'bg-white/10'}`}>
                        <Award className="h-4 w-4" />
                      </div>
                      <span className="font-medium">A areia mais limpa do Brasil</span>
                    </div>
                  </motion.div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video Background for Desktop */}
        <div className="absolute inset-0 hidden lg:block">
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=dbp865mgp&public_id=hero-background-desktop_juzhnw&profile=cld-default&fluid=true&controls=false&autoplay=true&loop=true&muted=true"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '177.78vh', // 16:9 aspect ratio scaled to viewport height
              height: '56.25vw', // 16:9 aspect ratio scaled to viewport width
              minWidth: '100vw',
              minHeight: '100vh',
              transform: 'translate(-50%, -50%)'
            }}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Video Background for Mobile */}
        <div className="absolute inset-0 lg:hidden overflow-hidden bg-transparent">
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=dbp865mgp&public_id=hero-background-mobile_kljqaa&profile=cld-default&fluid=true&controls=false&autoplay=true&loop=true&muted=true"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '56.25vh',
              height: '177.78vw',
              minWidth: '100vw',
              minHeight: '100vh',
              transform: 'translate(-50%, -50%)',
              border: 'none',
              outline: 'none'
            }}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen">
            {/* Left column - Content */}
            <motion.div
              className="max-w-2xl text-center lg:text-left pt-24 pb-8 lg:pt-0 lg:pb-0 mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1
                className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 lg:mb-8 leading-tight drop-shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              >
                Transformamos seu espaço em um{" "}
                <motion.span
                  className="text-gold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  refúgio natural
                </motion.span> com lagos exclusivos e duradouros
              </motion.h1>

              <motion.div
                className="mb-8 lg:mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <p className="font-work text-base sm:text-lg md:text-xl text-white/95 mb-4 lg:mb-6 drop-shadow-lg">
                  Lagos ornamentais e Piscinas Naturais com peixes • A areia mais limpa do Brasil
                </p>
                <p className="font-work text-sm sm:text-base text-white/85 mb-6 lg:mb-8 drop-shadow-md leading-relaxed">
                  Especialistas em lagos ornamentais, piscinas naturais e biopiscinas que conectam você à natureza em sua própria casa.
                </p>

                {/* Business Highlights - Mobile Stack */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 text-xs sm:text-sm text-white/95"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                  <motion.div
                    className="flex items-center justify-center lg:justify-start space-x-2 bg-black/20 rounded-lg px-3 py-2 backdrop-blur-sm"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <MapPin className="h-4 w-4 text-gold flex-shrink-0" />
                    <span>Atende todo o Brasil</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center justify-center lg:justify-start space-x-2 bg-black/20 rounded-lg px-3 py-2 backdrop-blur-sm"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Clock className="h-4 w-4 text-gold flex-shrink-0" />
                    <span className="text-center lg:text-left">Prazo: 7 dias após chegada do material</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center justify-center lg:justify-start space-x-2 bg-black/20 rounded-lg px-3 py-2 backdrop-blur-sm sm:col-span-2 lg:col-span-1"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Award className="h-4 w-4 text-gold flex-shrink-0" />
                    <span>A areia mais limpa do Brasil</span>
                  </motion.div>
                </motion.div>
              </motion.div>

            </motion.div>

            {/* Right column - Empty for video background visibility */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <motion.section
        id="como-trabalhamos"
        className="py-20 lg:py-32 bg-gradient-to-b from-off-white via-sand/20 to-off-white relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >

      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/backgrounds/water2.jpg" 
          alt="" 
          className="w-full h-full object-cover"
        />
        {/* Overlay para melhorar legibilidade do texto */}
        <div className="absolute inset-0" style={{ backgroundColor: 'hsla(46, 20%, 96%, 0.8)' }}></div>
      </div>

        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-moss rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            className="text-center mb-20"
            variants={fadeInUp}
          >
            <motion.h2
              className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6"
              variants={fadeInUp}
            >
              Como trabalhamos
            </motion.h2>
            <motion.p
              className="font-work text-lg md:text-xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Criamos ecossistemas aquáticos únicos que transformam qualquer espaço em um santuário natural,
              combinando beleza, funcionalidade e sustentabilidade através de um processo meticuloso e personalizado.
            </motion.p>
          </motion.div>

          {/* Lake Types Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32"
            variants={staggerContainer}
          >
            {lakeTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border-moss/20 hover:border-moss/40 bg-white/90 backdrop-blur-sm h-full">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-moss/10 text-moss mb-6 group-hover:bg-moss group-hover:text-white transition-all duration-300"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      {type.icon}
                    </motion.div>
                    <h3 className="font-playfair text-xl font-semibold text-charcoal mb-4 group-hover:text-moss transition-colors">
                      {type.title}
                    </h3>
                    <p className="font-work text-charcoal/70 leading-relaxed flex-grow">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Service Process Title */}
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h3 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-6">
              Etapas do Serviço
            </h3>
            <p className="font-work text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
              Como transformamos o seu espaço em um refúgio natural através de um processo estruturado e cuidadoso
            </p>
          </motion.div>

          {/* Enhanced Service Process */}
          <motion.div
            className="max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            <EnhancedStepper
              steps={serviceSteps}
              currentStep={4}
            />
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-16 px-4 sm:px-0"
            variants={fadeInUp}
          >
            <EnhancedCTA
              variant="primary"
              size="lg"
              title="Descubra qual tipo de lago combina com meu espaço"
              subtitle="Receba uma consultoria personalizada e gratuita para criar seu refúgio natural"
              buttonText="Quero Minha Consultoria Gratuita"
              highlights={[
                "Consultoria gratuita",
                "Projeto personalizado",
                "Resposta em 24h"
              ]}
              trustSignal="Mais de 70 projetos entregues com garantia"
              onClick={handleWhatsAppClick}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* O que só a Folks entrega Section */}
      <motion.section
        id="diferenciais"
        className="py-20 lg:py-32 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        {/* Background Image */}
        {/* <div className="absolute inset-0">
          <img 
            src="/backgrounds/water4.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'hsla(46, 20%, 96%, 0.8)' }}></div>
        </div> */}

        {/* Background decoration (opcional - pode remover se não quiser) */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-aqua rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            className="text-center mb-20"
            variants={fadeInUp}
          >
            <motion.h2
              className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight"
              variants={fadeInUp}
            >
              O que só a Folks entrega
            </motion.h2>
            <motion.p
              className="font-work text-lg md:text-xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Mais de 70 projetos entregues com garantia e suporte pós-obra, utilizando técnicas ecológicas e materiais exclusivos.
              Nossa expertise transforma espaços em refúgios naturais únicos.
            </motion.p>
          </motion.div>

          {/* Differentiators Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16"
            variants={staggerContainer}
          >
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-moss/10 hover:border-moss/30 h-full">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-moss/10 to-teal/10 text-moss mb-6 group-hover:from-moss group-hover:to-teal group-hover:text-white transition-all duration-300"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    {item.icon}
                  </motion.div>

                  <h3 className="font-playfair text-2xl font-bold text-charcoal mb-3 group-hover:text-moss transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-work text-gold font-semibold mb-4 text-sm tracking-wide">
                    {item.subtitle}
                  </p>

                  <p className="font-work text-charcoal/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={fadeInUp}
          >
            <EnhancedCTA
              variant="urgent"
              size="lg"
              title="Quero ser o próximo cliente satisfeito"
              subtitle="Junte-se às famílias que já vivem em um refúgio natural exclusivo"
              buttonText="Começar Meu Projeto Agora"
              urgencyText="🔥 Últimas vagas para 2024"
              highlights={[
                "Garantia premium",
                "70+ projetos entregues",
                "Suporte pós-obra"
              ]}
              trustSignal="Garantia real da obra + acompanhamento pós-entrega"
              onClick={handleWhatsAppClick}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Galeria de Projetos */}
      <motion.section
        id="galeria"
        className="py-20 lg:py-32 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
                        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/backgrounds/water1.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
          {/* Overlay para melhorar legibilidade do texto */}
          <div className="absolute inset-0" style={{ backgroundColor: 'hsla(46, 20%, 96%, 0.8)' }}></div>
        </div>

        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-32 left-32 w-96 h-96 bg-teal rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-32 w-80 h-80 bg-moss rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <motion.h2
              className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 leading-tight"
              variants={fadeInUp}
            >
              Veja com seus próprios olhos o que a Folks entrega
            </motion.h2>
            <motion.p
              className="font-work text-lg md:text-xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Cada projeto é único, mas todos têm algo em comum: a sensação de viver em um refúgio natural.
            </motion.p>
          </motion.div>

          {/* Video Carousel */}
          <motion.div
            variants={fadeInUp}
            className="mb-16"
          >
            <VideoCarousel videos={galleryVideos} />
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="px-4 sm:px-0"
            variants={fadeInUp}
          >
            <EnhancedCTA
              variant="secondary"
              size="lg"
              title="Quero um lago assim no meu terreno"
              subtitle="Transforme seu espaço em um refúgio natural único e valorize seu imóvel"
              buttonText="Ver Meu Projeto Personalizado"
              highlights={[
                "Projeto 3D gratuito",
                "Valoriza o imóvel",
                "Instalação em 7 dias"
              ]}
              trustSignal="Cada projeto é único, mas todos têm algo em comum: a satisfação total"
              onClick={handleWhatsAppClick}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        id="beneficios"
        className="py-20 lg:py-32 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        {/* Background Image */}
        {/* <div className="absolute inset-0">
          <img 
            src="/backgrounds/water4.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'hsla(46, 20%, 96%, 0.8)' }}></div>
        </div> */}

        {/* Background decoration (opcional - pode remover se não quiser) */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 left-16 w-80 h-80 bg-moss rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 right-16 w-64 h-64 bg-aqua rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <motion.h2
              className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 leading-tight"
              variants={fadeInUp}
            >
              Benefícios de ter um lago ornamental
            </motion.h2>
            <motion.p
              className="font-work text-lg md:text-xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Descubra como um lago ornamental pode transformar não apenas seu espaço,
              mas toda sua experiência de viver em harmonia com a natureza.
            </motion.p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-20"
            variants={staggerContainer}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                variants={scaleIn}
                transition={{ delay: index * 0.1 }}
              >
                <FlipCard
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="px-4 sm:px-0"
            variants={fadeInUp}
          >
            <CompactCTA
              buttonText="Quero falar com um especialista"
              subtitle="Descubra como posso criar o lago dos meus sonhos"
              onClick={handleWhatsAppClick}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="depoimentos"
        className="py-20 lg:py-32 bg-gradient-to-b from-sand/20 via-off-white to-sand/10 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >

        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/backgrounds/water4.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
          {/* Overlay para melhorar legibilidade do texto */}
          <div className="absolute inset-0" style={{ backgroundColor: 'hsla(46, 20%, 96%, 0.8)' }}></div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-aqua rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-56 h-56 bg-gold rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <motion.h2
              className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 leading-tight"
              variants={fadeInUp}
            >
              Quem vive esse refúgio, recomenda
            </motion.h2>
            <motion.p
              className="font-work text-lg md:text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Mais de 70 famílias já transformaram seus espaços em refúgios naturais únicos.
              Veja o que nossos clientes têm a dizer sobre essa experiência.
            </motion.p>
          </motion.div>

          {/* Testimonials Carousel */}
          <motion.div
            variants={fadeInUp}
            className="mb-16"
          >
            <TestimonialsCarousel testimonials={testimonials} />
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="px-4 sm:px-0"
            variants={fadeInUp}
          >
            <EnhancedCTA
              variant="primary"
              size="md"
              title="Quero viver isso também"
              subtitle="Junte-se às famílias que já vivem em harmonia com a natureza"
              buttonText="Criar Meu Refúgio Natural"
              highlights={[
                "Depoimentos reais",
                "Satisfação garantida",
                "Suporte premium"
              ]}
              trustSignal="Mais de 70 famílias já transformaram seus lares"
              onClick={handleWhatsAppClick}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        id="faq"
        className="py-20 lg:py-32 bg-gradient-to-b from-sand/20 via-off-white to-sand/10 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >

        {/* Background Image */}
        {/* <div className="absolute inset-0">
          <img 
            src="/backgrounds/water1.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'hsla(46, 20%, 96%, 0.8)' }}></div>
        </div> */}

        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-teal rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gold rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <motion.h2
              className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 leading-tight"
              variants={fadeInUp}
            >
              Perguntas Frequentes
            </motion.h2>
            <motion.p
              className="font-work text-lg md:text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Esclarecemos as principais dúvidas sobre nossos projetos de lagos ornamentais
              para que você tome a melhor decisão para seu espaço.
            </motion.p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            variants={fadeInUp}
            className="mb-16"
          >
            <FAQAccordion items={faqItems} />
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="px-4 sm:px-0"
            variants={fadeInUp}
          >
            <EnhancedCTA
              variant="outline"
              size="md"
              title="Tire minhas dúvidas direto com um especialista"
              subtitle="Resposta rápida e personalizada para meu projeto"
              buttonText="Esclarecer Minhas Dúvidas Agora"
              highlights={[
                "Resposta em 24h",
                "Especialista dedicado",
                "Sem compromisso"
              ]}
              trustSignal="Consultoria gratuita e sem compromisso"
              onClick={handleWhatsAppClick}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        className="py-20 lg:py-32 bg-gradient-to-br from-moss/10 via-off-white to-teal/10 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-moss rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <motion.div variants={fadeInUp}>
            {/* Main headline */}
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
              Pronto para transformar
              <span className="text-transparent bg-gradient-to-r from-moss to-teal bg-clip-text"> seu espaço</span>?
            </h2>

            {/* Subheading */}
            <p className="font-work text-lg md:text-xl text-charcoal/80 max-w-3xl mx-auto mb-8 leading-relaxed">
              Mais de 70 famílias já vivem o sonho de ter um refúgio natural em casa.
              Chegou a sua vez de criar momentos inesquecíveis em harmonia com a natureza.
            </p>

            {/* Stats or highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <motion.div
                className="text-center"
                variants={scaleIn}
                transition={{ delay: 0.1 }}
              >
                <div className="text-3xl font-bold text-moss font-playfair mb-2">+70</div>
                <div className="text-sm font-work text-charcoal/70">Projetos Entregues</div>
              </motion.div>
              <motion.div
                className="text-center"
                variants={scaleIn}
                transition={{ delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-teal font-playfair mb-2">5</div>
                <div className="text-sm font-work text-charcoal/70">Estados Atendidos</div>
              </motion.div>
              <motion.div
                className="text-center"
                variants={scaleIn}
                transition={{ delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-gold font-playfair mb-2">7</div>
                <div className="text-sm font-work text-charcoal/70">Dias Para Começar</div>
              </motion.div>
            </div>

            {/* CTA Final */}
            <div className="px-4 sm:px-0 max-w-2xl mx-auto">
              <EnhancedCTA
                variant="urgent"
                size="lg"
                title="Transformar Meu Espaço Agora"
                subtitle="Mais de 70 famílias já vivem o sonho. Chegou a minha vez!"
                buttonText="Começar Minha Transformação Hoje"
                urgencyText="🚀 Últimas vagas para começar em 2024"
                highlights={[
                  "Orçamento gratuito",
                  "Garantia inclusa",
                  "Começamos em 7 dias"
                ]}
                trustSignal="💚 Orçamento gratuito • ⭐ Garantia inclusa • 🚀 Começamos em 7 dias"
                onClick={handleWhatsAppClick}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Falar no WhatsApp"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 2
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)"
        }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <WhatsAppIcon size={24} />
        </motion.div>
      </motion.button>
    </div>
  );
}
