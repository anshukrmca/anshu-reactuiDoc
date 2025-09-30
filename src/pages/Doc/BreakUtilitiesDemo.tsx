import React from 'react';
import { CodeViewer } from '../../Components/CodeViewer/CodeViewer';

const BreakUtilitiesDemo: React.FC = () => {
  return (
    <div className="space-y-10 px-6 py-8">
      <h1 className="text-3xl font-bold">Tailwind CSS Break Utilities</h1>
      <p className="text-gray-700 dark:text-gray-300">
        Tailwind's <code>break-after</code>, <code>break-before</code>, and <code>break-inside</code> utilities
        allow you to control how content breaks across columns, pages, or regions.
      </p>

      {/* break-inside example */}
      <CodeViewer
        code={`<div className="columns-2">
  <p>Well, let me tell you something, ...</p>
  <p className="break-inside-avoid-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>`}
      />
      <div className="columns-2 gap-4">
        <p>Well, let me tell you something, ...</p>
        <p className="break-inside-avoid-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>

      {/* break-after */}
      <section>
        <h2 className="text-2xl font-semibold">break-after</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Use <code>break-after</code> utilities to control how a column or page break should behave after an element.
        </p>
        <CodeViewer
          code={`<div className="columns-2">
  <p>Content before the break.</p>
  <p className="break-after-column">Content after the break.</p>
  <p>More content.</p>
</div>`}
        />
        <div className="columns-2 gap-4">
          <p>Content before the break.</p>
          <p className="break-after-column">Content after the break.</p>
          <p>More content.</p>
        </div>
      </section>

      {/* break-before */}
      <section>
        <h2 className="text-2xl font-semibold">break-before</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Use <code>break-before</code> utilities to control how a column or page break should behave before an element.
        </p>
        <CodeViewer
          code={`<div className="columns-2">
  <p>Content before the break.</p>
  <p className="break-before-column">Content before the break.</p>
  <p>More content.</p>
</div>`}
        />
        <div className="columns-2 gap-4">
          <p>Content before the break.</p>
          <p className="break-before-column">Content before the break.</p>
          <p>More content.</p>
        </div>
      </section>

      {/* break-inside */}
      <section>
        <h2 className="text-2xl font-semibold">break-inside</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Use <code>break-inside</code> utilities to control how a column or page break should behave within an element.
        </p>
        <CodeViewer
          code={`<div className="columns-2">
  <p>Content before the break.</p>
  <p className="break-inside-avoid-column">Content that avoids breaking inside the column.</p>
  <p>More content.</p>
</div>`}
        />
        <div className="columns-2 gap-4">
          <p>Content before the break.</p>
          <p className="break-inside-avoid-column">Content that avoids breaking inside the column.</p>
          <p>More content.</p>
        </div>
      </section>
    </div>
  );
};

export default BreakUtilitiesDemo;
