import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Activity, 
  ShieldCheck, 
  BrainCircuit, 
  FileCode2, 
  Settings2, 
  RefreshCcw, 
  Building2, 
  HeartPulse, 
  Leaf, 
  PlayCircle,
  LineChart
} from 'lucide-react';

export default function Cognisys() {
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
    <div className="flex flex-col min-h-screen bg-[#0A2463]">
      <section className="py-24 px-6 lg:px-20 bg-[#0A2463] text-[#C5D5E0] relative overflow-hidden flex-1 flex flex-col justify-center">
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
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-[0_0_15px_rgba(0,212,170,0.3)]">
                CogniSys BA:<br/>
                <span className="text-[#00D4AA]">The Catalyst Hub.</span>
              </h1>
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
    </div>
  );
}
