import React from 'react';

export interface SpinnerProps {
  type?: number; // now any number (1-10 in practice)
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
}


const Spinner: React.FC<SpinnerProps> = ({
  type = 1,
  size = 'md',
  color = 'blue',
  className = '',
}) => {
  const sizeMap = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const colorClass = color.startsWith('#') ? '' : `border-${color}-500`;
  const borderColorStyle = color.startsWith('#') ? { borderTopColor: color } : {};

  switch (type) {
    case 1: // Classic spinner
      return (
        <div
          className={`animate-spin rounded-full border-4 border-gray-200 border-t-${color}-500 ${sizeMap[size]} ${className}`}
        />
      );

    case 2: // Dual ring
      return (
        <div
          className={`inline-block ${sizeMap[size]} ${className}`}
          style={{ borderColor: `${color} transparent ${color} transparent` }}
        >
          <div className="w-full h-full border-4 border-solid rounded-full animate-spin border-t-transparent border-b-transparent" />
        </div>
      );
    case 3:
      // Wave loader (bouncing dots)
      return (
        <div className="flex items-center justify-center space-x-1">
          <span className={`inline-block ${size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : 'w-4 h-4'} rounded-full animate-bounce`} style={{ backgroundColor: color, animationDelay: '0s' }} />
          <span className={`inline-block ${size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : 'w-4 h-4'} rounded-full animate-bounce`} style={{ backgroundColor: color, animationDelay: '0.15s' }} />
          <span className={`inline-block ${size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : 'w-4 h-4'} rounded-full animate-bounce`} style={{ backgroundColor: color, animationDelay: '0.3s' }} />
        </div>
      );

    case 4: // Pulse circle
      return (
        <div
          className={`w-8 h-8 ${sizeMap[size]} ${className} bg-${color}-500 rounded-full animate-ping`}
          style={borderColorStyle}
        />
      );
    case 5: // Ripple loader
      return (
        <div className="relative flex items-center justify-center">
          <div className={`absolute w-8 h-8 rounded-full bg-${color}-500 opacity-75 animate-ping`} />
          <div className={`absolute w-6 h-6 rounded-full bg-${color}-500 opacity-75 animate-ping delay-150`} />
          <div className={`absolute w-4 h-4 rounded-full bg-${color}-500 opacity-75 animate-ping delay-300`} />
        </div>
      );
    case 6: // Skew spin
      return (
        <div
          className={`w-8 h-8 border-4 border-${color}-500 border-t-transparent rounded-full animate-spin-slow ${className}`}
        />
      );
    case 7: // Spinner with ring dots
      return (
        <div className={`relative ${sizeMap[size]} ${className}`}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-${color}-500 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin`}
              style={{ transform: `rotate(${i * 45}deg) translate(0, -1.5rem)` }}
            />
          ))}
        </div>
      );
    case 8: // Scale bounce
      return (
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 bg-${color}-500 rounded-full animate-scale-bounce`}
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      );
    case 9: // Ring rotate
      return (
        <div className={`w-8 h-8 border-4 border-${color}-500 border-dashed rounded-full animate-spin ${className}`} />
      );
    case 10: // Flip cube
      return (
        <div className="w-8 h-8 relative transform rotate-45">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-4 h-4 bg-${color}-500 transform origin-center animate-flip`}
              style={{
                top: i % 2 === 0 ? 0 : '50%',
                left: i < 2 ? 0 : '50%',
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      );
    default:
      return null;
  }
};

export default Spinner;
