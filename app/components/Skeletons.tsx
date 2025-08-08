import { Skeleton } from "./ui/skeleton";

export const DoubleSkeleton = () => {
  return (
    <>
      <Skeleton className="h-[30px] md:h-[40px] w-32 mx-auto mb-1" />
      <Skeleton className="h-[14px] md:h-[16px] w-12 mx-auto" />
    </>
  );
};
