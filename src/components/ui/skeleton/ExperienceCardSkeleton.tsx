"use client";

import { cn } from "@/lib/utils";
import { Skeleton } from "./Skeleton";

interface ExperienceCardSkeletonProps {
  className?: string;
}

export const ExperienceCardSkeleton = ({ className }: ExperienceCardSkeletonProps) => {
  return (
    <div className={cn("flex gap-4 p-4", className)}>
      {/* Year badge */}
      <div className="flex-shrink-0">
        <Skeleton 
          width={80} 
          height={40} 
          rounded="lg"
          variant="pulse"
        />
      </div>
      
      {/* Content */}
      <div className="flex-1 space-y-3">
        {/* Title */}
        <Skeleton height={20} width="60%" />
        
        {/* Education */}
        <Skeleton height={16} width="80%" />
        
        {/* Experience items */}
        <div className="space-y-2">
          <Skeleton height={14} width="100%" />
          <Skeleton height={14} width="90%" />
          <Skeleton height={14} width="75%" />
        </div>
        
        {/* Skills */}
        <div className="flex flex-wrap gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton 
              key={i}
              height={18} 
              width={Math.random() * 40 + 40} 
              rounded="full"
              variant="pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
};