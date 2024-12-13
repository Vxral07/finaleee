import React from "react";
import { ContactFormProps } from "../types";

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    onSubmit(Object.fromEntries(formData) as any);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-[500px] mx-auto"
    >
      {/* Contact Us Header */}
      <h2 className="text-2xl font-semibold text-cyan-400 mb-6 text-center">
        Contact Us
      </h2>

      {/* Name Input */}
      <label htmlFor="name" className="sr-only">
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        required
        className="px-6 py-3 mt-4 bg-black border border-gray-600 rounded-lg placeholder-gray-400 focus:outline-none focus:ring focus:ring-cyan-500"
        placeholder="Name"
      />

      {/* Email Input */}
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        className="px-6 py-3 mt-4 bg-black border border-gray-600 rounded-lg placeholder-gray-400 focus:outline-none focus:ring focus:ring-cyan-500"
        placeholder="Email"
      />

      {/* Phone Input */}
      <div className="flex items-center mt-4 bg-black border border-gray-600 rounded-lg">
        <div className="flex items-center px-3">
          <span className="text-white">+971</span>
        </div>
        <input
          type="tel"
          name="phone"
          required
          className="w-full px-4 py-3 bg-transparent border-none rounded-lg placeholder-gray-400 focus:outline-none focus:ring focus:ring-cyan-500"
          placeholder="Phone number"
        />
      </div>

      {/* Message Input */}
      <label htmlFor="message" className="sr-only">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        required
        className="px-6 py-3 mt-4 bg-black border border-gray-600 rounded-lg placeholder-gray-400 resize-none focus:outline-none focus:ring focus:ring-cyan-500"
        placeholder="Message"
        rows={4}
      ></textarea>

      {/* Submit Button */}
      <button
        type="submit"
        className="self-center px-6 py-2 mt-6 text-lg font-medium text-black bg-cyan-400 rounded-xl shadow hover:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500"
      >
        Submit
      </button>
    </form>
  );
};
