import { Card, hexToRgba } from "anshu-reactui/lib";
import colors from "tailwindcss/colors";
import { useAppSelector } from "../../CustomeHooks/Hooks";


const allColors = [
  "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan",
  "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose",
  "slate", "gray", "zinc", "neutral", "stone"
];

const colorShades = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];

export function TextColors() {
  const { CommonSave_GlobalValStore } = useAppSelector((state) => state);
  const bgColor = hexToRgba(CommonSave_GlobalValStore?.ThemeBackground, 0.9);
  return (
    <>
      <Card
        className="my-4 items-center shadow-none hover:shadow-none overflow-hidden my-Background"
        style={{
          background: CommonSave_GlobalValStore.ThemeBackground && bgColor,
        }}
      >
        <h2 className="text-xl font-semibold">Text colors (text-*)</h2>
        <div className="w-full overflow-x-auto">
          {allColors.map(color => {
            const colorObj = colors[color as keyof typeof colors] as Record<string, string> | undefined;
            if (!colorObj) return null;
            return (
              <div key={color} className="flex gap-2 items-center my-1 ">
                {/* Fixed left color label */}
                <div className="flex-shrink-0 w-14 sm:w-20 md:w-32 h-10 flex items-center text-[12px] md:text-sm capitalize">
                  {color}
                </div>
                <div className="flex gap-1">
                  {colorShades.map(shade => {
                    const hex = colorObj[shade];
                    if (!hex) return null;
                    return (
                      <div
                        key={shade}
                        className="h-6 my-Border p-1 whitespace-nowrap flex items-center justify-center text-[10px] md:text-sm text-white"
                        style={{ color: hex }}
                      >
                        text-{color}-{shade}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </>

  );
}