import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Lightbulb, Shield, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#00F0FF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/30 w-fit">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">About Atlas AI</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tighter text-slate-900 dark:text-slate-100">
              Building the Foundational AI Ecosystem for Algeria
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              We are architecting the future of national intelligence through enterprise-grade infrastructure and localized technical leadership.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-neon-cyan/10 to-primary/5 border border-primary/20 overflow-hidden flex items-center justify-center p-8 shadow-[0_0_50px_rgba(0,240,255,0.1)] relative">
              {/* Abstract Algeria Map Representation */}
              <div className="absolute inset-0 flex items-center justify-center opacity-80">
                <svg viewBox="0 0 200 200" className="w-full h-full text-neon-cyan drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <path d="M100,20 L140,40 L160,80 L150,130 L100,180 L50,140 L40,90 L60,40 Z" strokeDasharray="2 2" />
                  <path d="M100,20 L140,40 L160,80 L150,130 L100,180 L50,140 L40,90 L60,40 Z" fill="rgba(0, 240, 255, 0.05)" />
                  {/* Nodes */}
                  <circle cx="100" cy="20" r="2" fill="#00F0FF" />
                  <circle cx="140" cy="40" r="2" fill="#00F0FF" />
                  <circle cx="160" cy="80" r="2" fill="#00F0FF" />
                  <circle cx="150" cy="130" r="2" fill="#00F0FF" />
                  <circle cx="100" cy="180" r="2" fill="#00F0FF" />
                  <circle cx="50" cy="140" r="2" fill="#00F0FF" />
                  <circle cx="40" cy="90" r="2" fill="#00F0FF" />
                  <circle cx="60" cy="40" r="2" fill="#00F0FF" />
                  <circle cx="100" cy="100" r="3" fill="#BFA36A" className="animate-pulse" />
                  {/* Internal connections */}
                  <line x1="100" y1="20" x2="100" y2="100" stroke="rgba(0, 240, 255, 0.3)" />
                  <line x1="140" y1="40" x2="100" y2="100" stroke="rgba(0, 240, 255, 0.3)" />
                  <line x1="160" y1="80" x2="100" y2="100" stroke="rgba(0, 240, 255, 0.3)" />
                  <line x1="150" y1="130" x2="100" y2="100" stroke="rgba(0, 240, 255, 0.3)" />
                  <line x1="100" y1="180" x2="100" y2="100" stroke="rgba(0, 240, 255, 0.3)" />
                  <line x1="50" y1="140" x2="100" y2="100" stroke="rgba(0, 240, 255, 0.3)" />
                  <line x1="40" y1="90" x2="100" y2="100" stroke="rgba(0, 240, 255, 0.3)" />
                  <line x1="60" y1="40" x2="100" y2="100" stroke="rgba(0, 240, 255, 0.3)" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background-light dark:bg-background-dark border border-primary/20 rounded-2xl p-10 shadow-lg hover:border-primary/40 transition-colors"
          >
            <Target className="w-8 h-8 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              To empower Algeria's digital transformation by building a robust, secure, and foundational AI ecosystem that serves as the backbone for national innovation.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-background-light dark:bg-background-dark border border-primary/20 rounded-2xl p-10 shadow-lg hover:border-primary/40 transition-colors"
          >
            <Eye className="w-8 h-8 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Achieving complete digital sovereignty for the nation through world-class technical leadership and localized AI infrastructure that meets global standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Our Journey</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">From a visionary concept to a national AI infrastructure provider.</p>
        </div>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-px bg-primary/20"></div>
          
          <div className="space-y-12">
            {[
              {
                phase: "The Inception",
                title: "Visionary Concept",
                desc: "Atlas AI began as a strategic initiative to address the critical need for localized data processing and sovereign intelligence frameworks in the MENA region."
              },
              {
                phase: "Development",
                title: "Engineering Foundations",
                desc: "Building a team of world-class engineers and researchers to develop the proprietary algorithms and hardware integrations necessary for a truly national scale."
              },
              {
                phase: "Current Era",
                title: "National Infrastructure Provider",
                desc: "Today, Atlas AI stands as the premier provider of enterprise-grade AI solutions, powering critical sectors from energy to finance across Algeria."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex flex-col gap-2 pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-background-light dark:bg-background-dark border-2 border-primary flex items-center justify-center -translate-x-[calc(50%-15px)] z-10">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-primary uppercase tracking-wider">{item.phase}</span>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Our Values</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">The core principles that guide our technical and ethical decisions.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Lightbulb className="w-6 h-6 text-primary" />, title: "Innovation", desc: "Pushing the boundaries of what's possible in machine learning and data science." },
              { icon: <Shield className="w-6 h-6 text-primary" />, title: "Sovereignty", desc: "Ensuring data control and intellectual independence for the nation." },
              { icon: <Award className="w-6 h-6 text-primary" />, title: "Excellence", desc: "Upholding the highest standards in engineering and operational security." },
              { icon: <Users className="w-6 h-6 text-primary" />, title: "Collaboration", desc: "Partnering with national institutions to foster a shared AI ecosystem." }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background-light dark:bg-background-dark border border-primary/20 rounded-xl p-8 hover:border-primary/40 transition-colors"
              >
                <div className="mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">{value.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Leadership</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">The visionaries behind Atlas AI Solutions.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Amine Rahmani",
                role: "Chief Executive Officer",
                desc: "Former Tech Lead at Global AI labs, returning to pioneer national infrastructure.",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400"
              },
              {
                name: "Dr. Nadia Benalia",
                role: "Chief Technology Officer",
                desc: "Expert in distributed systems and sovereign cloud architectures.",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
              },
              {
                name: "Karim Mansouri",
                role: "Chief Strategy Officer",
                desc: "Specialist in national digital policy and enterprise scaling.",
                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400"
              }
            ].map((leader, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 border border-primary/20 grayscale hover:grayscale-0 transition-all duration-500">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">{leader.name}</h4>
                <p className="text-sm font-bold text-primary mb-4">{leader.role}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">{leader.desc}</p>
              </motion.div>
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
          className="max-w-5xl mx-auto rounded-3xl gold-metallic-bg p-12 text-center overflow-hidden relative shadow-[0_0_30px_rgba(191,162,105,0.2)]"
        >
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-4xl font-bold text-background-dark">Shape the Future of Algeria with Us</h2>
            <p className="text-background-dark/80 max-w-2xl text-lg font-medium">
              We are looking for visionary partners and brilliant minds to join our mission.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <button className="bg-background-dark text-slate-100 px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg">
                Join the Team
              </button>
              <button className="bg-transparent border-2 border-background-dark text-background-dark px-10 py-4 rounded-xl font-bold hover:bg-background-dark/10 transition-all">
                Partner With Us
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
