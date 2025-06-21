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
    <>
      <h1 className="text-2xl font-bold text-center text-blue-900 mb-8">Semen Freezing</h1>
  <FormSection title="PATIENT INFORMATION">

  {/* Row 1: Basic Info */}
  <FormRow>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Patient ID
      </label>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("patientId", e.target.value)}
      />
    </FormGroup>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Patient Name
      </label>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("patientName", e.target.value)}
      />
    </FormGroup>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Patient Age
      </label>
      <input
        type="number"
        min="0"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("patientAge", parseInt(e.target.value))}
      />
    </FormGroup>
  </FormRow>

  {/* Row 2: Partner Info */}
  <FormRow>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Partner Name
      </label>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("partnerName", e.target.value)}
      />
    </FormGroup>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Partner Age
      </label>
      <input
        type="number"
        min="0"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("partnerAge", parseInt(e.target.value))}
      />
    </FormGroup>
  </FormRow>

  {/* Row 3: Freezing Date */}
  <FormRow>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Freezing Date
      </label>
      <div className="flex gap-2">
        <button
          type="button"
          className="px-3 py-2 border rounded-md bg-gray-100 hover:bg-gray-200"
          onClick={() => handleChange("freezingDate", new Date().toISOString().split("T")[0])}
        >
          Today
        </button>
        <button
          type="button"
          className="px-3 py-2 border rounded-md bg-gray-100 hover:bg-gray-200"
          onClick={() => {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            handleChange("freezingDate", yesterday.toISOString().split("T")[0]);
          }}
        >
          Yesterday
        </button>
        <input
          type="date"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          onChange={(e) => handleChange("freezingDate", e.target.value)}
        />
      </div>
    </FormGroup>
  </FormRow>

  {/* Row 4: Abstinence + Freezing Method + Count */}
  <FormRow>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Abstinence Period (days)
      </label>
      <select
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("abstinencePeriod", parseInt(e.target.value))}
      >
        <option value="">Select</option>
        {[...Array(31)].map((_, i) => (
          <option key={i} value={i}>
            {i} days
          </option>
        ))}
      </select>
    </FormGroup>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Freezing Method
      </label>
      <select
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("freezingMethod", e.target.value)}
      >
        <option value="">Select</option>
        <option value="slow freezing">Slow Freezing</option>
        <option value="rapid freezing">Rapid Freezing</option>
      </select>
    </FormGroup>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Count Before Freezing (million/ml)
      </label>
      <input
        type="number"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("countBeforeFreezing", parseFloat(e.target.value))}
      />
    </FormGroup>
  </FormRow>

  {/* Row 5: Motility + Vials */}
  <FormRow>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Motility Before Freezing (%)
      </label>
      <input
        type="number"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("motilityBeforeFreezing", parseFloat(e.target.value))}
      />
    </FormGroup>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Number of Vials Frozen
      </label>
      <select
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("vialsFrozen", parseInt(e.target.value))}
      >
        <option value="">Select</option>
        {[1, 2, 3, 4, 5].map((v) => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </select>
    </FormGroup>
  </FormRow>
</FormSection>
  {/* Row 6: Storage Location Details */}
  <FormSection title="Storage Location">
  <FormRow>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Cryocan Number
      </label>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("cryocanNumber", e.target.value)}
      />
    </FormGroup>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Canister Number
      </label>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("canisterNumber", e.target.value)}
      />
    </FormGroup>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Location Details
      </label>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        placeholder="Rack/Row/etc."
        onChange={(e) => handleChange("locationDetails", e.target.value)}
      />
    </FormGroup>
  </FormRow>

  {/* Row 7: Performed by */}
  <FormRow>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Sperm Freezing Performed By
      </label>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("performedBy", e.target.value)}
      />
    </FormGroup>
  </FormRow>
</FormSection>
</>
  );
};
