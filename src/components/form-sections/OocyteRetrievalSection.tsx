import { FormSection } from "./FormSection";
import { FormRow } from "./FormRow";
import { FormGroup } from "./FormGroup";
import { useState,useEffect } from "react";

interface OocyteRetrievalSectionProps {
  onDataChange?: (data: Record<string, any>) => void;
  handlePatientIdChange?: (data: Record<string, any>) => void;
  defaultData?: any;
}
interface Embryo {
  numberOfCells?: string;
  grade?: string;
  expansion?: string;
  innerCellMass?: string;
  trophectoderm?: string;
}

interface EmbryoRowProps {
  embryo: Embryo;
  index: number;
  onChange: (index: number, field: string, value: string) => void;
}
interface Straw {
  materialType: "oocyte" | "day3" | "day5";
  oocyteData?: {
    mi: string;
    mii: string;
    gv: string;
  };
  day3Data?: {
    cells: string;
    grade: string;
  };
  day5Data?: {
    expansion: string;
    innerCellMass: string;
    trophectoderm: string;
  };
  location: {
    color: string;
    cryocan: string;
    canister: string;
    goblet: string;
    otherDetails: string;
  };
}

const EmbryoRow = ({ embryo, index, onChange }: EmbryoRowProps) => {
  return (
    <div className="mb-6 border p-4 rounded-md shadow-sm">
      <h3 className="text-lg font-semibold mb-2">Embryo Development – Day 3 Morphology</h3>

      <FormGroup>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Number of Cells</label>
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={embryo.numberOfCells || ""}
          onChange={(e) => onChange(index, "numberOfCells", e.target.value)}
        >
          <option value="">Select</option>
          {[...Array(20)].map((_, i) => (
            <option key={i + 1} value={String(i + 1)}>
              {i + 1}
            </option>
          ))}
        </select>
      </FormGroup>

      <FormGroup>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Grade</label>
        <div className="flex gap-4">
          {["A", "B", "C"].map((grade) => (
            <label key={grade} className="flex items-center">
              <input
                type="radio"
                name={`grade-${index}`}
                value={grade}
                checked={embryo.grade === grade}
                onChange={(e) => onChange(index, "grade", e.target.value)}
              />
              <span className="ml-1">{grade}</span>
            </label>
          ))}
        </div>
      </FormGroup>

      <hr className="my-4" />

      <h3 className="text-lg font-semibold mb-2">Blastocyst Assessment – Day 5 Grading</h3>

      <FormGroup>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Expansion Grade</label>
        <div className="flex gap-4 flex-wrap">
          {[1, 2, 3, 4, 5, 6].map((val) => (
            <label key={val} className="flex items-center">
              <input
                type="radio"
                name={`expansion-${index}`}
                value={String(val)}
                checked={embryo.expansion === String(val)}
                onChange={(e) => onChange(index, "expansion", e.target.value)}
              />
              <span className="ml-1">{val}</span>
            </label>
          ))}
        </div>
      </FormGroup>

      <FormGroup>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Inner Cell Mass</label>
        <div className="flex gap-4">
          {["A", "B", "C"].map((val) => (
            <label key={val} className="flex items-center">
              <input
                type="radio"
                name={`innerCellMass-${index}`}
                value={val}
                checked={embryo.innerCellMass === val}
                onChange={(e) => onChange(index, "innerCellMass", e.target.value)}
              />
              <span className="ml-1">{val}</span>
            </label>
          ))}
        </div>
      </FormGroup>

      <FormGroup>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Trophectoderm</label>
        <div className="flex gap-4">
          {["A", "B", "C"].map((val) => (
            <label key={val} className="flex items-center">
              <input
                type="radio"
                name={`trophectoderm-${index}`}
                value={val}
                checked={embryo.trophectoderm === val}
                onChange={(e) => onChange(index, "trophectoderm", e.target.value)}
              />
              <span className="ml-1">{val}</span>
            </label>
          ))}
        </div>
      </FormGroup>
    </div>
  );
};

