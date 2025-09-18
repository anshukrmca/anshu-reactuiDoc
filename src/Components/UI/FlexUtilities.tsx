import { ClassCard } from "../ClassCard";

interface FlexUtilitiesProps {
  flexClasses: string[];
}

export function FlexUtilities({ flexClasses }: FlexUtilitiesProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-3">Flex utilities</h2>
      <div className="space-y-3">
        {flexClasses.map((fc) => (
          <ClassCard
            key={fc}
            cls={fc}
            example={
              <div className={`${fc} border p-3`}>
                <div className="bg-slate-200 p-2">A</div>
                <div className="bg-slate-300 p-2">B</div>
                <div className="bg-slate-400 p-2">C</div>
              </div>
            }
          />
        ))}
      </div>
    </section>
  );
}