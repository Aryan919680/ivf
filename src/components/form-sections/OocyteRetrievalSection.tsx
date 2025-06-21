import { FormSection } from "./FormSection";
import { FormRow } from "./FormRow";
import { FormGroup } from "./FormGroup";
import { useState } from "react";

interface OocyteRetrievalSectionProps {
  onDataChange?: (data: Record<string, any>) => void;
}
interface Embryo {
  day: string;
  expansion: string;
  grade: string;
  innerCellMass: string;
  trophectoderm: string;
}

interface EmbryoRowProps {
  embryo: Embryo;
  index: number;
  onChange: (index: number, field: string, value: string) => void;
}

const EmbryoRow = ({ embryo, index, onChange }: EmbryoRowProps) => (
  <FormRow key={index}>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">Day</label>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        value={embryo.day || ""}
        onChange={(e) => onChange(index, "day", e.target.value)}
      />
    </FormGroup>

    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">Cells / Expansion Grade</label>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        value={embryo.expansion || ""}
        onChange={(e) => onChange(index, "expansion", e.target.value)}
      />
    </FormGroup>

    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">Grade</label>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        value={embryo.grade || ""}
        onChange={(e) => onChange(index, "grade", e.target.value)}
      />
    </FormGroup>

    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">Inner Cell Mass</label>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        value={embryo.innerCellMass || ""}
        onChange={(e) => onChange(index, "innerCellMass", e.target.value)}
      />
    </FormGroup>

    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">Trophectoderm</label>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        value={embryo.trophectoderm || ""}
        onChange={(e) => onChange(index, "trophectoderm", e.target.value)}
      />
    </FormGroup>
  </FormRow>
);


