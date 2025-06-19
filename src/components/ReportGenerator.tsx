
import React from 'react';
import { ReportData } from '@/types/reportTypes';
import SemenAnalysisReport from './report-sections/SemenAnalysisReport';
import SemenPreparationReport from './report-sections/SemenPreparationReport';
import { SemenFreezingReport } from './report-sections/SemenFreezingReport';
import { OocyteRetrievalReport } from './report-sections/OocyteRetrievalReport';
import { EmbryoTransferReport } from './report-sections/EmbryoTransferReport';

interface ReportGeneratorProps {
  data: ReportData;
  onClose: () => void;
}

export const ReportGenerator = ({ data, onClose }: ReportGeneratorProps) => {
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

            {/* Patient Information */}
            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
              <div>
                <h3 className="font-semibold text-blue-700 mb-2">PATIENT INFORMATION</h3>
                <div className="space-y-1">
                  <p><span className="font-medium">Patient ID:</span> {data.patientInfo.patientUniqueId || 'N/A'}</p>
                  <p><span className="font-medium">Male Patient:</span> {data.patientInfo.maleName || 'N/A'}</p>
                  <p><span className="font-medium">Age:</span> {data.patientInfo.maleAge || 'N/A'} years</p>
                  <p><span className="font-medium">Female Partner:</span> {data.patientInfo.femaleName || 'N/A'}</p>
                   <p><span className="font-medium">Female Partner Age:</span> {data.patientInfo.femaleAge || 'N/A'}</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-blue-700 mb-2">CLINICAL DETAILS</h3>
                <div className="space-y-1">
                  <p><span className="font-medium">Centre:</span> {data.patientInfo.centreName || 'N/A'}</p>
                  <p><span className="font-medium">Doctor:</span> {data.clinicalInfo.doctorName || 'N/A'}</p>
                  <p><span className="font-medium">Cycle:</span> {data.patientInfo.cycleNumber || 'N/A'}</p>
                  <p><span className="font-medium">Cycle Date:</span> {data.patientInfo.cycleDate || 'N/A'}</p>
                </div>
              </div>
            </div>

            {/* Sample Information */}
            {data.semenAnalysis && (
              <div className="mb-6">
                <h3 className="font-semibold text-blue-700 mb-2">SAMPLE INFORMATION</h3>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <p><span className="font-medium">Collection Date:</span> {data.semenAnalysis.sampleCollectionDate || 'N/A'}</p>
                  <p><span className="font-medium">Collection Time:</span> {data.semenAnalysis.sampleCollectionTime || 'N/A'}</p>
                  <p><span className="font-medium">Abstinence Period:</span> {data.semenAnalysis.abstinenceDays || 'N/A'} days</p>
                </div>
              </div>
            )}

            {/* Test Results */}
            {data.semenAnalysis && (
              <SemenAnalysisReport data={data.semenAnalysis} />
            )}
            {
              data.semenPreparation && (
                <SemenPreparationReport data={data.semenPreparation} />
              )
            }
            {
              data.semenFreezing && (
                <SemenFreezingReport data= {data.semenFreezing} />
              )
            }
            {
              data.oocyteRetrieval && (
                <OocyteRetrievalReport data={data.oocyteRetrieval} />
              )
            }
            {
              data.embryoTransfer && (
                <EmbryoTransferReport data={data.embryoTransfer} />
              )
            }

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
};
