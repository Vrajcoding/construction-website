import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'ghost' | 'light';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  // Base styles matching Figma specification: Archivo SemiBold 12px UPPERCASE, 0.8px tracking, sharp rectangle
  const baseClasses =
    'font-archivo font-semibold text-[12px] leading-[1.7] uppercase tracking-[0.8px] transition-all duration-200 inline-flex items-center justify-center cursor-pointer select-none rounded-none border border-transparent';

  // Exact padding from spec: 13.7px top/bottom, 31.6px left/right
  const sizeClasses = {
    sm: 'px-[24px] py-[10px]',
    md: 'px-[31.6px] py-[13.7px]',
    lg: 'px-[40px] py-[16px]',
  }[size];

  const variantClasses = {
    // Primary: #0A0909 dark background, white text
    primary:
      'bg-[#0A0909] text-white hover:bg-[#FA6400] active:bg-[#e05800]',
    // Accent: #FA6400 orange background, white text
    accent:
      'bg-[#FA6400] text-white hover:bg-[#0A0909] active:bg-black',
    // Outline: Hairline #CCCCCC or #0A0909 border
    outline:
      'border-[#0A0909] text-[#0A0909] bg-transparent hover:bg-[#0A0909] hover:text-white',
    // Light
    light:
      'bg-white text-[#0A0909] hover:bg-[#FA6400] hover:text-white',
    // Ghost
    ghost:
      'bg-transparent text-[#0A0909] hover:text-[#FA6400]',
  }[variant];

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};
