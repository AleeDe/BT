'use client';

import React from 'react';
import { cn } from '@/components/cloud-qube/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon' | 'icon-lg';

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-emerald text-white hover:shadow-glow-lg hover:scale-105 active:scale-95',
  secondary:
    'bg-dark-800 text-primary-400 border border-primary-500/30 hover:border-primary-500 hover:bg-dark-700 hover:shadow-glow',
  outline:
    'border border-dark-600 text-dark-50 hover:border-primary-500 hover:text-primary-400 hover:bg-dark-950/50',
  ghost: 'text-dark-50 hover:bg-dark-800/50 hover:text-primary-400',
  danger: 'bg-red-600 text-white hover:bg-red-700 hover:shadow-lg active:scale-95',
};

const sizes: Record<ButtonSize, string> = {
  xs: 'px-3 py-1.5 text-xs rounded-lg',
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
  xl: 'px-10 py-5 text-xl rounded-2xl',
  icon: 'p-2 rounded-lg',
  'icon-lg': 'p-3 rounded-xl',
};

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading,
      icon,
      iconPosition = 'left',
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClass =
      'inline-flex items-center justify-center font-semibold transition-all duration-300 relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900 disabled:opacity-50 disabled:cursor-not-allowed ripple';

    return (
      <button
        className={cn(baseClass, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="w-5 h-5 mr-2 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          <>
            {icon && iconPosition === 'left' && (
              <span className="mr-2 flex items-center">{icon}</span>
            )}
            {children}
            {icon && iconPosition === 'right' && (
              <span className="ml-2 flex items-center">{icon}</span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
