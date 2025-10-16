import { useAppSelector } from '../../../CustomeHooks/Hooks';
import { hexToRgba, TabCard,Loading } from 'anshu-reactui';
import { lazy, Suspense } from 'react';

const DemoInputPage = lazy(() => import("../Components/DemoInputPage"));
const DemoRadio = lazy(() => import("./DemoRadio"));
const DemoCheckboxPage = lazy(() => import("../Components/DemoCheckboxPage"));
const DemoDropdownPage = lazy(() => import("../Components/DemoDropdownPage"));
const FormFullTest = lazy(() => import("../Components/FormFullTest"));
const DemoDatePicker = lazy(() => import("../Components/DemoDatePicker"));


export default function InputTypes() {
    const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
    const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);
    return (
        <>
            <TabCard
                className="my-4 items-center shadow-none hover:shadow-none overflow-hidden border my-Border p-4 my-Background"
                activeClass="btn-animate btn-animate-success px-6 py-1 border-1"
                inactiveClass="btn-animate btn-animate-info border-1  px-6 py-1"
                style={{
                    background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
                }}
                tabs={[
                    { id: "1", label: "Input", content: (<Suspense fallback={<Loading />}><DemoInputPage /></Suspense>) },
                    { id: "2", label: "Radio", content: (<Suspense fallback={<Loading />}><DemoRadio /></Suspense>) },
                    { id: "3", label: "CheckBox", content: (<Suspense fallback={<Loading />}><DemoCheckboxPage /></Suspense>) },
                    { id: "4", label: "Dropdown", content: (<Suspense fallback={<Loading />}><DemoDropdownPage /></Suspense>) },
                    { id: "5", label: "Date Picker", content: (<Suspense fallback={<Loading />}><DemoDatePicker /></Suspense>) },
                    { id: "6", label: "Form", content: (<Suspense fallback={<Loading />}><FormFullTest /></Suspense>) },


                ]}
            />
        </>
    )
}