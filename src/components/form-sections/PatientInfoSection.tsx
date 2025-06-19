import { FormSection } from "./FormSection";
import { FormRow } from "./FormRow";
import { FormGroup } from "./FormGroup";

interface PatientInfoSectionProps {
  onDataChange?: (data: any) => void;
}

export const PatientInfoSection = ({ onDataChange }: PatientInfoSectionProps) => {
  const handleChange = (field: string, value: string) => {
    if (onDataChange) {
      onDataChange({ [field]: value });
    }
  };

  return (
    <FormSection title="User & Patient Information">
      <FormRow>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Patient Unique ID
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Unique Patient ID"
            onChange={(e) => handleChange('patientUniqueId', e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Female Patient Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Female Name"
            onChange={(e) => handleChange('femaleName', e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Female Patient Age
          </label>
          <input
            type="number"
            min="0"
            max="120"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Age"
            onChange={(e) => handleChange('femaleAge', parseInt(e.target.value))}
          />
        </FormGroup>
      </FormRow>
      
      <FormRow>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Male Patient Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Male Name"
            onChange={(e) => handleChange('maleName', e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Male Patient Age
          </label>
          <input
            type="number"
            min="0"
            max="120"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Age"
            onChange={(e) => handleChange('maleAge', parseInt(e.target.value))}
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Cycle Number
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Cycle #"
            onChange={(e) => handleChange('cycleNumber', e.target.value)}
          />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Cycle Date
          </label>
          <input
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange('cycleDate', e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Centre Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="IVF Clinic / Centre"
            onChange={(e) => handleChange('centreName', e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Cycle Type
          </label>
          <select 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => handleChange('cycleType', e.target.value)}
          >
            <option value="">Select</option>
            <option value="Primary">Primary</option>
            <option value="Secondary">Secondary</option>
          </select>
        </FormGroup>
      </FormRow>
    </FormSection>
  );
};
