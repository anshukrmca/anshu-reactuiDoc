import type { CategoryNode, MenuNode } from "anshu-reactui";
import DynamicIcon from "../Components/Icons/DynamicIcon";
import type { SettingGroup } from "./DataTypes";

export const DocMenuCategories: CategoryNode[] = [
  { id: 1, label: "Main", lebel1id: ['15'] },
  { id: 2, label: "WEB APPS", lebel1id: ["1", '2', '3'] },
  { id: 3, label: "PAGES", lebel1id: ['4', '5', '6'] },
  { id: 4, label: "GENERAL", lebel1id: ['7', '8', '9', '10',] },
  { id: 5, label: "MAPS & ICONS", lebel1id: ['11', '12'] },
  { id: 6, label: "TABLES & CHARTS", lebel1id: ['13', '14'] },
];

export const DocSidebarMenuData: MenuNode[] = [
  { id: 15, icon: <DynamicIcon name="FaBookOpen" />, label: "Documentation", link: '/doc' },
  {
    id: 1,
    icon: <DynamicIcon name="FaBookOpen" />,
    label: "Projects",
    children: [
      { id: 101, label: "Sales", link: "sale-dashboard" },
      { id: 102, label: "Analytics", link: "analytics-dashboard" },
      { id: 103, label: "Ecommerce", link: "ecommerce" },
      { id: 104, label: "CRM", link: "crm" },
      { id: 105, label: "Crypto", link: "crypto-dashboard" },
      { id: 106, label: "NFT", link: "nft-dashboard" },
      { id: 109, label: "HRM", link: "hrm-dashboard" },
      { id: 110, label: "Courses", link: "courses-dashboard" },
      { id: 111, label: "Medical", link: "medical-dashboard" },
    ],
  },
  {
    id: 2,
    icon: <DynamicIcon name="IoCubeOutline" />,
    label: "Applications",
    children: [
      { id: 201, label: "Full Calendar", link: "full-calendar" },
      { id: 202, label: "Gallery", link: "gallery" },
      {
        id: 203,
        label: "Task",
        children: [
          { id: 20301, label: "List View", link: "list-view" },
          { id: 20302, label: "Task Details", link: "task-details" },
        ],
      },
      { id: 204, label: "To-Do List", link: "to-do-list" },
    ],
  },
  {
    id: 3,
    icon: <DynamicIcon name="GoStack" />,
    label: "Nested Menu",
    children: [
      { id: 301, label: "Nested-1", link: "nested-1" },
      {
        id: 302,
        label: "Nested-2",
        children: [
          { id: 30201, label: "Nested-2.1", link: "nested-2.1" },
          {
            id: 30202,
            label: "Nested-2.2",
            children: [
              { id: 3020201, label: "Nested-2.2.1", link: "nested-2.2.1" },
              { id: 3020202, label: "Nested-2.2.2", link: "nested-2.2.2" },
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
      { id: 401, label: "Comming Soon", link: "comming-soon" },
      { id: 402, label: "Under Maintenance", link: "under-maintenance" },
      { id: 403, label: "Session Exipred", link: "session-exipred" },
    ],
  },
  {
    id: 5,
    icon: <DynamicIcon name="BiError" />,
    label: "Error",
    children: [
      { id: 501, label: "Error 401", link: "Error-401" },
      { id: 502, label: "Error 404", link: "Error-404" },
      { id: 503, label: "Error 500", link: "Error-500" },
    ],
  },
  {
    id: 6,
    icon: <DynamicIcon name="MdOutlineLibraryBooks" />,
    label: "Pages",
    children: [
      { id: 601, label: "Chat", link: "chat" },
      { id: 602, label: "Empty", link: "Empty" },
      { id: 603, label: "FAQ'S", link: "FAQs" },
      { id: 604, label: "File Manager", link: "File-Manager" },
      { id: 605, label: "Landing", link: "Landing" },
      { id: 606, label: "Pricing", link: "Pricing" },
      { id: 607, label: "Profile", link: "Profile" },
      { id: 608, label: "Profile Settings", link: "Profile-Settings" },
      { id: 609, label: "Reviews", link: "Reviews" },
      { id: 610, label: "Search", link: "Search" },
      { id: 611, label: "Team", link: "Team" },
      { id: 612, label: "Terms Conditions", link: "TermsConditions" },
      { id: 613, label: "Timeline", link: "Timeline" },
      { id: 614, label: "To Do List", link: "ToDoList" },
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
    children: [
      { id: 701, label: "Basice From", link: "basic-form" },
    ],
  },
  {
    id: 8,
    icon: <DynamicIcon name="BsHddStack" />,
    label: "UI Elements",
    children: [
      { id: 801, label: "Button", link: "buttons" },
      { id: 802, label: "Alert", link: "alerts" },
      { id: 803, label: "Badge", link: "badges" },
      { id: 804, label: "Breadcrumb & Spinner", link: "breadcrumb" },
      { id: 805, label: "Switch", link: "switch" },
      { id: 806, label: "Progressbar", link: "progressbar" },
      { id: 807, label: "Input Types", link: "input-types" },
    ],
  },
  {
    id: 9,
    icon: <DynamicIcon name="FaCarrot" />,
    label: "Advanced UI",
    children: [
      { id: 901, label: "Input File", link: 'input-file' },
      { id: 902, label: "Toast / Sweet Alert", link: 'toast-alert' },
      { id: 903, label: "OffCanvace", link: 'offCanvace' },
      { id: 904, label: "Modal Stack", link: 'modal-stack' },
      { id: 905, label: "Accordions / Collapse", link: 'accordions-collapse' },
       { id: 906, label: "Timeline", link: 'timeline' },
    ],
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
    link: 'react-icons'
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
      { id: 1401, label: "Basic Tables", link: "basic-tables" },
      { id: 1402, label: "Data Tables", link: "data-tables" },
    ],
  },
];

export const DocHorizontalMenuData: MenuNode[] = [
  { id: 15, icon: <DynamicIcon name="FaBookOpen" />, label: "Documentation", link: '/doc' },
  {
    id: 1,
    icon: <DynamicIcon name="FaBookOpen" />,
    label: "Projects",
    children: [
      { id: 101, label: "Sales", link: "sale-dashboard" },
      { id: 102, label: "Analytics", link: "analytics-dashboard" },
      { id: 103, label: "Ecommerce", link: "ecommerce" },
      { id: 104, label: "CRM", link: "crm" },
      { id: 105, label: "Crypto", link: "crypto-dashboard" },
      { id: 106, label: "NFT", link: "nft-dashboard" },
      { id: 109, label: "HRM", link: "hrm-dashboard" },
      { id: 110, label: "Courses", link: "courses-dashboard" },
      { id: 111, label: "Medical", link: "medical-dashboard" },
    ],
  },
  {
    id: 2,
    icon: <DynamicIcon name="IoCubeOutline" />,
    label: "Applications",
    children: [
      { id: 201, label: "Full Calendar", link: "full-calendar" },
      { id: 202, label: "Gallery", link: "gallery" },
      {
        id: 203,
        label: "Task",
        children: [
          { id: 20301, label: "List View", link: "list-view" },
          { id: 20302, label: "Task Details", link: "task-details" },
        ],
      },
      { id: 204, label: "To-Do List", link: "to-do-list" },
    ],
  },
  {
    id: 3,
    icon: <DynamicIcon name="GoStack" />,
    label: "Nested Menu",
    children: [
      { id: 301, label: "Nested-1", link: "nested-1" },
      {
        id: 302,
        label: "Nested-2",
        children: [
          { id: 30201, label: "Nested-2.1", link: "nested-2.1" },
          {
            id: 30202,
            label: "Nested-2.2",
            children: [
              { id: 3020201, label: "Nested-2.2.1", link: "nested-2.2.1" },
              { id: 3020202, label: "Nested-2.2.2", link: "nested-2.2.2" },
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
      { id: 401, label: "Comming Soon", link: "comming-soon" },
      { id: 402, label: "Under Maintenance", link: "under-maintenance" },
      { id: 403, label: "Session Exipred", link: "session-exipred" },
    ],
  },
  {
    id: 5,
    icon: <DynamicIcon name="BiError" />,
    label: "Error",
    children: [
      { id: 501, label: "Error 401", link: "Error-401" },
      { id: 502, label: "Error 404", link: "Error-404" },
      { id: 503, label: "Error 500", link: "Error-500" },
    ],
  },
  {
    id: 6,
    icon: <DynamicIcon name="MdOutlineLibraryBooks" />,
    label: "Pages",
    children: [
      { id: 601, label: "Chat", link: "chat" },
      { id: 602, label: "Empty", link: "Empty" },
      { id: 603, label: "FAQ'S", link: "FAQs" },
      { id: 604, label: "File Manager", link: "File-Manager" },
      { id: 605, label: "Landing", link: "Landing" },
      { id: 606, label: "Pricing", link: "Pricing" },
      { id: 607, label: "Profile", link: "Profile" },
      { id: 608, label: "Profile Settings", link: "Profile-Settings" },
      { id: 609, label: "Reviews", link: "Reviews" },
      { id: 610, label: "Search", link: "Search" },
      { id: 611, label: "Team", link: "Team" },
      { id: 612, label: "Terms Conditions", link: "TermsConditions" },
      { id: 613, label: "Timeline", link: "Timeline" },
      { id: 614, label: "To Do List", link: "ToDoList" },
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
    children: [
      { id: 701, label: "Basice From", link: "basic-form" },
    ],
  },
  {
    id: 8,
    icon: <DynamicIcon name="BsHddStack" />,
    label: "UI Elements",
    children: [
      { id: 801, label: "Button", link: "buttons" },
      { id: 802, label: "Alert", link: "alerts" },
      { id: 803, label: "Badge", link: "badges" },
      { id: 804, label: "Breadcrumb & Spinner", link: "breadcrumb" },
      { id: 805, label: "Switch", link: "switch" },
      { id: 806, label: "Progressbar", link: "progressbar" },
      { id: 807, label: "Input Types", link: "input-types" },
    ],
  },
  {
    id: 9,
    icon: <DynamicIcon name="FaCarrot" />,
    label: "Advanced UI",
    children: [
      { id: 901, label: "Input File", link: 'input-file' },
      { id: 902, label: "Toast / Sweet Alert", link: 'toast-alert' },
      { id: 903, label: "OffCanvace", link: 'offCanvace' },
      { id: 904, label: "Modal Stack", link: 'modal-stack' },
      { id: 905, label: "Accordions / Collapse", link: 'accordions-collapse' },
      { id: 906, label: "Timeline", link: 'timeline' },
    ],
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
    link: 'react-icons'
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
      { id: 1401, label: "Basic Tables", link: "basic-tables" },
      { id: 1402, label: "Data Tables", link: "data-tables" },
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
  {
    id: 11, ThameSettingTypeId: 2, type: "color", title: "Theme Primary",
    items: [
      "white",               // classic
      "black",               // classic
      "#4B5563",             // Cool Gray 600
      "#2563EB",             // Blue 600
      "#10B981",             // Emerald 500
      "#F59E0B",             // Amber 500
      "#7C3AED",             // Violet 600
      "#EF4444",             // Red 500
      "#0BCFD9",             // Cyan-ish accent
      "#773CD3",             // Purple accent
    ]
  },
  {
    id: 12, ThameSettingTypeId: 2, type: "color", title: "Theme Background",
    items: [
      "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",   // dark slate gradient
      "linear-gradient(135deg, #0F172A 0%, #2563EB 100%)",
      "linear-gradient(to right, #283c86, #45a247)",
      "linear-gradient(to right, #666600, #999966)",
      "#1E293B",  // Slate 800 solid
      "#334155",  // Slate 700 solid
      "#0F172A",  // Slate 900 solid
      "linear-gradient(135deg, #10B981 0%, #06B6D4 100%)",   // subtle teal gradient
    ]
  },
];


export const CRMMenuCategories = [
  { id: 1, label: "Main", lebel1id: ['1', '2'] },
  { id: 2, label: "WEB APPS", lebel1id: ['3', '4', '5'] },
  { id: 3, label: "Reports & Settings", lebel1id: ['6', '7', '8', '9'] },
];

export const CRMSidebarMenuData = [
  {
    id: 1,
    icon: <DynamicIcon name="FaTachometerAlt" />,
    label: "Dashboard",
    children: [
      { id: 101, label: "Sales", link: "/crm/dashboard/sales" },
      { id: 102, label: "Marketing", link: "/crm/dashboard/marketing" },
    ],
  },
  {
    id: 2,
    icon: <DynamicIcon name="FaUsers" />,
    label: "Contacts",
    children: [
      { id: 201, label: "All Contacts", link: "/crm/contacts/all" },
      { id: 202, label: "New Contact", link: "/crm/contacts/new" },
    ],
  },
  {
    id: 3,
    icon: <DynamicIcon name="FaUserTie" />,
    label: "Leads",
    children: [
      { id: 301, label: "All Leads", link: "/crm/leads/all" },
      { id: 302, label: "Add Lead", link: "/crm/leads/new" },
    ],
  },
  {
    id: 4,
    icon: <DynamicIcon name="FaHandshake" />,
    label: "Opportunities",
    children: [
      { id: 401, label: "All Opportunities", link: "/crm/opportunities/all" },
      { id: 402, label: "Add Opportunity", link: "/crm/opportunities/new" },
    ],
  },
  {
    id: 5,
    icon: <DynamicIcon name="FaBuilding" />,
    label: "Accounts",
    children: [
      { id: 501, label: "All Accounts", link: "/crm/accounts/all" },
      { id: 502, label: "Add Account", link: "/crm/accounts/new" },
    ],
  },
  {
    id: 6,
    icon: <DynamicIcon name="FaChartLine" />,
    label: "Sales",
    children: [
      { id: 601, label: "Quotes", link: "/crm/sales/quotes" },
      { id: 602, label: "Orders", link: "/crm/sales/orders" },
      { id: 603, label: "Invoices", link: "/crm/sales/invoices" },
    ],
  },
  {
    id: 7,
    icon: <DynamicIcon name="FaBullhorn" />,
    label: "Marketing",
    children: [
      { id: 701, label: "Campaigns", link: "/crm/marketing/campaigns" },
      { id: 702, label: "Emails", link: "/crm/marketing/emails" },
    ],
  },
  {
    id: 8,
    icon: <DynamicIcon name="FaFileAlt" />,
    label: "Reports",
    link: "/crm/reports",
  },
  {
    id: 9,
    icon: <DynamicIcon name="FaCog" />,
    label: "Settings",
    link: "/crm/settings",
  },
];

export const CRMHorizontalMenuData = [
  {
    id: 1,
    icon: <DynamicIcon name="FaTachometerAlt" />,
    label: "Dashboard",
    children: [
      { id: 101, label: "Sales", link: "/crm/dashboard/sales" },
      { id: 102, label: "Marketing", link: "/crm/dashboard/marketing" },
    ],
  },
  {
    id: 2,
    icon: <DynamicIcon name="FaUsers" />,
    label: "Contacts",
    children: [
      { id: 201, label: "All Contacts", link: "/crm/contacts/all" },
      { id: 202, label: "New Contact", link: "/crm/contacts/new" },
    ],
  },
  {
    id: 3,
    icon: <DynamicIcon name="FaUserTie" />,
    label: "Leads",
    children: [
      { id: 301, label: "All Leads", link: "/crm/leads/all" },
      { id: 302, label: "Add Lead", link: "/crm/leads/new" },
    ],
  },
  {
    id: 4,
    icon: <DynamicIcon name="FaHandshake" />,
    label: "Opportunities",
    children: [
      { id: 401, label: "All Opportunities", link: "/crm/opportunities/all" },
      { id: 402, label: "Add Opportunity", link: "/crm/opportunities/new" },
    ],
  },
  {
    id: 5,
    icon: <DynamicIcon name="FaBuilding" />,
    label: "Accounts",
    children: [
      { id: 501, label: "All Accounts", link: "/crm/accounts/all" },
      { id: 502, label: "Add Account", link: "/crm/accounts/new" },
    ],
  },
  {
    id: 6,
    icon: <DynamicIcon name="FaChartLine" />,
    label: "Sales",
    children: [
      { id: 601, label: "Quotes", link: "/crm/sales/quotes" },
      { id: 602, label: "Orders", link: "/crm/sales/orders" },
      { id: 603, label: "Invoices", link: "/crm/sales/invoices" },
    ],
  },
  {
    id: 7,
    icon: <DynamicIcon name="FaBullhorn" />,
    label: "Marketing",
    children: [
      { id: 701, label: "Campaigns", link: "/crm/marketing/campaigns" },
      { id: 702, label: "Emails", link: "/crm/marketing/emails" },
    ],
  },
  {
    id: 8,
    icon: <DynamicIcon name="FaFileAlt" />,
    label: "Reports",
    link: "/crm/reports",
  },
  {
    id: 9,
    icon: <DynamicIcon name="FaCog" />,
    label: "Settings",
    link: "/crm/settings",
  },
];


// E-commerce adapted menu categories (similar structure)
export const ECommerceMenuCategories: CategoryNode[] = [
  { id: 1, label: "Main", lebel1id: ['1', '2'] },
  { id: 2, label: "Store Management", lebel1id: ['3', '4', '5', '6'] },
  { id: 3, label: "Analytics & Settings", lebel1id: ['7', '8'] },
];

// E-commerce sidebar menu data (adapted from CRM example)
export const ECommerceSidebarMenuData: MenuNode[] = [
  {
    id: 1,
    icon: <DynamicIcon name="FaTachometerAlt" />,
    label: "Dashboard",
    children: [
      { id: 101, label: "Overview", link: "/ecommerce/dashboard/overview" },
      { id: 102, label: "Analytics", link: "/ecommerce/dashboard/analytics" },
    ],
  },
  {
    id: 2,
    icon: <DynamicIcon name="FaBox" />,
    label: "Products",
    children: [
      { id: 201, label: "All Products", link: "/ecommerce/products/all" },
      { id: 202, label: "Add Product", link: "/ecommerce/products/new" },
      { id: 203, label: "Categories", link: "/ecommerce/products/categories" },
    ],
  },
  {
    id: 3,
    icon: <DynamicIcon name="FaShoppingCart" />,
    label: "Orders",
    children: [
      { id: 301, label: "All Orders", link: "/ecommerce/orders/all" },
      { id: 302, label: "New Order", link: "/ecommerce/orders/new" },
      { id: 303, label: "Processing", link: "/ecommerce/orders/processing" },
    ],
  },
  {
    id: 4,
    icon: <DynamicIcon name="FaUsers" />,
    label: "Customers",
    children: [
      { id: 401, label: "All Customers", link: "/ecommerce/customers/all" },
      { id: 402, label: "Add Customer", link: "/ecommerce/customers/new" },
      { id: 403, label: "Segments", link: "/ecommerce/customers/segments" },
    ],
  },
  {
    id: 5,
    icon: <DynamicIcon name="FaWarehouse" />,
    label: "Inventory",
    children: [
      { id: 501, label: "Stock Levels", link: "/ecommerce/inventory/stock" },
      { id: 502, label: "Suppliers", link: "/ecommerce/inventory/suppliers" },
    ],
  },
  {
    id: 6,
    icon: <DynamicIcon name="FaCreditCard" />,
    label: "Payments",
    children: [
      { id: 601, label: "Transactions", link: "/ecommerce/payments/transactions" },
      { id: 602, label: "Refunds", link: "/ecommerce/payments/refunds" },
    ],
  },
  {
    id: 7,
    icon: <DynamicIcon name="FaChartBar" />,
    label: "Reports",
    link: "/ecommerce/reports",
  },
  {
    id: 8,
    icon: <DynamicIcon name="FaCog" />,
    label: "Settings",
    link: "/ecommerce/settings",
  },
];

export const ECommerceHorizontalMenuData: MenuNode[] = [
  {
    id: 1,
    icon: <DynamicIcon name="FaTachometerAlt" />,
    label: "Dashboard",
    children: [
      { id: 101, label: "Overview", link: "/ecommerce/dashboard/overview" },
      { id: 102, label: "Analytics", link: "/ecommerce/dashboard/analytics" },
    ],
  },
  {
    id: 2,
    icon: <DynamicIcon name="FaBox" />,
    label: "Products",
    children: [
      { id: 201, label: "All Products", link: "/ecommerce/products/all" },
      { id: 202, label: "Add Product", link: "/ecommerce/products/new" },
      { id: 203, label: "Categories", link: "/ecommerce/products/categories" },
    ],
  },
  {
    id: 3,
    icon: <DynamicIcon name="FaShoppingCart" />,
    label: "Orders",
    children: [
      { id: 301, label: "All Orders", link: "/ecommerce/orders/all" },
      { id: 302, label: "New Order", link: "/ecommerce/orders/new" },
      { id: 303, label: "Processing", link: "/ecommerce/orders/processing" },
    ],
  },
  {
    id: 4,
    icon: <DynamicIcon name="FaUsers" />,
    label: "Customers",
    children: [
      { id: 401, label: "All Customers", link: "/ecommerce/customers/all" },
      { id: 402, label: "Add Customer", link: "/ecommerce/customers/new" },
      { id: 403, label: "Segments", link: "/ecommerce/customers/segments" },
    ],
  },
  {
    id: 5,
    icon: <DynamicIcon name="FaWarehouse" />,
    label: "Inventory",
    children: [
      { id: 501, label: "Stock Levels", link: "/ecommerce/inventory/stock" },
      { id: 502, label: "Suppliers", link: "/ecommerce/inventory/suppliers" },
    ],
  },
  {
    id: 6,
    icon: <DynamicIcon name="FaCreditCard" />,
    label: "Payments",
    children: [
      { id: 601, label: "Transactions", link: "/ecommerce/payments/transactions" },
      { id: 602, label: "Refunds", link: "/ecommerce/payments/refunds" },
    ],
  },
  {
    id: 7,
    icon: <DynamicIcon name="FaChartBar" />,
    label: "Reports",
    link: "/ecommerce/reports",
  },
  {
    id: 8,
    icon: <DynamicIcon name="FaCog" />,
    label: "Settings",
    link: "/ecommerce/settings",
  },
];




