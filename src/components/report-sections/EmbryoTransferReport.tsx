interface Embryo {
  day: string;
  expansion: string;
  grade: string;
  innerCellMass: string;
  trophectoderm: string;
}

interface FrozenEmbryoTransferData {
  patientId?: string;
  patientName?: string;
  patientAge?: number;
  partnerName?: string;
  partnerAge?: number;
  embryosThawed?: string;
  embryosTransferred?: string;
  embryos?: Embryo[];
  embryologist?: string;
  clinician?: string;
  comments?: string;
}

interface FrozenEmbryoTransferReportProps {
  data: FrozenEmbryoTransferData;
  onClose: () => void;
}

export default function FrozenEmbryoTransferReport({ data, onClose }: FrozenEmbryoTransferReportProps) {
  const handlePrint = () => window.print();
  const getCurrentDateTime = () => new Date().toLocaleString();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 print:p-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 print:hidden">
            <h2 className="text-2xl font-bold text-blue-600">Generated Report</h2>
            <div className="space-x-2">
              <button onClick={handlePrint} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Print Report</button>
              <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Close</button>
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

            {/* Section: Title */}
            <div className="mb-6">
              <h3 className="font-semibold text-blue-700 mb-3">FROZEN EMBRYO TRANSFER REPORT</h3>

              {/* Patient Info */}
              <div className="mb-4 text-sm">
                <p><strong>Patient ID:</strong> {data.patientId}</p>
                <p><strong>Patient Name:</strong> {data.patientName}</p>
                <p><strong>Patient Age:</strong> {data.patientAge}</p>
                <p><strong>Partner Name:</strong> {data.partnerName}</p>
                <p><strong>Partner Age:</strong> {data.partnerAge}</p>
              </div>

              {/* Embryo Transfer Summary */}
              <div className="mb-4 text-sm">
                <p><strong>Embryos Thawed:</strong> {data.embryosThawed}</p>
                <p><strong>Embryos Transferred:</strong> {data.embryosTransferred}</p>
              </div>

              {/* Embryo Details Table */}
              <h4 className="font-medium text-gray-700 mb-2">Embryo Details</h4>
              <table className="w-full border border-gray-300 text-sm mb-4">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-2 py-1 text-left">Day</th>
                    <th className="border px-2 py-1 text-left">Expansion</th>
                    <th className="border px-2 py-1 text-left">Grade</th>
                    <th className="border px-2 py-1 text-left">Inner Cell Mass</th>
                    <th className="border px-2 py-1 text-left">Trophectoderm</th>
                  </tr>
                </thead>
                <tbody>
                  {data.embryos?.map((embryo, index) => (
                    <tr key={index}>
                      <td className="border px-2 py-1">{embryo.day}</td>
                      <td className="border px-2 py-1">{embryo.expansion}</td>
                      <td className="border px-2 py-1">{embryo.grade}</td>
                      <td className="border px-2 py-1">{embryo.innerCellMass}</td>
                      <td className="border px-2 py-1">{embryo.trophectoderm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Staff */}
              <div className="text-sm mb-4">
                <p><strong>Embryologist:</strong> {data.embryologist}</p>
                <p><strong>Clinician:</strong> {data.clinician}</p>
              </div>

              {/* Comments */}
              {data.comments && (
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-1">Comments</h4>
                  <p className="text-sm border border-gray-300 p-2 bg-gray-50">{data.comments}</p>
                </div>
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
