type SemenAnalysisReportProps = {
  data: any;
  onClose: () => void;
};
export default function SemenAnalysisReport({ data, onClose }: SemenAnalysisReportProps) {
  const getRefValue = (parameter: string) => {
    const referenceValues: Record<string, string> = {
      volume: "≥ 1.5 mL",
      ph: "7.2 - 8.0",
      spermConcentration: "≥ 15 million/mL",
      totalSpermCount: "≥ 39 million",
      totalMotility: "≥ 40%",
      progressiveMotility: "≥ 32%",
      normalMorphology: "≥ 4%",
      liveSpermsVitality: "≥ 58%",
      liquefactionTime: "≤ 60 min"
    };
    return referenceValues[parameter] || "N/A";
  };

  const calculateTotalCount = () => {
    if (data.volume && data.spermConcentration) {
      return (data.volume * data.spermConcentration).toFixed(2);
    }
    return "N/A";
  };
   const handlePrint = () => {
    window.print();
  };

  const getCurrentDateTime = () => {
    return new Date().toLocaleString();
  };

  return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 print:p-0">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 print:hidden">
            <h2 className="text-2xl font-bold text-blue-600">Generated Report</h2>
            <div className="space-x-2">
              <button
                onClick={handlePrint}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Print Report
              </button>
              <button
                onClick={onClose}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>

          {/* Report Content */}
          <div className="border border-gray-300 p-6 bg-white">
            {/* Report Header */}
            <div className="text-center mb-6 border-b pb-4">
              <h1 className="text-2xl font-bold text-blue-800">REPORT</h1>
              <p className="text-sm text-gray-600 mt-2">LogHub - IVF Laboratory Management System</p>
              <div className="flex justify-between mt-4 text-sm">
                <span>Report Date: {getCurrentDateTime()}</span>
                <span>Report ID: LH-{Date.now()}</span>
              </div>
            </div>
 <div className="mb-8 text-sm">
      <h3 className="font-bold text-blue-700 mb-4">SEMEN ANALYSIS REPORT</h3>

      {/* Patient Info */}
      <div className="mb-4">
        <p><strong>Patient ID:</strong> {data.patientUniqueId}</p>
        <p><strong>Name:</strong> {data.patientName}</p>
        <p><strong>Age:</strong> {data.patientAge}</p>
        <p><strong>Date of Collection:</strong> {data.dateOfCollection}</p>
        <p><strong>Abstinence Days:</strong> {data.abstinenceDays}</p>
        <p><strong>Referred By:</strong> {data.referredBy}</p>
        <p><strong>Performed By:</strong> {data.performedBy}</p>
      </div>

      {/* Physical Exam */}
      <h4 className="font-medium text-gray-800 mt-4 mb-2">Physical Examination</h4>
      <table className="w-full border border-gray-300 mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1 text-left">Parameter</th>
            <th className="border px-2 py-1 text-left">Result</th>
            <th className="border px-2 py-1 text-left">Reference</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-2 py-1">Volume</td><td className="border px-2 py-1">{data.volume} mL</td><td className="border px-2 py-1">{getRefValue("volume")}</td></tr>
          <tr><td className="border px-2 py-1">pH</td><td className="border px-2 py-1">{data.ph}</td><td className="border px-2 py-1">{getRefValue("ph")}</td></tr>
          <tr><td className="border px-2 py-1">Appearance</td><td className="border px-2 py-1">{data.appearance}</td><td className="border px-2 py-1">Normal</td></tr>
          <tr><td className="border px-2 py-1">Viscosity</td><td className="border px-2 py-1">{data.viscosity}</td><td className="border px-2 py-1">Normal</td></tr>
          <tr><td className="border px-2 py-1">Liquefaction Time</td><td className="border px-2 py-1">{data.liquefactionTime} min</td><td className="border px-2 py-1">{getRefValue("liquefactionTime")}</td></tr>
        </tbody>
      </table>

      {/* Motility & Count */}
      <h4 className="font-medium text-gray-800 mt-4 mb-2">Motility & Count</h4>
      <table className="w-full border border-gray-300 mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1">Parameter</th>
            <th className="border px-2 py-1">Result</th>
            <th className="border px-2 py-1">Reference</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-2 py-1">Sperm Concentration</td><td className="border px-2 py-1">{data.spermConcentration} million/mL</td><td className="border px-2 py-1">{getRefValue("spermConcentration")}</td></tr>
          <tr><td className="border px-2 py-1">Total Sperm Count</td><td className="border px-2 py-1">{calculateTotalCount()} million</td><td className="border px-2 py-1">{getRefValue("totalSpermCount")}</td></tr>
          <tr><td className="border px-2 py-1">Total Motility</td><td className="border px-2 py-1">{data.totalMotility}%</td><td className="border px-2 py-1">{getRefValue("totalMotility")}</td></tr>
          <tr><td className="border px-2 py-1">Progressive Motility</td><td className="border px-2 py-1">{data.progressiveMotility}%</td><td className="border px-2 py-1">{getRefValue("progressiveMotility")}</td></tr>
          <tr><td className="border px-2 py-1">Non-Progressive Motility</td><td className="border px-2 py-1">{data.nonProgressiveMotility}%</td><td className="border px-2 py-1">-</td></tr>
          <tr><td className="border px-2 py-1">Non-Motile</td><td className="border px-2 py-1">{data.nonMotile}%</td><td className="border px-2 py-1">-</td></tr>
        </tbody>
      </table>

      {/* Morphology */}
      <h4 className="font-medium text-gray-800 mt-4 mb-2">Morphology</h4>
      <table className="w-full border border-gray-300 mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1">Parameter</th>
            <th className="border px-2 py-1">Result</th>
            <th className="border px-2 py-1">Reference</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-2 py-1">Normal Morphology</td><td className="border px-2 py-1">{data.normalMorphology}%</td><td className="border px-2 py-1">{getRefValue("normalMorphology")}</td></tr>
          <tr><td className="border px-2 py-1">Head Defects</td><td className="border px-2 py-1">{data.headDefects}%</td><td className="border px-2 py-1">-</td></tr>
          <tr><td className="border px-2 py-1">Midpiece Defects</td><td className="border px-2 py-1">{data.midpieceDefects}%</td><td className="border px-2 py-1">-</td></tr>
          <tr><td className="border px-2 py-1">Tail Defects</td><td className="border px-2 py-1">{data.tailDefects}%</td><td className="border px-2 py-1">-</td></tr>
          <tr><td className="border px-2 py-1">Cytoplasmic Droplets</td><td className="border px-2 py-1">{data.cytoplasmicDroplets}%</td><td className="border px-2 py-1">-</td></tr>
        </tbody>
      </table>

      {/* Vitality */}
      <h4 className="font-medium text-gray-800 mt-4 mb-2">Vitality</h4>
      <p className="border border-gray-300 p-2 mb-4">
        Live Sperms: {data.liveSpermsVitality}% (Ref: {getRefValue("liveSpermsVitality")})
      </p>

      {/* Biochemical & Others */}
      <h4 className="font-medium text-gray-800 mt-4 mb-2">Other Observations</h4>
      <ul className="list-disc ml-6 space-y-1 mb-4">
        <li><strong>Fructose Test:</strong> {data.fructoseTest}</li>
        <li><strong>Agglutination:</strong> {data.agglutination}</li>
        <li><strong>Aggregation:</strong> {data.aggregation}</li>
        <li><strong>Red Blood Cells:</strong> {data.redBloodCells}</li>
        <li><strong>Round Cells:</strong> {data.roundCells}</li>
      </ul>

      {/* Comments */}
      {data.comments && (
        <>
          <h4 className="font-medium text-gray-800 mb-2">Comments</h4>
          <p className="border border-gray-300 p-2 bg-gray-50">{data.comments}</p>
        </>
      )}
    </div>

            {/* Footer */}
            <div className="border-t pt-4 mt-6 text-xs text-gray-600">
              <div className="flex justify-between">
                <div>
                  <p><strong>Generated by:</strong> LogHub System</p>
                  <p><strong>Date:</strong> {getCurrentDateTime()}</p>
                </div>
                <div className="text-right">
                  <p><strong>© 2025 LogHub by Webiosis</strong></p>
                  <p>All rights reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}
