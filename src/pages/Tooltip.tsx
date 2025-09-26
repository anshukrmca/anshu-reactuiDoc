import React, { useState, useRef, type ReactNode } from 'react';

export interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  trigger?: 'hover' | 'click';
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  placement = 'top',
  trigger = 'hover',
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Fix: Use number | null instead of NodeJS.Timeout
  const timeoutRef = useRef<number | null>(null);

  const showTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(true);
  };

  const hideTooltip = () => {
    timeoutRef.current = window.setTimeout(() => setIsVisible(false), 100);
  };

  const placementClasses: Record<string, string> = {
    top: 'bottom-full left-full transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-full transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
  };

  const arrowClasses: Record<string, string> = {
    top: 'top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900',
    bottom: 'bottom-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-900',
    left: 'left-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-900',
    right: 'right-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-gray-900',
  };

  const triggerProps =
    trigger === 'hover'
      ? { onMouseEnter: showTooltip, onMouseLeave: hideTooltip }
      : { onClick: () => setIsVisible(!isVisible) };

  return (
<div className="relative inline-block" {...triggerProps}>
  {children}
  {isVisible && (
    <div
      style={{ zIndex: 9999 }}
      className={`absolute z-50 px-2 py-1 text-sm text-black dark:text-white min-w-[8vw]
        bg-gray-300 dark:bg-gray-900 rounded shadow-lg
        max-w-[20vw] break-words whitespace-normal 
        ${placementClasses[placement]} ${className}`}
    >
      {content}
      <div className={`absolute w-0 h-0 border-4 ${arrowClasses[placement]}`} />
    </div>
  )}
</div>



  );
};

export default Tooltip;
