import {
  Carousel,
  CarouselContent,
  CarouselItem,
  Dialog,
  DialogContent,
} from "@/components/ui";
import { useKeyboardNavigation } from "@/hooks";
import type { Project } from "@/types";
import { DialogClose } from "@radix-ui/react-dialog";
import Autoplay from "embla-carousel-autoplay";
import { Bug, Code, ExternalLink, Info } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ProjectModalProps {
  projectData: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  projectData,
  isOpen,
  onClose,
}: ProjectModalProps): React.ReactElement {
  useKeyboardNavigation({
    onEscape: onClose,
    enabled: isOpen,
  });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="border-white/20 bg-white/10 flex max-h-[90vh] w-[105vw] max-w-6xl flex-col overflow-y-auto rounded-xl border p-6 shadow-2xl backdrop-blur-lg md:p-10">
        <div className="flex-grow space-y-6 overflow-auto">
          {/* TITLE */}
          <h2
            id="project-modal-title"
            className="text-white text-3xl font-bold sm:text-2xl"
          >
            {projectData.title || projectData.name}
          </h2>

          {/* CAROUSEL */}
          {projectData.images && projectData.images.length > 0 && (
            <>
              <Carousel
                plugins={[Autoplay({ delay: 3000 })]}
                className="border-white/10 w-full overflow-hidden rounded-lg border sm:w-[300px]"
              >
                <CarouselContent>
                  {projectData.images.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-96 w-full overflow-hidden rounded-lg">
                        <Image
                          src={img}
                          alt={`${projectData.title || projectData.name} screenshot ${index + 1} showing project interface and features`}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </>
          )}

          {/* DESCRIPTION */}
          <section>
            <h3 className="text-white flex items-center text-lg font-semibold">
              <Info className="text-violet-400 mr-4 h-5 w-5" /> Description
            </h3>
            <p className="text-white/80 mt-2">
              {projectData.description || projectData.desc}
            </p>
          </section>

          {/* TECH STACK */}
          <section>
            <h3 className="text-white flex items-center text-lg font-semibold">
              <Code className="text-violet-400 mr-4 h-5 w-5" /> Tech Stack
            </h3>
            <ul
              className="mt-2 flex flex-wrap gap-2"
              role="list"
              aria-label="Technologies used in this project"
            >
              {(projectData.techStack || projectData.tech || []).map(
                (tech, i) => (
                  <li
                    key={i}
                    className="border-violet-400/40 bg-violet-600/20 text-white rounded-full border px-3 py-1 text-sm"
                    role="listitem"
                  >
                    {tech}
                  </li>
                )
              )}
            </ul>
            {projectData.techUsed && (
              <p className="text-white/80 mt-2">{projectData.techUsed}</p>
            )}
          </section>

          {/* FEATURES */}
          {projectData.features && projectData.features.length > 0 && (
            <section>
              <h3 className="text-white flex items-center text-lg font-semibold">
                <Info className="text-violet-400 mr-4 h-5 w-5" /> Features
              </h3>
              <ul
                className="text-white/80 mt-2 list-disc pl-6"
                role="list"
                aria-label="Project features"
              >
                {projectData.features.map((feature, i) => (
                  <li key={i} role="listitem">
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* CHALLENGES AND SOLUTIONS */}
          {projectData.challengesAndSolutions &&
            projectData.challengesAndSolutions.length > 0 && (
              <section>
                <h3 className="text-white flex items-center text-lg font-semibold">
                  <Bug className="text-violet-400 mr-4 h-5 w-5" /> Challenges
                  and Solutions
                </h3>
                <ul className="text-white/80 mt-2 space-y-4">
                  {projectData.challengesAndSolutions.map(
                    ({ challenge, solution }, i) => (
                      <li key={i} className="border-violet-400 border-l-4 pl-4">
                        <p>
                          <strong>Challenge:</strong> {challenge}
                        </p>
                        <p>
                          <strong>Solution:</strong> {solution}
                        </p>
                      </li>
                    )
                  )}
                </ul>
              </section>
            )}

          {/* LINK */}
          {projectData.links?.demo && (
            <section>
              <h3 className="text-white flex items-center text-lg font-semibold">
                <ExternalLink className="text-violet-400 mr-4 h-5 w-5" />{" "}
                Project Link
              </h3>
              <a
                href={projectData.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-300 mt-2 inline-block underline"
              >
                {projectData.links.demo}
              </a>
            </section>
          )}
        </div>

        {/* BUTTONS */}
        <div className="mt-6 flex justify-end gap-4">
          {(projectData.github || projectData.links?.github) && (
            <a
              href={projectData.github || projectData.links?.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-violet-600 text-white hover:bg-violet-700 focus:ring-violet-400 inline-flex items-center gap-2 rounded-md px-4 py-2 font-semibold transition focus:outline-none focus:ring-2 sm:px-2 sm:text-xs"
              aria-label={`View source code for ${projectData.title || projectData.name} on GitHub`}
            >
              <Code className="h-5 w-5" aria-hidden="true" /> See Code
            </a>
          )}

          {(projectData.demo || projectData.links?.demo) && (
            <a
              href={projectData.demo || projectData.links?.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-violet-600 text-white hover:bg-violet-700 focus:ring-violet-400 inline-flex items-center gap-2 rounded-md px-4 py-2 font-semibold transition focus:outline-none focus:ring-2 sm:px-2 sm:text-xs"
              aria-label={`View live demo of ${projectData.title || projectData.name}`}
            >
              <ExternalLink className="h-5 w-5" aria-hidden="true" /> See Demo
            </a>
          )}
          <DialogClose>
            <button
              onClick={onClose}
              className="bg-red-700/50 text-white hover:bg-red-800 focus:ring-red-400 inline-flex items-center gap-2 rounded-md px-4 py-2 font-semibold transition focus:outline-none focus:ring-2"
              aria-label="Close project details modal"
            >
              Close
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
