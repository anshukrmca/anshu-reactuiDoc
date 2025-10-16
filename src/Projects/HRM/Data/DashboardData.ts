// src/Data.ts

// -------------------- TYPES --------------------
export type StatCard = {
  id: string;
  title: string;
  value: string | number;
  change: string;
  isPositive: boolean;
  icon: string;
  color: "blue" | "purple" | "green" | "pink";
};

export type ChartPoint = {
  month: string;
  Development: number;
  Management: number;
  Designing: number;
};

export interface PerformanceData {
  category: string;
  value: number;
  color: string;
  icon: string;
}

export interface EventItem {
  id: string;
  date: string; // "02 Mon"
  title: string;
  time?: string;
  tag?: string;
}

export interface Employee {
  id: string;
  employeeId: string;
  name: string;
  position: string;
  department: string;
  email: string;
  status: "Active" | "On Leave" | "Resigned";
  statusColor: string;
  contact: string;
  salary: string;
  avatar: string;
}

export interface SourceData {
  name: string;
  value: number;
  color: string;
}

export interface Meeting {
  id: string;
  name: string;
  time: string;
  avatar: string;
}

export interface PipelineStatus {
  id: string;
  label: string;
  value: number;
  icon: string;
  color: string;
}

export interface EventListItem {
  id: string;
  title: string;
  date: string;
  type: string;
  badge: string;
  badgeColor: string;
  icon: string;
}

// -------------------- DATA --------------------
export const statCards: StatCard[] = [
  { id: "total-employees", title: "Total Employees", value: "23,768", change: "2.45%", isPositive: true, icon: "GrUserWorker", color: "blue" },
  { id: "jobs-applied", title: "Total Jobs Applied", value: "1,673", change: "0.62%", isPositive: false, icon: "briefcase", color: "purple" },
  { id: "new-employees", title: "New Employees", value: "526", change: "3.70%", isPositive: true, icon: "user-plus", color: "green" },
  { id: "newly-recruited", title: "Newly Recruited", value: "5,553", change: "3.54%", isPositive: true, icon: "user-check", color: "pink" },
];

export const performanceData: PerformanceData[] = [
  { category: "Development", value: 64241, color: "#7c3aed", icon: "RiStackLine" },
  { category: "Management", value: 1543, color: "#60a5fa", icon: "BsRocketTakeoff" },
  { category: "Designing", value: 3848, color: "#ec4899", icon: "IoIosCheckboxOutline" },
];

export const ChartData: ChartPoint[] = [
  { month: "Jan", Development: 40, Management: 20, Designing: 10 },
  { month: "Feb", Development: 80, Management: 40, Designing: 60 },
  { month: "Mar", Development: 30, Management: 70, Designing: 20 },
  { month: "Apr", Development: 90, Management: 45, Designing: 30 },
  { month: "May", Development: 50, Management: 80, Designing: 60 },
  { month: "Jun", Development: 70, Management: 55, Designing: 40 },
  { month: "Jul", Development: 60, Management: 20, Designing: 70 },
  { month: "Aug", Development: 75, Management: 45, Designing: 50 },
  { month: "Sep", Development: 85, Management: 65, Designing: 70 },
  { month: "Oct", Development: 95, Management: 40, Designing: 90 },
  { month: "Nov", Development: 60, Management: 90, Designing: 55 },
  { month: "Dec", Development: 100, Management: 70, Designing: 80 },
];

export const Employee: Employee[] = [
  { id: "1", employeeId: "#emp23520", name: "Richard Dom", position: "Team Leader", department: "Backend", email: "richard16@demo.com", status: "Active", statusColor: "green", contact: "+0987654321", salary: "$15,000", avatar: "👨‍💼" },
  { id: "2", employeeId: "#emp23521", name: "Kakashra Sri", position: "Web Developer", department: "Front End", email: "kakashra97@demo.com", status: "Active", statusColor: "green", contact: "+0986548761", salary: "$20,000", avatar: "👩‍💻" },
  { id: "3", employeeId: "#emp23522", name: "Nikki Jey", position: "Project Manager", department: "HR", email: "nikki654@demo.com", status: "On Leave", statusColor: "blue", contact: "+0986548787", salary: "$25,000", avatar: "👨‍💼" },
  { id: "4", employeeId: "#emp23523", name: "Sasukey Ahuhi", position: "Project Manager", department: "HR", email: "sasukey98@demo.com", status: "Active", statusColor: "green", contact: "+0986548788", salary: "$30,000", avatar: "👨‍💼" },
  { id: "5", employeeId: "#emp23524", name: "Xiong Yu", position: "UI Developer", department: "Engineering", email: "xiongu97@demo.com", status: "Active", statusColor: "green", contact: "+0986548988", salary: "$35,000", avatar: "👨‍💻" },
  { id: "6", employeeId: "#emp23525", name: "Arifa Zed", position: "Team Member", department: "IT", email: "arifa432@demo.com", status: "Resigned", statusColor: "red", contact: "+0986548985", salary: "$40,000", avatar: "👩‍💼" },
  { id: "7", employeeId: "#emp23526", name: "Jennifer Tab", position: "Project Manager", department: "Front End", email: "jennifer543@demo.com", status: "Active", statusColor: "green", contact: "+0986548997", salary: "$45,000", avatar: "👩‍💼" },
];

