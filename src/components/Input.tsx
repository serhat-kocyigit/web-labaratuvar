import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
  id: string;
}

export default function Input({
  label,
  error,
  helpText,
  id,
  type = 'text',
  disabled,
  className = '',
  ...props
}: InputProps) {
  const inputBase =
    'w-full px-3 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1';

  const inputState = error
    ? 'border-red-500 focus:ring-red-500 dark:border-red-400'
    : 'border-gray-300 focus:ring-blue-500 dark:border-gray-600';

  const inputStyle = disabled
    ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500'
    : 'bg-white dark:bg-gray-800 dark:text-gray-100';

  const descId = error ? `${id}-error` : helpText ? `${id}-help` : undefined;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        disabled={disabled}
        aria-describedby={descId}
        aria-invalid={!!error}
        className={`${inputBase} ${inputState} ${inputStyle} ${className}`}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      )}
      {helpText && !error && (
        <p id={`${id}-help`} className="text-sm text-gray-500 dark:text-gray-400">
          {helpText}
        </p>
      )}
    </div>
  );
}
