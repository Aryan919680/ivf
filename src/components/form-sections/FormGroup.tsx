
import { ReactNode } from "react";

interface FormGroupProps {
  children: ReactNode;
}

export const FormGroup = ({ children }: FormGroupProps) => {
  return (
    <div className="space-y-1">
      {children}
    </div>
  );
};
