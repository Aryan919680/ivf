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
    <>
      <h1 className="text-2xl font-bold text-center text-blue-900 mb-8">ANDROLOGY - SEMEN PREPARATION</h1>

  <FormSection title="PATIENT INFORMATION">

  {/* Row 1: Patient ID, Name, Age */}
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

  {/* Row 2: Partner name, age */}
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

  {/* Row 3: Date of Collection (Today / Yesterday / Manual) */}
  <FormRow>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Date of Collection
      </label>
      <div className="flex gap-2">
        <button
          type="button"
          className="px-3 py-2 border rounded-md bg-gray-100 hover:bg-gray-200"
          onClick={() => handleChange("collectionDate", new Date().toISOString().split("T")[0])}
        >
          Today
        </button>
        <button
          type="button"
          className="px-3 py-2 border rounded-md bg-gray-100 hover:bg-gray-200"
          onClick={() => {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            handleChange("collectionDate", yesterday.toISOString().split("T")[0]);
          }}
        >
          Yesterday
        </button>
        <input
          type="date"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          onChange={(e) => handleChange("collectionDate", e.target.value)}
        />
      </div>
    </FormGroup>
  </FormRow>

  {/* Row 4: Abstinence + Preparation Method */}
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
        Preparation Method
      </label>
      <select
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("preparationMethod", e.target.value)}
      >
        <option value="">Select</option>
        <option value="density gradient">Density Gradient</option>
        <option value="swim up">Swim Up</option>
        <option value="other">Other</option>
      </select>
    </FormGroup>
  </FormRow>

</FormSection>
<FormSection title="PREWASH">

  <FormRow>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Volume (ml)
      </label>
      <input
        type="number"
        step="0.1"
        min="0"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("prewashVolume", parseFloat(e.target.value))}
      />
    </FormGroup>

    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Concentration (million/ml)
      </label>
      <input
        type="number"
        step="0.1"
        min="0"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("prewashConcentration", parseFloat(e.target.value))}
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
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("prewashMotility", parseFloat(e.target.value))}
      />
    </FormGroup>
  </FormRow>

</FormSection>
<FormSection title="POST WASH">

  <FormRow>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Volume (ml)
      </label>
      <input
        type="number"
        step="0.1"
        min="0"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("postwashVolume", parseFloat(e.target.value))}
      />
    </FormGroup>

    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Concentration (million/ml)
      </label>
      <input
        type="number"
        step="0.1"
        min="0"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("postwashConcentration", parseFloat(e.target.value))}
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
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("postwashMotility", parseFloat(e.target.value))}
      />
    </FormGroup>
  </FormRow>
</FormSection>

<FormSection title="FINAL DETAILS">

  <FormRow>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Semen Preparation Performed For
      </label>
      <select
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("semenPreparationPurpose", e.target.value)}
      >
        <option value="">Select</option>
        <option value="IUI">IUI</option>
        <option value="IVF">IVF</option>
        <option value="ICSI">ICSI</option>
        <option value="freezing">Freezing</option>
      </select>
    </FormGroup>

    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Semen Preparation Performed By
      </label>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("semenPreparationPerformedBy", e.target.value)}
      />
    </FormGroup>
  </FormRow>

  <FormRow>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Comments
      </label>
      <textarea
        rows={3}
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("semenPreparationComments", e.target.value)}
      />
    </FormGroup>
  </FormRow>

</FormSection>


    </>
  );
};
