import React, { useState } from 'react';
import { SPECIALTIES, CLINIC_INFO } from '../data/practiceData';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className={`relative w-full max-w-lg max-h-[90vh] overflow-y-auto ${theme.radius} ${theme.isDark ? 'bg-slate-900 text-slate-100 border border-slate-700' : 'bg-white text-slate-900 border border-slate-200'} shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`sticky top-0 z-10 flex items-center justify-between p-5 border-b ${theme.isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}>
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-teal-500/20 text-teal-500">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`text-lg font-bold ${theme.headingFont}`}>Book Consultation</h3>
              <p className="text-xs opacity-60">{CLINIC_INFO.name} • Indirapuram</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-500/10 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Steps */}
        {!submitted && (
          <div className="px-5 pt-4 flex items-center space-x-2">
            {STEPS.map((label, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center space-x-2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    idx < step ? 'bg-emerald-500 text-white' :
                    idx === step ? 'bg-teal-500 text-white' :
                    theme.isDark ? 'bg-slate-700 text-slate-400' : 'bg-slate-200 text-slate-500'
                  }`}>
                    {idx < step ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                  </div>
                  <span className={`text-xs font-medium hidden sm:inline ${idx === step ? 'opacity-100' : 'opacity-50'}`}>
                    {label}
                  </span>
                </div>
                {idx < STEPS.length - 1 && (
                  <div className={`flex-1 h-px ${idx < step ? 'bg-emerald-500' : theme.isDark ? 'bg-slate-700' : 'bg-slate-200'}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        {/* Step Content */}
        <div className="p-5 space-y-5">

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className={`text-2xl font-bold ${theme.headingFont}`}>Appointment Requested</h3>
              <p className="text-sm opacity-80 max-w-sm mx-auto">
                Thank you, {form.name}! Our team will confirm your {form.service} appointment for {form.date} at {form.time} within 30 minutes via call or WhatsApp.
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className={`px-6 py-3 ${theme.radius} ${theme.primaryBtn} text-sm font-bold`}
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Step 0: Select Service */}
              {step === 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-bold opacity-80">Choose Your Treatment</h4>
                  <div className="grid gap-2">
                    {SPECIALTIES.map((spec) => (
                      <button
                        key={spec.id}
                        onClick={() => setForm({ ...form, service: spec.title })}
                        className={`w-full p-4 ${theme.radius} text-left flex items-center justify-between border transition-all ${
                          form.service === spec.title
                            ? `${theme.cardBg} ring-2 ring-teal-500/50`
                            : `${theme.isDark ? 'border-slate-700 hover:border-slate-600' : 'border-slate-200 hover:border-slate-300'}`
                        }`}
                      >
                        <div>
                          <h5 className="text-sm font-bold">{spec.title}</h5>
                          <p className="text-xs opacity-60 mt-0.5">{spec.subtitle}</p>
                        </div>
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-500/10">
                          {spec.badge}
                        </span>
                      </button>
                    ))}
                    <button
                      onClick={() => setForm({ ...form, service: 'General Consultation' })}
                      className={`w-full p-4 ${theme.radius} text-left flex items-center justify-between border transition-all ${
                        form.service === 'General Consultation'
                          ? `${theme.cardBg} ring-2 ring-teal-500/50`
                          : `${theme.isDark ? 'border-slate-700 hover:border-slate-600' : 'border-slate-200 hover:border-slate-300'}`
                      }`}
                    >
                      <div>
                        <h5 className="text-sm font-bold">General Consultation</h5>
                        <p className="text-xs opacity-60 mt-0.5">Comprehensive oral exam & treatment planning</p>
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 1: Date & Time */}
              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold mb-2">Preferred Date</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 ${theme.radius} border text-sm font-medium ${
                        theme.isDark ? 'bg-slate-800 border-slate-600 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      } focus:ring-2 focus:ring-teal-500/50 outline-none`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">Available Time Slots</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setForm({ ...form, time: slot })}
                          className={`px-3 py-2.5 ${theme.radius} text-xs font-semibold text-center border transition-all ${
                            form.time === slot
                              ? 'bg-teal-500 text-white border-teal-500'
                              : `${theme.isDark ? 'border-slate-700 hover:border-slate-500' : 'border-slate-200 hover:border-slate-400'}`
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Patient Details */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-1.5">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50" />
                      <input
                        type="text"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3 ${theme.radius} border text-sm ${
                          theme.isDark ? 'bg-slate-800 border-slate-600 text-white placeholder:text-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
                        } focus:ring-2 focus:ring-teal-500/50 outline-none`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-1.5">Phone / WhatsApp *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50" />
                      <input
                        type="tel"
                        placeholder="+91 98712 XXXXX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3 ${theme.radius} border text-sm ${
                          theme.isDark ? 'bg-slate-800 border-slate-600 text-white placeholder:text-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
                        } focus:ring-2 focus:ring-teal-500/50 outline-none`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-1.5">Email (Optional)</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50" />
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3 ${theme.radius} border text-sm ${
                          theme.isDark ? 'bg-slate-800 border-slate-600 text-white placeholder:text-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
                        } focus:ring-2 focus:ring-teal-500/50 outline-none`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-1.5">Notes for Dr. Mehta (Optional)</label>
                    <textarea
                      placeholder="Describe your concern or desired treatment..."
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      rows={3}
                      className={`w-full px-4 py-3 ${theme.radius} border text-sm resize-none ${
                        theme.isDark ? 'bg-slate-800 border-slate-600 text-white placeholder:text-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
                      } focus:ring-2 focus:ring-teal-500/50 outline-none`}
                    />
                  </div>

                  {/* Booking Summary */}
                  <div className={`p-4 ${theme.radius} ${theme.cardAltBg} border space-y-1.5 text-xs`}>
                    <h5 className="font-bold text-sm mb-2">Appointment Summary</h5>
                    <div className="flex justify-between"><span className="opacity-70">Treatment:</span><span className="font-semibold">{form.service}</span></div>
                    <div className="flex justify-between"><span className="opacity-70">Date:</span><span className="font-semibold">{form.date || '—'}</span></div>
                    <div className="flex justify-between"><span className="opacity-70">Time:</span><span className="font-semibold">{form.time || '—'}</span></div>
                    <div className="flex justify-between"><span className="opacity-70">Clinic:</span><span className="font-semibold">Lumina Dental Studio, Indirapuram</span></div>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-500/20">
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
      </div>
    </div>
  );
}
