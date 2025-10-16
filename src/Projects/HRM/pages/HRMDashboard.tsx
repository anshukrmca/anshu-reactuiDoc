import { Area, Bar, ComposedChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, RadarChart, PolarGrid, PolarRadiusAxis, PolarAngleAxis, Radar, Legend, Line, BarChart, Cell, Pie, PieChart } from "recharts";
import { StatCard } from "../Components/StatCard";
import { AttendanceData, ChartData, performanceData, recruitmentPipeline, statCards, UpComingEvents } from "../Data/DashboardData";
import DynamicIcon from "../../../Components/Icons/DynamicIcon";
import { Badge, hexToRgba, Card } from 'anshu-reactui'
import { useAppSelector } from "../../../CustomeHooks/Hooks";
import { EventLists } from "../Components/EventLists";
import { TodaysMeetings } from "../Components/TodaysMeetings";
import { EmployeeGrowthChart } from "../Components/EmployeeGrowthChart";
import { MonthlyRecruitmentChart } from "../Components/MonthlyRecruitmentChart";
import { EmployeeDirectory } from "../Components/EmployeeDirectory";
import { EmployeeDataTable } from "../Components/EmployeeDataTable";


const HRMDashboard = () => {
  const CommonSave_GlobalValStore = useAppSelector((state) => state.CommonSave_GlobalValStore);
  const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9) || "white";
  return (
    <>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 min-w-[300px]">
          {statCards.map((item) => (
            <StatCard
              key={item.id}
              title={item.title}
              value={item.value}
              change={item.change}
              isPositive={item.isPositive}
              icon={item.icon}
              color={item.color}
            />
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="w-full md:w-[40%] space-y-2 ">
            <Card
              className="w-full h-fit p-4 rounded-xl shadow-sm border my-Border my-Background"
              style={{ background: CommonSave_GlobalValStore.ThemeBackground && bgColor }}
            >
              <h3 className="font-semibold mb-3">Upcoming List</h3>
              <div className="space-y-2 my-2">
                {UpComingEvents.map((ev) => (
                  <div key={ev.id} className="flex items-start gap-2">
                    <div className="size-12 text-center rounded-md">
                      <div className="text-base font-bold text-teal-700">{ev.date.split(" ")[0]}</div>
                      <div className="text-xs opacity-90">{ev.date.split(" ")[1]}</div>
                    </div>
                    <div className="flex-1 border-l my-Border pl-2">
                      <div className="text-sm font-medium">{ev.title}</div>
                      <span className="text-xs mx-1">
                        {ev.time}
                      </span>
                      <Badge type="danger" className={`text-[10px] py-0.5 px-2 rounded-xl
                    ${ev.tag === "Birthday" ? 'bg-green-600' : ev.tag === "Holiday" ? 'bg-red-400' : 'bg-blue-400'}`}>{ev.tag}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <EventLists/>
          </div>
          {/* Performance by Category */}
          <Card
            className="w-full p-4 rounded-xl shadow-sm border my-Border my-Background"
            style={{ background: CommonSave_GlobalValStore.ThemeBackground && bgColor }}
          >
            <div className="flex justify-between items-center mb-3  p-4">
              <div>
                <h3 className="font-semibold">Performance By Category</h3>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Development, Management, Designing
                </div>
              </div>
            </div>

            {/* Performance Cards */}
            <div className="flex flex-col sm:flex-row justify-between gap-2 mb-4 border my-Border">
              {performanceData.map((d, i) => {
                return (
                  <div key={i} className="flex gap-2 p-2 md:p-4 rounded-lg items-center ">
                    <div className={`p-1 h-fit rounded-sm`}
                      style={{ background: d.color }}>
                      <DynamicIcon name={d.icon} size={20} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs md:text-sm">{d.category}</p>
                      <p className="text-base md:text-lg font-semibold">{d.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Chart */}
            <div className="my-8" style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <ComposedChart data={ChartData} margin={{ top: 10, right: 20, left: 20, bottom: 20 }}>
                  <defs>
                    <linearGradient id="colorDev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorDesign" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ec4899" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#ec4899" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                  {/* X Axis with label */}
                  <XAxis
                    dataKey="month" stroke="#9CA3AF"
                    label={{
                      value: "Months",
                      position: "insideBottom", offset: -5, style: { fill: "#9CA3AF", fontSize: 12 },
                    }}
                  />
                  {/* Y Axis with label */}
                  <YAxis
                    stroke="#9CA3AF" label={{
                      value: "Work Hours", angle: -90,
                      position: "insideLeft", offset: 10, style: { fill: "#9CA3AF", fontSize: 12 },
                    }}
                  />
                  <Tooltip />
                  <Area type="monotone" dataKey="Development" stroke="#7c3aed" fill="url(#colorDev)" />
                  <Area type="bump" dataKey="Designing" stroke="#ec4899" fill="url(#colorDesign)" />
                  <Bar dataKey="Management" fill="#60a5fa" barSize={20} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            <div className="my-4 flex justify-center items-center gap-6 mt-3 text-sm text-gray-700 dark:text-gray-300">
              {performanceData.map((d, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ background: d.color }} />
                  <span className="font-semibold" style={{ color: d.color }}>{d.category}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-4 md:flex gap-2">
          <Card
            className="w-full md:w-1/3 p-4 rounded-xl shadow-sm border my-Border my-Background"
            style={{ background: CommonSave_GlobalValStore.ThemeBackground && bgColor }}
          >
            <h3 className="font-semibold mb-3">Recruitment Pipeline</h3>
            <div className="space-y-3 text-sm">
              {recruitmentPipeline.map((d, i) => (
                <div key={i} className="flex justify-between">
                  <span className="flex gap-2 items-center">
                    <DynamicIcon name={d.icon} size={18} color={d.color} />
                    <span>{d.label}</span>
                  </span>
                  <span style={{ color: d.color }}>{d.value}</span>
                </div>
              ))}
            </div>
          </Card>
          <div className="space-y-4 w-full md:flex gap-2">
            <Card className="p-4 w-full rounded-xl shadow-sm border my-Border my-Background"
              style={{ background: CommonSave_GlobalValStore.ThemeBackground && bgColor }}
            >
              <h3 className="font-semibold mb-4">Source Overview</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Development" fill="#7c3aed" />
                  <Bar dataKey="Designing" fill="#ec4899" />
                  <Bar dataKey="Management" fill="teal" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
            <Card className="p-4 w-full rounded-xl shadow-sm border my-Border my-Background"
              style={{ background: CommonSave_GlobalValStore.ThemeBackground && bgColor }}>
              <h3 className="font-semibold mb-4">Source Overview</h3>
              <div style={{ width: "100%", height: 300 }}> {/* Increased height */}
                <ResponsiveContainer>
                  <RadarChart data={[
                    { name: 'LinkedIn', LinkedIn: 65, Twitter: 90, Chrome: 40, Indeed: 55, Glassdoor: 60 },
                    { name: 'Twitter', LinkedIn: 95, Twitter: 70, Chrome: 35, Indeed: 60, Glassdoor: 50 },
                    { name: 'Chrome', LinkedIn: 80, Twitter: 60, Chrome: 55, Indeed: 50, Glassdoor: 65 },
                    { name: 'Indeed', LinkedIn: 70, Twitter: 50, Chrome: 45, Indeed: 70, Glassdoor: 40 },
                    { name: 'Glassdoor', LinkedIn: 60, Twitter: 40, Chrome: 30, Indeed: 45, Glassdoor: 55 },
                  ]}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis angle={50} domain={[0, 100]} />
                    <Radar name="LinkedIn" dataKey="LinkedIn" stroke="#8884d8" fill="teal" fillOpacity={0.4} />
                    <Radar name="Twitter" dataKey="Twitter" stroke="#82ca9d" fill="darkred" fillOpacity={0.4} />
                    <Radar name="Chrome" dataKey="Chrome" stroke="#ffc658" fill="red" fillOpacity={0.4} />
                    <Radar name="Indeed" dataKey="Indeed" stroke="#f59e0b" fill="green" fillOpacity={0.4} />
                    <Radar name="Glassdoor" dataKey="Glassdoor" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.4} />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </div>
        <div className="space-y-4 md:flex gap-2">
          <Card className="w-full md:w-1/3 border my-Border p-4 rounded-xl shadow-sm my-Background"
            style={{ background: CommonSave_GlobalValStore.ThemeBackground && bgColor }}>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Attendance Distribution
            </h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={AttendanceData} cx="50%" cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${((percent as number) * 100).toFixed(0)}%`}
                    outerRadius={90} innerRadius={50}
                    dataKey="value"
                    style={{ fontSize: '12px' }}
                  >
                    {AttendanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} iconType="circle"
                    wrapperStyle={{ fontSize: 12, paddingTop: 10 }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t my-Border">
              {AttendanceData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm font-semibold">{item.name}</span>
                  </div>
                  <span className="text-sm">
                    {item.value.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </Card>
          <div className="space-y-4 w-full md:flex gap-2">
              <TodaysMeetings/>
              <EmployeeGrowthChart/>
          </div>
        </div>
        <MonthlyRecruitmentChart/>
        <EmployeeDirectory/>
        <EmployeeDataTable/>
      </div>

    </>
  );
};

export default HRMDashboard;
