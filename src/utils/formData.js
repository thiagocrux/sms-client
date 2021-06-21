/* FORM RESET VALUES */

export const userInitialValues = {
  name: '',
  cpf: '',
  role: '',
  workLocation: '',
  email: '',
  password: '',
  admin: '',
};

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

export const treatmentInitialValues = {
  medication: '',
  ubsLocation: '',
  startDate: '',
  dosage: '',
  observations: '',
  partnerInfo: '',
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

/* SELECT OPTIONS */

export const genderOptions = [
  'Agênero',
  'Cisgênero',
  'Transgênero',
  'Não-binário',
];

export const medicationOptions = ['Penicilina', 'Doxiciclina', 'Ceftriaxona'];

export const nationalityOptions = ['Brasileiro', 'Naturalizado', 'Outro'];

export const sexOptions = ['Feminino', 'Masculino', 'Intersexo'];

export const sexualityOptions = [
  'Assexual',
  'Bissexual',
  'Heterossexual',
  'Homossexual',
  'Outro',
  'Não informado',
];

export const trepTestResultOptions = ['Reagente', 'Não-reagente'];

export const trepTestTypeOptions = [
  'Teste rápido',
  'FTA-ABS IgM',
  'FTA-ABS IgG',
];

export const ubsOptions = [
  'CTA/SAE',
  'UBS Adão Nunes da Silva',
  'UBS Alto do Cocar',
  'UBS Alvaro Moreira Rocha',
  'UBS Granja de Alencar',
  'UBS Amaro Ivaldo de Castro Alves',
  'UBS Analia Batista',
  'UBS Beatriz Luz de Alencar Rocha',
  'UBS Bebedouro',
  'UBS Benedito Rodrigues Bonfim',
  'UBS Bernardino Campos Coelho',
  'UBS C1',
  'UBS Dr. Gaudêncion José do Nascimento',
  'UBS Dr. João Moreira',
  'UBS Dr. Manoel Possidio',
  'UBS Dra. Sinhá',
  'UBS Fernando Idalino',
  'UBS Gildevania de Oliveira Silva',
  'UBS Hildo Diniz da Silva',
  'UBS Isaac Coordeiro da Silva',
  'UBS Januário Ferreira Nunes',
  'UBS Jardim Amazonas',
  'UBS Jardim Petropolis',
  'UBS João Augusto da Silva',
  'UBS João José Araújo',
  'UBS Josefa Bispo de Almeida',
  'UBS Josefa Coelho',
  'UBS Josefa de Souza Silva',
  'UBS Julio Andrade Moreira',
  'UBS Juvencio Antonio Gama Filho',
  'UBS KM25',
  'UBS Leonor Elisa',
  'UBS Lia Bezerra',
  'UBS Mandacaru',
  'UBS Maria de Lourdes da Silva',
  'UBS Maria do Socorro Gil da Silva',
  'UBS Miguel de Lima Durando',
  'UBS N4-I',
  'UBS N4-II',
  'UBS N6',
  'UBS N7',
  'UBS N9',
  'UBS N11',
  'UBS Nova Petrolina',
  'UBS Osvaldo Coelho',
  'UBS Parteira Idalina dos Santos',
  'UBS Plinio Amorim',
  'UBS Ricardo Soares Coelho',
  'UBS Roza Maria Ribeiro',
  'UBS Santa Luzia',
  'UBS São Joaquim',
  'UBS São Jorge',
  'UBS São José',
  'UBS Simão Pedro Coelho',
  'UBS Tapera',
  'UBS Uruás',
];
