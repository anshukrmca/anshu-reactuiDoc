import { Card, hexToRgba } from "anshu-reactui";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useAppSelector } from "../../../CustomeHooks/Hooks";

const data = [
  { month: "Jan", recruited: 65, interviewed: 120, applied: 180 },
  { month: "Feb", recruited: 78, interviewed: 135, applied: 195 },
  { month: "Mar", recruited: 82, interviewed: 145, applied: 210 },
  { month: "Apr", recruited: 90, interviewed: 160, applied: 230 },
  { month: "May", recruited: 95, interviewed: 170, applied: 245 },
  { month: "Jun", recruited: 105, interviewed: 185, applied: 260 },
  { month: "Jul", recruited: 98, interviewed: 175, applied: 250 },
  { month: "Aug", recruited: 112, interviewed: 195, applied: 275 },
  { month: "Sep", recruited: 120, interviewed: 210, applied: 290 },
  { month: "Oct", recruited: 115, interviewed: 200, applied: 280 },
  { month: "Nov", recruited: 128, interviewed: 220, applied: 305 },
  { month: "Dec", recruited: 135, interviewed: 235, applied: 320 },
];

export function MonthlyRecruitmentChart() {
  const CommonSave_GlobalValStore = useAppSelector((state) => state.CommonSave_GlobalValStore);
  const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9) || "white";
  const isDark = CommonSave_GlobalValStore?.ThemeColorMode === "dark";

  return (
    <Card
      className="w-full p-4 rounded-xl shadow-sm border my-Border my-Background"
      style={{ background: CommonSave_GlobalValStore.ThemeBackground && bgColor }}
    >
      <h3 className="text-lg font-semibold text-foreground mb-6">
        Monthly Recruitment Metrics
      </h3>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 10, right: 20, left: 10, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(var(--border))"
              opacity={0.3}
            />
            <XAxis
              dataKey="month"
              stroke={isDark ? "white" : "black"}
              fontSize={12}
              tickLine={false}
              interval={0}
              dy={10}
            />
            <YAxis
              stroke={isDark ? "white" : "black"}
              fontSize={12}
              tickLine={false}
              axisLine={true}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(50, 50, 50, 0.8)",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                color: "white",
              }}
            />
            <Legend />
            <Bar
              dataKey="applied"
              fill="#8b5cf6"
              radius={[4, 4, 0, 0]}
              name="Applied"
              barSize={20}
            />
            <Bar
              dataKey="interviewed"
              fill="#14b8a6"
              radius={[4, 4, 0, 0]}
              name="Interviewed"
              barSize={20}
            />
            <Line
              type="monotone"
              dataKey="recruited"
              stroke="#f59e0b"
              strokeWidth={3}
              dot={{ r: 4 }}
              name="Recruited"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
