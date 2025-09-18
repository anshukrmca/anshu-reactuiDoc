import type { CategoryNode, MenuNode } from "./MenuTypes";


export const menuData: MenuNode[] = [
  {
    id: 1,
    icon: <i className="fa-solid fa-gauge"></i>,
    label: "Dashboards",
    link: '/home'
  },
  {
    id: 2,
    icon: <i className="fa-solid fa-gauge"></i>,
    label: "Applications",
    children: [
      { id: 201, label: "Full Calendar", link: "/full-calendar" },
      { id: 202, label: "Gallery", link: "/gallery" },
      { id: 203, label: "Sweet Alert", link: "/sweet-alert" },
      {
        id: 204, label: "Projects",
        children: [
          { id: 2041, label: "Projects List", link: "/projects-list" },
          { id: 2042, label: "Projects Overview", link: "/project-overview" },
          { id: 2043, label: "Create Project", link: "/create-project" },
        ]
      },
      {
        id: 205, label: "Task",
        children: [
          { id: 2051, label: "List View", link: "/list-view" },
          { id: 2052, label: "Task Details", link: "/task-details" },
        ]
      },
      {
        id: 206, label: "Jobs",
        children: [
          { id: 2061, label: "Jobs Details", link: "/jobs-Details" },
          { id: 2062, label: "Search Company", link: "/Search-Company" },
          { id: 2063, label: "Search Jobs", link: "/Search-Jobs" },
          { id: 2064, label: "Job Post", link: "/Job-Post" },
          { id: 2065, label: "Job List", link: "/Job-List" },
          { id: 2066, label: "Search Candidates", link: "/Search-Candidates" },
        ]
      },
      {
        id: 207, label: "NFT",
        children: [
          { id: 2071, label: "Market Place", link: "/Market-Place" },
          { id: 2072, label: "NFT Details", link: "/NFT-Details" },
          { id: 2073, label: "Create NFT", link: "/Create-NFT" },
          { id: 2074, label: "Wallet Integration", link: "/Wallet-Integration" },
          { id: 2075, label: "Live Auction", link: "/Live-Auction" },
        ]
      },
      {
        id: 208, label: "CRM",
        children: [
          { id: 2081, label: "Contacts", link: "/Contacts" },
          { id: 2082, label: "Companies", link: "/Companies" },
          { id: 2083, label: "Deals", link: "/Deals" },
          { id: 2084, label: "Leads", link: "/Leads" },
        ]
      },
      {
        id: 209, label: "Crypto",
        children: [
          { id: 2091, label: "Transactions", link: "/Transactions" },
          { id: 2092, label: "Currency Exchange", link: "/Currency-Exchange" },
          { id: 2093, label: "Buy & Sell", link: "/Buy-Sell" },
          { id: 2094, label: "Marketcap", link: "/Marketcap" },
        ]
      },
    ]
  },
  {
    id: 3,
    icon: <i className="fa-solid fa-gauge"></i>,
    label: "Nested Menu",
    children: [
      { id: 301, label: "Nested-1", link: "/nested-1" },
      {
        id: 302, label: "Nested-2",
        children: [
          { id: 3021, label: "Nested-2.1", link: "/nested-2.1" },
          {
            id: 3022, label: "Nested-2.2",
            children: [
              { id: 30221, label: "Nested-2.2.1", link: "/nested-2.2.1" },
              { id: 30222, label: "Nested-2.2.2", link: "/nested-2.2.2" },
            ]
          },
        ]
      },
    ]
  },
  {
    id: 4, icon: <i className="fa-solid fa-gauge"></i>, label: "Authentication",
    children: [
      { id: 401, label: "Comming Soon", link: "/comming-soon" },
      { id: 402, label: "Under Maintenance", link: "/under-maintenance" },
    ]
  },
  {
    id: 5, icon: <i className="fa-solid fa-gauge"></i>, label: "Error",
    children: [
      { id: 501, label: "Error 401", link: "/Error-401" },
      { id: 502, label: "Error 404", link: "/Error-404" },
      { id: 503, label: "Error 500", link: "/Error-500" },
    ]
  },
  {
    id: 6, icon: <i className="fa-solid fa-gauge"></i>, label: "Pages",
    children: [
      { id: 601, label: "Chat", link: "/chat" },
      { id: 602, label: "Empty", link: "/Empty" },
      { id: 603, label: "FAQ'S", link: "/FAQs" },
      { id: 604, label: "File Manager", link: "/File-Manager" },
      { id: 605, label: "Landing", link: "/Landing" },
      { id: 606, label: "Pricing", link: "/Pricing" },
      { id: 607, label: "Profile", link: "/Profile" },
      { id: 608, label: "Profile Settings", link: "/Profile-Settings" },
      { id: 609, label: "Reviews", link: "/Reviews" },
      { id: 610, label: "Search", link: "/Search" },
      { id: 611, label: "Team", link: "/Team" },
      { id: 612, label: "Terms Conditions", link: "/TermsConditions" },
      { id: 613, label: "Timeline", link: "/Timeline" },
      { id: 614, label: "To Do List", link: "/ToDoList" },
      { id: 615, label: "Blog", children: [] },
      { id: 616, label: "Email", children: [] },
      { id: 617, label: "Invoice", children: [] },
      { id: 618, label: "Ecommerce", children: [] },
    ]
  },
  {
    id: 7, icon: <i className="fa-solid fa-gauge"></i>, label: "Forms",
    children: []
  },
  {
    id: 8, icon:<i className="fa-solid fa-gauge"></i>, label: "UI Elements",
    children: [
      { id: 801, label: "Button", link: "/buttons" },
      { id: 802, label: "Alert", link: "/alerts" },
      { id: 803, label: "Badge", link: "/badges" },
    ]
  },
  { id: 9, icon: <i className="fa-solid fa-gauge"></i>, label: "Advanced UI", children: [] },
  { id: 10, icon: <i className="fa-solid fa-gauge"></i>, label: "Utilities", children: [] },
  { id: 11, icon: <i className="fa-solid fa-gauge"></i>, label: "Map", children: [] },
  { id: 12, icon: <i className="fa-solid fa-gauge"></i>, label: "Icons", children: [] },
  { id: 13, icon: <i className="fa-solid fa-gauge"></i>, label: "Charts & Carts", children: [] },
  {
    id: 14, icon: <i className="fa-solid fa-gauge"></i>, label: "Tables",
    children: [
      { id: 1401, label: "Basic Tables", link: "/basic-tables" },
      { id: 1402, label: "Data Tables", link: "/data-tables" },
    ]
  },
];

export const MenuCategories: CategoryNode[] = [
  { id: 1, label: "Main", lebel1id: ['1'] },
  { id: 2, label: "WEB APPS", lebel1id: ['2', '3'] },
  { id: 3, label: "PAGES", lebel1id: ['4', '5', '6'] },
  { id: 4, label: "GENERAL", lebel1id: ['7', '8', '9', '10',] },
  { id: 5, label: "MAPS & ICONS", lebel1id: ['11','12'] },
  { id: 6, label: "TABLES & CHARTS", lebel1id: ['13','14', '15'] },
];













