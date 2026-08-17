import React from 'react';
import { cn } from '../../utils/cn';

export const Card = React.forwardRef(({ className, section = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      section
        ? 'bg-white rounded-[40px] p-8 sm:p-14 shadow-dual border border-[#d6d6d6]/50'
        : 'bg-white rounded-[24px] p-6 shadow-dual border border-[#d6d6d6]/40',
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';

export const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex flex-col space-y-1.5 pb-4', className)} {...props} />
));
CardHeader.displayName = 'CardHeader';

export const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn('text-xl font-display font-semibold text-[#151581] tracking-tight', className)} {...props} />
));
CardTitle.displayName = 'CardTitle';

export const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-xs font-body text-[#a1a1cd]', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

export const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('font-body text-sm text-[#292824]', className)} {...props} />
));
CardContent.displayName = 'CardContent';

export const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center pt-4 border-t border-[#f6f5f4]', className)} {...props} />
));
CardFooter.displayName = 'CardFooter';
