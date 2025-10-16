import * as React from "react";
import {
  FaUsers,
  FaBriefcase,
  FaUserPlus,
  FaUserCheck,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import {Card,hexToRgba} from "anshu-reactui"
import { useAppSelector } from "../../../CustomeHooks/Hooks";

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  isPositive: boolean;
  icon: string;
  color: string;
}

const iconMap = {
  users: FaUsers,
  briefcase: FaBriefcase,
  "user-plus": FaUserPlus,
  "user-check": FaUserCheck,
  "GrUserWorker": GrUserWorker,
};

// bump opacity and brightness
const colorMap = {
  blue: "bg-blue-600/30",
  purple: "bg-purple-500/30",
  green: "bg-green-500/30",
  pink: "bg-pink-500/30",
};

export function StatCard({
  title,
  value,
  change,
  isPositive,
  icon,
  color,
}: StatCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] || FaUsers;
const colorClass = colorMap[color?.trim().toLowerCase() as keyof typeof colorMap] || colorMap.blue;
 const { CommonSave_GlobalValStore, CommonGlobalValStore } = useAppSelector((state) => state);
  const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9) || "white";

  return (
    <Card className="p-4 border my-Border bg-Background hover:shadow-lg transition-all duration-200 w-full relative overflow-hidden rounded-lg"
     style={{ background: CommonSave_GlobalValStore.ThemeBackground && bgColor }}>
      <div className="flex items-start justify-between">
        {/* Left Section */}
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-2">
            {title}
          </p>
          <h3 className="text-xl font-bold text-foreground mb-2">
            {value}
          </h3>

          <div className="flex items-center gap-1 text-xs">
            <span className="text-muted-foreground">This Month</span>
            <div className="flex items-center gap-1 ml-2">
              {isPositive ? (
                <FaArrowUp className="h-3 w-3 text-green-500" />
              ) : (
                <FaArrowDown className="h-3 w-3 text-red-500" />
              )}
              <span
                className={isPositive ? "text-green-500" : "text-red-500"}
              >
                {change}
              </span>
            </div>
          </div>
        </div>

        {/* Right Icon Section */}
       <div className={`absolute right-0 top-0 pl-2 pb-2 rounded-bl-md text-white ${colorClass}`}>
         <div className={`p-2 rounded-bl-md shadow-2xl ${colorClass}`} >
          <Icon className="h-5 w-5"  />
        </div>
       </div>
      </div>
    </Card>
  );
}
