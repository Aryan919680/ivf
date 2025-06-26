
import { useState } from "react";
import { PatientInfoSection } from "./form-sections/PatientInfoSection";
import { ClinicalInfoSection } from "./form-sections/ClinicalInfoSection";
import { OocyteEmbryoSection } from "./form-sections/OocyteEmbryoSection";
import { ProcedureSelector } from "./form-sections/ProcedureSelector";
import { SemenAnalysisSection } from "./form-sections/SemenAnalysisSection";
import { SemenPreparationSection } from "./form-sections/SemenPreparationSection";
import { SemenFreezingSection } from "./form-sections/SemenFreezingSection";
import { OocyteRetrievalSection } from "./form-sections/OocyteRetrievalSection";
import { ReportGenerator } from "./ReportGenerator";
import { Button } from "@/components/ui/button";
import { ReportData } from "@/types/reportTypes";
import FrozenEmbryoTransferSection from "./form-sections/FrozenEmbryoTransferSection";
import SemenAnalysisReport from "./report-sections/SemenAnalysisReport";
import SemenPreparationReport from "./report-sections/SemenPreparationReport";
import SemenFreezingReport from "./report-sections/SemenFreezingReport";
import  OocyteRetrievalReport  from "./report-sections/OocyteRetrievalReport";
import  EmbryoTransferReport  from "./report-sections/EmbryoTransferReport";
import { useEffect,useRef } from "react";
import { format } from "date-fns"; // Optional for date formatting
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



const [startDate, setStartDate] = useState("");
const [endDate, setEndDate] = useState("");
const [fetchedReports, setFetchedReports] = useState<any[]>([]);
const [fetching, setFetching] = useState(false);
const [fetchError, setFetchError] = useState("");


const debounceRef = useRef<any>(null);

const handlePatientIdChange = (value: string) => {
  handleInputChange("patientId", "", value); // still store in formData

  if (debounceRef.current) {
    clearTimeout(debounceRef.current);
  }

  debounceRef.current = setTimeout(() => {
    fetchDataByPatientId(value);
  }, 600); // 600ms debounce
};
const fetchDataByPatientId = async (id: string) => {
  if (!id || !selectedProcedure) return;

  const baseUrl = "https://ivf-ht0d.onrender.com";
    // const baseUrl = "http://localhost:4000";
  let endpoint = "";

  switch (selectedProcedure) {
    case "andrologySemenAnalysis":
      endpoint = `/semen-analysis/patient/${id}`;
      break;
    case "andrologySemenPreparation":
      endpoint = `/semen-preparation/patient/${id}`;
      break;
    case "andrologySemenFreezing":
      endpoint = `/semen-freezing/patient/${id}`;
      break;
    case "embryologyOocyteRetrieval":
      endpoint = `/oocyte-embryo-info/patient/${id}`;
      break;
    case "embryologyEmbryoTransfer":
      endpoint = `/embryo-transfer/patient/${id}`;
      break;
    default:
      return;
  }

  try {
    const response = await fetch(`${baseUrl}${endpoint}`);
    if (!response.ok) throw new Error("Patient not found");

    const data = await response.json();

    // Merge the data into formData for the relevant section
    setFormData((prev: any) => ({
      ...prev,
      [getSectionKeyFromProcedure(selectedProcedure)]: data,
    }));

    alert("✅ Patient data loaded.");
  } catch (err) {
    console.error("Patient not found:", err);
  }
};

const getSectionKeyFromProcedure = (procedure: string) => {
  switch (procedure) {
    case "andrologySemenAnalysis": return "semenAnalysis";
    case "andrologySemenPreparation": return "semenPreparation";
    case "andrologySemenFreezing": return "semenFreezing";
    case "embryologyOocyteRetrieval": return "oocyteRetrieval";
    case "embryologyEmbryoTransfer": return "embryoTransfer";
    default: return "";
  }
};


