import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div>
      <p>Loading</p>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl bg-teal-100" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px] bg-teal-100" />
          <Skeleton className="h-4 w-[200px] bg-teal-100" />
        </div>
      </div>
    </div>
  );
}
