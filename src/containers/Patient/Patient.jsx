import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../components/Common/Button/Button';
import Divider from '../../components/Layout/Form/Divider/Divider';
import Field from '../../components/Layout/Form/Field/Field';
import Form from '../../components/Layout/Form/Form';
import Heading from '../../components/Layout/Heading/Heading';
import SubmitContainer from '../../components/Layout/Form/SubmitContainer/SubmitContainer';

import style from './Patient.module.css';

// FIXME: Delete when database is acessible.
const TEST_PATIENT_VALUES = {
  susCardNumber: '136549846',
  name: 'Fulano Detail',
  notificationType: 'Sífilis adquirida',
  socialName: 'Fulano',
  gender: 'Masculino',
  nationality: 'Brasileiro',
  phone: '(87) 98804-6895',
  email: 'fulanodetail@email.com',
  motherName: 'Fulana Detail',
  zipCode: '56300000',
  state: 'Pernambuco',
  city: 'Petrolina',
  neighbourhood: 'Rua 49',
  street: 'Jardim São Paulo',
  houseNumber: '12',
};

const INITIAL_PATIENT_VALUES = {
  susCardNumber: '',
  name: '',
  notificationType: '',
  socialName: '',
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

export default function Patient() {
  const [formType, setFormType] = useState('create');
  const [patientInformation, setPatientInformation] = useState(INITIAL_PATIENT_VALUES);
  const { patientID } = useParams();

  /* Input handlers */
  const handleSUSCardNumberInputChange = (event) =>
    setPatientInformation({ ...patientInformation, susCardNumber: event.target.value });

  const handleNameInputChange = (event) =>
    setPatientInformation({ ...patientInformation, name: event.target.value });

  const handleNotificationTypeInputChange = (event) =>
    setPatientInformation({ ...patientInformation, notificationType: event.target.value });

  const handleSocialNameInputChange = (event) =>
    setPatientInformation({ ...patientInformation, socialName: event.target.value });

  const handleGenderInputChange = (event) =>
    setPatientInformation({ ...patientInformation, gender: event.target.value });

  const handleNationalityInputChange = (event) =>
    setPatientInformation({ ...patientInformation, nationality: event.target.value });

  const handlePhoneInputChange = (event) =>
    setPatientInformation({ ...patientInformation, phone: event.target.value });

  const handleEmailInputChange = (event) =>
    setPatientInformation({ ...patientInformation, email: event.target.value });

  const handleMotherNameInputChange = (event) =>
    setPatientInformation({ ...patientInformation, motherName: event.target.value });

  const handleZipCodeInputChange = (event) =>
    setPatientInformation({ ...patientInformation, zipCode: event.target.value });

  const handleStateInputChange = (event) =>
    setPatientInformation({ ...patientInformation, state: event.target.value });

  const handleCityInputChange = (event) =>
    setPatientInformation({ ...patientInformation, city: event.target.value });

  const handleNeighbourhoodInputChange = (event) =>
    setPatientInformation({ ...patientInformation, neighbourhood: event.target.value });

  const handleStreetInputChange = (event) =>
    setPatientInformation({ ...patientInformation, street: event.target.value });

  const handleHouseNumberInputChange = (event) =>
    setPatientInformation({ ...patientInformation, houseNumber: event.target.value });

  /* Set the type of form on the first render */
  useEffect(() => {
    console.clear();
    console.log(`>> Component [PATIENT] mounted`);
    handleFormType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* LOG: Show all the submitted information on the console */
  useEffect(() => {
    if (patientInformation) {
      console.log(`FORM TYPE: ${formType}`);
      console.log(patientInformation);
    }
  }, [patientInformation, formType]);

  /* Check the existence of params and set the type of form */
  function handleFormType() {
    if (patientID && formType !== 'update') {
      setFormType('update');
      setInputValues();
      console.log(formType);
    } else if (!patientID && formType !== 'create') {
      setFormType('create');
      console.log(formType);
    }
  }

  /* Insert the values of the object in the inputs in case of an update */
  function setInputValues() {
    // FIXME: Get the data from the database and set the state with it.
    setPatientInformation(TEST_PATIENT_VALUES);
  }

  /* Save the input values in the state and then send to the database */
  function handleButtonClick(action) {
    if (action === 'submit') {
      /* TODO:
        1. Validate the data before saving it in the database.
        2. Send values to database, according to the request (CREATE or UPDATE).
      */
      console.log(patientInformation);
    } else if (action === 'cancel') {
      /* TODO:
        1. Create logic for the form abortion.
      */
      console.log('Action cancelled!');
    }
  }

  return (
    <>
      <Heading type="primary">
        {formType === 'update' ? 'Atualização' : 'Cadastro'} de paciente
      </Heading>
      <Form>
        <Divider>
          <Heading type="secondary">Dados do paciente</Heading>
          <div className={`${style['grid-container']} ${style['first-grid-container']}`}>
            <Field>
              <label htmlFor="susCardNumber">Código do SUS</label>
              <input
                name="susCardNumber"
                onChange={handleSUSCardNumberInputChange}
                value={patientInformation.susCardNumber}
                placeholder="Insira o número do cartão do SUS"
              />
            </Field>
            <Field>
              <label htmlFor="name">Nome</label>
              <input
                name="name"
                onChange={handleNameInputChange}
                value={patientInformation.name}
                placeholder="Insira o nome do paciente"
              />
            </Field>
            <Field>
              <label htmlFor="notificationType">Tipo de notificação</label>
              <select
                name="notificationType"
                onChange={handleNotificationTypeInputChange}
                value={patientInformation.notificationType}
              >
                <option value="" disabled selected hidden>
                  Selecione uma opção
                </option>
                <option value="Sífilis adquirida">Sífilis adquirida</option>
                <option value="Sífilis congênita">Sífilis congênita</option>
                <option value="Sífilis gestante">Sífilis gestante</option>
              </select>
            </Field>
            <Field>
              <label htmlFor="socialName">Nome social</label>
              <input
                name="socialName"
                onChange={handleSocialNameInputChange}
                value={patientInformation.socialName}
                placeholder="Insira o nome do paciente"
              />
            </Field>
            <Field>
              <label htmlFor="gender">Sexo</label>
              <select
                name="gender"
                onChange={handleGenderInputChange}
                value={patientInformation.gender}
              >
                <option value="" disabled selected hidden>
                  Selecione uma opção
                </option>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
                <option value="Outro">Outro</option>
              </select>
            </Field>
            <Field>
              <label htmlFor="nationality">Naturalidade</label>
              <select
                name="nationality"
                onChange={handleNationalityInputChange}
                value={patientInformation.nationality}
              >
                <option value="" disabled hidden>
                  Selecione uma opção
                </option>
                <option value="Brasileiro">Brasileiro</option>
                <option value="Naturalizado">Naturalizado</option>
                <option value="Outro">Outro</option>
              </select>
            </Field>
            <Field>
              <label htmlFor="phone">Telefone</label>
              <input
                name="phone"
                onChange={handlePhoneInputChange}
                value={patientInformation.phone}
                placeholder="Insira o telefone do paciente"
              />
            </Field>
            <Field>
              <label htmlFor="email">E-mail</label>
              <input
                name="email"
                onChange={handleEmailInputChange}
                value={patientInformation.email}
                type="email"
                placeholder="Insira o e-mail do paciente"
              />
            </Field>
            <Field>
              <label htmlFor="motherName">Nome da mãe do paciente</label>
              <input
                name="motherName"
                onChange={handleMotherNameInputChange}
                value={patientInformation.motherName}
                placeholder="Insira o nome da mãe do paciente"
              />
            </Field>
          </div>
        </Divider>
        <Divider>
          <Heading type="secondary">Endereço do paciente</Heading>
          <div className={`${style['grid-container']} ${style['second-grid-container']}`}>
            <Field>
              <label htmlFor="zipCode">CEP</label>
              <input
                name="zipCode"
                onChange={handleZipCodeInputChange}
                value={patientInformation.zipCode}
                placeholder="Insira o CEP da residência"
              />
            </Field>
            <Field>
              <label htmlFor="state">Estado</label>
              <input
                name="state"
                onChange={handleStateInputChange}
                value={patientInformation.state}
                placeholder="Insira o estado de residência"
              />
            </Field>
            <Field>
              <label htmlFor="city">Cidade</label>
              <input
                name="city"
                onChange={handleCityInputChange}
                value={patientInformation.city}
                placeholder="Insira a cidade de residência"
              />
            </Field>
            <Field>
              <label htmlFor="neighbourhood">Bairro</label>
              <input
                name="neighbourhood"
                onChange={handleNeighbourhoodInputChange}
                value={patientInformation.neighbourhood}
                placeholder="Insira o bairro de residência"
              />
            </Field>
            <Field>
              <label htmlFor="street">Logradouro</label>
              <input
                name="street"
                onChange={handleStreetInputChange}
                value={patientInformation.street}
                placeholder="Insira a rua de residência"
              />
            </Field>
            <Field>
              <label htmlFor="houseNumber">Número da residência</label>
              <input
                name="houseNumber"
                onChange={handleHouseNumberInputChange}
                value={patientInformation.houseNumber}
                placeholder="Insira o número da residência"
              />
            </Field>
          </div>
        </Divider>
        <SubmitContainer>
          <Button type="button" action="cancel" click={handleButtonClick}>
            Cancelar
          </Button>
          <Button type="button" action="submit" click={handleButtonClick}>
            {formType === 'create' ? 'Cadastrar' : 'Salvar'}
          </Button>
        </SubmitContainer>
      </Form>
    </>
  );
}
