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
    <>
      <h1 className="text-2xl font-bold text-center text-blue-900 mb-8">Semen Analysis</h1>
      <FormSection title="Patient Information">
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
              Patient Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Name"
              onChange={(e) => handleChange('patientName', e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Patient Age
            </label>
            <input
              type="number"
              min="18"
              max="55"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Age"
              onChange={(e) => handleChange('patientAge', parseInt(e.target.value))}
            />
          </FormGroup>
          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Date of Collection
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => handleChange('dateOfCollection', e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Abstinence Period (days)
            </label>
            <input
              type="number"
              min="0"
              max="30"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => handleChange("abstinenceDays", parseInt(e.target.value))}
            />
          </FormGroup>
          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Referred By
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Name"
              onChange={(e) => handleChange('referredBy', e.target.value)}
            />
          </FormGroup>
        </FormRow>
      </FormSection>
      <FormSection title="MACROSCOPIC EXAMINATION">
        <FormRow>
          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Liquefaction Time
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => handleChange("liquefactionTime", e.target.value)}
            >
              <option value="">Select</option>
              <option value="0">0 mins</option>
              <option value="10">10 mins</option>
              <option value="20">20 mins</option>
              <option value="30">30 mins</option>
              <option value="40">40 mins</option>
              <option value="50">50 mins</option>
              <option value="60">60 mins</option>
              <option value=">60">&gt; 60 mins</option>

            </select>
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
              <option value="grey opaque">Grey Opaque</option>
              <option value="yellow">Yellow</option>
              <option value="very clear">Very Clear</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="pink">Pink</option>
              <option value="brown">Brown</option>
              <option value="others">Others</option>
            </select>
          </FormGroup>
         
     
          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Volume
            </label>
            <input
              type="number"
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => handleChange("volume", parseInt(e.target.value))}
            />
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
              <option value="highly viscous">Highly Viscous</option>
              <option value="moderately viscous">Moderately Viscous</option>
              <option value="non viscous">Non Viscous</option>
            </select>
          </FormGroup>
          <FormGroup>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Ph Value
            </label>
            <input
              type="number"
              step="0.1"
              min="0"
              max="100"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => handleChange("ph", parseFloat(e.target.value))}
            />
          </FormGroup>
         
        </FormRow>

       

      </FormSection>
      <FormSection title="MICROSCOPIC EXAMINATION">
        <FormRow>
  <FormGroup>
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      Sperm Concentration (million/ml)
    </label>
    <input
      type="number"
      className="w-full px-3 py-2 border border-gray-300 rounded-md"
      onChange={(e) => handleChange("spermConcentration", parseFloat(e.target.value))}
    />
  </FormGroup>

  <FormGroup>
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      Total Sperm Motility (%)
    </label>
    <select
      className="w-full px-3 py-2 border border-gray-300 rounded-md"
      onChange={(e) => handleChange("totalMotility", parseFloat(e.target.value))}
    >
      <option value="">Select</option>
      {[...Array(100)].map((_, i) => (
        <option key={i + 1} value={i + 1}>
          {i + 1}%
        </option>
      ))}
    </select>
  </FormGroup>

  <FormGroup>
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      Progressively Motile Sperms (%)
    </label>
    <input
      type="number"
      className="w-full px-3 py-2 border border-gray-300 rounded-md"
      onChange={(e) => handleChange("progressiveMotility", parseFloat(e.target.value))}
    />
  </FormGroup>
</FormRow>

  {/* Row 1: Motility percentages */}
  <FormRow>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Non-progressively Motile Sperms (%)
      </label>
      <input
        type="number"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("nonProgressiveMotility", parseFloat(e.target.value))}
      />
    </FormGroup>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Non-motile Sperms (%)
      </label>
      <input
        type="number"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("nonMotile", parseFloat(e.target.value))}
      />
    </FormGroup>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Total Normal Morphology (%)
      </label>
      <select
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("normalMorphology", parseFloat(e.target.value))}
      >
        <option value="">Select</option>
        {[...Array(100)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}%
          </option>
        ))}
      </select>
    </FormGroup>
  </FormRow>

  {/* Row 2: Defect percentages */}
  <FormRow>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Head Defects (%)
      </label>
      <input
        type="number"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("headDefects", parseFloat(e.target.value))}
      />
    </FormGroup>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Midpiece Defects (%)
      </label>
      <input
        type="number"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("midpieceDefects", parseFloat(e.target.value))}
      />
    </FormGroup>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Tail Defects (%)
      </label>
      <input
        type="number"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("tailDefects", parseFloat(e.target.value))}
      />
    </FormGroup>
  </FormRow>

  {/* Row 3: Cytoplasmic droplets & vitality */}
  <FormRow>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Cytoplasmic Droplets (%)
      </label>
      <input
        type="number"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("cytoplasmicDroplets", parseFloat(e.target.value))}
      />
    </FormGroup>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Live Sperms Detected in Vitality Test (%)
      </label>
      <input
        type="number"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("liveSpermsVitality", parseFloat(e.target.value))}
      />
    </FormGroup>
  </FormRow>

  {/* Row 4: Dropdowns for other tests */}
  <FormRow>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Fructose Test
      </label>
      <select
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("fructoseTest", e.target.value)}
      >
        <option value="">Select</option>
        <option value="present">Present</option>
        <option value="absent">Absent</option>
      </select>
    </FormGroup>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Agglutination
      </label>
      <select
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("agglutination", e.target.value)}
      >
        <option value="">Select</option>
        <option value="no agglutination">No Agglutination</option>
        <option value="grade 1">Grade 1</option>
        <option value="grade 2">Grade 2</option>
        <option value="grade 3">Grade 3</option>
      </select>
    </FormGroup>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Aggregation
      </label>
      <select
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("aggregation", e.target.value)}
      >
        <option value="">Select</option>
        <option value="present">Present</option>
        <option value="absent">Absent</option>
      </select>
    </FormGroup>
  </FormRow>

  {/* Row 5: RBC, round cells */}
  <FormRow>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Red Blood Cells
      </label>
      <select
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("redBloodCells", e.target.value)}
      >
        <option value="">Select</option>
        <option value="present">Present</option>
        <option value="absent">Absent</option>
      </select>
    </FormGroup>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Round Cells
      </label>
      <select
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        onChange={(e) => handleChange("roundCells", e.target.value)}
      >
        <option value="">Select</option>
        <option value="present">Present</option>
        <option value="absent">Absent</option>
      </select>
    </FormGroup>
  </FormRow>

  {/* Row 6: Comments and performed by */}
  <FormRow>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Comments
      </label>
      <textarea
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        rows={3}
        onChange={(e) => handleChange("comments", e.target.value)}
      />
    </FormGroup>
    <FormGroup>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Semen Analysis Performed By
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
