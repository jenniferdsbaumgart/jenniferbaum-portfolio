"use client";

import { lazy } from "react";

// Lazy load sections that are below the fold
export const LazyAbout = lazy(() => import("./About"));
export const LazyExperience = lazy(() => import("./Experience"));
export const LazySkills = lazy(() => import("./Skills"));
export const LazyProjects = lazy(() => import("./Projects"));
export const LazyContact = lazy(() => import("./Contact"));

// Hero should load immediately as it's above the fold
export { default as Hero } from "./Hero";
