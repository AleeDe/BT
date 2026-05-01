'use client';

import React from 'react';
import { cn } from '@/components/cloud-qube/lib/utils';

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  from?: string;
  to?: string;
  animated?: boolean;
}

const GradientText = React.forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ className, from = 'from-primary-400', to = 'to-primary-600', animated = true, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'bg-clip-text text-transparent',
          `bg-gradient-to-r ${from} ${to}`,
          animated && 'animate-shimmer',
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

GradientText.displayName = 'GradientText';

export { GradientText };
