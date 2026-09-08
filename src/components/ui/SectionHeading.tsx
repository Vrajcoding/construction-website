import React from 'react';

interface SectionHeadingProps {
  level?: 'h1' | 'h2' | 'h3' | 'h4';
  children: React.ReactNode;
  className?: string;
  darkTheme?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  level = 'h2',
  children,
  className = '',
  darkTheme = false,
}) => {
  const baseStyles = `font-titillium font-normal leading-[1.1] ${
    darkTheme ? 'text-white' : 'text-[#0A0909]'
  }`;

  switch (level) {
    case 'h1':
      return (
        <h1 className={`${baseStyles} title-long ${className}`}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={`${baseStyles} title-section ${className}`}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={`${baseStyles} title-semi ${className}`}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={`${baseStyles} text-[20px] ${className}`}>
          {children}
        </h4>
      );
    default:
      return <h2 className={`${baseStyles} title-section ${className}`}>{children}</h2>;
  }
};
