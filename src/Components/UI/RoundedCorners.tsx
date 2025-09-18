import { Card } from "anshu-reactui";

const roundedClasses = [
  "rounded",
  "rounded-sm",
  "rounded-md",
  "rounded-lg",
  "rounded-xl",
  "rounded-2xl",
  "rounded-3xl",
  "rounded-full",
];

export function RoundedCorners() {
  return (
    <>
    <Card padding="p-2" className="my-4 border">
        <h2 className="text-xl font-semibold">Rounded corners</h2>
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {roundedClasses.map((cls) => (
            <div key={cls} className="flex justify-center ">
              <div className={`w-full ${cls} h-10 border p-2 rounded flex items-center justify-center text-sm md:text-base`}>
                {cls}
              </div>
            </div>
          ))}
          {roundedClasses.map((cls) => (
            <div key={cls} className="flex justify-center ">
              <div className={`w-full ${cls} h-10 bg-green-400 text-white p-2 rounded flex items-center justify-center text-sm md:text-base`}>
                {cls}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}