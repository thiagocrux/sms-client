import { createContext, useState } from 'react';

const MOCK_PATIENTS = [
  {
    id: 1,
    susCardNumber: '123456789',
    name: 'Arthos',
    cpf: '111111111',
    socialName: 'Arthos',
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
    id: 2,
    susCardNumber: '222222222',
    name: 'Porthos',
    cpf: '222222222',
    socialName: 'Porthos',
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
    id: 3,
    susCardNumber: '333333333',
    name: 'Aramis',
    cpf: '333333333',
    socialName: 'Aramis',
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
