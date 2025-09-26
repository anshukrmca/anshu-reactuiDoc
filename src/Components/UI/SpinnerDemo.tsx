import React from 'react';
// import Spinner from '../../pages/Spinner';
import {Spinner} from 'anshu-reactui';


const SpinnerDemo: React.FC = () => {
  return (
    <div className="p-8 space-y-8 bg-gray-50 dark:bg-slate-900 text-black dark:text-white min-h-screen">
      <h1 className="text-3xl font-bold dark:text-white">Spinner / Loader Demo</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <Spinner type={i + 1} size="lg" color="red" />
            <span className="text-sm">Type {i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpinnerDemo;
