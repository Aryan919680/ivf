interface OocyteRetrievalReportProps {
  data: Record<string, any>;
}

export const OocyteRetrievalReport = ({ data }: OocyteRetrievalReportProps) => {
  const renderField = (label: string, value: any, unit?: string) => (
    <tr>
      <td className="border border-gray-300 px-2 py-1">{label}</td>
      <td className="border border-gray-300 px-2 py-1">{value || 'N/A'}</td>
      <td className="border border-gray-300 px-2 py-1">{unit || '-'}</td>
    </tr>
  );

  return (
    <div className="mb-6">
      <h3 className="font-semibold text-blue-700 mb-3">OOCYTE RETRIEVAL & FREEZING REPORT</h3>
      <table className="w-full border border-gray-300 text-sm mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-2 py-1 text-left">Parameter</th>
            <th className="border border-gray-300 px-2 py-1 text-left">Value</th>
            <th className="border border-gray-300 px-2 py-1 text-left">Unit</th>
          </tr>
        </thead>
        <tbody>
          {renderField('Retrieval Date', data.retrievalDate)}
          {renderField('Retrieval Time', data.retrievalTime)}
          {renderField('Oocytes Retrieved', data.oocytesRetrieved)}
          {renderField('Maturity Status', data.maturityStatus)}
          {renderField('Freezing Method', data.freezingMethod)}
          {renderField('Oocytes Frozen', data.oocytesFrozen)}
          {renderField('Storage Location', data.storageLocation)}
          {renderField('Operator Name', data.operatorName)}
        </tbody>
      </table>

      {data.notes && (
        <div className="mb-4">
          <h4 className="font-medium text-gray-700 mb-2">Notes</h4>
          <p className="text-sm border border-gray-300 p-2 bg-gray-50">{data.notes}</p>
        </div>
      )}
    </div>
  );
};
