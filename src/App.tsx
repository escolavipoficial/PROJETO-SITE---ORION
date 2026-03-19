import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  Users,
  Briefcase,
  MapPin,
  Landmark,
  Cpu,
  FileText,
  Lock,
  Star,
  MessageCircle,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Mail,
  Phone,
  Instagram
} from 'lucide-react';

const WHATSAPP_NUMBER = "5511999589247"; // Orion WhatsApp
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Encontrei a Orion Investigação e Inteligência pelo site e gostaria de falar com um investigador para entender melhor como funciona o serviço.`;

function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number, key?: React.Key }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

function OrionLogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g transform="translate(200, 200)">
        {/* Outer diamond */}
        <rect x="-110" y="-110" width="220" height="220" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(45)" />
        {/* Inner dotted diamond */}
        <rect x="-98" y="-98" width="196" height="196" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 4" transform="rotate(45)" />
        
        {/* Text ORION */}
        <text x="0" y="24" fontFamily="Impact, system-ui, sans-serif" fontSize="96" fontWeight="900" fill="currentColor" textAnchor="middle" letterSpacing="1" stroke="#020617" strokeWidth="6" paintOrder="stroke fill">ORION</text>
        
        {/* Text Agência de Investigação e Inteligência */}
        <text x="0" y="58" fontFamily="system-ui, sans-serif" fontSize="21" fontWeight="800" fill="currentColor" textAnchor="middle" letterSpacing="0" stroke="#020617" strokeWidth="4" paintOrder="stroke fill">Agência de Investigação e Inteligência</text>
      </g>
    </svg>
  );
}

function FAQItem({ question, answer, id }: { question: string, answer: React.ReactNode, id?: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div id={id} className="border-b border-white/10 last:border-0 scroll-mt-32">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <h3 className="text-base md:text-lg font-medium text-slate-200 group-hover:text-amber-500 transition-colors pr-8">
          {question}
        </h3>
        <ChevronDown 
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-amber-500' : ''}`} 
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="pb-6 text-slate-400 leading-relaxed text-sm md:text-base">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}

