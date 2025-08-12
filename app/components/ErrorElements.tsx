import { AlertCircle } from "lucide-react";

export const ErrorElement = () => {
  return (
    <>
      <div className="flex justify-center mb-1">
        <AlertCircle className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] text-red-500" />
      </div>
      <p className="text-[14px] md:text-[16px] text-neutral-700 text-center">
        Failed to load
      </p>
    </>
  );
};

export function LineChartErrorElement() {
  return (
    <div className="h-70 w-full bg-muted/50 min-w-0 flex flex-col justify-center items-center relative">
      <AlertCircle className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] text-red-500" />
      <p className="text-[14px] md:text-[16px] text-neutral-700 text-center">
        Failed to load charts data
      </p>
    </div>
  );
}
