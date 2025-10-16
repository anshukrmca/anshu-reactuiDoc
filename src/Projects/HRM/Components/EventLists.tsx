import { Card, Button, Badge, hexToRgba } from "anshu-reactui"
import DynamicIcon from "../../../Components/Icons/DynamicIcon";
import { EventList } from "../Data/DashboardData";
import { useAppSelector } from "../../../CustomeHooks/Hooks";

export function EventLists() {
  const CommonSave_GlobalValStore = useAppSelector((state) => state.CommonSave_GlobalValStore);
  const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9) || "white";
  return (
    <>
      <Card
        className="w-full p-4 rounded-xl shadow-sm border my-Border my-Background"
        style={{ background: CommonSave_GlobalValStore.ThemeBackground && bgColor }}
      >
        <h3 className="font-semibold mb-3">Events List</h3>
        <div className="space-y-2 my-2">
          {EventList.map((ev) => (
            <div key={ev.id} className="flex items-center  gap-2">
              <div className="p-2.5 rounded-full"
                style={{ background: hexToRgba(ev.badgeColor, 0.1), border: `1px solid ${ev.badgeColor}` }}
              >
                <DynamicIcon name={ev.icon} size={16} color={ev.badgeColor} />
              </div>
              <div className="w-full flex justify-between border-b my-Border pb-2">
                <div>
                  <div className="text-sm font-bold">{ev.title}</div>
                  <div className="text-[10px] opacity-90">{ev.date}</div>
                </div>
                <span>
                  <Badge type="danger" className={`text-[10px] py-0.5 px-2 rounded-xl bg-violet-400`}> {ev.badge}</Badge>
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
