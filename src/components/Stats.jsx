import React from 'react';
import { STATS } from '../data/practiceData';

export default function Stats({ theme }) {
  return (
    <section className="py-12 relative border-y border-slate-200/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`p-6 ${theme.radius} ${theme.cardBg} flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300`}
            >
              <div>
                <span className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${theme.headingFont} ${theme.accentText}`}>
                  {stat.value}
                </span>
                <h3 className={`text-base font-bold mt-2 ${theme.headingFont} ${theme.bodyText}`}>
                  {stat.label}
                </h3>
              </div>
              <p className="text-xs opacity-75 mt-2 leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
