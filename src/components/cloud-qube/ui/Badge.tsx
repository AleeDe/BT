'use client';

import React from 'react';
import { cn } from '@/components/cloud-qube/lib/utils';

type BadgeVariant = 'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'danger';

const variants: Record<BadgeVariant, string> = {
  primary: 'bg-primary-500/20 text-primary-400 border border-primary-500/40',
  secondary: 'bg-dark-700 text-dark-200 border border-dark-600',
  outline: 'border border-primary-500 text-primary-400',
  success: 'bg-green-500/20 text-green-400 border border-green-500/40',
  warning: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40',
  danger: 'bg-red-500/20 text-red-400 border border-red-500/40',
};

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  animated?: boolean;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'primary', animated = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300',
          variants[variant],
          animated && 'pulse-glow',
          className
        )}
        {...props}
      >
        {animated && (
          <span className="w-2 h-2 rounded-full bg-current opacity-75 animate-pulse" />
        )}
        {children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
