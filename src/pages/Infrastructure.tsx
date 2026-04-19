import React from 'react';
import { motion } from 'motion/react';
import { 
  Server, 
  ShieldCheck, 
  Lock, 
  Activity, 
  Cpu, 
  Globe, 
  Zap, 
  Network, 
  CheckCircle,
  Database
} from 'lucide-react';

export default function Infrastructure() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#00F0FF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/30 w-fit">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Sahara Cloud Infrastructure</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tighter text-slate-900 dark:text-slate-100">
              National Scale. <br/>
              <span className="gold-gradient-text">Uncompromising Security.</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              Engineered for the most demanding enterprise and government workloads. Experience 100% localized data residency with world-class compute capabilities.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="text-background-dark px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform gold-metallic-bg shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_15px_rgba(0,0,0,0.3)] border border-white/20">
                Deploy Now
              </button>
              <button className="border border-primary/30 text-slate-700 dark:text-slate-300 hover:bg-primary/5 px-8 py-4 rounded-xl font-bold transition-colors">
                View Specifications
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-lg aspect-[4/3] rounded-3xl bg-background-light dark:bg-background-dark border border-primary/20 overflow-hidden flex items-center justify-center p-8 shadow-[0_0_50px_rgba(0,240,255,0.1)] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-primary/10"></div>
              
              {/* Abstract Server Rack Representation */}
              <div className="w-full h-full flex flex-col gap-4 relative z-10">
                {[1, 2, 3, 4].map((rack) => (
                  <div key={rack} className="flex-1 border border-primary/30 rounded-lg bg-black/40 backdrop-blur-sm flex items-center px-6 gap-4 relative overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/50 group-hover:bg-neon-cyan transition-colors"></div>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                    </div>
                    <div className="flex-1 h-2 bg-primary/10 rounded overflow-hidden">
                      <div className="h-full bg-primary/40 w-2/3 relative">
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                      </div>
                    </div>
                    <Database className="w-5 h-5 text-primary/50" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 px-6 lg:px-20 bg-black/5 dark:bg-black/20 border-y border-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Enterprise-Grade Capabilities</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Built from the ground up to support mission-critical AI and data workloads.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Server className="w-8 h-8 text-primary" />,
                title: "Tier IV Equivalent",
                desc: "Fault-tolerant site infrastructure ensuring 99.995% availability for your most critical applications."
              },
              {
                icon: <Cpu className="w-8 h-8 text-primary" />,
                title: "High-Performance Compute",
                desc: "Latest generation GPU clusters specifically optimized for LLM training and high-frequency inference."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-primary" />,
                title: "Air-Gapped Deployments",
                desc: "Physically isolated infrastructure options for defense, finance, and highly regulated sectors."
              },
              {
                icon: <Network className="w-8 h-8 text-primary" />,
                title: "Ultra-Low Latency",
                desc: "Direct fiber peering with major national ISPs ensuring sub-millisecond response times across Algeria."
              },
              {
                icon: <Lock className="w-8 h-8 text-primary" />,
                title: "Quantum-Safe Encryption",
                desc: "Future-proofed cryptographic standards protecting data at rest and in transit."
              },
              {
                icon: <Zap className="w-8 h-8 text-primary" />,
                title: "Sustainable Power",
                desc: "Powered by a mix of national grid and renewable energy sources with N+2 redundancy."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background-light dark:bg-background-dark border border-primary/20 rounded-2xl p-8 hover:border-primary/50 transition-colors shadow-lg hover:shadow-[0_0_30px_rgba(191,162,105,0.15)] group"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Map */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">National Network Topology</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              Our distributed architecture ensures resilience against regional disruptions while keeping data strictly within national borders.
            </p>
            
            <ul className="space-y-6">
              {[
                { city: "Algiers", role: "Primary Hub & AI Training Center", status: "Operational" },
                { city: "Oran", role: "Secondary Failover & Edge Compute", status: "Operational" },
                { city: "Hassi Messaoud", role: "Energy Sector Dedicated Node", status: "Expanding" }
              ].map((node, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1">
                    <Activity className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
                      {node.city}
                      <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full border ${node.status === 'Operational' ? 'border-neon-cyan/50 text-neon-cyan bg-neon-cyan/10' : 'border-primary/50 text-primary bg-primary/10'}`}>
                        {node.status}
                      </span>
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">{node.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-3xl border border-primary/20 bg-background-light dark:bg-background-dark overflow-hidden flex items-center justify-center p-8 shadow-2xl"
          >
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #BFA36A 0%, transparent 70%)' }}></div>
            <Globe className="w-full h-full text-primary/20 absolute inset-0 m-auto max-w-[80%] max-h-[80%]" strokeWidth={0.5} />
            
            {/* Simulated Nodes */}
            <div className="absolute top-[30%] left-[45%] flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-neon-cyan shadow-[0_0_15px_#00F0FF] animate-pulse"></div>
              <span className="text-xs font-bold text-slate-900 dark:text-slate-100 mt-2">Algiers</span>
            </div>
            <div className="absolute top-[35%] left-[30%] flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-neon-cyan shadow-[0_0_10px_#00F0FF]"></div>
              <span className="text-xs font-bold text-slate-900 dark:text-slate-100 mt-2">Oran</span>
            </div>
            <div className="absolute top-[60%] left-[60%] flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_#BFA36A]"></div>
              <span className="text-xs font-bold text-slate-900 dark:text-slate-100 mt-2">H. Messaoud</span>
            </div>
            
            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <path d="M 45% 30% L 30% 35%" stroke="#00F0FF" strokeWidth="1" strokeDasharray="4 4" className="opacity-50" />
              <path d="M 45% 30% L 60% 60%" stroke="#BFA36A" strokeWidth="1" strokeDasharray="4 4" className="opacity-50" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-24 px-6 lg:px-20 bg-black/5 dark:bg-black/20 border-y border-primary/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12">Security & Compliance Standards</h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "ISO 27001 Certified",
              "National Data Protection Compliant",
              "SOC 2 Type II",
              "End-to-End Encryption",
              "24/7 SOC Monitoring",
              "Biometric Access Controls"
            ].map((cert, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-background-light dark:bg-background-dark border border-primary/20 px-6 py-4 rounded-full shadow-sm">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-medium text-slate-800 dark:text-slate-200">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-3xl glass-panel p-12 text-center overflow-hidden relative border-primary/30 shadow-[0_0_30px_rgba(191,162,105,0.1)]"
        >
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">Ready to deploy your architecture?</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
              Speak with our infrastructure architects to design a sovereign deployment tailored to your enterprise requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <button className="text-background-dark px-10 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform gold-metallic-bg border border-white/20">
                Contact Architecture Team
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
