import { ClassCard } from "../ClassCard";

interface TypographyFontWeightsProps {
  fontSizes: string[];
  fontWeights: string[];
  generateFontWeightClasses: (prefix: string, weights: string[]) => string[];
}

export function TypographyFontWeights({ fontSizes, fontWeights, generateFontWeightClasses }: TypographyFontWeightsProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-3">Typography & Font weights</h2>
      <div className="space-y-2">
        {fontSizes.map((fs) => (
          <ClassCard key={fs} cls={`text-${fs}`} example={<div className={`text-${fs}`}>text-{fs}</div>} />
        ))}
        {generateFontWeightClasses("font", fontWeights).map((fw) => (
          <ClassCard key={fw} cls={fw} example={<div className={`${fw} text-lg`}>{fw}</div>} />
        ))}
      </div>
    </section>
  );
}