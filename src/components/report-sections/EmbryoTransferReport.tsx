interface EmbryoTransferReportProps {
  data: Record<string, any>;
}

export const EmbryoTransferReport = ({ data }: EmbryoTransferReportProps) => {
  const renderField = (label: string, value: any, unit?: string) => (
    <tr>
      <td className="border border-gray-300 px-2 py-1">{label}</td>
      <td className="border border-gray-300 px-2 py-1">{value ?? 'N/A'}</td>
      <td className="border border-gray-300 px-2 py-1">{unit || '-'}</td>
    </tr>
  );

  return (
    <div className="mb-6">
      <h3 className="font-semibold text-blue-700 mb-3">EMBRYO TRANSFER REPORT</h3>
      <table className="w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-2 py-1 text-left">Parameter</th>
            <th className="border border-gray-300 px-2 py-1 text-left">Value</th>
            <th className="border border-gray-300 px-2 py-1 text-left">Unit</th>
          </tr>
        </thead>
        <tbody>
          {renderField('Transfer Date', data.transferDate)}
          {renderField('Transfer Time', data.transferTime)}
          {renderField('No. of Embryos Transferred', data.embryosTransferred)}
          {renderField('Embryo Stage', data.embryoStage)}
          {renderField('Embryo Grade', data.embryoGrade)}
          {renderField('Transfer Technique', data.transferTechnique)}
          {renderField('Operator Name', data.operatorName)}
          {renderField('Notes', data.notes)}
        </tbody>
      </table>
    </div>
  );
};
