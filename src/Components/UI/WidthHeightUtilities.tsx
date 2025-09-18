import React from "react";
import { ClassCard } from "../ClassCard";

interface WidthHeightUtilitiesProps {
  widthClasses: string[];
  heightClasses: string[];
  likelyInvalidToken: (token: string) => boolean;
  makeExampleFor: (cls: string) => React.ReactNode;
}

export function WidthHeightUtilities({
  widthClasses,
  heightClasses,
  likelyInvalidToken,
  makeExampleFor,
}: WidthHeightUtilitiesProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-3">Width & Height utilities</h2>
      <p className="text-sm text-slate-500 mb-2">
        Invalid tokens like <span className="font-mono">100%</span> or <span className="font-mono">10vh</span> are shown with an inline-style preview; add them to theme.spacing if you want real classes.
      </p>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
        <div>
          <h3 className="font-medium mb-2">Widths</h3>
          <div className="space-y-2">
            {widthClasses.map((w) => (
              <ClassCard
                key={w}
                cls={w}
                example={makeExampleFor(w)}
                note={likelyInvalidToken(w.split("-").slice(1).join("-")) ? "Inline-style preview. Add to theme.extend to create a real utility." : undefined}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-medium mb-2">Heights</h3>
          <div className="space-y-2">
            {heightClasses.map((h) => (
              <ClassCard
                key={h}
                cls={h}
                example={makeExampleFor(h)}
                note={likelyInvalidToken(h.split("-").slice(1).join("-")) ? "Inline-style preview. Add to theme.extend to create a real utility." : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}