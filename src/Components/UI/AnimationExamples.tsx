import { ClassCard } from "../ClassCard";

const animationClasses = [
  "animate-spin",
  "animate-ping",
  "animate-pulse",
  "animate-bounce",
  "animate-slide-in-left",
  "animate-slide-in-right",
  "animate-slide-in-top",
  "animate-slide-in-bottom",
  "animate-progressBar",
];

const animationBgColors: Record<string, string> = {
  "animate-spin": "bg-blue-500",
  "animate-ping": "bg-green-500",
  "animate-pulse": "bg-purple-500",
  "animate-bounce": "bg-red-500",
  "animate-slide-in-left": "bg-yellow-500",
  "animate-slide-in-right": "bg-pink-500",
  "animate-slide-in-top": "bg-indigo-500",
  "animate-slide-in-bottom": "bg-orange-500",
  "animate-progressBar": "bg-teal-500",
};

export function AnimationExamples() {
  return (
    <div className="space-y-3 flex flex-wrap gap-3">
      {animationClasses.map((cls) => (
        <ClassCard
          key={cls}
          cls={cls}
          example={
            <div className={`w-24 h-24 flex items-center justify-center text-white rounded-md ${cls} ${animationBgColors[cls]}`}>
              animation — {cls}
            </div>
          }
        />
      ))}

      <ClassCard
        cls="transition duration-300 ease-in-out"
        example={
          <span className="w-20 transition duration-300 ease-in-out hover:scale-105 bg-indigo-100 p-4 rounded inline-block">
            hover me
          </span>
        }
      />
    </div>
  );
}