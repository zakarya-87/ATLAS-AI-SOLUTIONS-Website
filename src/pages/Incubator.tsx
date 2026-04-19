import React from 'react';
import { motion } from 'motion/react';
import { Network, Globe, Lock, ArrowRight, UploadCloud, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Incubator() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative py-24 px-6 lg:px-20 overflow-hidden flex-1 flex flex-col items-center justify-center">
        {/* Visual Motif: Core Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#00F0FF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-8"
        >
          <div className="relative w-32 h-32 flex items-center justify-center text-primary mb-4">
            <Globe className="absolute inset-0 w-full h-full opacity-20 animate-[spin_40s_linear_infinite]" />
            <Network className="w-16 h-16 drop-shadow-[0_0_20px_rgba(191,162,105,0.5)]" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs font-bold uppercase tracking-widest text-primary shadow-[0_0_15px_rgba(191,162,105,0.2)]">
            <Lock className="w-3 h-3" /> Secure Workspace
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight tracking-tighter">
            ATLAS AI <span className="gold-gradient-text border-b border-primary/30 pb-1">Incubator</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Authentication required to access the strategic planning portal. 
            Connect your enterprise credentials to generate market research, operational budgets, and investor pitch decks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full max-w-xl">
             <div className="flex-1 flex bg-slate-100 dark:bg-slate-900/50 border border-slate-300 dark:border-primary/40 rounded-xl overflow-hidden focus-within:border-primary transition-colors relative shadow-[0_0_20px_rgba(191,162,105,0.05)]">
                <div className="px-4 flex items-center justify-center border-r border-slate-300 dark:border-primary/30">
                  <UploadCloud className="w-5 h-5 text-slate-400 dark:text-slate-500" />
                </div>
                <input 
                  type="text" 
                  placeholder="Paste context or idea overview..." 
                  disabled
                  className="bg-transparent border-none focus:ring-0 text-sm py-4 px-4 w-full placeholder:text-slate-500 text-slate-900 dark:text-slate-100 outline-none cursor-not-allowed"
                />
             </div>
             <button disabled className="bg-slate-200 dark:bg-primary/20 text-slate-500 dark:text-primary/50 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 cursor-not-allowed border border-slate-300 dark:border-primary/20">
               Analyze <RefreshCw className="w-4 h-4 ml-1 opacity-50" />
             </button>
          </div>
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Connection Offline - Requires Frontend Integration
          </div>

          <Link to="/" className="mt-12 text-primary hover:text-neon-cyan font-bold text-sm flex items-center gap-1 transition-colors border-b border-transparent hover:border-neon-cyan">
            Return to Homepage
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
