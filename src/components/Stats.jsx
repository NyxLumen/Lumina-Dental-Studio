import React from 'react';
import { STATS } from '../data/practiceData';

export default function Stats({ theme }) {
  return (
    <section className="py-12 bg-[#f6f6fa]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-[32px] p-6 sm:p-10 shadow-dual border border-[#d6d6d6]/60">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#d6d6d6]/40 text-center sm:text-left">
            {STATS.map((stat, idx) => (
              <div key={idx} className="p-4 sm:px-8 sm:py-2 space-y-1">
                <span className="text-4xl sm:text-5xl font-display font-normal tracking-tight text-[#151581] block">
                  {stat.value}
                </span>
                <h3 className="text-xs font-body font-semibold text-[#5465ff] uppercase tracking-wider">
                  {stat.label}
                </h3>
                <p className="text-xs font-body text-[#a1a1cd]">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
