"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LanguageContext } from "@/contexts/LanguageContext";
import { projectsData } from "./../../assets";
import ProjectModal from "./ProjectModal";
import { Project as ProjectType, LanguageContextValue } from "@/types";

interface ProjectProps {
  data: ProjectType;
  index: number;
}

const Project = ({ data, index }: ProjectProps): React.ReactElement | null => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('Project must be used within a LanguageProvider');
  }
  
  const { translations, language }: LanguageContextValue = context;

  if (!data || (!data.name && !data.title)) {
    console.error("[Project] Prop 'data' inválida:", data);
    return null;
  }

  const normalizeName = (name: string): string => {
    return name.toLowerCase().replace(" - finances application", "").trim();
  };

  const normalizeTranslationData = (translationProject: any): ProjectType => {
    const matchingProject = projectsData.find(
      (proj: any) => normalizeName(proj.name) === normalizeName(translationProject.title)
    );

    return {
      name: translationProject.title,
      title: translationProject.title,
      tagline: translationProject.tagline,
      desc: translationProject.desc,
      description: translationProject.description,
      visualIdentity: translationProject.visualIdentity || "N/A",
      techUsed: matchingProject?.techUsed || "N/A",
      features: translationProject.features || [],
      challengesAndSolutions: matchingProject?.challengesAndSolutions || [],
      url: matchingProject?.url || "/projects/default.svg",
      github: matchingProject?.github || "",
      demo: matchingProject?.demo || "",
      tech: matchingProject?.tech || [],
      images: translationProject.images || [],
    };
  };

  let projectData: ProjectType = data;
  if (language === "pt" && translations?.projects?.projectsData) {
    const translatedProject = translations.projects.projectsData.find(
      (proj: any) => normalizeName(proj.title) === normalizeName(data.name || data.title)
    );
    if (translatedProject) {
      projectData = normalizeTranslationData(translatedProject);
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
          alt={`Imagem do projeto ${projectData.name || projectData.title}`}
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