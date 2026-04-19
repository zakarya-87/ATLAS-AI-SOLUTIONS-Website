import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare,
  Globe,
  Loader2,
  CheckCircle2
} from 'lucide-react';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    company: '',
    areaOfInterest: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.workEmail || !formData.company || !formData.areaOfInterest || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const submissionRef = doc(collection(db, 'contact_submissions'));
      await setDoc(submissionRef, {
        ...formData,
        createdAt: serverTimestamp()
      });
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        workEmail: '',
        company: '',
        areaOfInterest: '',
        message: ''
      });
    } catch (error) {
      console.error("Error submitting form: ", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#00F0FF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/30 w-fit">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Get In Touch</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tighter text-slate-900 dark:text-slate-100">
              Let's Build the <span className="gold-gradient-text">Future.</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Whether you're looking to deploy sovereign infrastructure, integrate specialized AI agents, or partner with us on national initiatives, our team is ready to assist.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 px-6 lg:px-20 mb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16">
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-12"
          >
            <div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">Contact Information</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Reach out to our dedicated enterprise team for inquiries regarding Sahara Cloud deployments, Mirsaad Data access, or custom agent development.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-background-light dark:bg-background-dark border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-1">Headquarters</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Cyberpark Sidi Abdellah<br />
                      Rahmania, Algiers<br />
                      Algeria
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-background-light dark:bg-background-dark border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-1">Email Us</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Enterprise: enterprise@atlas.ai.dz<br />
                      Support: support@atlas.ai.dz<br />
                      Careers: careers@atlas.ai.dz
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-background-light dark:bg-background-dark border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-1">Call Us</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      +213 (0) 21 XX XX XX<br />
                      Mon-Thu, 8:00 AM - 5:00 PM (CET+1)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-2xl bg-black/5 dark:bg-black/20 border border-primary/10 relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 opacity-10">
                <Globe className="w-48 h-48 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 relative z-10">Global Standards, Local Presence</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 relative z-10">
                We operate strictly within Algerian jurisdiction to guarantee absolute data sovereignty for our partners.
              </p>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="bg-background-light dark:bg-background-dark border border-primary/20 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(191,162,105,0.05)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-[80px] pointer-events-none"></div>
              
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Send a Message</h3>
              </div>
              
              <form className="flex flex-col gap-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-sm font-bold text-slate-700 dark:text-slate-300">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="bg-slate-100 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm py-3 px-4 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-sm font-bold text-slate-700 dark:text-slate-300">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="bg-slate-100 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm py-3 px-4 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-300">Work Email</label>
                    <input 
                      type="email" 
                      id="workEmail" 
                      value={formData.workEmail}
                      onChange={handleChange}
                      required
                      className="bg-slate-100 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm py-3 px-4 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                      placeholder="john@company.dz"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm font-bold text-slate-700 dark:text-slate-300">Company / Organization</label>
                    <input 
                      type="text" 
                      id="company" 
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="bg-slate-100 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm py-3 px-4 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                      placeholder="Sonatrach, etc."
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="interest" className="text-sm font-bold text-slate-700 dark:text-slate-300">Area of Interest</label>
                  <select 
                    id="areaOfInterest" 
                    value={formData.areaOfInterest}
                    onChange={handleChange}
                    required
                    className="bg-slate-100 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm py-3 px-4 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all appearance-none"
                  >
                    <option value="">Select an option...</option>
                    <option value="sahara">Sahara Cloud Infrastructure</option>
                    <option value="mirsaad">Mirsaad Data Platform</option>
                    <option value="agents">Custom AI Agents</option>
                    <option value="partnership">Partnership / Investment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                  <textarea 
                    id="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-slate-100 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm py-3 px-4 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-700 dark:text-green-400 text-sm flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    Thank you! Your message has been submitted. Our enterprise team will contact you shortly.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-700 dark:text-red-400 text-sm">
                    An error occurred while submitting your message. Please try again later.
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="mt-4 text-background-dark px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform gold-metallic-bg shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_15px_rgba(0,0,0,0.3)] border border-white/20 w-full md:w-auto md:self-start disabled:opacity-70 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <>Sending... <Loader2 className="w-4 h-4 ml-2 animate-spin" /></>
                  ) : (
                    <>Send Message <Send className="w-4 h-4 ml-2" /></>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
          
        </div>
      </section>
    </div>
  );
}
