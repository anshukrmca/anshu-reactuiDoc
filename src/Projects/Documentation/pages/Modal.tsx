import { useAppSelector } from '../../../CustomeHooks/Hooks';
import { hexToRgba, TabCard } from 'anshu-reactui';
import DemoModal from '../Components/DemoModal';
import DemoModalStackPage from '../Components/DemoModalStack';

type Props = {}

export default function Modal({ }: Props) {
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
                    { id: "1", label: "Modal Stack", content: (<DemoModalStackPage />) },
                    { id: "2", label: "Modal", content: (<DemoModal />) },
                ]}
            />
        </>
    )
}