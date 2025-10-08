import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Info, Code, Bug, ExternalLink } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
import type { Project } from "@/types";

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
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex max-h-[90vh] w-[105vw] max-w-6xl flex-col overflow-y-auto rounded-xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-lg md:p-10">
        <div className="flex-grow space-y-6 overflow-auto">
          {/* TITLE */}
          <h2 className="text-3xl font-bold text-white sm:text-2xl">
            {projectData.title || projectData.name}
          </h2>

          {/* CAROUSEL */}
          {projectData.images && projectData.images.length > 0 && (
            <>
              <Carousel
                plugins={[Autoplay({ delay: 3000 })]}
                className="w-full overflow-hidden rounded-lg border border-white/10 sm:w-[300px]"
              >
                <CarouselContent>
                  {projectData.images.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-96 w-full overflow-hidden rounded-lg">
                        <Image
                          src={img}
                          alt={`Screenshot ${index + 1}`}
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
            <h3 className="flex items-center text-lg font-semibold text-white">
              <Info className="mr-4 h-5 w-5 text-violet-400" /> Description
            </h3>
            <p className="mt-2 text-white/80">
              {projectData.description || projectData.desc}
            </p>
          </section>

          {/* TECH STACK */}
          <section>
            <h3 className="flex items-center text-lg font-semibold text-white">
              <Code className="mr-4 h-5 w-5 text-violet-400" /> Tech Stack
            </h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {(projectData.techStack || projectData.tech || []).map(
                (tech, i) => (
                  <li
                    key={i}
                    className="rounded-full border border-violet-400/40 bg-violet-600/20 px-3 py-1 text-sm text-white"
                  >
                    {tech}
                  </li>
                )
              )}
            </ul>
            {projectData.techUsed && (
              <p className="mt-2 text-white/80">{projectData.techUsed}</p>
            )}
          </section>

          {/* FEATURES */}
          {projectData.features && projectData.features.length > 0 && (
            <section>
              <h3 className="flex items-center text-lg font-semibold text-white">
                <Info className="mr-4 h-5 w-5 text-violet-400" /> Features
              </h3>
              <ul className="mt-2 list-disc pl-6 text-white/80">
                {projectData.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </section>
          )}

          {/* CHALLENGES AND SOLUTIONS */}
          {projectData.challengesAndSolutions &&
            projectData.challengesAndSolutions.length > 0 && (
              <section>
                <h3 className="flex items-center text-lg font-semibold text-white">
                  <Bug className="mr-4 h-5 w-5 text-violet-400" /> Challenges
                  and Solutions
                </h3>
                <ul className="mt-2 space-y-4 text-white/80">
                  {projectData.challengesAndSolutions.map(
                    ({ challenge, solution }, i) => (
                      <li key={i} className="border-l-4 border-violet-400 pl-4">
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
              <h3 className="flex items-center text-lg font-semibold text-white">
                <ExternalLink className="mr-4 h-5 w-5 text-violet-400" />{" "}
                Project Link
              </h3>
              <a
                href={projectData.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-violet-300 underline"
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
              className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-4 py-2 font-semibold text-white transition hover:bg-violet-700 sm:px-2 sm:text-xs"
            >
              <Code className="h-5 w-5" /> See Code
            </a>
          )}

          {(projectData.demo || projectData.links?.demo) && (
            <a
              href={projectData.demo || projectData.links?.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-4 py-2 font-semibold text-white transition hover:bg-violet-700 sm:px-2 sm:text-xs"
            >
              <ExternalLink className="h-5 w-5" /> See Demo
            </a>
          )}
          <DialogClose>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-md bg-red-700/50 px-4 py-2 font-semibold text-white transition hover:bg-red-800"
            >
              Close
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
