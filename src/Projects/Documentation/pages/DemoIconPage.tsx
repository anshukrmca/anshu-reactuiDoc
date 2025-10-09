import { Card, hexToRgba } from 'anshu-reactui/lib';
import { useAppSelector } from '../../CustomeHooks/Hooks';
import { CodeViewer } from '../../Components/CodeViewer/CodeViewer';
import DynamicIcon from '../../Components/Icons/DynamicIcon';

interface IconItem {
    name: string;
    size?: number;
    color?: string;
}

interface IconCategory {
    title: string;
    icons: IconItem[];
}

export const iconCategories: IconCategory[] = [
    // === AI Icons ===
    {
        title: "AI Icons (react-icons/ai)",
        icons: [
            { name: "AiFillHome", size: 24, color: "teal" },
            { name: "AiOutlineUser", size: 24, color: "blue" },
            { name: "AiFillAlert", size: 24, color: "yellow" },
            { name: "AiOutlineMail", size: 24, color: "red" },
            { name: "AiFillStar", size: 24, color: "green" },
            { name: "AiOutlineCamera", size: 24, color: "purple" },
            { name: "AiFillHeart", size: 24, color: "pink" },
            { name: "AiOutlineSetting", size: 24, color: "indigo" },
            { name: "AiFillLock", size: 24, color: "orange" },
            { name: "AiOutlineShop", size: 24, color: "gray" },
        ],
    },
    // === BS Icons ===
    {
        title: "BS Icons (react-icons/bs)",
        icons: [
            { name: "BsFillAlarmFill", size: 22, color: "teal" },
            { name: "BsFillBagFill", size: 22, color: "yellow" },
            { name: "BsFillBellFill", size: 22, color: "blue" },
            { name: "BsFillCalendarFill", size: 22, color: "green" },
            { name: "BsFillCameraFill", size: 22, color: "purple" },
            { name: "BsFillChatFill", size: 22, color: "pink" },
            { name: "BsFillCloudFill", size: 22, color: "indigo" },
            { name: "BsFillCompassFill", size: 22, color: "red" },
            { name: "BsFillCupFill", size: 22, color: "orange" },
            { name: "BsFillEmojiSmileFill", size: 22, color: "gray" },
        ],
    },
    // === BI Icons ===
    {
        title: "BI Icons (react-icons/bi)",
        icons: [
            { name: "BiAlarm", size: 20, color: "teal" },
            { name: "BiArch", size: 20, color: "yellow" },
            { name: "BiAtom", size: 20, color: "blue" },
            { name: "BiBadge", size: 20, color: "green" },
            { name: "BiBath", size: 20, color: "purple" },
            { name: "BiBook", size: 20, color: "pink" },
            { name: "BiBug", size: 20, color: "indigo" },
            { name: "BiBus", size: 20, color: "red" },
            { name: "BiCake", size: 20, color: "orange" },
            { name: "BiCamera", size: 20, color: "gray" },
        ],
    },
    // === CG Icons ===
    {
        title: "CG Icons (react-icons/cg)",
        icons: [
            { name: "CgAddR", size: 22, color: "teal" },
            { name: "CgArrowTopLeftR", size: 22, color: "blue" },
            { name: "CgCalendarDates", size: 22, color: "yellow" },
            { name: "CgChevronDoubleDown", size: 22, color: "green" },
            { name: "CgClose", size: 22, color: "red" },
            { name: "CgCopy", size: 22, color: "purple" },
            { name: "CgDanger", size: 22, color: "pink" },
            { name: "CgChevronLeft", size: 22, color: "indigo" },
            { name: "CgChevronRight", size: 22, color: "orange" },
            { name: "CgSpinner", size: 22, color: "gray" },
        ],
    },
    // === DI Icons ===
    {
        title: "DI Icons (react-icons/di)",
        icons: [
            { name: "DiAndroid", size: 24, color: "green" },
            { name: "DiApple", size: 24, color: "gray" },
            { name: "DiCode", size: 24, color: "teal" },
            { name: "DiCss3", size: 24, color: "blue" },
            { name: "DiDatabase", size: 24, color: "yellow" },
            { name: "DiGit", size: 24, color: "red" },
            { name: "DiHtml5", size: 24, color: "orange" },
            { name: "DiLinux", size: 24, color: "indigo" },
            { name: "DiReact", size: 24, color: "cyan" },
            { name: "DiZend", size: 24, color: "purple" },
        ],
    },
    // === FI Icons ===
    {
        title: "FI Icons (react-icons/fi)",
        icons: [
            { name: "FiActivity", size: 20, color: "teal" },
            { name: "FiAirplay", size: 20, color: "blue" },
            { name: "FiAlertCircle", size: 20, color: "red" },
            { name: "FiArchive", size: 20, color: "yellow" },
            { name: "FiArrowDown", size: 20, color: "green" },
            { name: "FiArrowLeft", size: 20, color: "purple" },
            { name: "FiArrowRight", size: 20, color: "pink" },
            { name: "FiArrowUp", size: 20, color: "indigo" },
            { name: "FiAtSign", size: 20, color: "orange" },
            { name: "FiBell", size: 20, color: "gray" },
        ],
    },
    // === FC Icons ===
    {
        title: "FC Icons (react-icons/fc)",
        icons: [
            { name: "FcAbout", size: 22 },
            { name: "FcAdvance", size: 22 },
            { name: "FcAcceptDatabase", size: 22 },
            { name: "FcAlarmClock", size: 22 },
            { name: "FcApproval", size: 22 },
            { name: "FcAssistant", size: 22 },
            { name: "FcBusinessman", size: 22 },
            { name: "FcBusinesswoman", size: 22 },
            { name: "FcBullish", size: 22 },
            { name: "FcCheckmark", size: 22 },
        ],
    },
    // === FA Icons ===
    {
        title: "FA Icons (react-icons/fa)",
        icons: [
            { name: "FaBook", size: 20, color: "teal" },
            { name: "FaBeer", size: 20, color: "blue" },
            { name: "FaCamera", size: 20, color: "yellow" },
            { name: "FaCar", size: 20, color: "red" },
            { name: "FaClock", size: 20, color: "green" },
            { name: "FaCloud", size: 20, color: "purple" },
            { name: "FaCode", size: 20, color: "pink" },
            { name: "FaCog", size: 20, color: "indigo" },
            { name: "FaCoffee", size: 20, color: "orange" },
            { name: "FaCrown", size: 20, color: "gray" },
        ],
    },
    // === GI Icons ===
    {
        title: "GI Icons (react-icons/gi)",
        icons: [
            { name: "GiAnchor", size: 22, color: "teal" },
            { name: "GiAirplane", size: 22, color: "blue" },
            { name: "GiBalloon", size: 22, color: "yellow" },
            { name: "GiBee", size: 22, color: "red" },
            { name: "GiBookCover", size: 22, color: "green" },
            { name: "GiCastle", size: 22, color: "purple" },
            { name: "GiCat", size: 22, color: "pink" },
            { name: "GiChessKnight", size: 22, color: "indigo" },
            { name: "GiChessRook", size: 22, color: "orange" },
            { name: "GiCoffin", size: 22, color: "gray" },
        ],
    },
    // === Go Icons ===
    {
        title: "GO Icons (react-icons/go)",
        icons: [
            { name: "GoAlert", size: 22, color: "teal" },
            { name: "GoArchive", size: 22, color: "blue" },
            { name: "GoBeaker", size: 22, color: "yellow" },
            { name: "GoBell", size: 22, color: "green" },
            { name: "GoBook", size: 22, color: "red" },
            { name: "GoBriefcase", size: 22, color: "purple" },
            { name: "GoBrowser", size: 22, color: "pink" },
            { name: "GoCheck", size: 22, color: "indigo" },
            { name: "GoChevronDown", size: 22, color: "orange" },
            { name: "GoChevronUp", size: 22, color: "gray" },
        ],
    },
    // === GR Icons ===
    {
        title: "GR Icons (react-icons/gr)",
        icons: [
            { name: "GrAdd", size: 22, color: "teal" },
            { name: "GrAlarm", size: 22, color: "blue" },
            { name: "GrAnalytics", size: 22, color: "yellow" },
            { name: "GrApple", size: 22, color: "green" },
            { name: "GrAttachment", size: 22, color: "red" },
            { name: "GrBadge", size: 22, color: "purple" },
            { name: "GrBasket", size: 22, color: "pink" },
            { name: "GrBook", size: 22, color: "indigo" },
            { name: "GrBriefcase", size: 22, color: "orange" },
            { name: "GrCalendar", size: 22, color: "gray" },
        ],
    },
    // === HI Icons ===
    {
        title: "HI Icons (react-icons/hi)",
        icons: [
            { name: "HiAcademicCap", size: 22, color: "teal" },
            { name: "HiAdjustments", size: 22, color: "blue" },
            { name: "HiArchive", size: 22, color: "yellow" },
            { name: "HiArrowCircleDown", size: 22, color: "green" },
            { name: "HiArrowCircleLeft", size: 22, color: "red" },
            { name: "HiArrowCircleRight", size: 22, color: "purple" },
            { name: "HiArrowCircleUp", size: 22, color: "pink" },
            { name: "HiAtSymbol", size: 22, color: "indigo" },
            { name: "HiBackspace", size: 22, color: "orange" },
            { name: "HiBadgeCheck", size: 22, color: "gray" },
        ],
    },
];


