import { useState, type ReactNode } from 'react'
import CheatsheetCard from '../../Components/Box/CheatsheetCard';
import { useAppSelector } from '../../CustomeHooks/Hooks';
import { Button, Card } from 'anshu-reactui';
import ButtonTestPage from '../../Components/UI/ButtonTestPage';
import DynamicIcon from '../../Components/Icons/DynamicIcon';

// Define types for button data
interface ButtonData {
    ID: number;
    Tittle: string;
    jsxExample: ReactNode;
    jsxCode: string;
    htmlCode: string;
    cssCode: string;
}


const ButtonList = () => {
    const CommonSave_GlobalValStore = useAppSelector((state) => state.CommonSave_GlobalValStore);
    const [CheatsheetOpen, setCheatsheetOpen] = useState<string | null>(null);
    const code = `
import DynamicIcon from "../Icon/DynamicIcon";

const Button = ({
  children,
  onClick,
  type = 'button',
  className = '', // use className instead of CssClass
  style = {},
  disabled = false,
  fullWidth = false,
  iconName = null,
  iconColor = 'black',
  iconSize = 13,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={\`
        \${fullWidth ? 'w-full' : ''} 
        flex items-center justify-center gap-2 transition-all duration-200 
        disabled:opacity-50 disabled:cursor-not-allowed
        \${className}  
      \`}
      style={style}
    >
      {iconName && 
        <span className="flex items-center">
          <DynamicIcon name={iconName} color={iconColor} size={iconSize}/>
        </span>}
      {children}
    </button>
  );
};

export default Button;
    `;
    const ButtondataArray: ButtonData[] = [
        {
            ID: 1,
            Tittle: "Default Buttons",
            jsxExample: (
                <>
                    <Button variant='primary' className="btn btn-primary">Primary</Button>
                    <Button className="btn btn-secondary">Secondary</Button>
                    <Button className="btn btn-success">Success</Button>
                    <Button className="btn btn-danger">Danger</Button>
                    <Button className="btn btn-warning">Warning</Button>
                    <Button className="btn btn-info">Info</Button>
                    <Button className="btn btn-light">Light</Button>
                    <Button className="btn btn-dark">Dark</Button>
                </>
            ),
            jsxCode: `<Button className="btn btn-primary">Primary</Button>
<Button className="btn btn-secondary">Secondary</Button>
<Button className="btn btn-success">Success</Button>
<Button className="btn btn-danger">Danger</Button>
<Button className="btn btn-warning">Warning</Button>
<Button className="btn btn-info">Info</Button>
<Button className="btn btn-light">Light</Button>
<Button className="btn btn-dark">Dark</Button>`,
            htmlCode: `<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-light">Light</button>
<button class="btn btn-dark">Dark</button>`,
            cssCode: `className="btn btn-primary"
className="btn btn-secondary"
className="btn btn-success"
className="btn btn-danger"
className="btn btn-warning"
className="btn btn-info"
className="btn btn-light"
className="btn btn-dark"`,
        },
        {
            ID: 2,
            Tittle: "Rounded Buttons",
            jsxExample: (
                <>
                    <Button className="btn btn-primary rounded-2xl">Primary</Button>
                    <Button className="btn btn-secondary rounded-2xl">Secondary</Button>
                    <Button className="btn btn-success rounded-2xl">Success</Button>
                    <Button className="btn btn-danger rounded-2xl">Danger</Button>
                    <Button className="btn btn-warning rounded-2xl">Warning</Button>
                    <Button className="btn btn-info rounded-2xl">Info</Button>
                    <Button className="btn btn-light rounded-2xl">Light</Button>
                    <Button className="btn btn-dark rounded-2xl">Dark</Button>
                </>
            ),
            jsxCode: `<Button className="btn btn-primary rounded-2xl">Primary</Button>
<Button className="btn btn-secondary rounded-2xl">Secondary</Button>
<Button className="btn btn-success rounded-2xl">Success</Button>
<Button className="btn btn-danger rounded-2xl">Danger</Button>
<Button className="btn btn-warning rounded-2xl">Warning</Button>
<Button className="btn btn-info rounded-2xl">Info</Button>
<Button className="btn btn-light rounded-2xl">Light</Button>
<Button className="btn btn-dark rounded-2xl">Dark</Button>`,
            htmlCode: `<button class="btn btn-primary rounded-2xl">Primary</button>
<button class="btn btn-secondary rounded-2xl">Secondary</button>
<button class="btn btn-success rounded-2xl">Success</button>
<button class="btn btn-danger rounded-2xl">Danger</button>
<button class="btn btn-warning rounded-2xl">Warning</button>
<button class="btn btn-info rounded-2xl">Info</button>
<button class="btn btn-light rounded-2xl">Light</button>
<button class="btn btn-dark rounded-2xl">Dark</button>`,
            cssCode: `className="btn btn-primary rounded-2xl"
className="btn btn-secondary rounded-2xl"
className="btn btn-success rounded-2xl"
className="btn btn-danger rounded-2xl"
className="btn btn-warning rounded-2xl"
className="btn btn-info rounded-2xl"
className="btn btn-light rounded-2xl"
className="btn btn-dark rounded-2xl"`,
        },
        {
            ID: 3,
            Tittle: "Outlined Buttons",
            jsxExample: (
                <>
                    <Button className="btn btn-primary-outline">Primary</Button>
                    <Button className="btn btn-secondary-outline">Secondary</Button>
                    <Button className="btn btn-success-outline">Success</Button>
                    <Button className="btn btn-danger-outline">Danger</Button>
                    <Button className="btn btn-warning-outline">Warning</Button>
                    <Button className="btn btn-info-outline">Info</Button>
                    <Button className="btn btn-light-outline">Light</Button>
                    <Button className="btn btn-dark-outline">Dark</Button>
                </>
            ),
            jsxCode: `<Button className="btn btn-primary-outline">Primary</Button>
<Button className="btn btn-secondary-outline">Secondary</Button>
<Button className="btn btn-success-outline">Success</Button>
<Button className="btn btn-danger-outline">Danger</Button>
<Button className="btn btn-warning-outline">Warning</Button>
<Button className="btn btn-info-outline">Info</Button>
<Button className="btn btn-light-outline">Light</Button>
<Button className="btn btn-dark-outline">Dark</Button>`,
            htmlCode: `<button class="btn btn-primary-outline">Primary</button>
<button class="btn btn-secondary-outline">Secondary</button>
<button class="btn btn-success-outline">Success</button>
<button class="btn btn-danger-outline">Danger</button>
<button class="btn btn-warning-outline">Warning</button>
<button class="btn btn-info-outline">Info</button>
<button class="btn btn-light-outline">Light</button>
<button class="btn btn-dark-outline">Dark</button>`,
            cssCode: `className="btn btn-primary"
className="btn btn-secondary-outline"
className="btn btn-success-outline"
className="btn btn-danger-outline"
className="btn btn-warning-outline"
className="btn btn-info-outline"
className="btn btn-light-outline"
className="btn btn-dark-outline"`,
        },
        {
            ID: 4,
            Tittle: "Rounded Outline Buttons",
            jsxExample: (
                <>
                    <Button className="btn btn-primary-outline rounded-2xl">Primary</Button>
                    <Button className="btn btn-secondary-outline rounded-2xl">Secondary</Button>
                    <Button className="btn btn-success-outline rounded-2xl">Success</Button>
                    <Button className="btn btn-danger-outline rounded-2xl">Danger</Button>
                    <Button className="btn btn-warning-outline rounded-2xl">Warning</Button>
                    <Button className="btn btn-info-outline rounded-2xl">Info</Button>
                    <Button className="btn btn-light-outline rounded-2xl">Light</Button>
                    <Button className="btn btn-dark-outline rounded-2xl">Dark</Button>
                </>
            ),
            jsxCode: `<Button className="btn btn-primary-outline rounded-2xl">Primary</Button>
<Button className="btn btn-secondary-outline rounded-2xl">Secondary</Button>
<Button className="btn btn-success-outline rounded-2xl">Success</Button>
<Button className="btn btn-danger-outline rounded-2xl">Danger</Button>
<Button className="btn btn-warning-outline rounded-2xl">Warning</Button>
<Button className="btn btn-info-outline rounded-2xl">Info</Button>
<Button className="btn btn-light-outline rounded-2xl">Light</Button>
<Button className="btn btn-dark-outline rounded-2xl">Dark</Button>`,
            htmlCode: `<button class="btn btn-primary-outline rounded-2xl">Primary</button>
<button class="btn btn-secondary-outline rounded-2xl">Secondary</button>
<button class="btn btn-success-outline rounded-2xl">Success</button>
<button class="btn btn-danger-outline rounded-2xl">Danger</button>
<button class="btn btn-warning-outline rounded-2xl">Warning</button>
<button class="btn btn-info-outline rounded-2xl">Info</button>
<button class="btn btn-light-outline rounded-2xl">Light</button>
<button class="btn btn-dark-outline rounded-2xl">Dark</button>`,
            cssCode: `className="btn btn-primary-outline rounded-2xl"
className="btn btn-secondary-outline rounded-2xl"
className="btn btn-success-outline rounded-2xl"
className="btn btn-danger-outline rounded-2xl"
className="btn btn-warning-outline rounded-2xl"
className="btn btn-info-outline rounded-2xl"
className="btn btn-light-outline rounded-2xl"
className="btn btn-dark-outline rounded-2xl"`,
        },
        {
            ID: 5,
            Tittle: "Light Buttons",
            jsxExample: (
                <>
                    <Button className="btn btn-primary-light">Primary</Button>
                    <Button className="btn btn-secondary-light">Secondary</Button>
                    <Button className="btn btn-success-light">Success</Button>
                    <Button className="btn btn-danger-light">Danger</Button>
                    <Button className="btn btn-warning-light">Warning</Button>
                    <Button className="btn btn-info-light">Info</Button>
                    <Button className="btn btn-purple-light">Purple</Button>
                    <Button className="btn btn-teal-light">Teal</Button>
                    <Button className="btn btn-orange-light">Orange</Button>
                </>
            ),
            jsxCode: `<Button className="btn btn-primary-light">Primary</Button>
<Button className="btn btn-secondary-light">Secondary</Button>
<Button className="btn btn-success-light">Success</Button>
<Button className="btn btn-danger-light">Danger</Button>
<Button className="btn btn-warning-light">Warning</Button>
<Button className="btn btn-info-light">Info</Button>
<Button className="btn btn-purple-light">Purple</Button>
<Button className="btn btn-teal-light">Teal</Button>
<Button className="btn btn-orange-light">Orange</Button>`,
            htmlCode: `<button class="btn btn-primary-light">Primary</button>
<button class="btn btn-secondary-light">Secondary</button>
<button class="btn btn-success-light">Success</button>
<button class="btn btn-danger-light">Danger</button>
<button class="btn btn-warning-light">Warning</button>
<button class="btn btn-info-light">Info</button>
<button class="btn btn-purple-light">Purple</button>
<button class="btn btn-teal-light">Teal</button>
<button class="btn btn-orange-light">Orange</button>`,
            cssCode: `className="btn btn-primary-light"
className="btn btn-secondary-light"
className="btn btn-success-light"
className="btn btn-danger-light"
className="btn btn-warning-light"
className="btn btn-info-light"
className="btn btn-purple-light"
className="btn btn-teal-light"
className="btn btn-orange-light"`,
        },
        {
            ID: 6,
            Tittle: "Light Rounded Buttons",
            jsxExample: (
                <>
                    <Button className="btn btn-primary-light rounded-2xl">Primary</Button>
                    <Button className="btn btn-secondary-light rounded-2xl">Secondary</Button>
                    <Button className="btn btn-success-light rounded-2xl">Success</Button>
                    <Button className="btn btn-danger-light rounded-2xl">Danger</Button>
                    <Button className="btn btn-warning-light rounded-2xl">Warning</Button>
                    <Button className="btn btn-info-light rounded-2xl">Info</Button>
                    <Button className="btn btn-purple-light rounded-2xl">Purple</Button>
                    <Button className="btn btn-teal-light rounded-2xl">Teal</Button>
                    <Button className="btn btn-orange-light rounded-2xl">Orange</Button>
                </>
            ),
            jsxCode: `<Button className="btn btn-primary-light rounded-2xl">Primary</Button>
<Button className="btn btn-secondary-light rounded-2xl">Secondary</Button>
<Button className="btn btn-success-light rounded-2xl">Success</Button>
<Button className="btn btn-danger-light rounded-2xl">Danger</Button>
<Button className="btn btn-warning-light rounded-2xl">Warning</Button>
<Button className="btn btn-info-light rounded-2xl">Info</Button>
<Button className="btn btn-purple-light rounded-2xl">Purple</Button>
<Button className="btn btn-teal-light rounded-2xl">Teal</Button>
<Button className="btn btn-orange-light rounded-2xl">Orange</Button>`,
            htmlCode: `<button class="btn btn-primary-light rounded-2xl">Primary</button>
<button class="btn btn-secondary-light rounded-2xl">Secondary</button>
<button class="btn btn-success-light rounded-2xl">Success</button>
<button class="btn btn-danger-light rounded-2xl">Danger</button>
<button class="btn btn-warning-light rounded-2xl">Warning</button>
<button class="btn btn-info-light rounded-2xl">Info</button>
<button class="btn btn-purple-light rounded-2xl">Purple</button>
<button class="btn btn-teal-light rounded-2xl">Teal</button>
<button class="btn btn-orange-light rounded-2xl">Orange</button>`,
            cssCode: `className="btn btn-primary-light rounded-2xl"
className="btn btn-secondary-light rounded-2xl"
className="btn btn-success-light rounded-2xl"
className="btn btn-danger-light rounded-2xl"
className="btn btn-warning-light rounded-2xl"
className="btn btn-info-light rounded-2xl"
className="btn btn-purple-light rounded-2xl"
className="btn btn-teal-light rounded-2xl"
className="btn btn-orange-light rounded-2xl"`,
        },
        {
            ID: 7,
            Tittle: "Gradient Buttons",
            jsxExample: (
                <>
                    <Button className="btn btn-primary-gradient">Primary</Button>
                    <Button className="btn btn-secondary-gradient">Secondary</Button>
                    <Button className="btn btn-success-gradient">Success</Button>
                    <Button className="btn btn-danger-gradient">Danger</Button>
                    <Button className="btn btn-warning-gradient">Warning</Button>
                    <Button className="btn btn-info-gradient">Info</Button>
                    <Button className="btn btn-purple-gradient ">Purple</Button>
                    <Button className="btn btn-teal-gradient ">Teal</Button>
                    <Button className="btn btn-orange-gradient ">Orange</Button>
                </>
            ),
            jsxCode: `<Button className="btn btn-primary-gradient">Primary</Button>
<Button className="btn btn-secondary-gradient">Secondary</Button>
<Button className="btn btn-success-gradient">Success</Button>
<Button className="btn btn-danger-gradient">Danger</Button>
<Button className="btn btn-warning-gradient">Warning</Button>
<Button className="btn btn-info-gradient">Info</Button>
<Button className="btn btn-purple-gradient ">Purple</Button>
<Button className="btn btn-teal-gradient ">Teal</Button>
<Button className="btn btn-orange-gradient ">Orange</Button>`,
            htmlCode: `<button class="btn btn-primary-gradient">Primary</button>
<button class="btn btn-secondary-gradient">Secondary</button>
<button class="btn btn-success-gradient">Success</button>
<button class="btn btn-danger-gradient">Danger</button>
<button class="btn btn-warning-gradient">Warning</button>
<button class="btn btn-info-gradient">Info</button>
<button class="btn btn-purple-gradient ">Purple</button>
<button class="btn btn-teal-gradient ">Teal</button>
<button class="btn btn-orange-gradient ">Orange</button>`,
            cssCode: `className="btn btn-primary-gradient"
className="btn btn-secondary-gradient"
className="btn btn-success-gradient"
className="btn btn-danger-gradient"
className="btn btn-warning-gradient"
className="btn btn-info-gradient"
className="btn btn-purple-gradient "
className="btn btn-teal-gradient "
className="btn btn-orange-gradient "`,
        },
        {
            ID: 8,
            Tittle: "Rounded Gradient Buttons",
            jsxExample: (
                <>
                    <Button className="btn btn-primary-gradient rounded-2xl">Primary</Button>
                    <Button className="btn btn-secondary-gradient rounded-2xl">Secondary</Button>
                    <Button className="btn btn-success-gradient rounded-2xl">Success</Button>
                    <Button className="btn btn-danger-gradient rounded-2xl">Danger</Button>
                    <Button className="btn btn-warning-gradient rounded-2xl">Warning</Button>
                    <Button className="btn btn-info-gradient rounded-2xl">Info</Button>
                    <Button className="btn btn-purple-gradient rounded-2xl">Purple</Button>
                    <Button className="btn btn-teal-gradient rounded-2xl">Teal</Button>
                    <Button className="btn btn-orange-gradient  rounded-2xl">Orange</Button>
                </>
            ),
            jsxCode: `<Button className="btn btn-primary-gradient rounded-2xl">Primary</Button>
<Button className="btn btn-secondary-gradient rounded-2xl">Secondary</Button>
<Button className="btn btn-success-gradient rounded-2xl">Success</Button>
<Button className="btn btn-danger-gradient rounded-2xl">Danger</Button>
<Button className="btn btn-warning-gradient rounded-2xl">Warning</Button>
<Button className="btn btn-info-gradient rounded-2xl">Info</Button>
<Button className="btn btn-purple-gradient rounded-2xl">Purple</Button>
<Button className="btn btn-teal-gradient rounded-2xl">Teal</Button>
<Button className="btn btn-orange-gradient rounded-2xl">Orange</Button>`,
            htmlCode: `<button class="btn btn-primary-gradient rounded-2xl">Primary</button>
<button class="btn btn-secondary-gradient rounded-2xl">Secondary</button>
<button class="btn btn-success-gradient rounded-2xl">Success</button>
<button class="btn btn-danger-gradient rounded-2xl">Danger</button>
<button class="btn btn-warning-gradient rounded-2xl">Warning</button>
<button class="btn btn-info-gradient rounded-2xl">Info</button>
<button class="btn btn-purple-gradient rounded-2xl">Purple</button>
<button class="btn btn-teal-gradient rounded-2xl">Teal</button>
<button class="btn btn-orange-gradient rounded-2xl">Orange</button>`,
            cssCode: `className="btn btn-primary-gradient rounded-2xl"
className="btn btn-secondary-gradient rounded-2xl"
className="btn btn-success-gradient rounded-2xl"
className="btn btn-danger-gradient rounded-2xl"
className="btn btn-warning-gradient rounded-2xl"
className="btn btn-info-gradient rounded-2xl"
className="btn btn-purple-gradient rounded-2xl"
className="btn btn-teal-gradient rounded-2xl"
className="btn btn-orange-gradient rounded-2xl"`,
        },
        {
            ID: 9,
            Tittle: 'Icon Button',
            jsxExample: (
                <>
                    <Button className="btn btn-primary h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser' />} iconColor="" iconSize={13}></Button>
                    <Button className="btn btn-secondary h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser' />} iconColor="" iconSize={13}></Button>
                    <Button className="btn btn-success h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser' />} iconColor="" iconSize={13}></Button>
                    <Button className="btn btn-danger h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser' />} iconColor="" iconSize={13}></Button>
                    <Button className="btn btn-warning h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser' />} iconColor="" iconSize={13}></Button>
                    <Button className="btn btn-info h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser' />} iconColor="" iconSize={13}></Button>

                    <Button className="btn btn-primary-light border-none rounded-full h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser' />} iconColor="" iconSize={13}></Button>
                    <Button className="btn btn-secondary-light rounded-full h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser' />} iconColor="" iconSize={13}></Button>
                    <Button className="btn btn-success-light rounded-full h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser' />} iconColor="" iconSize={13}></Button>
                    <Button className="btn btn-danger-light rounded-full h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser' />} iconColor="" iconSize={13}></Button>
                    <Button className="btn btn-warning-light rounded-full h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser' />} iconColor="" iconSize={13}></Button>
                    <Button className="btn btn-info-light rounded-full h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser' />} iconColor="" iconSize={13}></Button>

                    <Button className="btn btn-outline-primary rounded-full h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser' />} iconColor="" iconSize={13}></Button>
                    <Button className="btn btn-outline-secondary rounded-full h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser' />} iconColor="" iconSize={13}></Button>
                    <Button className="btn btn-outline-success rounded-full h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser' />} iconColor="" iconSize={13}></Button>
                    <Button className="btn btn-outline-danger rounded-full h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser' />} iconColor="" iconSize={13}></Button>
                    <Button className="btn btn-outline-warning rounded-full h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser' />} iconColor="" iconSize={13}></Button>
                    <Button className="btn btn-outline-info rounded-full h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser' />} iconColor="" iconSize={13}></Button>
                </>
            ),
            jsxCode: `<Button className="btn btn-primary h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser'/>} iconColor="" iconSize={13}></Button>
<Button className="btn btn-secondary h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser'/>} iconColor="" iconSize={13}></Button>
<Button className="btn btn-success h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser'/>} iconColor="" iconSize={13}></Button>
<Button className="btn btn-danger h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser'/>} iconColor="" iconSize={13}></Button>
<Button className="btn btn-warning h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser'/>} iconColor="" iconSize={13}></Button>
<Button className="btn btn-info h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser'/>} iconColor="" iconSize={13}></Button>
                    
<Button className="btn btn-primary-light border-none rounded-full h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser'/>} iconColor="" iconSize={13}></Button>
<Button className="btn btn-secondary-light rounded-full h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser'/>} iconColor="" iconSize={13}></Button>
<Button className="btn btn-success-light rounded-full h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser'/>} iconColor="" iconSize={13}></Button>
<Button className="btn btn-danger-light rounded-full h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser'/>} iconColor="" iconSize={13}></Button>
<Button className="btn btn-warning-light rounded-full h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser'/>} iconColor="" iconSize={13}></Button>
<Button className="btn btn-info-light rounded-full h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser'/>} iconColor="" iconSize={13}></Button>

<Button className="btn btn-outline-primary rounded-full h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser'/>} iconColor="" iconSize={13}></Button>
<Button className="btn btn-outline-secondary rounded-full h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser'/>} iconColor="" iconSize={13}></Button>
<Button className="btn btn-outline-success rounded-full h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser'/>} iconColor="" iconSize={13}></Button>
<Button className="btn btn-outline-danger rounded-full h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser'/>} iconColor="" iconSize={13}></Button>
<Button className="btn btn-outline-warning rounded-full h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser'/>} iconColor="" iconSize={13}></Button>
<Button className="btn btn-outline-info rounded-full h-10 w-10 p-1" iconName={<DynamicIcon name='FaUser'/>} iconColor="" iconSize={13}></Button>`,
            htmlCode: `No Code`,
            cssCode: `className="btn btn-primary h-10 w-10 p-1"
className="btn btn-secondary h-10 w-10 p-1"
className="btn btn-success h-10 w-10 p-1"
className="btn btn-danger h-10 w-10 p-1"
className="btn btn-warning h-10 w-10 p-1"
className="btn btn-info h-10 w-10 p-1"

className="btn btn-primary-light border-none rounded-full h-10 w-10 p-1"
className="btn btn-secondary-light border-none rounded-full h-10 w-10 p-1"
className="btn btn-success-light border-none rounded-full h-10 w-10 p-1"
className="btn btn-danger-light border-none rounded-full h-10 w-10 p-1"
className="btn btn-warning-light border-none rounded-full h-10 w-10 p-1"
className="btn btn-info-light border-none rounded-full h-10 w-10 p-1"

className="btn btn-outline-primary rounded-full h-10 w-10 p-1"
className="btn btn-outline-secondary rounded-full h-10 w-10 p-1"
className="btn btn-outline-success rounded-full h-10 w-10 p-1"
className="btn btn-outline-danger rounded-full h-10 w-10 p-1"
className="btn btn-outline-warning rounded-full h-10 w-10 p-1"
className="btn btn-outline-info rounded-full h-10 w-10 p-1"

            `
        },
        {
            ID: 10,
            Tittle: 'Social Buttons',
            jsxExample: (
                <>
                    <Button className="btn btn-primary h-10 w-10 p-1" iconName={<DynamicIcon name='TiSocialFacebook' size={22} />} iconColor="" iconSize={22}></Button>
                    <Button className="btn btn-success-gradient h-10 w-10 p-1" iconName={<DynamicIcon name="FaXTwitter" size={20} />} iconColor="" iconSize={15}></Button>
                    <Button className="btn btn-orange-gradient h-10 w-10 p-1" iconName={<DynamicIcon name="FaInstagram" size={20} />} iconColor="" iconSize={18}></Button>
                    <Button className="btn btn-dark h-10 w-10 p-1" iconName={<DynamicIcon name="FaGithub" size={20} />} iconColor="" iconSize={18}></Button>
                    <Button className="btn btn-danger h-10 w-10 p-1" iconName={<DynamicIcon name="CiYoutube" size={20} />} iconColor="" iconSize={22}></Button>
                    <Button className="btn btn-danger bg-red-400 h-10 w-10 p-1" iconName={<DynamicIcon name="FaGooglePlusG" size={20} />} iconColor="" iconSize={22}></Button>
                </>
            ),
            jsxCode: `<Button className="btn btn-primary h-10 w-10" iconName={"TiSocialFacebook"} iconColor="" iconSize={22}></Button>
<Button className="btn btn-success-gradient h-10 w-10 p-1" iconName={"FaXTwitter"} iconColor="" iconSize={15}></Button>
<Button className="btn btn-orange-gradient h-10 w-10 p-1" iconName={"FaInstagram"} iconColor="" iconSize={18}></Button>
<Button className="btn btn-dark h-10 w-10 p-1" iconName={"FaGithub"} iconColor="" iconSize={18}></Button>
<Button className="btn btn-danger h-10 w-10 p-1" iconName={"CiYoutube"} iconColor="" iconSize={22}></Button>
<Button className="btn btn-danger bg-red-400 h-10 w-10 p-1" iconName={"FaGooglePlusG"} iconColor="" iconSize={22}></Button>`,
            htmlCode: `No Code`,
            cssCode: `className="btn btn-primary h-10 w-10 p-1"
className="btn btn-success-gradient h-10 w-10 p-1"
className="btn btn-orange-gradient h-10 w-10 p-1"
className="btn btn-dark h-10 w-10 p-1"
className="btn btn-danger h-10 w-10 p-1"
className="btn btn-danger bg-red-400 h-10 w-10 p-1"
            `
        },
    ];

    return (
        <>
            <div className='bg-white dark:bg-slate-900 text-black dark:text-white'>
                {/* <ButtonTestPage/> */}
                <Card
                    className="my-2 p-2 md:p-4 border bg-white dark:bg-slate-900 text-black dark:text-white"
                    style={{
                        backgroundColor: CommonSave_GlobalValStore.ThemeBackground,
                    }}
                >
                    <div className="flex justify-between mb-4 items-center">
                        <h2 className="text-xl font-semibold underline uppercase">
                            Button Component
                        </h2>
                        <span
                            className="text-[10px] cursor-pointer bg-blue-300/20 text-center py-1 px-2 rounded-lg"
                            onClick={() =>
                                setCheatsheetOpen(
                                    CheatsheetOpen === "Button Component" ? null : "Button Component"
                                )
                            }
                        >
                            {CheatsheetOpen === "Button Component" ? "Hide Code" : "Show Code"}
                        </span>
                    </div>

                    {/* Smooth expandable panel */}
                    <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden dark:bg-slate-500 bg-slate-100
            ${CheatsheetOpen === "Button Component"
                                ? "opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="p-3 rounded-md">
                            <pre className="text-sm whitespace-pre overflow-x-auto">
                                <code>{code}</code>
                            </pre>
                        </div>
                    </div>
                </Card>
                {ButtondataArray.map((items) => (
                    <Card
                        key={items.ID}
                        className="my-2 p-2 md:p-4 border bg-white dark:bg-slate-900 text-black dark:text-white"
                        style={{
                            backgroundColor: CommonSave_GlobalValStore.ThemeBackground,
                        }}
                    >
                        <div className="flex justify-between mb-4 items-center">
                            <h2 className="text-xl font-semibold">{items.Tittle}</h2>
                            <span
                                className="text-[10px] cursor-pointer bg-blue-300/20 text-center py-1 px-2 rounded-lg "
                                onClick={() =>
                                    setCheatsheetOpen(
                                        CheatsheetOpen === items.Tittle ? null : items.Tittle
                                    )
                                }
                            >
                                {CheatsheetOpen === items.Tittle ? "Hide Code" : "Show Code"}
                            </span>
                        </div>

                        {/* Render JSX Example */}
                        <div className="flex flex-wrap gap-4 my-2">
                            {items.jsxExample}
                        </div>

                        {/* Show Cheatsheet */}
                        {CheatsheetOpen === items.Tittle && (
                            <CheatsheetCard
                                htmlCode={items.htmlCode}
                                cssCode={items.cssCode}
                                jsxCode={items.jsxCode}
                            />
                        )}
                    </Card>
                ))}
            </div>
        </>
    )
}

export default ButtonList