import { createContext, useState } from 'react';

const MOCK_PATIENTS = [
  {
    susCardNumber: '123456789',
    name: 'Arthos',
    cpf: '111111111',
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
  },
  {
    susCardNumber: '222222222',
    name: 'Porthos',
    cpf: '222222222',
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
  },
  {
    susCardNumber: '333333333',
    name: 'Aramis',
    cpf: '333333333',
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
  },
];

export const patientsContext = createContext();

const PatientsProvider = ({ children }) => {
  const [patients, setPatients] = useState(MOCK_PATIENTS);

  return (
    <patientsContext.Provider value={{ patients, setPatients }}>
      {children}
    </patientsContext.Provider>
  );
};

export default PatientsProvider;
