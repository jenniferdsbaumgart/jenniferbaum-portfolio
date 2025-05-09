"use client";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild
} from "@headlessui/react";
import { Fragment, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Project = ({ data, index }) => {
  const [isOpen, setIsOpen] = useState(false);

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
          src={data.url}
          alt={`Imagem do projeto ${data.name}`}
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
              <DialogPanel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-zinc-800">
                <DialogTitle className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {data.name}
                </DialogTitle>

                <Image
                  src={data.url}
                  alt={`Imagem do projeto ${data.name}`}
                  width={600}
                  height={400}
                  className="rounded-lg mb-4 object-cover w-full h-auto"
                />

                <p className="text-gray-700 dark:text-gray-200 mb-4">{data.desc}</p>

                <div className="flex gap-4">
                  {data.demo && (
                    <a
                      href={data.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 transition"
                    >
                      Ver Demo
                    </a>
                  )}
                  {data.github && (
                    <a
                      href={data.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
                    >
                      Ver Código
                    </a>
                  )}
                </div>

                <div className="mt-6 text-right">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-violet-600 hover:underline"
                  >
                    Fechar
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
