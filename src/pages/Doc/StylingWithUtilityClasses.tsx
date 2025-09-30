import React from "react";
import { Card, hexToRgba } from "anshu-reactui/lib";
import { CodeViewer } from "../../Components/CodeViewer/CodeViewer";
import DynamicIcon from "../../Components/Icons/DynamicIcon";
import { useAppSelector } from "../../CustomeHooks/Hooks";

const StylingUtilityClasses: React.FC = () => {
     const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
      const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);

    const codeSnippet1 = `
<div className="mx-auto flex items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  <DynamicIcon name="FaRocketchat" size={30} className="text-indigo-500" />
  <div>
    <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
    <p className="text-gray-500 dark:text-gray-400">You have a new message!</p>
  </div>
</div>
`;

    const codeSnippet2 = `
<div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
    <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://firebasestorage.googleapis.com/v0/b/linkedin-clone-d79a1.appspot.com/o/man.png?alt=media&token=4b126130-032a-45b5-bea4-87adb0d096dc" alt="" />
    <div className="space-y-2 text-center sm:text-left">
        <div className="space-y-0.5">
            <p className="text-lg font-semibold text-black">Erin Lindford</p>
            <p className="font-medium text-gray-500">Product Engineer</p>
        </div>
        <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
            Message
        </button>
    </div>
</div>
`;

    const codeSnippet3 = `<button className="bg-sky-500 text-white hover:bg-sky-700 btn rounded-full border-0">Save changes</button>`;
    const codeSnippet4 = `<button class="btn">Save changes</button>
<style>
  .btn {
    background-color: var(--color-sky-500);
    &:hover {
      background-color: var(--color-sky-700);
    }
  }
</style>`;

