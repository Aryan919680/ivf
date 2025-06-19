import { FormSection } from "./FormSection";
import { FormRow } from "./FormRow";
import { FormGroup } from "./FormGroup";

interface SemenFreezingSectionProps {
  onDataChange?: (data: Record<string, any>) => void;
}

export const SemenFreezingSection = ({ onDataChange }: SemenFreezingSectionProps) => {
  const handleChange = (field: string, value: any) => {
    if (onDataChange) {
      onDataChange({ [field]: value });
    }
  };

  return (
    <FormSection title="Andrology - Semen Freezing">
      <FormRow>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Freezing Date
          </label>
          <input
            type="date"
            onChange={(e) => handleChange("freezingDate", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Freezing Time
          </label>
          <input
            type="time"
            onChange={(e) => handleChange("freezingTime", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Volume Frozen (ml)
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            onChange={(e) => handleChange("volumeFrozen", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Concentration Before Freezing
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            onChange={(e) => handleChange("concentrationBeforeFreezing", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Motility Before Freezing (%)
          </label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="100"
            onChange={(e) => handleChange("motilityBeforeFreezing", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Cryoprotectant Used
          </label>
          <input
            type="text"
            placeholder="Cryoprotectant Name"
            onChange={(e) => handleChange("cryoprotectantUsed", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Freezing Protocol
          </label>
          <select
            onChange={(e) => handleChange("freezingProtocol", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select</option>
            <option value="Slow Freeze">Slow Freeze</option>
            <option value="Vitrification">Vitrification</option>
          </select>
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Storage Location
          </label>
          <input
            type="text"
            placeholder="Tank / Location"
            onChange={(e) => handleChange("storageLocation", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Technician Name
          </label>
          <input
            type="text"
            placeholder="Technician Name"
            onChange={(e) => handleChange("technicianName", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </FormGroup>
      </FormRow>

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
