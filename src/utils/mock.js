/* PACIENTE */

export const patientMockedValues = {
  susCardNumber: '136549846',
  name: 'Fulano Detail',
  cpf: '15623858989',
  socialName: 'Fulano',
  birthDate: '1978-12-03',
  gender: 'Masculino',
  nationality: 'Brasileiro',
  phone: '(87) 98804-6895',
  email: 'fulanodetail@email.com',
  motherName: 'Fulana Detail',
  zipCode: '56300000',
  state: 'Pernambuco',
  city: 'Petrolina',
  neighbourhood: 'Jardim São Paulo',
  street: 'Rua 49',
  houseNumber: '12',
};

export const patientInitialValues = {
  susCardNumber: '',
  name: '',
  cpf: '',
  socialName: '',
  birthDate: '',
  gender: '',
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
};

/* TRATAMENTO */

export const treatmentMockedValues = {
  medication: '[MEDICAÇÃO]',
  ubsLocation: '[LOCALIZAÇÃO DA UBS]',
  startDate: '2021-01-01',
  dosage: '[DOSAGEM]',
  observations: '[OBSERVAÇÕES]',
  partnerInfo: '[INFORMAÇÕES SOBRE PARCEIRO]',
};

export const treatmentInitialValues = {
  medication: '',
  ubsLocation: '',
  startDate: '',
  dosage: '',
  observations: '',
  partnerInfo: '',
};

/* EXAME */

export const examMockValues = {
  quickTest: 'Não reagente',
  FTA_ABS: 'Reagente',
  firstVDRLDate: '1993-08-30',
  firstVDRLTitration: 'Primeira',
  secondVDRLDate: '1993-08-31',
  secondVDRLTitration: 'Segunda',
  thirdVDRLDate: '1993-08-29',
  thirdVDRLTitration: 'Terceira',
  observationReferences: 'Colocar material dinâmico',
  onTreatment: true,
  onObservation: false,
};

export const examInitialValues = {
  quickTest: '',
  FTA_ABS: '',
  firstVDRLDate: '',
  firstVDRLTitration: '',
  secondVDRLDate: '',
  secondVDRLTitration: '',
  thirdVDRLDate: '',
  thirdVDRLTitration: '',
  observationReferences: '',
  onTreatment: false,
  onObservation: false,
};

/* MONITORAMENTO */

export const monitoringMockValues = {
  firstVDRLDate: '1917-03-08',
  secondVDRLDate: '1917-03-08',
  thirdVDRLDate: '1917-03-08',
  partnerTreatment: true,
  observations: 'Substituir por conteúdo dinâmico',
};
export const monitoringInitialValues = {
  firstVDRLDate: '',
  secondVDRLDate: '',
  thirdVDRLDate: '',
  partnerTreatment: false,
  observations: '',
};
