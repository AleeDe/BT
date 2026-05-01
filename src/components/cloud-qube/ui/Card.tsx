'use client';

import React from 'react';
import { cn } from '@/components/cloud-qube/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'dark' | 'outline';
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'glass', hover = true, children, ...props }, ref) => {
    const baseClass =
      'rounded-2xl transition-all duration-300 overflow-hidden';

    const variants: Record<string, string> = {
      glass:
        'backdrop-blur-xl bg-white/5 border border-white/10 shadow-glass',
      dark: 'bg-dark-800 border border-dark-700 shadow-lg',
      outline:
        'border border-primary-500/30 bg-transparent hover:border-primary-500',
    };

    const hoverClass = hover && variant === 'glass'
      ? 'hover:shadow-glow-emerald hover:border-primary-500/50 hover:bg-white/8'
      : hover && variant === 'dark'
      ? 'hover:shadow-glow-emerald hover:border-primary-500/30'
      : '';

    return (
      <div
        ref={ref}
        className={cn(baseClass, variants[variant], hoverClass, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 border-b border-white/5', className)} {...props} />
  )
);

CardHeader.displayName = 'CardHeader';

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6', className)} {...props} />
  )
);

CardContent.displayName = 'CardContent';

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('p-6 border-t border-white/5 flex gap-4', className)}
      {...props}
    />
  )
);

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardContent, CardFooter };
