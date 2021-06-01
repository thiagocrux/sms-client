/* PACIENTE */

export const patientMockedValues = {
  susCardNumber: '[NÚMERO DO CARTÃO DO SUS]',
  name: '[NOME]',
  cpf: '[CPF]',
  socialName: '[NOME SOCIAL]',
  birthDate: '1978-12-03',
  gender: 'Masculino',
  nationality: 'Brasileiro',
  phone: '[TELEFONE]',
  email: 'email@email.com',
  motherName: 'Fulana Detail',
  zipCode: '[CEP]',
  state: '[ESTADO]',
  city: '[CIDADE]',
  neighbourhood: '[BAIRRO]',
  street: '[RUA]',
  houseNumber: '[NÚMERO]',
  complement: '[COMPLEMENTO]',
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
  complement: '',
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

/* EXAME ############### */

export const examMockedValues = {
  quickTest: 'Não reagente',
  FTA_ABS: 'Reagente',
  firstVDRLDate: '1993-08-30',
  firstVDRLTitration: '[]',
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

export const monitoringMockedValues = {
  firstVDRLDate: '1917-03-08',
  firstVDRLTitration: '[TITULAÇÃO]',
  secondVDRLDate: '1917-03-08',
  secondVDRLTitration: '[TITULAÇÃO]',
  thirdVDRLDate: '1917-03-08',
  thirdVDRLTitration: '[TITULAÇÃO]',
  partnerTreatment: true,
  observations: '[OBSERVAÇÕES]',
};

export const monitoringInitialValues = {
  firstVDRLDate: '',
  firstVDRLTitration: '',
  secondVDRLDate: '',
  secondVDRLTitration: '',
  thirdVDRLDate: '',
  thirdVDRLTitration: '',
  partnerTreatment: false,
  observations: '',
};
