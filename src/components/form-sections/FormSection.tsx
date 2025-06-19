
import { ReactNode } from "react";

interface FormSectionProps {
  title: string;
  children: ReactNode;
}

export const FormSection = ({ title, children }: FormSectionProps) => {
  return (
    <fieldset className="border border-gray-300 rounded-lg p-6 mb-6">
      <legend className="text-lg font-bold text-blue-600 px-3 bg-white">
        {title}
      </legend>
      <div className="space-y-4">
        {children}
      </div>
    </fieldset>
  );
};
