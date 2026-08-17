import React, { useState } from 'react';
import { SPECIALTIES, DOCTORS, CLINIC_INFO } from '../data/practiceData';
import { X, Calendar, User, Phone, Mail, CheckCircle2, ArrowRight, ArrowLeft, Sparkles, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const STEPS = ['Specialist & Service', 'Date & Time', 'Patient Info'];

export default function BookingModal({ theme, isOpen, onClose, preselectedService }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    doctor: DOCTORS[0].name,
    service: preselectedService || SPECIALTIES[0].title,
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
    '02:00 PM', '02:30 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM', '06:30 PM', '07:00 PM'
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-[#151581]/40 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-[32px] bg-white text-[#151581] border border-[#d6d6d6]/60 shadow-dual z-10 p-6 sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#d6d6d6]/50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#151581] text-white flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#a1a1cd]" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-[#151581]">
                  Book Studio Appointment
                </h3>
                <p className="text-xs text-[#a1a1cd] font-body">
                  {CLINIC_INFO.name} &bull; Indirapuram Studio
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#f6f5f4] hover:bg-[#151581] text-[#151581] hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Indicators */}
          {!submitted && (
            <div className="py-4 flex items-center justify-between border-b border-[#d6d6d6]/40 text-xs font-body">
              {STEPS.map((label, idx) => (
                <div key={idx} className="flex items-center space-x-1.5">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    idx < step ? 'bg-[#00bb76] text-white' :
                    idx === step ? 'bg-[#151581] text-white' :
                    'bg-[#f6f5f4] text-[#a1a1cd]'
                  }`}>
                    {idx < step ? '✓' : idx + 1}
                  </div>
                  <span className={idx === step ? 'font-semibold text-[#151581]' : 'text-[#a1a1cd]'}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Step Contents */}
          <div className="py-4">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#00bb76]/10 text-[#00bb76] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-[#151581]">
                  Appointment Requested!
                </h3>
                <p className="text-xs text-[#292824]/80 font-body leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong className="text-[#151581]">{form.name}</strong>. Our clinical coordinator will confirm your <strong>{form.service}</strong> consultation with <strong>{form.doctor}</strong> for <strong>{form.date}</strong> at <strong>{form.time}</strong> within 30 minutes.
                </p>
                <div className="pt-4">
                  <button
                    onClick={onClose}
                    className="px-8 py-3 rounded-full bg-[#151581] text-white font-body text-xs font-medium shadow-xs"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            ) : (
              <>
                {/* Step 0: Specialist & Service */}
                {step === 0 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-body font-semibold text-[#151581] uppercase tracking-wider mb-2">
                        Preferred Specialist
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {DOCTORS.map((doc) => (
                          <button
                            key={doc.id}
                            onClick={() => setForm({ ...form, doctor: doc.name })}
                            className={`p-2.5 rounded-[16px] border text-left transition-all ${
                              form.doctor === doc.name
                                ? 'bg-[#151581] text-white border-[#151581]'
                                : 'bg-[#f6f5f4] text-[#151581] border-[#d6d6d6]/60 hover:border-[#151581]'
                            }`}
                          >
                            <p className="text-xs font-display font-semibold line-clamp-1">{doc.name}</p>
                            <p className={`text-[10px] font-body line-clamp-1 ${form.doctor === doc.name ? 'text-[#a1a1cd]' : 'text-[#a1a1cd]'}`}>
                              {doc.specialty.split('&')[0]}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-body font-semibold text-[#151581] uppercase tracking-wider mb-2">
                        Select Dental Service
                      </label>
                      <div className="space-y-2">
                        {SPECIALTIES.map((spec) => (
                          <button
                            key={spec.id}
                            onClick={() => setForm({ ...form, service: spec.title })}
                            className={`w-full p-3.5 rounded-[16px] border text-left flex items-center justify-between transition-all ${
                              form.service === spec.title
                                ? 'bg-white border-[#151581] ring-2 ring-[#151581]/20 shadow-2xs'
                                : 'bg-[#f6f5f4] border-[#d6d6d6]/60 hover:border-[#151581]'
                            }`}
                          >
                            <div>
                              <h4 className="text-xs font-display font-semibold text-[#151581]">{spec.title}</h4>
                              <p className="text-[11px] text-[#a1a1cd] font-body">{spec.subtitle}</p>
                            </div>
                            <span className="text-[10px] font-body font-medium text-[#00bb76] px-2 py-0.5 rounded-full bg-[#00bb76]/10">
                              {spec.badge}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 1: Date & Time */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="modal-date" className="block text-xs font-body font-semibold text-[#151581] uppercase tracking-wider mb-1.5">
                        Preferred Consultation Date
                      </label>
                      <input
                        id="modal-date"
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 rounded-full border border-[#d6d6d6]/60 bg-[#f6f5f4] text-xs font-body text-[#151581] focus:ring-2 focus:ring-[#151581]/20 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-body font-semibold text-[#151581] uppercase tracking-wider mb-1.5">
                        Select Appointment Time Slot
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setForm({ ...form, time: slot })}
                            className={`py-2 px-3 rounded-full text-xs font-body text-center border transition-all ${
                              form.time === slot
                                ? 'bg-[#151581] text-white border-[#151581] font-semibold'
                                : 'bg-[#f6f5f4] text-[#151581] border-[#d6d6d6]/60 hover:border-[#151581]'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Patient Info */}
                {step === 2 && (
                  <div className="space-y-3">
                    <div>
                      <label htmlFor="patient-name" className="block text-xs font-body font-semibold text-[#151581] mb-1">Full Name *</label>
                      <input
                        id="patient-name"
                        type="text"
                        placeholder="e.g. Ananya Sharma"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-full border border-[#d6d6d6]/60 bg-[#f6f5f4] text-xs font-body text-[#151581] outline-none focus:ring-2 focus:ring-[#151581]/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="patient-phone" className="block text-xs font-body font-semibold text-[#151581] mb-1">Phone / WhatsApp *</label>
                      <input
                        id="patient-phone"
                        type="tel"
                        placeholder="+91 98712 XXXXX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-full border border-[#d6d6d6]/60 bg-[#f6f5f4] text-xs font-body text-[#151581] outline-none focus:ring-2 focus:ring-[#151581]/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="patient-email" className="block text-xs font-body font-semibold text-[#151581] mb-1">Email Address</label>
                      <input
                        id="patient-email"
                        type="email"
                        placeholder="your.email@domain.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-full border border-[#d6d6d6]/60 bg-[#f6f5f4] text-xs font-body text-[#151581] outline-none focus:ring-2 focus:ring-[#151581]/20"
                      />
                    </div>

                    {/* Summary Card */}
                    <div className="bg-[#f6f5f4] rounded-[20px] p-3.5 border border-[#d6d6d6]/60 text-xs font-body space-y-1">
                      <div className="flex justify-between"><span className="text-[#a1a1cd]">Specialist:</span><span className="font-semibold">{form.doctor}</span></div>
                      <div className="flex justify-between"><span className="text-[#a1a1cd]">Service:</span><span className="font-semibold">{form.service}</span></div>
                      <div className="flex justify-between"><span className="text-[#a1a1cd]">Date &amp; Time:</span><span className="font-semibold">{form.date || '—'} @ {form.time || '—'}</span></div>
                    </div>
                  </div>
                )}

                {/* Modal Controls */}
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#d6d6d6]/50">
                  {step > 0 ? (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="px-5 py-2 rounded-full border border-[#d6d6d6] text-xs font-body font-medium text-[#151581] hover:bg-[#f6f5f4]"
                    >
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 2 ? (
                    <button
                      onClick={() => canProceed() && setStep(step + 1)}
                      disabled={!canProceed()}
                      className={`px-6 py-2.5 rounded-full bg-[#151581] text-white font-body text-xs font-medium flex items-center space-x-1.5 ${
                        !canProceed() ? 'opacity-40 cursor-not-allowed' : 'hover:bg-[#0f0f63]'
                      }`}
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={!canProceed()}
                      className={`px-6 py-2.5 rounded-full bg-[#00bb76] text-white font-body text-xs font-medium flex items-center space-x-1.5 ${
                        !canProceed() ? 'opacity-40 cursor-not-allowed' : 'hover:bg-[#00bb76]/90'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
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
