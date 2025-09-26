import React, { useState } from 'react';
import Textarea from '../../pages/Textarea';

const TextareaDemo: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 space-y-8">
      <h1 className="text-3xl font-bold dark:text-white">Textarea Component Demo</h1>

      {/* Section 1: Basic */}
      <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold dark:text-white">1. Basic Textarea</h2>
        <Textarea
          label="Basic Textarea"
          placeholder="Type something..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </section>

      {/* Section 2: Sizes */}
      <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold dark:text-white">2. Sizes</h2>
        <div className="space-y-4">
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
            <Textarea
              key={size}
              size={size}
              label={`Size: ${size}`}
              placeholder={`Textarea ${size}`}
            />
          ))}
        </div>
      </section>

      {/* Section 3: Error & Helper Text */}
      <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold dark:text-white">3. Error & Helper Text</h2>
        <Textarea
          label="With Error"
          placeholder="Error example"
          error
          helperText="This field is required"
        />
        <Textarea
          label="With Helper Text"
          placeholder="Helper text example"
          helperText="You can write extra info here"
        />
      </section>

      {/* Section 4: Disabled */}
      <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold dark:text-white">4. Disabled</h2>
        <Textarea
          label="Disabled Textarea"
          placeholder="Cannot type here"
          disabled
          helperText="This field is disabled"
        />
      </section>
    </div>
  );
};

export default TextareaDemo;
