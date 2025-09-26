import React from 'react';
import Breadcrumb, { type BreadcrumbItem } from '../../pages/Breadcrumb';

const BreadcrumbDemo: React.FC = () => {
  const handleClick = (label: string) => () => alert(`Clicked: ${label}`);

  const items1: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Library', href: '/library' },
    { label: 'Data', current: true },
  ];

  const items2: BreadcrumbItem[] = [
    { label: 'Dashboard', onClick: handleClick('Dashboard') },
    { label: 'Settings', onClick: handleClick('Settings') },
    { label: 'Profile', current: true },
  ];

  const items3: BreadcrumbItem[] = [
    { label: 'Level 1', href: '/lvl1' },
    { label: 'Level 2', href: '/lvl2' },
    { label: 'Level 3', href: '/lvl3' },
    { label: 'Level 4', current: true },
  ];

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen space-y-8">
      <h1 className="text-3xl font-bold dark:text-white">Breadcrumb Demo</h1>

      {/* Default Breadcrumb with links */}
      <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold dark:text-white">Default Links</h2>
        <Breadcrumb items={items1} />
      </section>

      {/* Breadcrumb with onClick buttons */}
      <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold dark:text-white">Clickable Buttons</h2>
        <Breadcrumb items={items2} />
      </section>

      {/* Breadcrumb with multiple levels */}
      <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold dark:text-white">Multiple Levels</h2>
        <Breadcrumb items={items3} />
      </section>

      {/* Custom separator */}
      <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold dark:text-white">Custom Separator</h2>
        <Breadcrumb
          items={items1}
          separator={<span className="mx-2 text-gray-400">/</span>}
        />
      </section>
    </div>
  );
};

export default BreadcrumbDemo;
