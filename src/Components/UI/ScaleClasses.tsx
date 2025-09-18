import { ClassCard } from "../ClassCard";

const scaleClasses = [
  "scale-0","scale-50","scale-75","scale-90","scale-95","scale-100",
  "scale-105","scale-110","scale-125","scale-150"
];

// Add some hover variants
const hoverScales = [
  "hover:scale-95", "hover:scale-100", "hover:scale-105", "hover:scale-110", "hover:scale-125"
];

export function ScaleClasses() {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">Scale classes with hover (scale-*)</h2>
      <div className="grid gap-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {scaleClasses.map((cls, idx) => {
          const hoverCls = hoverScales[idx % hoverScales.length]; // rotate hover classes
          return (
            <ClassCard
              key={cls}
              cls={`${cls} ${hoverCls}`}
              example={
                <div className={`border-2 border-gray-300 p-6 rounded ${cls} ${hoverCls} transition-transform`}>
                  {cls} + {hoverCls}
                </div>
              }
            />
          );
        })}
      </div>
    </section>
  );
}
