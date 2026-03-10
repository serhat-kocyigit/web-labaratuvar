import React from 'react';

type CardVariant = 'elevated' | 'outlined' | 'filled';

interface CardProps {
  variant?: CardVariant;
  title?: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Card({
  variant = 'elevated',
  title,
  image,
  imageAlt,
  children,
  className = '',
}: CardProps) {
  const base = 'rounded-xl overflow-hidden transition-all duration-200';

  const variants: Record<CardVariant, string> = {
    elevated:
      'bg-white dark:bg-gray-800 shadow-md hover:shadow-lg',
    outlined:
      'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500',
    filled:
      'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600',
  };

  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
      {image && (
        <img
          src={image}
          alt={imageAlt ?? title ?? ''}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-5">
        {title && (
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
        )}
        {children && (
          <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
