import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'green' | 'accent' | 'dark' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'green',
  children,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-xs transition-colors';

  const variants = {
    green: 'bg-[#00C853] text-white font-bold',
    accent: 'bg-[#FA6400] text-white font-bold',
    dark: 'bg-black text-white font-medium',
    outline: 'border border-neutral-300 text-neutral-600 bg-white hover:bg-neutral-50',
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
};
