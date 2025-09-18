import { Card } from "anshu-reactui";

interface BorderColorsProps {
  borderColorClasses: string[];
}

export function BorderColors({ borderColorClasses }: BorderColorsProps) {
  return (
    <>
      <Card padding="p-2" className="my-2">
        <h2 className="text-xl my-4 font-semibold">Border colors (border-2 border-*)</h2>
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {borderColorClasses.map((cls) => (
            <div key={cls} className="flex justify-center ">
              <div className={`w-full ${cls} h-10 border-2 p-2 rounded flex items-center justify-center text-sm md:text-base`}>
                {cls}
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-xl my-4 font-semibold">Border colors (border-[1px] border-*)</h2>
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {borderColorClasses.map((cls) => (
            <div key={cls} className="flex justify-center ">
              <div className={`w-full ${cls} h-10 border-[1px] p-2 rounded flex items-center justify-center text-sm md:text-base`}>
                {cls}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}