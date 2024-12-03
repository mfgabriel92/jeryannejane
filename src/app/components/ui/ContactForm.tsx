"use client";

import { useForm } from "react-hook-form";
import { ContactFormData } from "@/app/components";
import { motion } from "framer-motion";
import { ErrorMessage } from "@hookform/error-message";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export function ContactForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ContactFormData>({ criteriaMode: "all" });

  function onSubmit(data: ContactFormData) {
    console.log(errors);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-1 flex-col sm:w-[80%]"
    >
      <motion.label className="form-control w-full">
        <div className="label">
          <div className="label-text">Your name</div>
        </div>
        <input
          type="text"
          className="input input-bordered focus:input-accent"
          {...register("name", {
            required: "Please, input your name",
            pattern: {
              value: /^[a-zA-Zà-ÿÀ-Ÿ'’\-.\s]{1,50}$/,
              message: "Invalid name format",
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => (
            <p className="mt-2 text-sm text-red-500">{message}</p>
          )}
        />
      </motion.label>

      <motion.label className="form-control w-full">
        <div className="label">
          <div className="label-text">Your e-mail</div>
        </div>
        <input
          type="email"
          className="input input-bordered focus:input-accent"
          {...register("email", {
            required: "Please, input your e-mail",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid e-mail format",
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => (
            <p className="mt-2 text-sm text-red-500">{message}</p>
          )}
        />
      </motion.label>

      <motion.label className="form-control w-full">
        <div className="label">
          <div className="label-text">Your message</div>
        </div>
        <textarea
          placeholder="Your message or question"
          className="input input-bordered h-[220px] focus:input-accent"
          {...register("message", {
            required: "Please, write your message or question",
          })}
        ></textarea>
        <ErrorMessage
          errors={errors}
          name="message"
          render={({ message }) => (
            <p className="mt-2 text-sm text-red-500">{message}</p>
          )}
        />
      </motion.label>

      <motion.label className="form-control mt-4 flex w-full items-end">
        <button className="btn btn-accent w-full md:w-2/5">Shoot!</button>
      </motion.label>
    </form>
  );
}
