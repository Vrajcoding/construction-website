import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  darkTheme?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
  align = 'left',
  darkTheme = false,
  className,
}) => {
  return (
    <div className={cn('mb-10 sm:mb-12', align === 'center' ? 'text-center' : 'text-left', className)}>
      {label && (
        <div className={cn('flex flex-col', align === 'center' && 'items-center')}>
          <div className="w-8 h-[3px] bg-[#FA6400] mb-2" />
          <span className={cn('text-sm font-semibold tracking-wider uppercase mb-3', darkTheme ? 'text-neutral-300' : 'text-neutral-600')}>
            {label}
          </span>
        </div>
      )}
      <h2
        className={cn(
          'text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight',
          darkTheme ? 'text-white' : 'text-black'
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn('mt-4 text-base sm:text-lg max-w-3xl leading-relaxed', darkTheme ? 'text-neutral-400' : 'text-neutral-600')}>
          {description}
        </p>
      )}
    </div>
  );
};
