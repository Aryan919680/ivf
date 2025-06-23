interface SemenFreezingData {
  patientId?: string;
  patientName?: string;
  patientAge?: number;
  partnerName?: string;
  partnerAge?: number;
  freezingDate?: string;
  abstinencePeriod?: number;
  freezingMethod?: string;
  countBeforeFreezing?: number;
  motilityBeforeFreezing?: number;
  vialsFrozen?: number;
  cryocanNumber?: string;
  canisterNumber?: string;
  locationDetails?: string;
  performedBy?: string;
}

interface SemenFreezingReportProps {
  data: SemenFreezingData;
  onClose: () => void;
}

export default function SemenFreezingReport({ data, onClose }: SemenFreezingReportProps) {
  const handlePrint = () => {
    window.print();
  };

  const getCurrentDateTime = () => new Date().toLocaleString();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-lg print:shadow-none">
        <div className="p-6 print:p-4">
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

            {/* Freezing Report */}
            <div className="mb-6">
              <h3 className="font-semibold text-blue-700 mb-3">SEMEN FREEZING REPORT</h3>

              {/* Patient Info */}
              <div className="mb-4 text-sm">
                <p><strong>Patient ID:</strong> {data.patientId}</p>
                <p><strong>Patient Name:</strong> {data.patientName}</p>
                <p><strong>Patient Age:</strong> {data.patientAge}</p>
                <p><strong>Partner Name:</strong> {data.partnerName}</p>
                <p><strong>Partner Age:</strong> {data.partnerAge}</p>
                <p><strong>Freezing Date:</strong> {data.freezingDate}</p>
                <p><strong>Abstinence Period:</strong> {data.abstinencePeriod} days</p>
              </div>

              {/* Freezing Details */}
              <table className="w-full border border-gray-300 text-sm mb-4">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-2 py-1 text-left">Parameter</th>
                    <th className="border px-2 py-1 text-left">Value</th>
                    <th className="border px-2 py-1 text-left">Units</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-2 py-1">Freezing Method</td>
                    <td className="border px-2 py-1">{data.freezingMethod || 'N/A'}</td>
                    <td className="border px-2 py-1">-</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">Sperm Count Before Freezing</td>
                    <td className="border px-2 py-1">{data.countBeforeFreezing ?? 'N/A'}</td>
                    <td className="border px-2 py-1">million/mL</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">Motility Before Freezing</td>
                    <td className="border px-2 py-1">{data.motilityBeforeFreezing ?? 'N/A'}%</td>
                    <td className="border px-2 py-1">%</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">Vials Frozen</td>
                    <td className="border px-2 py-1">{data.vialsFrozen ?? 'N/A'}</td>
                    <td className="border px-2 py-1">Vials</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">Cryocan Number</td>
                    <td className="border px-2 py-1">{data.cryocanNumber || 'N/A'}</td>
                    <td className="border px-2 py-1">-</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">Canister Number</td>
                    <td className="border px-2 py-1">{data.canisterNumber || 'N/A'}</td>
                    <td className="border px-2 py-1">-</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">Location Details</td>
                    <td className="border px-2 py-1">{data.locationDetails || 'N/A'}</td>
                    <td className="border px-2 py-1">-</td>
                  </tr>
                </tbody>
              </table>

              {/* Footer Info */}
              <div className="text-sm mb-4">
                <p><strong>Performed By:</strong> {data.performedBy || 'N/A'}</p>
              </div>
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
