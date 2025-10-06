import React from 'react';
import { useAppSelector } from '../../../CustomeHooks/Hooks';
import { Breadcrumb, Card, hexToRgba, type BreadcrumbItem } from 'anshu-reactui';
import DynamicIcon from '../../../Components/Icons/DynamicIcon';

const BreadcrumbList: React.FC = () => {
  const handleClick = (label: string) => () => alert(`Clicked: ${label}`);
  const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
  const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);

  const items1: BreadcrumbItem[] = [
    { label: 'Home', href: '/', icon: <DynamicIcon name='FaHome' /> },
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
    <>
      <Card
        className="my-4 items-center shadow-none hover:shadow-none overflow-hidden my-Border p-4 my-Background"
        style={{
          background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
        }}
      >

        <h1 className="text:sm md:text-xl font-semibold">Breadcrumb</h1>

        <div className='p-4 my-Border my-2'>
          <h2 className="text-sm font-semibol my-4">Default Links</h2>
          <Breadcrumb items={items1} />
        </div>

        <div className='p-4 my-Border my-2'>
          <h2 className="text-sm font-semibold my-4">Clickable Buttons</h2>
          <Breadcrumb items={items2}/>
        </div>

        <div className='p-4 my-Border my-2'>
          <h2 className="text-sm font-semibold my-4">Multiple Levels</h2>
          <Breadcrumb items={items3} />
        </div>

        <div className='p-4 my-Border my-2'>
          <h2 className="text-sm font-semibold my-4">Custom Separator</h2>
          <Breadcrumb
            items={items1}
            separator={<span className="text-gray-400">|-</span>}
          />
        </div>
      </Card>
    </>
  );
};

export default BreadcrumbList;
