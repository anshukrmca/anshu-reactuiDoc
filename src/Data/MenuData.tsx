import DynamicIcon from "../Components/Icons/DynamicIcon";
import type { CategoryNode, MenuNode } from "./MenuTypes";


export const menuData: MenuNode[] = [
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
    id: 5, icon: <DynamicIcon name="GoDot" />, label: "Styling with utility classes",link:'/a'
  },
  {
    id: 6, icon: <DynamicIcon name="GoDot" />, label: "Hover, focus, and other states",link:'/s'
  },
  {
    id: 7, icon: <DynamicIcon name="GoDot" />, label: "Responsive design",link:'/f'
  },
  {
    id: 8, icon: <DynamicIcon name="GoDot" />, label: "Columns",link:'/columns'
  },
  { id: 9, icon: <DynamicIcon name="GoDot" />, label: "Display", link:'/display' },
  { id: 10, icon: <DynamicIcon name="GoDot" />, label: "Float", link:'/float' },
  { id: 11, icon: <DynamicIcon name="GoDot" />, label: "Map", link:'/q' },
  { id: 12, icon: <DynamicIcon name="GoDot" />, label: "Icons", link:'/q' },
  { id: 13, icon: <DynamicIcon name="GoDot" />, label: "Charts & Carts", link:'/s' },

];

export const MenuCategories: CategoryNode[] = [
  { id: 1, label: "", lebel1id: ['1', "2"] },
  { id: 2, label: "Getting started", lebel1id: ['3'] },
  { id: 3, label: "Core concepts", lebel1id: ['4', '5', '6', '7'] },
  { id: 4, label: "Layout", lebel1id: ['8', '9', '10',] },
  { id: 5, label: "MAPS & ICONS", lebel1id: ['11', '12'] },
  { id: 6, label: "TABLES & CHARTS", lebel1id: ['13', '14', '15'] },
];


export const HorizontalmenuData: MenuNode[] = [
  {
    id: 1, icon: <DynamicIcon name="FaBookOpen" />, label: "Documentation", link: '/doc'
  },
  {
    id: 2, icon: <DynamicIcon name="BsStack" />, label: "Components",
    children:[
      {id:201,label:'Page',icon:null,link:'/'},
      {id:201,label:'Page',icon:null,link:'/'},
      {id:201,label:'Page',icon:null,link:'/'},
    ]
  },
  {
    id: 3, icon: <DynamicIcon name="GoDot" />, label: "Installation", link: '/Installation', 
  },
  {
    id: 4, icon: <DynamicIcon name="GoDot" />, label: "Colors", link: '/colors'
  },
  {
    id: 5, icon: <DynamicIcon name="GoDot" />, label: "Styling with utility classes",link:'/a'
  },
  {
    id: 6, icon: <DynamicIcon name="GoDot" />, label: "Hover, focus, and other states",link:'/s'
  },
  {
    id: 7, icon: <DynamicIcon name="GoDot" />, label: "Responsive design",link:'/f'
  },
  {
    id: 8, icon: <DynamicIcon name="GoDot" />, label: "Columns",link:'/columns'
  },
  { id: 9, icon: <DynamicIcon name="GoDot" />, label: "Display", link:'/display' },
  { id: 10, icon: <DynamicIcon name="GoDot" />, label: "Float", link:'/float' },
  { id: 11, icon: <DynamicIcon name="GoDot" />, label: "Map", link:'/q' },
  { id: 12, icon: <DynamicIcon name="GoDot" />, label: "Icons", link:'/q' },
  { id: 13, icon: <DynamicIcon name="GoDot" />, label: "Charts & Carts", link:'/s' },

];











