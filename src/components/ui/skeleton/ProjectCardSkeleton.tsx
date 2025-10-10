"use client";

import { cn } from "@/lib/utils";
import { Skeleton } from "./Skeleton";

interface ProjectCardSkeletonProps {
  className?: string;
}

export const ProjectCardSkeleton = ({ className }: ProjectCardSkeletonProps) => {
  return (
    <div className={cn("space-y-4 p-4", className)}>
      {/* Project image skeleton */}
      <Skeleton 
        className="aspect-video w-full" 
        variant="wave"
        rounded="lg"
      />
      
      {/* Project title */}
      <Skeleton 
        height={24} 
        width="75%" 
        variant="pulse"
      />
      
      {/* Project description lines */}
      <div className="space-y-2">
        <Skeleton height={16} width="100%" />
        <Skeleton height={16} width="85%" />
        <Skeleton height={16} width="60%" />
      </div>
      
      {/* Technology tags */}
      <div className="flex gap-2">
        <Skeleton height={20} width={60} rounded="full" />
        <Skeleton height={20} width={80} rounded="full" />
        <Skeleton height={20} width={70} rounded="full" />
      </div>
      
      {/* Action buttons */}
      <div className="flex gap-2 pt-2">
        <Skeleton height={36} width={100} rounded="md" />
        <Skeleton height={36} width={80} rounded="md" />
      </div>
    </div>
  );
};