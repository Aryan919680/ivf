import { FormSection } from "./FormSection";
import { FormRow } from "./FormRow";
import { FormGroup } from "./FormGroup";

interface SemenPreparationSectionProps {
  onDataChange?: (data: Record<string, any>) => void;
}

export const SemenPreparationSection = ({ onDataChange }: SemenPreparationSectionProps) => {
  const handleChange = (field: string, value: any) => {
    if (onDataChange) {
      onDataChange({ [field]: value });
    }
  };

  return (
    <FormSection title="Andrology - Semen Preparation">
      <FormRow>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Preparation Method
          </label>
          <select
            onChange={(e) => handleChange("preparationMethod", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select</option>
            <option value="Density Gradient">Density Gradient</option>
            <option value="Swim-up">Swim-up</option>
            <option value="Other">Other</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Volume Processed (ml)
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            onChange={(e) => handleChange("volumeProcessed", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </FormGroup>

        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Concentration Post-Preparation
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            onChange={(e) => handleChange("concentrationPost", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Motility Post-Preparation (%)
          </label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="100"
            onChange={(e) => handleChange("motilityPost", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </FormGroup>

        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Morphology Post-Preparation (%)
          </label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="100"
            onChange={(e) => handleChange("morphologyPost", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </FormGroup>

        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Total Motile Sperm Count
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            onChange={(e) => handleChange("totalMotileSpermCount", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </FormGroup>
      </FormRow>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          Technician Name
        </label>
        <input
          type="text"
          placeholder="Technician Name"
          onChange={(e) => handleChange("technicianName", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          Notes
        </label>
        <textarea
          rows={3}
          placeholder="Additional notes"
          onChange={(e) => handleChange("notes", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </FormSection>
  );
};