const faqs = [
  {
    question: "1. A investigação é legal?",
    answer: (
      <>
        <p className="mb-2">Sim. Todos os serviços da Orion Investigação e Inteligência são conduzidos dentro dos limites da lei.</p>
        <p>Utilizamos técnicas profissionais de investigação e inteligência que respeitam a legislação vigente, garantindo que todas as informações obtidas possam ser utilizadas de forma segura e responsável.</p>
      </>
    )
  },
  {
    question: "2. Meu caso será mantido em sigilo?",
    answer: (
      <>
        <p className="mb-2">Sim, absolutamente.</p>
        <p className="mb-2">O sigilo é um dos pilares do nosso trabalho. Todas as informações, desde o primeiro contato, são tratadas com confidencialidade total.</p>
        <p>Sua identidade e os detalhes do seu caso não são divulgados em nenhuma hipótese.</p>
      </>
    )
  },
  {
    question: "3. As provas obtidas podem ser usadas em processos judiciais?",
    answer: (
      <>
        <p className="mb-2">Sim.</p>
        <p className="mb-2">Ao final da investigação, entregamos relatórios técnicos detalhados, com registros e evidências organizadas.</p>
        <p>Esses materiais podem ser utilizados como suporte em processos judiciais e estratégias jurídicas, conforme a necessidade do cliente.</p>
      </>
    )
  },
  {
    question: "4. Quanto tempo dura uma investigação?",
    answer: (
      <>
        <p className="mb-2">O tempo pode variar de acordo com o tipo e a complexidade do caso.</p>
        <p className="mb-2">Algumas investigações podem ser concluídas em poucos dias, enquanto outras exigem um acompanhamento mais detalhado.</p>
        <p>Após uma análise inicial, nossa equipe informa uma estimativa mais precisa.</p>
      </>
    )
  },
  {
    question: "5. Como funciona o atendimento inicial?",
    answer: (
      <>
        <p className="mb-2">O primeiro contato é simples, rápido e totalmente sigiloso.</p>
        <p className="mb-2">Você pode entrar em contato pelo WhatsApp e explicar brevemente sua situação. Um investigador irá analisar o caso e orientar sobre as melhores estratégias.</p>
        <p>Não há exposição e nem compromisso inicial.</p>
      </>
    )
  },
  {
    question: "6. Preciso ter provas antes de contratar?",
    answer: (
      <>
        <p className="mb-2">Não.</p>
        <p className="mb-2">Muitos clientes chegam até nós apenas com suspeitas ou dúvidas.</p>
        <p>Nossa função é justamente investigar, levantar informações e identificar evidências com base em métodos profissionais.</p>
      </>
    )
  },
  {
    question: "7. Como sei que posso confiar no trabalho de vocês?",
    answer: (
      <>
        <p className="mb-2">A Orion Investigação e Inteligência atua com metodologia própria, tecnologia avançada e condução profissional de cada caso.</p>
        <p className="mb-2">Nosso compromisso é entregar informações reais, com seriedade, discrição e responsabilidade.</p>
        <p>Cada investigação é conduzida com foco em resultados, sempre respeitando o sigilo e a confiança depositada pelo cliente.</p>
      </>
    )
  },
  {
    id: "faq-porque-contratar",
    question: "8. Por que contratar um investigador? Não posso investigar sozinho?",
    answer: (
      <>
        <p className="mb-2">Embora seja comum tentar buscar respostas por conta própria, investigações exigem técnica, estratégia e experiência.</p>
        <p className="mb-2">A tentativa de investigar sozinho pode:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-slate-400">
          <li>Comprometer a coleta de provas</li>
          <li>Alertar a pessoa investigada</li>
          <li>Gerar conclusões precipitadas</li>
          <li>Colocar você em situações delicadas ou de risco</li>
        </ul>
        <p className="mb-2">Um investigador profissional utiliza métodos adequados, tecnologia específica e uma abordagem estratégica para obter informações com discrição, segurança e precisão.</p>
        <p className="mb-2">Além disso, todo o trabalho é documentado de forma técnica, permitindo que as informações coletadas tenham validade e utilidade, inclusive em contextos jurídicos.</p>
        <p>Ao contratar um profissional, você aumenta significativamente as chances de obter respostas concretas, sem exposição e com total sigilo.</p>
      </>
    )
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-amber-500/30">
      
      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-slate-950 border-r border-white/10 z-[101] overflow-y-auto flex flex-col shadow-2xl"
            >
              <div className="p-6 flex items-center justify-between border-b border-white/10">
                <span className="text-lg font-bold text-white tracking-widest">MENU</span>
                <button onClick={() => setIsMenuOpen(false)} className="text-slate-400 hover:text-white p-2 -mr-2">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="p-4 text-base font-medium text-slate-300 hover:text-amber-500 hover:bg-white/5 rounded-xl transition-all">Quem somos</a>
                
                <div className="flex flex-col">
                  <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="p-4 text-base font-medium text-slate-300 hover:text-amber-500 hover:bg-white/5 rounded-xl transition-all flex items-center justify-between w-full text-left">
                    Serviços
                    <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180 text-amber-500' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden flex flex-col pl-8 pr-4 gap-1"
                      >
                        <a href="#servico-conjugal" onClick={() => setIsMenuOpen(false)} className="py-3 text-sm text-slate-400 hover:text-amber-500 border-l border-white/10 pl-4">Investigação Conjugal</a>
                        <a href="#servico-empresarial" onClick={() => setIsMenuOpen(false)} className="py-3 text-sm text-slate-400 hover:text-amber-500 border-l border-white/10 pl-4">Investigação Empresarial</a>
                        <a href="#servico-localizacao" onClick={() => setIsMenuOpen(false)} className="py-3 text-sm text-slate-400 hover:text-amber-500 border-l border-white/10 pl-4">Localização de Pessoas</a>
                        <a href="#servico-patrimonial" onClick={() => setIsMenuOpen(false)} className="py-3 text-sm text-slate-400 hover:text-amber-500 border-l border-white/10 pl-4">Levantamento Patrimonial</a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a href="#metodo" onClick={() => setIsMenuOpen(false)} className="p-4 text-base font-medium text-slate-300 hover:text-amber-500 hover:bg-white/5 rounded-xl transition-all">Método Orion</a>
                <a href="#depoimentos" onClick={() => setIsMenuOpen(false)} className="p-4 text-base font-medium text-slate-300 hover:text-amber-500 hover:bg-white/5 rounded-xl transition-all">Depoimentos</a>
                <a href="#faq" onClick={() => setIsMenuOpen(false)} className="p-4 text-base font-medium text-slate-300 hover:text-amber-500 hover:bg-white/5 rounded-xl transition-all">Dúvidas Frequentes</a>
                <a href="#faq-porque-contratar" onClick={() => setIsMenuOpen(false)} className="p-4 text-base font-medium text-slate-300 hover:text-amber-500 hover:bg-white/5 rounded-xl transition-all">Porque contratar um investigador?</a>
                <a href="#contato" onClick={() => setIsMenuOpen(false)} className="p-4 text-base font-medium text-slate-300 hover:text-amber-500 hover:bg-white/5 rounded-xl transition-all">Contato</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Header / Nav */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-auto flex items-start justify-between">
            <div className="flex flex-col items-start">
              <button 
                onClick={() => setIsMenuOpen(true)} 
                className="flex flex-col items-center justify-center text-white/70 hover:text-white transition-colors pt-2 pl-3 lg:pl-1"
              >
                <span className="text-[9px] font-medium uppercase tracking-widest leading-none mb-0.5">Menu</span>
                <Menu className="w-6 h-6" />
              </button>
              <OrionLogo className="w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72 text-white drop-shadow-xl -ml-2 sm:-ml-4 shrink-0 -mt-5 sm:-mt-8 md:-mt-12" />
            </div>
            
            {/* Container Direito Mobile */}
            <div className="flex flex-col items-end gap-2 lg:hidden pt-2">
              {/* Botão Mobile */}
              <div className="relative">
                <span className="absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-40 animate-ping" style={{ animationDuration: '2s' }}></span>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-full font-medium transition-colors text-[11px] sm:text-xs shadow-[0_0_15px_rgba(217,119,6,0.5)]"
                >
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Falar com Investigador
                </a>
              </div>
              
              {/* Tópicos Mobile */}
              <div className="flex flex-col items-start gap-0.5 text-xs sm:text-sm text-slate-300 font-medium leading-tight w-full pl-2 mt-1">
                <a href="#servico-conjugal" className="flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                  <span className="group-hover:text-white transition-colors whitespace-nowrap">Investigação Conjugal</span>
                </a>
                <a href="#servico-empresarial" className="flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                  <span className="group-hover:text-white transition-colors whitespace-nowrap">Investigação Empresarial</span>
                </a>
                <a href="#servico-localizacao" className="flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                  <span className="group-hover:text-white transition-colors whitespace-nowrap">Localização de Pessoas</span>
                </a>
                <a href="#servico-patrimonial" className="flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                  <span className="group-hover:text-white transition-colors whitespace-nowrap">Levantamento Patrimonial</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Tópicos de Atuação Desktop */}
          <div className="hidden lg:flex flex-nowrap justify-center items-center gap-2 xl:gap-5 text-sm font-medium text-slate-400 w-full">
            <a href="#servico-conjugal" className="hover:text-slate-200 transition-colors whitespace-nowrap">Investigação Conjugal</a>
            <span className="w-1 h-1 rounded-full bg-slate-700 shrink-0"></span>
            <a href="#servico-empresarial" className="hover:text-slate-200 transition-colors whitespace-nowrap">Investigação Empresarial</a>
            <span className="w-1 h-1 rounded-full bg-slate-700 shrink-0"></span>
            <a href="#servico-localizacao" className="hover:text-slate-200 transition-colors whitespace-nowrap">Localização de Pessoas</a>
            <span className="w-1 h-1 rounded-full bg-slate-700 shrink-0"></span>
            <a href="#servico-patrimonial" className="hover:text-slate-200 transition-colors whitespace-nowrap">Levantamento Patrimonial</a>
            <span className="w-1 h-1 rounded-full bg-slate-700 shrink-0"></span>
            <a href="#contato" className="hover:text-slate-200 transition-colors whitespace-nowrap">Contato</a>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <div className="relative">
              <span className="absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-40 animate-ping" style={{ animationDuration: '2s' }}></span>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-full font-medium transition-colors text-sm shadow-[0_0_20px_rgba(217,119,6,0.5)]"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com Investigador
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-[260px] md:pt-[320px] pb-20 md:pb-32 px-6 overflow-hidden min-h-screen flex flex-col items-center justify-center">
          {/* Imagem */}
          <div 
            className="w-full max-w-5xl mx-auto h-[45vh] md:h-[55vh] relative z-0 shrink-0 bg-[position:center_bottom] md:bg-[position:calc(50%-8vw)_bottom]"
            style={{
              backgroundImage: `url('/foto-fundo.jpeg')`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Gradiente para suavizar a borda inferior da foto com o fundo da página */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
          </div>
          
          {/* Informações do Fundador */}
          <div className="w-full max-w-5xl mx-auto flex justify-center md:justify-end px-6 md:px-12 mt-4 md:-mt-32 mb-12 md:mb-16 relative z-10">
            <FadeIn delay={0.6}>
              <div className="max-w-[280px] md:max-w-[320px]">
                <div className="bg-slate-950/60 backdrop-blur-md p-4 md:p-5 rounded-2xl border border-white/10 shadow-2xl">
                  <p className="font-bold text-slate-200 text-sm mb-0.5">Marcel Antonio</p>
                  <p className="text-amber-500/90 text-[11px] md:text-xs mb-3 md:mb-4 font-medium leading-relaxed">Investigador e fundador da Orion Investigação e Inteligência</p>
                  <ul className="text-slate-400/90 text-[10px] md:text-xs space-y-1.5 md:space-y-2 text-left">
                    <li className="flex items-start gap-1.5 md:gap-2"><span className="text-amber-500/50 mt-0.5">•</span> Especialista em investigação privada</li>
                    <li className="flex items-start gap-1.5 md:gap-2"><span className="text-amber-500/50 mt-0.5">•</span> Formação em técnicas de investigação e inteligência</li>
                    <li className="flex items-start gap-1.5 md:gap-2"><span className="text-amber-500/50 mt-0.5">•</span> Capacitação em análise investigativa e OSINT</li>
                    <li className="flex items-start gap-1.5 md:gap-2"><span className="text-amber-500/50 mt-0.5">•</span> Experiência em investigações conjugais e empresariais</li>
                    <li className="flex items-start gap-1.5 md:gap-2"><span className="text-amber-500/50 mt-0.5">•</span> Atuação com metodologia própria – Método Orion</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-8">
                <Lock className="w-4 h-4" />
                Sigilo Absoluto Garantido
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
                Investigação Profissional com <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Sigilo Absoluto</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                Quando a verdade é importante, você precisa de profissionais preparados para descobrir os fatos com estratégia, tecnologia e total discrição.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-12">
                {[
                  "Atendimento totalmente confidencial",
                  "Investigadores experientes",
                  "Tecnologia investigativa de última geração",
                  "Relatórios técnicos para processos judiciais"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col items-center gap-6">
                <div className="relative bg-slate-800/80 border border-slate-700/50 backdrop-blur-sm px-6 py-4 rounded-2xl max-w-md text-center shadow-lg">
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-800 border-b border-r border-slate-700/50 rotate-45"></div>
                  <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed italic">
                    "Você não precisa continuar na dúvida. Existe uma forma profissional e sigilosa de descobrir a verdade."
                  </p>
                </div>
                
                <motion.a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)]"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <MessageCircle className="w-6 h-6" />
                  FALAR COM UM INVESTIGADOR NO WHATSAPP
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <p className="text-sm text-slate-500 mt-2">
                  “Quando você precisa de provas reais, cada detalhe importa.”
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-24 bg-slate-900/50 px-6 border-y border-white/5 scroll-mt-32">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Sobre a Orion Investigação e Inteligência</h2>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  A Orion Investigação e Inteligência é uma agência especializada em investigações estratégicas e produção de inteligência investigativa.
                </p>
                <p>
                  Nossa atuação combina experiência profissional, tecnologia e metodologia investigativa, permitindo conduzir investigações complexas com eficiência e discrição absoluta.
                </p>
                <p>
                  Cada caso é tratado de forma única, utilizando técnicas específicas para identificar informações, levantar evidências e entregar resultados confiáveis.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-slate-950 p-8 rounded-3xl border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-xl font-semibold text-white mb-6">Nosso compromisso é atuar sempre com:</h3>
                <ul className="space-y-4">
                  {[
                    "Sigilo absoluto",
                    "Profissionalismo",
                    "Ética investigativa",
                    "Estratégia e inteligência"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-amber-500" />
                      </div>
                      <span className="text-slate-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-start gap-3">
                  <Lock className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                  <p className="text-sm text-slate-400">Desde o primeiro contato, seu caso é tratado com total confidencialidade e máxima discrição.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Method Section */}
        <section id="metodo" className="py-24 px-6 scroll-mt-32">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Método Orion</h2>
              <p className="text-lg text-slate-400 mb-12">
                Para garantir investigações mais precisas e eficientes, a empresa desenvolveu o Método Orion. Um método próprio que combina técnicas modernas de investigação com análise estratégica de informações.
              </p>
            </FadeIn>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {[
                "Técnicas Avançadas de Investigação Privada",
                "Inteligência Estratégica Aplicada",
                "Monitoramento Investigativo",
                "Análise de Dados e Informações",
                "Tecnologia Investigativa"
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl h-full flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-amber-500 mb-4" />
                    <span className="text-slate-300 font-medium">{item}</span>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.5}>
              <p className="text-slate-400 bg-slate-900/50 p-6 rounded-2xl border border-white/5">
                O objetivo é conduzir investigações com planejamento, estratégia e precisão, aumentando significativamente as chances de identificar provas e informações relevantes.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-slate-900/50 px-6 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Nossos Serviços</h2>
                <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <div id="servico-conjugal" className="bg-slate-950 p-8 rounded-3xl border border-white/10 hover:border-amber-500/30 transition-colors group scroll-mt-32">
                  <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                    <Users className="w-7 h-7 text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Investigação Conjugal</h3>
                  <p className="text-slate-400 mb-6">
                    A investigação conjugal é indicada quando existem dúvidas sobre fidelidade dentro de um relacionamento. Nossa equipe realiza investigações discretas para identificar comportamentos suspeitos e reunir provas de forma estratégica.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {["Monitoramento investigativo", "Registro de evidências", "Documentação detalhada"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-amber-500" /> {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-medium text-amber-400 flex items-center gap-2">
                    <Lock className="w-4 h-4" /> Tudo realizado com total sigilo.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div id="servico-empresarial" className="bg-slate-950 p-8 rounded-3xl border border-white/10 hover:border-amber-500/30 transition-colors group scroll-mt-32">
                  <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                    <Briefcase className="w-7 h-7 text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Investigação Empresarial</h3>
                  <p className="text-slate-400 mb-6">
                    Empresas podem sofrer prejuízos causados por fraudes internas, desvios de mercadorias ou comportamentos irregulares. A investigação empresarial permite identificar irregularidades e reunir informações estratégicas.
                  </p>
                  <p className="text-sm text-slate-500 mb-3 uppercase tracking-wider font-semibold">Investigações comuns incluem:</p>
                  <ul className="space-y-2">
                    {["Fraudes internas", "Desvio de mercadorias", "Conduta suspeita de colaboradores", "Investigação de sócios"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div id="servico-localizacao" className="bg-slate-950 p-8 rounded-3xl border border-white/10 hover:border-amber-500/30 transition-colors group scroll-mt-32">
                  <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                    <MapPin className="w-7 h-7 text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Localização de Pessoas</h3>
                  <p className="text-slate-400 mb-6">
                    A localização de pessoas pode ser necessária em diversas situações. Nossa equipe utiliza técnicas investigativas e análise de informações para localizar indivíduos difíceis de encontrar.
                  </p>
                  <p className="text-sm text-slate-500 mb-3 uppercase tracking-wider font-semibold">Casos comuns incluem:</p>
                  <ul className="space-y-2">
                    {["Pessoas desaparecidas", "Devedores", "Antigos conhecidos", "Pessoas que precisam ser localizadas para processos judiciais"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div id="servico-patrimonial" className="bg-slate-950 p-8 rounded-3xl border border-white/10 hover:border-amber-500/30 transition-colors group scroll-mt-32">
                  <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                    <Landmark className="w-7 h-7 text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Levantamento Patrimonial</h3>
                  <p className="text-slate-400 mb-6">
                    O levantamento patrimonial tem como objetivo identificar bens e patrimônio de pessoas físicas ou jurídicas. Nossa equipe realiza análise estratégica de informações para identificar ativos e patrimônio oculto.
                  </p>
                  <p className="text-sm text-slate-500 mb-3 uppercase tracking-wider font-semibold">Muito utilizado em:</p>
                  <ul className="space-y-2">
                    {["Processos judiciais", "Partilha de bens", "Investigação patrimonial"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Technology & Reports & Confidentiality */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-3xl border border-white/10 h-full">
                <Cpu className="w-10 h-10 text-amber-500 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Tecnologia Investigativa</h3>
                <p className="text-slate-400 mb-6">
                  A Orion Investigação e Inteligência utiliza recursos tecnológicos avançados para aumentar a eficiência das investigações. A combinação entre tecnologia e inteligência investigativa permite conduzir investigações com maior precisão e segurança.
                </p>
                <ul className="space-y-3">
                  {[
                    "GPS investigativo de última geração",
                    "Gravadores profissionais de alta precisão",
                    "Sistemas de inteligência OSINT",
                    "Ferramentas modernas de análise"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-3xl border border-white/10 h-full">
                <FileText className="w-10 h-10 text-amber-500 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Relatórios Técnicos</h3>
                <p className="text-slate-400 mb-6">
                  Todas as investigações conduzidas pela Orion resultam em relatórios técnicos completos. Os relatórios são estruturados para que possam auxiliar em estratégias jurídicas e processos judiciais, quando necessário.
                </p>
                <ul className="space-y-3">
                  {[
                    "Descrição detalhada das atividades",
                    "Registro de evidências",
                    "Documentação fotográfica ou informacional",
                    "Organização técnica das informações"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-gradient-to-b from-amber-950/40 to-slate-950 p-8 rounded-3xl border border-amber-500/20 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Lock className="w-48 h-48 text-amber-500" />
                </div>
                <Lock className="w-10 h-10 text-amber-500 mb-6 relative z-10" />
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Sigilo Absoluto</h3>
                <p className="text-slate-400 mb-6 relative z-10">
                  Sabemos que investigações envolvem situações delicadas. Por isso, um dos princípios fundamentais da Orion Investigação e Inteligência é o sigilo absoluto. Desde o primeiro contato, seu caso é tratado com total confidencialidade.
                </p>
                <ul className="space-y-3 relative z-10">
                  {[
                    "Identidade do cliente protegida",
                    "Informações tratadas com confidencialidade",
                    "Investigação conduzida com discrição"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="depoimentos" className="py-24 bg-slate-900/50 px-6 border-y border-white/5 scroll-mt-32">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Depoimentos</h2>
                <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full" />
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  text: "Precisei de uma investigação delicada e fui atendido com muito profissionalismo. O trabalho foi conduzido com discrição e recebi todas as informações que precisava.",
                  author: "Henrique P."
                },
                {
                  text: "A equipe demonstrou muita experiência e seriedade. O relatório entregue foi extremamente detalhado e me ajudou no processo jurídico.",
                  author: "Lilian F. S."
                },
                {
                  text: "Excelente atendimento. Desde o primeiro contato percebi o nível de profissionalismo da equipe.",
                  author: "Cláudio J. F."
                },
                {
                  text: "O trabalho foi conduzido com total sigilo e eficiência. Recomendo para quem precisa de um serviço investigativo sério.",
                  author: "Rubens S."
                },
                {
                  text: "Precisei contratar uma investigação em um momento muito delicado da minha vida e fui atendida com muito respeito e profissionalismo. Desde o primeiro contato senti segurança e discrição. O trabalho foi conduzido com total sigilo e o relatório entregue foi muito claro e detalhado. Recomendo pela seriedade e comprometimento.",
                  author: "Franciele R. P."
                },
                {
                  text: "Contratei o serviço para uma investigação empresarial e fiquei impressionado com o nível de organização e profissionalismo. A equipe foi extremamente discreta e conseguiu reunir informações importantes para a tomada de decisões na empresa. Atendimento rápido, objetivo e muito confiável.",
                  author: "Augusto J."
                }
              ].map((testimonial, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-slate-950 p-6 rounded-2xl border border-white/5 h-full flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <p className="text-slate-400 text-sm italic mb-6 flex-grow">"{testimonial.text}"</p>
                    <p className="text-slate-300 font-medium text-sm">— {testimonial.author}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-slate-950 to-slate-950 -z-10" />
          
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Converse Agora com um Investigador</h2>
              <p className="text-xl text-slate-400 mb-8">
                Se você precisa descobrir a verdade ou obter informações importantes, nossa equipe está preparada para ajudar. Cada caso é analisado com estratégia, tecnologia e absoluto sigilo.
              </p>
              
              <div className="flex flex-col items-center gap-6 mt-8">
                <div className="relative bg-slate-800/80 border border-slate-700/50 backdrop-blur-sm px-6 py-4 rounded-2xl max-w-lg mx-auto text-center shadow-lg">
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-800 border-b border-r border-slate-700/50 rotate-45"></div>
                  <p className="text-slate-300 text-base md:text-lg font-medium leading-relaxed italic">
                    "Desconfiança constante desgasta qualquer relacionamento."
                  </p>
                </div>

                <motion.a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)] w-full sm:w-auto"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <MessageCircle className="w-6 h-6" />
                  FALAR COM UM INVESTIGADOR NO WHATSAPP
                </motion.a>
                
                <p className="text-sm text-slate-500 mt-2">
                  “A dúvida pode ser mais dolorosa que a verdade.”
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
        {/* FAQ Section */}
        <section id="faq" className="py-24 px-6 bg-slate-900 border-t border-white/5 relative overflow-hidden scroll-mt-32">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
          <div className="max-w-3xl mx-auto relative z-10">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                  Dúvidas Frequentes
                </h2>
                <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
                <p className="text-slate-400 text-lg">
                  Respostas para as perguntas mais comuns sobre nossos serviços de investigação.
                </p>
              </div>
            </FadeIn>

            <div className="bg-slate-950/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
              {faqs.map((faq, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <FAQItem id={faq.id} question={faq.question} answer={faq.answer} />
                </FadeIn>
              ))}
            </div>
            
            <FadeIn delay={0.8}>
              <div className="mt-12 text-center">
                <p className="text-slate-400 mb-6">Ainda tem alguma dúvida?</p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Fale com um investigador agora
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contato" className="bg-slate-950 border-t border-white/5 py-12 px-6 scroll-mt-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-center md:text-left mb-12">
          <div className="flex-1">
            <div className="flex items-center justify-center md:justify-start mb-6">
              <OrionLogo className="w-20 h-20 text-white opacity-90" />
            </div>
            <p className="text-slate-500 text-sm max-w-md mx-auto md:mx-0">
              Investigação profissional conduzida com sigilo, estratégia e tecnologia. Todos os atendimentos são realizados com confidencialidade absoluta.
            </p>
          </div>
          
          <div className="flex-1 flex flex-col items-center md:items-start gap-4">
            <h4 className="text-slate-200 font-semibold text-lg mb-2">Contato</h4>
            <a href="mailto:orionsp.inteligencia@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-amber-500 transition-colors text-sm">
              <Mail className="w-4 h-4 text-amber-500 shrink-0" />
              orionsp.inteligencia@gmail.com
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-amber-500 transition-colors text-sm">
              <Phone className="w-4 h-4 text-amber-500 shrink-0" />
              5511 99958-9247
            </a>
            <a href="https://instagram.com/orion_inteligencia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-amber-500 transition-colors text-sm">
              <Instagram className="w-4 h-4 text-amber-500 shrink-0" />
              @orion_inteligencia
            </a>
          </div>

          <div className="flex-1 flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-2 text-slate-200 font-bold text-lg bg-slate-900/80 px-5 py-2.5 rounded-full border border-white/10 shadow-lg">
              <Lock className="w-5 h-5 text-amber-500" />
              <span>Site Seguro</span>
            </div>
            <div className="text-slate-600 text-sm text-center md:text-right">
              &copy; 2023 Orion Investigação e Inteligência.<br className="hidden md:block" /> Todos os direitos reservados.
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 text-center">
          <p className="text-[10px] text-slate-700 max-w-5xl mx-auto uppercase leading-relaxed">
            AVISO LEGAL: “NENHUMA INFORMAÇÃO CONTIDA NESTE SITE DEVE SER INTERPRETADA COMO UMA AFIRMAÇÃO DA OBTENÇÃO DE RESULTADOS. QUALQUER REFERÊNCIA AO DESEMPENHO PASSADO OU POTENCIAL DE UMA ESTRATÉGIA ABORDADA NO CONTEÚDO NÃO É, E NÃO DEVE SER INTERPRETADA COMO UMA RECOMENDAÇÃO OU COMO GARANTIA DE QUALQUER RESULTADO ESPECÍFICO.”
          </p>
        </div>
      </footer>
      </div>

      {/* Floating WhatsApp Button - Simplified for maximum mobile compatibility */}
      <div className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-[999999] transform-gpu">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center group"
          aria-label="Falar no WhatsApp"
        >
          {/* Efeito de pulso (anéis) - CSS puro */}
          <span className="absolute inline-flex h-[120%] w-[120%] rounded-full bg-[#25D366] opacity-40 animate-ping" style={{ animationDuration: '2s' }}></span>
          <span className="absolute inline-flex h-[150%] w-[150%] rounded-full bg-[#25D366] opacity-20 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></span>
          
          {/* Botão principal */}
          <div className="relative bg-[#25D366] hover:bg-[#20bd5a] text-white w-14 h-14 sm:w-auto sm:h-auto sm:px-6 sm:py-3.5 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 font-semibold">
            <MessageCircle className="w-7 h-7 sm:w-6 sm:h-6" />
            <span className="hidden sm:inline">WhatsApp</span>
          </div>
        </a>
      </div>
    </>
  );
}