export const OocyteRetrievalSection = ({ onDataChange,handlePatientIdChange,defaultData }: OocyteRetrievalSectionProps) => {
  const [indication, setIndication] = useState("");
  const [spermSource, setSpermSource] = useState("");
  const [oocyteSource, setOocyteSource] = useState("");
  const [embryos, setEmbryos] = useState([]);
  const [freshEmbryo, setFreshEmbryo] = useState([]);
  const [freshEmbryoCount, setFreshEmbryoCount] = useState("0");
  const [materialType, setMaterialType] = useState<"oocyte" | "day3" | "day5">("oocyte");
 const [localData, setLocalData] = useState(defaultData || {});
  // State variables
  const [straws, setStraws] = useState<Straw[]>([
    {
      materialType: "oocyte",
      oocyteData: { mi: "", mii: "", gv: "" },
      location: { color: "", cryocan: "", canister: "", goblet: "", otherDetails: "" },
    },
  ]);
 useEffect(() => {
    if (defaultData) {
      setLocalData(defaultData);
      onDataChange(defaultData); // sync back to parent if needed
    }
  }, [defaultData]);
  const updateStrawType = (index: number, type: "oocyte" | "day3" | "day5") => {
    const updated = [...straws];
    updated[index].materialType = type;

    // Reset corresponding data
    if (type === "oocyte") {
      updated[index].oocyteData = { mi: "", mii: "", gv: "" };
      delete updated[index].day3Data;
      delete updated[index].day5Data;
    } else if (type === "day3") {
      updated[index].day3Data = { cells: "", grade: "" };
      delete updated[index].oocyteData;
      delete updated[index].day5Data;
    } else if (type === "day5") {
      updated[index].day5Data = { expansion: "", innerCellMass: "", trophectoderm: "" };
      delete updated[index].oocyteData;
      delete updated[index].day3Data;
    }

    setStraws(updated);
  };

  const updateMaterialField = (
    index: number,
    type: "oocyteData" | "day3Data" | "day5Data",
    field: string,
    value: string
  ) => {
    const updated = [...straws];
    if (updated[index][type]) {
      (updated[index][type] as any)[field] = value;
    }
    setStraws(updated);
        onDataChange({ straws: updated });
  };

  const updateStrawLocation = (index: number, field: string, value: string) => {
    const updated = [...straws];
    updated[index].location[field] = value;
    setStraws(updated);
  };

  const addStraw = () => {
    setStraws([
      ...straws,
      {
        materialType: "oocyte",
        oocyteData: { mi: "", mii: "", gv: "" },
        location: { color: "", cryocan: "", canister: "", goblet: "", otherDetails: "" },
      },
    ]);
  };



  const handleEmbryoChange = (index: number, field: string, value: string) => {
    const updated = [...embryos];
    updated[index] = { ...updated[index], [field]: value };
    setEmbryos(updated);
    onDataChange({ embryos: updated });
  };



  const handleChange = (field: string, value: any) => {
    if (onDataChange) {
      onDataChange({ [field]: value });
    }
  };

  const addEmbryo = () => {
    setEmbryos([...embryos, {}]);
  };
  const renderDatePicker = () => {
    return (
      <div className="flex gap-2">
        <button
          type="button"
          className="px-3 py-2 border rounded-md bg-gray-100 hover:bg-gray-200"
          onClick={() => handleChange("opuDate", new Date().toISOString().split("T")[0])}
        >
          Today
        </button>
        <button
          type="button"
          className="px-3 py-2 border rounded-md bg-gray-100 hover:bg-gray-200"
          onClick={() => {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            handleChange("opuDate", yesterday.toISOString().split("T")[0]);
          }}
        >
          Yesterday
        </button>
        <input
          type="date"
          className="px-3 py-2 border border-gray-300 rounded-md"
          onChange={(e) => handleChange("opuDate", e.target.value)}
        />
      </div>
    );
  };
  const addEmbryo2 = () => {
    setFreshEmbryo([...freshEmbryo, {}]);
  };
  const handleEmbryoChange2 = (index: number, field: string, value: string) => {
    const updated = [...freshEmbryo];
    updated[index] = { ...updated[index], [field]: value };
    setFreshEmbryo(updated);
        onDataChange({ freshEmbryo: updated });
  };


  return (
    <>
      <h1 className="text-2xl font-bold text-center text-blue-900 mb-8">
        OOCYTE RETRIEVAL AND FREEZING REPORT
      </h1>

      <FormSection title="PATIENT INFORMATION">
        <FormRow>
  

<FormGroup>
  <label className="block text-sm font-semibold text-gray-700 mb-2">Patient ID</label>
  <input
    type="text"
    className="w-full px-3 py-2 border border-gray-300 rounded-md"
     onChange={(e) => {
      const val = e.target.value;
      onDataChange({ patientId: val });
      handlePatientIdChange(val);
    }}
  />
</FormGroup>

          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Patient Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e) => handleChange("patientName", e.target.value)}
               value={localData?.patientName || ""}
            />
          </FormGroup>
          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Patient Age</label>
            <input
              type="number"
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e) => handleChange("patientAge", parseInt(e.target.value))}
               value={localData?.patientAge || ""}
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Partner Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e) => handleChange("partnerName", e.target.value)}
                 value={localData?.partnerName || ""}
            />
          </FormGroup>
          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Partner Age</label>
            <input
              type="number"
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e) => handleChange("partnerAge", parseInt(e.target.value))}
                  value={localData?.partnerAge || ""}
            />
          </FormGroup>
          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">AMH</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e) => handleChange("amh", e.target.value)}
              value={localData?.amh || ""}
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup className="w-full">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Indication</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={indication || localData?.indication}
              onChange={(e) => {
                setIndication(e.target.value);
                handleChange("indication", e.target.value);
              }}
              
            >
              <option value="">Select</option>
              <option value="sperm factor">Sperm Factor</option>
              <option value="oocyte factor">Oocyte Factor</option>
              <option value="PCOS">PCOS</option>
              <option value="unexplained infertility">Unexplained Infertility</option>
              <option value="others">Others</option>
            </select>
            {indication === "others" && (
              <input
                type="text"
                className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Please specify"
                onChange={(e) => handleChange("indicationOther", e.target.value)}
              />
            )}
          </FormGroup>
        </FormRow>

        <div className="my-4" />

        <FormRow>
          <FormGroup className="w-full">
            <label className="block text-sm font-semibold text-gray-700 mb-2">OPU Date</label>
            {renderDatePicker()}
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Cycle Type</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e) => handleChange("cycleType", e.target.value)}
              value={localData?.cycleType || ''}
            >
              <option value="">Select</option>
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
            </select>
          </FormGroup>

          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Sperm Source</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={spermSource || localData?.spermSource}
              onChange={(e) => {
                setSpermSource(e.target.value);
                handleChange("spermSource", e.target.value);
              }}
            >
              <option value="">Select</option>
              <option value="self">Self</option>
              <option value="donor">Donor</option>
            </select>
            
          </FormGroup>

          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Oocyte Source</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={oocyteSource || localData?.oocyteSource}
              onChange={(e) => {
                setOocyteSource(e.target.value);
                handleChange("oocyteSource", e.target.value);
              }}
            >
              <option value="">Select</option>
              <option value="self">Self</option>
              <option value="donor">Donor</option>
            </select>
            {/* {oocyteSource === "donor" && (
              <>
                <input
                  type="text"
                  className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Donor Name"
                  onChange={(e) => handleChange("donorOocyteName", e.target.value)}
                />
                <input
                  type="text"
                  className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Donor ID"
                  onChange={(e) => handleChange("donorOocyteId", e.target.value)}
                />
              </>
            )} */}
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Cycle Number</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e) => handleChange("cycleNumber", e.target.value)}
              value={localData?.cycleNumber || ''}
            >
              <option value="">Select</option>
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </FormGroup>
          <FormGroup className="w-full">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Stimulation Details</label>
            <textarea
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e) => handleChange("stimulationDetails", e.target.value)}
              value={localData?.stimulationDetails || ''}
            />
          </FormGroup>
        </FormRow>
      </FormSection>

      <div className="my-6" />

      <FormSection title="TIMING AND OCC DATA">
        <FormRow>
          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Date of HCG Trigger</label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e) => handleChange("hcgTriggerDate", e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Time of HCG Trigger</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e) => handleChange("hcgTriggerTime", e.target.value)}
              value={localData?.hcgTriggerTime || ''}
            >
              <option value="">Select</option>
              {[...Array(24)].map((_, i) => (
                <option key={i} value={i}>{i}:00</option>
              ))}
            </select>
          </FormGroup>
          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Time of Oocyte Retrieval</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e) => handleChange("oocyteRetrievalTime", e.target.value)}
              value={localData?.oocyteRetrievalTime || ''}
            >
              <option value="">Select</option>
              {[...Array(24)].map((_, i) => (
                <option key={i} value={i}>{i}:00</option>
              ))}
            </select>
          </FormGroup>
        </FormRow>