export const recruitmentPipeline: PipelineStatus[] = [
  { id: "1", label: "Total Applications", value: 2350, icon: "IoDocumentTextOutline", color: "teal" },
  { id: "2", label: "Recruited", value: 780, icon: "FaUserCheck", color: "purple" },
  { id: "3", label: "Short Listed", value: 650, icon: "CiBoxList", color: "green" },
  { id: "4", label: "Rejected", value: 550, icon: "RxCrossCircled", color: "red" },
  { id: "5", label: "Blocked", value: 310, icon: "MdBlock", color: "red" },
  { id: "6", label: "Interviewed", value: 220, icon: "BiSolidSelectMultiple", color: "green" },
];

export const UpComingEvents: EventItem[] = [
  { id: 'e1', date: '02 Mon', title: 'Announcement - Ipsum Est Diam Eirmod', time: '10:00 AM', tag: 'Announcement' },
  { id: 'e2', date: '15 Sun', title: 'National holiday - Vero Jayanti', tag: 'Holiday' },
  { id: 'e3', date: '23 Mon', title: "John pup birthday - Team Member", time: '09:00 AM', tag: 'Birthday' },
  { id: 'e4', date: '31 Tue', title: 'National Holiday - Dolore Ipsum', tag: 'Holiday' }
];

export const EventList: EventListItem[] = [
  { id: "1", title: "Office Anniversary", date: "19, Aug 2024 - Thursday", type: "Party", badge: "Full Days", badgeColor: "teal", icon: "FaRegCalendarAlt" },
  { id: "2", title: "Holi", date: "15, Mar 2024 - Sunday", type: "Festival", badge: "Festival", badgeColor: "purple", icon: "FaRegCalendarAlt" },
  { id: "3", title: "Good Friday", date: "29, Mar 2024 - Friday", type: "Holiday", badge: "Festival", badgeColor: "green", icon: "FaPlus" },
  { id: "4", title: "Independence Day", date: "15, Aug 2024 - Thursday", type: "Holiday", badge: "Public Holiday", badgeColor: "orange", icon: "CiFlag1" },
  { id: "5", title: "Christmas", date: "25, Dec 2024 - Friday", type: "Holiday", badge: "Public Holiday", badgeColor: "red", icon: "GoGift" },
  { id: "6", title: "Office Tour", date: "12, Jan 2024 - 16 Jan 2024", type: "Trip", badge: "4 Days", badgeColor: "lime", icon: "BiSolidShoppingBags" },
];

export const SourceData: SourceData[] = [
  { name: "LinkedIn", value: 30, color: "#3b82f6" },
  { name: "Twitter", value: 25, color: "#1da1f2" },
  { name: "Chrome", value: 20, color: "#10b981" },
  { name: "Indeed", value: 15, color: "#f59e0b" },
  { name: "Glassdoor", value: 10, color: "#8b5cf6" },
];

export const TodaysMeeting: Meeting[] = [
  { id: "1", name: "Anurag Batiya", time: "03 May/11:00am-10...", avatar: "👨‍💼" },
  { id: "2", name: "Team Meeting", time: "04 May/11:00am-10...", avatar: "👥" },
  { id: "3", name: "Client Meeting", time: "04 May/11:00am-10...", avatar: "🤝" },
  { id: "4", name: "Client Meeting", time: "04 May/11:00am-10...", avatar: "💼" },
  { id: "5", name: "Team Meeting", time: "04 May/11:00am-10...", avatar: "👨‍💻" },
  { id: "6", name: "Project Meeting", time: "04 May/11:00am-10...", avatar: "📊" },
];

export const AttendanceData = [
  { name: "Present", value: 18500, color: "#16a249" },
  { name: "Absent", value: 2100, color: "red" },
  { name: "On Leave", value: 1850, color: "#f97015" },
  { name: "Late", value: 1318, color: "#CC52E5" },
];

