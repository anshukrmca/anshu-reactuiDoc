import  { type JSX } from "react";
import { BackgroundColors } from "../Components/UI/BackgroundColors";
import { TextColors } from "../Components/UI/TextColors";
import { BorderColors } from "../Components/UI/BorderColors";
import { BorderWidthsAndStyles } from "../Components/UI/BorderWidthsAndStyles";
import { RoundedCorners } from "../Components/UI/RoundedCorners";
import { WidthHeightUtilities } from "../Components/UI/WidthHeightUtilities";
import { GridExamples } from "../Components/UI/GridExamples";
import { FlexUtilities } from "../Components/UI/FlexUtilities";
import { TypographyFontWeights } from "../Components/UI/TypographyFontWeights";
import { AnimationExamples } from "../Components/UI/AnimationExamples";
import { ResponsiveExamples } from "../Components/UI/ResponsiveExamples";
import { FooterNote } from "../Components/UI/FooterNote";
import { ScaleClasses } from "../Components/UI/ScaleClasses";
import { useAppSelector } from "../CustomeHooks/Hooks";


/* ------------------- config arrays and helper functions actually used ------------------- */

const allColors = [
  "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan",
  "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "slate", "gray", "zinc", "neutral", "stone"
];

const colorShades = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];

const sizes = [
  "0", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "5", "6", "7", "8", "9", "10",
  "11", "12", "14", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56",
  "60", "64", "72", "80", "96", "auto", "px", "full", "screen", "min", "max", "1/2",
  "10vh", "20vh", "30vh", "40vh", "50vh", "60vh", "70vh", "80vh", "90vh", "100vh",
  "10vw", "20vw", "30vw", "40vw", "50vw", "60vw", "70vw", "80vw", "90vw", "100vw",
  "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%",
];

const fontSizes = ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"];
const fontWeights = ["hairline", "thin", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"];

const borderWidths = ["0", "1", "2", "3", "4", "8"];
const borderStyles = ["solid", "dashed", "dotted", "double", "0"];
const borderSides = ["", "t", "r", "b", "l"];

/* ------------------- helper generators ------------------- */
function generateColorClasses(prefix: string, colors: string | string[], shades?: string[]) {
  const colorsArray = Array.isArray(colors) ? colors : [colors]; // ensure it's always an array
  return colorsArray.flatMap(color =>
    shades?.length ? shades.map(shade => `${prefix}-${color}-${shade}`) : [`${prefix}-${color}`]
  );
}

const generateSizeClasses = (prefix: string, sizesArr: string[]) => sizesArr.map(s => `${prefix}-${s}`);
const generateFontWeightClasses = (prefix: string, weights: string[]) => weights.map(w => `${prefix}-${w}`);
function generateBorderWidthClasses(widths: string[], sides = borderSides) {
  return sides.flatMap(side => widths.map(width => `border${side ? "-" + side : ""}-${width}`));
}
function generateBorderStyleClasses(styles: string[], sides = borderSides) {
  return sides.flatMap(side => styles.map(style => `border${side ? "-" + side : ""}-${style}`));
}

/* ------------------- utility checks ------------------- */
const likelyInvalidToken = (token: string) => {
  return token.includes("%") || token.includes("vh") || token.includes("vw");
};

const makeExampleFor = (cls: string) => {
  if (cls.startsWith("w-") || cls.startsWith("h-") || cls.startsWith("min-w-") || cls.startsWith("max-w-")) {
    const token = cls.split("-").slice(1).join("-");
    if (likelyInvalidToken(token)) {
      const styleKey = cls.startsWith("h-") ? "height" : "width";
      return (
        <div style={{ [styleKey]: token as any, backgroundColor: "rgba(99,102,241,0.15)" }} className="flex items-center justify-center text-sm border rounded">
          {`${styleKey}: ${token} (inline-style preview)`}
        </div>
      );
    }
  }

  const animationClasses = [
    "animate-spin", "animate-ping", "animate-pulse", "animate-bounce",
    "animate-slide-in-left", "animate-slide-in-right", "animate-slide-in-top", "animate-slide-in-bottom", "animate-progressBar"
  ];
  if (animationClasses.includes(cls)) {
    return <div className={`${cls} inline-block p-3 bg-indigo-100 rounded`}>animation — {cls}</div>;
  }

  return <div className={`${cls} inline-block p-3 text-sm`}>.{cls}</div>;
};

/* ------------------- build classes ------------------- */
const bgColorClasses = generateColorClasses("bg", allColors, colorShades);
const textColorClasses = generateColorClasses("text", allColors, colorShades);
const borderColorClasses = generateColorClasses("border", "red", colorShades);

const widthClasses = generateSizeClasses("w", sizes);
const heightClasses = generateSizeClasses("h", sizes);

const gridCols = generateSizeClasses("grid-cols", ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]);
const gridRows = generateSizeClasses("grid-rows", ["1", "2", "3", "4", "5", "6"]);

const flexClasses = [
  "flex", "inline-flex",
  "flex-row", "flex-row-reverse", "flex-col", "flex-col-reverse",
  "flex-wrap", "flex-nowrap",
  "items-start", "items-center", "items-end", "items-stretch", "items-baseline",
  "justify-start", "justify-center", "justify-end", "justify-between", "justify-around", "justify-evenly"
];

const borderWidthClasses = generateBorderWidthClasses(borderWidths);
const borderStyleClasses = generateBorderStyleClasses(borderStyles);

/* ------------------- main component ------------------- */
export default function TailwindDocPlayground(): JSX.Element {
  const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
  return (
    <div 
    style={{background:CommonSave_GlobalValStore?.ThemeBackground}}
    className="p-2 w-full space-y-8 bg-white dark:bg-slate-900 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-2 ">Tailwind Comprehensive Playground</h1>
      <p className="text-sm text-slate-800 dark:text-red-300">
        Auto-generated examples for the utilities from your config. Tokens like <span className="font-mono">10vh</span> or <span className="font-mono">100%</span> are shown as inline-style previews because they aren't valid Tailwind token names by default — add them to <code>theme.extend</code> to make real utilities.
      </p>

      <BackgroundColors/>
      <TextColors textColorClasses={textColorClasses} />
      <BorderColors borderColorClasses={borderColorClasses} />
      <BorderWidthsAndStyles borderWidthClasses={borderWidthClasses} borderStyleClasses={borderStyleClasses} />
      <RoundedCorners />
      {/* <WidthHeightUtilities widthClasses={widthClasses} heightClasses={heightClasses} likelyInvalidToken={likelyInvalidToken} makeExampleFor={makeExampleFor} /> */}
      <GridExamples gridCols={gridCols} gridRows={gridRows} />
      <FlexUtilities flexClasses={flexClasses} />
      <TypographyFontWeights fontSizes={fontSizes} fontWeights={fontWeights} generateFontWeightClasses={generateFontWeightClasses} />
      <section>
        <h2 className="text-xl font-semibold mb-3">Animations & Transitions</h2>
        <AnimationExamples />
      </section>
      <ResponsiveExamples />
      <ScaleClasses/>
      <FooterNote />
    </div>
  );
}