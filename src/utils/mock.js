/* USUÁRIO */

export const userMockedValues = {
  name: '[NOME DO USUÁRIO]',
  cpf: '06518152658',
  role: 'Enfermeiro(a)',
  workLocation: 'UBS - José e Maria',
  email: 'fulanodetail@gmail.com',
  password: '15986285891166',
  admin: true,
};

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
  trepTestType: '[TIPO DE TESTE TREPONÊMICO]',
  trepTestResult: '[RESULTADO DO TESTE TREPONÊMICO]',
  trepTestDate: '1917-03-08',
  trepTestLocation: '[LOCAL DO TESTE TREPONÊMICO]',
  nonTrepTestVDRL: '[TESTE VDRL NÃO TREPONÊMICO]',
  nonTrepTestTitration: '[TITULAÇÃO DO TESTE NÃO TREPONÊMICO]',
  nonTrepTestDate: '1917-03-08',
  refObservations: '[OBSERVAÇÕES DE REFERÊNCIA E CONTRA-REFERÊNCIA]',
  onTreatment: true,
  onObservation: false,
};

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
  onObservation: false,
};

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
