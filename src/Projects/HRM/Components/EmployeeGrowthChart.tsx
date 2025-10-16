import { Card, hexToRgba } from "anshu-reactui";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { useAppSelector } from "../../../CustomeHooks/Hooks";

const data = [
    { month: "Jan", current: 1850, previous: 1600, target: 2000 },
    { month: "Feb", current: 1920, previous: 1680, target: 2000 },
    { month: "Mar", current: 2050, previous: 1750, target: 2000 },
    { month: "Apr", current: 2180, previous: 1820, target: 2200 },
    { month: "May", current: 2280, previous: 1900, target: 2200 },
    { month: "Jun", current: 2450, previous: 2050, target: 2400 },
    { month: "Jul", current: 2520, previous: 2150, target: 2400 },
    { month: "Aug", current: 2680, previous: 2280, target: 2600 },
    { month: "Sep", current: 2850, previous: 2420, target: 2800 },
    { month: "Oct", current: 2920, previous: 2550, target: 2800 },
    { month: "Nov", current: 3080, previous: 2680, target: 3000 },
    { month: "Dec", current: 3240, previous: 2800, target: 3200 },
];

export function EmployeeGrowthChart() {
    const CommonSave_GlobalValStore = useAppSelector((state) => state.CommonSave_GlobalValStore);
    const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9) || "white";
    return (
        <Card className="w-full p-4 rounded-xl shadow-sm border my-Border my-Background"
            style={{ background: CommonSave_GlobalValStore.ThemeBackground && bgColor }}
        >
            <h3 className="text-lg font-semibold text-foreground mb-6">
                Employee Growth Trend
            </h3>
            <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                        <XAxis
                            dataKey="month"
                            stroke={CommonSave_GlobalValStore?.ThemeColorMode==="dark" ? "white":"black"}
                            fontSize={12}
                            tickLine={false}
                        />
                        <YAxis
                            fontSize={12}
                            stroke={CommonSave_GlobalValStore?.ThemeColorMode==="dark" ? "white":"black"}
                            tickLine={false}
                            // axisLine={false}
                        />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="current"
                            stroke="teal"
                            strokeWidth={3}
                            dot={{ r: 4 }}
                            name="Current Year"
                        />
                        <Line
                            type="monotone"
                            dataKey="previous"
                            stroke="green"
                            strokeWidth={2}
                            strokeDasharray="5 5"
                            dot={{ r: 3 }}
                            name="Previous Year"
                        />
                        <Line
                            type="monotone"
                            dataKey="target"
                            stroke="red"
                            strokeWidth={2}
                            strokeDasharray="3 3"
                            dot={{ r: 3 }}
                            name="Target"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}
