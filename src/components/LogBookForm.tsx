
import { useState } from "react";
import { PatientInfoSection } from "./form-sections/PatientInfoSection";
import { ClinicalInfoSection } from "./form-sections/ClinicalInfoSection";
import { OocyteEmbryoSection } from "./form-sections/OocyteEmbryoSection";
import { ProcedureSelector } from "./form-sections/ProcedureSelector";
import { SemenAnalysisSection } from "./form-sections/SemenAnalysisSection";
import { SemenPreparationSection } from "./form-sections/SemenPreparationSection";
import { SemenFreezingSection } from "./form-sections/SemenFreezingSection";
import { OocyteRetrievalSection } from "./form-sections/OocyteRetrievalSection";
import { EmbryoTransferSection } from "./form-sections/EmbryoTransferSection";
import { ReportGenerator } from "./ReportGenerator";
import { Button } from "@/components/ui/button";
import { ReportData } from "@/types/reportTypes";

export const LogBookForm = () => {
  const [selectedProcedure, setSelectedProcedure] = useState("");
  const [showReport, setShowReport] = useState(false);
  const [formData, setFormData] = useState<any>({});

const handleInputChange = (section: string, field: string, value: any) => {
  setFormData((prev: any) => ({
    ...prev,
    [section]: {
      ...prev[section],
      ...(field ? { [field]: value } : value), // merge directly if field is empty
    },
  }));
};

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://ivf-ht0d.onrender.com/api/patients/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({formData,selectedProcedure}),
      });

      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }

      const data = await response.json();
      console.log('Form submitted successfully:', data);

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleGenerateReport = () => {
    // Prepare report data from form
    const reportData: ReportData = {
      patientInfo: formData.patient || {},
      clinicalInfo: formData.clinical || {},
      oocyteEmbryoInfo: formData.oocyteEmbryo || {},
      semenAnalysis: formData.semenAnalysis || {},
      embryoTransfer: formData.embryoTransfer || {},
      semenPreparation: formData.semenPreparation || {},
      oocyteRetrieval: formData.oocyteRetrieval || {},
      semenFreezing: formData.semenFreezing || {},
      procedureType: selectedProcedure
    };
    
    console.log("Generating report with data:", reportData);
    setShowReport(true);
  };

  const renderProcedureSection = () => {
    switch (selectedProcedure) {
      case "andrologySemenAnalysis":
        return <SemenAnalysisSection onDataChange={(data) => handleInputChange('semenAnalysis', '', data)} />;
      case "andrologySemenPreparation":
        return <SemenPreparationSection onDataChange={(data) => handleInputChange('semenPreparation', '', data)} />;
      case "andrologySemenFreezing":
        return <SemenFreezingSection onDataChange={(data) => handleInputChange('semenFreezing', '', data)}/>;
      case "embryologyOocyteRetrieval":
        return <OocyteRetrievalSection onDataChange={(data) => handleInputChange('oocyteRetrieval', '', data)}/>;
      case "embryologyEmbryoTransfer":
        return <EmbryoTransferSection onDataChange={(data) => handleInputChange('embryoTransfer', '', data)}/>;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-8">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
          Log Book Entry
        </h1>
        
        <PatientInfoSection onDataChange={(data) => handleInputChange('patient', '', data)} />
        <ClinicalInfoSection onDataChange={(data) => handleInputChange('clinical', '', data)} />
        <OocyteEmbryoSection onDataChange={(data) => handleInputChange('oocyteEmbryo', '', data)}/>
        <ProcedureSelector 
          selectedProcedure={selectedProcedure} 
          onProcedureChange={setSelectedProcedure} 
        />
        
        {renderProcedureSection()}

        <div className="flex justify-between items-center pt-6 border-t">
          <Button 
            type="button"
            onClick={handleGenerateReport}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            Generate Report
          </Button>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
            Save Entry
          </Button>
        </div>
      </form>

     {showReport && (
  <ReportGenerator 
    data={{
      patientInfo: formData.patient || {},
      clinicalInfo: formData.clinical || {},
      oocyteEmbryoInfo: formData.oocyteEmbryo || {},
      semenAnalysis: formData.semenAnalysis || {},
      embryoTransfer: formData.embryoTransfer || {},
      semenPreparation: formData.semenPreparation || {},
      oocyteRetrieval: formData.oocyteRetrieval || {},
      semenFreezing: formData.semenFreezing || {},
      procedureType: selectedProcedure
    }}
    onClose={() => setShowReport(false)}
  />
)}

    </div>
  );
};
