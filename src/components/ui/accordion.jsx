import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

export const Accordion = ({ className, children }) => {
  return <div className={cn('divide-y divide-[#d6d6d6]/50 border-y border-[#d6d6d6]/50', className)}>{children}</div>;
};

export const AccordionItem = ({ value, className, children }) => {
  return <div className={cn('py-2', className)}>{children}</div>;
};

export const AccordionTrigger = ({ onClick, isOpen, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full py-4 flex items-center justify-between text-left font-display font-semibold text-[#151581] text-base hover:text-[#5465ff] transition-colors',
        className
      )}
    >
      <span>{children}</span>
      <ChevronDown
        className={cn('w-4 h-4 text-[#a1a1cd] transition-transform duration-200', isOpen && 'rotate-180 text-[#151581]')}
      />
    </button>
  );
};

export const AccordionContent = ({ isOpen, className, children }) => {
  if (!isOpen) return null;
  return (
    <div className={cn('pb-4 text-xs font-body text-[#292824]/80 leading-relaxed', className)}>
      {children}
    </div>
  );
};
