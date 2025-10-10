"use client";

import { Spinner } from "@/components/ui/loading";
import type { Project } from "@/types";
import dynamic from "next/dynamic";

// Dynamically import the ProjectModal with a loading fallback
const ProjectModal = dynamic(() => import("./ProjectModal"), {
  loading: () => (
    <div className="bg-black/50 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="text-white flex flex-col items-center space-y-4">
        <Spinner size="lg" />
        <p className="text-sm">Loading project details...</p>
      </div>
    </div>
  ),
  ssr: false, // Modal doesn't need SSR
});

interface DynamicProjectModalProps {
  projectData: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function DynamicProjectModal(props: DynamicProjectModalProps) {
  // Only render the modal when it's open to avoid loading it unnecessarily
  if (!props.isOpen) {
    return null;
  }

  return <ProjectModal {...props} />;
}
