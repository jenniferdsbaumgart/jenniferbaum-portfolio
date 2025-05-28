"use client";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useState, useContext } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LanguageContext } from "@/contexts/LanguageContext";
import { projectsData } from "./../../assets/index";

const Project = ({ data, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { translations, language } = useContext(LanguageContext);

  // Logs para depuração
  console.log(`[Project] Idioma atual: ${language}`);
  console.log("[Project] translations.projectsData:", translations?.projects?.projectsData);

  // Verificar se data é válido
  if (!data || !data.name  && !data.title) {
    console.error("[Project] Prop 'data' inválida:", data);
    return null;
  }

  // Normalizar nomes para correspondência
  const normalizeName = (name) => {
    return name.toLowerCase().replace(" - finances application", "").trim();
  };

  // Função para combinar dados de translation.json com index.js
  const normalizeTranslationData = (translationProject, originalData) => {
    const matchingProject = projectsData.find(
      (proj) => normalizeName(proj.name) === normalizeName(translationProject.title)
    );

    console.log(
      `[Project] Correspondência para "${translationProject.title}":`,
      matchingProject ? matchingProject.name : "Não encontrado"
    );

    return {
      name: translationProject.title,
      tagline: translationProject.tagline,
      desc: translationProject.desc,
      visualIdentity: translationProject.visualIdentity || "N/A",
      techUsed: matchingProject?.techUsed || "N/A",
      features: translationProject.features || [],
      challengesAndSolutions: matchingProject?.challengesAndSolutions || [],
      url: matchingProject?.url || "/projects/default.svg",
      github: matchingProject?.github || "",
      demo: matchingProject?.demo || "",
      tech: matchingProject?.tech || [],
    };
  };

  // Selecionar fonte de dados
  let projectData = data;
  if (language === "pt" && translations?.projects?.projectsData) {
    const translatedProject = translations.projects.projectsData.find(
      (proj) => normalizeName(proj.title) === normalizeName(data.name)
    );
    if (translatedProject) {
      projectData = normalizeTranslationData(translatedProject, data);
      console.log(`[Project] Usando translation.json para "${data.name}"`);
    } else {
      console.log(`[Project] Projeto "${data.name}" não encontrado em translation.json, usando index.js`);
    }
  } else {
    console.log(`[Project] Usando index.js para "${data.name}" (idioma: ${language})`);
  }

  if (!projectData || !projectData.url) {
    console.error("[Project] projectData inválido:", projectData);
    return null;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        onClick={() => setIsOpen(true)}
        className="relative w-[350px] sm:w-full h-max border border-violet-400 rounded-lg cursor-pointer"
      >
        <Image
          src={projectData.url}
          alt={`Imagem do projeto ${projectData.name}`}
          width={400}
          height={400}
          className="rounded-lg opacity-70"
        />
      </motion.div>

      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
          </TransitionChild>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="w-full max-w-7xl transform overflow-hidden rounded-2xl dark:bg-zinc-900 bg-white p-6 text-left align-middle shadow-xl transition-all max-h-[90vh] overflow-y-auto">
                <DialogTitle className="font-bebas text-6xl font-semibold text-gray-900 dark:text-violet-500 mb-1">
                  {projectData.name}
                </DialogTitle>
                <p className="text-md text-gray-600 dark:text-gray-400 mb-4">
                  {projectData.tagline}
                </p>

                <Image
                  src={projectData.url}
                  alt={`Project image ${projectData.name}`}
                  width={600}
                  height={400}
                  className="rounded-lg mb-4 object-cover w-full h-auto"
                />
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {projectData.desc}
                </p>
                <section className="mb-6">
                  <h3 className="font-oswald text-2xl font-semibold dark:text-violet-500 mb-1">
                    Visual Identity
                  </h3>
                  <p className="pl-4 text-gray-700 dark:text-gray-300">
                    {projectData.visualIdentity}
                  </p>
                </section>
                <section className="mb-6">
                  <h3 className="font-oswald text-2xl font-semibold dark:text-violet-500 mb-1">
                    Technologies Used
                  </h3>
                  <p className="pl-4 text-gray-700 dark:text-gray-300 text-justify">
                    {projectData.techUsed}
                  </p>
                </section>
                <section className="mb-6">
                  <h3 className="font-oswald text-2xl font-semibold dark:text-violet-500 mb-1">
                    Features
                  </h3>
                  <ul className="pl-6 list-item text-gray-700 dark:text-gray-300">
                    {Array.isArray(projectData.features) &&
                      projectData.features.map((feature, i) => (
                        <li key={i} className="mb-1">
                          • {feature}
                        </li>
                      ))}
                  </ul>
                </section>
                {Array.isArray(projectData.challengesAndSolutions) &&
                  projectData.challengesAndSolutions.length > 0 && (
                    <section className="mb-6">
                      <h3 className="font-oswald text-2xl font-semibold dark:text-violet-500 mb-1">
                        Challenges & Solutions
                      </h3>
                      <ul className="pl-6 list-disc text-gray-700 dark:text-gray-300">
                        {projectData.challengesAndSolutions.map((item, index) => (
                          <li key={index} className="mb-3">
                            <strong className="text-violet-600 dark:text-violet-400">
                              Challenge:
                            </strong>{" "}
                            {item.challenge}
                            <br />
                            <strong className="text-green-600 dark:text-green-400">
                              Solution:
                            </strong>{" "}
                            {item.solution}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
                <div className="flex gap-4">
                  {projectData.demo && (
                    <a
                      href={projectData.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-violet-700 text-white px-4 py-2 rounded hover:bg-violet-600 transition"
                    >
                      See Demo
                    </a>
                  )}
                  {projectData.github && (
                    <a
                      href={projectData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-zinc-700 text-white px-4 py-2 rounded hover:bg-zinc-600 transition"
                    >
                      See Code
                    </a>
                  )}
                </div>
                <div className="mt-6 text-right">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-violet-600 hover:underline"
                  >
                    Close
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Project;