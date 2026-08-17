import React from 'react';
import { cn } from '../../utils/cn';

export const badgeVariants = {
  default: 'bg-[#151581]/10 text-[#151581] border-[#151581]/20',
  verified: 'bg-[#00bb76]/10 text-[#00bb76] border-[#00bb76]/20 font-semibold',
  accent: 'bg-[#5465ff]/10 text-[#5465ff] border-[#5465ff]/20 font-semibold',
  outline: 'bg-white text-[#151581] border-[#d6d6d6]',
};

export const Badge = ({ className, variant = 'default', children, ...props }) => {
  return (
    <span
      className={cn(
        'inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-body border select-none',
        badgeVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
