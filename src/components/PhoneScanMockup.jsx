import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Sparkles, Scan, Activity, Mic, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function PhoneScanMockup({ onOpenBooking }) {
  const laserRef = useRef(null);
  const mockupRef = useRef(null);
  const [activeTab, setActiveTab] = useState('shade');
  const [aiMessage, setAiMessage] = useState('');
  const [isAiProcessing, setIsAiProcessing] = useState(false);

  useEffect(() => {
    // GSAP scanning laser animation
    if (laserRef.current) {
      gsap.fromTo(
        laserRef.current,
        { y: 0, opacity: 0.4 },
        {
          y: 260,
          opacity: 0.95,
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut'
        }
      );
    }

    // Gentle float on phone mockup
    if (mockupRef.current) {
      gsap.to(mockupRef.current, {
        y: -6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }
  }, []);

  const handleAiPrompt = (queryText) => {
    setIsAiProcessing(true);
    setAiMessage('');
    setTimeout(() => {
      setIsAiProcessing(false);
      if (queryText.includes('shade')) {
        setAiMessage('Lumina AI: Enamel shade calibrated to A1 Natural Porcelain with 99.4% opalescence match.');
      } else if (queryText.includes('align')) {
        setAiMessage('Lumina AI: Arch symmetry analysis complete. Recommended 14-step clear aligners.');
      } else {
        setAiMessage('Lumina AI: 8 E-Max ultra-thin porcelain veneers recommended for ideal facial proportion.');
      }
    }, 800);
  };

  return (
    <div className="relative flex justify-center items-center py-4">
      {/* Outer Phone Frame */}
      <div
        ref={mockupRef}
        className="w-[320px] sm:w-[340px] h-[640px] bg-white rounded-[44px] p-3 shadow-dual border border-[#d6d6d6]/60 relative select-none"
      >
        {/* Dynamic Island / Speaker Notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#292824] rounded-full z-30 flex items-center justify-end px-2">
          <div className="w-2 h-2 rounded-full bg-[#151581]/80" />
        </div>

        {/* Phone Screen Container */}
        <div className="w-full h-full bg-[#f6f6fa] rounded-[36px] overflow-hidden relative flex flex-col justify-between border border-[#f6f5f4]">
          
          {/* Top Status Bar */}
          <div className="pt-7 px-5 pb-2 flex items-center justify-between z-20 text-[11px] font-medium text-[#151581]">
            <span>9:41</span>
            <div className="flex items-center space-x-1 bg-[#151581]/5 px-2 py-0.5 rounded-full border border-[#151581]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00bb76] animate-pulse" />
              <span className="text-[10px] font-semibold text-[#151581]">AI SCAN LIVE</span>
            </div>
            <div className="flex items-center space-x-1 opacity-70">
              <span>5G</span>
              <div className="w-4 h-2 border border-[#151581] rounded-xs relative">
                <div className="h-full w-3/4 bg-[#151581]" />
              </div>
            </div>
          </div>

          {/* Interactive Scan Modes */}
          <div className="px-3 py-1 z-20">
            <div className="grid grid-cols-3 gap-1 bg-white/80 backdrop-blur-xs p-1 rounded-full border border-[#d6d6d6]/60 text-[10px] font-medium text-[#151581]">
              <button
                onClick={() => { setActiveTab('shade'); handleAiPrompt('shade'); }}
                className={`py-1 rounded-full transition-all text-center ${
                  activeTab === 'shade' ? 'bg-[#151581] text-white font-semibold' : 'hover:bg-[#f6f6fa]'
                }`}
              >
                Shade A1
              </button>
              <button
                onClick={() => { setActiveTab('align'); handleAiPrompt('align'); }}
                className={`py-1 rounded-full transition-all text-center ${
                  activeTab === 'align' ? 'bg-[#151581] text-white font-semibold' : 'hover:bg-[#f6f6fa]'
                }`}
              >
                Aligner 3D
              </button>
              <button
                onClick={() => { setActiveTab('veneer'); handleAiPrompt('veneer'); }}
                className={`py-1 rounded-full transition-all text-center ${
                  activeTab === 'veneer' ? 'bg-[#151581] text-white font-semibold' : 'hover:bg-[#f6f6fa]'
                }`}
              >
                Veneers
              </button>
            </div>
          </div>

          {/* Scanner Visual Surface */}
          <div className="relative flex-1 mx-3 my-1 rounded-[24px] overflow-hidden border border-[#d6d6d6]/50 bg-white">
            {/* Background Medical Portrait */}
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"
              alt="Live Dental AI Face Scan"
              className="w-full h-full object-cover object-top opacity-95"
            />

            {/* Subtle Overlay Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#15158110_1px,transparent_1px),linear-gradient(to_bottom,#15158110_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

            {/* GSAP Laser Beam */}
            <div
              ref={laserRef}
              className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#5465ff] to-transparent shadow-[0_0_12px_#5465ff] pointer-events-none z-10"
            />

            {/* Facial Landmark Tracking Nodes */}
            <div className="absolute top-1/3 left-1/3 w-3 h-3 border-2 border-[#5465ff] rounded-full animate-ping opacity-75" />
            <div className="absolute top-1/2 right-1/3 w-3 h-3 border-2 border-[#00bb76] rounded-full animate-ping opacity-75" />

            {/* Active Diagnosis Metrics Floating Chips */}
            <div className="absolute bottom-3 left-3 right-3 space-y-1.5 z-20">
              {activeTab === 'shade' && (
                <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#d6d6d6]/60 shadow-xs flex items-center justify-between text-[11px]">
                  <div className="flex items-center space-x-1.5 text-[#151581]">
                    <Sparkles className="w-3.5 h-3.5 text-[#5465ff]" />
                    <span className="font-semibold">Shade Match:</span>
                  </div>
                  <span className="font-mono text-[#00bb76] font-bold">A1 Natural Porcelain</span>
                </div>
              )}

              {activeTab === 'align' && (
                <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#d6d6d6]/60 shadow-xs flex items-center justify-between text-[11px]">
                  <div className="flex items-center space-x-1.5 text-[#151581]">
                    <Activity className="w-3.5 h-3.5 text-[#5465ff]" />
                    <span className="font-semibold">Arch Alignment:</span>
                  </div>
                  <span className="font-mono text-[#00bb76] font-bold">98.6% Symmetry</span>
                </div>
              )}

              {activeTab === 'veneer' && (
                <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#d6d6d6]/60 shadow-xs flex items-center justify-between text-[11px]">
                  <div className="flex items-center space-x-1.5 text-[#151581]">
                    <Scan className="w-3.5 h-3.5 text-[#5465ff]" />
                    <span className="font-semibold">Veneer Thickness:</span>
                  </div>
                  <span className="font-mono text-[#151581] font-bold">0.2mm Ultra-Thin</span>
                </div>
              )}

              {/* Dynamic AI Message Toast */}
              {isAiProcessing ? (
                <div className="bg-[#151581] text-white px-3 py-1.5 rounded-xl text-[10px] flex items-center space-x-2 animate-pulse">
                  <div className="w-2 h-2 rounded-full bg-[#5465ff] animate-ping" />
                  <span>Lumina AI analyzing smile topography...</span>
                </div>
              ) : aiMessage ? (
                <div className="bg-[#151581] text-white px-3 py-1.5 rounded-xl text-[10px] shadow-sm flex items-center justify-between">
                  <p className="line-clamp-2 leading-tight">{aiMessage}</p>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00bb76] shrink-0 ml-1" />
                </div>
              ) : null}
            </div>
          </div>

          {/* Signature Voice Input Bar (Brand Gradient Moment) */}
          <div className="p-3 z-20">
            <button
              onClick={() => handleAiPrompt('Analyze smile aesthetics & veneer recommendations')}
              className="w-full h-11 rounded-[24px] bg-brand-gradient p-0.5 shadow-xs transition-transform active:scale-[0.98] group flex items-center text-left"
            >
              <div className="w-full h-full bg-white/20 backdrop-blur-md rounded-[22px] px-3.5 flex items-center justify-between text-white text-xs font-medium">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-white/95 text-[11px]">Ask Lumina AI anything...</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center">
                  <Mic className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
