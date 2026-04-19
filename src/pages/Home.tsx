import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Cloud, 
  Activity, 
  Users, 
  Wrench, 
  CheckCircle, 
  ChevronLeft,
  ChevronRight,
  Zap,
  Cpu,
  Database,
  LineChart,
  Network,
  ShieldCheck,
  BrainCircuit,
  FileCode2,
  Settings2,
  RefreshCcw,
  Building2,
  HeartPulse,
  Leaf,
  PlayCircle,
  Globe
} from 'lucide-react';

function Hero() {
  return (
    <section className="relative py-20 px-6 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#00F0FF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute -left-20 -top-20 w-80 h-80 bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Platform v2.4 Live</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tighter text-slate-900 dark:text-slate-100">
            The Core of Our <span className="gold-gradient-text">Ecosystem.</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            Empowering enterprises with sovereign cloud, economic intelligence, and specialized AI agents. A unified stack for the next generation of digital sovereignty.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="text-background-dark px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform gold-metallic-bg shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_15px_rgba(0,0,0,0.3)] border border-white/20">
              Explore Stack <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-primary/30 text-slate-700 dark:text-slate-300 hover:bg-primary/5 px-8 py-4 rounded-xl font-bold transition-colors">
              Technical Docs
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-neon-cyan/20 to-primary/10 border border-primary/20 overflow-hidden flex items-center justify-center p-8 shadow-[0_0_50px_rgba(0,240,255,0.2)] transition-shadow">
            <div className="w-full h-full rounded-2xl bg-background-light dark:bg-background-dark shadow-2xl border border-primary/10 flex items-center justify-center relative overflow-hidden shadow-[inset_0_0_40px_rgba(0,240,255,0.1)]">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(0, 240, 255, 0.4) 0%, transparent 70%)' }}></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 z-10">
                <div className="grid grid-cols-2 gap-4 w-full h-full">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 backdrop-blur-sm flex flex-col items-center justify-center gap-3 hover:bg-primary/10 transition-colors cursor-pointer">
                    <Cloud className="w-8 h-8 text-primary" />
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Sahara Cloud</p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 backdrop-blur-sm flex flex-col items-center justify-center gap-3 hover:bg-primary/10 transition-colors cursor-pointer">
                    <Activity className="w-8 h-8 text-primary" />
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Mirsaad Data</p>
                  </div>
                  <Link to="/cognisys-ba" className="p-4 rounded-lg bg-primary/5 border border-primary/20 backdrop-blur-sm flex flex-col items-center justify-center gap-3 hover:bg-primary/10 transition-colors cursor-pointer">
                    <Users className="w-8 h-8 text-primary" />
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">CogniSys BA</p>
                  </Link>
                  <Link to="/incubator" className="p-4 rounded-lg bg-[#3E92CC]/10 border border-[#3E92CC]/30 backdrop-blur-sm flex flex-col items-center justify-center gap-3 hover:bg-[#00D4AA]/20 transition-all cursor-pointer group hover:border-[#00D4AA] shadow-[inset_0_0_15px_rgba(0,0,0,0)] hover:shadow-[inset_0_0_15px_rgba(0,212,170,0.15)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#0A2463]/5 group-hover:bg-transparent transition-colors"></div>
                    <Network className="w-8 h-8 text-[#00D4AA] group-hover:scale-110 transition-transform relative z-10 drop-shadow-[0_0_8px_rgba(0,212,170,0.5)]" />
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-[#00D4AA] dark:text-[#C5D5E0] transition-colors relative z-10 text-center">AI Incubator</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CorePlatforms() {
  const platforms = [
    {
      title: "ATLAS Sahara Cloud",
      tag: "SOVEREIGNTY",
      icon: <Cloud className="w-16 h-16 text-primary opacity-40 group-hover:scale-110 transition-transform" />,
      desc: "Next-generation sovereign infrastructure designed for national data residency and hyper-secure enterprise operations. Fully compliant, air-gapped options available.",
      features: ["Geo-fenced Data Residency", "Hardware-level Security", "Zero-Trust Architecture"],
      action: "Explore Sahara"
    },
    {
      title: "Mirsaad Data Platform",
      tag: "INTELLIGENCE",
      icon: <Activity className="w-16 h-16 text-primary opacity-40 group-hover:scale-110 transition-transform" />,
      desc: "The premier economic intelligence engine. Transform disparate raw data into unified, actionable insights with advanced visualization and predictive modeling.",
      features: ["Real-time Economic Indicators", "Predictive Trend Analysis", "Multi-source Data Ingestion"],
      action: "Access Dashboard"
    },
    {
      title: "CogniSys BA",
      tag: "FLAGSHIP",
      icon: <Users className="w-16 h-16 text-primary opacity-40 group-hover:scale-110 transition-transform" />,
      desc: "Your autonomous AI Co-pilot for Enterprise Architecture and Business Analysis. Automate the complex, predict the risks, and ensure global compliance at the speed of thought.",
      tags: ["Finance", "Biotech", "SaaS", "Energy"],
      action: "Explore CogniSys",
      link: "/cognisys-ba"
    },
    {
      title: "ATLAS AI Incubator: From Idea to Validated Strategy",
      tag: "INCUBATOR",
      icon: (
        <div className="relative w-20 h-20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
          <Globe className="absolute inset-0 w-full h-full opacity-20 animate-[spin_60s_linear_infinite]" />
          <Network className="w-10 h-10 drop-shadow-[0_0_15px_rgba(191,162,105,0.5)]" />
        </div>
      ),
      desc: "Your Virtual Mentor and AI-Driven Business Analyst. Instead of hiring an expensive team of consultants, the ATLAS AI Incubator uses advanced AI models to instantly generate market research, financial forecasts, and strategic planning. Just input your business idea to get professional-grade, modular analysis including SWOT, PESTEL, operational budgets, and investor pitch decks in under 30 seconds.",
      action: "Start Your Free Idea Analysis",
      link: "/incubator"
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-20 bg-black/5 dark:bg-black/20 border-y border-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4 pb-2 border-b border-neon-cyan/10 w-fit gold-gradient-text">Core Platforms</h2>
            <p className="text-slate-600 dark:text-slate-400">Our modular architecture allows you to deploy sovereign infrastructure and layer intelligence precisely where it's needed.</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-full border border-primary/20 text-primary hover:bg-primary/10 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full border border-primary/20 text-primary hover:bg-primary/10 transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {platforms.map((platform, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col bg-background-light dark:bg-background-dark rounded-2xl overflow-hidden border border-primary/20 shadow-xl hover:border-gold-light/40 transition-all hover:shadow-[0_0_25px_rgba(191,162,105,0.2)]"
            >
              <div className="h-64 bg-slate-100 dark:bg-slate-900/50 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent opacity-80 z-10"></div>
                <div className="relative z-0">
                  {platform.icon}
                </div>
                <div className="absolute bottom-4 left-6 z-20">
                  <span className="px-3 py-1 rounded-full text-background-dark text-xs font-bold gold-metallic-bg border border-white/10">
                    {platform.tag}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col gap-4 flex-1 relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {platform.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {platform.desc}
                </p>
                
                {platform.features && (
                  <ul className="space-y-2 mb-4 mt-2">
                    {platform.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-4 h-4 text-primary" /> {feat}
                      </li>
                    ))}
                  </ul>
                )}

                {platform.tags && (
                  <div className="flex flex-wrap gap-2 mb-4 mt-2">
                    {platform.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 border text-[10px] font-bold uppercase rounded bg-primary/10 border-primary/20 text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-auto pt-4">
                  {platform.link ? (
                    <Link to={platform.link} className="w-full py-3 rounded-lg border font-bold transition-all flex items-center justify-center gap-2 border-primary/20 hover:bg-primary hover:text-background-dark text-primary hover:bg-primary/10 group-hover:bg-primary/10">
                      {platform.action} <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <button className="w-full py-3 rounded-lg border font-bold transition-all flex items-center justify-center gap-2 border-primary/20 hover:bg-primary hover:text-background-dark text-primary hover:bg-primary/10 group-hover:bg-primary/10">
                      {platform.action} <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CogniSysShowcase() {
  const [activeSector, setActiveSector] = useState(0);

  const sectors = [
    {
      title: "Fintech",
      icon: <Building2 className="w-5 h-5" />,
      desc: "Enforcing PCI-DSS and KYC compliance for secure, scalable financial ecosystems.",
      image: "bg-gradient-to-br from-[#0A2463] to-[#3E92CC]"
    },
    {
      title: "Healthcare & Biotech",
      icon: <HeartPulse className="w-5 h-5" />,
      desc: "Ensuring strict adherence to HIPAA and FDA standards for patient data and clinical vaults.",
      image: "bg-gradient-to-br from-[#3E92CC] to-[#0A2463]"
    },
    {
      title: "SaaS & Green Energy",
      icon: <Leaf className="w-5 h-5" />,
      desc: "Managing carbon footprints and enforcing global GDPR privacy frameworks.",
      image: "bg-gradient-to-br from-[#00D4AA]/20 to-[#0A2463]"
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-20 bg-[#0A2463] text-[#C5D5E0] relative overflow-hidden border-y border-[#3E92CC]/30 shadow-[0_0_50px_rgba(10,36,99,0.8)]">
      {/* Visual Motif: Core Background Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <pattern id="honeycomb" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
          <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100" fill="none" stroke="#00D4AA" strokeWidth="1"/>
          <path d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34" fill="none" stroke="#00D4AA" strokeWidth="1"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#honeycomb)"/>
      </svg>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00D4AA]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-32">
        
        {/* SECTION A: The Flagship Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <span className="text-sm font-bold text-[#C5D5E0] uppercase tracking-[0.2em]">ATLAS AI SOLUTIONS PRESENTS</span>
            <h2 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-[0_0_15px_rgba(0,212,170,0.3)]">
              CogniSys BA:<br/>
              <span className="text-[#00D4AA]">The Catalyst Hub.</span>
            </h2>
            <p className="text-lg text-[#C5D5E0]/90 leading-relaxed max-w-xl">
              Your autonomous AI Co-pilot for Enterprise Architecture and Business Analysis. Automate the complex, predict the risks, and ensure global compliance at the speed of thought.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="bg-[#00D4AA] text-[#0A2463] px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-[#7FDBDA] hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,212,170,0.4)]">
                Request Beta Access <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-[#3E92CC]/20 border border-[#3E92CC] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-[#3E92CC]/40 transition-all">
                <PlayCircle className="w-5 h-5 text-[#00D4AA]" /> Watch Platform Demo
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#3E92CC]/30 to-[#0A2463] border border-[#00D4AA]/30 shadow-[0_0_50px_rgba(0,212,170,0.15)] flex flex-col overflow-hidden backdrop-blur-md">
              {/* Mockup Header */}
              <div className="h-10 bg-[#0A2463]/80 border-b border-[#3E92CC]/50 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="ml-4 text-xs font-mono text-[#C5D5E0]/50 tracking-wider">cognisys-ba/war-room</span>
              </div>
              {/* Mockup Body */}
              <div className="flex-1 p-6 flex flex-col gap-4 relative overflow-hidden">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    <BrainCircuit className="w-6 h-6 text-[#00D4AA]" />
                    <h3 className="text-white font-bold text-lg">Agent Hive Consensus</h3>
                  </div>
                  <span className="text-xs bg-[#00D4AA]/20 text-[#00D4AA] px-2 py-1 rounded font-bold uppercase tracking-wider">System Optimal</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 flex-1">
                  <div className="bg-[#3E92CC]/10 border border-[#3E92CC]/30 rounded-lg p-4 flex flex-col gap-2 relative">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#00D4AA]/10 blur-xl"></div>
                    <span className="text-xs text-[#7FDBDA] font-mono">Orchestrator Agent</span>
                    <div className="w-full h-2 bg-[#3E92CC]/30 rounded overflow-hidden mt-1"><div className="w-[85%] h-full bg-[#00D4AA]"></div></div>
                    <div className="w-full h-12 rounded border border-[#3E92CC]/30 mt-2 flex items-center justify-center text-[10px] text-[#C5D5E0]/70 font-mono bg-[#0A2463]/50">Evaluating PCI-DSS...</div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex-1 bg-[#3E92CC]/10 border border-[#3E92CC]/30 rounded-lg p-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-[#0A2463] flex items-center justify-center border border-[#00D4AA]/40"><Activity className="w-4 h-4 text-[#00D4AA]" /></div>
                      <div><div className="text-xs text-white">Monte Carlo</div><div className="text-[10px] text-[#00D4AA]">99.4% Success Rate</div></div>
                    </div>
                    <div className="flex-1 bg-[#3E92CC]/10 border border-[#3E92CC]/30 rounded-lg p-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-[#0A2463] flex items-center justify-center border border-[#00D4AA]/40"><ShieldCheck className="w-4 h-4 text-[#00D4AA]" /></div>
                      <div><div className="text-xs text-white">Compliance</div><div className="text-[10px] text-[#00D4AA]">Rules Enforced</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SECTION B: The 5 Pillars (Feature Grid) */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Architectural Core</h2>
            <p className="text-[#C5D5E0] max-w-2xl mx-auto">Five resilient pillars engineered to automate, predict, and protect your enterprise ecosystem at an unparalleled scale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Main Feature - Hive */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="md:col-span-4 bg-[#3E92CC]/10 backdrop-blur-md border border-[#3E92CC]/30 rounded-2xl p-8 hover:border-[#00D4AA]/60 hover:shadow-[0_0_30px_rgba(0,212,170,0.15)] transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#00D4AA]/10 flex items-center justify-center mb-6 border border-[#00D4AA]/20 group-hover:scale-110 transition-transform">
                <BrainCircuit className="w-7 h-7 text-[#00D4AA]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">1. The Hive <span className="text-[#00D4AA] text-sm md:text-xl font-medium">(Multi-Agent System)</span></h3>
              <p className="text-[#C5D5E0] leading-relaxed">
                A neural network of specialized AI agents—Orchestrator, Scout, and Guardian. Features a unique <span className="text-[#7FDBDA] font-semibold">'War Room'</span> where agents debate architectural decisions, simulate constraints, and reach an intelligent consensus before deployment.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="md:col-span-2 bg-[#3E92CC]/10 backdrop-blur-md border border-[#3E92CC]/30 rounded-2xl p-8 hover:border-[#00D4AA]/60 hover:shadow-[0_0_30px_rgba(0,212,170,0.15)] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#3E92CC]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <LineChart className="w-6 h-6 text-[#7FDBDA]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">2. Predictive Core</h3>
              <p className="text-[#C5D5E0] text-sm leading-relaxed">
                Integrates AI with Monte Carlo Simulations and Tornado Diagrams to forecast project success, budget overruns, and timelines with mathematical precision.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="md:col-span-2 bg-[#3E92CC]/10 backdrop-blur-md border border-[#3E92CC]/30 rounded-2xl p-8 hover:border-[#00D4AA]/60 hover:shadow-[0_0_30px_rgba(0,212,170,0.15)] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#3E92CC]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileCode2 className="w-6 h-6 text-[#7FDBDA]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">3. Automated Artifact Gen</h3>
              <p className="text-[#C5D5E0] text-sm leading-relaxed">
                Instantly transform requirements or whiteboard sketches into professional SWOTs, Business Model Canvases, User Story Maps, and complex C4/BPMN diagrams.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="md:col-span-2 bg-[#3E92CC]/10 backdrop-blur-md border border-[#3E92CC]/30 rounded-2xl p-8 hover:border-[#00D4AA]/60 hover:shadow-[0_0_30px_rgba(0,212,170,0.15)] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#3E92CC]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Settings2 className="w-6 h-6 text-[#7FDBDA]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">4. Context Compliance</h3>
              <p className="text-[#C5D5E0] text-sm leading-relaxed">
                Automatically enforces strict, sector-specific regulations including HIPAA/FDA for Biotech, PCI-DSS for Fintech, and GDPR for distributed SaaS ecosystems.
              </p>
            </motion.div>

            {/* Feature 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="md:col-span-2 bg-[#3E92CC]/10 backdrop-blur-md border border-[#3E92CC]/30 rounded-2xl p-8 hover:border-[#00D4AA]/60 hover:shadow-[0_0_30px_rgba(0,212,170,0.15)] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#3E92CC]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <RefreshCcw className="w-6 h-6 text-[#7FDBDA]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">5. Self-Healing Chain</h3>
              <p className="text-[#C5D5E0] text-sm leading-relaxed">
                Guarantees 99.9% uptime. If a primary model fails, the system safely falls back to local models, while our Repair Agent automatically restructures malformed JSON data.
              </p>
            </motion.div>
          </div>
        </div>

        {/* SECTION C: Target Sectors (Interactive Tabs) */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Architected for Highly Regulated Sectors</h2>
          
          <div className="grid md:grid-cols-12 gap-8 md:gap-16 max-w-5xl mx-auto">
            {/* Tabs Sidebar */}
            <div className="md:col-span-4 flex flex-col gap-3">
              {sectors.map((sector, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSector(idx)}
                  className={`flex items-center gap-4 text-left px-6 py-5 rounded-xl transition-all duration-300 font-bold border ${
                    activeSector === idx 
                      ? 'bg-[#3E92CC]/20 border-[#00D4AA] text-[#00D4AA] shadow-[inset_4px_0_0_0_#00D4AA]' 
                      : 'bg-transparent border-transparent text-[#C5D5E0] hover:bg-[#3E92CC]/10 hover:text-white'
                  }`}
                >
                  <div className={`${activeSector === idx ? 'text-[#00D4AA]' : 'text-[#C5D5E0]/60'}`}>
                    {sector.icon}
                  </div>
                  {sector.title}
                </button>
              ))}
            </div>

            {/* Tab Content Display */}
            <div className="md:col-span-8 flex flex-col justify-center">
              <motion.div
                key={activeSector}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-[#3E92CC]/10 border border-[#3E92CC]/30 rounded-2xl overflow-hidden shadow-2xl relative"
              >
                <div className={`h-48 w-full ${sectors[activeSector].image} relative overflow-hidden flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  {/* Decorative big icon in bg */}
                  <div className="relative z-10 scale-[3] opacity-20 drop-shadow-[0_0_15px_#00D4AA]">
                    {sectors[activeSector].icon}
                  </div>
                </div>
                <div className="p-10 bg-[#0A2463]/80 backdrop-blur-sm relative z-20 -mt-8 rounded-t-3xl border-t border-[#3E92CC]/40 shadow-[0_-15px_30px_rgba(0,0,0,0.3)]">
                  <div className="text-xl font-bold text-[#00D4AA] mb-4 flex items-center gap-3">
                     {sectors[activeSector].icon} Sector Alignment Validated
                  </div>
                  <p className="text-white text-lg leading-relaxed">
                    {sectors[activeSector].desc}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function StrategicEcosystem() {
  return (
    <section className="py-24 px-6 lg:px-20 bg-background-light dark:bg-background-dark relative overflow-hidden">
      {/* Background Motif */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(circle at center, #00F0FF 2px, transparent 2px)', backgroundSize: '60px 60px' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Banner / Logos */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gold-gradient-text tracking-tight">Empowered by Global Leaders & Strategic Programs</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Atlas AI is proud to be selected for the AI Hub for Sustainable Development and the Compute Accelerator Programme, building sovereign AI infrastructure for Algeria and beyond.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Logo Placeholders - represented cleanly with text/icons for the demo */}
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <div className="h-12 w-full flex items-center justify-center font-bold text-xl tracking-wider text-slate-800 dark:text-slate-200 group-hover:text-neon-cyan transition-colors">AI HUB</div>
              <span className="text-[10px] uppercase font-bold text-primary">Sustainable Development</span>
            </div>
            
            <div className="h-12 flex items-center justify-center font-bold text-2xl tracking-widest text-slate-800 dark:text-slate-200 hover:text-[#0055B8] transition-colors cursor-default">UNDP</div>
            
            <div className="flex flex-col items-center gap-1 group cursor-default">
              <div className="h-10 flex items-center justify-center font-bold text-lg text-slate-800 dark:text-slate-200 group-hover:text-[#0033A0] transition-colors">ITALIAN G7</div>
              <span className="text-[10px] uppercase font-bold text-primary">Mattei Plan</span>
            </div>

            <div className="flex flex-col items-center gap-1 group cursor-default">
               <div className="h-10 flex items-center justify-center font-bold text-2xl text-slate-800 dark:text-slate-200 group-hover:text-[#FF9900] transition-colors">aws</div>
               <span className="text-[10px] uppercase font-bold text-primary">Social Impact + Cloud</span>
            </div>
            
            <div className="h-12 flex items-center justify-center font-bold text-xl text-slate-800 dark:text-slate-200 hover:text-neon-cyan transition-colors cursor-default">UNESCAP</div>
            <div className="h-12 flex items-center justify-center font-bold text-xl tracking-widest text-slate-800 dark:text-slate-200 hover:text-neon-cyan transition-colors cursor-default">WTO</div>
          </div>
        </div>

        {/* Alignment Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/5 dark:bg-background-dark border border-slate-200 dark:border-primary/20 rounded-2xl p-8 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:border-neon-cyan/50 transition-all duration-500 group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 overflow-hidden relative">
               <div className="absolute inset-0 bg-neon-cyan/20 blur-md group-hover:bg-neon-cyan/40 transition-colors"></div>
               <Cpu className="w-6 h-6 text-primary group-hover:text-neon-cyan relative z-10 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">AWS Compute & Cloud Alliance</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Backed by AWS Social Impact credits and elite cloud compute infrastructure to power our Predictive Core and multi-agent AI, ensuring 99.9% uptime for critical nationwide deployments.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-black/5 dark:bg-background-dark border border-slate-200 dark:border-primary/20 rounded-2xl p-8 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:border-neon-cyan/50 transition-all duration-500 group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 overflow-hidden relative">
               <div className="absolute inset-0 bg-neon-cyan/20 blur-md group-hover:bg-neon-cyan/40 transition-colors"></div>
               <Network className="w-6 h-6 text-primary group-hover:text-neon-cyan relative z-10 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">AI Hub & Mattei Plan</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Aligned with the UNDP and the Italian G7 Mattei Plan to transition the region from technology consumers to deep-tech innovators through localized, context-aware AI.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-black/5 dark:bg-background-dark border border-slate-200 dark:border-primary/20 rounded-2xl p-8 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:border-neon-cyan/50 transition-all duration-500 group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 overflow-hidden relative">
               <div className="absolute inset-0 bg-neon-cyan/20 blur-md group-hover:bg-neon-cyan/40 transition-colors"></div>
               <ShieldCheck className="w-6 h-6 text-primary group-hover:text-neon-cyan relative z-10 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Global Governance & Sovereignty</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Collaborating with international regulatory frameworks (WTO, UNESCAP) to ensure our infrastructure enforces fair, transparent, and compliant AI solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section className="py-24 px-6 md:px-20 bg-background-light dark:bg-background-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-1 h-1 bg-neon-cyan rounded-full opacity-20 shadow-[0_0_10px_#00F0FF]"></div>
        <div className="absolute bottom-10 left-10 w-1 h-1 bg-neon-cyan rounded-full opacity-20 shadow-[0_0_10px_#00F0FF]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8 gold-gradient-text">Architecture of Intelligence</h2>
          <div className="space-y-8">
            {[
              { num: "01", title: "Data Sovereignty", desc: "Every byte stays within your jurisdiction with our proprietary encryption layers." },
              { num: "02", title: "Elastic Inference", desc: "Seamlessly move workloads between edge and cloud based on priority and cost." },
              { num: "03", title: "Human-Centric UX", desc: "Complex algorithms presented through intuitive, actionable executive dashboards." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center font-bold text-primary bg-primary/5">
                  {item.num}
                </div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">{item.title}</h5>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="w-full aspect-square max-w-md relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-900/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative w-full h-full border border-primary/20 rounded-full flex items-center justify-center p-8">
              <div className="w-full h-full border border-primary/30 rounded-full flex items-center justify-center border-dashed p-8">
                <div className="w-full h-full border border-neon-cyan/20 rounded-full flex items-center justify-center relative">
                  
                  <div className="w-32 h-32 rounded-2xl flex items-center justify-center transform rotate-45 border border-primary/50 gold-metallic-bg shadow-[0_0_30px_rgba(191,162,105,0.3)] z-10">
                    <Zap className="w-12 h-12 text-background-dark transform -rotate-45" />
                  </div>
                  
                  {/* Orbiting nodes */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-background-light dark:bg-background-dark border border-primary/50 rounded-xl flex items-center justify-center shadow-lg">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 h-14 bg-background-light dark:bg-background-dark border border-primary/50 rounded-xl flex items-center justify-center shadow-lg">
                    <Cpu className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-background-light dark:bg-background-dark border border-primary/50 rounded-xl flex items-center justify-center shadow-lg">
                    <Cloud className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-background-light dark:bg-background-dark border border-primary/50 rounded-xl flex items-center justify-center shadow-lg">
                    <LineChart className="w-6 h-6 text-primary" />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 px-6 lg:px-20 border-t border-primary/10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto rounded-3xl glass-panel p-12 text-center overflow-hidden relative border-primary/30 shadow-[0_0_30px_rgba(191,162,105,0.1)]"
      >
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <Wrench className="w-64 h-64 text-primary" />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">Ready to integrate?</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
            Whether you need a full sovereign cloud deployment or specialized AI agents for your existing workflow, ATLAS provides the tools to lead your sector.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button className="text-background-dark px-10 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform gold-metallic-bg border border-white/20">
              Request a Demo
            </button>
            <button className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 border border-primary/30 px-10 py-4 rounded-xl font-bold hover:bg-primary/10 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <CorePlatforms />
      <StrategicEcosystem />
      <Architecture />
      <CTA />
    </div>
  );
}
