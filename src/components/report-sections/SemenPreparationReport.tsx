interface SemenPreparationData {
  preparationMethod?: string;
  volumeProcessed?: number;
  concentrationPost?: number;
  motilityPost?: number;
  morphologyPost?: number;
  totalMotileSpermCount?: number;
  technicianName?: string;
  notes?: string;
}

interface SemenPreparationReportProps {
  data: SemenPreparationData;
}

export default function SemenPreparationReport({ data }: SemenPreparationReportProps) {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-blue-700 mb-3">SEMEN PREPARATION</h3>

      <table className="w-full border border-gray-300 text-sm mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-2 py-1 text-left">Parameter</th>
            <th className="border border-gray-300 px-2 py-1 text-left">Result</th>
            <th className="border border-gray-300 px-2 py-1 text-left">Units</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-2 py-1">Preparation Method</td>
            <td className="border border-gray-300 px-2 py-1">{data.preparationMethod || 'N/A'}</td>
            <td className="border border-gray-300 px-2 py-1">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 py-1">Volume Processed</td>
            <td className="border border-gray-300 px-2 py-1">{data.volumeProcessed ?? 'N/A'}</td>
            <td className="border border-gray-300 px-2 py-1">mL</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 py-1">Concentration Post-Preparation</td>
            <td className="border border-gray-300 px-2 py-1">{data.concentrationPost ?? 'N/A'}</td>
            <td className="border border-gray-300 px-2 py-1">million/mL</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 py-1">Motility Post-Preparation</td>
            <td className="border border-gray-300 px-2 py-1">{data.motilityPost ?? 'N/A'}</td>
            <td className="border border-gray-300 px-2 py-1">%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 py-1">Morphology Post-Preparation</td>
            <td className="border border-gray-300 px-2 py-1">{data.morphologyPost ?? 'N/A'}</td>
            <td className="border border-gray-300 px-2 py-1">%</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-2 py-1">Total Motile Sperm Count</td>
            <td className="border border-gray-300 px-2 py-1">{data.totalMotileSpermCount ?? 'N/A'}</td>
            <td className="border border-gray-300 px-2 py-1">million</td>
          </tr>
        </tbody>
      </table>

      {data.technicianName && (
        <div className="text-sm mb-2">
          <p><span className="font-medium">Technician Name:</span> {data.technicianName}</p>
        </div>
      )}

      {data.notes && (
        <div className="mb-2">
          <h4 className="font-medium text-gray-700 mb-1">Notes</h4>
          <p className="text-sm border border-gray-300 p-2 bg-gray-50">{data.notes}</p>
        </div>
      )}
    </div>
  );
}
