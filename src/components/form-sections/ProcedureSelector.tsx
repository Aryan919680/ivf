
import { FormRow } from "./FormRow";
import { FormGroup } from "./FormGroup";

interface ProcedureSelectorProps {
  selectedProcedure: string;
  onProcedureChange: (procedure: string) => void;
}

export const ProcedureSelector = ({ selectedProcedure, onProcedureChange }: ProcedureSelectorProps) => {
  return (
    <div className="border-t pt-6">
      <FormRow>
        <FormGroup>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Select Procedure
          </label>
          <select 
            value={selectedProcedure}
            onChange={(e) => onProcedureChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Section</option>
            <option value="andrologySemenAnalysis">Andrology - Semen Analysis</option>
            <option value="andrologySemenPreparation">Andrology - Semen Preparation</option>
            <option value="andrologySemenFreezing">Andrology - Semen Freezing</option>
            <option value="embryologyOocyteRetrieval">Embryology - Oocyte Retrieval & Freezing</option>
            <option value="embryologyEmbryoTransfer">Embryology - Embryo Transfer</option>
          </select>
        </FormGroup>
      </FormRow>
    </div>
  );
};