<FormRow>
  {[
    "ExpectedOCCs",
    "OCCsRetrieved",
    "MII",
    "MI",
    "GVs",
    "OocytesFrozen",
    "OocytesForIVF",
    "OocytesInjected",
    "TimeOfInjection"
  ].map((field) => (
    <FormGroup key={field}>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {field.replace(/([A-Z])/g, " $1").trim()}
      </label>
      <input
        type="number"
        min="0"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        value={localData?.[field] ?? ""} // ✅ Set default value
        onChange={(e) => handleChange(field, parseFloat(e.target.value))}
      />
    </FormGroup>
  ))}
</FormRow>

      </FormSection>
      <FormSection title="Embryo Count">
        {embryos.map((embryo, index) => (
          <EmbryoRow
            key={index}
            embryo={embryo}
            index={index}
            onChange={handleEmbryoChange}
          />
        ))}


        <button
          type="button"
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          onClick={addEmbryo}
        >
          Add Embryo +
        </button>
      </FormSection>
      <FormSection title="FREEZING DETAILS">
        {straws.map((straw, index) => (
          <div key={index} className="border p-4 mb-4 rounded-md">
            <label className="font-semibold block mb-2">Select Material Type (Straw {index + 1})</label>
            <div className="flex gap-4 mb-3">
              {["oocyte", "day3", "day5"].map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="radio"
                    name={`material-${index}`}
                    value={type}
                    checked={straw.materialType === type}
                    onChange={() => updateStrawType(index, type as any)}
                  />
                  <span className="ml-1 capitalize">
                    {type === "day3" ? "Day 3 Embryo" : type === "day5" ? "Day 5 Embryo" : "Oocyte"}
                  </span>
                </label>
              ))}
            </div>

            {/* Conditional Material Data */}
            {straw.materialType === "oocyte" && (
              <FormRow>
                {["mi", "mii", "gv"].map((field) => (
                  <FormGroup key={field}>
                    <label>{field.toUpperCase()}</label>
                    <select
                      className="w-full px-3 py-2 border rounded-md"
                      value={straw.oocyteData?.[field] || ""}
                      onChange={(e) => updateMaterialField(index, "oocyteData", field, e.target.value)}
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i} value={i}>{i}</option>
                      ))}
                    </select>
                  </FormGroup>
                ))}
              </FormRow>
            )}

            {straw.materialType === "day3" && (
              <FormRow>
                <FormGroup>
                  <label>Cells</label>
                  <select
                    className="w-full px-3 py-2 border rounded-md"
                    value={straw.day3Data?.cells || ""}
                    onChange={(e) => updateMaterialField(index, "day3Data", "cells", e.target.value)}
                  >
                    {[...Array(20)].map((_, i) => (
                      <option key={i} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </FormGroup>
                <FormGroup>
                  <label>Grade</label>
                  <select
                    className="w-full px-3 py-2 border rounded-md"
                    value={straw.day3Data?.grade || ""}
                    onChange={(e) => updateMaterialField(index, "day3Data", "grade", e.target.value)}
                  >
                    <option value="">Select</option>
                    {["A", "B", "C"].map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </FormGroup>
              </FormRow>
            )}

            {straw.materialType === "day5" && (
              <FormRow>
                {[
                  { label: "Expansion", field: "expansion", options: [1, 2, 3, 4, 5, 6] },
                  { label: "Inner Cell Mass", field: "innerCellMass", options: ["A", "B", "C"] },
                  { label: "Trophectoderm", field: "trophectoderm", options: ["A", "B", "C"] },
                ].map(({ label, field, options }) => (
                  <FormGroup key={field}>
                    <label>{label}</label>
                    <select
                      className="w-full px-3 py-2 border rounded-md"
                      value={straw.day5Data?.[field] || ""}
                      onChange={(e) => updateMaterialField(index, "day5Data", field, e.target.value)}
                    >
                      <option value="">Select</option>
                      {options.map((val) => (
                        <option key={val} value={val}>{val}</option>
                      ))}
                    </select>
                  </FormGroup>
                ))}
              </FormRow>
            )}

            {/* Straw Location */}
            <div className="text-blue-700 font-semibold mt-4 mb-2">Straw Location</div>
            <FormRow>
              {["color", "cryocan", "canister"].map((field) => (
                <FormGroup key={field}>
                  <label>{field === "color" ? "Straw Colour" : field.charAt(0).toUpperCase() + field.slice(1) + " #"}</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md"
                    value={straw.location[field]}
                    onChange={(e) => updateStrawLocation(index, field, e.target.value)}
                  />
                </FormGroup>
              ))}
            </FormRow>
            <FormRow>
              <FormGroup>
                <label>Goblet #</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  value={straw.location.goblet}
                  onChange={(e) => updateStrawLocation(index, "goblet", e.target.value)}
                />
              </FormGroup>
              <FormGroup className="w-full">
                <label>More Location Details</label>
                <textarea
                  className="w-full px-3 py-2 border rounded-md"
                  value={straw.location.otherDetails}
                  onChange={(e) => updateStrawLocation(index, "otherDetails", e.target.value)}
                />
              </FormGroup>
            </FormRow>
          </div>
        ))}

        <button
          type="button"
          onClick={addStraw}
          className="mt-2 px-4 py-2 border border-green-500 text-green-600 rounded hover:bg-green-50"
        >
          + Add Straw
        </button>

      </FormSection>
      <FormSection title="FRESH EMBRYO TRANSFER DETAILS">
        <FormRow>
          <FormGroup>
            <label>No. of Embryos Transferred Fresh</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={freshEmbryoCount}
              onChange={(e) => {
                const value = e.target.value;
                setFreshEmbryoCount(value);
                setFreshEmbryo([]); // Reset embryos when selection changes
              }}
            >
              {["0", "1", "2", "3", "4"].map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </FormGroup>
        </FormRow>

        {freshEmbryoCount !== "0" && (
          <>
            {freshEmbryo.map((embryo, index) => (
              <FormRow key={index}>
                <FormGroup>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Day</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={embryo.day || ""}
                    onChange={(e) => handleEmbryoChange2(index, "day", e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="3">Day 3</option>
                    <option value="5">Day 5</option>
                  </select>
                </FormGroup>

                {embryo.day === "3" && (
                  <>
                    <FormGroup>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Cells</label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        value={embryo.expansion || ""}
                        onChange={(e) => handleEmbryoChange2(index, "expansion", e.target.value)}
                      >
                        <option value="">Select</option>
                        {[4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </FormGroup>
                    <FormGroup>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Grade</label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        value={embryo.grade || ""}
                        onChange={(e) => handleEmbryoChange2(index, "grade", e.target.value)}
                      >
                        <option value="">Select</option>
                        {["a", "b", "c", "d"].map((g) => (
                          <option key={g} value={g}>{g}</option>
                        ))}
                      </select>
                    </FormGroup>
                    <FormGroup>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Trophectoderm</label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        value={embryo.trophectoderm || ""}
                        onChange={(e) => handleEmbryoChange2(index, "trophectoderm", e.target.value)}
                      >
                        <option value="">Select</option>
                        {["A", "B", "C"].map((val) => (
                          <option key={val} value={val}>{val}</option>
                        ))}
                      </select>
                    </FormGroup>
                  </>
                )}

                {embryo.day === "5" && (
                  <>
                    <FormGroup>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Expansion Grade</label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        value={embryo.expansion || ""}
                        onChange={(e) => handleEmbryoChange2(index, "expansion", e.target.value)}
                      >
                        <option value="">Select</option>
                        {[1, 2, 3, 4, 5, 6].map((val) => (
                          <option key={val} value={val}>{val}</option>
                        ))}
                      </select>
                    </FormGroup>
                    <FormGroup>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Grade</label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        value={embryo.grade || ""}
                        onChange={(e) => handleEmbryoChange2(index, "grade", e.target.value)}
                      >
                        <option value="">Select</option>
                        {["a", "b", "c", "d"].map((g) => (
                          <option key={g} value={g}>{g}</option>
                        ))}
                      </select>
                    </FormGroup>
                    <FormGroup>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Inner Cell Mass</label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        value={embryo.innerCellMass || ""}
                        onChange={(e) => handleEmbryoChange2(index, "innerCellMass", e.target.value)}
                      >
                        <option value="">Select</option>
                        {["A", "B", "C"].map((val) => (
                          <option key={val} value={val}>{val}</option>
                        ))}
                      </select>
                    </FormGroup>
                    <FormGroup>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Trophectoderm</label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        value={embryo.trophectoderm || ""}
                        onChange={(e) => handleEmbryoChange2(index, "trophectoderm", e.target.value)}
                      >
                        <option value="">Select</option>
                        {["A", "B", "C"].map((val) => (
                          <option key={val} value={val}>{val}</option>
                        ))}
                      </select>
                    </FormGroup>
                  </>
                )}
              </FormRow>
            ))}
            <div className="mt-6">
              <button
                type="button"
                className="px-4 py-2 border border-blue-500 text-blue-600 rounded hover:bg-blue-50"
                onClick={addEmbryo2}
              >
                + Add Embryo
              </button>
            </div>

          </>
        )}
      </FormSection>
    </>
  );
};
