import { FormSection } from "./FormSection";
import { FormRow } from "./FormRow";
import { FormGroup } from "./FormGroup";

interface OocyteRetrievalSectionProps {
  onDataChange?: (data: Record<string, any>) => void;
}

export const OocyteRetrievalSection = ({ onDataChange }: OocyteRetrievalSectionProps) => {
  const handleChange = (field: string, value: any) => {
    if (onDataChange) {
      onDataChange({ [field]: value });
    }
  };

  return (
    <FormSection title="Embryology - Oocyte Retrieval & Freezing">
      <FormRow>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Retrieval Date
          </label>
          <input
            type="date"
            onChange={(e) => handleChange("retrievalDate", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Retrieval Time
          </label>
          <input
            type="time"
            onChange={(e) => handleChange("retrievalTime", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Oocytes Retrieved
          </label>
          <input
            type="number"
            min="0"
            onChange={(e) => handleChange("oocytesRetrieved", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Maturity Status
          </label>
          <select
            onChange={(e) => handleChange("maturityStatus", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select</option>
            <option value="Mature">Mature</option>
            <option value="Immature">Immature</option>
            <option value="Atretic">Atretic</option>
          </select>
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Freezing Method
          </label>
          <select
            onChange={(e) => handleChange("freezingMethod", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select</option>
            <option value="Slow Freeze">Slow Freeze</option>
            <option value="Vitrification">Vitrification</option>
          </select>
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Oocytes Frozen
          </label>
          <input
            type="number"
            min="0"
            onChange={(e) => handleChange("oocytesFrozen", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </FormGroup>
      </FormRow>

      <FormRow>
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
            Operator Name
          </label>
          <input
            type="text"
            placeholder="Operator Name"
            onChange={(e) => handleChange("operatorName", e.target.value)}
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
