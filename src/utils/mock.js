/* USUÁRIO */

export const userInitialValues = {
  name: '',
  cpf: '',
  role: '',
  workLocation: '',
  email: '',
  password: '',
  admin: '',
};

/* PACIENTE */

export const patientInitialValues = {
  susCardNumber: '',
  name: '',
  cpf: '',
  socialName: '',
  birthDate: '',
  sex: '',
  gender: '',
  sexuality: '',
  nationality: '',
  phone: '',
  email: '',
  motherName: '',
  zipCode: '',
  state: '',
  city: '',
  neighbourhood: '',
  street: '',
  houseNumber: '',
  complement: '',
};

/* TRATAMENTO */

export const treatmentInitialValues = {
  medication: '',
  ubsLocation: '',
  startDate: '',
  dosage: '',
  observations: '',
  partnerInfo: '',
};

/* EXAME */

export const examInitialValues = {
  trepTestType: '',
  trepTestResult: '',
  trepTestDate: '',
  trepTestLocation: '',
  nonTrepTestVDRL: '',
  nonTrepTestTitration: '',
  nonTrepTestDate: '',
  refObservations: '',
  onTreatment: false,
  onMonitoring: false,
};

/* MONITORING */

export const monitoringInitialValues = {
  vdrl1Date: '',
  vdrl1Titration: '',
  vdrl2Date: '',
  vdrl2Titration: '',
  vdrl3Date: '',
  vdrl3Titration: '',
  partnerTreatment: false,
  observations: '',
};
