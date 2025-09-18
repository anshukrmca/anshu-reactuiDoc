import { Card } from "anshu-reactui";

interface BorderWidthsAndStylesProps {
  borderWidthClasses: string[];
  borderStyleClasses: string[];
}

export function BorderWidthsAndStyles({ borderWidthClasses, borderStyleClasses }: BorderWidthsAndStylesProps) {
  return (
    <>
      <Card padding="p-2" className="my-2">
        <h2 className="text-xl my-4 font-semibold">Border widths & styles</h2>
        <h3 className="font-medium mb-2">Widths</h3>
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {borderWidthClasses.map((cls) => (
            <div key={cls} className="flex justify-center ">
              <div className={`w-full ${cls} border-green-500 h-10 border-2 p-2 rounded flex items-center justify-center text-sm md:text-base`}>
                {cls}
              </div>
            </div>
          ))}
        </div>

        <h3 className="font-medium my-4">Styles</h3>
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {borderStyleClasses.map((cls) => (
            <div key={cls} className="flex justify-center ">
              <div className={`w-full border-2 ${cls} border-amber-500 h-10 p-2 rounded flex items-center justify-center text-sm md:text-base`}>
                {cls}
              </div>
            </div>
          ))}
        </div>

         <h3 className="font-medium my-4">Color + style + width combos</h3>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
          {['border-2 border-dashed border-blue-500','border-4 border-double border-green-600'].map((cls) => (
            <div key={cls} className="flex justify-center ">
              <div className={`w-full ${cls} h-10 p-2 rounded flex items-center justify-center text-sm md:text-base`}>
                {cls}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}