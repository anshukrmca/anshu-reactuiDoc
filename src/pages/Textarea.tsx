import React, { forwardRef } from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  error?: boolean;
  helperText?: string;
  label?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', size = 'md', error = false, helperText, label, ...props }, ref) => {
    const baseClasses =
      'block w-full border rounded-md shadow-sm focus:outline-none focus:ring-0 focus:ring-offset-0 transition-colors duration-200 resize-vertical';

    const sizeClasses: Record<string, string> = {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-3 py-2 text-sm',
      lg: 'px-4 py-3 text-base',
      xl: 'px-6 py-4 text-lg',
    };

    const colorClasses = error
      ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
      : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500';

    const textareaClasses = `${baseClasses} ${sizeClasses[size]} ${colorClasses} ${className}`;

    return (
      <div className="w-full">
        {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
        <textarea ref={ref} className={textareaClasses} {...props} />
        {helperText && (
          <p className={`mt-1 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
export default Textarea;
