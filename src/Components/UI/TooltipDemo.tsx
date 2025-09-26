import React from 'react';
import {Tooltip} from 'anshu-reactui';

const TooltipDemo: React.FC = () => {

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 space-y-8">
      <h1 className="text-3xl font-bold dark:text-white">Tooltip Demo</h1>

      {/* Hover Trigger */}
      <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold dark:text-white">Hover Trigger</h2>
        <Tooltip content="This is a tooltisdshdsdhsdshdsadsadsadsadsadsadsadsdsadsadadsadsadsadsadsp!">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Hover Me</button>
        </Tooltip>
      </section>

      {/* Click Trigger */}
      <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold dark:text-white">Click Trigger</h2>
        <Tooltip className='bg-red-300' content="Clicked tooltip!" trigger="click">
          <button className="px-4 py-2 bg-green-500 text-white rounded">Click Me</button>
        </Tooltip>
      </section>

      {/* Placement Variants */}
      <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold dark:text-white">Placement Variants</h2>
        <div className="flex flex-wrap gap-8 items-center">
          <Tooltip content={<p>"Tooltip Top"</p>} placement="top">
            <button className="px-4 py-2 bg-gray-700 text-white rounded">Top</button>
          </Tooltip>
          <Tooltip content="Tooltip Bottom" placement="bottom">
            <button className="px-4 py-2 bg-gray-700 text-white rounded">Bottom</button>
          </Tooltip>
          <Tooltip content="Tooltip Left" placement="left">
            <button className="px-4 py-2 bg-gray-700 text-white rounded">Left</button>
          </Tooltip>
          <Tooltip content="Tooltip Right" placement="right">
            <button className="px-4 py-2 bg-gray-700 text-white rounded">Right</button>
          </Tooltip>
        </div>
      </section>

      {/* Custom Content */}
      <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold dark:text-white">Custom Content</h2>
        <Tooltip
          content={
            <div className="flex items-center gap-2">
              <span>💡</span>
              <span>Custom HTML tooltip</span>
            </div>
          }
        >
          <button className="px-4 py-2 bg-purple-500 text-white rounded">Custom</button>
        </Tooltip>
      </section>
    </div>
  );
};

export default TooltipDemo;
