"use client";

import { cn } from "@/lib/utils";
import { Skeleton } from "./Skeleton";

interface SkillCardSkeletonProps {
  className?: string;
}

export const SkillCardSkeleton = ({ className }: SkillCardSkeletonProps) => {
  return (
    <div className={cn("flex flex-col items-center space-y-2 p-3", className)}>
      {/* Skill icon */}
      <Skeleton 
        width={48} 
        height={48} 
        rounded="lg"
        variant="pulse"
      />
      
      {/* Skill name */}
      <Skeleton 
        height={14} 
        width={Math.random() * 30 + 50}
        variant="pulse"
      />
    </div>
  );
};