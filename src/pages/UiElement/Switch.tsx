import { useState, forwardRef, useCallback, useEffect } from 'react';

export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  SwitchColor?: 'blue' | 'red' | 'green' | 'purple' | 'yellow' | 'teal' | 'orange' | 'gray';
  color?: string; // custom color
  className?: string;
  label?: string; // optional label text
  onChange?: (checked: boolean) => void;
}

const sizes = {
  xs: { track: 'h-3.5 w-7', thumb: 'h-3 w-3', thumbTranslate: 'translate-x-[14px]' },
  sm: { track: 'h-4 w-8', thumb: 'h-4 w-4', thumbTranslate: 'translate-x-[15px]' },
  md: { track: 'h-5 w-10', thumb: 'h-5 w-4.5', thumbTranslate: 'translate-x-[21px]' },
  lg: { track: 'h-6 w-12', thumb: 'h-6 w-5.5', thumbTranslate: 'translate-x-[24px]' },
};

const colorMap = {
  blue: 'bg-indigo-600 dark:bg-indigo-500',
  red: 'bg-red-600 dark:bg-red-500',
  green: 'bg-green-600 dark:bg-green-500',
  purple: 'bg-purple-600 dark:bg-purple-500',
  yellow: 'bg-yellow-400 dark:bg-yellow-500',
  teal: 'bg-teal-600 dark:bg-teal-500',
  orange: 'bg-orange-500 dark:bg-orange-500',
  gray: 'bg-gray-600 dark:bg-gray-500',
};

const Switch = forwardRef<HTMLSpanElement, SwitchProps>(
  ({ checked = false, disabled = false, size = 'md', SwitchColor = 'blue', className = '', color, label, onChange }, ref) => {
    const [isChecked, setIsChecked] = useState(checked);

    // Sync controlled `checked` prop
    useEffect(() => {
      setIsChecked(checked);
    }, [checked]);

    const toggle = useCallback(() => {
      if (disabled) return;
      setIsChecked((prev) => {
        const next = !prev;
        if (onChange) onChange(next);
        return next;
      });
    }, [disabled, onChange]);

    const trackStyle = isChecked && color ? { backgroundColor: color } : undefined;

    const trackClasses = `relative inset-shadow-2xs my-Border flex items-center rounded-full transition-colors duration-300 ease-in-out 
      ${sizes[size].track} ${!color && isChecked ? colorMap[SwitchColor] : ''}
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} 
      bg-gray-200 dark:bg-gray-400 ${className}`;

    const thumbClasses = `absolute bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out
      ${sizes[size].thumb} ${isChecked ? sizes[size].thumbTranslate : 'translate-x-0'}`;

    return (
      <label className="inline-flex items-center gap-2 cursor-pointer select-none m-1">
        <span
          ref={ref}
          role="switch"
          aria-checked={isChecked}
          aria-disabled={disabled}
          tabIndex={0}
          onClick={toggle}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') toggle();
          }}
          className={`${trackClasses}`}
          style={trackStyle}
        >
          <span className={thumbClasses}></span>
        </span>
        {label && <span className={`${disabled ? 'text-gray-400' : 'text-gray-900 dark:text-white'} select-none`}>{label}</span>}
      </label>
    );
  }
);

Switch.displayName = 'Switch';
export default Switch;
