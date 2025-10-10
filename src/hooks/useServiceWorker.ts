"use client";

import { useEffect, useState } from "react";

interface ServiceWorkerState {
  isSupported: boolean;
  isRegistered: boolean;
  isInstalling: boolean;
  isWaiting: boolean;
  isControlling: boolean;
  error: string | null;
}

export const useServiceWorker = () => {
  const [state, setState] = useState<ServiceWorkerState>({
    isSupported: false,
    isRegistered: false,
    isInstalling: false,
    isWaiting: false,
    isControlling: false,
    error: null,
  });

  const [registration, setRegistration] =
    useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    // Check if service workers are supported
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
      setState(prev => ({ ...prev, isSupported: false }));
      return;
    }

    setState(prev => ({ ...prev, isSupported: true }));

    const registerServiceWorker = async () => {
      try {
        const reg = await navigator.serviceWorker.register("/sw.js", {
          scope: "/",
        });

        setRegistration(reg);

        // Handle different service worker states
        if (reg.installing) {
          setState(prev => ({ ...prev, isInstalling: true }));
          reg.installing.addEventListener("statechange", handleStateChange);
        } else if (reg.waiting) {
          setState(prev => ({ ...prev, isWaiting: true }));
        } else if (reg.active) {
          setState(prev => ({ ...prev, isControlling: true }));
        }

        // Listen for updates
        reg.addEventListener("updatefound", () => {
          const newWorker = reg.installing;
          if (newWorker) {
            setState(prev => ({ ...prev, isInstalling: true }));
            newWorker.addEventListener("statechange", handleStateChange);
          }
        });

        setState(prev => ({ ...prev, isRegistered: true }));
        console.log("Service Worker registered successfully");
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Unknown error";
        setState(prev => ({ ...prev, error: errorMessage }));
        console.error("Service Worker registration failed:", error);
      }
    };

    const handleStateChange = (event: Event) => {
      const worker = event.target as ServiceWorker;

      switch (worker.state) {
        case "installed":
          setState(prev => ({
            ...prev,
            isInstalling: false,
            isWaiting: navigator.serviceWorker.controller ? true : false,
            isControlling: !navigator.serviceWorker.controller,
          }));
          break;
        case "activated":
          setState(prev => ({
            ...prev,
            isWaiting: false,
            isControlling: true,
          }));
          break;
        case "redundant":
          setState(prev => ({
            ...prev,
            isInstalling: false,
            isWaiting: false,
            error: "Service Worker became redundant",
          }));
          break;
      }
    };

    registerServiceWorker();

    // Listen for controller changes
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      setState(prev => ({ ...prev, isControlling: true }));
      console.log("Service Worker controller changed");
    });

    return () => {
      // Cleanup listeners if needed
    };
  }, []);

  const updateServiceWorker = () => {
    if (registration?.waiting) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
    }
  };

  const unregisterServiceWorker = async () => {
    if (registration) {
      const success = await registration.unregister();
      if (success) {
        setState(prev => ({
          ...prev,
          isRegistered: false,
          isControlling: false,
        }));
        setRegistration(null);
      }
      return success;
    }
    return false;
  };

  return {
    ...state,
    registration,
    updateServiceWorker,
    unregisterServiceWorker,
  };
};
