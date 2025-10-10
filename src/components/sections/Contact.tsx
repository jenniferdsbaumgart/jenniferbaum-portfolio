"use client";

import { ScreenReaderAnnouncement } from "@/components/ui";
import { LanguageContext } from "@/contexts/LanguageContext";
import type { ContactFormData, LanguageContextValue } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import type { ChangeEvent, FormEvent } from "react";
import React, { useContext, useState } from "react";
import { Heading } from "../sub";

const Contact = (): React.ReactElement => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Contact must be used within a LanguageProvider");
  }

  const { translations }: LanguageContextValue = context;

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [subject, setSubject] = useState<string>("");
  const [status, setStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [announcement, setAnnouncement] = useState<string>("");

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) {
      const errorMessage = "Please correct the errors below";
      setStatus(errorMessage);
      setAnnouncement(errorMessage);
      return;
    }

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
        const successMessage =
          "Message sent successfully! Thank you for contacting me.";
        setStatus(successMessage);
        setAnnouncement(successMessage);
        setFormData({ name: "", email: "", message: "" });
        setSubject("");
        setErrors({});
      } else {
        const errorMessage = `Error: ${result.message}`;
        setStatus(errorMessage);
        setAnnouncement(errorMessage);
      }
    } catch (error) {
      const errorMessage =
        "Error: Failed to send message. Please try again later.";
      setStatus(errorMessage);
      setAnnouncement(errorMessage);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
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
    <section
      id="contact"
      className="h-screen py-20 xs:pb-20 lg:h-auto lg:py-40"
      aria-labelledby="contact-heading"
    >
      <Heading text={translations.contact.title} level={2} />
      <div className="my-auto flex h-full w-full items-center justify-between gap-x-20 gap-y-20 lg:flex-col lg:justify-center lg:gap-x-0">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src={"/contact-jenny.png"}
            alt="Jennifer Baum ready to connect - Professional photo showing approachability and readiness for collaboration"
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
          className="flex w-[600px] flex-col gap-3 sm:w-full lg:w-[400px]"
          aria-label="Contact form"
          noValidate
        >
          <fieldset className="flex w-full gap-x-3 lg:flex-col lg:gap-y-3">
            <legend className="sr-only">Personal Information</legend>
            <label htmlFor="contact-name" className="sr-only">
              {translations.contact.form.name}
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={`focus:ring-violet-400 dark:bg-zinc-800 dark:text-gray-300 w-full rounded-md border px-4 py-2 text-sm tracking-wider outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-100"
                  : "border-violet-500 bg-zinc-100 text-gray-500"
              }`}
              placeholder={translations.contact.form.name}
              required
              aria-required="true"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <div
                id="name-error"
                className="text-red-600 dark:text-red-400 mt-1 text-sm"
                role="alert"
                aria-live="polite"
              >
                {errors.name}
              </div>
            )}
            <label htmlFor="contact-email" className="sr-only">
              {translations.contact.form.email}
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`focus:ring-violet-400 dark:bg-zinc-800 dark:text-gray-300 w-full rounded-md border px-4 py-2 text-sm tracking-wider outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-100"
                  : "border-violet-500 bg-zinc-100 text-gray-500"
              }`}
              placeholder={translations.contact.form.email}
              required
              aria-required="true"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <div
                id="email-error"
                className="text-red-600 dark:text-red-400 mt-1 text-sm"
                role="alert"
                aria-live="polite"
              >
                {errors.email}
              </div>
            )}
          </fieldset>
          <label htmlFor="contact-subject" className="sr-only">
            {translations.contact.form.subject}
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            value={subject}
            onChange={handleChange}
            className={`focus:ring-violet-400 dark:bg-zinc-800 dark:text-gray-300 w-full rounded-md border px-4 py-2 text-sm tracking-wider outline-none focus:ring-2 ${
              errors.subject
                ? "border-red-500 bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-100"
                : "border-violet-500 bg-zinc-100 text-gray-500"
            }`}
            placeholder={translations.contact.form.subject}
            required
            aria-required="true"
            aria-invalid={errors.subject ? "true" : "false"}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          />
          {errors.subject && (
            <div
              id="subject-error"
              className="text-red-600 dark:text-red-400 mt-1 text-sm"
              role="alert"
              aria-live="polite"
            >
              {errors.subject}
            </div>
          )}
          <label htmlFor="contact-message" className="sr-only">
            {translations.contact.form.message}
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`focus:ring-violet-400 dark:bg-zinc-800 dark:text-gray-300 max-h-[250px] min-h-[150px] rounded-md border px-4 py-2 text-sm tracking-wider outline-none focus:ring-2 ${
              errors.message
                ? "border-red-500 bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-100"
                : "border-violet-500 bg-zinc-100 text-gray-500"
            }`}
            placeholder={translations.contact.form.message}
            required
            aria-required="true"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
          ></textarea>
          {errors.message && (
            <div
              id="message-error"
              className="text-red-600 dark:text-red-400 mt-1 text-sm"
              role="alert"
              aria-live="polite"
            >
              {errors.message}
            </div>
          )}
          <button
            type="submit"
            className="border-violet-500 bg-violet-600 text-white hover:bg-violet-500 focus:ring-violet-400 w-full cursor-pointer rounded-md border px-4 py-2 text-sm font-light tracking-wider outline-none transition-colors focus:ring-2"
            aria-describedby={status ? "form-status" : undefined}
          >
            {translations.contact.form.submitButton}
          </button>

          <AnimatePresence>
            {status && (
              <motion.div
                key="status-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                id="form-status"
                role="status"
                aria-live="polite"
                className={`mt-2 text-sm ${
                  status.startsWith("Error")
                    ? "text-red-500 dark:text-red-400"
                    : "text-green-500 dark:text-green-300"
                }`}
              >
                {status}
              </motion.div>
            )}
          </AnimatePresence>

          <ScreenReaderAnnouncement
            message={announcement}
            priority="assertive"
          />
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
