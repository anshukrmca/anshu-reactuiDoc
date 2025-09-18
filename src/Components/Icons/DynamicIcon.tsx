// src/components/DynamicIcon.tsx
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
  /** Name of the icon (e.g., "AiFillHome") */
  name: string;
  /** Icon color */
  color?: string;
  /** Icon size in pixels */
  size?: number;
  /** Optional wrapper className (Tailwind or custom) */
  className?: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({
  name,
  color = "black",
  size = 15,
  className,
}) => {
  // Lookup the icon component
  const Icon = iconPacks[name as keyof typeof iconPacks] as React.ComponentType<{
    color?: string;
    size?: number;
  }>;

  if (!Icon) {
    return (
      <span className={className} style={{ color: "red" }}>
        ⚠️ Icon "{name}" not found
      </span>
    );
  }

  // Wrap in span to safely apply className
  return (
    <span className={className}>
      <Icon color={color} size={size} />
    </span>
  );
};

export default DynamicIcon;
