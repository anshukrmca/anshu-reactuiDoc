import DynamicIcon from "../Components/Icons/DynamicIcon";
import type { CategoryNode, MenuNode, SettingGroup } from "./MenuTypes";

export const DocMenuCategories: CategoryNode[] = [
  { id: 1, label: "", lebel1id: ['1', "2"] },
  { id: 2, label: "Getting started", lebel1id: ['3'] },
  { id: 3, label: "Core concepts", lebel1id: ['4', '5', '6', '7'] },
  { id: 4, label: "Layout", lebel1id: ['8', '9', '10',] },
  { id: 5, label: "Flexbox & Grid", lebel1id: [] },
  { id: 6, label: "Spacing", lebel1id: [] },
  { id: 7, label: "Sizing", lebel1id: [] },
  { id: 8, label: "Typography", lebel1id: [] },
];

export const DocSidebarMenuData: MenuNode[] = [
  {
    id: 1, icon: <DynamicIcon name="FaBookOpen" />, label: "Documentation", link: '/doc'
  },
  {
    id: 2, icon: <DynamicIcon name="BsStack" />, label: "Components", link: '/components'
  },
  {
    id: 3, icon: <DynamicIcon name="GoDot" />, label: "Installation", link: '/Installation',
  },
  {
    id: 4, icon: <DynamicIcon name="GoDot" />, label: "Colors", link: '/colors'
  },
  {
    id: 5, icon: <DynamicIcon name="GoDot" />, label: "Styling with utility classes", link: '/a'
  },
  {
    id: 6, icon: <DynamicIcon name="GoDot" />, label: "Hover, focus, and other states", link: '/s'
  },
  {
    id: 7, icon: <DynamicIcon name="GoDot" />, label: "Responsive design", link: '/f'
  },
  {
    id: 8, icon: <DynamicIcon name="GoDot" />, label: "Columns", link: '/columns'
  },
  { id: 9, icon: <DynamicIcon name="GoDot" />, label: "Display", link: '/display' },
  { id: 10, icon: <DynamicIcon name="GoDot" />, label: "Float", link: '/float' },

];

export const DocHorizontalMenuData: MenuNode[] = [
  {
    id: 1, icon: <DynamicIcon name="FaBookOpen" />, label: "Documentation", link: '/doc'
  },
  {
    id: 2, icon: <DynamicIcon name="BsStack" />, label: "Components", link: '/components'
  },
  {
    id: 3, icon: <DynamicIcon name="GoDot" />, label: "Installation", link: '/Installation',
  },
  {
    id: 4, icon: <DynamicIcon name="GoDot" />, label: "Colors", link: '/colors'
  },
  {
    id: 5, icon: <DynamicIcon name="GoDot" />, label: "Styling with utility classes", link: '/a'
  },
  {
    id: 6, icon: <DynamicIcon name="GoDot" />, label: "Hover, focus, and other states", link: '/s'
  },
  {
    id: 7, icon: <DynamicIcon name="GoDot" />, label: "Responsive design", link: '/f'
  },
  {
    id: 8, icon: <DynamicIcon name="GoDot" />, label: "Columns", link: '/columns'
  },
  { id: 9, icon: <DynamicIcon name="GoDot" />, label: "Display", link: '/display' },
  { id: 10, icon: <DynamicIcon name="GoDot" />, label: "Float", link: '/float' },
  { id: 11, icon: <DynamicIcon name="GoDot" />, label: "Map", link: '/q' },
  { id: 12, icon: <DynamicIcon name="GoDot" />, label: "Icons", link: '/q' },
  { id: 13, icon: <DynamicIcon name="GoDot" />, label: "Charts & Carts", link: '/s' },

];



export const CompMenuCategories: CategoryNode[] = [
  { id: 1, label: "Main", lebel1id: ['1'] },
  { id: 2, label: "WEB APPS", lebel1id: ['2', '3'] },
  { id: 3, label: "PAGES", lebel1id: ['4', '5', '6'] },
  { id: 4, label: "GENERAL", lebel1id: ['7', '8', '9', '10',] },
  { id: 5, label: "MAPS & ICONS", lebel1id: ['11', '12'] },
  { id: 6, label: "TABLES & CHARTS", lebel1id: ['13', '14'] },
];

