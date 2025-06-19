import { FormSection } from "./FormSection";
import { FormRow } from "./FormRow";
import { FormGroup } from "./FormGroup";

interface ClinicalInfoSectionProps {
  onDataChange?: (data: any) => void;
}

export const ClinicalInfoSection = ({ onDataChange }: ClinicalInfoSectionProps) => {
  const handleChange = (field: string, value: any) => {
    if (onDataChange) {
      onDataChange({ [field]: value });
    }
  };

  return (
    <FormSection title="Clinical Information">
      <FormRow>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Sperm Source
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("spermSource", e.target.value)}
          >
            <option value="">Select</option>
            <option value="Self">Self</option>
            <option value="Donor">Donor</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Doctor Name
          </label>
          <input
            type="text"
            placeholder="Doctor's Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("doctorName", e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Donor Name
          </label>
          <input
            type="text"
            placeholder="Donor Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("donorName", e.target.value)}
          />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Trigger Time
          </label>
          <input
            type="time"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("triggerTime", e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Trigger Type
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("triggerType", e.target.value)}
          >
            <option value="">Select</option>
            <option value="Single">Single</option>
            <option value="Dual">Dual</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Trigger Name and Dose
          </label>
          <input
            type="text"
            placeholder="Name and Dose"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("triggerNameDose", e.target.value)}
          />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Stimulation Protocol
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("stimulationProtocol", e.target.value)}
          >
            <option value="">Select</option>
            <option value="Short">Short</option>
            <option value="Long">Long</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Days of Stimulation
          </label>
          <input
            type="number"
            min="0"
            placeholder="Number of days"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("stimulationDays", parseInt(e.target.value))}
          />
        </FormGroup>

        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Drug Name
          </label>
          <input
            type="text"
            placeholder="Drug Name(s)"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("drugName", e.target.value)}
          />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            BMI
          </label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="100"
            placeholder="BMI"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("bmi", parseFloat(e.target.value))}
          />
        </FormGroup>

        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            AMH
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            placeholder="AMH level"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("amh", parseFloat(e.target.value))}
          />
        </FormGroup>

        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Indication
          </label>
          <input
            type="text"
            placeholder="Clinical Indication"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("indication", e.target.value)}
          />
        </FormGroup>
      </FormRow>
    </FormSection>
  );
};
