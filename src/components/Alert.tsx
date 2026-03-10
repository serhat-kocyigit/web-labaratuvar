import React, { useState } from 'react';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children?: React.ReactNode;
  dismissible?: boolean;
  className?: string;
}

const icons: Record<AlertVariant, string> = {
  info: 'ℹ️',
  success: '✅',
  warning: '⚠️',
  error: '❌',
};

const styles: Record<AlertVariant, string> = {
  info: 'bg-blue-50 border-blue-300 text-blue-800 dark:bg-blue-900/30 dark:border-blue-600 dark:text-blue-200',
  success:
    'bg-green-50 border-green-300 text-green-800 dark:bg-green-900/30 dark:border-green-600 dark:text-green-200',
  warning:
    'bg-yellow-50 border-yellow-300 text-yellow-800 dark:bg-yellow-900/30 dark:border-yellow-600 dark:text-yellow-200',
  error:
    'bg-red-50 border-red-300 text-red-800 dark:bg-red-900/30 dark:border-red-600 dark:text-red-200',
};

export default function Alert({
  variant = 'info',
  title,
  children,
  dismissible = false,
  className = '',
}: AlertProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      role="alert"
      className={`flex items-start gap-3 p-4 rounded-lg border ${styles[variant]} ${className}`}
    >
      <span className="text-lg shrink-0" aria-hidden="true">
        {icons[variant]}
      </span>
      <div className="flex-1">
        {title && <p className="font-semibold mb-0.5">{title}</p>}
        {children && <p className="text-sm leading-relaxed">{children}</p>}
      </div>
      {dismissible && (
        <button
          onClick={() => setVisible(false)}
          aria-label="Bildirimi kapat"
          className="shrink-0 ml-auto text-current opacity-60 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-current rounded"
        >
          ✕
        </button>
      )}
    </div>
  );
}
