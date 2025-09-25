import { Button } from "anshu-reactui";

const VARIANTS = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
  "orange",
  "teal",
  "purple",
  "pink",
] as const;

const ButtonTestPage = () => {
  return (
    <div className="space-y-4 p-4">
      {VARIANTS.map((variant) => (
        <div key={variant} className="flex flex-wrap gap-2 items-center">
          {/* Solid */}
          <Button variant={variant}>{variant}</Button>

          {/* Outline */}
          <Button variant={variant} outline>
            {variant}-outline
          </Button>

          {/* Light */}
          <Button variant={variant} light>
            {variant}-light
          </Button>

          {/* Gradient */}
          <Button variant={variant} gradient>
            {variant}-gradient
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ButtonTestPage;
