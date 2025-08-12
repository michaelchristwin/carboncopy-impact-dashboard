import { LoaderCircle } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

export const DoubleSkeleton = () => {
  return (
    <>
      <Skeleton className="h-[30px] md:h-[40px] w-32 mx-auto mb-1" />
      <Skeleton className="h-[14px] md:h-[16px] w-12 mx-auto" />
    </>
  );
};

export function LineChartSkeleton() {
  return (
    <div className="h-70 w-full bg-muted/50 min-w-0 flex flex-col items-center justify-center relative">
      <LoaderCircle className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] text-yellow-500 animate-spin" />
      <p className="text-[13px] md:text-[15px] text-neutral-700 text-center">
        Loading charts data...
      </p>
    </div>
  );
}