const DemoIconPage = () => {
    const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
    const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);

    const dynamicIconCode = `
1 ) Install the npm i react-icons

import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as CgIcons from "react-icons/cg";
import * as DiIcons from "react-icons/di";
import * as FiIcons from "react-icons/fi";
import * as FcIcons from "react-icons/fc";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as GiIcons from "react-icons/gi";
import * as GoIcons from "react-icons/go";
import * as GrIcons from "react-icons/gr";
import * as HiIcons from "react-icons/hi";
import * as Hi2Icons from "react-icons/hi2";
import * as ImIcons from "react-icons/im";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as MdIcons from "react-icons/md";
import * as PiIcons from "react-icons/pi";
import * as RiIcons from "react-icons/ri";
import * as RxIcons from "react-icons/rx";
import * as SiIcons from "react-icons/si";
import * as SlIcons from "react-icons/sl";
import * as TbIcons from "react-icons/tb";
import * as TiIcons from "react-icons/ti";
import * as TfiIcons from "react-icons/tfi";
import * as VscIcons from "react-icons/vsc";
import * as WiIcons from "react-icons/wi";
import * as LuIcons from "react-icons/lu";
import * as CiIcons from "react-icons/ci";
import * as LiaIcons from "react-icons/lia";

const iconPacks = {
  ...AiIcons,
  ...BsIcons,
  ...BiIcons,
  ...CgIcons,
  ...DiIcons,
  ...FiIcons,
  ...FcIcons,
  ...FaIcons,
  ...Fa6Icons,
  ...GiIcons,
  ...GoIcons,
  ...GrIcons,
  ...HiIcons,
  ...Hi2Icons,
  ...ImIcons,
  ...IoIcons,
  ...Io5Icons,
  ...MdIcons,
  ...PiIcons,
  ...CiIcons,
  ...RiIcons,
  ...RxIcons,
  ...SiIcons,
  ...SlIcons,
  ...TbIcons,
  ...TiIcons,
  ...TfiIcons,
  ...VscIcons,
  ...WiIcons,
  ...LuIcons,
  ...LiaIcons,
};

interface DynamicIconProps {
  name: string;
  color?: string;
  size?: number;
  className?: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({
  name,
  color = "",        // can be Tailwind class or hex string
  size = 15,
  className,
}) => {
  const Icon = iconPacks[name as keyof typeof iconPacks] as React.ComponentType<{
    color?: string;
    size?: number;
    className?: string;
  }>;

  if (!Icon) {
    return (
      <span className={className} style={{ color: "red" }}>
        ⚠️ Icon "{name}" not found
      </span>
    );
  }

  // Check if the color is a Tailwind class (starts with "text-")
  const isTailwind = color.startsWith("text-");

  return (
    <span className={className}>
      <Icon
        size={size}
        color={isTailwind ? undefined : color} // hex/string color
        className={isTailwind ? color : ""}   // Tailwind class
      />
    </span>
  );
};

export default DynamicIcon;
`;

    return (
        <Card
            className="my-4 items-center shadow-none hover:shadow-none overflow-hidden my-Border p-4 my-Background"
            style={{
                background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
            }}


        >
            <div className="mb-4">DemoIconPage</div>


            {iconCategories.map((cat) => (
                <div key={cat.title}>
                    <h3 className="my-3 text-xl font-semibold">{cat.title}</h3>
                    <Card
                        className="my-4 items-center shadow-none hover:shadow-none overflow-hidden my-Border p-4 my-Background"
                        style={{ background: CommonSave_GlobalValStore.ThemeBackground && bgColor }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                            {cat.icons.map((icon) => (
                                <div key={icon.name} className="flex flex-col items-start">
                                    <div className="flex gap-4 items-center">
                                        <span className="text-sm opacity-90">Icon Name: {icon.name}</span>
                                        <DynamicIcon {...icon} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CodeViewer showing all 10 icons at once */}
                        <CodeViewer
                            code={
                                `You can add ClassName for customizing the size and color more like className='cursor-pointer text-red-500 ...' \n\n` +
                                cat.icons
                                    .map(
                                        (icon) =>
                                            `<DynamicIcon name="${icon.name}" size={${icon.size}} color="${icon.color}" className="your-class-name" />`
                                    )
                                    .join("\n")
                            }
                        />

                    </Card>
                </div>
            ))}

            {/* CodeViewer to show how to use DynamicIcon */}
            <CodeViewer code={dynamicIconCode} />
        </Card>
    );
};

export default DemoIconPage;
