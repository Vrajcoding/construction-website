import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  cleanPadding?: boolean;
}

/**
 * Standardized Global Site Container:
 * Centered layout bounded by `--site-max-width` with balanced responsive margins.
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  cleanPadding = false,
  ...props
}) => {
  return (
    <div
      className={`site-container ${cleanPadding ? '!px-0' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
