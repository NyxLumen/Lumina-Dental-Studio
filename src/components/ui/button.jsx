import React from 'react';
import { cn } from '../../utils/cn';

export const buttonVariants = {
  primary: 'bg-[#151581] hover:bg-[#0f0f63] text-white shadow-xs active:scale-[0.98]',
  secondary: 'bg-white hover:bg-[#f6f5f4] text-[#151581] border border-[#d6d6d6] shadow-2xs active:scale-[0.98]',
  verified: 'bg-[#00bb76] hover:bg-[#00bb76]/90 text-white shadow-xs active:scale-[0.98]',
  ghost: 'bg-transparent hover:bg-white/60 text-[#151581]',
  outline: 'bg-transparent text-[#151581] border border-[#151581] hover:bg-[#151581] hover:text-white',
};

export const buttonSizes = {
  sm: 'px-4 py-2 text-xs font-medium rounded-full',
  md: 'px-6 py-2.5 text-xs font-medium rounded-full',
  lg: 'px-8 py-3.5 text-sm font-medium rounded-full',
  icon: 'w-10 h-10 p-0 rounded-full flex items-center justify-center',
};

export const Button = React.forwardRef(({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center font-body transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#151581]/20 disabled:pointer-events-none disabled:opacity-40 select-none',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
