import { FormSection } from "./FormSection";
import { FormRow } from "./FormRow";
import { FormGroup } from "./FormGroup";

interface OocyteEmbryoSectionProps {
  onDataChange?: (data: any) => void;
}

export const OocyteEmbryoSection = ({ onDataChange }: OocyteEmbryoSectionProps) => {
  const handleChange = (field: string, value: any) => {
    if (onDataChange) {
      onDataChange({ [field]: value });
    }
  };

  return (
    <FormSection title="Oocyte & Embryo Data">
      <FormRow>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Expected Follicles
          </label>
          <input
            type="number"
            min="0"
            placeholder="Expected Follicles"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("expectedFollicles", parseInt(e.target.value))}
          />
        </FormGroup>

        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Oocytes Retrieved
          </label>
          <input
            type="number"
            min="0"
            placeholder="Oocytes Retrieved"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("oocytesRetrieved", parseInt(e.target.value))}
          />
        </FormGroup>

        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Operator Name
          </label>
          <input
            type="text"
            placeholder="Embryologist / Operator"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("operatorName", e.target.value)}
          />
        </FormGroup>
      </FormRow>
    </FormSection>
  );
};
