import { FormSection } from "./FormSection";
import { FormRow } from "./FormRow";
import { FormGroup } from "./FormGroup";

interface EmbryoTransferSectionProps {
  onDataChange?: (data: any) => void;
}

export const EmbryoTransferSection = ({ onDataChange }: EmbryoTransferSectionProps) => {
   const handleChange = (field: string, value: string) => {
    if (onDataChange) {
      onDataChange({ [field]: value });
    }
  };

  return (
    <FormSection title="Embryology - Embryo Transfer">
      <FormRow>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Transfer Date
          </label>
          <input
            type="date"
            onChange={(e) => handleChange("transferDate", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Transfer Time
          </label>
          <input
            type="time"
            onChange={(e) => handleChange("transferTime", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Number of Embryos Transferred
          </label>
          <input
            type="number"
            min="0"
            onChange={(e) => handleChange("embryosTransferred", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Embryo Stage
          </label>
          <select
            onChange={(e) => handleChange("embryoStage", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select</option>
            <option value="Day 3">Day 3</option>
            <option value="Day 5 Blastocyst">Day 5 Blastocyst</option>
            <option value="Other">Other</option>
          </select>
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Embryo Quality / Grade
          </label>
          <input
            type="text"
            placeholder="Grade"
            onChange={(e) => handleChange("embryoGrade", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Transfer Technique
          </label>
          <input
            type="text"
            placeholder="Technique"
            onChange={(e) => handleChange("transferTechnique", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </FormGroup>
      </FormRow>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          Operator Name
        </label>
        <input
          type="text"
          placeholder="Operator Name"
          onChange={(e) => handleChange("operatorName", e.target.value)}
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
