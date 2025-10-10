"use client";

import {
    AnimatedButton,
    FadeIn,
    HoverCard,
    LoadingDots,
    ProjectCardSkeleton,
    ScaleIn,
    ScrollReveal,
    SkillCardSkeleton,
    SlideIn,
    Spinner,
    StaggerContainer,
    StaggerItem
} from "@/components/ui";
import { useState } from "react";

/**
 * Showcase component demonstrating the animation system
 * This is for development/testing purposes
 */
export const AnimationShowcase = () => {
  const [showSkeletons, setShowSkeletons] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoadingTest = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="space-y-12 p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Animation System Showcase</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Demonstrating the enhanced animation and micro-interaction system
        </p>
      </div>

      {/* Basic Animations */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Basic Animations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeIn className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Fade In</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Smooth fade-in animation with viewport detection
            </p>
          </FadeIn>

          <SlideIn direction="up" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Slide Up</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Slides in from bottom with spring animation
            </p>
          </SlideIn>

          <ScaleIn className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Scale In</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Scales up from center with bounce effect
            </p>
          </ScaleIn>
        </div>
      </section>

      {/* Stagger Animations */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Stagger Animations</h2>
        
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <StaggerItem key={i} className="p-4 bg-violet-100 dark:bg-violet-900 rounded-lg">
              <div className="text-center">
                <div className="w-8 h-8 bg-violet-500 rounded-full mx-auto mb-2" />
                <p className="text-sm">Item {i + 1}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Hover Interactions */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Hover Interactions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HoverCard variant="scale" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Scale Hover</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Hover to see scale effect
            </p>
          </HoverCard>

          <HoverCard variant="lift" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Lift Hover</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Hover to see lift effect
            </p>
          </HoverCard>

          <HoverCard variant="glow" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Glow Hover</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Hover to see glow effect
            </p>
          </HoverCard>
        </div>
      </section>

      {/* Animated Buttons */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Animated Buttons</h2>
        
        <div className="flex flex-wrap gap-4">
          <AnimatedButton variant="primary" onClick={handleLoadingTest}>
            Primary Button
          </AnimatedButton>
          
          <AnimatedButton variant="secondary" loading={loading}>
            {loading ? "Loading..." : "Secondary Button"}
          </AnimatedButton>
          
          <AnimatedButton variant="ghost">
            Ghost Button
          </AnimatedButton>
          
          <AnimatedButton variant="link">
            Link Button
          </AnimatedButton>
        </div>
      </section>

      {/* Loading States */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Loading States</h2>
        
        <div className="flex items-center gap-8">
          <div className="text-center">
            <Spinner size="sm" />
            <p className="text-sm mt-2">Small Spinner</p>
          </div>
          
          <div className="text-center">
            <Spinner size="md" />
            <p className="text-sm mt-2">Medium Spinner</p>
          </div>
          
          <div className="text-center">
            <Spinner size="lg" />
            <p className="text-sm mt-2">Large Spinner</p>
          </div>
          
          <div className="text-center">
            <LoadingDots size="md" />
            <p className="text-sm mt-2">Loading Dots</p>
          </div>
        </div>
      </section>

      {/* Skeleton Screens */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Skeleton Screens</h2>
        
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setShowSkeletons(!showSkeletons)}
            className="px-4 py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition-colors"
          >
            {showSkeletons ? "Hide" : "Show"} Skeletons
          </button>
        </div>
        
        {showSkeletons && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <ProjectCardSkeleton />
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <SkillCardSkeleton key={i} />
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Scroll Reveal */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Scroll Reveal</h2>
        
        <div className="space-y-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <ScrollReveal 
              key={i} 
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 0.1}
              className="p-6 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg"
            >
              <h3 className="font-semibold mb-2">Scroll Reveal Item {i + 1}</h3>
              <p className="text-violet-100">
                This item animates in when it enters the viewport. 
                Direction alternates between left and right.
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
};