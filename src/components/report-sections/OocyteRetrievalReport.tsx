interface Embryo {
  numberOfCells?: string;
  grade?: string;
  expansion?: string;
  innerCellMass?: string;
  trophectoderm?: string;
}

interface Embryo2 {
  day?: string;
  expansion?: string;
  grade?: string;
  trophectoderm?: string;
}

interface OocyteData {
  mi: string;
  mii: string;
  gv: string;
}

interface StrawLocation {
  color: string;
  cryocan: string;
  canister: string;
  goblet: string;
  otherDetails: string;
}

interface Straw {
  materialType: string;
  oocyteData: OocyteData;
  location: StrawLocation;
}

interface OocyteRetrievalReportData {
  patientId?: string;
  patientName?: string;
  patientAge?: number;
  partnerName?: string;
  partnerAge?: number;
  amh?: string;
  indication?: string;
  opuDate?: string;
  cycleType?: string;
  spermSource?: string;
  oocyteSource?: string;
  cycleNumber?: string;
  stimulationDetails?: string;
  hcgTriggerDate?: string;
  hcgTriggerTime?: string;
  oocyteRetrievalTime?: string;
  ExpectedOCCs?: number;
  OCCsRetrieved?: number;
  MII?: number;
  MI?: number;
  GVs?: number;
  OocytesFrozen?: number;
  OocytesForIVF?: number;
  OocytesInjected?: number;
  TimeOfInjection?: number;
  embryos?: Embryo[];
  embryos2?: Embryo2[];
  straws?: Straw[];
}

interface Props {
  data: OocyteRetrievalReportData;
  onClose: () => void;
}

export default function OocyteRetrievalReport({ data, onClose }: Props) {
  const handlePrint = () => window.print();
  const getCurrentDateTime = () => new Date().toLocaleString();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 print:p-4">
          {/* Modal Header */}
          <div className="flex justify-between items-center mb-6 print:hidden">
            <h2 className="text-2xl font-bold text-blue-600">Generated Report</h2>
            <div className="space-x-2">
              <button onClick={handlePrint} className="bg-blue-600 text-white px-4 py-2 rounded">Print</button>
              <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">Close</button>
            </div>
          </div>

          {/* Report Body */}
          <div className="border border-gray-300 p-6 bg-white">
            <div className="text-center mb-6 border-b pb-4">
              <h1 className="text-2xl font-bold text-blue-800">OOCYTE RETRIEVAL REPORT</h1>
              <p className="text-sm text-gray-600">LogHub - IVF Laboratory Management System</p>
              <div className="flex justify-between mt-4 text-sm">
                <span>Report Date: {getCurrentDateTime()}</span>
                <span>Report ID: LH-{Date.now()}</span>
              </div>
            </div>

            {/* Patient Info */}
            <div className="text-sm mb-4">
              <p><strong>Patient ID:</strong> {data.patientId}</p>
              <p><strong>Patient Name:</strong> {data.patientName}</p>
              <p><strong>Age:</strong> {data.patientAge}</p>
              <p><strong>Partner Name:</strong> {data.partnerName}</p>
              <p><strong>Partner Age:</strong> {data.partnerAge}</p>
              <p><strong>AMH:</strong> {data.amh}</p>
              <p><strong>Indication:</strong> {data.indication}</p>
              <p><strong>Cycle Type:</strong> {data.cycleType}</p>
              <p><strong>Cycle Number:</strong> {data.cycleNumber}</p>
              <p><strong>Oocyte Source:</strong> {data.oocyteSource}</p>
              <p><strong>Sperm Source:</strong> {data.spermSource}</p>
              <p><strong>OPU Date:</strong> {data.opuDate}</p>
              <p><strong>HCG Trigger Date & Time:</strong> {data.hcgTriggerDate} at {data.hcgTriggerTime}</p>
              <p><strong>Oocyte Retrieval Time:</strong> {data.oocyteRetrievalTime}</p>
              <p><strong>Stimulation Details:</strong> {data.stimulationDetails}</p>
            </div>

            {/* Oocyte Details */}
            <div className="text-sm mb-4">
              <p><strong>Expected OCCs:</strong> {data.ExpectedOCCs}</p>
              <p><strong>OCCs Retrieved:</strong> {data.OCCsRetrieved}</p>
              <p><strong>MII:</strong> {data.MII}</p>
              <p><strong>MI:</strong> {data.MI}</p>
              <p><strong>GVs:</strong> {data.GVs}</p>
              <p><strong>Oocytes Frozen:</strong> {data.OocytesFrozen}</p>
              <p><strong>Oocytes For IVF:</strong> {data.OocytesForIVF}</p>
              <p><strong>Oocytes Injected:</strong> {data.OocytesInjected}</p>
              <p><strong>Time Of Injection:</strong> {data.TimeOfInjection}</p>
            </div>

            {/* Embryo Table */}
            {data.embryos?.length > 0 && (
              <>
                <h4 className="font-semibold text-blue-700 mt-6 mb-2">Embryos (Early)</h4>
                <table className="w-full border text-sm mb-4">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border px-2 py-1">Cells</th>
                      <th className="border px-2 py-1">Grade</th>
                      <th className="border px-2 py-1">Expansion</th>
                      <th className="border px-2 py-1">ICM</th>
                      <th className="border px-2 py-1">Trophectoderm</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.embryos.map((emb, idx) => (
                      <tr key={idx}>
                        <td className="border px-2 py-1">{emb.numberOfCells}</td>
                        <td className="border px-2 py-1">{emb.grade}</td>
                        <td className="border px-2 py-1">{emb.expansion}</td>
                        <td className="border px-2 py-1">{emb.innerCellMass}</td>
                        <td className="border px-2 py-1">{emb.trophectoderm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}

            {data.embryos2?.length > 0 && (
              <>
                <h4 className="font-semibold text-blue-700 mt-6 mb-2">Embryos (Blastocysts)</h4>
                <table className="w-full border text-sm mb-4">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border px-2 py-1">Day</th>
                      <th className="border px-2 py-1">Expansion</th>
                      <th className="border px-2 py-1">Grade</th>
                      <th className="border px-2 py-1">Trophectoderm</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.embryos2.map((emb, idx) => (
                      <tr key={idx}>
                        <td className="border px-2 py-1">{emb.day}</td>
                        <td className="border px-2 py-1">{emb.expansion}</td>
                        <td className="border px-2 py-1">{emb.grade}</td>
                        <td className="border px-2 py-1">{emb.trophectoderm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}

            {/* Straw & Location */}
            {data.straws?.map((straw, idx) => (
              <div key={idx} className="mb-4">
                <h4 className="font-semibold text-blue-700 mb-2">Straw #{idx + 1} ({straw.materialType})</h4>
                <p><strong>MI:</strong> {straw.oocyteData.mi}, <strong>MII:</strong> {straw.oocyteData.mii}, <strong>GV:</strong> {straw.oocyteData.gv}</p>
                <p><strong>Location:</strong></p>
                <ul className="ml-4 list-disc text-sm">
                  <li>Cryocan: {straw.location.cryocan}</li>
                  <li>Canister: {straw.location.canister}</li>
                  <li>Goblet: {straw.location.goblet}</li>
                  <li>Color: {straw.location.color}</li>
                  <li>Other Details: {straw.location.otherDetails}</li>
                </ul>
              </div>
            ))}

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
