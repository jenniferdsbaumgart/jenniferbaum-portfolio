import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Info, Code, Bug, ExternalLink, BadgeCheck } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";

export default function ProjectModal({ projectData, isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-[105vw] bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-xl overflow-y-auto max-h-[90vh] p-6 md:p-10 flex flex-col">
        <div className="space-y-6 flex-grow overflow-auto">
          {/* TITLE */}
          <h2 className="text-3xl font-bold text-white">
            {projectData.title || projectData.name}
          </h2>

          {/* CAROUSEL */}
          {projectData.images?.length > 0 && (
            <>
              <Carousel
                plugins={[Autoplay({ delay: 3000 })]}
                className="w-full rounded-lg overflow-hidden border border-white/10"
              >
                <CarouselContent>
                  {projectData.images.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="relative w-full h-96 rounded-lg overflow-hidden">
                        <Image
                          src={img}
                          alt={`Screenshot ${index + 1}`}
                          layout="fill"
                          objectFit="cover"
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
              <Info className="w-5 h-5 text-violet-400 mr-4" /> Description
            </h3>
            <p className="text-white/80 mt-2">
              {projectData.description || projectData.desc}
            </p>
          </section>

          {/* TECH STACK */}
          <section>
            <h3 className="flex items-center text-lg font-semibold text-white">
              <Code className="w-5 h-5 text-violet-400 mr-4" /> Tech Stack
            </h3>
            <ul className="flex flex-wrap gap-2 mt-2">
              {(projectData.techStack || projectData.tech || []).map(
                (tech, i) => (
                  <li
                    key={i}
                    className="bg-violet-600/20 border border-violet-400/40 text-white text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </li>
                )
              )}
            </ul>
            <p className="text-white/80 mt-2">{projectData.techUsed}</p>
          </section>

          {/* FEATURES */}
          {projectData.features?.length > 0 && (
            <section>
              <h3 className="flex items-center text-lg font-semibold text-white">
                <Info className="w-5 h-5 text-violet-400 mr-4" /> Features
              </h3>
              <ul className="list-disc pl-6 mt-2 text-white/80">
                {projectData.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </section>
          )}

          {/* CHALLENGES AND SOLUTIONS */}
          {projectData.challengesAndSolutions?.length > 0 && (
            <section>
              <h3 className="flex items-center text-lg font-semibold text-white">
                <Bug className="w-5 h-5 text-violet-400 mr-4" /> Challenges and
                Solutions
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
          {projectData.link && (
            <section>
              <h3 className="flex items-center text-lg font-semibold text-white">
                <ExternalLink className="w-5 h-5 text-violet-400 mr-4" />{" "}
                Project Link
              </h3>
              <a
                href={projectData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-300 underline mt-2 inline-block"
              >
                {projectData.link}
              </a>
            </section>
          )}
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-4 mt-6">
          {projectData.github && (
            <a
              href={projectData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-md font-semibold transition"
            >
              <Code className="w-5 h-5" /> See Code
            </a>
          )}

          {projectData.demo && (
            <a
              href={projectData.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-md font-semibold transition"
            >
              <ExternalLink className="w-5 h-5" /> See Demo
            </a>
          )}
          <DialogClose>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-700/50 hover:bg-red-800 text-white rounded-md font-semibold transition"
            >
              Close
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
