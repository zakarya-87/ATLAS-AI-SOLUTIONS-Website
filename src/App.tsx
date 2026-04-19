import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Box, 
  Search, 
  ArrowRight, 
  Sun,
  Moon
} from 'lucide-react';

import Home from './pages/Home';
import About from './pages/About';
import Infrastructure from './pages/Infrastructure';
import Contact from './pages/Contact';
import Cognisys from './pages/Cognisys';
import Incubator from './pages/Incubator';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial state from HTML class
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full border border-primary/20 text-primary hover:bg-primary/10 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}

function Navbar() {
  const location = useLocation();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-3 text-primary">
            <Box className="w-8 h-8" />
            <h2 className="text-xl font-bold tracking-tight uppercase gold-gradient-text">ATLAS AI</h2>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'gold-gradient-text border-b-2 border-primary/50 pb-1' : 'hover:text-primary'}`}>Solutions</Link>
            <Link to="/about" className={`text-sm font-medium transition-colors ${location.pathname === '/about' ? 'gold-gradient-text border-b-2 border-primary/50 pb-1' : 'hover:text-primary'}`}>About</Link>
            <Link to="/infrastructure" className={`text-sm font-medium transition-colors ${location.pathname === '/infrastructure' ? 'gold-gradient-text border-b-2 border-primary/50 pb-1' : 'hover:text-primary'}`}>Infrastructure</Link>
            <Link to="/contact" className={`text-sm font-medium transition-colors ${location.pathname === '/contact' ? 'gold-gradient-text border-b-2 border-primary/50 pb-1' : 'hover:text-primary'}`}>Contact</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center bg-primary/10 border border-primary/20 rounded-lg px-3 py-1.5 hover:border-neon-cyan/30 transition-colors">
            <Search className="w-4 h-4 text-primary mr-2" />
            <input 
              type="text" 
              placeholder="Search ecosystem..." 
              className="bg-transparent border-none focus:ring-0 text-sm w-32 lg:w-48 placeholder:text-slate-500 text-slate-900 dark:text-slate-100 outline-none"
            />
          </div>
          <ThemeToggle />
          <button className="text-background-dark px-5 py-2 rounded-lg text-sm font-bold hover:brightness-110 transition-all gold-metallic-bg shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_15px_rgba(0,0,0,0.3)] border border-white/20">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 text-primary">
            <Box className="w-6 h-6" />
            <h2 className="text-lg font-bold tracking-tight uppercase gold-gradient-text">ATLAS AI</h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-500 leading-relaxed pr-4">
            The future of sovereign intelligence. Built for nations, engineered for performance, designed for security.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs font-bold mb-6 text-primary uppercase tracking-widest">Platforms</h4>
          <ul className="flex flex-col gap-4 text-sm text-slate-600 dark:text-slate-400">
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Sahara Cloud</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Mirsaad Data</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Agent Builder</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Ecosystem Hub</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xs font-bold mb-6 text-primary uppercase tracking-widest">Company</h4>
          <ul className="flex flex-col gap-4 text-sm text-slate-600 dark:text-slate-400">
            <li><Link to="/about" className="hover:text-neon-cyan transition-colors">About Us</Link></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Press</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xs font-bold mb-6 text-primary uppercase tracking-widest">Newsletter</h4>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-slate-600 dark:text-slate-500">Stay updated on the latest AI breakthroughs.</p>
            <div className="flex mt-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-100 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 text-sm py-3 px-4 rounded-l-lg focus:ring-1 focus:ring-primary focus:border-primary w-full outline-none text-slate-900 dark:text-slate-200"
              />
              <button className="text-background-dark px-4 rounded-r-lg hover:brightness-110 transition-all gold-metallic-bg flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200 dark:border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500 font-medium uppercase tracking-wider">
        <p>© 2026 ATLAS AI SOLUTIONS. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background-light text-slate-900 dark:bg-background-dark dark:text-slate-100 font-display overflow-x-hidden selection:bg-primary/30 transition-colors duration-300 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/cognisys-ba" element={<Cognisys />} />
            <Route path="/incubator" element={<Incubator />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
