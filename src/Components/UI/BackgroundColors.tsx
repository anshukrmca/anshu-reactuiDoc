import { Card, DataTable } from "anshu-reactui";
import { CodeViewer } from "../CodeViewer/CodeViewer";
import { useAppSelector } from "../../CustomeHooks/Hooks";
import DynamicIcon from "../Icons/DynamicIcon";

const allColors = [
  "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan",
  "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose",
  "slate", "gray", "zinc", "neutral", "stone"
];

const colorShades = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];
const opacities = ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"];

const html1 = `<div className="flex items-center gap-4 rounded-lg p-6 shadow-md border-2 bg-red-400">
       <span className="inline-flex shrink-0 rounded-full border border-pink-300 bg-pink-100 p-2 dark:border-pink-300/10 dark:bg-pink-400/10">
             <DynamicIcon name="CiBellOn"/>
       </span>
       <div>
          <p className="">
            <span className="font-medium">Tom Watson</span> mentioned you in
            <span className="font-medium">Logo redesign</span>
          </p>
          <time className="mt-1 block" dateTime="9:37">9:37am</time>
      </div>
</div>`

const colorUtilityColumns = [
  {
    key: "utility",
    header: "Utility",
    accessor: "utility",
  },
  {
    key: "description",
    header: "Description",
    accessor: "description",
  },
];

const colorUtilities = [
  { utility: "bg-*", description: "Sets the background color of an element" },
  { utility: "text-*", description: "Sets the text color of an element" },
  { utility: "decoration-*", description: "Sets the text decoration color of an element" },
  { utility: "border-*", description: "Sets the border color of an element" },
  { utility: "outline-*", description: "Sets the outline color of an element" },
  { utility: "shadow-*", description: "Sets the color of box shadows" },
  { utility: "inset-shadow-*", description: "Sets the color of inset box shadows" },
  { utility: "ring-*", description: "Sets the color of ring shadows" },
  { utility: "inset-ring-*", description: "Sets the color of inset ring shadows" },
  { utility: "accent-*", description: "Sets the accent color of form controls" },
  { utility: "caret-*", description: "Sets the caret color in form controls" },
  { utility: "fill-*", description: "Sets the fill color of SVG elements" },
  { utility: "stroke-*", description: "Sets the stroke color of SVG elements" },
];



