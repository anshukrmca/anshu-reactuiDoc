import React, { forwardRef } from 'react';

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(({ label, error, className = '', ...props }, ref) => {
  const baseClasses =
    `block w-full rounded-md shadow-sm transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-offset-0 ` +
    `border ${error ? 'border-red-500 dark:border-red-600' : 'border-gray-300 dark:border-gray-600'} ` +
    `bg-white text-gray-900 placeholder-gray-400 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500`;

  return (
    <div className="w-full mb-4">
      {label && <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">{label}</label>}
      <input type="file" ref={ref} className={`${baseClasses} ${className}`} {...props} />
    </div>
  );
});

FileInput.displayName = 'FileInput';
export default FileInput;
