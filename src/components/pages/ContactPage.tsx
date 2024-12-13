import React from "react";
import { OfficeLocation } from "../OfficeLocation";
import { ContactForm } from "../ContactForm";
import { officeLocations } from "@/data";
import { FormData } from "@/types";

export const ContactsPage: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="flex flex-col bg-black min-h-screen">
      {/* Header */}
      <h1 className="self-center mt-9 text-4xl font-poppins tracking-tighter leading-loose text-white max-md:text-2xl">
        Your questions, Our expertise - Let's talk
      </h1>

      {/* Main Content */}
      <div className="mt-16 w-full px-5 max-w-[1732px] mx-auto max-md:mt-10">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Global Offices */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="text-3xl font-medium text-cyan-400 mb-6 lg:pl-6 max-md:text-2xl">
              Global Offices
            </div>
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {officeLocations.map((office, index) => (
                <OfficeLocation key={index} {...office} />
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="flex justify-center w-full">
            <div className="px-8 pt-10 pb-12 w-[100%] max-w-[600px] md:max-w-[450px] lg:max-w-[700px] bg-black border border-cyan-400 rounded-[30px] shadow-md max-md:px-6 max-md:pt-8 max-md:pb-10">
              <ContactForm onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