export function BackgroundColors() {
  const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
  const shadeSnippets = colorShades.map((shade) => ` <div className="bg-sky-${shade}"></div>`);
  const opacitiesSnippets = opacities.map((opacity) => ` <div className="bg-red-500/${opacity}"></div>`);

  return (
    <Card
      className="my-2 p-2 md:p-4 border bg-white dark:bg-slate-900 text-black dark:text-white"
      style={{
        backgroundColor: CommonSave_GlobalValStore.ThemeBackground,
      }}
    >
      <h2 className="text-xl font-semibold mb-4">Colors</h2>
      <p data-description="true" className="my-6 text-base opacity-70">Using and customizing the color palette in Tailwind CSS projects.</p>
      <p>Tailwind CSS includes a vast, beautiful color palette out of the box, carefully crafted by expert designers and suitable for a wide range of
        different design styles.</p>

      <Card
        className="my-4 items-center shadow-none hover:shadow-none overflow-hidden"
        style={{
          backgroundColor: CommonSave_GlobalValStore.ThemeBackground,
        }}
      >
        <div className="w-full flex-1">
          <div className="flex overflow-x-auto">
            <div className="flex-1">
              <div className="min-w-max ">
                <div className="flex gap-2">
                  <div className="flex-shrink-0 w-20 md:w-32"></div>
                  <div className="flex gap-1">
                    {colorShades.map((shade) => (
                      <div
                        key={shade}
                        className="h-10 w-10 md:w-20 text-[12px] flex items-center justify-center"
                      >
                        {shade}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  {allColors.map((color) => (
                    <div key={color} className="flex gap-2 items-center my-1">
                      {/* Fixed left color label */}
                      <div className="flex-shrink-0 w-20 md:w-32 h-10 flex items-center text-[12px] md:text-sm capitalize">
                        {color}
                      </div>

                      {/* Scrollable shades row */}
                      <div className="flex gap-1">
                        {colorShades.map((shade) => (
                          <div
                            key={shade}
                            className={`h-10 w-10 md:w-20 text-[12px] flex items-center justify-center bg-${color}-${shade}`}
                          >
                            {/* {shade} */}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <p className="my-5 outline-red-300">Every color in the default palette includes 11 steps, with 50 being the lightest, and 950 being the darkest:</p>

      <div className="outline outline-red-500 p-4 m-4">Outline Test</div>
      <div className="ring-2 ring-red-500 p-4 m-4">Ring Test</div>
      <label className="accent-green-500"><input type="checkbox" className="accent-green-500" /> Accent Test</label>

      <Card
        className="w-full px-8 mx-auto flex flex-col items-center shadow-none hover:shadow-none my-4 bg-white dark:bg-slate-900 text-black dark:text-white"
        style={{
          backgroundColor: CommonSave_GlobalValStore.ThemeBackground,
        }}
      >

        {/* Sky shade palette */}
        <div className="w-full flex gap-1 my-auto md:gap-2 justify-center p-2 bg-slate-100/20">
          {colorShades.map((shade) => (
            <div key={shade} className="text-center">
              <div className={`h-4 md:h-10 w-4 md:w-10 bg-sky-${shade}`}></div>
              <span className="text-[8px] md:text-sm lg:text-base">{shade}</span>
            </div>
          ))}
        </div>

        {/* Code samples */}
        <div className="w-full rounded overflow-hidden">
          <CodeViewer code={`<div>\n${shadeSnippets.join("\n")}\n</div`} />
        </div>
      </Card>
      <p className="my-4">The entire color palette is available across all color related utilities, including things like
        <a className="font-bold underline decoration-2 decoration-red-600" href="/docs/background-color"> background color</a>,
        <a className="font-bold underline decoration-2 decoration-amber-600" href="/docs/border-color"> border color</a>,
        <a className="font-bold underline decoration-2 decoration-green-600" href="/docs/fill"> fill</a>,
        <a className="font-bold underline decoration-2" href="/docs/caret-color"> caret color</a>,
        and many more.</p>

      <h2 className="uppercase opacity-70 my-4"><a href="#working-with-colors" >Working with colors</a></h2>

      <h3 className="opacity-90 my-4"><a href="#using-color-utilities" className="anchor">Using color utilities</a></h3>

      <p>Use color utilities like
        <code className="font-semibold">`bg-white`</code>,
        <code className="font-semibold">`border-pink-300`</code>, and
        <code className="font-semibold">`text-gray-950`</code>
        to set the different color properties of elements in your design:</p>


      <Card
        className="w-full px-8 mx-auto flex flex-col items-center shadow-none hover:shadow-none my-4"
        style={{
          backgroundColor: CommonSave_GlobalValStore.ThemeBackground,
        }}
      >

        {/* Sky shade palette */}
        <div className="w-full flex gap-1 my-auto md:gap-2 justify-center p-2 bg-slate-100/20">
          <div className="flex items-center gap-4 rounded-lg p-6 shadow-md border-2 bg-red-400">
            <span className="inline-flex shrink-0 rounded-full border border-pink-300 bg-pink-100 p-2 dark:border-pink-300/10 dark:bg-pink-400/10">
              <DynamicIcon name="CiBellOn" />
            </span>
            <div>
              <p className="">
                <span className="font-medium">Tom Watson</span> mentioned you in
                <span className="font-medium">Logo redesign</span>
              </p>
              <time className="mt-1 block" dateTime="9:37">9:37am</time>
            </div>
          </div>
        </div>

        {/* Code samples */}
        <div className="w-full rounded overflow-hidden">
          <CodeViewer code={html1} />
        </div>


      </Card>
      <p>Here's a full list of utilities that use your color palette:</p>


      <DataTable
        columns={colorUtilityColumns}
        data={colorUtilities}
        pageSizeOptions={[12]}
        initialPageSize={12}
      />

      <h3 className="uppercase opacity-70 my-4"><a href="#adjusting-opacity" className="anchor">Adjusting opacity</a></h3>

      <p>You can adjust the opacity of a color using syntax like
        <code className="font-semibold"> `bg-black/75`</code>, where
        <code className="font-semibold"> `75`</code> sets the alpha channel of the color to 75%:</p>

      <Card
        className="w-full px-8 mx-auto flex flex-col items-center shadow-none hover:shadow-none my-4"
        style={{
          backgroundColor: CommonSave_GlobalValStore.ThemeBackground,
        }}
      >

        {/* Sky shade palette */}
        <div className="w-full flex gap-1 my-auto md:gap-2 justify-center p-2 bg-slate-100/20">
          {opacities.map((shade) => {
            return (
              <div key={shade} className="text-center">
                <div className={`h-4 md:h-10 w-4 md:w-10 bg-red-500/${shade}`}></div>
                <span className="text-[8px] md:text-sm lg:text-base">{shade}</span>
              </div>
            )
          })}
        </div>

        {/* Code samples */}
        <div className="w-full rounded overflow-hidden">
          <CodeViewer code={`<div>\n${opacitiesSnippets.join("\n")}\n</div`} />
        </div>


      </Card>
    </Card>
  );
}
