"use client";

import { cn } from "@/lib/utils";
import { Skeleton } from "./Skeleton";

interface SectionSkeletonProps {
  className?: string;
  lines?: number;
  showTitle?: boolean;
}

export const SectionSkeleton: React.FC<SectionSkeletonProps> = ({
  className,
  lines = 3,
  showTitle = true,
}) => {
  return (
    <div className={cn("w-full px-4 py-16", className)}>
      <div className="mx-auto max-w-6xl">
        {showTitle && (
          <div className="mb-12 text-center">
            <Skeleton className="mx-auto mb-4 h-12 w-64" />
            <Skeleton className="mx-auto h-6 w-96" />
          </div>
        )}

        <div className="space-y-8">
          {Array.from({ length: lines }).map((_, index) => (
            <div key={index} className="space-y-4">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-5/6" />
              <Skeleton className="h-6 w-4/6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
