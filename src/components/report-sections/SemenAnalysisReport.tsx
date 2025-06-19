export default function SemenAnalysisReport({data}){
    const getRefValue = (parameter: string) => {
    const referenceValues: Record<string, string> = {
      volume: '≥ 1.5 mL',
      ph: '7.2 - 8.0',
      concentration: '≥ 15 million/mL',
      totalCount: '≥ 39 million',
      totalMotility: '≥ 40%',
      progressiveMotility: '≥ 32%',
      morphologyPercent: '≥ 4%'
    };
    return referenceValues[parameter] || 'N/A';
  };

    return(
       <div className="mb-6">
                   <h3 className="font-semibold text-blue-700 mb-3">SEMEN PREPARATION</h3>
                
                {/* Physical Examination */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Physical Examination</h4>
                  <table className="w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-2 py-1 text-left">Parameter</th>
                        <th className="border border-gray-300 px-2 py-1 text-left">Result</th>
                        <th className="border border-gray-300 px-2 py-1 text-left">Reference Values</th>
                        <th className="border border-gray-300 px-2 py-1 text-left">Units</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1">Volume</td>
                        <td className="border border-gray-300 px-2 py-1">{data.sampleVolume || 'N/A'}</td>
                        <td className="border border-gray-300 px-2 py-1">{getRefValue('sampleVolume')}</td>
                        <td className="border border-gray-300 px-2 py-1">mL</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1">pH</td>
                        <td className="border border-gray-300 px-2 py-1">{data.ph || 'N/A'}</td>
                        <td className="border border-gray-300 px-2 py-1">{getRefValue('ph')}</td>
                        <td className="border border-gray-300 px-2 py-1">-</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1">Appearance</td>
                        <td className="border border-gray-300 px-2 py-1">{data.appearance || 'N/A'}</td>
                        <td className="border border-gray-300 px-2 py-1">Normal</td>
                        <td className="border border-gray-300 px-2 py-1">-</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1">Viscosity</td>
                        <td className="border border-gray-300 px-2 py-1">{data.viscosity || 'N/A'}</td>
                        <td className="border border-gray-300 px-2 py-1">Normal</td>
                        <td className="border border-gray-300 px-2 py-1">-</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1">Liquefaction Time</td>
                        <td className="border border-gray-300 px-2 py-1">{data.liquefactionTime || 'N/A'}</td>
                        <td className="border border-gray-300 px-2 py-1">≤ 60</td>
                        <td className="border border-gray-300 px-2 py-1">minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Microscopic Examination */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Microscopic Examination</h4>
                  <table className="w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-2 py-1 text-left">Parameter</th>
                        <th className="border border-gray-300 px-2 py-1 text-left">Result</th>
                        <th className="border border-gray-300 px-2 py-1 text-left">Reference Values</th>
                        <th className="border border-gray-300 px-2 py-1 text-left">Units</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1">Sperm Concentration</td>
                        <td className="border border-gray-300 px-2 py-1">{data.spermConcentration || 'N/A'}</td>
                        <td className="border border-gray-300 px-2 py-1">{getRefValue('spermConcentration')}</td>
                        <td className="border border-gray-300 px-2 py-1">million/mL</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1">Total Sperm Count</td>
                        <td className="border border-gray-300 px-2 py-1">{data.totalSpermCount || 'N/A'}</td>
                        <td className="border border-gray-300 px-2 py-1">{getRefValue('totalSpermCount')}</td>
                        <td className="border border-gray-300 px-2 py-1">million</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1">Total Motility</td>
                        <td className="border border-gray-300 px-2 py-1">{data.totalMotility || 'N/A'}</td>
                        <td className="border border-gray-300 px-2 py-1">{getRefValue('totalMotility')}</td>
                        <td className="border border-gray-300 px-2 py-1">%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1">Progressive Motility</td>
                        <td className="border border-gray-300 px-2 py-1">{data.progressiveMotility || 'N/A'}</td>
                        <td className="border border-gray-300 px-2 py-1">{getRefValue('progressiveMotility')}</td>
                        <td className="border border-gray-300 px-2 py-1">%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1">Normal Morphology</td>
                        <td className="border border-gray-300 px-2 py-1">{data.morphology || 'N/A'}</td>
                        <td className="border border-gray-300 px-2 py-1">{getRefValue('morphology')}</td>
                        <td className="border border-gray-300 px-2 py-1">%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Additional Information */}
                {data.comments && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Comments</h4>
                    <p className="text-sm border border-gray-300 p-2 bg-gray-50">{data.comments}</p>
                  </div>
                )}
              </div>
    )
}