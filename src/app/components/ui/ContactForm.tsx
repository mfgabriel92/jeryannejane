"use client";

import { useForm } from "react-hook-form";
import { ContactFormData } from "@/app/components";
import { motion } from "framer-motion";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export function ContactForm() {
  const { register, handleSubmit } = useForm<ContactFormData>();

  function onSubmit(data: ContactFormData) {
    console.log(data);
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
          {...register("name", { required: true })}
        />
      </motion.label>

      <motion.label className="form-control w-full">
        <div className="label">
          <div className="label-text">Your e-mail</div>
        </div>
        <input
          type="email"
          className="input input-bordered focus:input-accent"
          {...register("email", { required: true })}
        />
      </motion.label>

      <motion.label className="form-control w-full">
        <div className="label">
          <div className="label-text">Your message</div>
        </div>
        <textarea
          placeholder="Your message or question"
          className="input input-bordered h-[220px] focus:input-accent"
          {...register("message", { required: true })}
        ></textarea>
      </motion.label>

      <motion.label className="form-control mt-4 flex w-full items-end">
        <button className="btn btn-accent w-full md:w-2/5">Shoot!</button>
      </motion.label>
    </form>
  );
}