export const OocyteRetrievalSection = ({ onDataChange }: OocyteRetrievalSectionProps) => {
  const [indication, setIndication] = useState("");
  const [spermSource, setSpermSource] = useState("");
  const [oocyteSource, setOocyteSource] = useState("");
    const [embryos, setEmbryos] = useState([]);
    const [freshEmbryoCount, setFreshEmbryoCount] = useState("0");
    // State variables
const [straws, setStraws] = useState([
  {
    embryo: {
      day: "",
      expansion: "",
      grade: "",
      innerCellMass: "",
      trophectoderm: ""
    },
    location: {
      color: "",
      cryocan: "",
      canister: "",
      goblet: "",
      otherDetails: ""
    }
  }
]);

const updateStraw = (index: number, field: string, value: string, locationField?: string) => {
  const updated = [...straws];
  if (locationField) {
    updated[index].location[locationField] = value;
  } else {
    updated[index][field] = value;
  }
  setStraws(updated);
  handleChange("straws", updated);
};

const handleEmbryoChange = (index: number, field: string, value: string) => {
  const updated = [...straws];
  updated[index].embryo[field] = value;
  setStraws(updated);
  handleChange("straws", updated);
};

const addStraw = () => {
  const updated = [
    ...straws,
    {
      embryo: {
        day: "",
        expansion: "",
        grade: "",
        innerCellMass: "",
        trophectoderm: ""
      },
      location: {
        color: "",
        cryocan: "",
        canister: "",
        goblet: "",
        otherDetails: ""
      }
    }
  ];
  setStraws(updated);
  handleChange("straws", updated);
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
              onChange={(e) => handleChange("patientId", e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Patient Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e) => handleChange("patientName", e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Patient Age</label>
            <input
              type="number"
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e) => handleChange("patientAge", parseInt(e.target.value))}
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
            />
          </FormGroup>
          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Partner Age</label>
            <input
              type="number"
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e) => handleChange("partnerAge", parseInt(e.target.value))}
            />
          </FormGroup>
          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">AMH</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e) => handleChange("amh", e.target.value)}
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup className="w-full">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Indication</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={indication}
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
              value={spermSource}
              onChange={(e) => {
                setSpermSource(e.target.value);
                handleChange("spermSource", e.target.value);
              }}
            >
              <option value="">Select</option>
              <option value="self">Self</option>
              <option value="donor">Donor</option>
            </select>
            {spermSource === "donor" && (
              <input
                type="text"
                className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Donor ID"
                onChange={(e) => handleChange("donorSpermId", e.target.value)}
              />
            )}
          </FormGroup>

          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Oocyte Source</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={oocyteSource}
              onChange={(e) => {
                setOocyteSource(e.target.value);
                handleChange("oocyteSource", e.target.value);
              }}
            >
              <option value="">Select</option>
              <option value="self">Self</option>
              <option value="donor">Donor</option>
            </select>
            {oocyteSource === "donor" && (
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
            )}
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Cycle Number</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e) => handleChange("cycleNumber", e.target.value)}
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
      <div className="text-blue-700 font-semibold mb-2">Straw {index + 1}</div>

      {/* Single Embryo per Straw */}
      <FormRow>
        <FormGroup>
          <label>Day</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            value={straw.embryo.day}
            onChange={(e) => handleEmbryoChange(index, "day", e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label>Cells / Expansion Grade</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            value={straw.embryo.expansion}
            onChange={(e) => handleEmbryoChange(index, "expansion", e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label>Grade</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            value={straw.embryo.grade}
            onChange={(e) => handleEmbryoChange(index, "grade", e.target.value)}
          />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <label>Inner Cell Mass</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            value={straw.embryo.innerCellMass}
            onChange={(e) => handleEmbryoChange(index, "innerCellMass", e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label>Trophectoderm</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            value={straw.embryo.trophectoderm}
            onChange={(e) => handleEmbryoChange(index, "trophectoderm", e.target.value)}
          />
        </FormGroup>
      </FormRow>

      {/* Location */}
      <div className="text-blue-700 font-semibold mt-4 mb-2">Straw Location</div>
      <FormRow>
        <FormGroup>
          <label>Straw Color</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            onChange={(e) => updateStraw(index, "", e.target.value, "color")}
          />
        </FormGroup>
        <FormGroup>
          <label>Cryocan #</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            onChange={(e) => updateStraw(index, "", e.target.value, "cryocan")}
          />
        </FormGroup>
        <FormGroup>
          <label>Canister #</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            onChange={(e) => updateStraw(index, "", e.target.value, "canister")}
          />
        </FormGroup>
      </FormRow>
      <FormRow>
        <FormGroup>
          <label>Goblet #</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            onChange={(e) => updateStraw(index, "", e.target.value, "goblet")}
          />
        </FormGroup>
        <FormGroup className="w-full">
          <label>More Location Details</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            onChange={(e) => updateStraw(index, "", e.target.value, "otherDetails")}
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
          setEmbryos([]); // Reset on change
          handleChange("freshEmbryoCount", value);
        }}
      >
        {["0", "1", "2", "3", "4"].map((v) => (
          <option key={v} value={v}>{v}</option>
        ))}
      </select>
    </FormGroup>
  </FormRow>

  {freshEmbryoCount !== "0" && (
    <>
      {embryos.map((embryo, index) => (
        <FormRow key={index}>
          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Day</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={embryo.day || ""}
              onChange={(e) => handleEmbryoChange(index, "day", e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Cells / Expansion Grade</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={embryo.expansion || ""}
              onChange={(e) => handleEmbryoChange(index, "expansion", e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Grade</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={embryo.grade || ""}
              onChange={(e) => handleEmbryoChange(index, "grade", e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Inner Cell Mass</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={embryo.innerCellMass || ""}
              onChange={(e) => handleEmbryoChange(index, "innerCellMass", e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Trophectoderm</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={embryo.trophectoderm || ""}
              onChange={(e) => handleEmbryoChange(index, "trophectoderm", e.target.value)}
            />
          </FormGroup>
        </FormRow>
      ))}

      {embryos.length < parseInt(freshEmbryoCount) && (
        <button
          type="button"
          className="mt-2 px-4 py-2 border border-blue-500 text-blue-600 rounded hover:bg-blue-50"
          onClick={addEmbryo}
        >
          + Add Embryo
        </button>
      )}
    </>
  )}
</FormSection>


    </>
  );
};
