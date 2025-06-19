
export interface PatientInfo {
  patientUniqueId: string;
  femaleName: string;
  femaleAge: number;
  maleName: string;
  maleAge: number;
  cycleNumber: string;
  cycleDate: string;
  centreName: string;
  cycleType: string;
}

export interface ClinicalInfo {
  spermSource: string;
  doctorName: string;
  donorName: string;
  triggerTime: string;
  triggerType: string;
  triggerNameDose: string;
  stimulationProtocol: string;
  daysOfStimulation: number;
  drugName: string;
  bmi: number;
  amh: number;
  indication: string;
}

export interface SemenAnalysisData {
  sampleDate: string;
  sampleTime: string;
  abstinencePeriod: number;
  volume: number;
  ph: number;
  appearance: string;
  viscosity: string;
  liquefactionTime: number;
  concentration: number;
  totalCount: number;
  totalMotility: number;
  progressiveMotility: number;
  immotilePercent: number;
  morphologyPercent: number;
  roundCells: number;
  marTest: string;
  agglutination: string;
  comments: string;
}

export interface ReportData {
  patientInfo: PatientInfo;
  clinicalInfo: ClinicalInfo;
  semenAnalysis?: SemenAnalysisData;
  procedureType: string;
}