const codeSnippet5 = `<div className="md:w-3/4 mt-4 mx-auto items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2 gap-2 p-8">
        {[...Array(8)].map((_, idx) => (
            <div
                key={idx}
                className="bg-gray-300 dark:bg-gray-700 h-20 flex items-center justify-center text-gray-700 dark:text-gray-200"
            >
                {idx + 1}
            </div>
        ))}
    </div>
</div>`;
    return (
         <Card
        className="my-4 items-center shadow-none hover:shadow-none overflow-hidden my-Background"
        style={{
          background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
        }}
      >
            <div className="px-6 py-6 md:py-8 lg:py-10 space-y-8">

                <p className="flex items-center gap-2 font-mono text-xs/6 font-medium tracking-widest text-gray-600 uppercase dark:text-gray-400" data-section="true">Core concepts</p>

                <h1 data-title="true" className="mt-2 text-3xl font-medium tracking-tight text-gray-950 dark:text-white">Styling with utility classes</h1>

                <p data-description="true" className="mt-6 text-base/7 text-gray-700 dark:text-gray-400">Building complex components from a constrained set of primitive utilities.</p>

                <div className="prose mt-10">
                    <h2 id="overview"><a href="#overview" className="anchor">Overview</a></h2>
                    <p>You style things with Tailwind by combining many single-purpose presentational classes <em>(utility classes)</em> directly in your markup:</p>
                    <div className="mt-4 mx-auto items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                        <div className="mx-auto md:w-1/2 flex items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                            <DynamicIcon name="FaRocketchat" size={30} className="text-indigo-500" />
                            <div>
                                <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
                                <p className="text-gray-500 dark:text-gray-400">You have a new message!</p>
                            </div>
                        </div>
                        <CodeViewer code={codeSnippet1} />
                    </div>

                    <p className="my-4">For example, in the UI above we've used:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>The <a href="/docs/display#flex">display</a> and <a href="/docs/padding">padding</a> utilities (<code>flex</code>, <code>shrink-0</code>, and <code>p-6</code>) to control the overall layout</li>
                        <li>The <a href="/docs/max-width">max-width</a> and <a href="/docs/margin">margin</a> utilities (<code>max-w-sm</code> and <code>mx-auto</code>) to constrain the card width and center it horizontally</li>
                        <li>The <a href="/docs/background-color">background-color</a>, <a href="/docs/border-radius">border-radius</a>, and <a href="/docs/box-shadow">box-shadow</a> utilities (<code>bg-white</code>, <code>rounded-xl</code>, and <code>shadow-lg</code>) to style the card's appearance</li>
                        <li>The <a href="/docs/width">width</a> and <a href="/docs/height">height</a> utilities (<code>size-12</code>) to set the width and height of the logo image</li>
                        <li>The <a href="/docs/gap">gap</a> utilities (<code>gap-x-4</code>) to handle the spacing between the logo and the text</li>
                        <li>The <a href="/docs/font-size">font-size</a>, <a href="/docs/text-color">color</a>, and <a href="/docs/font-weight">font-weight</a> utilities (<code>text-xl</code>, <code>text-black</code>, <code>font-medium</code>, etc.) to style the card text</li>
                    </ul>

                    <p className="my-4">Styling things this way contradicts a lot of traditional best practices, but once you try it you'll quickly notice some really important benefits:</p>

                    <ul className="list-disc pl-6 space-y-1 my-4">
                        <li><strong>You get things done faster</strong> — you don't spend any time coming up with class names, making decisions about selectors, or switching between HTML and CSS files, so your designs come together very fast.</li>
                        <li><strong>Making changes feels safer</strong> — adding or removing a utility class to an element only ever affects that element, so you never have to worry about accidentally breaking something another page that's using the same CSS.</li>
                        <li><strong>Maintaining old projects is easier</strong> — changing something just means finding that element in your project and changing the classes, not trying to remember how all of that custom CSS works that you haven't touched in six months.</li>
                        <li><strong>Your code is more portable</strong> — since both the structure and styling live in the same place, you can easily copy and paste entire chunks of UI around, even between different projects.</li>
                        <li><strong>Your CSS stops growing</strong> — since utility classes are so reusable, your CSS doesn't continue to grow linearly with every new feature you add to a project.</li>
                    </ul>

                    <p>These benefits make a big difference on small projects, but they are even more valuable for teams working on long-running projects at scale.</p>

                    <h3 id="why-not-just-use-inline-styles"><a href="#why-not-just-use-inline-styles" className="anchor">Why not just use inline styles?</a></h3>
                    <p className="my-4">A common reaction to this approach is wondering, “isn’t this just inline styles?” and in some ways it is — you’re applying styles directly to elements instead of assigning them a class name and then styling that class.</p>
                    <p className="my-4">But using utility classes has many important advantages over inline styles, for example:</p>
                    <ul className="list-disc pl-6 space-y-1 my-4">
                        <li><strong>Designing with constraints</strong> — using inline styles, every value is a magic number. With utilities, you’re choosing styles from a <a href="/docs/theme">predefined design system</a>, which makes it much easier to build visually consistent UIs.</li>
                        <li><strong>Hover, focus, and other states</strong> — inline styles can’t target states like hover or focus, but Tailwind’s <a href="/docs/hover-focus-and-other-states">state variants</a> make it easy to style those states with utility classes.</li>
                        <li><strong>Media queries</strong> — you can’t use media queries in inline styles, but you can use Tailwind’s <a href="/docs/responsive-design">responsive variants</a> to build fully responsive interfaces easily.</li>
                    </ul>
                </div>


                <p>This component is fully responsive and includes a button with hover and active styles, and is built entirely with utility classes:</p>

                <div className="mt-4 mx-auto items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                    <div className="md:w-1/2 mt-4 mx-auto items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                        <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
                            <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://firebasestorage.googleapis.com/v0/b/linkedin-clone-d79a1.appspot.com/o/man.png?alt=media&token=4b126130-032a-45b5-bea4-87adb0d096dc" alt="" />
                            <div className="space-y-2 text-center sm:text-left">
                                <div className="space-y-0.5">
                                    <p className="text-lg font-semibold text-black">Erin Lindford</p>
                                    <p className="font-medium text-gray-500">Product Engineer</p>
                                </div>
                                <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
                                    Message
                                </button>
                            </div>
                        </div>
                    </div>
                    <CodeViewer code={codeSnippet2} />
                </div>

                <h2 id="thinking-in-utility-classes"><a href="#thinking-in-utility-classes" className="anchor">Thinking in utility classes</a></h2>
                <h3 id="styling-hover-and-focus-states"><a href="#styling-hover-and-focus-states" className="anchor">Styling hover and focus states</a></h3>
                <p>To style an element on states like hover or focus, prefix any utility with the state you want to target, for example <code>hover:bg-sky-700</code>:</p>

                <div className="mt-4 mx-auto items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                    <p>Hover over this button to see the background color change</p>
                    <div className="flex justify-center my-2">
                        <button className="bg-sky-500 text-white hover:bg-sky-700 btn rounded-full border-0">Save changes</button>
                    </div>
                    <CodeViewer code={codeSnippet3} />
                </div>
                <p>These prefixes are called <a href="/docs/hover-focus-and-other-states">variants</a> in Tailwind, and they only apply the styles from a utility class when the condition for that variant matches.</p>
                <p>Here's what the generated CSS looks like for the <code>hover:bg-sky-700</code> class:</p>
                <div className="mt-4 mx-auto items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                    <p className="my-2">Generated CSS</p>
                    <CodeViewer code=".hover\:bg-sky-700 {
  &:hover {
    background-color: var(--color-sky-700);
  }
}"/>
                </div>
                <p>Notice how this class does nothing <em>unless</em> the element is hovered? Its <em>only</em> job is to provide hover styles — nothing else.</p>
                <p>This is different from how you'd write traditional CSS, where a single class would usually provide the styles for many states:</p>
                <div className="mt-4 mx-auto items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                    <p className="my-2">HTML</p>
                    <CodeViewer code={codeSnippet4} />
                </div>
                <p>You can even stack variants in Tailwind to apply a utility when multiple conditions match, like combining <code>hover:</code> and <code>disabled:</code></p>
                <div className="mt-4 mx-auto items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                    <CodeViewer code={`<button class="bg-sky-500 disabled:hover:bg-sky-500 ...">Save changes</button>`} />
                </div>
                <p>Learn more in the documentation styling elements on <a href="/docs/hover-focus-and-other-states">hover, focus, and other states</a>.</p>
                <h3 id="media-queries-and-breakpoints"><a href="#media-queries-and-breakpoints" className="anchor">Media queries and breakpoints</a></h3>
                <p>Just like hover and focus states, you can style elements at different breakpoints by prefixing any utility with the breakpoint where you want that style to apply:</p>
                <div className="mt-4 mx-auto items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                    <div className="md:w-3/4 mt-4 mx-auto items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2 gap-2 p-8">
                            {[...Array(8)].map((_, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gray-300 dark:bg-gray-700 h-20 flex items-center justify-center text-gray-700 dark:text-gray-200"
                                >
                                    {idx + 1}
                                </div>
                            ))}
                        </div>
                    </div>
                    <CodeViewer code={codeSnippet5} />
                </div>
                
            </div>
        </Card >
    );
};

export default StylingUtilityClasses;
