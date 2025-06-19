import { FormSection } from "./FormSection";
import { FormRow } from "./FormRow";
import { FormGroup } from "./FormGroup";

interface SemenAnalysisSectionProps {
  onDataChange?: (data: any) => void;
}

export const SemenAnalysisSection = ({ onDataChange }: SemenAnalysisSectionProps) => {
  const handleChange = (field: string, value: any) => {
    if (onDataChange) {
      onDataChange({ [field]: value });
    }
  };

  return (
    <FormSection title="Andrology - Semen Analysis">
      <FormRow>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Sample Collection Date
          </label>
          <input
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("sampleCollectionDate", e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Sample Collection Time
          </label>
          <input
            type="time"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("sampleCollectionTime", e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Period of Abstinence (days)
          </label>
          <input
            type="number"
            min="0"
            max="10"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("abstinenceDays", parseInt(e.target.value))}
          />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Sample Volume (ml)
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("sampleVolume", parseFloat(e.target.value))}
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            pH
          </label>
          <input
            type="number"
            step="0.1"
            min="7.0"
            max="8.5"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("ph", parseFloat(e.target.value))}
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Appearance
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("appearance", e.target.value)}
          >
            <option value="">Select</option>
            <option value="Normal">Normal</option>
            <option value="Abnormal">Abnormal</option>
          </select>
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Viscosity
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("viscosity", e.target.value)}
          >
            <option value="">Select</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Liquefaction Time (minutes)
          </label>
          <input
            type="number"
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("liquefactionTime", parseInt(e.target.value))}
          />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Sperm Concentration (million/ml)
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("spermConcentration", parseFloat(e.target.value))}
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Total Sperm Count (million)
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("totalSpermCount", parseFloat(e.target.value))}
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Total Motility (%)
          </label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="100"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("totalMotility", parseFloat(e.target.value))}
          />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Progressive Motility (%)
          </label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="100"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("progressiveMotility", parseFloat(e.target.value))}
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Immotile (%)
          </label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="100"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("immotile", parseFloat(e.target.value))}
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Morphology (% normal forms)
          </label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="100"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("morphology", parseFloat(e.target.value))}
          />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Round Cells (million/ml)
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("roundCells", parseFloat(e.target.value))}
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            MAR Test Result
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("marTestResult", e.target.value)}
          >
            <option value="">Select</option>
            <option value="Positive">Positive</option>
            <option value="Negative">Negative</option>
            <option value="Not Done">Not Done</option>
          </select>
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Agglutination Present
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange("agglutinationPresent", e.target.value)}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </FormGroup>
      </FormRow>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          Comments
        </label>
        <textarea
          rows={3}
          placeholder="Additional notes or observations"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={(e) => handleChange("comments", e.target.value)}
        />
      </div>
    </FormSection>
  );
};
