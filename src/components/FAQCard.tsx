import React from "react";

interface FAQCardProps {
  title: string;
  description: string;
  customStyles?: string;
}

export const FAQCard: React.FC<FAQCardProps> = ({ title, description, customStyles }) => {
  return (
    <div
      className={`bg-black p-6 rounded shadow-md text-center hover:scale-105 hover:shadow-blue-500/50 border border-white ${customStyles}`}
    >
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-sm leading-6">{description}</p>
    </div>
  );
};
