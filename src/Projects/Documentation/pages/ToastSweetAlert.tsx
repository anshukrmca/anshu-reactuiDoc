import { useAppSelector } from '../../../CustomeHooks/Hooks';
import { hexToRgba, TabCard } from 'anshu-reactui';
import DemoSweetAlert from '../Components/DemoSweetAlert';
import DemoToast from '../Components/DemoToast';

type Props = {}

function ToastSweetAlert({ }: Props) {
  const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
  const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);
  return (
    <>
      <TabCard
        className="my-4 items-center shadow-none hover:shadow-none overflow-hidden p-2"
        activeClass="btn-animate btn-animate-success px-6 py-1 border-1"
        inactiveClass="btn-animate btn-animate-info border-1  px-6 py-1"
        style={{
          background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
        }}
        tabs={[
          { id: "1", label: "Toast", content: (<DemoToast />) },
          { id: "2", label: "Sweet Alert", content: (<DemoSweetAlert />) },
        ]}
      />

    </>
  )
}

export default ToastSweetAlert