export const CompSidebarMenuData: MenuNode[] = [
  {
    id: 1,
    icon: <DynamicIcon name="FaBookOpen" />,
    label: "Dashboard",
    children: [
      { id: 101, label: "Sales", link: "components/sale-dashboard" },
      { id: 102, label: "Analytics", link: "components/analytics-dashboard" },
      { id: 103, label: "Ecommerce", link: "components/ecommerce-dashboard" },
      { id: 104, label: "CRM", link: "components/crm-dashboard" },
      { id: 105, label: "Crypto", link: "components/crypto-dashboard" },
      { id: 106, label: "NFT", link: "components/nft-dashboard" },
      { id: 107, label: "Projects", link: "components/projects-dashboard" },
      { id: 108, label: "Jobs Details", link: "components/jobs-Details" },
      { id: 109, label: "HRM", link: "components/hrm-dashboard" },
      { id: 110, label: "Courses", link: "components/courses-dashboard" },
      { id: 111, label: "Stocks", link: "components/stocks-dashboard" },
      { id: 112, label: "Medical", link: "components/medical-dashboard" },
      { id: 113, label: "POS System", link: "components/pos-system-dashboard" },
      { id: 114, label: "Podcast", link: "components/podcast-dashboard" },
      { id: 115, label: "School", link: "components/school-dashboard" },
      { id: 116, label: "Social Media", link: "components/social-media-dashboard" },
    ],
  },
  {
    id: 2,
    icon: <DynamicIcon name="IoCubeOutline" />,
    label: "Applications",
    children: [
      { id: 201, label: "Full Calendar", link: "components/full-calendar" },
      { id: 202, label: "Gallery", link: "components/gallery" },
      { id: 203, label: "Sweet Alert", link: "components/sweet-alert" },
      {
        id: 204,
        label: "Projects",
        children: [
          { id: 20401, label: "Projects List", link: "components/projects-list" },
          { id: 20402, label: "Projects Overview", link: "components/project-overview" },
          { id: 20403, label: "Create Project", link: "components/create-project" },
        ],
      },
      {
        id: 205,
        label: "Task",
        children: [
          { id: 20501, label: "List View", link: "components/list-view" },
          { id: 20502, label: "Task Details", link: "components/task-details" },
        ],
      },
      {
        id: 206,
        label: "Jobs",
        children: [
          { id: 20601, label: "Jobs Details", link: "components/jobs-Details" },
          { id: 20602, label: "Search Company", link: "components/Search-Company" },
          { id: 20603, label: "Search Jobs", link: "components/Search-Jobs" },
          { id: 20604, label: "Job Post", link: "components/Job-Post" },
          { id: 20605, label: "Job List", link: "components/Job-List" },
          { id: 20606, label: "Search Candidates", link: "components/Search-Candidates" },
        ],
      },
      {
        id: 207,
        label: "NFT",
        children: [
          { id: 20701, label: "Market Place", link: "components/Market-Place" },
          { id: 20702, label: "NFT Details", link: "components/NFT-Details" },
          { id: 20703, label: "Create NFT", link: "components/Create-NFT" },
          { id: 20704, label: "Wallet Integration", link: "components/Wallet-Integration" },
          { id: 20705, label: "Live Auction", link: "components/Live-Auction" },
        ],
      },
      {
        id: 208,
        label: "CRM",
        children: [
          { id: 20801, label: "Contacts", link: "components/Contacts" },
          { id: 20802, label: "Companies", link: "components/Companies" },
          { id: 20803, label: "Deals", link: "components/Deals" },
          { id: 20804, label: "Leads", link: "components/Leads" },
        ],
      },
      {
        id: 209,
        label: "Crypto",
        children: [
          { id: 20901, label: "Transactions", link: "components/Transactions" },
          { id: 20902, label: "Currency Exchange", link: "components/Currency-Exchange" },
          { id: 20903, label: "Buy & Sell", link: "components/Buy-Sell" },
          { id: 20904, label: "Marketcap", link: "components/Marketcap" },
        ],
      },
    ],
  },
  {
    id: 3,
    icon: <DynamicIcon name="GoStack" />,
    label: "Nested Menu",
    children: [
      { id: 301, label: "Nested-1", link: "components/nested-1" },
      {
        id: 302,
        label: "Nested-2",
        children: [
          { id: 30201, label: "Nested-2.1", link: "components/nested-2.1" },
          {
            id: 30202,
            label: "Nested-2.2",
            children: [
              { id: 3020201, label: "Nested-2.2.1", link: "components/nested-2.2.1" },
              { id: 3020202, label: "Nested-2.2.2", link: "components/nested-2.2.2" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    icon: <DynamicIcon name="SiAuthelia" />,
    label: "Authentication",
    children: [
      { id: 401, label: "Comming Soon", link: "components/comming-soon" },
      { id: 402, label: "Under Maintenance", link: "components/under-maintenance" },
    ],
  },
  {
    id: 5,
    icon: <DynamicIcon name="BiError" />,
    label: "Error",
    children: [
      { id: 501, label: "Error 401", link: "components/Error-401" },
      { id: 502, label: "Error 404", link: "components/Error-404" },
      { id: 503, label: "Error 500", link: "components/Error-500" },
    ],
  },
  {
    id: 6,
    icon: <DynamicIcon name="MdOutlineLibraryBooks" />,
    label: "Pages",
    children: [
      { id: 601, label: "Chat", link: "components/chat" },
      { id: 602, label: "Empty", link: "components/Empty" },
      { id: 603, label: "FAQ'S", link: "components/FAQs" },
      { id: 604, label: "File Manager", link: "components/File-Manager" },
      { id: 605, label: "Landing", link: "components/Landing" },
      { id: 606, label: "Pricing", link: "components/Pricing" },
      { id: 607, label: "Profile", link: "components/Profile" },
      { id: 608, label: "Profile Settings", link: "components/Profile-Settings" },
      { id: 609, label: "Reviews", link: "components/Reviews" },
      { id: 610, label: "Search", link: "components/Search" },
      { id: 611, label: "Team", link: "components/Team" },
      { id: 612, label: "Terms Conditions", link: "components/TermsConditions" },
      { id: 613, label: "Timeline", link: "components/Timeline" },
      { id: 614, label: "To Do List", link: "components/ToDoList" },
      { id: 615, label: "Blog", children: [] },
      { id: 616, label: "Email", children: [] },
      { id: 617, label: "Invoice", children: [] },
      { id: 618, label: "Ecommerce", children: [] },
    ],
  },
  {
    id: 7,
    icon: <DynamicIcon name="FaWpforms" />,
    label: "Forms",
    children: [],
  },
  {
    id: 8,
    icon: <DynamicIcon name="BsHddStack" />,
    label: "UI Elements",
    children: [
      { id: 801, label: "Button", link: "components/buttons" },
      { id: 802, label: "Alert", link: "components/alerts" },
      { id: 803, label: "Badge", link: "components/badges" },
    ],
  },
  {
    id: 9,
    icon: <DynamicIcon name="FaCarrot" />,
    label: "Advanced UI",
    children: [],
  },
  {
    id: 10,
    icon: <DynamicIcon name="FaCat" />,
    label: "Utilities",
    children: [],
  },
  {
    id: 11,
    icon: <DynamicIcon name="FaMapLocationDot" />,
    label: "Map",
    children: [],
  },
  {
    id: 12,
    icon: <DynamicIcon name="FaBoxOpen" />,
    label: "Icons",
    children: [],
  },
  {
    id: 13,
    icon: <DynamicIcon name="FaChartPie" />,
    label: "Charts & Carts",
    children: [],
  },
  {
    id: 14,
    icon: <DynamicIcon name="FaTableList" />,
    label: "Tables",
    children: [
      { id: 1401, label: "Basic Tables", link: "components/basic-tables" },
      { id: 1402, label: "Data Tables", link: "components/data-tables" },
    ],
  },
];

export const CompHorizontalMenuData: MenuNode[] = [
  {
    id: 1,
    icon: <DynamicIcon name="FaBookOpen" />,
    label: "Dashboard",
    children: [
      { id: 101, label: "Sales", link: "components/sale-dashboard" },
      { id: 102, label: "Analytics", link: "components/analytics-dashboard" },
      { id: 103, label: "Ecommerce", link: "components/ecommerce-dashboard" },
      { id: 104, label: "CRM", link: "components/crm-dashboard" },
      { id: 105, label: "Crypto", link: "components/crypto-dashboard" },
      { id: 106, label: "NFT", link: "components/nft-dashboard" },
      { id: 107, label: "Projects", link: "components/projects-dashboard" },
      { id: 108, label: "Jobs Details", link: "components/jobs-Details" },
      { id: 109, label: "HRM", link: "components/hrm-dashboard" },
      { id: 110, label: "Courses", link: "components/courses-dashboard" },
      { id: 111, label: "Stocks", link: "components/stocks-dashboard" },
      { id: 112, label: "Medical", link: "components/medical-dashboard" },
      { id: 113, label: "POS System", link: "components/pos-system-dashboard" },
      { id: 114, label: "Podcast", link: "components/podcast-dashboard" },
      { id: 115, label: "School", link: "components/school-dashboard" },
      { id: 116, label: "Social Media", link: "components/social-media-dashboard" },
    ],
  },
  {
    id: 2,
    icon: <DynamicIcon name="IoCubeOutline" />,
    label: "Applications",
    children: [
      { id: 201, label: "Full Calendar", link: "components/full-calendar" },
      { id: 202, label: "Gallery", link: "components/gallery" },
      { id: 203, label: "Sweet Alert", link: "components/sweet-alert" },
      {
        id: 204,
        label: "Projects",
        children: [
          { id: 20401, label: "Projects List", link: "components/projects-list" },
          { id: 20402, label: "Projects Overview", link: "components/project-overview" },
          { id: 20403, label: "Create Project", link: "components/create-project" },
        ],
      },
      {
        id: 205,
        label: "Task",
        children: [
          { id: 20501, label: "List View", link: "components/list-view" },
          { id: 20502, label: "Task Details", link: "components/task-details" },
        ],
      },
      {
        id: 206,
        label: "Jobs",
        children: [
          { id: 20601, label: "Jobs Details", link: "components/jobs-Details" },
          { id: 20602, label: "Search Company", link: "components/Search-Company" },
          { id: 20603, label: "Search Jobs", link: "components/Search-Jobs" },
          { id: 20604, label: "Job Post", link: "components/Job-Post" },
          { id: 20605, label: "Job List", link: "components/Job-List" },
          { id: 20606, label: "Search Candidates", link: "components/Search-Candidates" },
        ],
      },
      {
        id: 207,
        label: "NFT",
        children: [
          { id: 20701, label: "Market Place", link: "components/Market-Place" },
          { id: 20702, label: "NFT Details", link: "components/NFT-Details" },
          { id: 20703, label: "Create NFT", link: "components/Create-NFT" },
          { id: 20704, label: "Wallet Integration", link: "components/Wallet-Integration" },
          { id: 20705, label: "Live Auction", link: "components/Live-Auction" },
        ],
      },
      {
        id: 208,
        label: "CRM",
        children: [
          { id: 20801, label: "Contacts", link: "components/Contacts" },
          { id: 20802, label: "Companies", link: "components/Companies" },
          { id: 20803, label: "Deals", link: "components/Deals" },
          { id: 20804, label: "Leads", link: "components/Leads" },
        ],
      },
      {
        id: 209,
        label: "Crypto",
        children: [
          { id: 20901, label: "Transactions", link: "components/Transactions" },
          { id: 20902, label: "Currency Exchange", link: "components/Currency-Exchange" },
          { id: 20903, label: "Buy & Sell", link: "components/Buy-Sell" },
          { id: 20904, label: "Marketcap", link: "components/Marketcap" },
        ],
      },
    ],
  },
  {
    id: 3,
    icon: <DynamicIcon name="GoStack" />,
    label: "Nested Menu",
    children: [
      { id: 301, label: "Nested-1", link: "components/nested-1" },
      {
        id: 302,
        label: "Nested-2",
        children: [
          { id: 30201, label: "Nested-2.1", link: "components/nested-2.1" },
          {
            id: 30202,
            label: "Nested-2.2",
            children: [
              { id: 3020201, label: "Nested-2.2.1", link: "components/nested-2.2.1" },
              { id: 3020202, label: "Nested-2.2.2", link: "components/nested-2.2.2" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    icon: <DynamicIcon name="SiAuthelia" />,
    label: "Authentication",
    children: [
      { id: 401, label: "Comming Soon", link: "components/comming-soon" },
      { id: 402, label: "Under Maintenance", link: "components/under-maintenance" },
    ],
  },
  {
    id: 5,
    icon: <DynamicIcon name="BiError" />,
    label: "Error",
    children: [
      { id: 501, label: "Error 401", link: "components/Error-401" },
      { id: 502, label: "Error 404", link: "components/Error-404" },
      { id: 503, label: "Error 500", link: "components/Error-500" },
    ],
  },
  {
    id: 6,
    icon: <DynamicIcon name="MdOutlineLibraryBooks" />,
    label: "Pages",
    children: [
      { id: 601, label: "Chat", link: "components/chat" },
      { id: 602, label: "Empty", link: "components/Empty" },
      { id: 603, label: "FAQ'S", link: "components/FAQs" },
      { id: 604, label: "File Manager", link: "components/File-Manager" },
      { id: 605, label: "Landing", link: "components/Landing" },
      { id: 606, label: "Pricing", link: "components/Pricing" },
      { id: 607, label: "Profile", link: "components/Profile" },
      { id: 608, label: "Profile Settings", link: "components/Profile-Settings" },
      { id: 609, label: "Reviews", link: "components/Reviews" },
      { id: 610, label: "Search", link: "components/Search" },
      { id: 611, label: "Team", link: "components/Team" },
      { id: 612, label: "Terms Conditions", link: "components/TermsConditions" },
      { id: 613, label: "Timeline", link: "components/Timeline" },
      { id: 614, label: "To Do List", link: "components/ToDoList" },
      { id: 615, label: "Blog", children: [] },
      { id: 616, label: "Email", children: [] },
      { id: 617, label: "Invoice", children: [] },
      { id: 618, label: "Ecommerce", children: [] },
    ],
  },
  {
    id: 7,
    icon: <DynamicIcon name="FaWpforms" />,
    label: "Forms",
    children: [],
  },
  {
    id: 8,
    icon: <DynamicIcon name="BsHddStack" />,
    label: "UI Elements",
    children: [
      { id: 801, label: "Button", link: "components/components/buttons" },
      { id: 802, label: "Alert", link: "components/alerts" },
      { id: 803, label: "Badge", link: "components/badges" },
    ],
  },
  {
    id: 9,
    icon: <DynamicIcon name="FaCarrot" />,
    label: "Advanced UI",
    children: [],
  },
  {
    id: 10,
    icon: <DynamicIcon name="FaCat" />,
    label: "Utilities",
    children: [],
  },
  {
    id: 11,
    icon: <DynamicIcon name="FaMapLocationDot" />,
    label: "Map",
    children: [],
  },
  {
    id: 12,
    icon: <DynamicIcon name="FaBoxOpen" />,
    label: "Icons",
    children: [],
  },
  {
    id: 13,
    icon: <DynamicIcon name="FaChartPie" />,
    label: "Charts & Carts",
    children: [],
  },
  {
    id: 14,
    icon: <DynamicIcon name="FaTableList" />,
    label: "Tables",
    children: [
      { id: 1401, label: "Basic Tables", link: "components/basic-tables" },
      { id: 1402, label: "Data Tables", link: "components/data-tables" },
    ],
  },
];





export const ThemeSettingData: SettingGroup[] = [
  { id: 1, ThameSettingTypeId: 1, type: "radio", title: "Theme Color Mode", items: ["light", "dark"] },
  { id: 2, ThameSettingTypeId: 1, type: "radio", title: "Directions", items: ["LTR", "RTL"] },
  { id: 3, ThameSettingTypeId: 1, type: "radio", title: "Navigation Styles", items: ["Vertical", "Horizontal"] },
  { id: 5, ThameSettingTypeId: 1, type: "radio", title: "Page Styles", items: ["Regular", "Classic", "Modern"] },
  { id: 6, ThameSettingTypeId: 1, type: "radio", title: "Layout Width Styles", items: ["Full Width", "Boxed"] },
  { id: 7, ThameSettingTypeId: 1, type: "radio", title: "Menu Positions", items: ["Fixed", "Scrollable"] },
  { id: 8, ThameSettingTypeId: 1, type: "radio", title: "Header Positions", items: ["Fixed", "Scrollable"] },
  { id: 9, ThameSettingTypeId: 2, type: "color", title: "Menu Colors", items: ["#2998f2", "#20f7d3"] },
  { id: 10, ThameSettingTypeId: 2, type: "color", title: "Header Colors", items: ["#2998f2", "#20f7d3"] },
  { id: 11, ThameSettingTypeId: 2, type: "color", title: "Theme Primary", items: ["white", "black", "#773cd3", "red", "#0bcfd9", "#810cf5", "#07f59e", "#a4ba3f"] },
  { id: 12, ThameSettingTypeId: 2, type: "color", title: "Theme Background", items: ["#05666b", "#1E293B", "#202164", "#02613e"] },
];





