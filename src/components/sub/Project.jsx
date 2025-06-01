"use client";
import { useState, useContext } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LanguageContext } from "@/contexts/LanguageContext";
import { projectsData } from "./../../assets/index";
import ProjectModal from "./ProjectModal";

const Project = ({ data, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { translations, language } = useContext(LanguageContext);

  if (!data || (!data.name && !data.title)) {
    console.error("[Project] Prop 'data' inválida:", data);
    return null;
  }

  const normalizeName = (name) => {
    return name.toLowerCase().replace(" - finances application", "").trim();
  };

  const normalizeTranslationData = (translationProject, originalData) => {
    const matchingProject = projectsData.find(
      (proj) => normalizeName(proj.name) === normalizeName(translationProject.title)
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

  let projectData = data;
  if (language === "pt" && translations?.projects?.projectsData) {
    const translatedProject = translations.projects.projectsData.find(
      (proj) => normalizeName(proj.title) === normalizeName(data.name)
    );
    if (translatedProject) {
      projectData = normalizeTranslationData(translatedProject, data);
    }
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

      <ProjectModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        projectData={projectData}
      />
    </>
  );
};

export default Project;
