import { Card } from "anshu-reactui/lib";

interface TextColorsProps {
  textColorClasses: string[];
}

export function TextColors({ textColorClasses }: TextColorsProps) {
  return (
    <>
      <Card padding="p-2" className="my-2">
        <h2 className="text-xl font-semibold">Text colors (text-*)</h2>
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {textColorClasses.map((cls) => (
            <div key={cls} className="flex justify-center ">
              <div className={`w-full ${cls} h-10 border p-2 rounded flex items-center justify-center text-sm md:text-base`}>
                {cls}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>

  );
}