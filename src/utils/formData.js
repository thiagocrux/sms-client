/* FORM RESET VALUES */

export const userInitialValues = {
  name: '',
  cpf: '',
  professionalRecord: '',
  councilRegistration: '',
  role: '',
  workLocation: '',
  phone: '',
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
  fatherName: '',
  monitoringType: '',
  isDeceased: false,
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
  nonTrepOtherTest: '',
  nonTrepOtherTestDate: '',
  refObservations: '',
};

export const observationInitialValues = {
  observations: '',
  partnerTreatment: false,
};

export const notificationInitialValues = {
  sinan: '',
  observations: '',
};

/* SELECT OPTIONS */

export const genderOptions = [
  'Cisgênero',
  'Transgênero',
  'Não-binário',
  'Agênero',
  'Não informado',
];

export const monitoringTypeOptions = [
  'Sífilis adquirida',
  'Sífilis congênita',
  'Sífilis em gestante',
];

export const medicationOptions = ['Penicilina', 'Doxiciclina', 'Ceftriaxona'];

export const nationalityOptions = ['Brasileira', 'Naturalizada', 'Outra'];

export const raceOptions = [
  'Parda',
  'Branca',
  'Preta',
  'Indígena',
  'Amarela',
  'Não declarada',
];

export const schoolingOptions = [
  'Analfabeto',
  '1ª a 4ª série incompleta do EF (antigo primário ou 1º grau)',
  '4ª série completa do EF (antigo primário ou 1º grau)',
  '5ª a 8ª série incompleta do EF (antigo ginásio ou 1º grau)',
  'Ensino fundamental completo (antigo ginásio ou 1º grau)',
  'Ensino fundamental incompleto (antigo ginásio ou 1º grau)',
  'Ensino médio incompleto (antigo colegial ou 2º grau)',
  'Ensino médio completo (antigo colegial ou 2º grau)',
  'Educação superior incompleta',
  'Educação superior completa',
  'Não se aplica',
  'Não declarada',
];

export const sexOptions = [
  'Feminino',
  'Masculino',
  'Intersexo',
  'Não informado',
];

export const sexualityOptions = [
  'Heterossexual',
  'Homossexual',
  'Bissexual',
  'Assexual',
  'Outro',
  'Não informada',
];

export const stateOptions = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
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
