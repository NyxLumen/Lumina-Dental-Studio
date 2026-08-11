import React from 'react';
import { STATS } from '../data/practiceData';
import { StaggerContainer, StaggerItem, MotionCard } from './MotionUi';

export default function Stats({ theme }) {
  return (
    <section className="py-12 relative border-y border-[#E6DFD3]/80 bg-[#F4EFE6]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <StaggerItem key={idx}>
              <MotionCard className={`p-6 ${theme.radius} bg-white border border-[#E5DFD3] shadow-xs hover:border-[#8C7A5B] flex flex-col justify-between h-full`}>
                <div>
                  <span className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${theme.headingFont} text-[#8C7A5B]`}>
                    {stat.value}
                  </span>
                  <h3 className={`text-base font-bold mt-2 ${theme.headingFont} ${theme.bodyText}`}>
                    {stat.label}
                  </h3>
                </div>
                <p className="text-xs opacity-75 mt-2 leading-relaxed">
                  {stat.desc}
                </p>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
