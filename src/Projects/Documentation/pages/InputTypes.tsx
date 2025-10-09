import { useAppSelector } from '../../../CustomeHooks/Hooks';
import { hexToRgba, TabCard } from 'anshu-reactui';
import DemoInputPage from '../Components/DemoInputPage';
import DemoRadio from './DemoRadio';
import DemoCheckboxPage from '../Components/DemoCheckboxPage';
import DemoDropdownPage from '../Components/DemoDropdownPage';
import FormFullTest from '../Components/FormFullTest';
import DemoDatePicker from '../Components/DemoDatePicker';

type Props = {}

export default function InputTypes({ }: Props) {
    const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
    const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);
    return (
        <>
            <TabCard
                className="my-4 items-center shadow-none hover:shadow-none overflow-hidden my-Border p-4 my-Background"
                activeClass="btn-animate btn-animate-success px-6 py-1 border-1"
                inactiveClass="btn-animate btn-animate-info border-1  px-6 py-1"
                style={{
                    background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
                }}
                tabs={[
                    { id: "1", label: "Input", content: (<DemoInputPage />) },
                    { id: "2", label: "Radio", content: (<DemoRadio />) },
                    { id: "3", label: "CheckBox", content: (<DemoCheckboxPage />) },
                    { id: "4", label: "Dropdown", content: (<DemoDropdownPage />) },
                    { id: "5", label: "Date Picker", content: (<DemoDatePicker />) },
                    { id: "6", label: "Form", content: (<FormFullTest />) },


                ]}
            />
        </>
    )
}