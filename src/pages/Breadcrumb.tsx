import React from 'react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
  current?: boolean;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = (
    <svg
      className="h-4 w-4 text-gray-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  ),
  className = '',
}) => {
  return (
    <nav className={`flex ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2 flex-shrink-0">{separator}</span>}
            {item.href ? (
              <a
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-gray-700 ${
                  item.current ? 'text-gray-500' : 'text-gray-900'
                }`}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.label}
              </a>
            ) : item.onClick ? (
              <button
                onClick={item.onClick}
                className={`text-sm font-medium transition-colors duration-200 hover:text-gray-700 ${
                  item.current ? 'text-gray-500' : 'text-gray-900'
                }`}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.label}
              </button>
            ) : (
              <span
                className={`text-sm font-medium ${
                  item.current ? 'text-gray-500' : 'text-gray-900'
                }`}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
