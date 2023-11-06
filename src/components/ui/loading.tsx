import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 p-5">
      {[...Array(30)].map((x, i) => (
        <Skeleton
          className="flex aspect-square w-full h-[350px] md:h-[380px] items-center justify-center rounded-lg bg-accent"
          key={i}
        />
      ))}
    </div>
  );
}
