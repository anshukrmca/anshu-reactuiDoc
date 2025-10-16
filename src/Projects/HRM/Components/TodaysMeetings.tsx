import {Card,Button,hexToRgba} from "anshu-reactui"
import { TodaysMeeting } from "../Data/DashboardData";
import { useAppSelector } from "../../../CustomeHooks/Hooks";

export function TodaysMeetings() {
    const CommonSave_GlobalValStore = useAppSelector((state) => state.CommonSave_GlobalValStore);
      const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9) || "white";
  return (
    <Card 
      className="w-full p-4 rounded-xl shadow-sm border my-Border my-Background"
        style={{ background: CommonSave_GlobalValStore.ThemeBackground && bgColor }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Today's Meetings</h3>
        <Button variant="link" size="sm" className="text-primary">
          View All
        </Button>
      </div>
      <div className="space-y-3">
        {TodaysMeeting.map((meeting) => (
          <div
            key={meeting.id}
            className="flex items-center justify-between p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl">
                {meeting.avatar}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{meeting.name}</p>
                <p className="text-xs text-muted-foreground">{meeting.time}</p>
              </div>
            </div>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Call Now
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}
