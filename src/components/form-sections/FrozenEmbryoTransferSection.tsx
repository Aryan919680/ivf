import { useState } from "react";
import { FormSection } from "./FormSection";
import { FormRow } from "./FormRow";
import { FormGroup } from "./FormGroup";

const FrozenEmbryoTransferSection = ({ onDataChange }) => {
  const [embryos, setEmbryos] = useState([]);

  const handleFieldChange = (field, value) => {
    onDataChange({ [field]: value });
  };

  const handleEmbryoChange = (index, field, value) => {
    const updated = [...embryos];
    updated[index] = { ...updated[index], [field]: value };
    setEmbryos(updated);
    onDataChange({ embryos: updated });
  };

  const addEmbryo = () => {
    setEmbryos([...embryos, {}]);
  };

  return (
    <>
    <h1 className="text-2xl font-bold text-center text-blue-900 mb-8">Frozen Embryo Transfer Report</h1>
    <FormSection title="Patient Information">
      {/* Patient Details */}
      <FormRow>
        <FormGroup>
           <label className="block text-sm font-semibold text-gray-700 mb-2">
        Patient ID
      </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            onChange={(e) => handleFieldChange("patientId", e.target.value)}
          />
        </FormGroup>
      <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Patient Name
      </label>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleFieldChange("patientName", e.target.value)}
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
        onChange={(e) => handleFieldChange("patientAge", parseInt(e.target.value))}
      />
    </FormGroup>

      </FormRow>

      <FormRow>
     <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Partner Name
      </label>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleFieldChange("partnerName", e.target.value)}
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
        onChange={(e) => handleFieldChange("partnerAge", parseInt(e.target.value))}
      />
    </FormGroup>
      </FormRow>
</FormSection>
<FormSection title="Embryo Grading">
      {/* Embryo Count */}
      <FormRow>
        <FormGroup>
           <label className="block text-sm font-semibold text-gray-700 mb-2">
       Number of Embryos Thawed
      </label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            onChange={(e) => handleFieldChange("embryosThawed", e.target.value)}
          />
        </FormGroup>
        <FormGroup>
           <label className="block text-sm font-semibold text-gray-700 mb-2">
       Number of Embryos transferred
      </label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            onChange={(e) => handleFieldChange("embryosTransferred", e.target.value)}
          />
        </FormGroup>
      </FormRow>

      {/* Dynamic Embryo Grading */}
   
       {embryos.map((embryo, index) => (
  <FormRow key={index}>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Day
      </label>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        value={embryo.day || ""}
        onChange={(e) => handleEmbryoChange(index, "day", e.target.value)}
      />
    </FormGroup>

    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Cells / Expansion Grade
      </label>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        value={embryo.expansion || ""}
        onChange={(e) => handleEmbryoChange(index, "expansion", e.target.value)}
      />
    </FormGroup>

    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Grade
      </label>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        value={embryo.grade || ""}
        onChange={(e) => handleEmbryoChange(index, "grade", e.target.value)}
      />
    </FormGroup>

    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Inner Cell Mass
      </label>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        value={embryo.innerCellMass || ""}
        onChange={(e) => handleEmbryoChange(index, "innerCellMass", e.target.value)}
      />
    </FormGroup>

    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Trophectoderm
      </label>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        value={embryo.trophectoderm || ""}
        onChange={(e) => handleEmbryoChange(index, "trophectoderm", e.target.value)}
      />
    </FormGroup>
  </FormRow>
))}


        <button
          type="button"
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          onClick={addEmbryo}
        >
          Add Embryo +
        </button>

      {/* Staff Info */}
      <FormRow>
        <FormGroup>
           <label className="block text-sm font-semibold text-gray-700 mb-2">
    Embryologist
      </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            onChange={(e) => handleFieldChange("embryologist", e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
    Clinician
      </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            onChange={(e) => handleFieldChange("clinician", e.target.value)}
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
        onChange={(e) => handleFieldChange("comments", e.target.value)}
      />
    </FormGroup>
  </FormRow>
    </FormSection>
    </>
  );
};

export default FrozenEmbryoTransferSection;
