import React, { useState } from 'react';
import { Card, Switch } from 'anshu-reactui';
import { useAppSelector } from '../../../CustomeHooks/Hooks';

const SwitchList: React.FC = () => {
    const [controlledChecked, setControlledChecked] = useState(false);
    const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
    const [formData, setFormData] = useState({ notifications: false, darkMode: true });

    const handleFormChange = (key: keyof typeof formData) => (checked: boolean) =>
        setFormData((prev) => ({ ...prev, [key]: checked }));
    return (
        <>
            <Card
                className="my-2 p-2 md:p-4 my-Border my-Background"
                style={{
                    background: CommonSave_GlobalValStore.ThemeBackground,
                }}
            >
                <h2 className="text-xl font-semibold mb-4">Switch Component Demo</h2>
                <p data-description="true" className="my-6 text-base opacity-70">Using and customizing the color palette in Tailwind CSS projects.</p>

                {/* Basic */}
                <div className="p-6 space-y-4">
                    <h2 className="text-xl font-semibold">Basic</h2>
                    <div className='md:flex gap-4'>
                        <Switch
                            label="Controlled"
                            checked={controlledChecked}
                            onChange={setControlledChecked}
                            size="md"
                        />
                        <Switch label="Uncontrolled" checked={true} size="md" />
                    </div>
                </div>

                {/* Sizes */}
                <div className="p-6 space-y-4">
                    <h2 className="text-xl font-semibold">Sizes</h2>
                    <div className="md:flex items-center gap-4">
                        <Switch label="XS" size="xs" />
                        <Switch label="SM" size="sm" />
                        <Switch label="MD" size="md" />
                        <Switch label="LG" size="lg" />
                    </div>
                </div>

                {/* Custom Colors */}
                <div className="p-6 space-y-4">
                    <h2 className="text-xl font-semibold">Custom Colors</h2>
                    <div className="md:flex flex-wrap items-center gap-4">
                        <Switch label="Tailwind Blue" SwitchColor="blue" checked />
                        <Switch label="Tailwind Red" SwitchColor="red" checked />
                        <Switch label="Tailwind Green" SwitchColor="green" checked />
                        <Switch label="Tailwind Purple" SwitchColor="purple" checked />
                        <Switch label="Tailwind Yellow" SwitchColor="yellow" checked />
                        <Switch label="Tailwind Teal" SwitchColor="teal" checked />
                        <Switch label="Tailwind Orange" SwitchColor="orange" checked />
                        <Switch label="Tailwind Gray" SwitchColor="gray" checked />
                        <Switch label="Custom Hex" color="#395741" checked />
                    </div>
                </div>

                {/* Disabled */}
                <div className="p-6 space-y-4">
                    <h2 className="text-xl font-semibold">Disabled</h2>
                    <div className='md:flex gap-4'>
                        <Switch label="Disabled On" checked disabled />
                        <Switch label="Disabled Off" checked={false} disabled />
                    </div>
                </div>

                <div className="p-6 space-y-4">
                    <h2 className="text-xl font-semibold">Form</h2>
                    <div className='md:flex gap-4'>
                        <Switch
                            label="Notifications"
                            checked={formData.notifications}
                            onChange={handleFormChange('notifications')}
                        />
                        <Switch
                            label="Dark Mode"
                            checked={formData.darkMode}
                            onChange={handleFormChange('darkMode')}
                            size="lg"
                        />
                    </div>
                </div>

            </Card>
        </>
    );
};

export default SwitchList;