const handleFetchByDate = async () => {
  if (!startDate || !endDate || !selectedProcedure) {
    setFetchError("Please select procedure and date range.");
    return;
  }

  setFetchError("");
  setFetching(true);

  const baseUrl = "https://ivf-ht0d.onrender.com";
  //  const baseUrl = "http://localhost:4000";
  let endpoint = "";

  switch (selectedProcedure) {
    case "andrologySemenAnalysis":
      endpoint = "/semen-analysis/by-date";
      break;
    case "andrologySemenPreparation":
      endpoint = "/semen-preparation/by-date";
      break;
    case "andrologySemenFreezing":
      endpoint = "/semen-freezing/by-date";
      break;
    case "embryologyOocyteRetrieval":
      endpoint = "/oocyte-embryo-info/by-date";
      break;
    case "embryologyEmbryoTransfer":
      endpoint = "/embryo-transfer/by-date";
      break;
    default:
      setFetchError("Selected procedure does not support report fetching.");
      return;
  }

  try {
    const res = await fetch(`${baseUrl}${endpoint}?start=${startDate}&end=${endDate}`);
    if (!res.ok) throw new Error("Failed to fetch reports.");
    const data = await res.json();
    setFetchedReports(data);
  } catch (error) {
    setFetchError("Error fetching reports. Check console.");
    console.error(error);
  } finally {
    setFetching(false);
  }
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

 const baseUrl = "https://ivf-ht0d.onrender.com"; 
  // const baseUrl = "http://localhost:4000";
  let endpoint = "";
  let payload = {};

  switch (selectedProcedure) {
    case "andrologySemenAnalysis":
      endpoint = "/semen-analysis";
      payload = formData.semenAnalysis || {};
      break;

    case "andrologySemenPreparation":
      endpoint = "/semen-preparation";
      payload = formData.semenPreparation || {};
      break;

    case "andrologySemenFreezing":
      endpoint = "/semen-freezing";
      payload = formData.semenFreezing || {};
      break;

    case "embryologyOocyteRetrieval":
      endpoint = "/oocyte-embryo-info";
      payload = formData.oocyteRetrieval || {};
      break;

    case "embryologyEmbryoTransfer":
      endpoint = "/embryo-transfer";
      payload = formData.embryoTransfer || {};
      break;

    default:
      console.warn("Unsupported procedure:", selectedProcedure);
      return;
  }

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Failed to submit form for ${selectedProcedure}`);
    }

    const data = await response.json();
    console.log("Form submitted successfully:", data);
    alert("✅ Form saved successfully.");
  } catch (error) {
    console.error("Submission error:", error);
    alert("❌ Failed to save entry. Check console for details.");
  }
};


const handleGenerateReport = () => {
  let reportData: any = {};

  switch (selectedProcedure) {
    case "andrologySemenAnalysis":
      reportData = formData.semenAnalysis || {};
      break;
    case "andrologySemenPreparation":
      reportData = formData.semenPreparation || {};
      break;
    case "andrologySemenFreezing":
      reportData = formData.semenFreezing || {};
      break;
    case "embryologyOocyteRetrieval":
      reportData = formData.oocyteRetrieval || {};
      break;
    case "embryologyEmbryoTransfer":
      reportData = formData.embryoTransfer || {};
      break;
    default:
      reportData = {};
  }

  console.log("Generating report with data:", reportData);
  setShowReport(true);
};


  const renderProcedureSection = () => {
    switch (selectedProcedure) {
      case "andrologySemenAnalysis":
        return <SemenAnalysisSection onDataChange={(data) => handleInputChange('semenAnalysis', '', data)} handlePatientIdChange={handlePatientIdChange}/>;
      case "andrologySemenPreparation":
        return <SemenPreparationSection onDataChange={(data) => handleInputChange('semenPreparation', '', data)} />;
      case "andrologySemenFreezing":
        return <SemenFreezingSection onDataChange={(data) => handleInputChange('semenFreezing', '', data)}/>;
      case "embryologyOocyteRetrieval":
        return <OocyteRetrievalSection onDataChange={(data) => handleInputChange('oocyteRetrieval', '', data)} handlePatientIdChange={handlePatientIdChange}   defaultData={formData.oocyteRetrieval}/>;
      case "embryologyEmbryoTransfer":
        return <FrozenEmbryoTransferSection onDataChange={(data) => handleInputChange('embryoTransfer', '', data)} />;
      default:
        return null;
    }
  };

   const convertArrayOfObjectsToCSV = (data: any[]) => {
    if (data.length === 0) return "";
    const headers = Object.keys(data[0]);
    const csvRows = [
      headers.join(","), // header row
      ...data.map(row =>
        headers.map(field => JSON.stringify((row as any)[field] ?? "")).join(",")
      ),
    ];
    return csvRows.join("\r\n");
  };

  // Downloads the CSV as a file
  const downloadCSV = () => {
    const csvContent = convertArrayOfObjectsToCSV(fetchedReports);
    if (!csvContent) return;

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${selectedProcedure}-${startDate}-to-${endDate}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

return (
  <div className="max-w-6xl mx-auto">
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-8">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Log Book Entry
      </h1>

      {/* Always show procedure selector */}
      <ProcedureSelector 
        selectedProcedure={selectedProcedure} 
        onProcedureChange={setSelectedProcedure} 
      />
      <div className="bg-gray-100 p-6 mt-12 rounded-lg shadow border border-gray-200">
  <h2 className="text-xl font-semibold text-gray-800 mb-4">Fetch Reports by Date</h2>

  <div className="flex flex-col md:flex-row gap-4 mb-4">
    <div className="flex flex-col">
      <label className="text-sm mb-1">Start Date</label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="border rounded px-3 py-2"
      />
    </div>
    <div className="flex flex-col">
      <label className="text-sm mb-1">End Date</label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="border rounded px-3 py-2"
      />
    </div>
    <div className="flex items-end">
      <Button
        type="button"
        onClick={handleFetchByDate}
        className="bg-indigo-600 hover:bg-indigo-700 text-white"
      >
        {fetching ? "Fetching..." : "Fetch Reports"}
      </Button>
    </div>
  </div>

  {fetchError && (
    <p className="text-red-600 text-sm mb-4">{fetchError}</p>
  )}

 {fetchedReports.length > 0 && (
          <div className="mt-4">
            <Button onClick={downloadCSV} className="mb-4">
              Download CSV
            </Button>
            {/* <pre className="bg-white p-4 rounded text-sm max-h-96 overflow-y-auto border">
              {JSON.stringify(fetchedReports, null, 2)}
            </pre> */}
          </div>
        )}
</div>


      {/* Show rest of the form only if a procedure is selected */}
      {selectedProcedure && (
        <>
          {/* <PatientInfoSection onDataChange={(data) => handleInputChange('patient', '', data)} />
          <ClinicalInfoSection onDataChange={(data) => handleInputChange('clinical', '', data)} />
          <OocyteEmbryoSection onDataChange={(data) => handleInputChange('oocyteEmbryo', '', data)} /> */}

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
        </>
      )}
    </form>
    {showReport && selectedProcedure === "andrologySemenAnalysis" && (
  <SemenAnalysisReport data={formData.semenAnalysis || {}}   onClose={() => setShowReport(false)}/>
)}

{showReport && selectedProcedure === "andrologySemenPreparation" && (
  <SemenPreparationReport data={formData.semenPreparation || {}}   onClose={() => setShowReport(false)}/>
)}

{showReport && selectedProcedure === "andrologySemenFreezing" && (
  <SemenFreezingReport data={formData.semenFreezing || {}}   onClose={() => setShowReport(false)}/>
)}

{showReport && selectedProcedure === "embryologyOocyteRetrieval" && (
  <OocyteRetrievalReport data={formData.oocyteRetrieval || {}}   onClose={() => setShowReport(false)}/>
)}

{showReport && selectedProcedure === "embryologyEmbryoTransfer" && (
  <EmbryoTransferReport data={formData.embryoTransfer || {}}   onClose={() => setShowReport(false)}/>
)}


    {/* {showReport && (
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
    )} */}
  </div>
);

};
