import React from 'react';
import { Card, hexToRgba } from 'anshu-reactui';
import { useAppSelector } from '../../../CustomeHooks/Hooks';
import { Spinner } from 'anshu-reactui';

const SpinnerList: React.FC = () => {
  const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
  const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);
  return (
    <>
      <Card
        className="my-4 items-center shadow-none hover:shadow-none overflow-hidden border my-Border p-4 my-Background"
        style={{
          background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
        }}
      >
        <h1 className="text:sm md:text-xl font-semibold mb-4">Spinner / Loader</h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-8">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <Spinner type={i + 1} size="lg" color="red" className='border-amber-400'/>
              <span className="text-sm my-4">Type {i + 1}</span>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

export default SpinnerList
;
