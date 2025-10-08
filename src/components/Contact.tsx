"use client";

import React from "react";
import Heading from "./sub/Heading";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useContext, FormEvent, ChangeEvent } from "react";
import { LanguageContext } from '@/contexts/LanguageContext';
import { LanguageContextValue, ContactFormData } from "@/types";

const Contact = (): React.ReactElement => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('Contact must be used within a LanguageProvider');
  }
  
  const { translations }: LanguageContextValue = context;
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [subject, setSubject] = useState<string>("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const submitData = {
      ...formData,
      subject,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setSubject("");
      } else {
        setStatus(`Error: ${result.message}`);
      }
    } catch (error) {
      setStatus("Error: Failed to send message");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    
    if (name === "subject") {
      setSubject(value);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <div id="contact" className="h-screen lg:h-auto py-20 lg:py-40 xs:pb-20">
      <Heading text={translations.contact.title} />
      <div className="w-full h-full my-auto flex lg:flex-col items-center justify-between lg:justify-center gap-x-20 lg:gap-x-0 gap-y-20">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src={"/contact-jenny.png"}
            alt="Contact Image"
            width={400}
            height={400}
            className="w-[500px] rounded-md opacity-80"
          />
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3"
        >
          <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-3">
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-violet-500 rounded-md bg-zinc-100 dark:bg-zinc-800 px-4 py-2 text-sm tracking-wider text-gray-500 dark:text-gray-300 outline-none"
              placeholder={translations.contact.form.name}
              required
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-violet-500 rounded-md bg-zinc-100 dark:bg-zinc-800 px-4 py-2 text-sm tracking-wider text-gray-500 dark:text-gray-300 outline-none"
              placeholder={translations.contact.form.email}
              required
            />
          </div>
          <input
            name="subject"
            type="text"
            value={subject}
            onChange={handleChange}
            className="w-full border border-violet-500 rounded-md bg-zinc-100 dark:bg-zinc-800 px-4 py-2 text-sm tracking-wider text-gray-500 dark:text-gray-300 outline-none"
            placeholder={translations.contact.form.subject}
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="max-h-[250px] min-h-[150px] border border-violet-500 rounded-md bg-zinc-100 dark:bg-zinc-800 px-4 py-2 text-sm tracking-wider text-gray-500 dark:text-gray-300 outline-none"
            placeholder={translations.contact.form.message}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full border border-violet-500 rounded-md bg-violet-600 px-4 py-2 text-sm font-light tracking-wider text-white outline-none hover:bg-violet-500 transition-colors cursor-pointer"
          >
            {translations.contact.form.submitButton}
          </button>

          <AnimatePresence>
            {status && (
              <motion.p
                key="status-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`text-sm mt-2 ${
                  status.startsWith("Error")
                    ? "text-red-500 dark:text-red-400"
                    : "text-green-500 dark:text-green-300"
                }`}
              >
                {status}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;