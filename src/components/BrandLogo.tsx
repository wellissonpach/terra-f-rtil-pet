import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'colored';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showSlogan?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'colored',
  size = 'md',
  className = '',
}) => {
  const isDarkOnWhite = variant === 'dark';

  const sizeClasses = {
    sm: 'h-8 sm:h-10 w-auto max-w-[160px] sm:max-w-[180px]',
    md: 'h-10 sm:h-12 md:h-14 lg:h-15 w-auto max-w-[200px] sm:max-w-[240px] md:max-w-[280px]',
    lg: 'h-13 sm:h-16 md:h-20 w-auto max-w-[260px] sm:max-w-[320px]',
  };

  return (
    <div
      className={`inline-flex items-center transition-transform duration-200 hover:scale-[1.02] select-none ${
        isDarkOnWhite
          ? 'bg-[#063B98] p-2 rounded-xl shadow-sm'
          : ''
      } ${className}`}
    >
      <img
        src="/logo2.png"
        alt="Terra Fértil Pet - O mundo do seu Pet"
        className={`${sizeClasses[size]} object-contain drop-shadow-sm`}
        loading="eager"
      />
    </div>
  );
};

