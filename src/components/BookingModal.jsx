import React, { useState } from 'react';
import { SPECIALTIES, CLINIC_INFO } from '../data/practiceData';
import { X, Calendar, User, Phone, Mail, CheckCircle2, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const STEPS = ['Select Service', 'Date & Time', 'Your Details'];

export default function BookingModal({ theme, isOpen, onClose, preselectedService }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    service: preselectedService || '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const canProceed = () => {
    if (step === 0) return form.service !== '';
    if (step === 1) return form.date !== '' && form.time !== '';
    if (step === 2) return form.name !== '' && form.phone !== '';
    return false;
  };

  const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '02:00 PM', '02:30 PM', '03:00 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '06:00 PM',
    '06:30 PM', '07:00 PM', '07:30 PM'
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className={`relative w-full max-w-lg max-h-[90vh] overflow-y-auto ${theme.radius} bg-white text-[#211E1B] border border-[#E5DFD3] shadow-2xl z-10`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between p-5 border-b border-[#E6DFD3] bg-white">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-[#F0E9DC] text-[#8C7A5B]">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`text-xl font-bold ${theme.headingFont}`}>Book Consultation</h3>
                <p className="text-xs font-serif italic text-[#7A694B]">{CLINIC_INFO.name} • Indirapuram</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-lg hover:bg-[#F0EAE1] transition-colors">
              <X className="w-5 h-5 text-[#211E1B]" />
            </button>
          </div>

          {/* Progress Steps */}
          {!submitted && (
            <div className="px-5 pt-4 flex items-center space-x-2">
              {STEPS.map((label, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex items-center space-x-2">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                      idx < step ? 'bg-emerald-600 text-white' :
                      idx === step ? 'bg-[#8C7A5B] text-white' :
                      'bg-[#F0EAE1] text-[#7A694B]'
                    }`}>
                      {idx < step ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                    </div>
                    <span className={`text-xs font-medium hidden sm:inline ${idx === step ? 'opacity-100 font-serif italic' : 'opacity-50'}`}>
                      {label}
                    </span>
                  </div>
                  {idx < STEPS.length - 1 && (
                    <div className={`flex-1 h-px ${idx < step ? 'bg-emerald-600' : 'bg-[#E6DFD3]'}`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          )}

          {/* Step Content with AnimatePresence */}
          <div className="p-5 space-y-5">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className={`text-2xl font-bold ${theme.headingFont}`}>Appointment Requested</h3>
                <p className="text-sm opacity-80 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="font-serif text-[#8C7A5B]">{form.name}</strong>! Our clinical team will confirm your {form.service} appointment for {form.date} at {form.time} within 30 minutes.
                </p>
                <div className="pt-4">
                  <button
                    onClick={onClose}
                    className={`px-8 py-3 ${theme.radius} ${theme.primaryBtn} text-sm font-bold shadow-md`}
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            ) : (
              <>
                {/* Step 0: Select Service */}
                {step === 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-3"
                  >
                    <h4 className="text-xs font-serif uppercase tracking-wider font-bold opacity-70">Choose Your Treatment</h4>
                    <div className="grid gap-2">
                      {SPECIALTIES.map((spec) => (
                        <button
                          key={spec.id}
                          onClick={() => setForm({ ...form, service: spec.title })}
                          className={`w-full p-4 ${theme.radius} text-left flex items-center justify-between border transition-all ${
                            form.service === spec.title
                              ? 'bg-white border-[#8C7A5B] ring-2 ring-[#8C7A5B]/30 shadow-sm'
                              : 'bg-[#F8F5F0] border-[#E5DFD3] hover:border-[#8C7A5B]'
                          }`}
                        >
                          <div>
                            <h5 className={`text-sm font-bold ${theme.headingFont}`}>{spec.title}</h5>
                            <p className="text-xs opacity-60 mt-0.5">{spec.subtitle}</p>
                          </div>
                          <span className="text-[10px] font-serif italic px-2 py-0.5 rounded bg-[#F0E9DC] text-[#7A694B]">
                            {spec.badge}
                          </span>
                        </button>
                      ))}
                      <button
                        onClick={() => setForm({ ...form, service: 'General Consultation' })}
                        className={`w-full p-4 ${theme.radius} text-left flex items-center justify-between border transition-all ${
                          form.service === 'General Consultation'
                            ? 'bg-white border-[#8C7A5B] ring-2 ring-[#8C7A5B]/30 shadow-sm'
                            : 'bg-[#F8F5F0] border-[#E5DFD3] hover:border-[#8C7A5B]'
                        }`}
                      >
                        <div>
                          <h5 className={`text-sm font-bold ${theme.headingFont}`}>General Consultation</h5>
                          <p className="text-xs opacity-60 mt-0.5">Comprehensive oral exam & treatment planning</p>
                        </div>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 1: Date & Time */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-5"
                  >
                    <div>
                      <label className="block text-xs font-serif uppercase tracking-wider font-bold mb-2">Preferred Date</label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full px-4 py-3 ${theme.radius} border text-sm font-medium bg-[#F8F5F0] border-[#E5DFD3] text-[#211E1B] focus:ring-2 focus:ring-[#8C7A5B]/30 outline-none`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-serif uppercase tracking-wider font-bold mb-2">Available Time Slots</label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setForm({ ...form, time: slot })}
                            className={`px-3 py-2.5 ${theme.radius} text-xs font-semibold text-center border transition-all ${
                              form.time === slot
                                ? 'bg-[#8C7A5B] text-white border-[#8C7A5B] shadow-sm'
                                : 'bg-[#F8F5F0] border-[#E5DFD3] hover:border-[#8C7A5B]'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Patient Details */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-serif uppercase tracking-wider font-bold mb-1.5">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50" />
                        <input
                          type="text"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={`w-full pl-10 pr-4 py-3 ${theme.radius} border text-sm bg-[#F8F5F0] border-[#E5DFD3] text-[#211E1B] placeholder:text-slate-400 focus:ring-2 focus:ring-[#8C7A5B]/30 outline-none`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-serif uppercase tracking-wider font-bold mb-1.5">Phone / WhatsApp *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50" />
                        <input
                          type="tel"
                          placeholder="+91 98712 XXXXX"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className={`w-full pl-10 pr-4 py-3 ${theme.radius} border text-sm bg-[#F8F5F0] border-[#E5DFD3] text-[#211E1B] placeholder:text-slate-400 focus:ring-2 focus:ring-[#8C7A5B]/30 outline-none`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-serif uppercase tracking-wider font-bold mb-1.5">Email (Optional)</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50" />
                        <input
                          type="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={`w-full pl-10 pr-4 py-3 ${theme.radius} border text-sm bg-[#F8F5F0] border-[#E5DFD3] text-[#211E1B] placeholder:text-slate-400 focus:ring-2 focus:ring-[#8C7A5B]/30 outline-none`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-serif uppercase tracking-wider font-bold mb-1.5">Notes for Dr. Mehta (Optional)</label>
                      <textarea
                        placeholder="Describe your concern or desired treatment..."
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        rows={3}
                        className={`w-full px-4 py-3 ${theme.radius} border text-sm resize-none bg-[#F8F5F0] border-[#E5DFD3] text-[#211E1B] placeholder:text-slate-400 focus:ring-2 focus:ring-[#8C7A5B]/30 outline-none`}
                      />
                    </div>

                    {/* Booking Summary */}
                    <div className={`p-4 ${theme.radius} bg-[#F0EAE1] border border-[#E0D8C8] space-y-1.5 text-xs`}>
                      <h5 className="font-bold font-serif text-sm mb-2">Appointment Summary</h5>
                      <div className="flex justify-between"><span className="opacity-70">Treatment:</span><span className="font-semibold">{form.service}</span></div>
                      <div className="flex justify-between"><span className="opacity-70">Date:</span><span className="font-semibold">{form.date || '—'}</span></div>
                      <div className="flex justify-between"><span className="opacity-70">Time:</span><span className="font-semibold">{form.time || '—'}</span></div>
                      <div className="flex justify-between"><span className="opacity-70">Clinic:</span><span className="font-semibold">Lumina Dental Studio, Indirapuram</span></div>
                    </div>
                  </motion.div>
                )}

                {/* Navigation buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-[#E6DFD3]">
                  {step > 0 ? (
                    <button
                      onClick={() => setStep(step - 1)}
                      className={`px-4 py-2.5 ${theme.radius} ${theme.secondaryBtn} text-sm font-semibold flex items-center space-x-1.5`}
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 2 ? (
                    <button
                      onClick={() => canProceed() && setStep(step + 1)}
                      disabled={!canProceed()}
                      className={`px-6 py-2.5 ${theme.radius} ${theme.primaryBtn} text-sm font-bold flex items-center space-x-2 ${!canProceed() ? 'opacity-40 cursor-not-allowed' : ''}`}
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={!canProceed()}
                      className={`px-6 py-2.5 ${theme.radius} ${theme.primaryBtn} text-sm font-bold flex items-center space-x-2 ${!canProceed() ? 'opacity-40 cursor-not-allowed' : ''}`}
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Confirm Appointment</span>
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
