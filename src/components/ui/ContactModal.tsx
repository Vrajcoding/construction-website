import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end overflow-hidden">
          {/* Backdrop overlay — Smooth fade in/out */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute inset-0 bg-black/50 backdrop-blur-xs"
            onClick={onClose}
          />

          {/* Full-Height Right Drawer Container — Exact 702px Reference Geometry */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white w-full max-w-[702px] h-full shadow-2xl overflow-y-auto flex flex-col justify-between relative z-10 select-none pb-10"
          >
            {/* 1. TOP HEADER REGION */}
            <div className="relative w-full shrink-0 pt-6 px-8">
              {/* Close Button X */}
              <button
                onClick={onClose}
                className="absolute top-6 left-6 sm:top-8 sm:left-8 p-2 text-neutral-900 hover:text-[#FA6400] transition-colors cursor-pointer z-30 group"
                aria-label="Close drawer"
              >
                <X className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.2] group-hover:text-[#FA6400] group-hover:scale-105 transition-all" />
              </button>

              {/* Centered Architectural Rectangle Banner Image */}
              <div className="w-full max-w-[420px] sm:max-w-[460px] mx-auto aspect-[1.45/1] overflow-hidden relative mt-8 mb-4 bg-neutral-100">
                <img
                  src="/about-building-facade.jpg"
                  alt="Konstruktion Architectural Office Facade"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4 my-auto px-12"
              >
                <CheckCircle2 className="w-16 h-16 text-[#FA6400] mx-auto animate-bounce" />
                <h3 className="font-titillium text-[32px] font-normal text-[#0A0909] uppercase">Thank You!</h3>
                <p className="font-titillium text-[16px] text-neutral-600 max-w-sm mx-auto leading-relaxed">
                  Your inquiry has been received. Our team will get back to you shortly.
                </p>
              </motion.div>
            ) : showForm ? (
              /* Interactive Form View when "LET'S TALK" is clicked */
              <motion.form
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                onSubmit={handleSubmit}
                className="space-y-4 py-4 my-auto px-12 sm:px-16"
              >
                <div className="text-center mb-6">
                  <h3 className="font-titillium text-[32px] font-normal text-[#0A0909]">Start a Project</h3>
                  <p className="font-titillium text-[15px] text-neutral-500">Fill in your details and we will reach out promptly.</p>
                </div>

                <div>
                  <label className="block font-archivo text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 font-titillium text-[15px] border border-neutral-300 focus:border-[#FA6400] focus:ring-1 focus:ring-[#FA6400] outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-archivo text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 font-titillium text-[15px] border border-neutral-300 focus:border-[#FA6400] focus:ring-1 focus:ring-[#FA6400] outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-archivo text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="212.247.2660"
                      className="w-full px-4 py-3 font-titillium text-[15px] border border-neutral-300 focus:border-[#FA6400] focus:ring-1 focus:ring-[#FA6400] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-archivo text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 font-titillium text-[15px] border border-neutral-300 focus:border-[#FA6400] focus:ring-1 focus:ring-[#FA6400] outline-none resize-none transition-colors"
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="font-archivo text-[12px] font-bold tracking-[1.5px] text-neutral-500 hover:text-black uppercase cursor-pointer transition-colors"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="w-[174px] h-[62px] bg-[#0A0909] hover:bg-[#FA6400] text-white font-archivo text-[13px] font-bold tracking-[2.5px] uppercase cursor-pointer transition-colors flex items-center justify-center"
                  >
                    Send Message
                  </button>
                </div>
              </motion.form>
            ) : (
              /* EXACT REFERENCE OVERLAY CONTENT — 702px WIDE LAYOUT */
              <div className="text-center flex-1 flex flex-col justify-between pt-6 px-10 sm:px-16">

                {/* 2. OFFICE HEADING & ADDRESS (Starting around y ≈ 265px) */}
                <div className="space-y-4">
                  <h2 className="font-titillium text-[38px] font-normal text-[#0A0909] leading-none tracking-tight">
                    Office
                  </h2>
                  
                  {/* Address Block */}
                  <div className="font-titillium text-[17px] sm:text-[18px] text-[#0A0909] leading-[1.4] tracking-normal font-normal space-y-0.5 pt-1">
                    <p>Dattner Architects 498</p>
                    <p>Seventh Ave</p>
                    <p>20th Floor</p>
                    <p>New York, NY 10018</p>
                  </div>

                  {/* Phone + Email Block with vertical gap */}
                  <div className="font-titillium text-[16px] sm:text-[17px] text-[#0A0909] pt-6 leading-[1.5] space-y-1">
                    <p>212.247.2660</p>
                    <p className="hover:text-[#FA6400] transition-colors inline-block">
                      <a href="mailto:info@konstruktion.com">info@konstruktion.com</a>
                    </p>
                  </div>
                </div>

                {/* 3. CENTERED 573px DIVIDER (Spans 573px inside 702px container) */}
                <div className="w-full max-w-[573px] mx-auto border-t border-neutral-200 my-8" />

                {/* 4. GOT A PROJECT IN MIND? & 174px x 62px BUTTON */}
                <div className="space-y-6">
                  <h3 className="font-titillium text-[34px] font-normal text-[#0A0909] tracking-tight">
                    Got a project in mind?
                  </h3>
                  <button
                    onClick={() => setShowForm(true)}
                    className="w-[174px] h-[62px] bg-[#0A0909] hover:bg-[#FA6400] text-white font-archivo text-[13px] font-bold tracking-[2.5px] uppercase mx-auto flex items-center justify-center cursor-pointer transition-colors shadow-sm hover:shadow-md active:scale-[0.98]"
                  >
                    LET’S TALK
                  </button>
                </div>

                {/* 5. SOCIAL LINKS FOOTER */}
                <div className="pt-10 pb-2">
                  <div className="font-titillium text-[15px] sm:text-[16px] text-[#0A0909] flex items-center justify-center gap-10 sm:gap-12">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FA6400] transition-colors">
                      .Facebook
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FA6400] transition-colors">
                      .Linkedin
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FA6400] transition-colors">
                      .Instagram
                    </a>
                  </div>
                </div>

              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
